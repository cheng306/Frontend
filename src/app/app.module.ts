import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdButtonModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TransfersComponent } from './transfers.component';
import {CreateTransferComponent} from './createtransfer.component'
import { AppComponent } from './app.component';
import { WebService } from './web.service';



@NgModule({
  imports: [ BrowserModule, HttpModule, BrowserAnimationsModule,FormsModule],
  declarations: [ AppComponent, TransfersComponent, CreateTransferComponent ],  
  bootstrap: [AppComponent],
  providers: [WebService ]
})
export class AppModule { }