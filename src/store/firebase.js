// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQWm0vcUEXvFmWbjcBQ6TgX9yStH-MGgU",
  authDomain: "yoga-and-meditation-cc901.firebaseapp.com",
  projectId: "yoga-and-meditation-cc901",
  storageBucket: "yoga-and-meditation-cc901.appspot.com",
  messagingSenderId: "638715730922",
  appId: "1:638715730922:web:de7319afac4df960e57093",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
