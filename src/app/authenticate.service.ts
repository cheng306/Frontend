import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticateService {

    token = 'token'
    firstName = 'firstname';
    lastName = 'lastname'

    constructor(private http: Http, private router: Router) {}

    register(user) {
        delete user.confirmPassword;
        this.http.post('http://localhost:56266/api/authenticate/register', user).subscribe(
            response => {
                var responseJson = response.json();

                if( !responseJson.token ){return;}

                localStorage.setItem(this.token, responseJson.token);
                localStorage.setItem(this.firstName, responseJson.firstName);
                localStorage.setItem(this.lastName, responseJson.lastName);

                this.router.navigate(['/']);
                

            }
        );
    }

    get isAuthenticated() {
        if (!localStorage.getItem(this.token)){
            return false;
        }
        return true;
        //return !!localStorage.getItem(this.token);
    }

    get fullName() {
        return localStorage.getItem(this.firstName) + " "+ localStorage.getItem(this.lastName);
    }

    logout() {
        localStorage.removeItem(this.token);
        localStorage.removeItem(this.firstName);
        localStorage.removeItem(this.lastName);
    }

    login(loginInfo){
        this.http.post('http://localhost:56266/api/authenticate/login', loginInfo).subscribe(response =>  {
            var responseJson = response.json();
            
            //if (!responseJson.token){console.log(responseJson);console.log(response);};
    
            localStorage.setItem(this.token, responseJson.token);
            localStorage.setItem(this.firstName, responseJson.firstName);
            localStorage.setItem(this.lastName, responseJson.lastName);
            this.router.navigate(['/']);},
            error =>{
                loginInfo.success =false;
                
            }

        )
    }


}

