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
exports.id = "pages/api/subjectsReferenceVerify";
exports.ids = ["pages/api/subjectsReferenceVerify"];
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

/***/ "(api)/./pages/api/subjectsReferenceVerify.tsx":
/*!***********************************************!*\
  !*** ./pages/api/subjectsReferenceVerify.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { subjectName  } = req.body;\n    try {\n        const subjectFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.subjectReference.findMany({\n            where: {\n                subjectName\n            },\n            select: {\n                id: true,\n                subjectName: true\n            }\n        });\n        const subjects = JSON.parse(JSON.stringify(subjectFromServer));\n        res.status(200).json(subjects);\n    } catch (error) {\n        console.log(error);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3ViamVjdHNSZWZlcmVuY2VWZXJpZnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBWTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUE4QixFQUM3QjtJQUNELE1BQU0sRUFBRUMsV0FBVyxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUNoQyxJQUFJO1FBQ0gsTUFBTUMsaUJBQWlCLEdBQUcsTUFBTU4sd0VBQWdDLENBQUM7WUFDaEVTLEtBQUssRUFBRTtnQkFDTkwsV0FBVzthQUNYO1lBQ0RNLE1BQU0sRUFBRTtnQkFDUEMsRUFBRSxFQUFFLElBQUk7Z0JBQ1JQLFdBQVcsRUFBRSxJQUFJO2FBQ2pCO1NBQ0QsQ0FBQztRQUNGLE1BQU1RLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDVCxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlESCxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxRQUFRLENBQUMsQ0FBQztLQUMvQixDQUFDLE9BQU9NLEtBQUssRUFBRTtRQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7S0FDbkIsUUFBUztRQUNULE1BQU1sQiwwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9zdWJqZWN0c1JlZmVyZW5jZVZlcmlmeS50c3g/YTlhZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxudHlwZSB1c2VyRGF0YSA9IHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdHN1YmplY3ROYW1lOiBzdHJpbmc7XHJcblx0c3ViamVjdERlZmluaXRpb246IHN0cmluZyB8IG51bGw7XHJcblx0aW1hZ2VMb2NhdGlvbjogc3RyaW5nIHwgbnVsbDtcclxuXHRwdWJsaXNoZWQ6IGJvb2xlYW47XHJcblx0Zm9ybXM6IHtcclxuXHRcdGZvcm1OYW1lOiBTdHJpbmc7XHJcblx0fVtdO1xyXG59W107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG5cdHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcblx0cmVzOiBOZXh0QXBpUmVzcG9uc2U8dXNlckRhdGE+XHJcbikge1xyXG5cdGNvbnN0IHsgc3ViamVjdE5hbWUgfSA9IHJlcS5ib2R5O1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBzdWJqZWN0RnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS5zdWJqZWN0UmVmZXJlbmNlLmZpbmRNYW55KHtcclxuXHRcdFx0d2hlcmU6IHtcclxuXHRcdFx0XHRzdWJqZWN0TmFtZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdFx0c3ViamVjdE5hbWU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHN1YmplY3RzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdWJqZWN0RnJvbVNlcnZlcikpO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oc3ViamVjdHMpO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN1YmplY3ROYW1lIiwiYm9keSIsInN1YmplY3RGcm9tU2VydmVyIiwic3ViamVjdFJlZmVyZW5jZSIsImZpbmRNYW55Iiwid2hlcmUiLCJzZWxlY3QiLCJpZCIsInN1YmplY3RzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/subjectsReferenceVerify.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subjectsReferenceVerify.tsx"));
module.exports = __webpack_exports__;

})();