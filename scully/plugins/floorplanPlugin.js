"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFloorplanPlugin = void 0;
const { httpGetJson, registerPlugin, routeSplit } = require('@scullyio/scully');
//const Floorplan = 'floorplan';
const FloorplanPlugin = 'floorplan';
const floorplanPluginFunction = async (route, config) => {
    const list = await httpGetJson(config.url);
    const { createPath } = routeSplit(route);
    const handledRoutes = [];
    for (let item of list) {
        handledRoutes.push({
            route: createPath(item.floorplanId, item.seriesName.trim().replace(/\s+/g, '-'), item.modelName.trim().replace(/\s+/g, '-')),
        });
    }
    return handledRoutes;
};
// no validation implemented
const floorplanPluginValidator = async (conf) => [];
registerPlugin('router', FloorplanPlugin, floorplanPluginFunction);
//exports.Floorplan = Floorplan;
const getFloorplanPlugin = () => FloorplanPlugin;
exports.getFloorplanPlugin = getFloorplanPlugin;
//example from https://samvloeberghs.be/posts/custom-plugins-for-scully-angular-static-site-generator/
//example https://www.tenmiles.dev/blog/how-i-made-my-blog-cheap-to-host-customizable-and-lightning-fast-part-3
//# sourceMappingURL=floorplanPlugin.js.map