import { createSelector } from '@ngrx/store';
import { OuterState } from '../reducers/app.reducers';

export const selectCountryList = (state:OuterState) => state.appState.countryList;
export const getCountryList = createSelector(
    selectCountryList,
    countryList => countryList
);