import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKrmTeoVMFP1Cm8YJvh62DVz-gYkcJk54",
    authDomain: "reactcourse-journal-app.firebaseapp.com",
    projectId: "reactcourse-journal-app",
    storageBucket: "reactcourse-journal-app.appspot.com",
    messagingSenderId: "848749412037",
    appId: "1:848749412037:web:8ab8dc6803c64ade607aac"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}