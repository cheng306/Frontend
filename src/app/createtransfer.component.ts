import { Component, Output, EventEmitter } from '@angular/core'
import { WebService } from './web.service'
import {AuthenticateService} from './authenticate.service'

@Component({
    selector: 'createtransfer',
    template: 
    `
        <div>
            <input  [(ngModel)]="transfer.receiver" placeholder="Receiver"><br>
        
            <input [(ngModel)]="transfer.amount" type="number" placeholder="Amount"><br>
        
            <button (click)="post()">POST</button>
        </div>
    `
})
export class CreateTransferComponent {
    constructor(private webService : WebService, private auth:  AuthenticateService) {}
   
    transfer = {
        sender: "",
        receiver:"",
        amount: 0
    }

    post() {
        console.log(this.transfer.sender);
        this.transfer.sender = this.auth.userName;
        this.webService.postTransfer(this.transfer);
        console.log(this.transfer);
    }
    
        
    
       
}
