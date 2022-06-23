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
exports.id = "pages/api/downloadable";
exports.ids = ["pages/api/downloadable"];
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

/***/ "(api)/./pages/api/downloadable.tsx":
/*!************************************!*\
  !*** ./pages/api/downloadable.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { formId , subjectId  } = req.body;\n    let formIdreceived = parseInt(formId);\n    let subjectIdreceived = parseInt(subjectId);\n    try {\n        const topicsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.notesDownloadable.findMany({\n            where: {\n                subjectId: subjectIdreceived,\n                formId: formIdreceived\n            },\n            select: {\n                id: true,\n                name: true,\n                fileExtension: true,\n                formId: true,\n                subjectId: true,\n                published: true\n            }\n        });\n        const topics = JSON.parse(JSON.stringify(topicsFromServer));\n        res.status(200).json(topics);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZG93bmxvYWRhYmxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQUUxQixlQUFlQyxPQUFPLENBQ3BDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDbkI7SUFDRCxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsU0FBUyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUN0QyxJQUFJQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0osTUFBTSxDQUFDO0lBQ3JDLElBQUlLLGlCQUFpQixHQUFHRCxRQUFRLENBQUNILFNBQVMsQ0FBQztJQUMzQyxJQUFJO1FBQ0gsTUFBTUssZ0JBQWdCLEdBQUcsTUFBTVYseUVBQWlDLENBQUM7WUFDaEVhLEtBQUssRUFBRTtnQkFDTlIsU0FBUyxFQUFFSSxpQkFBaUI7Z0JBQzVCTCxNQUFNLEVBQUVHLGNBQWM7YUFDdEI7WUFDRE8sTUFBTSxFQUFFO2dCQUNQQyxFQUFFLEVBQUUsSUFBSTtnQkFDUkMsSUFBSSxFQUFFLElBQUk7Z0JBQ1ZDLGFBQWEsRUFBRSxJQUFJO2dCQUNuQmIsTUFBTSxFQUFFLElBQUk7Z0JBQ1pDLFNBQVMsRUFBRSxJQUFJO2dCQUNmYSxTQUFTLEVBQUUsSUFBSTthQUNmO1NBQ0QsQ0FBQztRQUNGLE1BQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDWixnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNEUCxHQUFHLENBQUNvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxDQUFDLENBQUM7S0FDN0IsQ0FBQyxPQUFPTSxLQUFLLEVBQUUsRUFDZixRQUFTO1FBQ1QsTUFBTXpCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2Rvd25sb2FkYWJsZS50c3g/Y2NkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuXHRjb25zdCB7IGZvcm1JZCwgc3ViamVjdElkIH0gPSByZXEuYm9keTtcclxuXHRsZXQgZm9ybUlkcmVjZWl2ZWQgPSBwYXJzZUludChmb3JtSWQpO1xyXG5cdGxldCBzdWJqZWN0SWRyZWNlaXZlZCA9IHBhcnNlSW50KHN1YmplY3RJZCk7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHRvcGljc0Zyb21TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEubm90ZXNEb3dubG9hZGFibGUuZmluZE1hbnkoe1xyXG5cdFx0XHR3aGVyZToge1xyXG5cdFx0XHRcdHN1YmplY3RJZDogc3ViamVjdElkcmVjZWl2ZWQsXHJcblx0XHRcdFx0Zm9ybUlkOiBmb3JtSWRyZWNlaXZlZCxcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdFx0bmFtZTogdHJ1ZSxcclxuXHRcdFx0XHRmaWxlRXh0ZW5zaW9uOiB0cnVlLFxyXG5cdFx0XHRcdGZvcm1JZDogdHJ1ZSxcclxuXHRcdFx0XHRzdWJqZWN0SWQ6IHRydWUsXHJcblx0XHRcdFx0cHVibGlzaGVkOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCB0b3BpY3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRvcGljc0Zyb21TZXJ2ZXIpKTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHRvcGljcyk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHR9IGZpbmFsbHkge1xyXG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZm9ybUlkIiwic3ViamVjdElkIiwiYm9keSIsImZvcm1JZHJlY2VpdmVkIiwicGFyc2VJbnQiLCJzdWJqZWN0SWRyZWNlaXZlZCIsInRvcGljc0Zyb21TZXJ2ZXIiLCJub3Rlc0Rvd25sb2FkYWJsZSIsImZpbmRNYW55Iiwid2hlcmUiLCJzZWxlY3QiLCJpZCIsIm5hbWUiLCJmaWxlRXh0ZW5zaW9uIiwicHVibGlzaGVkIiwidG9waWNzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/downloadable.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/downloadable.tsx"));
module.exports = __webpack_exports__;

})();