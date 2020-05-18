import {
  MetaReducer,
  createReducer, on, Action
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { Stock } from '../../data/model';
import * as stockActions from '../actions/stock.actions';

export interface StockState {
  stockList:Stock[];
}

export const initialState: StockState = {
  stockList: [],
}


const demoreducer = createReducer(
  initialState,
  on(stockActions.loadStocks, (state, { selectedCountryId }) => ({ ...state, stockList:state.stockList })),
  on(stockActions.loadStocksSuccess, (state, { payload }) => ({ ...state, stockList: payload })),
)


export function stockReducers(state: StockState = initialState, action: Action) {
  return demoreducer(state, action);
}

export const metaReducers: MetaReducer<StockState>[] = !environment.production ? [] : [];
