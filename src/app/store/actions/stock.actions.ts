import { createAction, props } from '@ngrx/store';
import { Stock } from '../../data/model';

export const loadStocks = createAction(
  '[Stock] Load Stocks',
  props<{ selectedCountryId: number }>()
);

export const loadStocksSuccess = createAction(
  '[Stock] Load Stocks Success',
  props<{ payload: Stock[] }>()
);

export const loadStocksFailure = createAction(
  '[Stock] Load Stocks Failure',
  props<{ error: any }>()
);
