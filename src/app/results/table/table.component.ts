import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataSource: [{}];

  @Input() hasResults: boolean;

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
