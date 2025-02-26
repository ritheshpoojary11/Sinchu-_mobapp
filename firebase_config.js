// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getDatabase, ref, set, get } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS_wy4jiy9RYkdIC9FEaIQMTuTFzxSOHo",
  authDomain: "quick-reach-449b0.firebaseapp.com",
  projectId: "quick-reach-449b0",
  storageBucket: "quick-reach-449b0.firebasestorage.app",
  messagingSenderId: "668120955841",
  appId: "1:668120955841:web:467a28aa5cdc2ae2820d40",
  measurementId: "G-Z2X20NE8H4",
  databaseURL: "https://quick-reach-449b0-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database, ref, set, get};