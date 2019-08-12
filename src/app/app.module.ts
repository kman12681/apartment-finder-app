import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { ResultsComponent } from './results/results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TableComponent } from './results/table/table.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkTreeModule } from '@angular/cdk/tree';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCheckboxModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTabsModule,
  MatTreeModule,
  MatSnackBarModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkDetailRowDirective } from './cdk-detail-row.directive';
import { SnackbarComponent } from './results/snackbar';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ResultsComponent,
    TableComponent,
    HomeComponent,
    SnackbarComponent,
    CdkDetailRowDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSliderModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatDividerModule,
    MatExpansionModule,
    CdkTableModule,
    CdkTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTreeModule,
    MatSnackBarModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  entryComponents: [SnackbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
