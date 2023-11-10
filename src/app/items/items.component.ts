import { Component } from '@angular/core';
import items from '../data/items';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items=items;

  constructor(public cs:CartService){}

  addToCart(i:number)
    {
      this.cs.cartItems.push(items[i]);
      console.log(items[i]);
    }
}
