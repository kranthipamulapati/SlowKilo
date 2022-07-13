import {useState, useEffect} from "react";

import {getUserByUserId} from "../utils/firebase";

export default function useUser(uid) {
    const [userInfo, setUserInfo] = useState({});
    
    useEffect(() => {
        
        async function getUser() {
            const result = await getUserByUserId(uid);
            setUserInfo(result);
        }

        if(uid) {
            getUser();
        } else {
            setUserInfo({});
        } 

    }, [uid]);

    return userInfo;
}