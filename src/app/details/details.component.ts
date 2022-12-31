import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  amount: number = 1;
  loading = false;

  @Output() item = new EventEmitter<Product>();

  add() {
    this.amount += 1;
  }
  quit() {
    this.amount -= this.amount > 1 ? 1 : 0;
  }

  addToCart() {
    this.loading = true;
    setTimeout(() => {
      let product = new Product('Fall limited edition snakers', 150.00, '../../assets/images/image-product-1-thumbnail.jpg', this.amount);
      this.amount = 1;
      this.item.emit(product);
      this.loading = false;
    }, 2000);

  }
}
