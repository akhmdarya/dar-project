import { articlesReducer } from './articles/articles.reducer';
import {loginReducer } from './login/login.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { combineReducers } from 'redux';


const rootReducers = combineReducers({
    category: categoriesReducer,
    articles: articlesReducer,
    login:loginReducer
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
