// this file is no longer used in the app completely
// I will be leaving it here for learning purposes


// import { createContext, useReducer} from "react";
// import { createAction } from "../utils/reducer/reducer.utils";
// import { USER_ACTION_TYPES } from "../store/user/user.types";
// // the actual value I want to access
// export const UserContext = createContext ({
//     currentUser: null,
//     setCurrentUser: ()=>null, 
// });


// const userReducer = (state, action) =>{
//     const{ type, payload } = action;

//     switch(type){
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return{
//                 ...state,
//                 currentUser: payload
//             }
//         default:
//             throw new Error(`Unhandled type ${type} in userReducer`);
//     }
// };

// const INITIAL_STATE = {
//     currentUser: null
// }
// // This is a wrapper component <UserContext.Provider> to make the data available everywhere inside the app
// export const UserProvider = ({children}) =>{

//     // here I'm testing the use of Reducers instead of useState as a practice
//     //const [currentUser, setCurrentUser] = useState(null);
    
//     const [state, dispatch] = useReducer( userReducer, INITIAL_STATE);
//     const {currentUser} = state;
//     const setCurrentUser = (user) =>{
//         dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//     }
    
//     const value = {currentUser, setCurrentUser};
//     /*useEffect(()=>{
//         const unsubscribe = onAuthStateChangedListener((user)=>{
//             if(user) {
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user);
//             console.log(user);
//         });
        
//         return unsubscribe;
//     },[]); */
//     // children means: all the nested components inside <UserProvider> will be able to use this context, check index.js file to see it
//     return <UserContext.Provider value={value}>{children}</UserContext.Provider> //Whatever you pass as value={...} is what other components can access.
// };
