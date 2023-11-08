import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems: Array<any>=[];
  cartVisibility: string="visibility:hidden";
}
