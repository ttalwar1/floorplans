import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { pluck, switchMap, map } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';
import { Floorplan } from './../models/floorplan';
import { TransferStateService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.scss'],
})
export class FloorplanComponent {
  floorplan!: Floorplan[];
  url!: string;
  id!: string;
  seriesName: string = 'Columbia River';
  modelName!: string;
  description!: string;
  mobilehome: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  //

  ngOnInit() {

    //Two Branches of Code that toggle the calls as marked to give me the paths


    //branch A: code below works with scully and path of 'floorplans/:floorplanId',
    const mobilehomeAPI$ = this.route.parent?.params.pipe(
      pluck('floorplanId'),
      switchMap((id) =>
        this.http.get<any>(`${environment.API.BASE_URL}/floorplans/${id}`)
      )
    );

    const mobilehome$ = this.transferState.useScullyTransferState(
      'floorplan',
      mobilehomeAPI$ as any
    );

    mobilehome$?.subscribe((res) => {
      this.mobilehome = res;
      this.description = this.mobilehome.floorplanCaption;
      this.url = this.mobilehome.thumbnailUrl;
    });

    // branch B: uncomment out below and works w/o scully on path: 'floorplans/:seriesName/:modelName'
    // const mobilehome$ = this.route.parent?.params.pipe(
    //   pluck('modelName'),
    //   switchMap((id) =>
    //     this.http.get<any>(
    //       `${environment.API.BASE_URL}/floorplans/${id}`
    //     )
    //   )
    // );

    // mobilehome$?.subscribe((res) => {
    //   this.mobilehome = res;
    //   this.description = this.mobilehome[0].floorplanCaption;
    //   this.url = this.mobilehome.thumbnailUrl;
    // });




  }
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.

  //FULLY WORKING EXAMPLE
  // ngOnInit() {
  //   const floorplan = this.route.parent?.params.pipe(
  //     pluck('floorplanId'),
  //     switchMap((id) =>
  //       this.http.get<Floorplan>(
  //         `${environment.API.BASE_URL}/Floorplans/getbymodelname/${id}`
  //       )
  //     )
  //   );

  //   floorplan?.subscribe((res: any) => {
  //     this.floorplan = res;
  //     this.url = this.floorplan[0].thumbnailUrl!;
  //     console.log(this.floorplan);
  //   });
  // }
}
