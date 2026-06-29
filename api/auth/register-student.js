const {
  getAdminAuth,
  getAdminDb,
  getAdminFirestore,
  handleApiError,
  normalizeEmail,
  parseBody,
  requireFields,
  sendJson,
} = require("../_utils/firebaseAdmin.js");

function isGmailAddress(email) {
  return normalizeEmail(email).endsWith("@gmail.com");
}

function safeLearnerGroup(value) {
  const allowed = new Set(["student", "beginner", "working-adult", "career-switcher"]);
  return allowed.has(value) ? value : "student";
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed", code: "method_not_allowed" });
  }

  try {
    const body = await parseBody(req);
    requireFields(body, ["idToken"]);

    const auth = getAdminAuth();
    const db = getAdminDb();
    const { FieldValue } = getAdminFirestore();

    const decoded = await auth.verifyIdToken(String(body.idToken), true);
    const uid = decoded.uid;
    const userRecord = await auth.getUser(uid);
    const email = normalizeEmail(userRecord.email || decoded.email);
    const signInProvider = decoded.firebase?.sign_in_provider || "";

    if (signInProvider !== "google.com") {
      return sendJson(res, 403, {
        error: "Student registration requires Google sign-in.",
        code: "google_required",
      });
    }

    if (!email || !isGmailAddress(email)) {
      return sendJson(res, 403, {
        error: "Student registration requires a @gmail.com account.",
        code: "gmail_required",
      });
    }

    if (!userRecord.emailVerified) {
      return sendJson(res, 403, {
        error: "A verified Gmail account is required.",
        code: "email_not_verified",
      });
    }

    const userRef = db.collection("users").doc(uid);
    const currentSnap = await userRef.get();
    const currentProfile = currentSnap.exists ? currentSnap.data() : null;

    if (currentProfile?.role && currentProfile.role !== "student") {
      return sendJson(res, 409, {
        error: "This account already has a staff role and cannot register as a student.",
        code: "role_conflict",
      });
    }

    await auth.setCustomUserClaims(uid, {
      role: "student",
      student: true,
      status: "active",
      roleVersion: 1,
    });

    const now = FieldValue.serverTimestamp();
    const payload = {
      uid,
      email,
      name: currentProfile?.name || userRecord.displayName || email,
      photoURL: currentProfile?.photoURL || userRecord.photoURL || "",
      role: "student",
      status: "active",
      learnerGroup: currentProfile?.learnerGroup || safeLearnerGroup(body.learnerGroup),
      authProvider: "google",
      emailVerified: true,
      updatedAt: now,
      lastLoginAt: now,
    };

    if (!currentSnap.exists) {
      payload.createdAt = now;
      payload.createdBy = "self-registration";
    }

    await userRef.set(payload, { merge: true });

    return sendJson(res, 200, {
      user: {
        uid,
        email,
        name: payload.name,
        role: payload.role,
        status: payload.status,
        learnerGroup: payload.learnerGroup,
        photoURL: payload.photoURL,
      },
    });
  } catch (error) {
    return handleApiError(res, error);
  }
};
