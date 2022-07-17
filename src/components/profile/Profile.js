import React, {useEffect, useReducer} from "react";
import {getUserByUsername, getPhotosByUsername} from "../../utils/firebase";

import UserHeader from "./UserHeader";

export default function Profile({username}) {

    const reducer = (state, newState) => ({...state, ...newState});

    const initialState = {
        profile: {}   ,
        photosCollection: [],
        followerCount : 0
    };

    const [{profile, photosCollection, followerCount}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function getProfileInfoAndPhotos() {

            const [user] = await getUserByUsername(username);
            const photos = await getPhotosByUsername(username);
            
            dispatch({
                profile : user, 
                photosCollection : photos,
                followerCount : user.followers.length
            });
        }

        getProfileInfoAndPhotos();
    }, [username]);

    return (
        <header className="h-16 bg-white border-b border-gray-primary mb-8">
        </header>
    );
}