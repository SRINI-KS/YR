import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  implements OnInit {

  constructor(private f: FormBuilder,private router:Router,
    private authService:AuthService
    ) {}

  ngOnInit(): void {

    if (this.authService.isLogin() && this.authService.isProvider()) {
      this.router.navigate(['provider']);
    } else if (this.authService.isLogin() && this.authService.isUser()) {
      this.router.navigate(['customer']);
    }

  }

  loginForm = this.f.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  });

  login() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value)

      this.authService.loginUser(this.loginForm.value).subscribe(
        (Response:any)=>{
          this.authService.setToken(Response.data.token)
          this.authService.setUsername(Response.data.username)
          this.authService.setRole(Response.data.role)
          this.authService.setEmail(Response.data.email)
          this.authService.setUserId(Response.data.userId)

         
          this.loginForm.reset()
          this.ngOnInit()
          console.log(Response)

        },
        (Error:HttpErrorResponse)=>{
        }
      )
    }
  }

  demo(){
    this.authService.demo().subscribe(
      (Response: any)=>{
        console.log(Response)
      }
    )
  }


}
