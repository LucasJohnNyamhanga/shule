"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/auth0":
/*!********************************************!*\
  !*** external "next-auth/providers/auth0" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/auth0");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].tsx":
/*!******************************************!*\
  !*** ./pages/api/auth/[...nextauth].tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"next-auth/providers/auth0\");\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// import AppleProvider from \"next-auth/providers/apple\"\n// import EmailProvider from \"next-auth/providers/email\"\n// For more information on each option (and a full list of options) go to\n// https://next-auth.js.org/configuration/options\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // https://next-auth.js.org/configuration/providers/oauth\n    providers: [\n        /* EmailProvider({\n         server: process.env.EMAIL_SERVER,\n         from: process.env.EMAIL_FROM,\n       }),\n    // Temporarily removing the Apple provider from the demo site as the\n    // callback URL for it needs updating due to Vercel changing domains\n      \n    Providers.Apple({\n      clientId: process.env.APPLE_ID,\n      clientSecret: {\n        appleId: process.env.APPLE_ID,\n        teamId: process.env.APPLE_TEAM_ID,\n        privateKey: process.env.APPLE_PRIVATE_KEY,\n        keyId: process.env.APPLE_KEY_ID,\n      },\n    }),\n    */ next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.FACEBOOK_ID,\n            clientSecret: process.env.FACEBOOK_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.TWITTER_ID,\n            clientSecret: process.env.TWITTER_SECRET\n        }),\n        next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.AUTH0_ID,\n            clientSecret: process.env.AUTH0_SECRET,\n            issuer: process.env.AUTH0_ISSUER\n        }), \n    ],\n    theme: {\n        colorScheme: \"light\"\n    },\n    callbacks: {\n        async jwt ({ token  }) {\n            token.userRole = \"admin\";\n            return token;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ0k7QUFDSjtBQUNFO0FBQ0o7QUFDdEQsd0RBQXdEO0FBQ3hELHdEQUF3RDtBQUV4RCx5RUFBeUU7QUFDekUsaURBQWlEO0FBQ2pELGlFQUFlQSxnREFBUSxDQUFDO0lBQ3ZCLHlEQUF5RDtJQUN6RE0sU0FBUyxFQUFFO1FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7TUFnQkksQ0FDSkosbUVBQWdCLENBQUM7WUFDaEJLLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7WUFDakNDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGVBQWU7U0FDekMsQ0FBQztRQUNGVCxpRUFBYyxDQUFDO1lBQ2RJLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFNBQVM7WUFDL0JGLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNLLGFBQWE7U0FDdkMsQ0FBQztRQUNGYixpRUFBYyxDQUFDO1lBQ2RNLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNNLFNBQVM7WUFDL0JKLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNPLGFBQWE7U0FDdkMsQ0FBQztRQUNGWixrRUFBZSxDQUFDO1lBQ2ZHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNRLFVBQVU7WUFDaENOLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNTLGNBQWM7U0FDeEMsQ0FBQztRQUNGYixnRUFBYSxDQUFDO1lBQ2JFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNVLFFBQVE7WUFDOUJSLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNXLFlBQVk7WUFDdENDLE1BQU0sRUFBRWIsT0FBTyxDQUFDQyxHQUFHLENBQUNhLFlBQVk7U0FDaEMsQ0FBQztLQUNGO0lBQ0RDLEtBQUssRUFBRTtRQUNOQyxXQUFXLEVBQUUsT0FBTztLQUNwQjtJQUNEQyxTQUFTLEVBQUU7UUFDVixNQUFNQyxHQUFHLEVBQUMsRUFBRUMsS0FBSyxHQUFFLEVBQUU7WUFDcEJBLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN6QixPQUFPRCxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0QsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzeD9jMTI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcbmltcG9ydCBGYWNlYm9va1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZmFjZWJvb2snO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViJztcbmltcG9ydCBUd2l0dGVyUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy90d2l0dGVyJztcbmltcG9ydCBBdXRoMFByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvYXV0aDAnO1xuLy8gaW1wb3J0IEFwcGxlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvYXBwbGVcIlxuLy8gaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZW1haWxcIlxuXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBlYWNoIG9wdGlvbiAoYW5kIGEgZnVsbCBsaXN0IG9mIG9wdGlvbnMpIGdvIHRvXG4vLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG5cdC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL3Byb3ZpZGVycy9vYXV0aFxuXHRwcm92aWRlcnM6IFtcblx0XHQvKiBFbWFpbFByb3ZpZGVyKHtcbiAgICAgICAgIHNlcnZlcjogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSLFxuICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcbiAgICAgICB9KSxcbiAgICAvLyBUZW1wb3JhcmlseSByZW1vdmluZyB0aGUgQXBwbGUgcHJvdmlkZXIgZnJvbSB0aGUgZGVtbyBzaXRlIGFzIHRoZVxuICAgIC8vIGNhbGxiYWNrIFVSTCBmb3IgaXQgbmVlZHMgdXBkYXRpbmcgZHVlIHRvIFZlcmNlbCBjaGFuZ2luZyBkb21haW5zXG4gICAgICBcbiAgICBQcm92aWRlcnMuQXBwbGUoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFQUExFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiB7XG4gICAgICAgIGFwcGxlSWQ6IHByb2Nlc3MuZW52LkFQUExFX0lELFxuICAgICAgICB0ZWFtSWQ6IHByb2Nlc3MuZW52LkFQUExFX1RFQU1fSUQsXG4gICAgICAgIHByaXZhdGVLZXk6IHByb2Nlc3MuZW52LkFQUExFX1BSSVZBVEVfS0VZLFxuICAgICAgICBrZXlJZDogcHJvY2Vzcy5lbnYuQVBQTEVfS0VZX0lELFxuICAgICAgfSxcbiAgICB9KSxcbiAgICAqL1xuXHRcdEZhY2Vib29rUHJvdmlkZXIoe1xuXHRcdFx0Y2xpZW50SWQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0lELFxuXHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5GQUNFQk9PS19TRUNSRVQsXG5cdFx0fSksXG5cdFx0R2l0aHViUHJvdmlkZXIoe1xuXHRcdFx0Y2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcblx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcblx0XHR9KSxcblx0XHRHb29nbGVQcm92aWRlcih7XG5cdFx0XHRjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuXHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuXHRcdH0pLFxuXHRcdFR3aXR0ZXJQcm92aWRlcih7XG5cdFx0XHRjbGllbnRJZDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9JRCxcblx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9TRUNSRVQsXG5cdFx0fSksXG5cdFx0QXV0aDBQcm92aWRlcih7XG5cdFx0XHRjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfSUQsXG5cdFx0XHRjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX1NFQ1JFVCxcblx0XHRcdGlzc3VlcjogcHJvY2Vzcy5lbnYuQVVUSDBfSVNTVUVSLFxuXHRcdH0pLFxuXHRdLFxuXHR0aGVtZToge1xuXHRcdGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxuXHR9LFxuXHRjYWxsYmFja3M6IHtcblx0XHRhc3luYyBqd3QoeyB0b2tlbiB9KSB7XG5cdFx0XHR0b2tlbi51c2VyUm9sZSA9ICdhZG1pbic7XG5cdFx0XHRyZXR1cm4gdG9rZW47XG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJGYWNlYm9va1Byb3ZpZGVyIiwiR2l0aHViUHJvdmlkZXIiLCJUd2l0dGVyUHJvdmlkZXIiLCJBdXRoMFByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiRkFDRUJPT0tfSUQiLCJjbGllbnRTZWNyZXQiLCJGQUNFQk9PS19TRUNSRVQiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwiR09PR0xFX0lEIiwiR09PR0xFX1NFQ1JFVCIsIlRXSVRURVJfSUQiLCJUV0lUVEVSX1NFQ1JFVCIsIkFVVEgwX0lEIiwiQVVUSDBfU0VDUkVUIiwiaXNzdWVyIiwiQVVUSDBfSVNTVUVSIiwidGhlbWUiLCJjb2xvclNjaGVtZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlclJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].tsx"));
module.exports = __webpack_exports__;

})();