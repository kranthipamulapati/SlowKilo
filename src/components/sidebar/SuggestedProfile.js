import React, {useState} from "react";
import {Link} from "react-router-dom";

import {updateFollowedUserFollowers, updateLoggedInUserFollowing} from "../../utils/firebase";

export default function SuggestedProfile({userInfo, profile}) {

    const [followed, setFollowed] = useState(false);

    async function handleFollowUser() {
        setFollowed(true);

        await updateLoggedInUserFollowing(userInfo.docId, profile.userId, false);
        await updateFollowedUserFollowers(profile.docId, userInfo.userId, false);
    }

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img className="rounded-full w-8 flex mr-3" src={`/images/avatars/${profile.username}.jpg`} alt={profile.username} />
                <Link to={`/p/${profile.username}`}>
                    <p className="font-bold text-sm">{profile.username}</p>
                </Link>
            </div>
            <div>
                <button className="text-xs font-bold text-blue-medium" type="button" onClick={handleFollowUser}>Follow</button>
            </div>
        </div>
    ) : null
}