// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {geteFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAshEvkTl_pFzpnCVB9_7dtOqeZ92IWjRw",
  authDomain: "szoftmod-quiz-website.firebaseapp.com",
  projectId: "szoftmod-quiz-website",
  storageBucket: "szoftmod-quiz-website.appspot.com",
  messagingSenderId: "929312974344",
  appId: "1:929312974344:web:fe9b88f85cfb7addce13bd"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = geteFirestore();