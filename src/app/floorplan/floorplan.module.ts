import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloorplanRoutingModule } from './floorplan-routing.module';
import { FloorplanComponent } from './floorplan.component';

@NgModule({
  declarations: [
    FloorplanComponent
  ],
  imports: [
    CommonModule,
    FloorplanRoutingModule
  ]
})
export class FloorplanModule { }
