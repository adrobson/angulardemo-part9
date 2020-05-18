import {
  MetaReducer,
  createReducer, on, Action
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { Fund } from '../../data/model';
import * as fundActions from '../actions/fund.actions';

export interface FundState {
  fundList:Fund[];
}

export const initialState: FundState = {
  fundList: [],
}


const demoreducer = createReducer(
  initialState,
  on(fundActions.loadFunds, state => ({ ...state })),
  on(fundActions.loadFundsSuccess, (state, { payload }) => ({ ...state, fundList: payload })),
)


export function fundReducers(state: FundState = initialState, action: Action) {
  return demoreducer(state, action);
}


export const metaReducers: MetaReducer<FundState>[] = !environment.production ? [] : [];
