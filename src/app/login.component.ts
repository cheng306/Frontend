import { Component } from '@angular/core';
import { AuthenticateService } from './authenticate.service';

@Component({
    selector: 'login',
    template: `

        <input [(ngModel)]="loginInfo.username" placeholder="Username"><br>

        <input [(ngModel)]="loginInfo.password" placeholder="Password" type="password">
  
        <button  (click)="login()">Login</button><br>

        <span *ngIf="!this.loginInfo.success"> Invalid Username or Password</span>

    ` 
})
export class LoginComponent {
    constructor(private auth:  AuthenticateService) { }

    loginInfo = { username: '', password: '', success:true};

    login() {
        this.auth.login(this.loginInfo);
    }
}