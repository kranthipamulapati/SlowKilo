import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";

import Header from "../components/Header";
import {default as UserProfile} from "../components/profile/Profile";

import * as ROUTES from "../constants/routes"

import {getUserByUsername} from "../utils/firebase";

export default function Profile() {

    const navigate = useNavigate();
    const {username} = useParams();

    const [user, setUser] = useState(null);
    const [userExists, setUserExists] = useState(false);

    useEffect(() => {
        
        async function checkUserExists() {
            const users = await getUserByUsername(username);

            if(users.length > 0) {
                setUser(users[0]);
                setUserExists(true);
            } else {
                navigate(ROUTES.NOT_FOUND);
            }
        }

        checkUserExists();
    }, [username, navigate]);

    return userExists ? (
        <div className="bg-gray-background">
            {/* <Header /> */}
            <div className="mx-auto max-w-screen-lg">
                <UserProfile username={username} />
            </div>
        </div>
    ) : (
       null 
    )
}