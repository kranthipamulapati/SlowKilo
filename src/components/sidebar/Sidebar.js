import React, {useContext} from "react";

import {UserContext} from "../../context/user";

import User from "./User";
import Suggestions from "./Suggestions";

export default function Sidebar() {

    const {userInfo} = useContext(UserContext);
    const {username, fullName} = userInfo;

    return (
        <div className="p-4">
            <User username={username} fullname={fullName} />
            <Suggestions userInfo={userInfo} />
        </div>
    );
}