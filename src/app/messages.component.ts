import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages"> 
       
           <div class="messagebox">
            {{message.sender}} says
            {{message.text}} at
           </div>
        
           
        </div>
    `
})
export class MessagesComponent {
    constructor(private webService : WebService) {}
        messages = [];
        async ngOnInit() {
            var response = await this.webService.getMessages();
            this.messages = response.json();
        }
    
        
}
