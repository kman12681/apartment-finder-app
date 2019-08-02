import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListingsService } from '../services/listings.service';
import { Filter } from '../interfaces/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  min = 1500;
  max = 3000;
  bedrooms: number;
  bathrooms: number;

  hasResults: boolean;

  string = 'hello';

  constructor(private listService: ListingsService) {}

  onSetFilter() {
    this.listService.setFilter(
      this.min,
      this.max,
      this.bedrooms,
      this.bathrooms
    );
    const filter: Filter = {
      min: this.min,
      max: this.max,
      bedrooms: this.bedrooms,
      bathrooms: this.bathrooms
    };
  }

  // onShowApartments() {
  //   this.listService.showApartments();
  // }

  // onShowAll() {
  //   this.min = 0;
  //   this.max = 7000;
  //   this.bedrooms = null;
  //   this.bathrooms = null;
  //   this.onSetFilter();
  // }

  onBedroomChange(event) {
    this.bedrooms = parseInt(event.value, 0);
    this.onSetFilter();
  }

  onBathroomChange(event) {
    this.bathrooms = parseInt(event.value, 0);
    this.onSetFilter();
  }

  onMinChange(event) {
    this.min = event.value;
    this.onSetFilter();
  }

  onMaxChange(event) {
    this.max = event.value;
    this.onSetFilter();
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }

  ngOnInit() {
    // this.onSetFilter();
  }
}
