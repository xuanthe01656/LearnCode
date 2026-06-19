const USERS_STORAGE_KEY = "python-thinking-test:auth:users:v1";
const SESSION_STORAGE_KEY = "python-thinking-test:auth:session:v1";

const DEMO_ACCOUNT = {
  name: "Demo Learner",
  email: "demo@python-thinking.test",
  password: "Demo@123456",
  learnerGroup: "beginner",
};

function getStorage() {
  if (typeof window === "undefined") return null;
  return window.localStorage;
}

function readJson(key, fallback) {
  const storage = getStorage();
  if (!storage) return fallback;

  try {
    const raw = storage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn(`[auth] Could not parse ${key}. Resetting value.`, error);
    storage.removeItem(key);
    return fallback;
  }
}

function writeJson(key, value) {
  const storage = getStorage();
  if (!storage) return;
  storage.setItem(key, JSON.stringify(value));
}

function removeItem(key) {
  const storage = getStorage();
  if (!storage) return;
  storage.removeItem(key);
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function createId(prefix = "user") {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `${prefix}_${crypto.randomUUID()}`;
  }

  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function createSalt() {
  if (typeof crypto === "undefined" || !crypto.getRandomValues) {
    return `${Date.now()}_${Math.random().toString(36).slice(2)}`;
  }

  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function sha256(value) {
  if (
    typeof crypto === "undefined" ||
    !crypto.subtle ||
    typeof TextEncoder === "undefined"
  ) {
    const error = new Error("Web Crypto API is not available in this browser.");
    error.code = "crypto_unavailable";
    throw error;
  }

  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

async function hashPassword(password, salt) {
  return sha256(`${salt}:${password}`);
}

function getUsers() {
  const users = readJson(USERS_STORAGE_KEY, []);
  return Array.isArray(users) ? users : [];
}

function saveUsers(users) {
  writeJson(USERS_STORAGE_KEY, users);
}

function sanitizeUser(user) {
  if (!user) return null;

  const { passwordHash, passwordSalt, ...safeUser } = user;
  return safeUser;
}

function createSession(userId, remember = true) {
  const now = new Date().toISOString();
  const expiresAt = remember
    ? Date.now() + 1000 * 60 * 60 * 24 * 30
    : Date.now() + 1000 * 60 * 60 * 12;

  const session = {
    id: createId("session"),
    userId,
    remember: Boolean(remember),
    createdAt: now,
    expiresAt,
  };

  writeJson(SESSION_STORAGE_KEY, session);
  return session;
}

function getSession() {
  const session = readJson(SESSION_STORAGE_KEY, null);

  if (!session?.userId || !session?.expiresAt) {
    return null;
  }

  if (Date.now() > session.expiresAt) {
    removeItem(SESSION_STORAGE_KEY);
    return null;
  }

  return session;
}

function authError(code, message) {
  const error = new Error(message || code);
  error.code = code;
  return error;
}

async function ensureDemoAccount() {
  const email = normalizeEmail(DEMO_ACCOUNT.email);
  const users = getUsers();
  const exists = users.some((user) => user.email === email);

  if (exists) return;

  const passwordSalt = createSalt();
  const passwordHash = await hashPassword(DEMO_ACCOUNT.password, passwordSalt);
  const now = new Date().toISOString();

  users.push({
    id: createId("user"),
    provider: "local",
    name: DEMO_ACCOUNT.name,
    email,
    role: "learner",
    learnerGroup: DEMO_ACCOUNT.learnerGroup,
    avatarColor: "indigo",
    emailVerified: true,
    passwordSalt,
    passwordHash,
    createdAt: now,
    updatedAt: now,
    lastLoginAt: null,
  });

  saveUsers(users);
}

export const localAuthProvider = {
  id: "local",

  async getCurrentUser() {
    await ensureDemoAccount();

    const session = getSession();
    if (!session) return null;

    const users = getUsers();
    const user = users.find((item) => item.id === session.userId);

    if (!user) {
      removeItem(SESSION_STORAGE_KEY);
      return null;
    }

    return sanitizeUser(user);
  },

  async login({ email, password, remember = true }) {
    await ensureDemoAccount();

    const normalizedEmail = normalizeEmail(email);
    const users = getUsers();
    const userIndex = users.findIndex((item) => item.email === normalizedEmail);

    if (userIndex < 0) {
      throw authError("invalid_credentials", "Invalid email or password.");
    }

    const user = users[userIndex];
    const passwordHash = await hashPassword(password, user.passwordSalt);

    if (passwordHash !== user.passwordHash) {
      throw authError("invalid_credentials", "Invalid email or password.");
    }

    const now = new Date().toISOString();
    users[userIndex] = {
      ...user,
      lastLoginAt: now,
      updatedAt: now,
    };

    saveUsers(users);
    createSession(user.id, remember);

    return sanitizeUser(users[userIndex]);
  },

  async register({ name, email, password, learnerGroup = "beginner" }) {
    await ensureDemoAccount();

    const normalizedEmail = normalizeEmail(email);
    const users = getUsers();
    const exists = users.some((item) => item.email === normalizedEmail);

    if (exists) {
      throw authError("email_exists", "This email is already registered.");
    }

    const now = new Date().toISOString();
    const passwordSalt = createSalt();
    const passwordHash = await hashPassword(password, passwordSalt);

    const user = {
      id: createId("user"),
      provider: "local",
      name: String(name || "").trim(),
      email: normalizedEmail,
      role: "learner",
      learnerGroup,
      avatarColor: "indigo",
      emailVerified: true,
      passwordSalt,
      passwordHash,
      createdAt: now,
      updatedAt: now,
      lastLoginAt: now,
    };

    saveUsers([...users, user]);
    createSession(user.id, true);

    return sanitizeUser(user);
  },

  async updateProfile(updates) {
    const session = getSession();

    if (!session) {
      throw authError("not_authenticated", "User is not signed in.");
    }

    const users = getUsers();
    const userIndex = users.findIndex((item) => item.id === session.userId);

    if (userIndex < 0) {
      removeItem(SESSION_STORAGE_KEY);
      throw authError("user_not_found", "User was not found.");
    }

    const allowedUpdates = {
      name: updates.name,
      learnerGroup: updates.learnerGroup,
      avatarColor: updates.avatarColor,
      updatedAt: new Date().toISOString(),
    };

    Object.keys(allowedUpdates).forEach((key) => {
      if (allowedUpdates[key] === undefined || allowedUpdates[key] === "") {
        delete allowedUpdates[key];
      }
    });

    users[userIndex] = {
      ...users[userIndex],
      ...allowedUpdates,
    };

    saveUsers(users);
    return sanitizeUser(users[userIndex]);
  },

  async logout() {
    removeItem(SESSION_STORAGE_KEY);
  },
};

export { DEMO_ACCOUNT };
