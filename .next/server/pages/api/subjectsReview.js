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
exports.id = "pages/api/subjectsReview";
exports.ids = ["pages/api/subjectsReview"];
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

/***/ "(api)/./pages/api/subjectsReview.tsx":
/*!**************************************!*\
  !*** ./pages/api/subjectsReview.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    try {\n        const subjectsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.subjectReview.findMany({\n            select: {\n                id: true,\n                subjectName: true,\n                subjectDefinition: true,\n                imageLocation: true,\n                published: true,\n                forms: {\n                    select: {\n                        formName: true\n                    }\n                }\n            }\n        });\n        const subjects = JSON.parse(JSON.stringify(subjectsFromServer));\n        res.status(200).json(subjects);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3ViamVjdHNSZXZpZXcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXdDO0FBYXpCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUE4QixFQUM5QjtJQUNGLElBQUk7UUFDQSxNQUFNQyxrQkFBa0IsR0FBYSxNQUFNSixxRUFBNkIsQ0FBQztZQUN2RU8sTUFBTSxFQUFFO2dCQUNKQyxFQUFFLEVBQUMsSUFBSTtnQkFDUEMsV0FBVyxFQUFDLElBQUk7Z0JBQ2hCQyxpQkFBaUIsRUFBQyxJQUFJO2dCQUN0QkMsYUFBYSxFQUFFLElBQUk7Z0JBQ25CQyxTQUFTLEVBQUMsSUFBSTtnQkFDZEMsS0FBSyxFQUFFO29CQUNITixNQUFNLEVBQUU7d0JBQ1JPLFFBQVEsRUFBQyxJQUFJO3FCQUNaO2lCQUNKO2FBQ0o7U0FDRixDQUFDO1FBQ0YsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNkLGtCQUFrQixDQUFDLENBQUM7UUFDL0RELEdBQUcsQ0FBQ2dCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxRQUFRLENBQUMsQ0FBQztLQUM5QixDQUFDLE9BQU9NLEtBQUssRUFBRSxFQUVmLFFBQVM7UUFDVixNQUFNckIsMERBQWtCLEVBQUUsQ0FBQztLQUM1QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvc3ViamVjdHNSZXZpZXcudHN4PzkyZDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJ1xyXG50eXBlIHVzZXJEYXRhID0ge1xyXG4gIGlkOm51bWJlcixcclxuICBzdWJqZWN0TmFtZTpzdHJpbmcsXHJcbiAgc3ViamVjdERlZmluaXRpb246c3RyaW5nfG51bGwsXHJcbiAgaW1hZ2VMb2NhdGlvbjogc3RyaW5nIHwgbnVsbCxcclxuICBwdWJsaXNoZWQ6Ym9vbGVhbixcclxuICBmb3Jtczoge1xyXG4gICAgICBmb3JtTmFtZTpTdHJpbmdcclxuICAgIH1bXSxcclxuICAgIFxyXG59W11cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTx1c2VyRGF0YT5cclxuKSB7XHJcbnRyeSB7XHJcbiAgICBjb25zdCBzdWJqZWN0c0Zyb21TZXJ2ZXI6IHVzZXJEYXRhID0gYXdhaXQgcHJpc21hLnN1YmplY3RSZXZpZXcuZmluZE1hbnkoe1xyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgIGlkOnRydWUsXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZTp0cnVlLFxyXG4gICAgICAgICAgc3ViamVjdERlZmluaXRpb246dHJ1ZSxcclxuICAgICAgICAgIGltYWdlTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgICBwdWJsaXNoZWQ6dHJ1ZSxcclxuICAgICAgICAgIGZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgZm9ybU5hbWU6dHJ1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBzdWJqZWN0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3ViamVjdHNGcm9tU2VydmVyKSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzdWJqZWN0cyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN1YmplY3RzRnJvbVNlcnZlciIsInN1YmplY3RSZXZpZXciLCJmaW5kTWFueSIsInNlbGVjdCIsImlkIiwic3ViamVjdE5hbWUiLCJzdWJqZWN0RGVmaW5pdGlvbiIsImltYWdlTG9jYXRpb24iLCJwdWJsaXNoZWQiLCJmb3JtcyIsImZvcm1OYW1lIiwic3ViamVjdHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/subjectsReview.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subjectsReview.tsx"));
module.exports = __webpack_exports__;

})();