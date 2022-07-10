import React, {createContext} from "react";

import useAuthListener from "../hooks/useAuthListener";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const user = useAuthListener();

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>;
};

export {UserContext, UserProvider};