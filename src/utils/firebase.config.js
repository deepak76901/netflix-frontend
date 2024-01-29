// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCudPzaIYKlWy3vtznjAhmjLQUjcDjxRrg",
  authDomain: "react-netflix-clone-dd4c6.firebaseapp.com",
  projectId: "react-netflix-clone-dd4c6",
  storageBucket: "react-netflix-clone-dd4c6.appspot.com",
  messagingSenderId: "163262290369",
  appId: "1:163262290369:web:8ee7ca703b3e65a8333740", 
  measurementId: "G-XP244Y9BQ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// firebaseAuth is pointing to netflix-clone,which is exist in our firebase console
export const firebaseAuth = getAuth(app)