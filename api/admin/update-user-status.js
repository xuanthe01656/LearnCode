const {
  assertAdmin,
  getAdminAuth,
  getAdminDb,
  getAdminFirestore,
  handleApiError,
  parseBody,
  requireFields,
  sendJson,
} = require("../_utils/firebaseAdmin.js");

const ALLOWED_STATUSES = new Set(["active", "disabled"]);

function claimsForRole(role, status) {
  return {
    role,
    admin: role === "admin",
    teacher: role === "teacher",
    student: role === "student",
    status,
    roleVersion: 1,
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
    requireFields(body, ["uid", "status"]);

    const uid = String(body.uid || "").trim();
    const status = String(body.status || "").trim();

    if (!ALLOWED_STATUSES.has(status)) {
      return sendJson(res, 400, { error: "Invalid status.", code: "invalid_status" });
    }

    if (uid === adminUser.uid && status === "disabled") {
      return sendJson(res, 409, {
        error: "Admin cannot disable their own account.",
        code: "cannot_disable_self",
      });
    }

    const auth = getAdminAuth();
    const db = getAdminDb();
    const { FieldValue } = getAdminFirestore();

    const userRecord = await auth.getUser(uid);
    const snap = await db.collection("users").doc(uid).get();
    const profile = snap.exists ? snap.data() : null;
    const role = profile?.role || userRecord.customClaims?.role || "student";

    await auth.updateUser(uid, { disabled: status === "disabled" });
    await auth.setCustomUserClaims(uid, claimsForRole(role, status));

    await db.collection("users").doc(uid).set(
      {
        status,
        role,
        updatedAt: FieldValue.serverTimestamp(),
        updatedBy: adminUser.uid,
        updatedByEmail: adminUser.email || "",
      },
      { merge: true }
    );

    return sendJson(res, 200, {
      user: {
        uid,
        email: userRecord.email || profile?.email || "",
        role,
        status,
      },
    });
  } catch (error) {
    return handleApiError(res, error);
  }
};
