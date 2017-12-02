import { Component, Output, EventEmitter } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'createtransfer',
    template: 
    `
        <div>
            <input  [(ngModel)]="transfer.sender" placeholder="Receiver"><br>
        
        
            <input [(ngModel)]="transfer.amount" type="number" placeholder="Amount"><br>
        
        
            <button (click)="post()">POST</button>
        </div>
    `
})
export class CreateTransferComponent {
    constructor(private webService : WebService) {}
   
    transfer = {
        sender: "",
        amount: 0
    }

    post() {
        this.webService.postTransfer(this.transfer);
        console.log(this.transfer);
    }
    
        
    
       
}
