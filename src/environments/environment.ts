// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: {
    BASE_URL: 'https://hhcwebapi.azurewebsites.net/api',
  },
  fp: 'scullyfloorplans',
};

//environment variable fp is used to toggle which API I call
//api with floorplans end point returns spaces
//api with scullyfloorplans replaces spaces with '-'
