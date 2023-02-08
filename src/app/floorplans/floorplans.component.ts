import { Component, OnInit } from '@angular/core';
import { FloorplanService } from './../services/floorplan.service';
import { Floorplan } from '../models/floorplan';
import { HttpClient } from '@angular/common/http';
import { TransferStateService } from '@scullyio/ng-lib';
import { environment } from './../../environments/environment';
import { map, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-floorplans',
  templateUrl: './floorplans.component.html',
  styleUrls: ['./floorplans.component.scss'],
})
export class FloorplansComponent implements OnInit {
  floorplans!: Floorplan[];
  sortedfloorplans!: Floorplan[];
  seriesName!: string;

  constructor(
    private http: HttpClient,
    private floorplanService: FloorplanService,
    private transferState: TransferStateService
  ) {}

  ngOnInit(): void {
    this.floorplans = this.returnfp();
  } //ngOnInit

  public returnfp(): Floorplan[] {
    this.floorplanService
      .getDashedFloorplans()
      .subscribe((floorplans: Floorplan[]) => {
        //disabled for now, sort by seriesName descending
        // floorplans.sort((a, b) =>
        //   b.seriesName < a.seriesName ? 1 : b.seriesName > a.seriesName ? -1 : 0
        // );
        this.floorplans = floorplans;
      });
    return this.floorplans;
  }
}
