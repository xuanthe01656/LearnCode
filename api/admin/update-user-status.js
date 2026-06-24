const {
  admin,
  adminAuth,
  adminDb,
  assertAdmin,
  handleApiError,
  parseBody,
  requireFields,
  sendJson,
} = require("../_utils/firebaseAdmin.js");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed", code: "method_not_allowed" });
  }

  try {
    await assertAdmin(req);
    const body = parseBody(req);
    requireFields(body, ["uid", "status"]);

    const uid = String(body.uid);
    const status = String(body.status);

    if (!["active", "disabled"].includes(status)) {
      return sendJson(res, 400, { error: "Invalid status.", code: "invalid_status" });
    }

    const profileSnap = await adminDb.collection("users").doc(uid).get();
    if (!profileSnap.exists) {
      return sendJson(res, 404, { error: "User profile was not found.", code: "user_not_found" });
    }

    const profile = profileSnap.data();
    if (profile.role === "admin") {
      return sendJson(res, 403, { error: "Admin accounts cannot be disabled from this endpoint.", code: "cannot_disable_admin" });
    }

    await adminAuth.updateUser(uid, { disabled: status === "disabled" });
    await adminDb.collection("users").doc(uid).set(
      {
        status,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    const userRecord = await adminAuth.getUser(uid);
    await adminAuth.setCustomUserClaims(uid, {
      ...(userRecord.customClaims || {}),
      status,
      role: profile.role,
      roleVersion: Date.now(),
    });

    return sendJson(res, 200, { uid, status });
  } catch (error) {
    return handleApiError(res, error);
  }
};
