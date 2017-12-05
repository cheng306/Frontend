import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticateService {


    constructor(private http: Http) {}

    register(user) {
        delete user.confirmPassword;
        this.http.post('http://localhost:56266/api/authenticate/register', user).subscribe();
    }

}

