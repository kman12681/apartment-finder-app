import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../interfaces/filter';
import { mixinColor } from '@angular/material/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterObj: Filter;

  @Output() setFilter = new EventEmitter<Filter>();

  constructor() {}

  ngOnInit() {}

  onSetFilter(min, max, bedrooms, bathrooms) {
    this.setFilter.emit({
      min: min.value,
      max: max.value,
      bedrooms: bedrooms.value,
      bathrooms: bathrooms.value
    });
  }
}
