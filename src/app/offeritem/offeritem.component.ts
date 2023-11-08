import { Component } from '@angular/core';
import offerItems from '../data/offer-items';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-offeritem',
  templateUrl: './offeritem.component.html',
  styleUrls: ['./offeritem.component.css']
})
export class OfferitemComponent {
    items=offerItems
    constructor(public cs:CartService){
    }

    addToCart(i:number)
    {
      this.cs.cartItems.push(offerItems[i]);
      console.log(offerItems[i]);
    }
}
