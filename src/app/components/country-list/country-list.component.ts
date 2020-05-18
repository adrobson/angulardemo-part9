import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/data/model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCountrys, selectCountry } from 'src/app/store/actions/country.actions';
import { OuterState } from 'src/app/store/reducers/app.reducers';
import { selectCountryList } from 'src/app/store/selectors/country-list.selector';
import { selectSelectedCountry } from 'src/app/store/selectors/selected-country.selector';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
    countrys$:Observable<Country[]>;
    SelectedCountryId:number;

    constructor(private store: Store<OuterState>) {
        this.countrys$ = this.store.pipe(select(selectCountryList));
        this.store.dispatch(loadCountrys());  
    }

    ngOnInit(): void {
        this.store.pipe(select(selectSelectedCountry)).subscribe(x => {
            this.SelectedCountryId = x;
        });
    }

    onChange(){
        this.store.dispatch(selectCountry({selectedCountryId:this.SelectedCountryId}));   
    }
}
