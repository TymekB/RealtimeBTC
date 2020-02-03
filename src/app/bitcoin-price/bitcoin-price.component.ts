import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BitcoinService} from "../services/bitcoin.service";

@Component({
    selector: 'bitcoin-price',
    templateUrl: './bitcoin-price.component.html',
    styleUrls: ['./bitcoin-price.component.css']
})
export class BitcoinPriceComponent implements OnInit {

    private price: number;

    constructor(private bitcoinService: BitcoinService) {
    }

    ngOnInit() {

        let setBtcPrice = () => {
            this.bitcoinService.getCurrentPrice().subscribe((res: any) => {
                this.price = res.bpi.USD.rate_float;
            });
        };

        setBtcPrice();

        setInterval(() => {
            setBtcPrice();
        }, 1000);
    }
}
