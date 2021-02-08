import { Profile } from './../../types';

export enum  LoginActionTypes {
    FETCH_LOGIN = 'FETCH_LOGIN',
    FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS',
    FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR',
    SET_PROFILE='SET_PROFILE',
    FETCH_PROFILE_SUCCESS='FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE='FETCH_PROFILE',
    RESET_PROFILE='RESET_PROFILE'
}

export interface FetchLoginAction {
    type:  LoginActionTypes.FETCH_LOGIN;
    payload: {
        username: string;
        password: string;
    
    };
}
export interface FetchProfileAction {
    type:  LoginActionTypes.FETCH_PROFILE;
}

export interface SetProfileAction {
    type:  LoginActionTypes.SET_PROFILE;
    payload: Profile;
}


export interface FetchProfileSuccessAction {
    type:  LoginActionTypes.FETCH_PROFILE_SUCCESS;
    payload: Profile;
}


export interface FetchLoginSuccessAction {
    type:  LoginActionTypes.FETCH_LOGIN_SUCCESS;
    payload: Profile;
}
export interface ReFetchProfileAction {
    type:  LoginActionTypes.RESET_PROFILE;
    payload: null;
}

export interface FetchLoginErrorAction {
    type:  LoginActionTypes.FETCH_LOGIN_ERROR;
    payload: string;
}

export type LoginAction = FetchLoginAction | FetchLoginSuccessAction | FetchLoginErrorAction | SetProfileAction 
| FetchProfileSuccessAction | ReFetchProfileAction
;
