import { categoriesReducer } from './categories/categories.reducer';
import { combineReducers } from 'redux';
import { articlesReducer } from './articles/articles.reducer';


const rootReducers = combineReducers({
    article: articlesReducer,
    category: categoriesReducer,
   
});



export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
