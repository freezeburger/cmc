import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


import {
  MatAutocompleteModule
  ,MatButtonModule
  ,MatButtonToggleModule
  ,MatCardModule
  ,MatCheckboxModule
  ,MatChipsModule
  ,MatCommonModule
  ,NativeDateModule
  ,MatNativeDateModule
  ,MatLineModule
  ,MatOptionModule
  ,MatRippleModule
  ,MatPseudoCheckboxModule
  ,MatDatepickerModule
  ,MatDialogModule
  ,MatDividerModule
  ,MatExpansionModule
  ,MatFormFieldModule
  ,MatGridListModule
  ,MatIconModule
  ,MatInputModule
  ,MatListModule
  ,MatMenuModule
  ,MatPaginatorModule
  ,MatProgressBarModule
  ,MatProgressSpinnerModule
  ,MatRadioModule
  ,MatSelectModule
  ,MatSidenavModule
  ,MatSlideToggleModule
  ,MatSliderModule
  ,MatSnackBarModule
  ,MatSortModule
  ,MatStepperModule
  ,MatTableModule
  ,MatTabsModule
  ,MatToolbarModule
  ,MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
/*
import * as MaterialDesign from '@angular/material';

const MaterialDesignModules = Object
  .entries(MaterialDesign)
  .filter(entry => entry[0].includes('Module'))
  .map( entry => {console.log(entry[0]);return entry})
  .map(entry => entry[1])

*/
@NgModule({
  imports: [
    CommonModule
  ], 
  declarations: [], 
  exports: [
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
    ,MatAutocompleteModule
    ,MatButtonModule
    ,MatButtonToggleModule
    ,MatCardModule
    ,MatCheckboxModule
    ,MatChipsModule
    ,MatCommonModule
    ,NativeDateModule
    ,MatNativeDateModule
    ,MatLineModule
    ,MatOptionModule
    ,MatRippleModule
    ,MatPseudoCheckboxModule
    ,MatDatepickerModule
    ,MatDialogModule
    ,MatDividerModule
    ,MatExpansionModule
    ,MatFormFieldModule
    ,MatGridListModule
    ,MatIconModule
    ,MatInputModule
    ,MatListModule
    ,MatMenuModule
    ,MatPaginatorModule
    ,MatProgressBarModule
    ,MatProgressSpinnerModule
    ,MatRadioModule
    ,MatSelectModule
    ,MatSidenavModule
    ,MatSlideToggleModule
    ,MatSliderModule
    ,MatSnackBarModule
    ,MatSortModule
    ,MatStepperModule
    ,MatTableModule
    ,MatTabsModule
    ,MatToolbarModule
    ,MatTooltipModule
  ]
})
export class SharedModule {}