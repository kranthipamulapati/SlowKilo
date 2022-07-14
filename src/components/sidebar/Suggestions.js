import React, {useState, useEffect} from "react";

import {getSuggestedProfiles} from "../../utils/firebase";

import SuggestedProfile from "./SuggestedProfile";

export default function Suggestions({userInfo}) {

    const {userId, following} = userInfo;
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        async function suggestedProfiles() {

            const results = await getSuggestedProfiles(userId, following);
            setProfiles(results);
        }

        suggestedProfiles();
    }, [userId, following]);

    return (
        <div className="rounded flex flex-col">
            <div className="text-sm flex items-center align-items justify-between mb-2">
                <p className="font-bold text=gray-base">Suggestions for you</p>
            </div>
            <div className="mt-4 grid gap-5">
                {profiles.map((profile) => <SuggestedProfile key={profile.userId} userInfo={userInfo} profile={profile} />)}
            </div>
        </div>
    );
}