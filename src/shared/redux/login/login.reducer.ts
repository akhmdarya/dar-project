import { LoginAction, LoginActionTypes } from './login.types';
import { Profile } from './../../types';

export interface LoginState {
   
    profile: Profile[];
    // article: Article | null;
    error: string;
}

const defaultState = {
    profile: [],
    // article: null,
    error: ''
}

export const loginReducer = (state: LoginState = defaultState, action: LoginAction): LoginState => {
    switch(action.type) {
        case LoginActionTypes.FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                profile: action.payload,
            }
        case LoginActionTypes.FETCH_LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}
