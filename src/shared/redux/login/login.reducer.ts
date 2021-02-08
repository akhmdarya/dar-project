import { LoginAction, LoginActionTypes } from './login.types';
import { Profile } from './../../types';

export interface LoginState {
   
    profile: Profile | null;
    // article: Article | null;
    error: string;
}

const defaultState = {
    profile: null,
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
            case LoginActionTypes.SET_PROFILE:
        case LoginActionTypes.FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
            }
            case LoginActionTypes.RESET_PROFILE:
                return{
                    ...state,
                    profile:null,
                }

        default:
            return state;
    }
}
