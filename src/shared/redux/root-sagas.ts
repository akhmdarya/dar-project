import { all, call } from "redux-saga/effects";
import { categoriesSagas } from "./categories/categories.sagas";
import { articlesSagas } from "./articles/articles.sagas";

export default function* rootSaga() {
    yield all([
        call(articlesSagas),
        call(categoriesSagas),
        
    ])
}
