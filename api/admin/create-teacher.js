const {
  admin,
  adminAuth,
  adminDb,
  assertAdmin,
  handleApiError,
  normalizeEmail,
  parseBody,
  requireFields,
  sendJson,
} = require("../_utils/firebaseAdmin.js");

function validatePassword(password) {
  return String(password || "").length >= 8;
}

async function getUserByEmailOrNull(email) {
  try {
    return await adminAuth.getUserByEmail(email);
  } catch (error) {
    if (error.code === "auth/user-not-found") return null;
    throw error;
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed", code: "method_not_allowed" });
  }

  try {
    const { decoded: adminUser } = await assertAdmin(req);
    const body = parseBody(req);
    requireFields(body, ["name", "email", "password"]);

    const name = String(body.name).trim();
    const email = normalizeEmail(body.email);
    const password = String(body.password);

    if (!validatePassword(password)) {
      return sendJson(res, 400, {
        error: "Password must be at least 8 characters.",
        code: "weak_password",
      });
    }

    const now = admin.firestore.FieldValue.serverTimestamp();
    let userRecord = await getUserByEmailOrNull(email);
    let created = false;

    if (userRecord) {
      const existingProfileSnap = await adminDb.collection("users").doc(userRecord.uid).get();
      const existingProfile = existingProfileSnap.exists ? existingProfileSnap.data() : null;
      const existingClaims = userRecord.customClaims || {};
      const existingRole = existingProfile?.role || existingClaims.role;

      if (existingRole === "admin") {
        return sendJson(res, 409, {
          error: "This email already belongs to an admin account.",
          code: "admin_account_conflict",
        });
      }

      if (existingRole === "student" && body.allowConvertStudent !== true) {
        return sendJson(res, 409, {
          error: "This email already belongs to a student. Converting student accounts is disabled by default.",
          code: "student_account_conflict",
        });
      }

      userRecord = await adminAuth.updateUser(userRecord.uid, {
        displayName: name,
        password,
        disabled: false,
      });
    } else {
      userRecord = await adminAuth.createUser({
        email,
        password,
        displayName: name,
        emailVerified: false,
        disabled: false,
      });
      created = true;
    }

    await adminAuth.setCustomUserClaims(userRecord.uid, {
      role: "teacher",
      status: "active",
      roleVersion: 1,
    });

    const userPayload = {
      uid: userRecord.uid,
      email,
      name,
      role: "teacher",
      status: "active",
      authProvider: "password",
      emailVerified: Boolean(userRecord.emailVerified),
      updatedAt: now,
      createdBy: adminUser.uid,
      createdByEmail: adminUser.email || "",
    };

    if (created) userPayload.createdAt = now;

    await adminDb.collection("users").doc(userRecord.uid).set(userPayload, { merge: true });

    return sendJson(res, 200, {
      user: {
        uid: userRecord.uid,
        email,
        name,
        role: "teacher",
        status: "active",
        authProvider: "password",
        created,
      },
    });
  } catch (error) {
    return handleApiError(res, error);
  }
};
