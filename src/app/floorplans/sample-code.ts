    // this.floorplans = MockFloorplanService;   //calls mock service when no Internet

    //below works and is calling real http service defined in services
    // this.floorplanService
    //   .getFloorplans()
    //   .subscribe((floorplans: Floorplan[]) => (this.floorplans = floorplans));

    // const floorplan$ = this.http.get<any>(
    //   `${environment.API.BASE_URL}/getbymodelname`
    // );

    // useScullyTransferState<T>(name: string, originalState: Observable<T>): Observable<T>
    // with below, scully will provide data from local cache instead of making the API call
    //WORKING CODE
    // const floorplan$ = this.transferState.useScullyTransferState<Floorplan[]>(
    //   'floorplans',
    //   this.http.get<Floorplan[]>(
    //     `${environment.API.BASE_URL}/${environment.fp}`
    //   ) as any
    // );

    // floorplan$.subscribe((res: Floorplan[]) => {
    //   this.floorplans = res;
    //   console.log(this.floorplans);
    // });


    // this.floorplanService
    //   .getDashedFloorplans()
    //   .subscribe((floorplans: Floorplan[]) => {
    //     //sort by seriesName descending
    //     floorplans.sort((a, b) =>
    //       b.seriesName < a.seriesName ? 1 : b.seriesName > a.seriesName ? -1 : 0
    //     );
    //     this.floorplans = floorplans;
    //   });




    //below for troubleshooting.... code moved to service and called above
    // const floorplan$ = this.http
    //   .get<Floorplan[]>(`${environment.API.BASE_URL}/${environment.fp}`)
    //   .pipe(
    //     map((data: Floorplan[]) => {
    //       return data.map((floorplan) => ({
    //         seriesName: floorplan.seriesName.trim().replace(/\s+/g, '-'), //get rid of spaces for pathname
    //         modelName: floorplan.modelName.trim().replace(/\s+/g, '-'),
    //         floorplanId: floorplan.floorplanId,
    //         floorplanCaption: floorplan.floorplanCaption,
    //         floorplanDescription: floorplan.floorplanDescription,
    //         floorplanUrl: floorplan.floorplanUrl,
    //         thumbnailUrl: floorplan.thumbnailUrl,
    //       }));
    //     })
    //   );

    //next steps:
    //have my pipe working to remove dashes, I can drop the scullyservice for floorplans
    //how do I do the same for the url parameter in the scully config.ts?

    //troubleshooting - remove later
    // floorplan$.subscribe((floorplans: Floorplan[]) => {
    //   const sortedfp = Array.from(
    //     new Set(floorplans.map((home) => home.modelName))
    //   ).sort();
    //   console.log('sorted by modelName original');
    //   console.log(sortedfp);

    //   const sortedseriesName = Array.from(
    //     new Set(floorplans.map((home) => home.seriesName))
    //   ).sort();
    //   console.log('sorted by modelName original');
    //   console.log(sortedseriesName);
      //troubleshooting - remove later

      // const sortedfp2 = Array.from(
      //   new Set(
      //     floorplans.sort((a, b) => {
      //       if (b.seriesName < a.seriesName) return -1;
      //       if (b.seriesName > a.seriesName) return 1;
      //       return 0;
      //     })
      //   )
      //console.log('sorted by seriesName using sortedfp4');
      //console.log(sortedfp4);
    // });
    //tap(data => console.log(JSON.stringify(data))),  //dumps out the object as json for troubleshooting
  