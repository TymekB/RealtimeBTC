import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'bitcoin-price',
    templateUrl: './bitcoin-price.component.html',
    styleUrls: ['./bitcoin-price.component.css']
})
export class BitcoinPriceComponent implements OnInit {

    private price: number;

    constructor(private http:HttpClient) { }

    ngOnInit() {

        let setBtcPrice = () => {
            this.http.get("https://api.coindesk.com/v1/bpi/currentprice.json").subscribe((res: any) => {
                this.price = res.bpi.USD.rate_float;
            });
        };

        setBtcPrice();

        setInterval(() => {
            setBtcPrice();
        }, 1000);
    }
}
