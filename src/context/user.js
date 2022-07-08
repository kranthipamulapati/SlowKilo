import React, {useState, useEffect, useContext, createContext} from "react";

import {FirebaseContext} from "./firebase";

const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const {auth, onAuthStateChanged} = useContext(FirebaseContext);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));

    useEffect(function() {
        const authListener = onAuthStateChanged(auth, (authUser) => {

            if(authUser) {
                localStorage.setItem("user", JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem("authUser");
                setUser(null);
            }

        });

        return () => authListener();
    }, [auth, onAuthStateChanged]);

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>;
};

export {UserContext, UserProvider};