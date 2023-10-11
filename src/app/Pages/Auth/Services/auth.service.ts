import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl;


  constructor(private router: Router, private http: HttpClient) { }


  // login
  loginUser(loginData: any) {
    return this.http.post(`${this.url}api/v1/auth/authenticate`, loginData);
  }

  //Register
  registerUser(registerData: any) {

    return this.http.post(`${this.url}api/v1/auth/register`, registerData);
  }
  demo(){
    return this.http.get("https://v2.jokeapi.dev/joke/Any")
  }


  // Auth method

  setToken(token: any) {
    localStorage.setItem('Token', token);
  }
  setUsername(token: any) {
    localStorage.setItem('Username', token);
  }
  setRole(token: any) {
    localStorage.setItem('Role', token);
  }
  setEmail(token: any) {
    localStorage.setItem('Email', token);
  }
  setUserId(token: any) {
    localStorage.setItem('UserId', token);
  }


  logOut() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Username');
    localStorage.removeItem('Role');
    localStorage.removeItem('userId');
    localStorage.removeItem('Email');

    this.router.navigate(['home']);
  }

  getToken() {
    return localStorage.getItem('Token');
  }

  isLogin() {
    return this.getToken() != null;
  }

  isUser() {
    let role: string;
    role = String(localStorage.getItem('Role'));
    if (role == 'CUSTOMER') {
      return true;
    } else {
      return false;
    }
  }
  isProvider() {
    let role: string;
    role = String(localStorage.getItem('Role'));
    if (role == 'PROVIDER') {
      return true;
    } else {
      return false;
    }
  }
  getUserName() {
    return localStorage.getItem('Username')
  }
  getEmail() {
    return localStorage.getItem('Email')
  }
  getUserId() {
    return localStorage.getItem('UserId')
  }
}
