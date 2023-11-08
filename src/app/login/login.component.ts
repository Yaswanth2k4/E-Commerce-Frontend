import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Login: boolean=true;
  loginClass="btn-dark";
  signupClass="btn-secondary";
  loginStyle="";
  signupStyle="background-color:lightgray"
  loginClick()
  {
    this.Login=true;
    this.loginClass="btn-dark";
    this.signupClass="btn-secondary";
    this.loginStyle="";
    this.signupStyle="background-color:lightgray";
  }
  signupClick()
  {
    this.Login=false;
    this.loginClass="btn-secondary";
    this.signupClass="btn-dark";
    this.loginStyle="background-color:lightgray";
    this.signupStyle="";
  }
}
