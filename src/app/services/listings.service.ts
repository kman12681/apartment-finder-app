import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apartment } from '../interfaces/apartment';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  url = 'assets/listings.json';
  apartments: Apartment[] = [];
  filteredApartments: Apartment[] = [];
  results: Apartment[];
  hasResults: boolean;

  private resultsSub = new Subject<Apartment[]>();

  private detailSub = new Subject<Apartment[]>();

  constructor(private http: HttpClient) {}

  public getAllListings() {
    return this.http.get<any>(this.url);
  }

  getApartments(filter) {
    this.getAllListings().subscribe(apartments => {
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
      this.results = this.getFilteredListings(this.apartments, filter);
      this.sendResults(this.results);
    });
    this.hasResults = true;
  }

  public getFilteredListings(listings, filter) {
    const price = filter.price;
    const bedrooms = filter.bedrooms;
    const bathrooms = filter.bathrooms;
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

  sendResults(results) {
    this.resultsSub.next(results);
  }

  getResults(): Observable<any> {
    return this.resultsSub.asObservable();
  }

  sendDetails(details) {
    this.detailSub.next(details);
  }

  getDetails(id) {
    for (const result of this.results) {
      if (result.image_id === id) {
        this.sendDetails(result);
        // return this.detailSub.asObservable();
      }
    }
  }

  getDetail(): Observable<Apartment[]> {
    return this.detailSub.asObservable();
  }
}
