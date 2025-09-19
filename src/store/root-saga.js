import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './categories/category.saga';


export function* rootSaga (){ // generator function 
    yield all([call(categoriesSaga)]);
}