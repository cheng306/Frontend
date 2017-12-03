import { Component} from '@angular/core';
import {TransfersComponent } from './transfers.component';
import {CreateTransferComponent} from './createtransfer.component';
import {NavBarComponent} from './navbar.component'

@Component({
  selector: 'bodypanel',
  template: 
  `
    
    <div><transfers></transfers></div>
    <createtransfer></createtransfer>
  `,
})
export class BodyPanelComponent  {

 }
