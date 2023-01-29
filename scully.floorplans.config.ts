import { httpGetJson, registerPlugin, ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  routes: {
    '/floorplans/:modelName': {
      type: 'json',
      postRenderers: [],
      modelName: {
        url: 'https://hhcwebapi.azurewebsites.net/api/floorplans',
        property: 'modelName',
      },
    },
  },
};

//when I click into a floorplan http://localhost:1668/floorplans/9590, I do not get any data but transferstate seems to be working as only data.json files are used
//once I get above 2 figured out, then save to repository
//convert to the pathname that I want
