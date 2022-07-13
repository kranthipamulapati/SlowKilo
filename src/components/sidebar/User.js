import React from "react";

import {Link} from "react-router-dom";

const User = ({username, fullname}) => {

    return (
        <>
            {(username === "" || fullname === "") ? 
                <></> 
                :
                <Link to={`/p/${username}`} className="grid grid-cols-4 mb-6 items-center">
                    <div className="flex items-center justify-between col-span-1">
                        <img className="rounded-full w-16 felx mr-3" alt="" src={`/images/avatars/${username}.jpg`} />
                    </div>
                    <div className="col-span-3">
                        <p className="font-bold text-sm">{username}</p>
                        <p className="text-sm">{fullname}</p>
                    </div>
                </Link>
            }
        </>
        
    );
}

User.whyDidYouRender = true;

export default User;