import { useParams } from 'react-router-dom';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getArticles } from '../../api';
import { Article } from '../../types';
import { ArticlesAction, ArticlesActionTypes, ArticlesCathegoryAction, fetchArticlesError, fetchArticlesSuccess } from './articles.actions';


export function* fetchArticlesAsync(action:ArticlesCathegoryAction) {
  
    try {
        const data = yield getArticles(action.payload);
        yield put(fetchArticlesSuccess(data));
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
