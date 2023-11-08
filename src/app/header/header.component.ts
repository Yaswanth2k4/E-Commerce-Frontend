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

  loginClick: boolean=true;
  cartClick: boolean=true;

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
      this.loginClick=true;
      this.cartClick=true;
    }
    if(name==="cart")
    {
      this.cartStyle="fill:black"
      this.loginStyle="";
      this.homeStyle="";
      this.ls.visibility="visibility:hidden"
      this.loginClick=true;
      if(this.cartClick) 
      {
        this.cs.cartVisibility="visibility:visible";
        this.cartClick=false;
      }
      else
      {
        this.cs.cartVisibility="visibility:hidden";
        this.cartClick=true;
      }
    }
    if(name==="login")
    {
      this.loginStyle="fill:black"
      this.homeStyle="";
      this.cartStyle="";
      this.cartClick=true;
      this.cs.cartVisibility="visibility:hidden";
      if(this.loginClick) 
      {
        this.ls.visibility="visibility:visible";
        this.loginClick=false;
      }
      else
      {
        this.ls.visibility="visibility:hidden";
        this.loginClick=true;
      }
    }
  }
}
