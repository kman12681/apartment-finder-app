import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ListingsService } from '../services/listings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private listService: ListingsService, private router: Router) {}

  getListings(filter) {
    this.listService.getApartments(filter);
    this.router.navigateByUrl('/home/results');
  }

  ngOnInit() {}
}
