import { Article } from './../../types';

export enum  ArticlesActionTypes {
    FETCH_ARTICLES = 'FETCH_ARTICLES',
    FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
    FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR'
}

export interface FetchArticlesAction {
    type:  ArticlesActionTypes.FETCH_ARTICLES;
    payload: {
        categoryId?: string;
        page?: number;
    };
}

export interface FetchArticlesSuccessAction {
    type:  ArticlesActionTypes.FETCH_ARTICLES_SUCCESS;
    payload: Article[];
}

export interface FetchArticlesErrorAction {
    type:  ArticlesActionTypes.FETCH_ARTICLES_ERROR;
    payload: string;
}

export type ArticlesAction = FetchArticlesAction | FetchArticlesSuccessAction | FetchArticlesErrorAction;
