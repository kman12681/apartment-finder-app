import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Filter } from '../interfaces/filter';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  filteredApartments = [{}];
  constructor(private http: HttpClient) {}

  public getAllListings(filterObj: Filter): Observable<any> {
    const listings = 'assets/listings.json';
    const results = this.http.get(listings);
    return results;
  }

  // public getFilteredListings(filter: Filter) {
  // return this.getAllListings().subscribe(response => {
  //   this.filteredApartments = response.data;
  //   const objs = this.filteredApartments.map(x => {
  //     return {
  //       image_id: x[7],
  //       building_name: x[6],
  //       address: x[3],
  //       bedrooms: x[0],
  //       bathrooms: x[2],
  //       price: x[1]
  //     };
  //   });
  //   this.filteredApartments = objs;
  //   console.log(this.filteredApartments);
  // for (const data of response.data) {
  //   if (data.price <= filter.min) {
  //     apartments.push(data);
  //   }
  // }
}
