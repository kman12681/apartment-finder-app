import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from './snackbar';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  constructor(private snackbar: MatSnackBar) {}

  getSnackbar(event) {
    this.snackbar.openFromComponent(SnackbarComponent, { duration: 3000 });
  }
}
