import { CountryState } from '../reducers/country.reducers';
import { createSelector } from '@ngrx/store';
import { StockState } from '../reducers/stock.reducers';

export const selectStockList = (state:StockState) => state.stockList;
export const getStockList = createSelector(
    selectStockList,
    stockList => stockList
);