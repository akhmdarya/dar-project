import { createSelector } from 'reselect';
import { RootState } from '../root-reducers';

const selectArticlesState = (state: RootState) => state.articles;

export const selectArticles = createSelector(
  [selectArticlesState],
  (state) => state.articles
);
