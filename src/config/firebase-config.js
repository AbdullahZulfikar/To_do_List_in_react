// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtMoILwDHaVKzFyaavzy_RGLPykF1G32s",
  authDomain: "expense-tracker-b75ee.firebaseapp.com",
  projectId: "expense-tracker-b75ee",
  storageBucket: "expense-tracker-b75ee.appspot.com",
  messagingSenderId: "950984058617",
  appId: "1:950984058617:web:6d606c9d1e8c66825ae428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);