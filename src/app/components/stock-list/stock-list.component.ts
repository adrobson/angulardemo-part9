import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/data/model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getStockList, selectStockList } from 'src/app/store/selectors/stock-list.selector';
import { loadStocks } from 'src/app/store/actions/stock.actions';
import { State } from 'src/app/store/reducers/combined.reducers';
import { selectSelectedCountry } from 'src/app/store/selectors/selected-country.selector';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  selectedCountryId$:Observable<number> ;
  stocks$:Observable<Stock[]>;
  constructor(private store:Store<State>) {
    this.stocks$ = this.store.pipe(select(selectStockList));
  }
  
  ngOnInit(): void {
    this.selectedCountryId$ = this.store.pipe(select(selectSelectedCountry));
    this.selectedCountryId$.subscribe(x => {
      this.getData(x);
    });
  }

  getData(countryId:any){
    this.store.dispatch(loadStocks({selectedCountryId:countryId}));
  }
}
