// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs9-nazzrq6mNVhAjKO-BL21mN0BbKld0",
  authDomain: "reactauth-bfeb6.firebaseapp.com",
  projectId: "reactauth-bfeb6",
  storageBucket: "reactauth-bfeb6.appspot.com",
  messagingSenderId: "1039921032692",
  appId: "1:1039921032692:web:b3c1e5af3e23f3ac24dda1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
