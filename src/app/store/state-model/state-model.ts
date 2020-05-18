import { Country, Stock, Fund } from 'src/app/data/model';

export interface AppState{
    countryList:Country[];
    selectedCountry:number;
    stockList:Stock[];
    fundList:Fund[];
}

export const initialState: AppState = {
    countryList: [], selectedCountry: -1,
    stockList: [],
    fundList: [],
}