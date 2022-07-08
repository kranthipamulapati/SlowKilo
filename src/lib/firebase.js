import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

const config = {
    apiKey: "AIzaSyBIKT43K8rf10w4xfrAS_vwsSVOzz9z64M",
    authDomain: "react-slowkilo.firebaseapp.com",
    projectId: "react-slowkilo",
    storageBucket: "react-slowkilo.appspot.com",
    messagingSenderId: "154051748722",
    appId: "1:154051748722:web:229ec3518ccd39ff1f73eb"
};

const firebase = initializeApp(config);
const firestore = getFirestore(firebase);
const auth = getAuth();

export {auth, firebase, firestore, signInWithEmailAndPassword, createUserWithEmailAndPassword};