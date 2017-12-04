import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdButtonModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TransfersComponent } from './transfers.component';
import {CreateTransferComponent} from './createtransfer.component'
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import {NavBarComponent} from './navbar.component'
import {BodyPanelComponent} from './bodypanel.component'
import {RegisterComponent} from './register.component'

var paths = [
  {path: '', component: BodyPanelComponent}
  ,{path: 'transfermoney', component: CreateTransferComponent}
  ,{path: 'records', component: TransfersComponent}
  ,{path: 'records/:sender', component: TransfersComponent}
  ,{path: 'home', component: BodyPanelComponent}
  ,{path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [ BrowserModule, HttpModule, BrowserAnimationsModule,FormsModule, ReactiveFormsModule, RouterModule.forRoot(paths)],
  declarations: [ AppComponent, TransfersComponent, CreateTransferComponent, NavBarComponent,BodyPanelComponent,RegisterComponent ],  
  bootstrap: [AppComponent],
  providers: [WebService ]
})
export class AppModule { }