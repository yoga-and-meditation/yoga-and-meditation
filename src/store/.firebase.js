// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO0soW6ahfet7A5-vFtA1sYEOxrWaL86o",
  authDomain: "yoga-and-meditation-fae5c.firebaseapp.com",
  projectId: "yoga-and-meditation-fae5c",
  storageBucket: "yoga-and-meditation-fae5c.appspot.com",
  messagingSenderId: "792173181999",
  appId: "1:792173181999:web:2a095caeea7317abf81ada",
  measurementId: "G-7XCRN50NQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
