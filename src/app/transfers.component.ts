import { Component } from '@angular/core'
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'transfers',
    template: `
        <div *ngFor="let transfer of webService.transfersList | async"> 
       
           <div class="messagebox" >
            <button [routerLink]="['/records', transfer.sender]" >{{transfer.sender}}</button> sends
            {{transfer.amount}} at
           </div>

           
        </div>
    `
})
export class TransfersComponent {

    transfers;

    constructor(private webService : WebService,private route: ActivatedRoute) {}

    ngOnInit(){
        var sender = this.route.snapshot.params.sender;
        this.webService.getTransfers(sender);
    }
        
    
        
}
