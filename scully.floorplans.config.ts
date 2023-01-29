import { httpGetJson, registerPlugin, ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

// scully.config.ts
// https://hhcwebapi.azurewebsites.net/api

export const config: ScullyConfig = {
  routes: {
    'floorplans/:floorplanId/:modelName': {
      type: 'json',
      postRenderers: [],
      floorplanId: {
        url: 'https://hhcwebapi.azurewebsites.net/api/floorplans',
        property: 'floorplanId',
      },
      modelName: {
        url:
          'https://hhcwebapi.azurewebsites.net/api/floorplans/${floorplanId}',
        property: 'modelName',
      },
    },
  },
};

// export const config: ScullyConfig = {
//   routes: {
//     '/floorplans/:seriesName/:modelName': {
//       type: 'json',
//       /**
//        * postRenderers: postRenderers[]
//        *
//        * This options allows you to configure postRenderers for this route returned
//        * by this `/users/:userId` plugin.
//        */
//       postRenderers: [],
//       seriesName: {
//         /**
//          * url: string
//          *
//          * An API that returns a response containing the data (preferribly an array)
//          * needed for all `userId`s in the system.
//          */
//         url: 'https://hhcwebapi.azurewebsites.net/api/Floorplans',
//         /**
//          * property: string
//          *
//          * If the `url` returns an array of objects, use the `property` to provide the
//          * name of the property that can be used to pluck the `floorplanId` from each item.
//          * If the APi returns a list of items using the `id` property for the `userId`,
//          * the following config would pluck the `id` property off of each user object.
//          */
//         property: 'seriesName',
//         // property: 'modelName',
//         /**
//          * headers: {[key:string]:any}
//          *
//          * If the `url` API requires specific headers, you can provide those here. The
//          * header name is the key, and the header value is the value.
//          */
//         headers: {
//           /**
//            * expectedContentType: string
//            *
//            * By default plugin expects `application/json` Content-Type in response headers.
//            * If the API returns different type of content use the `expectedContentType` to specify
//            * different type. Error will be thrown if content types do not match.
//            */
//           // expectedContentType: 'application/vnd.api+json',
//           // 'API-KEY': '0123456789',
//         },
//         /**
//          * resultsHandler: (response: any) => any[]
//          *
//          * If the `url` returns an object, use the `resultsHandler` to map that object
//          * into an array of objects/ids.
//          *
//          * In the following example, the server returned an object where the users were
//          * nested inside of the `response.data` property. So the resultsHandler returns
//          * `response.data.users`.
//          */
//         // resultsHandler: (response: { data: { users: any } }) =>
//         //   response.data.users,
//       },
//       modelName: {
//         /**
//          * url: string
//          *
//          * An API that returns a response containing the data (preferribly an array)
//          * needed for all `userId`s in the system.
//          */
//         url: 'https://hhcwebapi.azurewebsites.net/api/Floorplans',
//         /**
//          * property: string
//          *
//          * If the `url` returns an array of objects, use the `property` to provide the
//          * name of the property that can be used to pluck the `floorplanId` from each item.
//          * If the APi returns a list of items using the `id` property for the `userId`,
//          * the following config would pluck the `id` property off of each user object.
//          */
//         property: 'modelName',
//         // property: 'modelName',
//         /**
//          * headers: {[key:string]:any}
//          *
//          * If the `url` API requires specific headers, you can provide those here. The
//          * header name is the key, and the header value is the value.
//          */
//         headers: {
//           /**
//            * expectedContentType: string
//            *
//            * By default plugin expects `application/json` Content-Type in response headers.
//            * If the API returns different type of content use the `expectedContentType` to specify
//            * different type. Error will be thrown if content types do not match.
//            */
//           // expectedContentType: 'application/vnd.api+json',
//           // 'API-KEY': '0123456789',
//         },
//         /**
//          * resultsHandler: (response: any) => any[]
//          *
//          * If the `url` returns an object, use the `resultsHandler` to map that object
//          * into an array of objects/ids.
//          *
//          * In the following example, the server returned an object where the users were
//          * nested inside of the `response.data` property. So the resultsHandler returns
//          * `response.data.users`.
//          */
//         // resultsHandler: (response: { data: { users: any } }) =>
//         //   response.data.users,
//       },
//     },
//   },
// };
