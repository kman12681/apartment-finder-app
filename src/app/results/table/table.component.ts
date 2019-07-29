import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Apartment } from 'src/app/interfaces/apartment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  get data() {
    return this.dataSource.data;
  }
  set data(value: any) {
    this.dataSource.data = value;
  }

  @Input() hasResults: boolean;

  dataSource = new MatTableDataSource<Apartment[]>();

  displayedColumns: string[] = [
    'image',
    'name',
    'address',
    'bedrooms',
    'bathrooms',
    'price'
  ];

  constructor() {}

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
