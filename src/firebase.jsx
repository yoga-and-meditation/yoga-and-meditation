// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const initializeApp=firebase.initializeApp();
const getAuth=firebase.getAuth()
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxnJcgs5h17m36hm_YeV1hBYRyOhQeuGQ",
  authDomain: "fir-auth-yt-f97ab.firebaseapp.com",
  projectId: "fir-auth-yt-f97ab",
  storageBucket: "fir-auth-yt-f97ab.appspot.com",
  messagingSenderId: "204355047772",
  appId: "1:204355047772:web:be73b1ac55f14c0ecbb199"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;