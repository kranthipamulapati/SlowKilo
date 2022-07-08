import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import {FirebaseContext} from "./context/firebase";
import {auth, firebase, firestore, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "./lib/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  	<React.StrictMode>
		<FirebaseContext.Provider value={{auth, firebase, firestore, signInWithEmailAndPassword, createUserWithEmailAndPassword}}>

    		<App />			

		</FirebaseContext.Provider>
  	</React.StrictMode>
);