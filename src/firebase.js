// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIHGQBpdsS0MOajpP7nqYxekJ4dIQ90Es",
  authDomain: "pickie-3b05a.firebaseapp.com",
  projectId: "pickie-3b05a",
  storageBucket: "pickie-3b05a.appspot.com",
  messagingSenderId: "281539655418",
  appId: "1:281539655418:web:d9b8a22e36d0686b443b43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
