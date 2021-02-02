import { articlesReducer } from './articles/articles.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { combineReducers } from 'redux';


const rootReducers = combineReducers({
    category: categoriesReducer,
    articles: articlesReducer,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
