/*
 * Server-only Firebase Admin helpers for Vercel API routes.
 * Do not import this file from src/ frontend code.
 *
 * This version uses the modular Firebase Admin SDK imports:
 *   firebase-admin/app
 *   firebase-admin/auth
 *   firebase-admin/firestore
 *
 * It intentionally avoids admin.credential.cert(...) because some deployed
 * builds can resolve firebase-admin in a shape where admin.credential is
 * undefined, which crashes the serverless function before it can return JSON.
 */

let cachedAppModule = null;
let cachedAuthModule = null;
let cachedFirestoreModule = null;
let cachedApp = null;
let cachedAuth = null;
let cachedDb = null;

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function apiError(status, code, message, details) {
  const error = new Error(message || code || "API error");
  error.status = status || 500;
  error.code = code || "api_error";
  if (details !== undefined) error.details = details;
  return error;
}

function loadAppModule() {
  if (cachedAppModule) return cachedAppModule;

  try {
    cachedAppModule = require("firebase-admin/app");
  } catch (error) {
    throw apiError(
      500,
      "firebase_admin_not_installed",
      "Server package firebase-admin is not installed. Run: npm install firebase-admin",
      { originalCode: error.code, originalMessage: error.message }
    );
  }

  const required = ["initializeApp", "getApps", "getApp", "cert"];
  const missing = required.filter((key) => typeof cachedAppModule[key] !== "function");

  if (missing.length > 0) {
    throw apiError(
      500,
      "firebase_admin_app_import_invalid",
      `firebase-admin/app import is invalid. Missing: ${missing.join(", ")}. Check firebase-admin version and deployment bundle.`,
      { missing }
    );
  }

  return cachedAppModule;
}

function loadAuthModule() {
  if (cachedAuthModule) return cachedAuthModule;

  try {
    cachedAuthModule = require("firebase-admin/auth");
  } catch (error) {
    throw apiError(
      500,
      "firebase_admin_auth_import_failed",
      "Cannot import firebase-admin/auth. Check firebase-admin installation.",
      { originalCode: error.code, originalMessage: error.message }
    );
  }

  if (typeof cachedAuthModule.getAuth !== "function") {
    throw apiError(500, "firebase_admin_auth_import_invalid", "firebase-admin/auth does not export getAuth().");
  }

  return cachedAuthModule;
}

function loadFirestoreModule() {
  if (cachedFirestoreModule) return cachedFirestoreModule;

  try {
    cachedFirestoreModule = require("firebase-admin/firestore");
  } catch (error) {
    throw apiError(
      500,
      "firebase_admin_firestore_import_failed",
      "Cannot import firebase-admin/firestore. Check firebase-admin installation.",
      { originalCode: error.code, originalMessage: error.message }
    );
  }

  if (typeof cachedFirestoreModule.getFirestore !== "function") {
    throw apiError(500, "firebase_admin_firestore_import_invalid", "firebase-admin/firestore does not export getFirestore().");
  }

  return cachedFirestoreModule;
}

function stripWrappingQuotes(value) {
  const text = String(value || "").trim();
  if (
    (text.startsWith('"') && text.endsWith('"')) ||
    (text.startsWith("'") && text.endsWith("'"))
  ) {
    return text.slice(1, -1);
  }
  return text;
}

function normalizePrivateKey(value) {
  const unquoted = stripWrappingQuotes(value);
  return unquoted.replace(/\\n/g, "\n");
}

function normalizeServiceAccount(raw, sourceName) {
  if (!raw || typeof raw !== "object") {
    throw apiError(500, "invalid_service_account", `${sourceName} is not a valid object.`);
  }

  const projectId = raw.projectId || raw.project_id || process.env.FIREBASE_PROJECT_ID;
  const clientEmail = raw.clientEmail || raw.client_email || process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = normalizePrivateKey(raw.privateKey || raw.private_key || process.env.FIREBASE_PRIVATE_KEY || "");

  const missing = [];
  if (!projectId) missing.push("projectId/project_id");
  if (!clientEmail) missing.push("clientEmail/client_email");
  if (!privateKey) missing.push("privateKey/private_key");

  if (missing.length > 0) {
    throw apiError(
      500,
      "invalid_service_account",
      `${sourceName} is missing required fields: ${missing.join(", ")}.`,
      { missing }
    );
  }

  return {
    projectId,
    clientEmail,
    privateKey,
  };
}

function serviceAccountFromBase64() {
  const encoded = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
  if (!encoded) return null;

  try {
    const json = Buffer.from(String(encoded).trim(), "base64").toString("utf8");
    return normalizeServiceAccount(JSON.parse(json), "FIREBASE_SERVICE_ACCOUNT_BASE64");
  } catch (error) {
    if (error.status) throw error;

    throw apiError(
      500,
      "invalid_service_account_base64",
      "FIREBASE_SERVICE_ACCOUNT_BASE64 is not a valid base64 encoded Firebase service account JSON.",
      { originalMessage: error.message }
    );
  }
}

function serviceAccountFromJson() {
  const json = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!json) return null;

  try {
    return normalizeServiceAccount(JSON.parse(json), "FIREBASE_SERVICE_ACCOUNT_JSON");
  } catch (error) {
    if (error.status) throw error;

    throw apiError(
      500,
      "invalid_service_account_json",
      "FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON.",
      { originalMessage: error.message }
    );
  }
}

function serviceAccountFromSeparateEnv() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId && !clientEmail && !privateKey) return null;

  const missing = [];
  if (!projectId) missing.push("FIREBASE_PROJECT_ID");
  if (!clientEmail) missing.push("FIREBASE_CLIENT_EMAIL");
  if (!privateKey) missing.push("FIREBASE_PRIVATE_KEY");

  if (missing.length > 0) {
    throw apiError(
      500,
      "missing_firebase_admin_env",
      `Missing Firebase Admin environment variables: ${missing.join(", ")}.`,
      { missing }
    );
  }

  return normalizeServiceAccount(
    { projectId, clientEmail, privateKey },
    "FIREBASE_PROJECT_ID + FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY"
  );
}

function getServiceAccount() {
  return serviceAccountFromBase64() || serviceAccountFromJson() || serviceAccountFromSeparateEnv();
}

function getAdminApp() {
  if (cachedApp) return cachedApp;

  const { initializeApp, getApps, getApp, cert, applicationDefault } = loadAppModule();

  if (getApps().length > 0) {
    cachedApp = getApp();
    return cachedApp;
  }

  const serviceAccount = getServiceAccount();

  try {
    if (serviceAccount) {
      cachedApp = initializeApp({
        credential: cert(serviceAccount),
        projectId: serviceAccount.projectId,
      });
      return cachedApp;
    }

    if (typeof applicationDefault === "function") {
      cachedApp = initializeApp({
        credential: applicationDefault(),
        projectId: process.env.FIREBASE_PROJECT_ID,
      });
      return cachedApp;
    }

    throw apiError(
      500,
      "firebase_admin_not_configured",
      "Firebase Admin credentials are not configured. Set FIREBASE_SERVICE_ACCOUNT_BASE64 or FIREBASE_PROJECT_ID + FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY in Vercel Environment Variables."
    );
  } catch (error) {
    if (error.status) throw error;

    throw apiError(
      500,
      "firebase_admin_init_failed",
      "Firebase Admin SDK could not be initialized. Check service account credentials and private key formatting.",
      { originalCode: error.code, originalMessage: error.message }
    );
  }
}

function getAdminAuth() {
  if (cachedAuth) return cachedAuth;
  const { getAuth } = loadAuthModule();
  cachedAuth = getAuth(getAdminApp());
  return cachedAuth;
}

function getAdminDb() {
  if (cachedDb) return cachedDb;
  const { getFirestore } = loadFirestoreModule();
  cachedDb = getFirestore(getAdminApp());
  return cachedDb;
}

function getAdminFirestore() {
  const firestore = loadFirestoreModule();
  return {
    FieldValue: firestore.FieldValue,
    Timestamp: firestore.Timestamp,
  };
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

async function parseBody(req) {
  if (req.body && typeof req.body === "object") return req.body;

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body || "{}");
    } catch {
      throw apiError(400, "invalid_json", "Request body must be valid JSON.");
    }
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(Buffer.from(chunk));
  const raw = Buffer.concat(chunks).toString("utf8");

  if (!raw.trim()) return {};

  try {
    return JSON.parse(raw);
  } catch {
    throw apiError(400, "invalid_json", "Request body must be valid JSON.");
  }
}

function requireFields(body, fields) {
  const missing = fields.filter((field) => {
    const value = body?.[field];
    return value === undefined || value === null || String(value).trim() === "";
  });

  if (missing.length > 0) {
    throw apiError(400, "missing_required_fields", `Missing required fields: ${missing.join(", ")}.`, { missing });
  }
}

function getBearerToken(req) {
  const header = req.headers?.authorization || req.headers?.Authorization || "";
  const match = String(header).match(/^Bearer\s+(.+)$/i);

  if (!match) {
    throw apiError(401, "missing_auth_token", "Missing Authorization Bearer token.");
  }

  return match[1].trim();
}

function hasRole(decoded, role) {
  return decoded?.role === role || decoded?.[role] === true;
}

async function getUserProfile(uid) {
  const snap = await getAdminDb().collection("users").doc(uid).get();
  return snap.exists ? snap.data() : null;
}

async function assertAuthenticated(req) {
  const token = getBearerToken(req);

  try {
    const decoded = await getAdminAuth().verifyIdToken(token, true);
    const profile = await getUserProfile(decoded.uid).catch(() => null);

    if (profile?.status === "disabled" || decoded.status === "disabled") {
      throw apiError(403, "account_disabled", "This account has been disabled.");
    }

    return { decoded, profile };
  } catch (error) {
    if (error.status) throw error;

    throw apiError(
      401,
      "invalid_auth_token",
      "Invalid or expired Firebase ID token. Please sign in again.",
      { originalCode: error.code, originalMessage: error.message }
    );
  }
}

async function assertAdmin(req) {
  const context = await assertAuthenticated(req);
  const { decoded, profile } = context;

  const claimIsAdmin = hasRole(decoded, "admin");
  const profileIsAdmin = profile?.role === "admin";

  if (!claimIsAdmin && !profileIsAdmin) {
    throw apiError(
      403,
      "admin_required",
      "Only admin accounts can perform this action. If this account was just promoted, sign out and sign in again."
    );
  }

  return context;
}

function mapKnownError(error) {
  const code = error?.code || "";

  if (code === "auth/email-already-exists") {
    return apiError(409, "email_already_exists", "This email is already used by another account.");
  }

  if (code === "auth/invalid-email") {
    return apiError(400, "invalid_email", "Email address is invalid.");
  }

  if (code === "auth/invalid-password" || code === "auth/weak-password") {
    return apiError(400, "weak_password", "Password is invalid or too weak.");
  }

  if (code === "auth/uid-already-exists") {
    return apiError(409, "uid_already_exists", "UID already exists.");
  }

  if (code === "permission-denied" || code === 7) {
    return apiError(403, "permission_denied", "Permission denied.");
  }

  return error;
}

function handleApiError(res, originalError) {
  const error = mapKnownError(originalError);
  const status = Number(error?.status || error?.statusCode || 500);
  const safeStatus = status >= 400 && status < 600 ? status : 500;

  const body = {
    error: error?.message || "Internal server error.",
    code: error?.code || "internal_server_error",
  };

  if (process.env.NODE_ENV !== "production") {
    body.details = error?.details || null;
    body.stack = error?.stack || null;
  }

  console.error("[api]", body.code, body.error, error?.details || originalError);
  return sendJson(res, safeStatus, body);
}

module.exports = {
  apiError,
  assertAdmin,
  assertAuthenticated,
  getAdminAuth,
  getAdminDb,
  getAdminFirestore,
  handleApiError,
  hasRole,
  normalizeEmail,
  parseBody,
  requireFields,
  sendJson,
};
