import { Category } from "../../types";

export interface CategoriesAction<T> {
    type: CategoriesActionTypes;
    payload?: T;
}

export enum CategoriesActionTypes {
    SET_CATEGORIES = 'SET_CATEGORIES',
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR'
}

export const setCategories = (categories: Category[]): CategoriesAction<Category[]> => {
    return {
        type: CategoriesActionTypes.SET_CATEGORIES,
        payload: categories
    }
}

export const fetchCategories = (): CategoriesAction<null> => {
    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES
    }
}

export const fetchCategoriesSuccess = (categories: Category[]): CategoriesAction<Category[]> => {
    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export const fetchCategoriesError = (error: any): CategoriesAction<any> => {
    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR,
        payload: error,
    }
}
