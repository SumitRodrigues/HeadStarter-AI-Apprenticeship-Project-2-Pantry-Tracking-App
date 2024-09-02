// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi9IwXE2aYuliXrbkpE9x3IXFHAGwyycw",
  authDomain: "inventory-management-app-d9b92.firebaseapp.com",
  projectId: "inventory-management-app-d9b92",
  storageBucket: "inventory-management-app-d9b92.appspot.com",
  messagingSenderId: "7430652096",
  appId: "1:7430652096:web:35b8e2d32cddc72b36ed25",
  measurementId: "G-36MZM7R6XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);