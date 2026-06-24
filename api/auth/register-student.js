const {
  admin,
  adminAuth,
  adminDb,
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
    const body = parseBody(req);
    requireFields(body, ["idToken"]);

    const decoded = await adminAuth.verifyIdToken(String(body.idToken), true);
    const uid = decoded.uid;
    const userRecord = await adminAuth.getUser(uid);
    const email = normalizeEmail(userRecord.email || decoded.email);

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

    const userRef = adminDb.collection("users").doc(uid);
    const currentSnap = await userRef.get();
    const currentProfile = currentSnap.exists ? currentSnap.data() : null;

    if (currentProfile?.role && currentProfile.role !== "student") {
      return sendJson(res, 409, {
        error: "This account already has a staff role and cannot register as a student.",
        code: "role_conflict",
      });
    }

    const now = admin.firestore.FieldValue.serverTimestamp();
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

    await adminAuth.setCustomUserClaims(uid, {
      role: "student",
      status: "active",
      roleVersion: 1,
    });

    await userRef.set(payload, { merge: true });

    return sendJson(res, 200, {
      user: {
        ...payload,
        createdAt: currentProfile?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return handleApiError(res, error);
  }
};
