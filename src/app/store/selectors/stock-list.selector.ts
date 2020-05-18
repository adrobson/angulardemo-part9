import { createSelector } from '@ngrx/store';
import { State } from '../reducers/app.reducers';

export const selectStockList = (state:State) => state.app.stockList;
export const getStockList = createSelector(
    selectStockList,
    stockList => stockList
);