import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/data/model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCountrys, selectCountry } from 'src/app/store/actions/country.actions';
import { CountryState } from 'src/app/store/reducers/country.reducers';
import { getCountryList } from 'src/app/store/selectors/country-list.selector';
import { selectSelectedCountry } from 'src/app/store/selectors/selected-country.selector';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countrys$:Observable<Country[]>;
  SelectedCountryId:number;
  selectedCountryId$:Observable<any>;

  constructor(private store: Store<CountryState>) {
      this.countrys$ = this.store.pipe(select(getCountryList));
      this.selectedCountryId$ = this.store.pipe(select(selectSelectedCountry));
  }

  ngOnInit(): void {
    this.store.dispatch(loadCountrys());  
    this.selectedCountryId$.subscribe(x => this.SelectedCountryId = x.selectedCountry);
  }

  onChange(){
    this.store.dispatch(selectCountry({selectedCountryId:this.SelectedCountryId}));   
  }
}
