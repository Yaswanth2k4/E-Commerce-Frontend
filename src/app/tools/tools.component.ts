import { Component } from '@angular/core';
import tools from '../data/tools';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
  items=tools;

  constructor(public cs:CartService){}

  addToCart(i:number)
    {
      this.cs.cartItems.push(tools[i]);
      console.log(tools[i]);
    }
}
