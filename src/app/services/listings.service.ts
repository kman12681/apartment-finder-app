import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  constructor(private http: HttpClient) {}

  public getAllListings() {
    const url = 'assets/listings.json';
    return this.http.get<any>(url);
  }

}
