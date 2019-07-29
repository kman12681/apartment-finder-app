import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../interfaces/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  price: number;

  @Output() showApartments = new EventEmitter<Filter>();

  constructor() {}

  onShowApartments(price, bedrooms, bathrooms) {
    this.showApartments.emit({
      price: price.value,
      bedrooms: bedrooms.value,
      bathrooms: bathrooms.value
    });
  }

  // formatLabel(value: number | null) {
  //   if (!value) {
  //     return 0;
  //   }
  //   switch (value) {
  //     case 0.5: {
  //       value = 500;
  //       break;
  //     }
  //     case 1: {
  //       value = 1000;
  //       break;
  //     }
  //     case 1.5: {
  //       value = 1500;
  //       break;
  //     }
  //     case 2: {
  //       value = 2000;
  //       break;
  //     }
  //     case 2.5: {
  //       value = 2500;
  //       break;
  //     }
  //     case 3: {
  //       value = 3000;
  //       break;
  //     }
  //     case 3.5: {
  //       value = 3500;
  //       break;
  //     }
  //     case 4: {
  //       value = 4000;
  //       break;
  //     }
  //     case 4.5: {
  //       value = 4500;
  //       break;
  //     }
  //     case 5: {
  //       value = 5000;
  //       break;
  //     }
  //     case 5.5: {
  //       value = 5500;
  //       break;
  //     }
  //     case 6: {
  //       value = 6000;
  //       break;
  //     }
  //     case 6.5: {
  //       value = 6500;
  //       break;
  //     }
  //     case 7: {
  //       value = 7000;
  //       break;
  //     }
  //   }
  //   return '$' + value;
  // }
}
