import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FinancialsService } from '../../services/financials.service';
import { Stock } from '../../data/model';
import { loadStocks } from '../actions/stock.actions';

@Injectable()
export class StockEffects {

  loadStocks$ = createEffect(
      () => this.actions$.pipe(
        ofType(loadStocks),
        mergeMap((action) => this.financialsService.getStocks(action.selectedCountryId)
        .pipe(
            map((stocks:Stock[]) => ({ type:'[Stock] Load Stocks Success', payload: stocks })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private financialsService: FinancialsService
  ) {}
}
