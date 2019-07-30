import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../interfaces/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  price: any;
  bedrooms: number;
  bathrooms: number;

  @Output() showApartments = new EventEmitter<Filter>();

  constructor() {}

  onShowApartments() {
    this.showApartments.emit({
      price: this.price,
      bedrooms: this.bedrooms,
      bathrooms: this.bathrooms
    });
  }

  onBedroomChange(event) {
    this.bedrooms = parseInt(event.value, 0);
    this.onShowApartments();
  }

  onBathroomChange(event) {
    this.bathrooms = parseInt(event.value, 0);
    this.onShowApartments();
  }

  onPriceChange(event) {
    this.price = event.value;
    this.onShowApartments();
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }
}
