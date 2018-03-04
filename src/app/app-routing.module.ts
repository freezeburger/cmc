import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomePageComponent } from './layouts/home.page/home.page.component';
import { LayoutsModule } from './layouts/layouts.module';

const routes : Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}