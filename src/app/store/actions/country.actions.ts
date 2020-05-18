import { createAction, props } from '@ngrx/store';
import { Country } from '../../data/model';

export const loadCountrys = createAction(
  '[Country] Load Countrys'
);

export const loadCountrysSuccess = createAction(
  '[Country] Load Countrys Success',
  props<{ payload: Country[] }>()
);

export const loadCountrysFailure = createAction(
  '[Country] Load Countrys Failure',
  props<{ error: any }>()
);

export const selectCountry = createAction(
  '[Country] Select Country',
  props<{ selectedCountryId: number }>()
);