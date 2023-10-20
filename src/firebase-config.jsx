// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtkrlk4sgr-F0JjlpsdOxQXVWUb8L5xtQ",
  authDomain: "assignment-10-767b4.firebaseapp.com",
  projectId: "assignment-10-767b4",
  storageBucket: "assignment-10-767b4.appspot.com",
  messagingSenderId: "789117878266",
  appId: "1:789117878266:web:c110b3c080d3eb01ab2e43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);