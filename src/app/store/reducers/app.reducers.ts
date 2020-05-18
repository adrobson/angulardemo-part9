import { environment } from 'src/environments/environment';
import { Action, MetaReducer, createReducer, on } from '@ngrx/store';
import * as stockActions from '../actions/stock.actions';
import * as fundActions from '../actions/fund.actions';
import * as countryActions from '../actions/country.actions';
import { initialState, AppState } from '../state-model/state-model';


export interface OuterState {
    appState:AppState
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
  
  
export function appReducers(appState: AppState | undefined, action: Action) {
    return appReducer(appState, action);
}

export const metaReducers: MetaReducer<OuterState>[] = !environment.production ? [] : [];