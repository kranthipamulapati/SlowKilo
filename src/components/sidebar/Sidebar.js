import React from "react";

import User from "./User";
import Suggestions from "./Suggestions";

export default function Sidebar({userInfo}) {

    const {username, fullName} = userInfo;

    return (
        <div className="p-4">
            <User username={username} fullname={fullName} />
            <Suggestions userInfo={userInfo} />
        </div>
    );
}