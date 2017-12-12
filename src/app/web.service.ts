import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'

@Injectable()
export class WebService {

    private internalTransfersList = [];
    private transfersSubject = new Subject();
    transfersList = this.transfersSubject.asObservable();

    constructor(private http: Http) {
        this.getTransfers(null);
    }

    //asyn get method
    /*
    async getTransfers() {
        
        var response = await this.http.get('http://backend20171129020828.azurewebsites.net/api/transfers').toPromise();
        this.transfersList = response.json();
        console.log("get");     
    }
    */

    getTransfers(sender) {
        
        sender = (sender) ? '/' + sender : '';
        this.http.get('http://localhost:56266/api/transfers' + sender).subscribe(
            response => {
                this.internalTransfersList = response.json();
                this.transfersSubject.next(this.internalTransfersList);
            }
            //, error => {console.error("Get Fail");}
        );

    }

    async postTransfer(transfer) {
        var response = await this.http.post('http://localhost:56266/api/transfers', transfer).toPromise();
        this.internalTransfersList.push(response.json());
        this.transfersSubject.next(this.internalTransfersList);
        //console.log("pushed");
    }
}