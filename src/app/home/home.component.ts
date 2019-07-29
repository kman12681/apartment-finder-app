import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ListingsService } from '../services/listings.service';
import { Apartment } from '../interfaces/apartment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apartments: Apartment[] = [];
  filteredApartments: Apartment[] = [];
  results: Apartment[];
  hasResults: boolean;

  constructor(private listService: ListingsService) {}

  getApartments(filter) {
    this.results = [];
    this.listService.getAllListings().subscribe(apartments => {
      this.apartments = apartments.data.map(x => {
        return {
          image_id: x[7],
          building_name: x[6],
          address: x[3],
          bedrooms: x[0],
          bathrooms: x[2],
          price: x[1]
        };
      });
      this.results = this.listService.getFilteredListings(
        this.apartments,
        filter
      );
    });
    this.hasResults = true;
  }

  ngOnInit() {}
}
