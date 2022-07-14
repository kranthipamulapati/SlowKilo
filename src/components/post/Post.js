import React, {useRef} from "react";

import Image from "./Image";
import Header from "./Header";
import Actions from "./Actions";
import Footer from "./Footer";
import Comments from "./Comments";

export default function Post({photo}) {

    const commentInput = useRef(null);
    const handleFocus = () => commentInput.current.focus();

    return (
        <div className="rounded col-span-4 border bg-white border">

            <Header username={photo.username} />

            <Image src={photo.imageSrc} caption={photo.caption} />

            <Actions docId={photo.docId} totalLikes={photo.likes.length} likedPhoto={photo.userLikedPhoto} handleFocus={handleFocus} />

            {/* <Footer username={photo.username} caption={photo.caption} /> */}

            <Comments docId={photo.docId} posted={photo.dateCreated} comments={photo.comments} commentInput={commentInput} />

        </div>
    );
}