import { Component } from '@angular/core'
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'transfers',
    template: `
        <div *ngFor="let transfer of webService.transfersList"> 
       
           <div class="messagebox" >
            <button [routerLink]="['/records', transfer.sender]" >{{transfer.sender}}</button> sends
            {{transfer.amount}} at
           </div>

           
        </div>
    `
})
export class TransfersComponent {
    constructor(private webService : WebService,private route: ActivatedRoute) {
        
    }

    ngOnInit(){
        console.log(this.route.snapshot.params.sender);
    }
        
    
        
}
