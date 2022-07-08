import React, {useEffect} from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Timeline from "../components/Timeline";

export default function Dashboard() {

    useEffect(function() {
        document.title = "SlowKilo";
    });

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    );
}