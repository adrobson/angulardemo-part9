import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/data/model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectStockList } from 'src/app/store/selectors/stock-list.selector';
import { loadStocks } from 'src/app/store/actions/stock.actions';
import { OuterState } from 'src/app/store/reducers/app.reducers';
import { selectSelectedCountry } from 'src/app/store/selectors/selected-country.selector';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  
  stocks$:Observable<Stock[]>;

  constructor(private store:Store<OuterState>) {
    this.stocks$ = this.store.pipe(select(selectStockList));
  }
  
  ngOnInit(): void {
    this.store.pipe(select(selectSelectedCountry)).subscribe(x => {
      this.getData(x);
    });
  }

  getData(countryId:number){
    this.store.dispatch(loadStocks({selectedCountryId:countryId}));
  }
}
