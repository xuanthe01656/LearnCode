export const USER_ROLES = Object.freeze({
  admin: "admin",
  teacher: "teacher",
  student: "student",
});

export const USER_STATUS = Object.freeze({
  active: "active",
  invited: "invited",
  disabled: "disabled",
});

export const STAFF_ROLES = Object.freeze([USER_ROLES.admin, USER_ROLES.teacher]);

export const ROLE_LABEL_KEYS = Object.freeze({
  [USER_ROLES.admin]: "auth:roles.admin",
  [USER_ROLES.teacher]: "auth:roles.teacher",
  [USER_ROLES.student]: "auth:roles.student",
});

export function getUserRole(user) {
  return user?.role || user?.claims?.role || null;
}

export function hasRole(user, role) {
  if (!user || !role) return false;
  return getUserRole(user) === role || user?.claims?.[role] === true;
}

export function hasAnyRole(user, allowedRoles = []) {
  if (!Array.isArray(allowedRoles) || allowedRoles.length === 0) return true;
  return allowedRoles.some((role) => hasRole(user, role));
}

export function isAdmin(user) {
  return hasRole(user, USER_ROLES.admin);
}

export function isTeacher(user) {
  return hasRole(user, USER_ROLES.teacher);
}

export function isStudent(user) {
  return hasRole(user, USER_ROLES.student);
}

export function isStaff(user) {
  return isAdmin(user) || isTeacher(user);
}

export function isActiveUser(user) {
  return (user?.status || user?.claims?.status || USER_STATUS.active) === USER_STATUS.active;
}
