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
exports.id = "pages/api/formsReviewVerify";
exports.ids = ["pages/api/formsReviewVerify"];
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

/***/ "(api)/./pages/api/formsReviewVerify.tsx":
/*!*****************************************!*\
  !*** ./pages/api/formsReviewVerify.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { formName  } = req.body;\n    try {\n        const formFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.formReview.findMany({\n            where: {\n                formName\n            },\n            select: {\n                id: true,\n                formName: true\n            }\n        });\n        const forms = JSON.parse(JSON.stringify(formFromServer));\n        res.status(200).json(forms);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZm9ybXNSZXZpZXdWZXJpZnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXdDO0FBTXpCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUE4QixFQUM5QjtJQUNBLE1BQU0sRUFBRUMsUUFBUSxHQUFDLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUM5QixJQUFJO1FBQ0YsTUFBTUMsY0FBYyxHQUFHLE1BQU1OLGtFQUEwQixDQUFDO1lBQ3REUyxLQUFLLEVBQUU7Z0JBQ0xMLFFBQVE7YUFDVDtZQUNDTSxNQUFNLEVBQUU7Z0JBQ05DLEVBQUUsRUFBRSxJQUFJO2dCQUNSUCxRQUFRLEVBQUMsSUFBSTthQUNkO1NBQ0YsQ0FBQztRQUNGLE1BQU1RLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDVCxjQUFjLENBQUMsQ0FBQztRQUN4REgsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsS0FBSyxDQUFDLENBQUM7S0FDM0IsQ0FBQyxPQUFPTSxLQUFLLEVBQUUsRUFFZixRQUFTO1FBQ1YsTUFBTWxCLDBEQUFrQixFQUFFLENBQUM7S0FDNUI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2Zvcm1zUmV2aWV3VmVyaWZ5LnRzeD84OTFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSdcclxudHlwZSB1c2VyRGF0YSA9IHtcclxuICBpZDpudW1iZXIsXHJcbiAgZm9ybU5hbWU6c3RyaW5nLFxyXG59W11cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTx1c2VyRGF0YT5cclxuKSB7XHJcbiAgY29uc3QgeyBmb3JtTmFtZX0gPSByZXEuYm9keVxyXG50cnkge1xyXG4gIGNvbnN0IGZvcm1Gcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLmZvcm1SZXZpZXcuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgZm9ybU5hbWUsXHJcbiAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBmb3JtTmFtZTp0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgZm9ybXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvcm1Gcm9tU2VydmVyKSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihmb3Jtcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZvcm1OYW1lIiwiYm9keSIsImZvcm1Gcm9tU2VydmVyIiwiZm9ybVJldmlldyIsImZpbmRNYW55Iiwid2hlcmUiLCJzZWxlY3QiLCJpZCIsImZvcm1zIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/formsReviewVerify.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/formsReviewVerify.tsx"));
module.exports = __webpack_exports__;

})();