import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile as updateFirebaseProfile,
} from "firebase/auth";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db, googleProvider } from "../../firebase.js";
import { USER_ROLES, USER_STATUS } from "../../constants/roles.js";

const DEFAULT_REGISTER_STUDENT_ENDPOINT = "/api/auth/register-student";

function getRegisterStudentEndpoint() {
  return import.meta.env?.VITE_REGISTER_STUDENT_ENDPOINT || DEFAULT_REGISTER_STUDENT_ENDPOINT;
}

function toIsoDate(value) {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (value instanceof Date) return value.toISOString();
  if (typeof value.toDate === "function") return value.toDate().toISOString();
  if (typeof value.seconds === "number") return new Date(value.seconds * 1000).toISOString();
  return null;
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isGmailAddress(email) {
  return normalizeEmail(email).endsWith("@gmail.com");
}

function authError(code, message, details = null) {
  const error = new Error(message || code);
  error.code = code;
  error.details = details;
  return error;
}

function cleanUserProfile(firebaseUser, profile = {}, claims = {}) {
  if (!firebaseUser) return null;

  const role = profile.role || claims.role || USER_ROLES.student;
  const status = profile.status || USER_STATUS.active;

  return {
    id: firebaseUser.uid,
    uid: firebaseUser.uid,
    email: normalizeEmail(profile.email || firebaseUser.email),
    name: profile.name || firebaseUser.displayName || firebaseUser.email || "Learner",
    photoURL: profile.photoURL || firebaseUser.photoURL || "",
    role,
    status,
    learnerGroup: profile.learnerGroup || "student",
    grade: profile.grade || "",
    school: profile.school || "",
    phone: profile.phone || "",
    bio: profile.bio || "",
    authProvider: profile.authProvider || profile.provider || "firebase",
    emailVerified: Boolean(profile.emailVerified ?? firebaseUser.emailVerified),
    createdAt: toIsoDate(profile.createdAt) || firebaseUser.metadata?.creationTime || null,
    updatedAt: toIsoDate(profile.updatedAt),
    lastLoginAt: toIsoDate(profile.lastLoginAt) || firebaseUser.metadata?.lastSignInTime || null,
    claims,
  };
}

async function readUserProfile(firebaseUser, { forceRefreshToken = false } = {}) {
  if (!firebaseUser) return null;

  const tokenResult = await firebaseUser.getIdTokenResult(forceRefreshToken);
  const snap = await getDoc(doc(db, "users", firebaseUser.uid));

  if (!snap.exists()) {
    return cleanUserProfile(firebaseUser, {}, tokenResult.claims || {});
  }

  return cleanUserProfile(firebaseUser, snap.data(), tokenResult.claims || {});
}

async function requireCompleteProfile(firebaseUser, options = {}) {
  const profile = await readUserProfile(firebaseUser, options);

  if (!profile?.role) {
    throw authError("missing_role", "This account does not have a role assigned.");
  }

  if (profile.status === USER_STATUS.disabled) {
    await signOut(auth);
    throw authError("account_disabled", "This account has been disabled.");
  }

  return profile;
}

async function callJson(endpoint, body) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  let payload;
  try {
    payload = await response.json();
  } catch {
    payload = { error: "Invalid server response." };
  }

  if (!response.ok) {
    throw authError(payload?.code || "server_error", payload?.error || payload?.message || "Server request failed.", payload);
  }

  return payload;
}

function getAllowedProfileUpdates(role, updates) {
  const base = {
    name: String(updates.name || "").trim(),
    phone: String(updates.phone || "").trim(),
    updatedAt: serverTimestamp(),
  };

  if (role === USER_ROLES.student) {
    return {
      ...base,
      learnerGroup: String(updates.learnerGroup || "student"),
      grade: String(updates.grade || ""),
      school: String(updates.school || "").trim(),
      parentName: String(updates.parentName || "").trim(),
    };
  }

  return {
    ...base,
    bio: String(updates.bio || "").trim(),
  };
}

export const firebaseAuthProvider = {
  id: "firebase",

  subscribe(callback, onError) {
    return onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        if (!firebaseUser) {
          callback(null);
          return;
        }

        try {
          const profile = await requireCompleteProfile(firebaseUser, { forceRefreshToken: true });
          callback(profile);
        } catch (error) {
          if (onError) onError(error);
          callback(null);
        }
      },
      (error) => {
        if (onError) onError(error);
        callback(null);
      }
    );
  },

  async getCurrentUser() {
    return auth.currentUser ? requireCompleteProfile(auth.currentUser) : null;
  },

  async loginWithEmail({ email, password }) {
    await setPersistence(auth, browserLocalPersistence);
    const credential = await signInWithEmailAndPassword(auth, normalizeEmail(email), password);
    return requireCompleteProfile(credential.user, { forceRefreshToken: true });
  },

  async login(credentials) {
    return this.loginWithEmail(credentials);
  },

  async loginWithGoogleStudent({ learnerGroup = "student" } = {}) {
    await setPersistence(auth, browserLocalPersistence);
    const credential = await signInWithPopup(auth, googleProvider);

    if (!credential.user?.emailVerified) {
      await signOut(auth);
      throw authError("email_not_verified", "Please use a verified Gmail account.");
    }

    if (!isGmailAddress(credential.user.email)) {
      await signOut(auth);
      throw authError("gmail_required", "Student registration requires a @gmail.com account.");
    }

    const idToken = await credential.user.getIdToken(true);
    const payload = await callJson(getRegisterStudentEndpoint(), {
      idToken,
      learnerGroup,
    });

    await credential.user.getIdToken(true);
    return cleanUserProfile(credential.user, payload.user || {}, { role: USER_ROLES.student });
  },

  async registerStudentWithGoogle(payload = {}) {
    return this.loginWithGoogleStudent(payload);
  },

  async register() {
    throw authError("registration_restricted", "Only student Gmail registration is available. Admin and teacher accounts are created by administrators.");
  },

  async updateProfile(updates) {
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) throw authError("not_authenticated", "You must be signed in.");

    const current = await requireCompleteProfile(firebaseUser);
    const allowedUpdates = getAllowedProfileUpdates(current.role, updates);

    if (!allowedUpdates.name) {
      throw authError("name_required", "Name is required.");
    }

    await updateDoc(doc(db, "users", firebaseUser.uid), allowedUpdates);
    await updateFirebaseProfile(firebaseUser, { displayName: allowedUpdates.name });

    const refreshed = await readUserProfile(firebaseUser, { forceRefreshToken: true });
    return refreshed;
  },

  async ensureOwnStudentProfile(defaults = {}) {
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) throw authError("not_authenticated", "You must be signed in.");

    const userRef = doc(db, "users", firebaseUser.uid);
    const snap = await getDoc(userRef);

    if (snap.exists()) return readUserProfile(firebaseUser);

    const payload = {
      uid: firebaseUser.uid,
      email: normalizeEmail(firebaseUser.email),
      name: firebaseUser.displayName || firebaseUser.email || "Learner",
      photoURL: firebaseUser.photoURL || "",
      role: USER_ROLES.student,
      status: USER_STATUS.active,
      learnerGroup: defaults.learnerGroup || "student",
      authProvider: "google",
      emailVerified: Boolean(firebaseUser.emailVerified),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      lastLoginAt: serverTimestamp(),
    };

    await setDoc(userRef, payload, { merge: true });
    return readUserProfile(firebaseUser);
  },

  async getIdToken(forceRefresh = false) {
    if (!auth.currentUser) throw authError("not_authenticated", "You must be signed in.");
    return auth.currentUser.getIdToken(forceRefresh);
  },

  async logout() {
    await signOut(auth);
  },
};
