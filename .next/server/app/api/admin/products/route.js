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
exports.id = "app/api/admin/products/route";
exports.ids = ["app/api/admin/products/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fproducts%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2Froute.ts&appDir=D%3A%5Cstudio%20sonterra%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cstudio%20sonterra&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fproducts%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2Froute.ts&appDir=D%3A%5Cstudio%20sonterra%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cstudio%20sonterra&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_studio_sonterra_src_app_api_admin_products_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/admin/products/route.ts */ \"(rsc)/./src/app/api/admin/products/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/products/route\",\n        pathname: \"/api/admin/products\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/products/route\"\n    },\n    resolvedPagePath: \"D:\\\\studio sonterra\\\\src\\\\app\\\\api\\\\admin\\\\products\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_studio_sonterra_src_app_api_admin_products_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnByb2R1Y3RzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnByb2R1Y3RzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZwcm9kdWN0cyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDc3R1ZGlvJTIwc29udGVycmElNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNzdHVkaW8lMjBzb250ZXJyYSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDYTtBQUMxRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcc3R1ZGlvIHNvbnRlcnJhXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGFkbWluXFxcXHByb2R1Y3RzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkbWluL3Byb2R1Y3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9wcm9kdWN0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXHN0dWRpbyBzb250ZXJyYVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxwcm9kdWN0c1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fproducts%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2Froute.ts&appDir=D%3A%5Cstudio%20sonterra%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cstudio%20sonterra&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/admin/products/route.ts":
/*!*********************************************!*\
  !*** ./src/app/api/admin/products/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/Product */ \"(rsc)/./src/models/Product.ts\");\n\n // تأكد من أنك قد أنشأت اتصال مع MongoDB في lib/dbConnect.ts\n // تأكد من أن لديك نموذج المنتج في models/Product.ts\n// POST - إضافة منتج\nasync function POST(req) {\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const { name, price, description, category, stock, image } = await req.json();\n        console.log(\"Received data:\", {\n            name,\n            price,\n            description,\n            category,\n            stock,\n            image\n        });\n        if (!name || !price || !category) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Name, Price, and Category are required!\"\n            }, {\n                status: 400\n            });\n        }\n        const newProduct = new _models_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            name,\n            price,\n            description,\n            category,\n            stock,\n            image\n        });\n        await newProduct.save();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Product added successfully!\",\n            product: newProduct\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error adding product:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Failed to add product, please try again.\"\n        }, {\n            status: 500\n        });\n    }\n}\n// GET - لاسترجاع المنتجات\nasync function GET(req) {\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // تأكد من أنك متصل بـ MongoDB\n        const products = await _models_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({}); // استرجاع جميع المنتجات\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(products, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching products:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Failed to fetch products, please try again.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hZG1pbi9wcm9kdWN0cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNiLENBQUUsNERBQTREO0FBQ3hELENBQUUsb0RBQW9EO0FBRXZHLG9CQUFvQjtBQUNiLGVBQWVHLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNSCxtREFBU0E7UUFFZixNQUFNLEVBQUVJLElBQUksRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNTixJQUFJTyxJQUFJO1FBRTNFQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCO1lBQUVSO1lBQU1DO1lBQU9DO1lBQWFDO1lBQVVDO1lBQU9DO1FBQU07UUFFakYsSUFBSSxDQUFDTCxRQUFRLENBQUNDLFNBQVMsQ0FBQ0UsVUFBVTtZQUNoQyxPQUFPUixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO2dCQUFFRyxTQUFTO1lBQTBDLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNqRztRQUVBLE1BQU1DLGFBQWEsSUFBSWQsdURBQU9BLENBQUM7WUFDN0JHO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFFQSxNQUFNTSxXQUFXQyxJQUFJO1FBRXJCLE9BQU9qQixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1lBQUVHLFNBQVM7WUFBK0JJLFNBQVNGO1FBQVcsR0FBRztZQUFFRCxRQUFRO1FBQUk7SUFDMUcsRUFBRSxPQUFPSSxPQUFPO1FBQ2RQLFFBQVFPLEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE9BQU9uQixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1lBQUVHLFNBQVM7UUFBMkMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbEc7QUFDRjtBQUdBLDBCQUEwQjtBQUNuQixlQUFlSyxJQUFJaEIsR0FBZ0I7SUFDeEMsSUFBSTtRQUNGLE1BQU1ILG1EQUFTQSxJQUFLLDhCQUE4QjtRQUVsRCxNQUFNb0IsV0FBVyxNQUFNbkIsdURBQU9BLENBQUNvQixJQUFJLENBQUMsQ0FBQyxJQUFLLHdCQUF3QjtRQUVsRSxPQUFPdEIscURBQVlBLENBQUNXLElBQUksQ0FBQ1UsVUFBVTtZQUFFTixRQUFRO1FBQUk7SUFDbkQsRUFBRSxPQUFPSSxPQUFPO1FBQ2RQLFFBQVFPLEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU9uQixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1lBQUVHLFNBQVM7UUFBOEMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckc7QUFDRiIsInNvdXJjZXMiOlsiRDpcXHN0dWRpbyBzb250ZXJyYVxcc3JjXFxhcHBcXGFwaVxcYWRtaW5cXHByb2R1Y3RzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYic7ICAvLyDYqtij2YPYryDZhdmGINij2YbZgyDZgtivINij2YbYtNij2Kog2KfYqti12KfZhCDZhdi5IE1vbmdvREIg2YHZiiBsaWIvZGJDb25uZWN0LnRzXHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9Qcm9kdWN0JzsgIC8vINiq2KPZg9ivINmF2YYg2KPZhiDZhNiv2YrZgyDZhtmF2YjYsNisINin2YTZhdmG2KrYrCDZgdmKIG1vZGVscy9Qcm9kdWN0LnRzXHJcblxyXG4vLyBQT1NUIC0g2KXYttin2YHYqSDZhdmG2KrYrFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgc3RvY2ssIGltYWdlIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGRhdGE6XCIsIHsgbmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgc3RvY2ssIGltYWdlIH0pO1xyXG5cclxuICAgIGlmICghbmFtZSB8fCAhcHJpY2UgfHwgIWNhdGVnb3J5KSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiTmFtZSwgUHJpY2UsIGFuZCBDYXRlZ29yeSBhcmUgcmVxdWlyZWQhXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdQcm9kdWN0ID0gbmV3IFByb2R1Y3Qoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGNhdGVnb3J5LFxyXG4gICAgICBzdG9jayxcclxuICAgICAgaW1hZ2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBuZXdQcm9kdWN0LnNhdmUoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlByb2R1Y3QgYWRkZWQgc3VjY2Vzc2Z1bGx5IVwiLCBwcm9kdWN0OiBuZXdQcm9kdWN0IH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgcHJvZHVjdDpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gYWRkIHByb2R1Y3QsIHBsZWFzZSB0cnkgYWdhaW4uXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBHRVQgLSDZhNin2LPYqtix2KzYp9i5INin2YTZhdmG2KrYrNin2KpcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpOyAgLy8g2KrYo9mD2K8g2YXZhiDYo9mG2YMg2YXYqti12YQg2KjZgCBNb25nb0RCXHJcbiAgICBcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKHt9KTsgIC8vINin2LPYqtix2KzYp9i5INis2YXZiti5INin2YTZhdmG2KrYrNin2KpcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocHJvZHVjdHMsIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9kdWN0czpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gZmV0Y2ggcHJvZHVjdHMsIHBsZWFzZSB0cnkgYWdhaW4uXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRiQ29ubmVjdCIsIlByb2R1Y3QiLCJQT1NUIiwicmVxIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInN0b2NrIiwiaW1hZ2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJuZXdQcm9kdWN0Iiwic2F2ZSIsInByb2R1Y3QiLCJlcnJvciIsIkdFVCIsInByb2R1Y3RzIiwiZmluZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/admin/products/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fproducts%2Froute&page=%2Fapi%2Fadmin%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fproducts%2Froute.ts&appDir=D%3A%5Cstudio%20sonterra%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cstudio%20sonterra&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();