import { Component } from '@angular/core';
import offerItems from '../data/offer-items';

@Component({
  selector: 'app-offeritem',
  templateUrl: './offeritem.component.html',
  styleUrls: ['./offeritem.component.css']
})
export class OfferitemComponent {
    items=offerItems
}
