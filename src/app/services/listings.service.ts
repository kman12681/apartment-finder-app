import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  url = 'assets/listings.json';

  constructor(private http: HttpClient) {}

  public getAllListings() {
    return this.http.get<any>(this.url);
  }

  public getFilteredListings(listings, filter) {
    const price = parseInt(filter.price, 0);
    const bedrooms = parseInt(filter.bedrooms, 0);
    const bathrooms = parseInt(filter.bathrooms, 0);
    const filteredApartments = [];
    for (const apartment of listings) {
      if (
        (!price || apartment.price <= price) &&
        (!bedrooms || apartment.bedrooms === bedrooms) &&
        (!bathrooms || apartment.bathrooms === bathrooms)
      ) {
        filteredApartments.push(apartment);
      }
    }
    return filteredApartments;
  }
}
