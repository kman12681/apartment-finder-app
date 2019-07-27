import {
  Component,
  Input,
  ViewChild,
  OnInit,
  AfterContentInit
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Apartment } from '../interfaces/apartment';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() apartments: [{}];

  constructor() {}

  ngOnInit() {}
}
