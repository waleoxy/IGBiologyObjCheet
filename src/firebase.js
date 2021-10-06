import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD0CbINnoVMe4LjicDmp5f13Um3j_rps2U",
  authDomain: "biologyquiz-aed65.firebaseapp.com",
  projectId: "biologyquiz-aed65",
  storageBucket: "biologyquiz-aed65.appspot.com",
  messagingSenderId: "675410463442",
  appId: "1:675410463442:web:c363cba13720a57922bb0b",
  measurementId: "G-6ZJNNT8GLG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth()
const storage = getStorage();
  
export {auth, storage};
export default db;
