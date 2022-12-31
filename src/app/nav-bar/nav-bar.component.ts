import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  title = 'sneakers';
  links: string[] = [];



  @Input() item: number = 0;
  @Input() products: Product[];
  @Output() reebotItem = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.links.push('Collections');
    this.links.push('Men');
    this.links.push('Women');
    this.links.push('About');
    this.links.push('Contact');
  }

  reebot() {
    this.reebotItem.emit(true);
  }
}
