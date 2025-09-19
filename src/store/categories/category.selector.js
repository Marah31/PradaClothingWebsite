import { createSelector } from 'reselect';
// this to memoize when the selector has this state before thus it doesn't need to run reduce again
// reduce in the selectCategoryMap functions always reduce a new object even if no new changes have occured, thus it cause the app to re-render unnecessarly
// to fix wasting such resources, we can Memoize if this state already happened or not ( comming from the logic that says if you have the same input for a pure function, you will have the same output always )
// to do that we need to have input selector and output selector

const selectCategoryReducer = (state)=> state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=> categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories)=>
        categories.reduce((acc, category)=>{ // querySnapshot.docs = an array of all document snapshots, .reduce(...) transforms the array of documents into an object map
            const {title, items} = category; 
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
);
// this file is meant to transform the data we got into the final shap the reducer should be storing

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);


