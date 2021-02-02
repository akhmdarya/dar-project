import { fetchArticlesError, fetchArticlesSuccess } from './articles.actions';
import { getArticles } from './../../api';
import { ArticlesActionTypes, FetchArticlesAction } from './articles.types';
import { takeLatest, call, put, all } from 'redux-saga/effects';


export function* fetchArticlesAsync(action: FetchArticlesAction) {
    try {
        const data = yield call(getArticles, action.payload.categoryId);
        yield put(fetchArticlesSuccess(data));
    } catch (e) {
        yield put(fetchArticlesError(e.message));
    }
}

export function* fetchArticlesSaga() {
    yield takeLatest(ArticlesActionTypes.FETCH_ARTICLES, fetchArticlesAsync);
}

export function* articlesSagas() {
    yield all([
        call(fetchArticlesSaga)
    ]);
}
