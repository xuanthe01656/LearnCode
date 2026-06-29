const {
  assertAdmin,
  getAdminAuth,
  getAdminDb,
  getAdminFirestore,
  handleApiError,
  normalizeEmail,
  parseBody,
  requireFields,
  sendJson,
} = require("../_utils/firebaseAdmin.js");

function validatePassword(password) {
  return String(password || "").length >= 8;
}

async function getUserByEmailOrNull(auth, email) {
  try {
    return await auth.getUserByEmail(email);
  } catch (error) {
    if (error.code === "auth/user-not-found") return null;
    throw error;
  }
}

function publicUser(userRecord, profile, created, temporaryPassword) {
  return {
    uid: userRecord.uid,
    email: profile.email,
    name: profile.name,
    role: profile.role,
    status: profile.status,
    authProvider: profile.authProvider,
    emailVerified: Boolean(userRecord.emailVerified),
    created,
    temporaryPassword,
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed", code: "method_not_allowed" });
  }

  try {
    const { decoded: adminUser } = await assertAdmin(req);
    const body = await parseBody(req);
    requireFields(body, ["name", "email", "password"]);

    const name = String(body.name || "").trim();
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");

    if (!name) {
      return sendJson(res, 400, { error: "Teacher name is required.", code: "name_required" });
    }

    if (!email || !email.includes("@")) {
      return sendJson(res, 400, { error: "Teacher email is invalid.", code: "invalid_email" });
    }

    if (!validatePassword(password)) {
      return sendJson(res, 400, {
        error: "Password must be at least 8 characters.",
        code: "weak_password",
      });
    }

    const auth = getAdminAuth();
    const db = getAdminDb();
    const { FieldValue } = getAdminFirestore();
    const now = FieldValue.serverTimestamp();

    let userRecord = await getUserByEmailOrNull(auth, email);
    let created = false;

    if (userRecord) {
      const existingProfileSnap = await db.collection("users").doc(userRecord.uid).get();
      const existingProfile = existingProfileSnap.exists ? existingProfileSnap.data() : null;
      const existingClaims = userRecord.customClaims || {};
      const existingRole = existingProfile?.role || existingClaims.role || "";

      if (existingRole === "admin" || existingClaims.admin === true) {
        return sendJson(res, 409, {
          error: "This email already belongs to an admin account.",
          code: "admin_account_conflict",
        });
      }

      if ((existingRole === "student" || existingClaims.student === true) && body.allowConvertStudent !== true) {
        return sendJson(res, 409, {
          error: "This email already belongs to a student. Converting student accounts is disabled by default.",
          code: "student_account_conflict",
        });
      }

      userRecord = await auth.updateUser(userRecord.uid, {
        displayName: name,
        password,
        disabled: false,
      });
    } else {
      userRecord = await auth.createUser({
        email,
        password,
        displayName: name,
        emailVerified: false,
        disabled: false,
      });
      created = true;
    }

    await auth.setCustomUserClaims(userRecord.uid, {
      role: "teacher",
      teacher: true,
      status: "active",
      roleVersion: 1,
    });

    const profilePayload = {
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

    if (created) profilePayload.createdAt = now;

    await db.collection("users").doc(userRecord.uid).set(profilePayload, { merge: true });

    return sendJson(res, 200, {
      user: publicUser(userRecord, profilePayload, created, password),
    });
  } catch (error) {
    return handleApiError(res, error);
  }
};
