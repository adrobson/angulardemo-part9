import { createSelector } from '@ngrx/store';
import { State } from '../reducers/combined.reducers';

export const selectStockList = (state:State) => state.app.stockList;
export const getStockList = createSelector(
    selectStockList,
    stockList => stockList
);