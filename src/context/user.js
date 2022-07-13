import React, {createContext} from "react";

import useUser from "../hooks/useUser";
import useAuthListener from "../hooks/useAuthListener";

const UserContext = createContext(null);

const UserProvider = ({children}) => {

    let authInfo = useAuthListener();
    let userInfo = useUser(authInfo?.uid);

    return <UserContext.Provider value={{authInfo, userInfo}}>
        {children}
    </UserContext.Provider>;
};

export {UserContext, UserProvider};