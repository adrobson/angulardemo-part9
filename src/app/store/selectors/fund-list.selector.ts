import { CountryState } from '../reducers/country.reducers';
import { createSelector } from '@ngrx/store';
import { FundState } from '../reducers/fund.reducers';

export const selectFundList = (state:FundState) => state.fundList;
export const getFundList = createSelector(
    selectFundList,
    fundList => fundList
);