// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ7oYQW3k5xYvW9OA-rmH1PTtOMpL1PSI",
  authDomain: "ema-john-with-auth-6a7ad.firebaseapp.com",
  projectId: "ema-john-with-auth-6a7ad",
  storageBucket: "ema-john-with-auth-6a7ad.appspot.com",
  messagingSenderId: "601290716243",
  appId: "1:601290716243:web:ee9c2de0d06b888e8702a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app