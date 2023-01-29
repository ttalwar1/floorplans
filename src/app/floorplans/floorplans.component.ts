import { Component, OnInit } from '@angular/core';
import { FloorplanService } from './../services/floorplan.service';
import { Floorplan } from '../models/floorplan';
import { HttpClient } from '@angular/common/http';
import { TransferStateService } from '@scullyio/ng-lib';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-floorplans',
  templateUrl: './floorplans.component.html',
  styleUrls: ['./floorplans.component.scss'],
})
export class FloorplansComponent implements OnInit {
  floorplans!: Floorplan[];

  constructor(
    private http: HttpClient,
    private floorplanService: FloorplanService,
    private transferState: TransferStateService
  ) {}

  ngOnInit(): void {
    // this.floorplans = MockFloorplanService;   //calls mock service when no Internet

    //below works and is calling real http service defined in services
    // this.floorplanService
    //   .getFloorplans()
    //   .subscribe((floorplans: Floorplan[]) => (this.floorplans = floorplans));

    // const floorplan$ = this.http.get<any>(
    //   `${environment.API.BASE_URL}/floorplans`
    // ); 



    
    // useScullyTransferState<T>(name: string, originalState: Observable<T>): Observable<T>
    // with below, scully will provide data from local cache instead of making the API call

    const floorplan$ = this.transferState.useScullyTransferState<Floorplan[]>(
      'floorplans',
      this.http.get<Floorplan[]>(
        `${environment.API.BASE_URL}/floorplans`
      ) as any
    );

    floorplan$.subscribe((res: Floorplan[]) => {
      this.floorplans = res;
      console.log(this.floorplans);
    });



  }
}
