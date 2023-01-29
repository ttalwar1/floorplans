import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Floorplan } from './../models/floorplan';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FloorplanService {
  private AzureUrlProxy: string =
    'https://hhcwebapi.azurewebsites.net/api/Floorplans';
  /** private AzureUrlProxy: string = 'https://heritagedata.azurewebsites.net/Floorplans';  */
  /** private apiURL = 'http://localhost:4200/api';  */

  floorPlans!: Floorplan[];
  floorPlansOnDisplay!: Floorplan[];
  floorplan!: Floorplan[];

  constructor(private readonly http: HttpClient) {}

  getFloorplans(): Observable<Floorplan[]> {
    return this.http.get<Floorplan[]>(this.AzureUrlProxy).pipe(
      tap((floorPlans: Floorplan[]) => {
        this.floorPlans = floorPlans;
        // this.floorPlansOnDisplay = floorPlans.filter((floorPlan: Floorplan) => floorPlan.onDisplay === "TRUE ")
        this.floorPlansOnDisplay = floorPlans.filter(
          (floorPlan: Floorplan) => floorPlan.onDisplay === true
        );
      }),
      catchError(this.handleError<Floorplan[]>('getFloorplans', []))
    );
  }

  //'https://hhcwebapi.azurewebsites.net/api/Floorplans/getbymodelname'
  //'https://hhcwebapi.azurewebsites.net/api/Media/MediaId'
  //mobile app POST to above, for iOs and Android
  //turo.com
  //georges.b.rattel@gmail.com

  getByModelName(modelName: string): Observable<Floorplan[]> {
    return this.http
      .get<Floorplan[]>(
        `${environment.API.BASE_URL}/Floorplans/getbymodelname/${modelName}`
      )
      .pipe(
        tap((floorplan: Floorplan[]) => {
          this.floorplan = floorplan;
        }),
        catchError(this.handleError<Floorplan[]>('getFloorplan'))
      );
  }

  /** filter for onDisplay=TRUE or FALSE */

  /** handle Http operation failed.   */
  private handleError<T>(opertion = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: send error to remote logging infrastructure
      this.log('error in getFloorplans');
      console.error(error); //log to console
      this.log(error.message);

      return of(result as T);
    };
  }

  /** Log a message with injected MessageService by creating a wrapper since we call it so much */
  private log(message: string): void {
    /**this.messageService.add(`Mobilehome.service: ${message}`);*/
    console.log(message);
  }
}
