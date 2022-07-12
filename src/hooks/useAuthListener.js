import {useState, useEffect} from "react";

import {auth, onAuthStateChanged} from "../utils/firebase";

export default function useAuthListener() {
    const [user, setUser] = useState(JSON.stringify(localStorage.getItem("authUser")));

    useEffect(function() {
        const listener = onAuthStateChanged(auth, (authUser) => {
            if(authUser) {
                localStorage.setItem("authUser", JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem("authUser");
                setUser(null);
            }
        });

        return () => listener();
    }, []);

    return {user};
}