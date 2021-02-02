import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getArticles } from '../../api';
import { ArticlesActionTypes, fetchArticlesError, fetchArticlesSuccess } from './articles.actions';


export function* fetchArticlesAsync() {
    try {
        const res = yield call(getArticles);
        yield put(fetchArticlesSuccess(res.data));
    } catch(e) {
        yield put(fetchArticlesError(e));
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
