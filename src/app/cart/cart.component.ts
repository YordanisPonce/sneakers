import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input() products: Product[] = [];
  constructor(private elementRef: ElementRef) { }

  removeItem(i: number) {
    this.products.splice(i, 1);
  }

}
