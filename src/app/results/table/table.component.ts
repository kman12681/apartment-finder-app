import { Component, OnInit, OnDestroy, ViewChild, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Apartment } from 'src/app/interfaces/apartment';
import { Subscription, Subject, Observable } from 'rxjs';
import { ListingsService } from 'src/app/services/listings.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  transition,
  animate,
  style
} from '@angular/animations';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state(
        'void',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class TableComponent implements OnDestroy {
  panelOpenState = false;
  sub: Subscription;
  results = [];
  results$ = new Observable<any>();
  hasResults: boolean;

  @Output() showResults = new EventEmitter();

  dataSource = new MatTableDataSource<Apartment[]>();

  displayedColumns: string[] = [
    'name',
    'address',
    'bedrooms',
    'bathrooms',
    'price'
  ];

  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');

  constructor(private listService: ListingsService) {
    this.sub = this.listService.getResults().subscribe(results => {
      this.results = results;
      this.hasResults = this.results.length > 0;
      if (!this.hasResults) {
        this.showResults.emit();
      }
    });

    // if not using mat-table, below for async pipe on view
    this.results$ = this.listService.getResults();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.sub.unsubscribe();
  }
}
