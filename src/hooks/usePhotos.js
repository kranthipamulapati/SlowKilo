import {useState, useEffect} from "react";

import {getPhotos} from "../utils/firebase";

export default function usePhotos({userId, following}) {
    const [photos, setPhotos] = useState([]);

    console.log(photos)
    
    useEffect(() => {
        
        async function getTimelinePhotos() {
            let followedUserPhotos = await getPhotos(userId, following);
            followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
            setPhotos(followedUserPhotos);
        }

        if(following) {
            getTimelinePhotos();
        } 
    }, [userId, following]);

    return photos;
}