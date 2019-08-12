import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apartment } from '../interfaces/apartment';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Filter } from '../interfaces/filter';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  private url = 'assets/listings.json';
  private apartments: Apartment[] = [];
  private filter: Filter = {
    min: null,
    max: null,
    bedrooms: null,
    bathrooms: null
  };
  private results: Apartment[];

  private resultsSub = new Subject<Apartment[]>();

  constructor(private http: HttpClient, private router: Router) {}

  public getListings() {
    return this.http.get<any>(this.url);
  }

  public showApartments() {
    this.getListings().subscribe(apartments => {
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
      this.results = this.getFilteredListings(this.apartments, this.filter);
      this.sendResults(this.results);
    });
  }

  public getFilteredListings(listings, filter) {
    const min = filter.min;
    const max = filter.max;
    const bedrooms = filter.bedrooms;
    const bathrooms = filter.bathrooms;
    const filteredApartments = [];
    for (const apartment of listings) {
      if (
        (!min || apartment.price >= min) &&
        (!max || apartment.price <= max) &&
        (!bedrooms || apartment.bedrooms === bedrooms) &&
        (!bathrooms || apartment.bathrooms === bathrooms)
      ) {
        filteredApartments.push(apartment);
      }
    }
    return filteredApartments;
  }

  public setFilter(filterMin, filterMax, filterBedrooms, filterBathrooms) {
    this.filter = {
      min: filterMin || undefined,
      max: filterMax || undefined,
      bedrooms: filterBedrooms || undefined,
      bathrooms: filterBathrooms || undefined
    };
    this.showApartments();
  }

  public getResults(): Observable<any> {
    return this.resultsSub.asObservable();
  }

  private sendResults(results) {
    this.resultsSub.next(results);
  }
}
