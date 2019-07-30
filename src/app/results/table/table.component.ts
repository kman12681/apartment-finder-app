import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Apartment } from 'src/app/interfaces/apartment';
import { Subscription } from 'rxjs';
import { ListingsService } from 'src/app/services/listings.service';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  sub: Subscription;
  results = [];
  selection = new SelectionModel<Apartment>(true, []);

  dataSource = new MatTableDataSource<Apartment[]>(this.results);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = [
    'image',
    'name',
    'address',
    'bedrooms',
    'bathrooms',
    'price'
  ];

  constructor(private listService: ListingsService, private router: Router) {
    this.sub = this.listService.getResults().subscribe(results => {
      this.results = results;
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.sub.unsubscribe();
  }

  getDetails(row?: Apartment) {
    this.listService.getDetails(row.image_id);
    this.router.navigateByUrl('/home/details/' + row.image_id);
  }
}
