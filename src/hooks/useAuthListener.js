import {useState, useEffect} from "react";

import {auth, onAuthStateChanged} from "../utils/firebase";

export default function useAuthListener() {
    const [user, setUser] = useState({});

    useEffect(function() {
        const listener = onAuthStateChanged(auth, (authInfo) => {

            if(authInfo) {
                localStorage.setItem("authInfo", JSON.stringify(authInfo));
                setUser(authInfo);
            } else {
                localStorage.removeItem("authInfo");
                setUser({});
            }
        });

        return () => listener();
    }, []);

    return user;
}