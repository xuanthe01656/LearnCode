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

export const ROLE_LABEL_KEYS = Object.freeze({
  [USER_ROLES.admin]: "auth:roles.admin",
  [USER_ROLES.teacher]: "auth:roles.teacher",
  [USER_ROLES.student]: "auth:roles.student",
});

export const STAFF_ROLES = [USER_ROLES.admin, USER_ROLES.teacher];

export function isAdmin(user) {
  return user?.role === USER_ROLES.admin;
}

export function isTeacher(user) {
  return user?.role === USER_ROLES.teacher;
}

export function isStudent(user) {
  return user?.role === USER_ROLES.student;
}

export function hasAnyRole(user, allowedRoles = []) {
  if (!allowedRoles.length) return true;
  return allowedRoles.includes(user?.role);
}
