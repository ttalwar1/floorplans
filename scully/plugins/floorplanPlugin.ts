// const { routeSplit, registerPlugin, httpGet } = require('@scullyio/scully');


// const floorplanPlugin = async (route, config) => {
//   const { createPath } = routeSplit(route);
//   const list = await httpGet(
//     'https://hhcwebapi.azurewebsites.net/api/floorplans'
//   );
//   const handledRoutes = [];
//   for (let item of list) {
//     const blogData = await httpGet(
//       `https://hhcwebapi.azurewebsites.net/api/floorplans/${item.id}`
//     );
//     // const blogData = await httpget(`http://localhost:4200/assets/news/${item.id}.json`);
//     handledRoutes.push({
//       route: createPath(item.floorplanId, blogData.seriesName),
//       title: blogData.seriesName,
//       description: blogData.modelName,
//     });
//   }
// };






// registerPlugin('router', 'myPlugin', floorplanPlugin);

// const { httpGetJson, registerPlugin, routeSplit } = require('@scullyio/scully');

// //const Floorplans = 'floorplans';
// const floorplanPlugin = 'floorplanPlugin';

// const functionPlugin = async (route: any, config: any) => {
//   const list = await httpGetJson(config.url);
//   const { createPath } = routeSplit(route);
//   const handledRoutes = [];
//   for (let item of list) {
//     handledRoutes.push({
//       route: createPath(item.floorplanId, item.modelName),
//     });
//   }
//   return handledRoutes;
// };

// no validation implemented
// const validator = async () => [];
// registerPlugin('router', floorplanPlugin, functionPlugin, validator);

// registerPlugin(
//   type: PluginTypes,
//   name: string | symbol,
//   plugin: PluginFunction,
//   validator?: validator,
//   options?: { replaceExistingPlugin = false }
// )

//registerPlugin('router', Floorplans, floorplanPlugin);
//exports.Floorplans = Floorplans;
