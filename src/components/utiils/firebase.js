// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB86DJNYZLifZ8XFnNYiLQSDmgcMTqu59E",
  authDomain: "netflixgpt-3b886.firebaseapp.com",
  projectId: "netflixgpt-3b886",
  storageBucket: "netflixgpt-3b886.firebasestorage.app",
  messagingSenderId: "275918645917",
  appId: "1:275918645917:web:c1b4deaf35918b037f0274",
  measurementId: "G-492QD0XE68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();