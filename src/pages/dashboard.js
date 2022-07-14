import React, {useEffect, useContext} from "react";

import Header from "../components/Header";
import Timeline from "../components/Timeline";
import Sidebar from "../components/sidebar/Sidebar";

import {UserContext} from "../context/user";

export default function Dashboard() {

    const {authInfo, userInfo} = useContext(UserContext);

    useEffect(function() {
        document.title = "SlowKilo";
    });

    return (
        <div className="bg-gray-background">
            <Header authInfo={authInfo} userInfo={userInfo} />
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <Timeline userInfo={userInfo} />
                <Sidebar userInfo={userInfo} />
            </div>
        </div>
    );
}