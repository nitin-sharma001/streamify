// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "streamify-ns.firebaseapp.com",
  projectId: "streamify-ns",
  storageBucket: "streamify-ns.appspot.com",
  messagingSenderId: "752304143601",
  appId: "1:752304143601:web:49af5a8662b6933facfd50",
  measurementId: "G-5J9C3SN4LJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
