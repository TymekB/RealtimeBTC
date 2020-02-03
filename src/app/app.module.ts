import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BitcoinPriceComponent } from './bitcoin-price/bitcoin-price.component';
import {HttpClientModule} from "@angular/common/http";
import { Ng2OdometerModule } from 'ng2-odometer';


@NgModule({
    declarations: [
        AppComponent,
        BitcoinPriceComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        Ng2OdometerModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
