import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'messagess',
    template: `
        <div *ngFor="let message of messagess"> 
       
           
           {{message.owner}} says
           {{message.text}} at
           
        </div>
    `
})
export class MessagesComponent {
    constructor(private webService : WebService) {}
    
        async ngOnInit() {
            var response = await this.webService.getMessages();
            this.messagess = response.json();
        }
    
        messagess = [];
}
