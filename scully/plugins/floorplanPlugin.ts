const { httpGetJson, registerPlugin, routeSplit } = require('@scullyio/scully');

const News = 'news';

const newsPlugin = async (route, config) => {
  const list = await httpGetJson(config.url);
  const { createPath } = routeSplit(route);
  const handledRoutes = [];
  for (let item of list) {
    handledRoutes.push({
      route: createPath(item.floorplanId, item.modelName),
    });
  }
  return handledRoutes;
};

// no validation implemented
const newsPluginValidator = async (conf) => [];
registerPlugin('router', News, newsPlugin);
exports.News = News;

//example from https://samvloeberghs.be/posts/custom-plugins-for-scully-angular-static-site-generator/
