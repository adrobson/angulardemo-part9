import { CountryState } from '../reducers/country.reducers';

export const selectSelectedCountry = (state:CountryState) => state.selectedCountry;