import { Component, Input, ViewChild } from '@angular/core';
import { ListingsService } from './services/listings.service';
import { Filter } from './interfaces/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apartments = [{}];

  filterObj: Filter;

  constructor(private listingService: ListingsService) {
    this.getAllListings({min: 1500, max: 1500, bedrooms: 1, bathrooms: 2});
  }

  getAllListings(filter: Filter) {
    this.listingService.getAllListings(filter).subscribe(apartments => {
      this.apartments = apartments.data;
      const objs = this.apartments.map(x => {
        return {
          image_id: x[7],
          building_name: x[6],
          address: x[3],
          bedrooms: x[0],
          bathrooms: x[2],
          price: x[1]
        };
      });
      this.apartments = objs;
    });
  }

  getFilteredListings(filter) {
    this.filterObj = {
      min: filter.min,
      max: filter.max,
      bedrooms: filter.bedrooms,
      bathrooms: filter.bathrooms
    };
    // this.listingService.getFilteredListings(this.filterObj);
  }
}
