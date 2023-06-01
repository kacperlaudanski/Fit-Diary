import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCacBwNzFsafCW88RDX0TAO2LwC1nCxrkA",
  authDomain: "fitdiary-ffe99.firebaseapp.com",
  projectId: "fitdiary-ffe99",
  storageBucket: "fitdiary-ffe99.appspot.com",
  messagingSenderId: "949917685724",
  appId: "1:949917685724:web:006b40a035339c60eee119",
};

initializeApp(firebaseConfig);
const auth = getAuth();
