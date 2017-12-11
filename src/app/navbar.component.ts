import { Component } from '@angular/core'
import {AuthenticateService} from './authenticate.service'

@Component({
    selector: 'navbar',
    template: 
    `
        <ul>
            <li> <span class="welcome" *ngIf="auth.isAuthenticated">Welcome {{auth.fullName}}</span></li>

            <li><button routerLink="/home">Home</button></li>

            <li><button *ngIf="auth.isAuthenticated" routerLink="/transfermoney">Transfer</button></li>

            <li><button routerLink="/records">Records</button></li>

            <li><button *ngIf="!auth.isAuthenticated" routerLink="/login">login</button></li>

            <li><button *ngIf="!auth.isAuthenticated" routerLink="/register">Register</button></li>

            <li><button *ngIf="auth.isAuthenticated" (click)="auth.logout()" >Logout</button></li>
    
        </ul>       
    `
})

export class NavBarComponent {
    constructor(private auth:AuthenticateService) {}     
}
