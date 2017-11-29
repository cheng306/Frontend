import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{name}}</h1> <messages></messages>`,
})
export class AppComponent  { name = 'World'; }
