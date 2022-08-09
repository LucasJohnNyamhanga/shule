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
exports.id = "pages/api/subjectsReviewVerify";
exports.ids = ["pages/api/subjectsReviewVerify"];
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

/***/ "(api)/./pages/api/subjectsReviewVerify.tsx":
/*!********************************************!*\
  !*** ./pages/api/subjectsReviewVerify.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { subjectName  } = req.body;\n    try {\n        const subjectFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.subjectReview.findMany({\n            where: {\n                subjectName\n            },\n            select: {\n                id: true,\n                subjectName: true\n            }\n        });\n        const subjects = JSON.parse(JSON.stringify(subjectFromServer));\n        res.status(200).json(subjects);\n    } catch (error) {\n        console.log(error);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3ViamVjdHNSZXZpZXdWZXJpZnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXdDO0FBYXpCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUE4QixFQUM5QjtJQUVBLE1BQU0sRUFBRUMsV0FBVyxHQUFDLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUNqQyxJQUFJO1FBQ0YsTUFBTUMsaUJBQWlCLEdBQUcsTUFBTU4scUVBQTZCLENBQUM7WUFDNURTLEtBQUssRUFBRTtnQkFDTEwsV0FBVzthQUNaO1lBQ0NNLE1BQU0sRUFBRTtnQkFDTkMsRUFBRSxFQUFFLElBQUk7Z0JBQ1JQLFdBQVcsRUFBQyxJQUFJO2FBQ2pCO1NBQ0YsQ0FBQztRQUNGLE1BQU1RLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDVCxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlESCxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxRQUFRLENBQUMsQ0FBQztLQUM5QixDQUFDLE9BQU9NLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7S0FDcEIsUUFBUztRQUNWLE1BQU1sQiwwREFBa0IsRUFBRSxDQUFDO0tBQzVCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9zdWJqZWN0c1Jldmlld1ZlcmlmeS50c3g/YTliMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnXHJcbnR5cGUgdXNlckRhdGEgPSB7XHJcbiAgaWQ6bnVtYmVyLFxyXG4gIHN1YmplY3ROYW1lOnN0cmluZyxcclxuICBzdWJqZWN0RGVmaW5pdGlvbjpzdHJpbmd8bnVsbCxcclxuICBpbWFnZUxvY2F0aW9uOiBzdHJpbmcgfCBudWxsLFxyXG4gIHB1Ymxpc2hlZDpib29sZWFuLFxyXG4gIGZvcm1zOiB7XHJcbiAgICAgIGZvcm1OYW1lOlN0cmluZ1xyXG4gICAgfVtdLFxyXG4gICAgXHJcbn1bXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPHVzZXJEYXRhPlxyXG4pIHtcclxuXHJcbiAgY29uc3QgeyBzdWJqZWN0TmFtZX0gPSByZXEuYm9keVxyXG50cnkge1xyXG4gIGNvbnN0IHN1YmplY3RGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLnN1YmplY3RSZXZpZXcuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgc3ViamVjdE5hbWUsXHJcbiAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBzdWJqZWN0TmFtZTp0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3Qgc3ViamVjdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN1YmplY3RGcm9tU2VydmVyKSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzdWJqZWN0cyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3ViamVjdE5hbWUiLCJib2R5Iiwic3ViamVjdEZyb21TZXJ2ZXIiLCJzdWJqZWN0UmV2aWV3IiwiZmluZE1hbnkiLCJ3aGVyZSIsInNlbGVjdCIsImlkIiwic3ViamVjdHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/subjectsReviewVerify.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subjectsReviewVerify.tsx"));
module.exports = __webpack_exports__;

})();