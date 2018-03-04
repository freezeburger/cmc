import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class ComponentsModule { }
