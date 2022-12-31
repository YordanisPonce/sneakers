import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent,
    NavBarComponent,
    ContentComponent,
    CarouselComponent,
    DetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
