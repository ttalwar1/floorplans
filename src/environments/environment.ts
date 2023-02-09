// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: {
    BASE_URL: 'https://hhcwebapi.azurewebsites.net/api',
  },
  fp: 'floorplans',  //toggle endpoints: floorplans & scullyfloorplans(removes spaces)
};


//RESULTS:
//when using 'scullyfloorplans', removes spaces in API for seriesName etc
//e.g. Columbia River is delivered as Columbia-River
//when using 'floorplans', deliver as Columbia River
//prefer to use 'floorplans' so that API is not having to make adjustments for pathnames

//https://hhcwebapi.azurewebsites.net/api/floorplans
//https://hhcwebapi.azurewebsites.net/api/scullyfloorplans