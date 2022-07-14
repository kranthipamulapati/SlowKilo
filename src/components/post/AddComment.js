import React, {useState, useContext} from "react";

import {doc, setDoc, firestore, arrayUnion} from "../../utils/firebase";

import {UserContext} from "../../context/user";

export default function AddComment({docId, comments, setComments, commentInput}) {

    const [comment, setComment] = useState("");

    const {userInfo} = useContext(UserContext);
    const {fullName} = userInfo;

    const handleSubmitComment = async (e) => {
        e.preventDefault();

        setComments([{displayName : fullName, comment}, ...comments]);
        setComment("");

        return await setDoc(doc(firestore, "photos", docId), {
            comments : arrayUnion({displayName : fullName, comment})
        }, {merge : true});
    }

    return (
        <div className="border-t border-gray-primary">
            <form className="flex justify-between pl-0 pr-5" method="POST" onSubmit={(e) => comment.length >= 1 ? handleSubmitComment(e) : e.preventDefault()}>

                <input aria-label="Add a comment" autoComplete="off" className="text-sm text-gray-base w-full mr-3 py-5 px-4" type="text" name="add-comment" placeholder="Add a comment..." 
                    value={comment} onChange={(e) => setComment(e.target.value)} ref={commentInput}
                />

                <button className={`text-sm font-bold text-blue-medium ${!comment.length && 'opacity-25'}`} type="button" disabled={comment.length < 1} onClick={handleSubmitComment}>Post</button>

            </form>
        </div>
    );
}