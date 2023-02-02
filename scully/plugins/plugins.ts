import {
  registerPlugin,
  getPluginConfig,
  httpGetJson,
  routeSplit,
} from '@scullyio/scully';
import { environment } from '../../src/environments/environment';
const fetch = require('node-fetch');

export const myPlugin = 'myPlugin';

//template
// const myFunctionPlugin = async (html: string): Promise<string> => {
//   return html;
// };

const myFunctionPlugin = async (route, config) => {
  const { createPath } = routeSplit(route);

  //rewrite in typescript//
  // this.floorplanService
  //   .getFloorplans()
  //   .subscribe((floorplans: Floorplan[]) => (this.floorplans = floorplans));

  // const floorplan$ = this.http.get<any>(
  //   `${environment.API.BASE_URL}/getbymodelname`
  // );

  //rewrite
  //http get of all floorplans as observable
  //subscribe to loop through emitted values
  //for seriesName and modelName use pipe and map? to replace spaces with '-'
  //return handledRoutes as below
  //handledRoutes.push({route: createPath(item.floorplanId, item.seriesName, item.modelName)

  //BELOW UNFINISHED.  ELECTED TO UPDATE WEBAPI INSTEAD

  const response = await fetch(`${environment.API.BASE_URL}floorplans/`, {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response 2 was not ok');
      }
      return response.json();
    })
    .then((result) => {
      const handledRoutes = [];
      for (var i = 0; i < result.items.length; i++) {
        handledRoutes.push({ route: createPath(result.items[i].data.slug.iv) });
      }

      return handledRoutes;
    });

  return response;
};

const validator = async () => [];

registerPlugin('render', myPlugin, myFunctionPlugin, validator);
