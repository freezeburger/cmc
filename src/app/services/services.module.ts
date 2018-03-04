import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { InstagramService } from './instagram.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [StorageService, InstagramService]
})
export class ServicesModule { }
