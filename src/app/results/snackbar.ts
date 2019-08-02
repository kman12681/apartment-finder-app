import { Component, Input, OnInit } from '@angular/core';
import { Filter } from '../interfaces/filter';

@Component({
  selector: 'app-snackbar',
  template: `
    <span style="margin: 0 auto;">
      <p>No matches</p>
    </span>
  `
})
export class SnackbarComponent {
  constructor() {}
}
