import { Component, Output, EventEmitter } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'createmessage',
    template: 
    `
        <div>
            <input  [(ngModel)]="message.sender" placeholder="receiver"><br>
        
        
            <textarea [(ngModel)]="message.text" placeholder="Message"></textarea><br>
        
        
            <button (click)="post()">POST</button>
        </div>
    `
})
export class CreateMessageComponent {
    constructor(private webService : WebService) {}
    @Output() onPosted1 = new EventEmitter();
    message = {
        sender: "",
        text: ""
    }

    post() {
        this.webService.postMessage(this.message);
        this.onPosted1.emit(this.message);
    }
    
        
    
       
}
