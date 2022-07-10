import {useState, useEffect, useContext} from "react";
import {FirebaseContext} from "../context/firebase";

export default function useAuthListener() {
    const [user, setUser] = useState(JSON.stringify(localStorage.getItem("authUser")));
    const {auth, onAuthStateChanged} = useContext(FirebaseContext);

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
    }, [auth, onAuthStateChanged]);

    return {user};
}