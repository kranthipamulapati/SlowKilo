import React, {useState} from "react";
import {Link} from "react-router-dom";

import {updateFollowedUserFollowers, updateLoggedInUserFollowing} from "../../utils/firebase";

export default function SuggestedProfile({userInfo, profile}) {

    const {userId, docId : userDocId} = userInfo;
    const {profileId, docId : profileDocId, username} = profile;

    const [followed, setFollowed] = useState(false);

    async function handleFollowUser() {
        setFollowed(true);

        await updateLoggedInUserFollowing(userDocId, profileId, false);
        await updateFollowedUserFollowers(profileDocId, userId, false);
    }

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img className="rounded-full w-8 flex mr-3" src={`/images/avatars/${username}.jpg`} alt={username} />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm">{username}</p>
                </Link>
            </div>
            <div>
                <button className="text-xs font-bold text-blue-medium" type="button" onClick={handleFollowUser}>Follow</button>
            </div>
        </div>
    ) : null
}