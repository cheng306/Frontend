import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
    selector: 'register',
    template: 
    `
    <div class="form">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input  placeholder="First Name" formControlName="firstName"><br>

        <input   placeholder="Last Name" formControlName="firstName"><br>

        <input  type="email"  placeholder="Email" formControlName="firstName"><br>

        <input type="password" placeholder="Password" formControlName="firstName"><br>

        <input type="password"  placeholder="Confirm Password" formControlName="firstName"><br>

      
        <button>Register</button>
    </form>
    </div>
    `
})
export class RegisterComponent { 
    form;

    constructor(private fb: FormBuilder){
        this.form = fb.group({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    onSubmit() {
        console.log(this.form.value);
    }
}
