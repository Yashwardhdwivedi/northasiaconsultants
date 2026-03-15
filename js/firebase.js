import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9Qf2modSb1JEaR21ynEBv4WYBZaX1oJQ",
  authDomain: "northasiawebsite.firebaseapp.com",
  projectId: "northasiawebsite",
  storageBucket: "northasiawebsite.firebasestorage.app",
  messagingSenderId: "643873729069",
  appId: "1:643873729069:web:01e9a5f35a0f4815ece6a4",
  measurementId: "G-SCECS03GC3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
