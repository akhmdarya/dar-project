import { createSelector } from 'reselect';
import { RootState } from '../root-reducers';

const selectArticleState = (state: RootState) => state.article;

export const selectArticles = createSelector(
  [selectArticleState],
  (state) => state.articles
);
