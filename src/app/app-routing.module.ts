//to toggle pathnames, need to change:
//1.path below to use :floorplanId or :modelName
//2.floorplans.component.html routerlink to update path
//3.floorplan.component.ts code as marked for API call
//4.use localhost:1668 for scully or localhost:4200 for Angular w/o scully

// path: 'floorplans/:seriesName/:modelName',
//path: 'floorplans/:floorplanId',

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./floorplans/floorplans.module').then((m) => m.FloorplansModule),
  },
  {
    path: 'floorplans/:floorplanId/:seriesName/:modelName',
    loadChildren: () =>
      import('./floorplan/floorplan.module').then((m) => m.FloorplanModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
