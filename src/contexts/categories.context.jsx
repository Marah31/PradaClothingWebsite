// this file is no longer used in the app completely
// I will be leaving it here for learning purposes



// import { createContext, useEffect, useState } from "react";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
// import { CATEGORIES_INITIAL_STATE, categoriesReducer } from "../store/categories/category.reducer.js";
// import { CATEGORIES_ACTION_TYPE } from "../store/categories/category.types.js";

// export const CategoriesContext = createContext({
//     categoriesMap: {},

// });

// export const CategoriesProvider = ({children}) => {
//     const [categoriesMap, setCategoriesMap] = useState({});
//     /*useEffect(()=>{
//         addCollectionAndDocuments('categories', SHOP_DATA);
//     },[]);*/ // this is commented but it should run at least one time for the project
//     // we just don't want it to run every time an effect happens and tries to set a new categories record in the db 
//     // const [state, dispatch] = useReducer( categoriesReducer, CATEGORIES_INITIAL_STATE);
//     // const {categoriesMap} = state;
//     // const setCategoriesMap = (user) =>{
//     //     dispatch(createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap));
//     // }
//     useEffect(()=>{
//         const getCategoriesMap=async()=>{
//             const categoryMap =await getCategoriesAndDocuments();
//             setCategoriesMap(categoryMap);
//         } 
//         getCategoriesMap();
//     }, []);

//     const value = {categoriesMap};
//     return (
//        <CategoriesContext.Provider value={value}>
//             {children}
//         </CategoriesContext.Provider> 
//     );
// };