import { getFirestore } from "firebase/firestore"; // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG-a_o6NqIHTbwoXwLgLG51_Vbb-Bw56I",
  authDomain: "coker-project.firebaseapp.com",
  projectId: "coker-project",
  storageBucket: "coker-project.appspot.com",
  messagingSenderId: "331029792198",
  appId: "1:331029792198:web:7d0f3e32ce8ba54ff75ec7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
