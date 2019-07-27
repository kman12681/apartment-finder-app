import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataSource: [{}];

  // dataSource = new MatTableDataSource<any>(this.apartments);
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = [
    'image',
    'name',
    'address',
    'bedrooms',
    'bathrooms',
    'price'
  ];

  constructor() {
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // console.log(this.dataSource);
  }

  // applyFilter(filterValue: string) {
  //   this.data.filter = filterValue.trim().toLowerCase();
  // }
}
