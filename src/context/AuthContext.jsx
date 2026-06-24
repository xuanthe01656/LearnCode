import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { authService } from "../services/auth/authService.js";
import { hasAnyRole, USER_ROLES } from "../constants/roles.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const unsubscribe = authService.subscribe(
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      },
      (error) => {
        console.error("[auth] Auth state error", error);
        setAuthError(error);
        setLoading(false);
      }
    );

    return () => {
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, []);

  const login = useCallback(async (credentials) => {
    setAuthError(null);
    const signedInUser = await authService.login(credentials);
    setUser(signedInUser);
    return signedInUser;
  }, []);

  const loginWithEmail = useCallback(async (credentials) => {
    setAuthError(null);
    const signedInUser = await authService.loginWithEmail(credentials);
    setUser(signedInUser);
    return signedInUser;
  }, []);

  const loginWithGoogleStudent = useCallback(async (payload) => {
    setAuthError(null);
    const signedInUser = await authService.loginWithGoogleStudent(payload);
    setUser(signedInUser);
    return signedInUser;
  }, []);

  const registerStudentWithGoogle = useCallback(async (payload) => {
    setAuthError(null);
    const createdUser = await authService.registerStudentWithGoogle(payload);
    setUser(createdUser);
    return createdUser;
  }, []);

  const updateProfile = useCallback(async (updates) => {
    setAuthError(null);
    const updatedUser = await authService.updateProfile(updates);
    setUser(updatedUser);
    return updatedUser;
  }, []);

  const getIdToken = useCallback((forceRefresh = false) => {
    return authService.getIdToken(forceRefresh);
  }, []);

  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      authError,
      isAuthenticated: Boolean(user),
      isAdmin: user?.role === USER_ROLES.admin,
      isTeacher: user?.role === USER_ROLES.teacher,
      isStudent: user?.role === USER_ROLES.student,
      hasRole: (roles = []) => hasAnyRole(user, roles),
      login,
      loginWithEmail,
      loginWithGoogleStudent,
      registerStudentWithGoogle,
      updateProfile,
      getIdToken,
      logout,
    }),
    [
      authError,
      getIdToken,
      loading,
      login,
      loginWithEmail,
      loginWithGoogleStudent,
      logout,
      registerStudentWithGoogle,
      updateProfile,
      user,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}
