import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    CurrencyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
