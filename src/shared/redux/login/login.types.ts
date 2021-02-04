import { Profile } from './../../types';

export enum  LoginActionTypes {
    FETCH_LOGIN = 'FETCH_LOGIN',
    FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS',
    FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR'
}

export interface FetchLoginAction {
    type:  LoginActionTypes.FETCH_LOGIN;
    payload: {
        username: string;
        password: string;
    
    };
}

export interface FetchLoginSuccessAction {
    type:  LoginActionTypes.FETCH_LOGIN_SUCCESS;
    payload: Profile[];
}

export interface FetchLoginErrorAction {
    type:  LoginActionTypes.FETCH_LOGIN_ERROR;
    payload: string;
}

export type LoginAction = FetchLoginAction | FetchLoginSuccessAction | FetchLoginErrorAction;
