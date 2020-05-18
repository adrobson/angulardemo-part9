import { createSelector } from '@ngrx/store';
import { OuterState } from '../reducers/app.reducers';

export const selectStockList = (state:OuterState) => state.appState.stockList;
export const getStockList = createSelector(
    selectStockList,
    stockList => stockList
);