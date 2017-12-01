import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdButtonModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MessagesComponent } from './messages.component';
import {CreateMessageComponent} from './createmessage.component'
import { AppComponent } from './app.component';
import { WebService } from './web.service';



@NgModule({
  imports: [ BrowserModule, HttpModule, BrowserAnimationsModule,FormsModule],
  declarations: [ AppComponent, MessagesComponent, CreateMessageComponent ],  
  bootstrap: [AppComponent],
  providers: [WebService ]
})
export class AppModule { }