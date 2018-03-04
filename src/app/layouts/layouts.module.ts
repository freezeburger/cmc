import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.page/home.page.component';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent]
})
export class LayoutsModule { }
