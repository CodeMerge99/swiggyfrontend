import { createContext } from "react";


const UserContext = createContext({
    loggedInUser: "deafault User"
});

export default UserContext;