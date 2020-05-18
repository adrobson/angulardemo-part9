import { createAction, props } from '@ngrx/store';
import { Fund } from '../../data/model';

export const loadFunds = createAction(
  '[Fund] Load Funds',
  props<{ selectedCountryId: number }>()
);

export const loadFundsSuccess = createAction(
  '[Fund] Load Funds Success',
  props<{ payload: Fund[] }>()
);

