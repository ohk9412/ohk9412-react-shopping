import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { Database, getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDatabase = getDatabase(firebaseApp);
export const googleProvider = new GoogleAuthProvider();

