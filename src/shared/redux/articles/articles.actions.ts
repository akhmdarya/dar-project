import { useParams } from "react-router-dom";
import { Article } from "../../types";

export interface ArticlesAction<T> {
    type: ArticlesActionTypes;
    payload?: T;
}
export interface ArticlesCathegoryAction {
    type: ArticlesActionTypes;
    payload?: string;
}

export enum ArticlesActionTypes {
    SET_ARTICLES = 'SET_ARTICLES',
    FETCH_ARTICLES = 'FETCH_ARTICLES',
    FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
    FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
    SET_ARTICLES_CATHEGORY='SET_ARTICLES_CATHEGORY'
}

export const setArticlesCathegory = (cathegoryID:string): ArticlesCathegoryAction => {
    return {
        type: ArticlesActionTypes.SET_ARTICLES_CATHEGORY,
        payload: cathegoryID,
        
    }
}

export const setArticles = (articles: Article[]): ArticlesAction<Article[]> => {
    return {
        type: ArticlesActionTypes.SET_ARTICLES,
        payload: articles
    }
}



export const fetchArticles = (): ArticlesAction<null> => {
    return {
        type: ArticlesActionTypes.FETCH_ARTICLES
    }
}

export const fetchArticlesSuccess = (articles: Article[]): ArticlesAction<Article[]> => {
    return {
        type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
        payload: articles
    }
}

export const fetchArticlesError = (error: any): ArticlesAction<any> => {
    return {
        type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
        payload: error,
    }
}
