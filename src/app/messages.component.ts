import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages"> 
       
           
           {{message.owner}}
           {{message.text}}
           
        </div>
    `
})
export class MessagesComponent {
    constructor(private webService : WebService) {}
    
        async ngOnInit() {
            var response = await this.webService.getMessages();
            this.messages = response.json();
        }
    
        messages = [];
}
