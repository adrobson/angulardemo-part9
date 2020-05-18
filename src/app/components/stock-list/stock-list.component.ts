import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/data/model';
import { Observable } from 'rxjs';
import { StockState } from 'src/app/store/reducers/stock.reducers';
import { Store, select } from '@ngrx/store';
import { getStockList } from 'src/app/store/selectors/stock-list.selector';
import { CountryState } from 'src/app/store/reducers/country.reducers';
import { loadStocks } from 'src/app/store/actions/stock.actions';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  selectedCountryId$:Observable<number> ;
  stocks$:Observable<Stock[]>;
  constructor(private countryStore:Store<CountryState>, private stockStore:Store<StockState>) {
    this.stocks$ = this.stockStore.pipe(select(getStockList));
  }
  
  ngOnInit(): void {
    this.selectedCountryId$ = this.countryStore.select<number>(state => state.selectedCountry);
    this.selectedCountryId$.subscribe(x => {
      this.getData(x);
    });
  }

  getData(countryId:any){
    if(countryId !== undefined && countryId.selectedCountry != -1){
        this.stockStore.dispatch(loadStocks({selectedCountryId:countryId.selectedCountry}));
    }
  }
}
