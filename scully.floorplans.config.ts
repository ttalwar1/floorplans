const { RouteTypes } = require('@scullyio/scully');

const { Floorplan } = require('./scully/plugins/floorplanPlugin');

exports.config = {
  projectRoot: './src/app',
  routes: {
    '/floorplans/:floorplanId/:seriesName/:modelName': {
      type: Floorplan,
      url: 'https://hhcwebapi.azurewebsites.net/api/floorplans',
    },
  },
};
