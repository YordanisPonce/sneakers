import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { ContentComponent } from './content/content.component';
import { DetailsComponent } from './details/details.component';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sneakers';
  item = 0;
  status = false;
  products: Product[] = [];
  data = {
    item: this.item, products: this.products
  };
  constructor(private el:ElementRef) { }



  sendItem(resp: any) {
    if (resp instanceof ContentComponent) {
      let child: ContentComponent = resp;
      child.item.subscribe(e => {
        this.item += 1;
        this.products.push(e);

      })
    }
  }

  hideCart() {    
   alert(this.el.nativeElement.contains(CartComponent));
  }

  reebot(reebot: boolean) {
    this.status = !this.status;
    if (reebot) {
      this.item = 0;
    }
  }

  
  @HostListener("document:click", ['$event'])
   onclick(e:Event){

   }
 
}