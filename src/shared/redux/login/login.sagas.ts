import { fetchLoginError, fetchLoginSuccess } from './login.actions';
import { getProfile, login} from './../../api';
import { LoginActionTypes, FetchLoginAction } from './login.types';
import { takeLatest, call, put, all } from 'redux-saga/effects';


export function* fetchLoginAsync(action: FetchLoginAction) {
    try {
        const data = yield login(action.payload.username,action.payload.password);
        // yield put(fetchLoginSuccess(data));
        // 
                login(action.payload.username,action.payload.password)
                .then(res => {
                                if (res.data.token) {
                                    localStorage.setItem('authToken', res.data.token)
                                } 
                                return getProfile();
                            })
                            .then(res => {
                                 fetchLoginSuccess(res.data);
                                // history.replace('/');
                            })
                            // yield getProfile();
                            yield put(fetchLoginSuccess(data));
    } 
    catch (e) {
        yield put(fetchLoginError(e.message));
    }
}
// export function* fetchLoginSuccessAsync(action: FetchLoginAction) {
//     try {
//         const data = yield getProfile();
//         yield put(fetchLoginSuccess(data));
            
//     } 
//     catch (e) {
//         yield put(fetchLoginError(e.message));
//     }
// }

export function* fetchLoginSaga() {
    yield takeLatest(LoginActionTypes.FETCH_LOGIN, fetchLoginAsync);
    
}

export function* loginSagas() {
    yield all([
        call(fetchLoginSaga)
    ]);
}
