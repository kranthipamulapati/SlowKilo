import React, {useState, useEffect} from "react";

import Skletion from "react-loading-skeleton";

import {auth, signOut} from "../../utils/firebase";

export default function UserHeader({}) {

    const [isFollowingProfile, setIsFollowingProfile] = useState(false);

    return (
        <header className="h-16 bg-white border-b border-gray-primary mb-8">
        </header>
    );
}