import { CountryState } from '../reducers/country.reducers';
import { createSelector } from '@ngrx/store';

export const selectCountryList = (state:CountryState) => state.countryList;
export const getCountryList = createSelector(
    selectCountryList,
    countryList => countryList
);