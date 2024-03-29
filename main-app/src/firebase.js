import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyCacBwNzFsafCW88RDX0TAO2LwC1nCxrkA',
  authDomain: "fitdiary-ffe99.firebaseapp.com",
  projectId: "fitdiary-ffe99",
  storageBucket: "fitdiary-ffe99.appspot.com",
  messagingSenderId: "949917685724",
  appId: "1:949917685724:web:006b40a035339c60eee119",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const auth = getAuth(app); 

