import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {


  @Output() item = new EventEmitter<Product>();

  sendItem(value: Product) {
    this.item.emit(value);
  }
}
