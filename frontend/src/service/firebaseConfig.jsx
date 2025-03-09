// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-projects-80e0d.firebaseapp.com",
  projectId: "ai-projects-80e0d",
  storageBucket: "ai-projects-80e0d.firebasestorage.app",
  messagingSenderId: "1072917293852",
  appId: "1:1072917293852:web:11bf4be6060808fce2a8d9",
  measurementId: "G-WYZ9D0M4RX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);