  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class CartService {

    constructor() { }

    cartItems: Array<any>=[];
    cartTotal: number=0;
    cartVisibility: string="visibility:hidden";
  }