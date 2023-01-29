import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloorplansRoutingModule } from './floorplans-routing.module';
import { FloorplansComponent } from './floorplans.component';

@NgModule({
  declarations: [FloorplansComponent],
  imports: [CommonModule, FloorplansRoutingModule],
})
export class FloorplansModule {}
