import { ArticlesActionTypes, FetchArticlesAction, FetchArticlesErrorAction, FetchArticlesSuccessAction } from './articles.types';
import { Article } from './../../types';

export const fetchArticles = (params: {categoryId: string}): FetchArticlesAction => {
    return {
        type: ArticlesActionTypes.FETCH_ARTICLES,
        payload: params
    }
}

export const fetchArticlesSuccess = (articles: Article[]): FetchArticlesSuccessAction => {
    return {
        type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
        payload: articles
    }
}

export const fetchArticlesError = (error: string): FetchArticlesErrorAction => {
    return {
        type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
        payload: error,
    }
}
