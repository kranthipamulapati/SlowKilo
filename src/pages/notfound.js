import React, {useEffect} from "react";

export default function Notfound() {

    useEffect(function() {
        document.title = "Not Found - SlowKilo";
    });

    return (
        <div className="bg-gray-background">
            <div className="mx-auth max-w-screen-lg">
                <p className="text-center text-2xl">Not Found!</p>
            </div>
        </div>
    );
}