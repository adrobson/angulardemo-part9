import {
  MetaReducer,
  createReducer, on, Action
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { Stock, Fund, Country } from '../../data/model';
import * as countryActions from '../actions/country.actions';

export interface CountryState {
  countryList:Country[];
  selectedCountry:number;
}

export const initialState: CountryState = {
  countryList: [],
  selectedCountry: -1,
}


const demoReducer = createReducer(
  initialState,
  on(countryActions.loadCountrys, state => ({ ...state, countryList:state.countryList })),
  on(countryActions.loadCountrysSuccess, (state, { payload }) => ({ ...state, countryList: payload })),
  on(countryActions.selectCountry, (state, { selectedCountryId }) => ({ ...state, selectedCountry:selectedCountryId })),
)


export function countryReducers(state: CountryState = initialState, action: Action) {
  return demoReducer(state, action);
}


