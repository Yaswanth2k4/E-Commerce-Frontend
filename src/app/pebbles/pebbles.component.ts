import { Component } from '@angular/core';
import pebbles from '../data/pebbles';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pebbles',
  templateUrl: './pebbles.component.html',
  styleUrls: ['./pebbles.component.css']
})
export class PebblesComponent {
  items=pebbles;

  constructor(public cs:CartService){}

  addToCart(i:number)
    {
      this.cs.cartItems.push(pebbles[i]);
      this.cs.cartTotal=this.cs.cartTotal + Number(pebbles[i].cost);
    }
}
