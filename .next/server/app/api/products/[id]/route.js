/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/products/[id]/route";
exports.ids = ["app/api/products/[id]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.ts&appDir=D%3A%5Cstudio%20sonterra%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cstudio%20sonterra&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.ts&appDir=D%3A%5Cstudio%20sonterra%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cstudio%20sonterra&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_studio_sonterra_src_app_api_products_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/products/[id]/route.ts */ \"(rsc)/./src/app/api/products/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/[id]/route\",\n        pathname: \"/api/products/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/[id]/route\"\n    },\n    resolvedPagePath: \"D:\\\\studio sonterra\\\\src\\\\app\\\\api\\\\products\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_studio_sonterra_src_app_api_products_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9kdWN0cyUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZHVjdHMlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDc3R1ZGlvJTIwc29udGVycmElNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNzdHVkaW8lMjBzb250ZXJyYSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDWTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcc3R1ZGlvIHNvbnRlcnJhXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHByb2R1Y3RzXFxcXFtpZF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2R1Y3RzL1tpZF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm9kdWN0cy9baWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm9kdWN0cy9baWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcc3R1ZGlvIHNvbnRlcnJhXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHByb2R1Y3RzXFxcXFtpZF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.ts&appDir=D%3A%5Cstudio%20sonterra%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cstudio%20sonterra&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/products/[id]/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/products/[id]/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/Product */ \"(rsc)/./src/models/Product.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/db */ \"(rsc)/./src/lib/db.ts\");\n// src/app/api/products/[id]/route.ts\n\n // استيراد نموذج المنتج\n // استيراد اتصال قاعدة البيانات\n// هذه الوظيفة تدير طلب GET للحصول على منتج باستخدام المعرف (ID)\nasync function GET(request, { params }) {\n    try {\n        // التحقق من المعرف (ID) المرسل في المعاملات\n        const { id } = params;\n        if (!id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Product ID is required'\n            }, {\n                status: 400\n            });\n        }\n        // الاتصال بقاعدة البيانات\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        // محاولة الحصول على المنتج من قاعدة البيانات باستخدام المعرف\n        const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n        // إذا لم يتم العثور على المنتج، يرجى إعادة رسالة خطأ 404\n        if (!product) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Product not found'\n            }, {\n                status: 404\n            });\n        }\n        // إرجاع المنتج كاستجابة JSON\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(product);\n    } catch (error) {\n        console.error(\"Error fetching product:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Error fetching product'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9kdWN0cy9baWRdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxxQ0FBcUM7QUFFTTtBQUNNLENBQUMsdUJBQXVCO0FBQzlCLENBQUMsK0JBQStCO0FBRTNFLGdFQUFnRTtBQUN6RCxlQUFlRyxJQUFJQyxPQUFnQixFQUFFLEVBQUVDLE1BQU0sRUFBOEI7SUFDaEYsSUFBSTtRQUNGLDRDQUE0QztRQUM1QyxNQUFNLEVBQUVDLEVBQUUsRUFBRSxHQUFHRDtRQUVmLElBQUksQ0FBQ0MsSUFBSTtZQUNQLE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBeUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzlFO1FBRUEsMEJBQTBCO1FBQzFCLE1BQU1QLG1EQUFTQTtRQUVmLDZEQUE2RDtRQUM3RCxNQUFNUSxVQUFVLE1BQU1ULHVEQUFPQSxDQUFDVSxRQUFRLENBQUNMO1FBRXZDLHlEQUF5RDtRQUN6RCxJQUFJLENBQUNJLFNBQVM7WUFDWixPQUFPVixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQW9CLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN6RTtRQUVBLDZCQUE2QjtRQUM3QixPQUFPVCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDRztJQUUzQixFQUFFLE9BQU9GLE9BQU87UUFDZEksUUFBUUosS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBT1IscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXlCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzlFO0FBQ0YiLCJzb3VyY2VzIjpbIkQ6XFxzdHVkaW8gc29udGVycmFcXHNyY1xcYXBwXFxhcGlcXHByb2R1Y3RzXFxbaWRdXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2FwaS9wcm9kdWN0cy9baWRdL3JvdXRlLnRzXHJcblxyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9Qcm9kdWN0XCI7IC8vINin2LPYqtmK2LHYp9ivINmG2YXZiNiw2Kwg2KfZhNmF2YbYqtisXHJcbmltcG9ydCBkYmNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9kYlwiOyAvLyDYp9iz2KrZitix2KfYryDYp9iq2LXYp9mEINmC2KfYudiv2Kkg2KfZhNio2YrYp9mG2KfYqlxyXG5cclxuLy8g2YfYsNmHINin2YTZiNi42YrZgdipINiq2K/ZitixINi32YTYqCBHRVQg2YTZhNit2LXZiNmEINi52YTZiSDZhdmG2KrYrCDYqNin2LPYqtiu2K/Yp9mFINin2YTZhdi52LHZgSAoSUQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogUmVxdWVzdCwgeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9IH0pIHtcclxuICB0cnkge1xyXG4gICAgLy8g2KfZhNiq2K3ZgtmCINmF2YYg2KfZhNmF2LnYsdmBIChJRCkg2KfZhNmF2LHYs9mEINmB2Yog2KfZhNmF2LnYp9mF2YTYp9iqXHJcbiAgICBjb25zdCB7IGlkIH0gPSBwYXJhbXM7XHJcblxyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1Byb2R1Y3QgSUQgaXMgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g2KfZhNin2KrYtdin2YQg2KjZgtin2LnYr9ipINin2YTYqNmK2KfZhtin2KpcclxuICAgIGF3YWl0IGRiY29ubmVjdCgpO1xyXG5cclxuICAgIC8vINmF2K3Yp9mI2YTYqSDYp9mE2K3YtdmI2YQg2LnZhNmJINin2YTZhdmG2KrYrCDZhdmGINmC2KfYudiv2Kkg2KfZhNio2YrYp9mG2KfYqiDYqNin2LPYqtiu2K/Yp9mFINin2YTZhdi52LHZgVxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZEJ5SWQoaWQpO1xyXG5cclxuICAgIC8vINil2LDYpyDZhNmFINmK2KrZhSDYp9mE2LnYq9mI2LEg2LnZhNmJINin2YTZhdmG2KrYrNiMINmK2LHYrNmJINil2LnYp9iv2Kkg2LHYs9in2YTYqSDYrti32KMgNDA0XHJcbiAgICBpZiAoIXByb2R1Y3QpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdQcm9kdWN0IG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDYpdix2KzYp9i5INin2YTZhdmG2KrYrCDZg9in2LPYqtis2KfYqNipIEpTT05cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwcm9kdWN0KTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9kdWN0OlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3QnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQcm9kdWN0IiwiZGJjb25uZWN0IiwiR0VUIiwicmVxdWVzdCIsInBhcmFtcyIsImlkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwicHJvZHVjdCIsImZpbmRCeUlkIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/products/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// src/lib/dbConnect.ts\n\nconst MONGO_URL = process.env.MONGO_URL;\nif (!MONGO_URL) {\n    throw new Error('Please define the MONGO_URL environment variable');\n}\n// Use the appropriate type for the global object, avoiding 'any'\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    // If the connection is already established, return the cached connection\n    if (cached.conn) {\n        return cached.conn;\n    }\n    // If the connection is not established, create a new one\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHVCQUF1QjtBQUN1QjtBQUU5QyxNQUFNQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNGLFNBQVM7QUFFdkMsSUFBSSxDQUFDQSxXQUFXO0lBQ2QsTUFBTSxJQUFJRyxNQUFNO0FBQ2xCO0FBUUEsaUVBQWlFO0FBQ2pFLElBQUlDLFNBQXdCLE9BQXlDTCxRQUFRO0FBRTdFLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTLE9BQXlDTCxRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDM0Y7QUFFQSxlQUFlQztJQUNiLHlFQUF5RTtJQUN6RSxJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCO0lBRUEseURBQXlEO0lBQ3pELElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCO1FBQ2xCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLFdBQVdTLE1BQU1HLElBQUksQ0FBQyxDQUFDYjtZQUN2RCxPQUFPQTtRQUNUO0lBQ0Y7SUFFQUssT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJEOlxcc3R1ZGlvIHNvbnRlcnJhXFxzcmNcXGxpYlxcZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2xpYi9kYkNvbm5lY3QudHNcclxuaW1wb3J0IG1vbmdvb3NlLCB7IE1vbmdvb3NlIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgTU9OR09fVVJMID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMIGFzIHN0cmluZztcclxuXHJcbmlmICghTU9OR09fVVJMKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT19VUkwgZW52aXJvbm1lbnQgdmFyaWFibGUnKTtcclxufVxyXG5cclxuLy8gRGVmaW5lIGEgdHlwZSBmb3IgdGhlIGdsb2JhbCBtb25nb29zZSBjYWNoZSBvYmplY3RcclxuaW50ZXJmYWNlIE1vbmdvb3NlQ2FjaGUge1xyXG4gIGNvbm46IE1vbmdvb3NlIHwgbnVsbDtcclxuICBwcm9taXNlOiBQcm9taXNlPE1vbmdvb3NlPiB8IG51bGw7XHJcbn1cclxuXHJcbi8vIFVzZSB0aGUgYXBwcm9wcmlhdGUgdHlwZSBmb3IgdGhlIGdsb2JhbCBvYmplY3QsIGF2b2lkaW5nICdhbnknXHJcbmxldCBjYWNoZWQ6IE1vbmdvb3NlQ2FjaGUgPSAoZ2xvYmFsIGFzIHsgbW9uZ29vc2U/OiBNb25nb29zZUNhY2hlIH0pLm1vbmdvb3NlO1xyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSAoZ2xvYmFsIGFzIHsgbW9uZ29vc2U/OiBNb25nb29zZUNhY2hlIH0pLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICAvLyBJZiB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IGVzdGFibGlzaGVkLCByZXR1cm4gdGhlIGNhY2hlZCBjb25uZWN0aW9uXHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfVxyXG5cclxuICAvLyBJZiB0aGUgY29ubmVjdGlvbiBpcyBub3QgZXN0YWJsaXNoZWQsIGNyZWF0ZSBhIG5ldyBvbmVcclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkwsIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgIHJldHVybiBtb25nb29zZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09fVVJMIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/Product.ts":
/*!*******************************!*\
  !*** ./src/models/Product.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    description: {\n        type: String\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    stock: {\n        type: Number,\n        required: true\n    },\n    image: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1Byb2R1Y3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGdCQUFnQixJQUFJSCw0Q0FBTUEsQ0FDOUI7SUFDRUksTUFBTTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNDLE9BQU87UUFBRUgsTUFBTUk7UUFBUUYsVUFBVTtJQUFLO0lBQ3RDRyxhQUFhO1FBQUVMLE1BQU1DO0lBQU87SUFDNUJLLFVBQVU7UUFBRU4sTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDSyxPQUFPO1FBQUVQLE1BQU1JO1FBQVFGLFVBQVU7SUFBSztJQUN0Q00sT0FBTztRQUFFUixNQUFNQztJQUFPO0FBQ3hCLEdBQ0E7SUFBRVEsWUFBWTtBQUFLO0FBR3JCLE1BQU1DLFVBQVViLDRDQUFNQSxDQUFDYSxPQUFPLElBQUlkLCtDQUFLQSxDQUFDLFdBQVdFO0FBRW5ELGlFQUFlWSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJEOlxcc3R1ZGlvIHNvbnRlcnJhXFxzcmNcXG1vZGVsc1xcUHJvZHVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBzdG9jazogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpbWFnZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gbW9kZWxzLlByb2R1Y3QgfHwgbW9kZWwoXCJQcm9kdWN0XCIsIFByb2R1Y3RTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiUHJvZHVjdFNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwcmljZSIsIk51bWJlciIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJzdG9jayIsImltYWdlIiwidGltZXN0YW1wcyIsIlByb2R1Y3QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Product.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.ts&appDir=D%3A%5Cstudio%20sonterra%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cstudio%20sonterra&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();