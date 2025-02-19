// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNLhNFPal6IbkqIBd9vR48yl-G8nsDz_Q",
  authDomain: "ecommreact-5bf30.firebaseapp.com",
  projectId: "ecommreact-5bf30",
  storageBucket: "ecommreact-5bf30.firebasestorage.app",
  messagingSenderId: "878441609409",
  appId: "1:878441609409:web:ee6448f56ffefb2b6c3c40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);