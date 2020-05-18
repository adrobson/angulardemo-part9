import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FinancialsService } from '../../services/financials.service';
import { loadCountrys } from '../actions/country.actions';
import { Country, Fund } from '../../data/model';
import { loadFunds } from '../actions/fund.actions';

@Injectable()
export class FundEffects {

  loadFunds$ = createEffect(
      () => this.actions$.pipe(
        ofType(loadFunds),
        mergeMap((action) => this.financialsService.getFunds(action.selectedCountryId)
        .pipe(
            map((funds:Fund[]) => ({ type:'[Fund] Load Funds Success', payload: funds })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private financialsService: FinancialsService
  ) {}
}
