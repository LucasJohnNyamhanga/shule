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
exports.id = "pages/api/addSubject";
exports.ids = ["pages/api/addSubject"];
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

/***/ "(api)/./pages/api/addSubject.tsx":
/*!**********************************!*\
  !*** ./pages/api/addSubject.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { subjectName , subjectDefinition , imageLocation , forms  } = req.body;\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.subject.create({\n            data: {\n                subjectName,\n                subjectDefinition,\n                imageLocation,\n                forms: {\n                    connect: forms\n                }\n            }\n        });\n        res.status(200).json({\n            message: \"Subject Successful added.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkU3ViamVjdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUM7QUFZMUIsZUFBZUMsT0FBTyxDQUNwQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ25CO0lBQ0QsTUFBTSxFQUFFQyxXQUFXLEdBQUVDLGlCQUFpQixHQUFFQyxhQUFhLEdBQUVDLEtBQUssR0FBRSxHQUFHTCxHQUFHLENBQUNNLElBQUk7SUFDekUsSUFBSTtRQUNILE1BQU1SLDZEQUFxQixDQUFDO1lBQzNCVyxJQUFJLEVBQUU7Z0JBQ0xQLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGFBQWE7Z0JBQ2JDLEtBQUssRUFBRTtvQkFDTkssT0FBTyxFQUFFTCxLQUFLO2lCQUNkO2FBQ0Q7U0FDRCxDQUFDLENBQUM7UUFDSEosR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQ0MsSUFBSSxFQUFFLFNBQVM7U0FDZixDQUFDLENBQUM7S0FDSCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7UUFDbkJkLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSw0QkFBNEI7WUFDckNDLElBQUksRUFBRSxPQUFPO1NBQ2IsQ0FBQyxDQUFDO0tBQ0gsUUFBUztRQUNULE1BQU1oQiwwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9hZGRTdWJqZWN0LnRzeD80M2YzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG50eXBlIGRhdGFUeXBlID0ge1xyXG5cdHN1YmplY3ROYW1lOiBzdHJpbmc7XHJcblx0c3ViamVjdERlZmluaXRpb246IHN0cmluZztcclxuXHRpbWFnZUxvY2F0aW9uOiBzdHJpbmc7XHJcblx0Zm9ybXM6IFtcclxuXHRcdHtcclxuXHRcdFx0aWQ6IG51bWJlcjtcclxuXHRcdH1cclxuXHRdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHsgc3ViamVjdE5hbWUsIHN1YmplY3REZWZpbml0aW9uLCBpbWFnZUxvY2F0aW9uLCBmb3JtcyB9ID0gcmVxLmJvZHk7XHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IHByaXNtYS5zdWJqZWN0LmNyZWF0ZSh7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRzdWJqZWN0TmFtZSxcclxuXHRcdFx0XHRzdWJqZWN0RGVmaW5pdGlvbixcclxuXHRcdFx0XHRpbWFnZUxvY2F0aW9uLFxyXG5cdFx0XHRcdGZvcm1zOiB7XHJcblx0XHRcdFx0XHRjb25uZWN0OiBmb3JtcyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcblx0XHRcdG1lc3NhZ2U6ICdTdWJqZWN0IFN1Y2Nlc3NmdWwgYWRkZWQuJyxcclxuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ0Vycm9yIHdyaXR0aW5nIHRvIGRhdGFiYXNlJyxcclxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdH0pO1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdWJqZWN0TmFtZSIsInN1YmplY3REZWZpbml0aW9uIiwiaW1hZ2VMb2NhdGlvbiIsImZvcm1zIiwiYm9keSIsInN1YmplY3QiLCJjcmVhdGUiLCJkYXRhIiwiY29ubmVjdCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidHlwZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/addSubject.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addSubject.tsx"));
module.exports = __webpack_exports__;

})();