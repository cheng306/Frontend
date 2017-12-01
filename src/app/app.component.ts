import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages.component';
import {CreateMessageComponent} from './createmessage.component';

@Component({
  selector: 'app-root',
  template: 
  `
    <h1>Your Text Message here</h1> 
    <div><messages></messages></div>
    <createmessage (onPosted1)="onPosted2($event)"></createmessage>
  `,
})
export class AppComponent  {
  @ViewChild(MessagesComponent) messages : MessagesComponent;

  onPosted2(message) {
    this.messages.messages.push(message);
  }
 }
