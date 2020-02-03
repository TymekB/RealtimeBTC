import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class BitcoinService {

    constructor(private http: HttpClient) { }

    getCurrentPrice() {
        return this.http.get("https://api.coindesk.com/v1/bpi/currentprice.json");
    }
}
