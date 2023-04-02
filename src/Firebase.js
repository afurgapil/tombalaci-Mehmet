import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEAPIKEY,
  authDomain: process.env.REACT_APP_FIREBASEAUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASEPROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASESTORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASEMESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASEAPPID,
  measurementId: process.env.REACT_APP_FIREBASEMEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
