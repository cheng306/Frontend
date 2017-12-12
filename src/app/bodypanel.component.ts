import { Component} from '@angular/core';
import {TransfersComponent } from './transfers.component';
import {CreateTransferComponent} from './createtransfer.component';
import {NavBarComponent} from './navbar.component'
import {AuthenticateService} from './authenticate.service'

@Component({
  selector: 'bodypanel',
  template: 
  `
    <div><transfers></transfers></div>
    
    <createtransfer *ngIf="auth.isAuthenticated"></createtransfer>
  `,
})
export class BodyPanelComponent  {
  constructor(private auth:  AuthenticateService) { }

 }
