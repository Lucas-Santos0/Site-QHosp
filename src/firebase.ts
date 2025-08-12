// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*
//FIREBASE 4YCUUSO
const firebaseConfig = {
  apiKey: "AIzaSyDnYAtofv3hWwuTltZMnnKUo6r26B-DMIk",
  authDomain: "qhosp---gestao-e-suporte.firebaseapp.com",
  projectId: "qhosp---gestao-e-suporte",
  storageBucket: "qhosp---gestao-e-suporte.firebasestorage.app",
  messagingSenderId: "422262297427",
  appId: "1:422262297427:web:80ee36fca5e58c56c447a6",
  measurementId: "G-JK9T4704WC"
};

*/

//FIREBASE QHOSP
const firebaseConfig = {
  apiKey: "AIzaSyDOwchIXrJgzFs-LHrpdEWIbPmSL5NzuGw",
  authDomain: "qhosp---suporte-hospitalar.firebaseapp.com",
  projectId: "qhosp---suporte-hospitalar",
  storageBucket: "qhosp---suporte-hospitalar.firebasestorage.app",
  messagingSenderId: "556238705129",
  appId: "1:556238705129:web:8edb6b6ef3c859ba233b78",
  measurementId: "G-DKYT2KH3G4"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Exporta o Firestore
const db = getFirestore(app);

export { db };