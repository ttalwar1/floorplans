const { httpGetJson, registerPlugin, routeSplit } = require('@scullyio/scully');
const Floorplan = 'floorplan';
const floorplanPlugin = async (route, config) => {
    const list = await httpGetJson(config.url);
    const { createPath } = routeSplit(route);
    const handledRoutes = [];
    for (let item of list) {
        handledRoutes.push({
            route: createPath(item.floorplanId, item.seriesName, item.modelName),
        });
    }
    return handledRoutes;
};
// no validation implemented
const floorplanPluginValidator = async (conf) => [];
registerPlugin('router', Floorplan, floorplanPlugin);
exports.Floorplan = Floorplan;
//example from https://samvloeberghs.be/posts/custom-plugins-for-scully-angular-static-site-generator/
//# sourceMappingURL=floorplanPlugin.js.map