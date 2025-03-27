// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyATz3mqkwfclP8dwqfnKawaLf9S8uqn-3o",
  authDomain: "kasyjonanagaba.firebaseapp.com",
  projectId: "kasyjonanagaba",
  storageBucket: "kasyjonanagaba.firebasestorage.app",
  messagingSenderId: "470828808861",
  appId: "1:470828808861:web:dc71b644aa33b74c4fb274",
  measurementId: "G-B5G9S0EG5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);