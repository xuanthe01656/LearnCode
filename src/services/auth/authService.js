import { localAuthProvider } from "./localAuthProvider.js";

// Provider contract for future Firebase / database integration:
// getCurrentUser(): Promise<User | null>
// login({ email, password, remember }): Promise<User>
// register({ name, email, password, learnerGroup }): Promise<User>
// updateProfile(updates): Promise<User>
// logout(): Promise<void>
//
// When you add Firebase later, create a firebaseAuthProvider with the same
// methods and replace the provider below. Pages and components will not need
// to change because they only call authService through AuthContext.
let activeAuthProvider = localAuthProvider;

export function setAuthProvider(provider) {
  activeAuthProvider = provider;
}

export function getAuthProvider() {
  return activeAuthProvider;
}

export const authService = {
  getCurrentUser() {
    return activeAuthProvider.getCurrentUser();
  },

  login(credentials) {
    return activeAuthProvider.login(credentials);
  },

  register(payload) {
    return activeAuthProvider.register(payload);
  },

  updateProfile(updates) {
    return activeAuthProvider.updateProfile(updates);
  },

  logout() {
    return activeAuthProvider.logout();
  },
};
