import { State } from '../reducers/combined.reducers';

export const selectSelectedCountry = (state:State) => state.app.selectedCountry;