import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  albums = [
    { 'src': 'assets/images/image-product-1.jpg', 'caption': 'Sneaker', 'thumb': 'assets/images/image-product-1-thumbnail.jpg' },
    { 'src': 'assets/images/image-product-2.jpg', 'caption': 'Sneaker', 'thumb': 'assets/images/image-product-2-thumbnail.jpg' },
    { 'src': 'assets/images/image-product-3.jpg', 'caption': 'Sneaker', 'thumb': 'assets/images/image-product-3-thumbnail.jpg' },
    { 'src': 'assets/images/image-product-4.jpg', 'caption': 'Sneaker', 'thumb': 'assets/images/image-product-4-thumbnail.jpg' },
  ];

  constructor(private ligthbox: Lightbox) {

  }

  addBorder(evt: Event, position: number) {
    document.querySelector('.others figure.active')?.classList.remove('active');
    (<Element>(<Element>evt.target).parentNode).classList.add('active');
    this.open(position);
  }

  open(i: number) {
    this.ligthbox.open(this.albums, i);
  }
}
