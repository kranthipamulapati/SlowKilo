import {createContext} from "react";

import {initializeApp} from "firebase/app";
import {query, where, addDoc, getDocs, collection, getFirestore} from "firebase/firestore";
import {getAuth, signOut, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

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

const FirebaseContext = createContext(null);
const value = {auth, firebase, firestore, where, query, addDoc, getDocs, signOut, collection, updateProfile, doesUsernameExist, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword};

const FirebaseProvider = ({children}) => {

    return <FirebaseContext.Provider value={value}>
        {children}
    </FirebaseContext.Provider>;
};

async function doesUsernameExist(username) {
    const results = await getDocs(query(collection(firestore, "users"), where("username", "==", username)));

    return !!results.size;
};

export {FirebaseContext, FirebaseProvider};