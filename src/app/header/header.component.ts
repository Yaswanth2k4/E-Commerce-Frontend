import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  homeStyle: any="";
  loginStyle: any="";
  cartStyle: any="";

  constructor(public ls:LoginService,public cs:CartService){
  }

  handleClick(event:any,name:String)
  {
    event.preventDefault();
    name=name;
    if(name==="home")
    {
      this.homeStyle="fill:black"
      this.loginStyle="";
      this.cartStyle="";
      this.ls.visibility="visibility:hidden";
      this.cs.cartVisibility="visibility:hidden";
    }
    if(name==="cart")
    {
      this.cartStyle="fill:black"
      this.loginStyle="";
      this.homeStyle="";
      this.ls.visibility="visibility:hidden"
      this.cs.cartVisibility="visibility:visible";
    }
    if(name==="login")
    {
      this.loginStyle="fill:black"
      this.homeStyle="";
      this.cartStyle="";
      this.cs.cartVisibility="visibility:hidden";
      this.ls.visibility="visibility:visible";
    }
  }
}