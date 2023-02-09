import { environment } from './src/environments/environment';
import '@scullyio/scully-plugin-puppeteer';

const { RouteTypes } = require('@scullyio/scully');

//import { getFloorplanPlugin } from './scully/plugins/floorplanPlugin';
const { getFloorplanPlugin } = require('./scully/plugins/floorplanPlugin'); //custom plugin inside scully/plugins
const FloorplanPlugIn = getFloorplanPlugin();

exports.config = {
  projectRoot: './src/app',
  outDir: 'dist/static',
  routes: {
    '/floorplans/:floorplanId/:seriesName/:modelName': {
      type: FloorplanPlugIn,
      url: `${environment.API.BASE_URL}/${environment.fp}`,
    },
  },
};

// url: 'https://hhcwebapi.azurewebsites.net/api/scullyfloorplans',
// url: 'https://hhcwebapi.azurewebsites.net/api/floorplans',
// url: `${environment.API.BASE_URL}/${environment.fp}`,
