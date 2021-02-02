import { ArticlesAction, ArticlesActionTypes } from './articles.types';
import { Article } from './../../types';

export interface ArticlesState {
    articles: Article[];
    article: Article | null;
    error: string;
}

const defaultState = {
    articles: [],
    article: null,
    error: ''
}

export const articlesReducer = (state: ArticlesState = defaultState, action: ArticlesAction): ArticlesState => {
    switch(action.type) {
        case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.payload,
            }
        case ArticlesActionTypes.FETCH_ARTICLES_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}
