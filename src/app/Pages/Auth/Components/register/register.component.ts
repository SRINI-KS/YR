import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent  implements OnInit {

  registerData = this._formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['', Validators.required],

    email: ['', Validators.required],
    password: ['', Validators.required],
    phoneNumber: ['', Validators.required],

    role: ['', Validators.required],
    profession: [''],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) {
    
  }
  ngOnInit() {}

  register() {
    console.log(this.registerData.value)
    if (this.registerData) {

      this.authService
        .registerUser(this.registerData.value)
        .subscribe((Response) => {
          console.log(Response);
          this.router.navigate(['login']);
        },
        
        );
    }
  }
}
