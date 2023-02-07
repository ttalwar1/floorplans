import { environment } from './src/environments/environment';
const { RouteTypes } = require('@scullyio/scully');

import '@scullyio/scully-plugin-puppeteer';

exports.config = {
  projectRoot: './src/app',
  outDir: 'dist/static',
  routes: {
    '/floorplans/:floorplanId/:seriesName/:modelName': {
      type: Floorplan,
      url: `${environment.API.BASE_URL}/${environment.fp}`,
    },
  },
};

// url: 'https://hhcwebapi.azurewebsites.net/api/scullyfloorplans',
// url: 'https://hhcwebapi.azurewebsites.net/api/floorplans',
// url: `${environment.API.BASE_URL}/${environment.fp}`,
