import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'transfers',
    template: `
        <div *ngFor="let transfer of webService.transfersList"> 
       
           <div class="messagebox">
            {{transfer.sender}} sends
            {{transfer.amount}} at
           </div>

           
        </div>
    `
})
export class TransfersComponent {
    constructor(private webService : WebService) 
    {console.log("created");}
        
    
        
}
