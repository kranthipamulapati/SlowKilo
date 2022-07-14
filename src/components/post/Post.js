import React, {useRef} from "react";

import Header from "./Header";

export default function Post({photo}) {

    return (
        <div className="rounded col-span-4 border bg-white border">

            <Header username={photo.username} />
            
        </div>
    );
}