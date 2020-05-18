import { createSelector } from '@ngrx/store';
import { State } from '../reducers/combined.reducers';

export const selectFundList = (state:State) => state.app.fundList;
export const getFundList = createSelector(
    selectFundList,
    fundList => fundList
);