// src/firebase.js
// Firebase client SDK initialization.
// Client config values are not service-account secrets, but env variables keep deployment cleaner.

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyB_L8Hsk3QL0rYTsK-ZU3ckUxPH4n9NgGI",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "canvas-rampart-454804-b1.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "canvas-rampart-454804-b1",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "canvas-rampart-454804-b1.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "951629223566",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:951629223566:web:8c9fc82e65c973a678dbdf",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-5VLQDLTXY4",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export let analytics = null;

if (typeof window !== "undefined" && firebaseConfig.measurementId) {
  isAnalyticsSupported()
    .then((supported) => {
      if (supported) analytics = getAnalytics(app);
    })
    .catch(() => {
      analytics = null;
    });
}
