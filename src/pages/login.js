import React, {useState, useEffect, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";

import {FirebaseContext} from "../context/firebase";

import * as ROUTES from "../constants/routes";

function Login() {
    
    let navigate = useNavigate();
    const {auth, signInWithEmailAndPassword} = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    const isInvalid = password === "" || emailAddress === "";

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, emailAddress, password);
            navigate(ROUTES.DASHBOARD, {replace : true});
        } catch (error) {
            setEmailAddress("");
            setPassword("");
            setError(error.message);
        }
    };

    useEffect(() => {
        document.title = "SlowKilo - Login";
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

                    <form onSubmit={handleLogin} method="POST">

                        <input 
                            type="text" 
                            placeholder="Email Address" 
                            aria-label="Enter your email address" 
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={(e) => setEmailAddress(e.target.value)}
                        />

                        <input 
                            type="password" 
                            placeholder="Password" 
                            aria-label="Enter your password" 
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type="submit"
                            disabled={isInvalid}
                            className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && "opacity-50"}`}
                        >Login</button>

                    </form>
                </div>
            
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
                    <p className="text-sm">Don't have an account?{` `}
                        <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">Sign Up</Link>
                    </p>
                </div>

            </div>
		</div>
	);
}

export default Login;