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
exports.id = "pages/api/notes";
exports.ids = ["pages/api/notes"];
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

/***/ "(api)/./pages/api/notes.tsx":
/*!*****************************!*\
  !*** ./pages/api/notes.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { formId , subjectId , topicId  } = req.body;\n    let formIdreceived = parseInt(formId);\n    let subjectIdreceived = parseInt(subjectId);\n    let topicIdreceived = parseInt(topicId);\n    try {\n        const topicsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.note.findMany({\n            where: {\n                subjectId: subjectIdreceived,\n                formId: formIdreceived,\n                topicId: topicIdreceived\n            },\n            select: {\n                id: true,\n                content: true,\n                topic: {\n                    select: {\n                        topicName: true\n                    }\n                }\n            }\n        });\n        const topics = JSON.parse(JSON.stringify(topicsFromServer));\n        res.status(200).json(topics);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90ZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXdDO0FBRXpCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxTQUFTLEdBQUVDLE9BQU8sR0FBRSxHQUFHSixHQUFHLENBQUNLLElBQUk7SUFDL0MsSUFBSUMsY0FBYyxHQUFHQyxRQUFRLENBQUNMLE1BQU0sQ0FBQztJQUNyQyxJQUFJTSxpQkFBaUIsR0FBR0QsUUFBUSxDQUFDSixTQUFTLENBQUM7SUFDM0MsSUFBSU0sZUFBZSxHQUFHRixRQUFRLENBQUNILE9BQU8sQ0FBQztJQUN6QyxJQUFJO1FBQ0YsTUFBTU0sZ0JBQWdCLEdBQUcsTUFBTVosNERBQW9CLENBQUM7WUFDbERlLEtBQUssRUFBRTtnQkFDTFYsU0FBUyxFQUFFSyxpQkFBaUI7Z0JBQzVCTixNQUFNLEVBQUVJLGNBQWM7Z0JBQ3RCRixPQUFPLEVBQUNLLGVBQWU7YUFDeEI7WUFDQ0ssTUFBTSxFQUFFO2dCQUNOQyxFQUFFLEVBQUUsSUFBSTtnQkFDUkMsT0FBTyxFQUFDLElBQUk7Z0JBQ1pDLEtBQUssRUFBRTtvQkFDTEgsTUFBTSxFQUFFO3dCQUNOSSxTQUFTLEVBQUMsSUFBSTtxQkFDZjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztRQUNGLE1BQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDWixnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNEVCxHQUFHLENBQUNzQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxDQUFDLENBQUM7S0FDNUIsQ0FBQyxPQUFPTSxLQUFLLEVBQUUsRUFFZixRQUFTO1FBQ1YsTUFBTTNCLDBEQUFrQixFQUFFLENBQUM7S0FDNUI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL25vdGVzLnRzeD8wMWRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBjb25zdCB7IGZvcm1JZCwgc3ViamVjdElkLCB0b3BpY0lkIH0gPSByZXEuYm9keVxyXG4gIGxldCBmb3JtSWRyZWNlaXZlZCA9IHBhcnNlSW50KGZvcm1JZCk7XHJcbiAgbGV0IHN1YmplY3RJZHJlY2VpdmVkID0gcGFyc2VJbnQoc3ViamVjdElkKTtcclxuICBsZXQgdG9waWNJZHJlY2VpdmVkID0gcGFyc2VJbnQodG9waWNJZCk7XHJcbnRyeSB7XHJcbiAgY29uc3QgdG9waWNzRnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS5ub3RlLmZpbmRNYW55KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIHN1YmplY3RJZDogc3ViamVjdElkcmVjZWl2ZWQsXHJcbiAgICAgIGZvcm1JZDogZm9ybUlkcmVjZWl2ZWQsXHJcbiAgICAgIHRvcGljSWQ6dG9waWNJZHJlY2VpdmVkLFxyXG4gICAgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgY29udGVudDp0cnVlLFxyXG4gICAgICAgIHRvcGljOiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgdG9waWNOYW1lOnRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCB0b3BpY3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRvcGljc0Zyb21TZXJ2ZXIpKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRvcGljcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZvcm1JZCIsInN1YmplY3RJZCIsInRvcGljSWQiLCJib2R5IiwiZm9ybUlkcmVjZWl2ZWQiLCJwYXJzZUludCIsInN1YmplY3RJZHJlY2VpdmVkIiwidG9waWNJZHJlY2VpdmVkIiwidG9waWNzRnJvbVNlcnZlciIsIm5vdGUiLCJmaW5kTWFueSIsIndoZXJlIiwic2VsZWN0IiwiaWQiLCJjb250ZW50IiwidG9waWMiLCJ0b3BpY05hbWUiLCJ0b3BpY3MiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/notes.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/notes.tsx"));
module.exports = __webpack_exports__;

})();