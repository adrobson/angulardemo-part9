import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FundsHomeComponent } from './components/funds-home/funds-home.component';
import { StocksHomeComponent } from './components/stocks-home/stocks-home.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { FundListComponent } from './components/fund-list/fund-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { countryReducers } from './store/reducers/country.reducers';
import { stockReducers } from './store/reducers/stock.reducers';
import { fundReducers } from './store/reducers/fund.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CountryEffects } from './store/effects/country.effects';
import { StockEffects } from './store/effects/stock.effects';
import { FundEffects } from './store/effects/fund.effects';


@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    FundsHomeComponent,
    StocksHomeComponent,
    CountryListComponent,
    StockListComponent,
    FundListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([CountryEffects, StockEffects, FundEffects]),
    StoreModule.forRoot({ countryList:countryReducers, stockList:stockReducers, selectedCountry:countryReducers, fundList:fundReducers  }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
