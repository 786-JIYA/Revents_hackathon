// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import 'firebase/auth';
import 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9p7dJKcsZwjHefEQpTgzGwFZB6sbWGsc",
  authDomain: "hackathonrevents.firebaseapp.com",
  projectId: "hackathonrevents",
  storageBucket: "hackathonrevents.firebasestorage.app",
  messagingSenderId: "61918950225",
  appId: "1:61918950225:web:888ddcec25d0d7d5769970"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


