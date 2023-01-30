

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


