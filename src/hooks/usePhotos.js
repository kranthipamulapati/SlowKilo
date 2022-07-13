import {useState, useEffect} from "react";

import {getPhotos, getUserByUserId} from "../utils/firebase";

export default function usePhotos(userId) {
    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        
        async function getTimelinePhotos() {
            const {following} = await getUserByUserId(userId);

            if(following.legth > 0) {
                let followedUserPhotos = await getPhotos(userId, following);
            }
        }

        if(userId) {
            getTimelinePhotos();
        } else {
            setPhotos([]);
        }

    }, [userId]);

    return photos;
}