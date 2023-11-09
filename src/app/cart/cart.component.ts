import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public cs:CartService){}

  close(event:MouseEvent)
  {
    event.preventDefault();
    this.cs.cartVisibility="visibility:hidden"
  }

  remove(event:any,i:number)
  {
    event.preventDefault();
    this.cs.cartItems.splice(i,1);
  }

}
