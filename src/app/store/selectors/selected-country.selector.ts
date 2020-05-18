import { OuterState } from '../reducers/app.reducers';
import { createSelector } from '@ngrx/store';

export const selectSelectedCountry = (state:OuterState) => state.appState.selectedCountry;
export const getSelectedCountry = createSelector(
    selectSelectedCountry,
    selectedCountry => selectedCountry
);