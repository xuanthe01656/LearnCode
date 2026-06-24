const admin = require("firebase-admin");

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

  if (projectId && clientEmail && privateKey) {
    return { projectId, clientEmail, privateKey };
  }

  return null;
}

function getAdminApp() {
  if (admin.apps.length) return admin.app();

  const serviceAccount = parseServiceAccount();

  if (serviceAccount) {
    return admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: serviceAccount.projectId || process.env.FIREBASE_PROJECT_ID,
    });
  }

  return admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
}

const adminApp = getAdminApp();
const adminAuth = admin.auth(adminApp);
const adminDb = admin.firestore(adminApp);

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function parseBody(req) {
  if (typeof req.body === "object" && req.body !== null) return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return {};
}

function getBearerToken(req) {
  const header = req.headers.authorization || req.headers.Authorization || "";
  const match = String(header).match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : "";
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function requireFields(body, fields) {
  const missing = fields.filter((field) => !String(body[field] || "").trim());
  if (missing.length > 0) {
    const error = new Error(`Missing fields: ${missing.join(", ")}`);
    error.status = 400;
    error.code = "missing_fields";
    throw error;
  }
}

async function getUserProfile(uid) {
  const snap = await adminDb.collection("users").doc(uid).get();
  return snap.exists ? snap.data() : null;
}

async function verifyRequestUser(req) {
  const token = getBearerToken(req);
  if (!token) {
    const error = new Error("Missing Authorization bearer token.");
    error.status = 401;
    error.code = "missing_token";
    throw error;
  }

  const decoded = await adminAuth.verifyIdToken(token, true);
  const profile = await getUserProfile(decoded.uid);

  return { decoded, profile };
}

async function assertAdmin(req) {
  const { decoded, profile } = await verifyRequestUser(req);
  const role = decoded.role || profile?.role;
  const status = profile?.status || "active";

  if (role !== "admin" || status === "disabled") {
    const error = new Error("Admin permission is required.");
    error.status = 403;
    error.code = "admin_required";
    throw error;
  }

  return { decoded, profile };
}

function handleApiError(res, error) {
  const status = error.status || 500;
  return sendJson(res, status, {
    error: error.message || "Server error",
    code: error.code || "server_error",
  });
}

module.exports = {
  admin,
  adminAuth,
  adminDb,
  assertAdmin,
  getBearerToken,
  getUserProfile,
  handleApiError,
  normalizeEmail,
  parseBody,
  requireFields,
  sendJson,
  verifyRequestUser,
};
