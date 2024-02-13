// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2dac9.firebaseapp.com",
  projectId: "mern-blog-2dac9",
  storageBucket: "mern-blog-2dac9.appspot.com",
  messagingSenderId: "787695731835",
  appId: "1:787695731835:web:e005c5ca74aa97e5850ede",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
