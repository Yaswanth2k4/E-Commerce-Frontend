import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  constructor(public cs:CartService){
    console.log(cs.cartTotal)
  }

  close(event:MouseEvent)
  {
    event.preventDefault();
    this.cs.cartVisibility="visibility:hidden"
  }

  remove(event:any,i:number)
  {
    event.preventDefault();
    this.cs.cartTotal=this.cs.cartTotal - Number(this.cs.cartItems[i].cost);
    this.cs.cartItems.splice(i,1);
    console.log(this.cs.cartTotal);
  }
}