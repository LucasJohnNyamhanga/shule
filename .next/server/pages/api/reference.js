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
exports.id = "pages/api/reference";
exports.ids = ["pages/api/reference"];
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

/***/ "(api)/./pages/api/reference.tsx":
/*!*********************************!*\
  !*** ./pages/api/reference.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { formId , subjectId  } = req.body;\n    let formIdreceived = parseInt(formId);\n    let subjectIdreceived = parseInt(subjectId);\n    console.log(formIdreceived, subjectIdreceived);\n    try {\n        const topicsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.reference.findMany({\n            where: {\n                subjectId: subjectIdreceived,\n                formReference: {\n                    some: {\n                        id: formIdreceived\n                    }\n                }\n            },\n            select: {\n                id: true,\n                name: true,\n                description: true,\n                published: true,\n                isPdf: true\n            }\n        });\n        const topics = JSON.parse(JSON.stringify(topicsFromServer));\n        res.status(200).json(topics);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVmZXJlbmNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQUUxQixlQUFlQyxPQUFPLENBQ3BDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDbkI7SUFDRCxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsU0FBUyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUN0QyxJQUFJQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0osTUFBTSxDQUFDO0lBQ3JDLElBQUlLLGlCQUFpQixHQUFHRCxRQUFRLENBQUNILFNBQVMsQ0FBQztJQUMzQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNKLGNBQWMsRUFBRUUsaUJBQWlCLENBQUMsQ0FBQztJQUMvQyxJQUFJO1FBQ0gsTUFBTUcsZ0JBQWdCLEdBQUcsTUFBTVosaUVBQXlCLENBQUM7WUFDeERlLEtBQUssRUFBRTtnQkFDTlYsU0FBUyxFQUFFSSxpQkFBaUI7Z0JBQzVCTyxhQUFhLEVBQUU7b0JBQ2RDLElBQUksRUFBRTt3QkFDTEMsRUFBRSxFQUFFWCxjQUFjO3FCQUNsQjtpQkFDRDthQUNEO1lBQ0RZLE1BQU0sRUFBRTtnQkFDUEQsRUFBRSxFQUFFLElBQUk7Z0JBQ1JFLElBQUksRUFBRSxJQUFJO2dCQUNWQyxXQUFXLEVBQUUsSUFBSTtnQkFDakJDLFNBQVMsRUFBRSxJQUFJO2dCQUNmQyxLQUFLLEVBQUUsSUFBSTthQUNYO1NBQ0QsQ0FBQztRQUNGLE1BQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDZixnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNEVCxHQUFHLENBQUN5QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxDQUFDLENBQUM7S0FDN0IsQ0FBQyxPQUFPTSxLQUFLLEVBQUUsRUFDZixRQUFTO1FBQ1QsTUFBTTlCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL3JlZmVyZW5jZS50c3g/ZGYzZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuXHRjb25zdCB7IGZvcm1JZCwgc3ViamVjdElkIH0gPSByZXEuYm9keTtcclxuXHRsZXQgZm9ybUlkcmVjZWl2ZWQgPSBwYXJzZUludChmb3JtSWQpO1xyXG5cdGxldCBzdWJqZWN0SWRyZWNlaXZlZCA9IHBhcnNlSW50KHN1YmplY3RJZCk7XHJcblx0Y29uc29sZS5sb2coZm9ybUlkcmVjZWl2ZWQsIHN1YmplY3RJZHJlY2VpdmVkKTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgdG9waWNzRnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS5yZWZlcmVuY2UuZmluZE1hbnkoe1xyXG5cdFx0XHR3aGVyZToge1xyXG5cdFx0XHRcdHN1YmplY3RJZDogc3ViamVjdElkcmVjZWl2ZWQsXHJcblx0XHRcdFx0Zm9ybVJlZmVyZW5jZToge1xyXG5cdFx0XHRcdFx0c29tZToge1xyXG5cdFx0XHRcdFx0XHRpZDogZm9ybUlkcmVjZWl2ZWQsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRcdG5hbWU6IHRydWUsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IHRydWUsXHJcblx0XHRcdFx0cHVibGlzaGVkOiB0cnVlLFxyXG5cdFx0XHRcdGlzUGRmOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCB0b3BpY3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRvcGljc0Zyb21TZXJ2ZXIpKTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHRvcGljcyk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHR9IGZpbmFsbHkge1xyXG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZm9ybUlkIiwic3ViamVjdElkIiwiYm9keSIsImZvcm1JZHJlY2VpdmVkIiwicGFyc2VJbnQiLCJzdWJqZWN0SWRyZWNlaXZlZCIsImNvbnNvbGUiLCJsb2ciLCJ0b3BpY3NGcm9tU2VydmVyIiwicmVmZXJlbmNlIiwiZmluZE1hbnkiLCJ3aGVyZSIsImZvcm1SZWZlcmVuY2UiLCJzb21lIiwiaWQiLCJzZWxlY3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwdWJsaXNoZWQiLCJpc1BkZiIsInRvcGljcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/reference.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/reference.tsx"));
module.exports = __webpack_exports__;

})();