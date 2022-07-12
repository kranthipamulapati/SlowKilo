import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

import * as ROUTES from "../constants/routes";

import {auth, addDoc, firestore, collection, updateProfile, doesUsernameExist, createUserWithEmailAndPassword} from "../utils/firebase";

function Signup() {    
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [emailAddress, setEmailAddress] = useState("");

    const [error, setError] = useState(false);
    const isInvalid = password === "" || emailAddress === "";

    const handleSignup = async (e) => {
        e.preventDefault();

        const usernameExists = await doesUsernameExist(username);
        if(usernameExists === false) {

            try {

                await createUserWithEmailAndPassword(auth, emailAddress, password);
                await updateProfile(auth.currentUser, {
                    displayName : username
                });

                await addDoc(collection(firestore, "users"), {
                    userId : auth.currentUser.uid,
                    username : username.toLowerCase(),
                    fullName,
                    emailAddress : emailAddress.toLowerCase(),
                    following : [],
                    followers : [],
                    dateCreated : Date.now()
                });

                navigate(ROUTES.DASHBOARD, {replace : true});

            } catch (error) {
            
                setUsername("");
                setFullName("");
                setPassword("");
                setEmailAddress("");
                setError(error.message);

            }
            
        } else {
            setUsername("");
            setError("Username already exists. Please try another.");
        } 
    };

    useEffect(() => {
        document.title = "SlowKilo - Signup";
    });

	return (
		<div className="container flex mx-auto max-w-screen-md items-center h-screen">

            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with SlowKilo app" className="max-w-full" />
            </div>

            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-primary">

                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="SlowKilo" className="mt-2 w-6/12 mb-4" />
                    </h1>

                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form onSubmit={handleSignup} method="POST">

                        <input 
                            type="text" 
                            placeholder="Username" 
                            aria-label="Enter your Username" 
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />

                        <input 
                            type="text" 
                            placeholder="Full name" 
                            aria-label="Enter your full name" 
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                        />

                        <input 
                            type="text" 
                            placeholder="Email Address" 
                            aria-label="Enter your email address" 
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={(e) => setEmailAddress(e.target.value)}
                            value={emailAddress}
                        />

                        <input 
                            type="password" 
                            placeholder="Password" 
                            aria-label="Enter your password" 
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />

                        <button
                            type="submit"
                            disabled={isInvalid}
                            className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && "opacity-50"}`}
                        >Signup</button>

                    </form>
                </div>
            
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
                    <p className="text-sm">Don't have an account?{` `}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">Login</Link>
                    </p>
                </div>

            </div>
		</div>
	);
}

export default Signup;