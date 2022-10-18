// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaDi1A8abHyrlfJhofaIFMZY_sH4CP2uk",
  authDomain: "dragon-news-bb422.firebaseapp.com",
  projectId: "dragon-news-bb422",
  storageBucket: "dragon-news-bb422.appspot.com",
  messagingSenderId: "456638637412",
  appId: "1:456638637412:web:4effdb05f7b5fd61210671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;