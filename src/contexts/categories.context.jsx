import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from '../shop-data.js'
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap,setCategoriesMap] = useState({});
    /*useEffect(()=>{
        addCollectionAndDocuments('categories', SHOP_DATA);
    },[]);*/ // this is commented but it should run at least one time for the project
    // we just don't want it to run every time an effect happens and tries to set a new categories record in the db 

    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoryMap =await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        } 
        getCategoriesMap();
    }, []);

    const value = {categoriesMap};
    return (
       <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider> 
    );
};