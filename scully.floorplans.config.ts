

const {RouteTypes} = require('@scullyio/scully');

const {News} = require('./scully/plugins/floorplanPlugin');

exports.config = {
  projectRoot: './src/app',
  routes: {
    '/floorplans/:floorplanId/:modelName': {
      type: News,
      url: 'https://hhcwebapi.azurewebsites.net/api/floorplans',
    },
  }
};


// import { httpGetJson, registerPlugin, ScullyConfig } from '@scullyio/scully';
// import '@scullyio/scully-plugin-puppeteer';
// import { ScullyConfig } from '@scullyio/scully';
// // scully.config.ts
// export const config: ScullyConfig = {
//   // Add the following to your file
//   routes: {
//     '/floorplans/:floorplanId/:modelName': {
//       type: 'json',
//       floorplanId: {
//         url: 'https://hhcwebapi.azurewebsites.net/api/floorplans',
//         property: 'floorplanId',
//         resultsHandler: (raw: any) => raw.floorplanId
//       },
//       modelName: {
//         url: 'https://hhcwebapi.azurewebsites.net/api/floorplans/${floorplanId}',
//         property: 'modelName',
//         resultsHandler: (raw: any) => raw.modelName
//       },
//     },
//   },
// };
