import { all, call } from "redux-saga/effects";
import { articlesSagas } from "./articles/articles.sagas";
import { categoriesSagas } from "./categories/categories.sagas";

export default function* rootSaga() {
    yield all([
        call(categoriesSagas),
        call(articlesSagas),
    ])
}
