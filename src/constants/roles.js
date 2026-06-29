export const USER_ROLES = Object.freeze({
  admin: "admin",
  teacher: "teacher",
  student: "student",
});

export const USER_STATUS = Object.freeze({
  active: "active",
  disabled: "disabled",
});

export const ROLE_LABEL_KEYS = Object.freeze({
  [USER_ROLES.admin]: "roles.admin",
  [USER_ROLES.teacher]: "roles.teacher",
  [USER_ROLES.student]: "roles.student",
});

export function getUserRole(user) {
  return user?.role || user?.claims?.role || USER_ROLES.student;
}

export function hasRole(user, role) {
  if (!user || !role) return false;
  return getUserRole(user) === role || user?.claims?.[role] === true;
}

export function hasAnyRole(user, roles = []) {
  if (!Array.isArray(roles) || roles.length === 0) return true;
  return roles.some((role) => hasRole(user, role));
}

export function isActiveUser(user) {
  return (user?.status || user?.claims?.status || USER_STATUS.active) === USER_STATUS.active;
}
