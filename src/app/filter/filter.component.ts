import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../interfaces/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() showApartments = new EventEmitter<Filter>();

  constructor() {}

  onShowApartments(price, bedrooms, bathrooms) {
    this.showApartments.emit({
      price: price.value,
      bedrooms: bedrooms.value,
      bathrooms: bathrooms.value
    });
  }
}
