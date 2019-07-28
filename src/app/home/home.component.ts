import { Component } from '@angular/core';
import { ListingsService } from '../services/listings.service';
import { Apartment } from '../interfaces/apartment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apartments: Apartment[] = [];
  filteredApartments: Apartment[] = [];
  results;

  constructor(private listService: ListingsService) {}

  getApartments(filter) {
    console.log(filter);
    this.listService.getAllListings().subscribe(apartments => {
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
      for (const apartment of this.apartments) {
        if (apartment.price <= parseInt(filter.price, 0)) {
          this.filteredApartments.push(apartment);
        }
        this.results = this.filteredApartments;
      }
    });
  }
}
