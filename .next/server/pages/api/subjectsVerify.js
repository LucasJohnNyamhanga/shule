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
exports.id = "pages/api/subjectsVerify";
exports.ids = ["pages/api/subjectsVerify"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./db/prisma.tsx":
/*!***********************!*\
  !*** ./db/prisma.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9wcmlzbWEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQWN0QyxNQUFNQyxNQUFNLEdBRWpCQyxNQUFNLENBQUNELE1BQU0sSUFFYixJQUFJRCx3REFBWSxDQUFDO0lBRWZHLEdBQUcsRUFBRTtRQUFDLE9BQU87S0FBQztDQUVmLENBQUM7QUFHSixJQUFJQyxJQUFxQyxFQUFFRixNQUFNLENBQUNELE1BQU0sR0FBR0EsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vZGIvcHJpc21hLnRzeD80NDlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5cbmRlY2xhcmUgZ2xvYmFsIHtcblxuICAvLyBhbGxvdyBnbG9iYWwgYHZhcmAgZGVjbGFyYXRpb25zXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxuXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxuXG59XG5cblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG5cbiAgZ2xvYmFsLnByaXNtYSB8fFxuXG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuXG4gICAgbG9nOiBbJ3F1ZXJ5J10sXG5cbiAgfSlcblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYSA9IHByaXNtYSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/prisma.tsx\n");

/***/ }),

/***/ "(api)/./pages/api/subjectsVerify.tsx":
/*!**************************************!*\
  !*** ./pages/api/subjectsVerify.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { subjectName  } = req.body;\n    try {\n        const subjectFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.subject.findMany({\n            where: {\n                subjectName\n            },\n            select: {\n                id: true,\n                subjectName: true\n            }\n        });\n        const subjects = JSON.parse(JSON.stringify(subjectFromServer));\n        res.status(200).json(subjects);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3ViamVjdHNWZXJpZnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXdDO0FBYXpCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUE4QixFQUM5QjtJQUVBLE1BQU0sRUFBRUMsV0FBVyxHQUFDLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUNqQyxJQUFJO1FBQ0YsTUFBTUMsaUJBQWlCLEdBQUcsTUFBTU4sK0RBQXVCLENBQUM7WUFDdERTLEtBQUssRUFBRTtnQkFDTEwsV0FBVzthQUNaO1lBQ0NNLE1BQU0sRUFBRTtnQkFDTkMsRUFBRSxFQUFFLElBQUk7Z0JBQ1JQLFdBQVcsRUFBQyxJQUFJO2FBQ2pCO1NBQ0YsQ0FBQztRQUNGLE1BQU1RLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDVCxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlESCxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxRQUFRLENBQUMsQ0FBQztLQUM5QixDQUFDLE9BQU9NLEtBQUssRUFBRSxFQUVmLFFBQVM7UUFDVixNQUFNbEIsMERBQWtCLEVBQUUsQ0FBQztLQUM1QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvc3ViamVjdHNWZXJpZnkudHN4P2EyZjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJ1xyXG50eXBlIHVzZXJEYXRhID0ge1xyXG4gIGlkOm51bWJlcixcclxuICBzdWJqZWN0TmFtZTpzdHJpbmcsXHJcbiAgc3ViamVjdERlZmluaXRpb246c3RyaW5nfG51bGwsXHJcbiAgaW1hZ2VMb2NhdGlvbjogc3RyaW5nIHwgbnVsbCxcclxuICBwdWJsaXNoZWQ6Ym9vbGVhbixcclxuICBmb3Jtczoge1xyXG4gICAgICBmb3JtTmFtZTpTdHJpbmdcclxuICAgIH1bXSxcclxuICAgIFxyXG59W11cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTx1c2VyRGF0YT5cclxuKSB7XHJcblxyXG4gIGNvbnN0IHsgc3ViamVjdE5hbWV9ID0gcmVxLmJvZHlcclxudHJ5IHtcclxuICBjb25zdCBzdWJqZWN0RnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS5zdWJqZWN0LmZpbmRNYW55KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIHN1YmplY3ROYW1lLFxyXG4gICAgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgc3ViamVjdE5hbWU6dHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHN1YmplY3RzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdWJqZWN0RnJvbVNlcnZlcikpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oc3ViamVjdHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdWJqZWN0TmFtZSIsImJvZHkiLCJzdWJqZWN0RnJvbVNlcnZlciIsInN1YmplY3QiLCJmaW5kTWFueSIsIndoZXJlIiwic2VsZWN0IiwiaWQiLCJzdWJqZWN0cyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/subjectsVerify.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subjectsVerify.tsx"));
module.exports = __webpack_exports__;

})();