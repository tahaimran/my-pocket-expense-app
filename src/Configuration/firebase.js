// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase  } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB_oF28YGDCiej9hUo-vIJfuwwvuHfSLU",
  authDomain: "my-pocket-expense-app.firebaseapp.com",
  projectId: "my-pocket-expense-app",
  storageBucket: "my-pocket-expense-app.appspot.com",
  messagingSenderId: "730016422431",
  appId: "1:730016422431:web:e05c08415e04804a4bd32a",
  measurementId: "G-LW4YJXGSG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
