import admin from "firebase-admin";

function parseServiceAccount() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
    const json = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, "base64").toString("utf8");
    return JSON.parse(json);
  }

  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Missing Firebase Admin credentials. Set FIREBASE_SERVICE_ACCOUNT_BASE64 or FIREBASE_PROJECT_ID/FIREBASE_CLIENT_EMAIL/FIREBASE_PRIVATE_KEY.");
  }

  return { projectId, clientEmail, privateKey };
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function getArg(name, fallback = "") {
  const prefix = `--${name}=`;
  const item = process.argv.find((arg) => arg.startsWith(prefix));
  return item ? item.slice(prefix.length) : fallback;
}

const serviceAccount = parseServiceAccount();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.projectId || process.env.FIREBASE_PROJECT_ID,
  });
}

const auth = admin.auth();
const db = admin.firestore();

const email = normalizeEmail(getArg("email", process.env.ADMIN_EMAIL));
const password = getArg("password", process.env.ADMIN_PASSWORD);
const name = getArg("name", process.env.ADMIN_NAME || "System Admin");

if (!email) throw new Error("Admin email is required. Use --email=admin@example.com or ADMIN_EMAIL.");
if (!password || password.length < 8) throw new Error("Admin password must be at least 8 characters. Use --password=... or ADMIN_PASSWORD.");

async function getOrCreateAdmin() {
  try {
    return await auth.getUserByEmail(email);
  } catch (error) {
    if (error.code !== "auth/user-not-found") throw error;
    return auth.createUser({
      email,
      password,
      displayName: name,
      emailVerified: true,
      disabled: false,
    });
  }
}

const user = await getOrCreateAdmin();

await auth.updateUser(user.uid, {
  displayName: name,
  password,
  disabled: false,
});

await auth.setCustomUserClaims(user.uid, {
  role: "admin",
  status: "active",
  roleVersion: 1,
});

await db.collection("users").doc(user.uid).set(
  {
    uid: user.uid,
    email,
    name,
    role: "admin",
    status: "active",
    authProvider: "password",
    emailVerified: true,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    createdBy: "bootstrap-script",
  },
  { merge: true }
);

console.log(`Admin account is ready: ${email} (${user.uid})`);
console.log("Sign in once, then refresh the browser if the new custom claim is not visible immediately.");
