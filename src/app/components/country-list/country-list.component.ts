import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/data/model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCountrys, selectCountry } from 'src/app/store/actions/country.actions';
import { State } from 'src/app/store/reducers/app.reducers';
import { selectCountryList } from 'src/app/store/selectors/country-list.selector';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
    countrys$:Observable<Country[]>;
    SelectedCountryId:number;
    selectedCountryId$:Observable<any>;

    constructor(private store: Store<State>) {
        this.countrys$ = this.store.pipe(select(selectCountryList));
        this.selectedCountryId$ = this.store.select(x => x.app.selectedCountry);
    }

    ngOnInit(): void {
        this.store.dispatch(loadCountrys());  
        this.selectedCountryId$.subscribe(x => {
            this.SelectedCountryId = x;
        });
    }

    onChange(){
        this.store.dispatch(selectCountry({selectedCountryId:this.SelectedCountryId}));   
    }
}
