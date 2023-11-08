import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public cs:CartService){}
  
  imagePath: string="assets/images/anthurium.png";
  orig_price: string="1014";
  price:string="559 (45% off)";
  title="Lushy Spider plant(Chlorophytum)";
  review="277";
  discount="Extra 30% Instant Discount";
  style={
    "width":"80%",
    "height":"auto",
    "margin-left":"20px",
    "margin-top":"10px"
  }

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
