import { Component } from '@angular/core';
import fertilizers from '../data/fertilizers';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.component.html',
  styleUrls: ['./fertilizers.component.css']
})
export class FertilizersComponent {
  items=fertilizers;

  constructor(public cs:CartService){}

  addToCart(i:number)
    {
      this.cs.cartItems.push(fertilizers[i]);
      console.log(fertilizers[i]);
    }
}
