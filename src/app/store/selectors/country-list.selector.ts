import { createSelector } from '@ngrx/store';
import { State } from '../reducers/combined.reducers';

export const selectCountryList = (state:State) => state.app.countryList;
export const getCountryList = createSelector(
    selectCountryList,
    countryList => countryList
);