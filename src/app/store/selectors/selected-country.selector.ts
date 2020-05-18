import { State } from '../reducers/app.reducers';

export const selectSelectedCountry = (state:State) => state.app.selectedCountry;