// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDnYAtofv3hWwuTltZMnnKUo6r26B-DMIk",
  authDomain: "qhosp---gestao-e-suporte.firebaseapp.com",
  projectId: "qhosp---gestao-e-suporte",
  storageBucket: "qhosp---gestao-e-suporte.firebasestorage.app",
  messagingSenderId: "422262297427",
  appId: "1:422262297427:web:80ee36fca5e58c56c447a6",
  measurementId: "G-JK9T4704WC"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Exporta o Firestore
const db = getFirestore(app);

export { db };