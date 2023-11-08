import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  homeStyle: any="";
  loginStyle: any="";
  cartStyle: any="";

  constructor(public ls:LoginService){
  }

  click: boolean=true;

  handleClick(event:any,name:String)
  {
    event.preventDefault();
    name=name;
    if(name==="home")
    {
      this.homeStyle="fill:black"
      this.loginStyle="";
      this.cartStyle="";
      this.ls.visibility="visibility:hidden"
    }
    if(name==="cart")
    {
      this.cartStyle="fill:black"
      this.loginStyle="";
      this.homeStyle="";
      this.ls.visibility="visibility:hidden"
    }
    if(name==="login")
    {
      this.loginStyle="fill:black"
      this.homeStyle="";
      this.cartStyle="";
      if(this.click) 
      {
        this.ls.visibility="visibility:visible";
        this.click=false;
      }
      else
      {
        this.ls.visibility="visibility:hidden";
        this.click=true;
      }
    }
  }
}
