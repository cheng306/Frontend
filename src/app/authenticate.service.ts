import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticateService {

    tokenKey = 'Token'
    firstNameKey = 'FirstName';
    lastNameKey = 'LastName'
    userNameKey = 'UserName';
    

    constructor(private http: Http, private router: Router) {}

    get isAuthenticated() {
        if (!localStorage.getItem(this.tokenKey)){
            return false;
        }
        return true;
        //return !!localStorage.getItem(this.token);
    }

    get fullName() {
        return localStorage.getItem(this.firstNameKey) + " "+ localStorage.getItem(this.lastNameKey);
    }

    get userName(){
        return localStorage.getItem(this.userNameKey);
    }

    register(user) {
        delete user.confirmPassword;
        this.http.post('http://backend20171129020828.azurewebsites.net/api/authenticate/register', user).subscribe(
            response => {
                var responseJson = response.json();

                if( !responseJson.token ){return;}

                localStorage.setItem(this.tokenKey, responseJson.token);
                localStorage.setItem(this.firstNameKey, responseJson.firstName);
                localStorage.setItem(this.lastNameKey, responseJson.lastName);
                localStorage.setItem(this.userNameKey, responseJson.userName);

                // for debug purpose
                // console.log(response);
                // console.log(responseJson);

                this.router.navigate(['/']);

            }
        );
    }

    login(loginInfo){
        this.http.post('http://localhost:56266/api/authenticate/login', loginInfo).subscribe(response =>  {
            var responseJson = response.json();
            
            //if (!responseJson.token){console.log(responseJson);console.log(response);};
    
            localStorage.setItem(this.tokenKey, responseJson.token);
            localStorage.setItem(this.firstNameKey, responseJson.firstName);
            localStorage.setItem(this.lastNameKey, responseJson.lastName);
            localStorage.setItem(this.userNameKey, responseJson.userName);

            // for debug purpose
            // console.log(response);
            // console.log(responseJson);

            this.router.navigate(['/']);},
            //loginInfo.success is for checking if login succeed
            error =>{
                loginInfo.success =false;            
            }

        )
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.firstNameKey);
        localStorage.removeItem(this.lastNameKey);
        localStorage.removeItem(this.userNameKey);
    }



}

