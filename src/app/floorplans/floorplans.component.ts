import { Component, OnInit } from '@angular/core';
import { FloorplanService } from './../services/floorplan.service';
import { Floorplan } from '../models/floorplan';
import { HttpClient } from '@angular/common/http';
import { TransferStateService } from '@scullyio/ng-lib';
import { environment } from './../../environments/environment';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-floorplans',
  templateUrl: './floorplans.component.html',
  styleUrls: ['./floorplans.component.scss'],
})
export class FloorplansComponent implements OnInit {
  //floorplans!: Floorplan[];
  floorplan: any = null;
  sortedfloorplans!: Floorplan[];
  seriesName!: string;

  // floorplans$: Observable<Floorplan[]
  // > = this.transferState.useScullyTransferState(
  //   'floorplans',
  //   this.floorplanService.floorplans$
  // );

//floorplan$ = this.transferState.useScullyTransferState('floorplans', this.floorplanService.floorplans$)

floorplans$ = this.floorplanService.floorplans$;
//next step: figure out why the transferstate doesnt work with this pattern
//use the same pattern with other get calls since these dont need an unsubscribe

  constructor(
    private floorplanService: FloorplanService,
    private transferState: TransferStateService
  ) {}

  ngOnInit(): void {
    //this.floorplans = this.returnfp();
    // const mobilehomes$ = this.transferState.useScullyTransferState(
    //   'floorplan',
    //   this.returnfp() as any
    // );
  } //ngOnInit

  // public returnfp(): Floorplan[] {
  //   this.floorplanService
  //     .getDashedFloorplans()
  //     .subscribe((floorplans: Floorplan[]) => {
  //       //disabled for now, sort by seriesName descending
  //       // floorplans.sort((a, b) =>
  //       //   b.seriesName < a.seriesName ? 1 : b.seriesName > a.seriesName ? -1 : 0
  //       // );
  //       this.floorplans = floorplans;
  //     });
  //   return this.floorplans;
  // }
}
