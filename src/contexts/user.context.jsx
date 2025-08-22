import { createContext, useState, useEffect} from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
// the actual value I want to access
export const UserContext = createContext ({
    currentUser: null,
    setCurrentUser: ()=>null, 
});

// This is a wrapper component <UserContext.Provider> to make the data available everywhere inside the app
export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            console.log(user);
        });
        
        return unsubscribe;
    },[]);
    // children means: all the nested components inside <UserProvider> will be able to use this context, check index.js file to see it
    return <UserContext.Provider value={value}>{children}</UserContext.Provider> //Whatever you pass as value={...} is what other components can access.
};
