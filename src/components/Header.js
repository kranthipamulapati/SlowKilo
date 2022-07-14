import React from "react";
import {Link} from "react-router-dom";

import {auth, signOut} from "../utils/firebase";

import * as ROUTES from "../constants/routes";

export default function Header({authInfo, userInfo}) {

    return (
        <header className="h-16 bg-white border-b border-gray-primary mb-8">
            <div className="container mx-auto max-w-screen-lg h-full">

                <div className="flex justify-between h-full">

                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <h1 className="flex justify-center w-full">
                            <Link to={ROUTES.DASHBOARD}>
                                <img src="/images/logo.png" alt="instagram" className="mt-2 w-6/12" />
                            </Link>
                        </h1>
                    </div>

                    <div className="text-gray-700 text-center flex items-center align-items">
                        {authInfo.uid ? (
                            <>
                            
                                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                                    <svg fill="none" strokeWidth="2" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                        <path strokeLinecap="round" strokeLinejoin="round" 
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                                        />
                                    </svg>
                                </Link>

                                <button type="button" title="Sign Out" onClick={() => signOut(auth)}
                                    onKeyDown={(e) => {
                                        if(e.key === "Enter") signOut(auth);
                                    }}>

                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 mr-6 text-black-light cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>

                                </button>

                                {authInfo.uid && (
                                    <div className="flex items-center cursor-pointer">
                                        <Link to={`/p/${userInfo?.username}`}>
                                        <img
                                            className="rounded-full h-8 w-8 flex"
                                            src={`/images/avatars/${userInfo?.username}.jpg`}
                                            alt={`${userInfo?.username} profile`}
                                            onError={(e) => {
                                                //e.target.src = DEFAULT_IMAGE_PATH;
                                            }}
                                        />
                                        </Link>
                                    </div>
                                )}

                            </>
                        ) : (
                            <>
                                <Link to={ROUTES.LOGIN}>
                                    <button type="button" className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8">Log In</button>
                                </Link>

                                <Link to={ROUTES.SIGN_UP}>
                                    <button type="button" className="font-bold text-sm rounded text-blue-medium w-20 h-8">Sign Up</button>
                                </Link>
                            </>
                        )}
                    </div>

                </div>

            </div>
        </header>
    );
}