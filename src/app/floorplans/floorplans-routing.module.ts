import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloorplansComponent } from './floorplans.component';

const routes: Routes = [{ path: '', component: FloorplansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorplansRoutingModule { }
