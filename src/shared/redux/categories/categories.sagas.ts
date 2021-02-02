import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getCategories } from '../../api';
import { CategoriesActionTypes, fetchCategoriesError, fetchCategoriesSuccess } from './categories.actions';


export function* fetchCategoriesAsync() {
    try {
        const res = yield call(getCategories);
        yield put(fetchCategoriesSuccess(res.data));
    } catch(e) {
        yield put(fetchCategoriesError(e));
    }
}

export function* fetchCategoriesSaga() {
    yield takeLatest(CategoriesActionTypes.FETCH_CATEGORIES, fetchCategoriesAsync);
}

export function* categoriesSagas() {
    yield all([
        call(fetchCategoriesSaga)
    ]);
}
