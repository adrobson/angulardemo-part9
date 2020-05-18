import { createSelector } from '@ngrx/store';
import { OuterState } from '../reducers/app.reducers';

export const selectFundList = (state:OuterState) => state.appState.fundList;
export const getFundList = createSelector(
    selectFundList,
    fundList => fundList
);