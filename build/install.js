"use strict";
exports.__esModule = true;
function install(frictionCoreApi, config) {
    if (config === void 0) { config = { path: "/friction" }; }
    var registerStatic = frictionCoreApi.extensions["friction-express"].registerStatic;
    console.log(" register static ");
    registerStatic("/", "d:/projects/friction/extensions/gui/build");
}
exports.install = install;
