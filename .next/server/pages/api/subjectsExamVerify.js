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
exports.id = "pages/api/subjectsExamVerify";
exports.ids = ["pages/api/subjectsExamVerify"];
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

/***/ "(api)/./pages/api/subjectsExamVerify.tsx":
/*!******************************************!*\
  !*** ./pages/api/subjectsExamVerify.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { subjectName  } = req.body;\n    try {\n        const subjectFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.subjectExams.findMany({\n            where: {\n                subjectName\n            },\n            select: {\n                id: true,\n                subjectName: true\n            }\n        });\n        const subjects = JSON.parse(JSON.stringify(subjectFromServer));\n        res.status(200).json(subjects);\n    } catch (error) {\n        console.log(error);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3ViamVjdHNFeGFtVmVyaWZ5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQVkxQixlQUFlQyxPQUFPLENBQ3BDQyxHQUFtQixFQUNuQkMsR0FBOEIsRUFDN0I7SUFDRCxNQUFNLEVBQUVDLFdBQVcsR0FBRSxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFDaEMsSUFBSTtRQUNILE1BQU1DLGlCQUFpQixHQUFHLE1BQU1OLG9FQUE0QixDQUFDO1lBQzVEUyxLQUFLLEVBQUU7Z0JBQ05MLFdBQVc7YUFDWDtZQUNETSxNQUFNLEVBQUU7Z0JBQ1BDLEVBQUUsRUFBRSxJQUFJO2dCQUNSUCxXQUFXLEVBQUUsSUFBSTthQUNqQjtTQUNELENBQUM7UUFDRixNQUFNUSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1QsaUJBQWlCLENBQUMsQ0FBQztRQUM5REgsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsUUFBUSxDQUFDLENBQUM7S0FDL0IsQ0FBQyxPQUFPTSxLQUFLLEVBQUU7UUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO0tBQ25CLFFBQVM7UUFDVCxNQUFNbEIsMERBQWtCLEVBQUUsQ0FBQztLQUMzQjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvc3ViamVjdHNFeGFtVmVyaWZ5LnRzeD9kMDA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG50eXBlIHVzZXJEYXRhID0ge1xyXG5cdGlkOiBudW1iZXI7XHJcblx0c3ViamVjdE5hbWU6IHN0cmluZztcclxuXHRzdWJqZWN0RGVmaW5pdGlvbjogc3RyaW5nIHwgbnVsbDtcclxuXHRpbWFnZUxvY2F0aW9uOiBzdHJpbmcgfCBudWxsO1xyXG5cdHB1Ymxpc2hlZDogYm9vbGVhbjtcclxuXHRmb3Jtczoge1xyXG5cdFx0Zm9ybU5hbWU6IFN0cmluZztcclxuXHR9W107XHJcbn1bXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZTx1c2VyRGF0YT5cclxuKSB7XHJcblx0Y29uc3QgeyBzdWJqZWN0TmFtZSB9ID0gcmVxLmJvZHk7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHN1YmplY3RGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLnN1YmplY3RFeGFtcy5maW5kTWFueSh7XHJcblx0XHRcdHdoZXJlOiB7XHJcblx0XHRcdFx0c3ViamVjdE5hbWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRcdHN1YmplY3ROYW1lOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBzdWJqZWN0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3ViamVjdEZyb21TZXJ2ZXIpKTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHN1YmplY3RzKTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdWJqZWN0TmFtZSIsImJvZHkiLCJzdWJqZWN0RnJvbVNlcnZlciIsInN1YmplY3RFeGFtcyIsImZpbmRNYW55Iiwid2hlcmUiLCJzZWxlY3QiLCJpZCIsInN1YmplY3RzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/subjectsExamVerify.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subjectsExamVerify.tsx"));
module.exports = __webpack_exports__;

})();