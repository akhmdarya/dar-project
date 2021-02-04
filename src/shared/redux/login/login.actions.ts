import { LoginActionTypes, FetchLoginAction, FetchLoginErrorAction, FetchLoginSuccessAction } from './login.types';
import { Profile } from './../../types';

export const fetchLogin= (params: {username: string, password:string}): FetchLoginAction => {
    return {
        type: LoginActionTypes.FETCH_LOGIN,
        payload:  params
    }
}

export const fetchLoginSuccess = (params: Profile[]): FetchLoginSuccessAction => {
    return {
        type: LoginActionTypes.FETCH_LOGIN_SUCCESS,
        payload: params
    }
}

export const fetchLoginError = (error: string): FetchLoginErrorAction => {
    return {
        type: LoginActionTypes.FETCH_LOGIN_ERROR,
        payload: error,
    }
}
