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
import { CartService } from './cart.service';
import { ItemsComponent } from './items/items.component';
import { PlantersComponent } from './planters/planters.component';
import { FertilizersComponent } from './fertilizers/fertilizers.component';
import { PebblesComponent } from './pebbles/pebbles.component';
import { ToolsComponent } from './tools/tools.component';

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
    CartComponent,
    ItemsComponent,
    PlantersComponent,
    FertilizersComponent,
    PebblesComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [LoginService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
