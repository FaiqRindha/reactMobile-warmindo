// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGk46ZUIWnMqmKiwFkUPcbPGd0Mdn_Tm0",
    authDomain: "warmindopbp-109fc.firebaseapp.com",
    projectId: "warmindopbp-109fc",
    storageBucket: "warmindopbp-109fc.appspot.com",
    messagingSenderId: "954838538700",
    appId: "1:954838538700:web:81024df9c6868342736569",
    measurementId: "G-F3WLQX4G2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };
