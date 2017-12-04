import { Component} from '@angular/core';
import {TransfersComponent } from './transfers.component';
import {CreateTransferComponent} from './createtransfer.component';
import {NavBarComponent} from './navbar.component'

@Component({
  selector: 'app-root',
  template: 
  `
    
    <div class="navbar"><navbar></navbar></div>
    <div><router-outlet></router-outlet></div>
  `,
})
export class AppComponent  {

}
