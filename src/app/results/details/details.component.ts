import { Component, OnInit } from '@angular/core';
import { ListingsService } from 'src/app/services/listings.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sub: Subscription;

  apartment;

  constructor(
    private listService: ListingsService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.sub = this.listService.getDetail().subscribe(result => {
      this.apartment = result;
    });
  }

  ngOnInit() {
  }
}
