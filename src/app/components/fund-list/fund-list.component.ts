import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/data/model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getFundList, selectFundList } from 'src/app/store/selectors/fund-list.selector';
import { loadFunds } from 'src/app/store/actions/fund.actions';
import { OuterState } from 'src/app/store/reducers/app.reducers';
import { selectSelectedCountry } from 'src/app/store/selectors/selected-country.selector';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {

  funds$:Observable<Fund[]>;

  constructor(private store:Store<OuterState>) {
    this.funds$ = this.store.pipe(select(selectFundList));
  }

  ngOnInit(): void {
   this.store.pipe(select(selectSelectedCountry)).subscribe(x =>
     {
       this.getData(x);
     })
  }

  getData(countryId:any){
      this.store.dispatch(loadFunds({selectedCountryId:countryId}));
  }

}
