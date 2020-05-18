import { environment } from 'src/environments/environment';
import { Action, MetaReducer, createReducer, on } from '@ngrx/store';
import * as stockActions from '../actions/stock.actions';
import * as fundActions from '../actions/fund.actions';
import * as countryActions from '../actions/country.actions';
import { Country, Fund, Stock } from 'src/app/data/model';

export interface AppState{
    countryList:Country[];
    selectedCountry:number;
    stockList:Stock[];
    fundList:Fund[];
}

export interface State {
    app:AppState
}

export const initialState: AppState = {
    countryList: [], selectedCountry: -1,
    stockList: [],
    fundList: [],
}

const appReducer = createReducer(
    initialState,
    on(countryActions.loadCountrys, state => ({ ...state })),
    on(countryActions.loadCountrysSuccess, (state, { payload }) => ({ ...state, countryList: payload })),
    on(countryActions.selectCountry, (state, { selectedCountryId }) => ({ ...state, selectedCountry:selectedCountryId })),
    on(stockActions.loadStocks, (state) => ({ ...state })),
    on(stockActions.loadStocksSuccess, (state, { payload }) => ({ ...state, stockList: payload })),
    on(fundActions.loadFunds, state => ({ ...state })),
    on(fundActions.loadFundsSuccess, (state, { payload }) => ({ ...state, fundList: payload })),
)
  
  
export function appReducers(app: AppState | undefined, action: Action) {
    return appReducer(app, action);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];