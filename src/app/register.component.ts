import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from './authenticate.service';   


@Component({
    selector: 'register',
    template: 
    `
    <div class="form">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input placeholder="First Name" formControlName="firstName"
        [ngClass]="{'error': form.controls.firstName.invalid}"><br>

        <input [ngClass]="{'error': form.controls.lastName.invalid}"
        placeholder="Last Name" formControlName="lastName"><br>      
        
        <input [ngClass]="{'error': form.controls.phone.invalid}"
        type="tel"placeholder="Phone" formControlName="phone"><br>

        <input [ngClass]="{'error': form.controls.email.invalid}"
        type="email" placeholder="Email" formControlName="email"><br>
        
        <input [ngClass]="{'error': form.controls.password.invalid}"
        type="password" placeholder="Password" formControlName="password"><br>
        
        <input [ngClass]="{'error': form.controls.confirmPassword.invalid}"
        type="password"  placeholder="Confirm Password" formControlName="confirmPassword"><br>

        <span *ngIf="form.errors?.passwordMismatch">Passwords has to match!!!</span><br>

        <button>Register</button>
    </form>
    </div>
    `,

})
export class RegisterComponent { 
    form;

    constructor(private fb: FormBuilder, private auth: AuthenticateService){
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', [Validators.required, checkEmail()]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]},
            { validator: isPasswordMatch('password', 'confirmPassword')}
    )
    }

    onSubmit() {
        //console.log(this.form.value);
        //this.auth.register(this.form.value);
        console.log(this.form.value);
    }
}


function isPasswordMatch(p1, p2) {
    return form => {
        if (form.controls[p1].value !== form.controls[p2].value)
            return { passwordMismatch: true }
    }
}

function checkEmail(){
    return control => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(control.value) ? null : { invalidEmail: true }
    }
}
