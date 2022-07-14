import React from "react";

import Skeleton from "react-loading-skeleton";

import usePhotos from "../hooks/usePhotos";

import Post from "./post/Post";

export default function Timeline({userInfo}) {

    const photos = usePhotos(userInfo);
    
    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton count={4} width={640} height={480} className="mb-5" />
            ) : photos?.length > 0 ? (
                photos.map((photo) => <Post key={photo.docId} photo={photo} />)
            ) : (
                <p className="text text-2xl">Follow people to see photos</p>
            )}
        </div>
    );
}