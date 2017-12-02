import { Component} from '@angular/core';
import {TransfersComponent } from './transfers.component';
import {CreateTransferComponent} from './createtransfer.component';

@Component({
  selector: 'app-root',
  template: 
  `
    <h1>Your Transfer Here</h1> 
    <div><transfers></transfers></div>
    <createtransfer></createtransfer>
  `,
})
export class AppComponent  {

 }
