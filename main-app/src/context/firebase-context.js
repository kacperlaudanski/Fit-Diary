import React from "react"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fitdiary-ffe99.firebaseapp.com",
  projectId: "fitdiary-ffe99",
  storageBucket: "fitdiary-ffe99.appspot.com",
  messagingSenderId: "949917685724",
  appId: "1:949917685724:web:006b40a035339c60eee119",
}

initializeApp(firebaseConfig);
const auth = getAuth();

const FirebaseConfig = React.createContext({
    firebaseConfig
}); 

export default FirebaseConfig; 