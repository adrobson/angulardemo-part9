import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/data/model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getFundList } from 'src/app/store/selectors/fund-list.selector';
import { loadFunds } from 'src/app/store/actions/fund.actions';
import { State } from 'src/app/store/reducers/combined.reducers';
import { selectSelectedCountry } from 'src/app/store/selectors/selected-country.selector';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {

  selectedCountryId$:Observable<number> ;
  funds$:Observable<Fund[]>;

  constructor(private store:Store<State>) {
    this.funds$ = this.store.select(x => x.app.fundList);
  }

  ngOnInit(): void {
   this.selectedCountryId$ = this.store.pipe(select(selectSelectedCountry));
   this.selectedCountryId$.subscribe(x =>
     {
       this.getData(x);
     })
  }

  getData(countryId:any){
      this.store.dispatch(loadFunds({selectedCountryId:countryId}));
  }

}
