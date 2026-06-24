import { firebaseAuthProvider } from "./firebaseAuthProvider.js";

let activeAuthProvider = firebaseAuthProvider;

export function setAuthProvider(provider) {
  activeAuthProvider = provider;
}

export function getAuthProvider() {
  return activeAuthProvider;
}

export const authService = {
  subscribe(callback, onError) {
    return activeAuthProvider.subscribe(callback, onError);
  },

  getCurrentUser() {
    return activeAuthProvider.getCurrentUser();
  },

  login(credentials) {
    return activeAuthProvider.login(credentials);
  },

  loginWithEmail(credentials) {
    return activeAuthProvider.loginWithEmail(credentials);
  },

  loginWithGoogleStudent(payload) {
    return activeAuthProvider.loginWithGoogleStudent(payload);
  },

  registerStudentWithGoogle(payload) {
    return activeAuthProvider.registerStudentWithGoogle(payload);
  },

  register(payload) {
    return activeAuthProvider.register(payload);
  },

  updateProfile(updates) {
    return activeAuthProvider.updateProfile(updates);
  },

  getIdToken(forceRefresh = false) {
    return activeAuthProvider.getIdToken(forceRefresh);
  },

  logout() {
    return activeAuthProvider.logout();
  },
};
