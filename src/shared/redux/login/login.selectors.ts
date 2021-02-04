import { createSelector } from 'reselect';
import { RootState } from '../root-reducers';

const selectLoginState = (state: RootState) => state.login;

export const selectLogin = createSelector(
  [selectLoginState],
  (state) => state.profile
);
