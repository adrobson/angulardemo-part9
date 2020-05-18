import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FinancialsService } from '../../services/financials.service';
import { loadCountrys } from '../actions/country.actions';
import { Country } from '../../data/model';

@Injectable()
export class CountryEffects {

  loadCountrys$ = createEffect(
      () => this.actions$.pipe(
        ofType(loadCountrys),
        mergeMap(() => this.financialsService.getCountrys()
        .pipe(
            map((countrys:Country[]) => ({ type:'[Country] Load Countrys Success', payload: countrys })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private financialsService: FinancialsService
  ) {}
}
