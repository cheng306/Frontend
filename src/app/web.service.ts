import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {

    transfersList = [];

    constructor(private http: Http) {
        this.getTransfers();
    }

    async getTransfers() {
        
        var response = await this.http.get('http://localhost:56266/api/transfers').toPromise();
        this.transfersList = response.json();
        console.log("get");
        
    }

    async postTransfer(transfer) {
        var response = await this.http.post('http://localhost:56266/api/transfers', transfer).toPromise();
        this.transfersList.push(response.json());
        //console.log("pushed");
    }
}