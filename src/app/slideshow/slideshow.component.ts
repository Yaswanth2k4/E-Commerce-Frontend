import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {
  bannerPath: string='assets/images/banner1.jpg'
  bannerPath2: string='assets/images/banner2.jpg'
  bannerPath3: string='assets/images/banner3.jpg'
  headingBG: string='assets/images/headingBG.png'
}