import { Component } from '@angular/core';
import planters from '../data/planters';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-planters',
  templateUrl: './planters.component.html',
  styleUrls: ['./planters.component.css']
})
export class PlantersComponent {
  items=planters;

  constructor(public cs:CartService){}

  addToCart(i:number)
    {
      this.cs.cartItems.push(planters[i]);
      this.cs.cartTotal=this.cs.cartTotal + Number(planters[i].cost);
    }
}
