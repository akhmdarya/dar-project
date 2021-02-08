import { LoginActionTypes, FetchLoginAction, FetchLoginErrorAction, FetchLoginSuccessAction, FetchProfileSuccessAction, FetchProfileAction, ReFetchProfileAction } from './login.types';
import { Profile } from './../../types';

export const fetchLogin= (params: {username: string, password:string}): FetchLoginAction => {
    return {
        type: LoginActionTypes.FETCH_LOGIN,
        payload:  params
    }
}


export const fetchLoginSuccess = (params: Profile): FetchLoginSuccessAction => {
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

export const fetchProfile = (): FetchProfileAction => {
    return {
        type: LoginActionTypes.FETCH_PROFILE,
    }
}
export const resetProfile = (): ReFetchProfileAction => {
    return {
        type: LoginActionTypes.RESET_PROFILE,
        payload: null,
    }
}

export const fetchProfileSuccess = (profile: Profile): FetchProfileSuccessAction => {
    return {
        type: LoginActionTypes.FETCH_PROFILE_SUCCESS,
        payload: profile,
    }
}

