import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { OfferitemComponent } from './offeritem/offeritem.component';
import { FeaturesComponent } from './features/features.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SecondfeatureComponent } from './secondfeature/secondfeature.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { VideoComponent } from './video/video.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    OfferitemComponent,
    FeaturesComponent,
    GalleryComponent,
    SecondfeatureComponent,
    EssentialsComponent,
    VideoComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
