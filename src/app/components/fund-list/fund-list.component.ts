import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/data/model';
import { FinancialsService } from 'src/app/services/financials.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FundState } from 'src/app/store/reducers/fund.reducers';
import { CountryState } from 'src/app/store/reducers/country.reducers';
import { getFundList } from 'src/app/store/selectors/fund-list.selector';
import { loadFunds } from 'src/app/store/actions/fund.actions';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {

  selectedCountryId$:Observable<number> ;
  funds$:Observable<Fund[]>;

  constructor(private countryStore:Store<CountryState>, private fundStore:Store<FundState>) {
    this.funds$ = this.fundStore.pipe(select(getFundList));
  }

  ngOnInit(): void {
   this.selectedCountryId$ = this.countryStore.select<number>(state => state.selectedCountry);
   this.selectedCountryId$.subscribe(x =>
     {
       this.getData(x);
     })
  }

  getData(countryId:any){
    if(countryId !== undefined && countryId.selectedCountry != -1){
      this.fundStore.dispatch(loadFunds({selectedCountryId:countryId.selectedCountry}));
    }
  }

}
