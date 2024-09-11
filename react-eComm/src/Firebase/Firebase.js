// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { log } from '../commonComponents/Logger'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqFIKPsiIoeHjbAIwmrO-KzhC2X9hMZfM",
  authDomain: "ecomm-b7540.firebaseapp.com",
  projectId: "ecomm-b7540",
  storageBucket: "ecomm-b7540.appspot.com",
  messagingSenderId: "189861026134",
  appId: "1:189861026134:web:f02001bcbe8f594a7edef7",
  measurementId: "G-X79Q5VH8LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export const onLogin = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCrendialts) => {
        log("onLogin : " + userCrendialts.providerId)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        log(errorCode, errorMessage);
    });
}

export const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCrendialts) => {
        log("createUser : " + userCrendialts.providerId)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        log(errorCode, errorMessage);
    });
}