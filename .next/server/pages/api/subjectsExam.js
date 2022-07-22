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
exports.id = "pages/api/subjectsExam";
exports.ids = ["pages/api/subjectsExam"];
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

/***/ "(api)/./pages/api/subjectsExam.tsx":
/*!************************************!*\
  !*** ./pages/api/subjectsExam.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    try {\n        const subjectsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.subjectExams.findMany({\n            select: {\n                id: true,\n                subjectDefinition: true,\n                subjectName: true,\n                imageLocation: true,\n                published: true,\n                forms: {\n                    select: {\n                        formName: true\n                    }\n                }\n            }\n        });\n        const subjects = JSON.parse(JSON.stringify(subjectsFromServer));\n        res.status(200).json(subjects);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3ViamVjdHNFeGFtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQVkxQixlQUFlQyxPQUFPLENBQ3BDQyxHQUFtQixFQUNuQkMsR0FBOEIsRUFDN0I7SUFDRCxJQUFJO1FBQ0gsTUFBTUMsa0JBQWtCLEdBQUcsTUFBTUosb0VBQTRCLENBQUM7WUFDN0RPLE1BQU0sRUFBRTtnQkFDUEMsRUFBRSxFQUFFLElBQUk7Z0JBQ1JDLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCQyxXQUFXLEVBQUUsSUFBSTtnQkFDakJDLGFBQWEsRUFBRSxJQUFJO2dCQUNuQkMsU0FBUyxFQUFFLElBQUk7Z0JBQ2ZDLEtBQUssRUFBRTtvQkFDTk4sTUFBTSxFQUFFO3dCQUNQTyxRQUFRLEVBQUUsSUFBSTtxQkFDZDtpQkFDRDthQUNEO1NBQ0QsQ0FBQztRQUNGLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDZCxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9ERCxHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsUUFBUSxDQUFDLENBQUM7S0FDL0IsQ0FBQyxPQUFPTSxLQUFLLEVBQUUsRUFDZixRQUFTO1FBQ1QsTUFBTXJCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL3N1YmplY3RzRXhhbS50c3g/YjYzZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxudHlwZSB1c2VyRGF0YSA9IHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdHN1YmplY3ROYW1lOiBzdHJpbmc7XHJcblx0c3ViamVjdERlZmluaXRpb246IHN0cmluZyB8IG51bGw7XHJcblx0aW1hZ2VMb2NhdGlvbjogc3RyaW5nIHwgbnVsbDtcclxuXHRwdWJsaXNoZWQ6IGJvb2xlYW47XHJcblx0Zm9ybXM6IHtcclxuXHRcdGZvcm1OYW1lOiBTdHJpbmc7XHJcblx0fVtdO1xyXG59W107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG5cdHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcblx0cmVzOiBOZXh0QXBpUmVzcG9uc2U8dXNlckRhdGE+XHJcbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBzdWJqZWN0c0Zyb21TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEuc3ViamVjdEV4YW1zLmZpbmRNYW55KHtcclxuXHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdFx0c3ViamVjdERlZmluaXRpb246IHRydWUsXHJcblx0XHRcdFx0c3ViamVjdE5hbWU6IHRydWUsXHJcblx0XHRcdFx0aW1hZ2VMb2NhdGlvbjogdHJ1ZSxcclxuXHRcdFx0XHRwdWJsaXNoZWQ6IHRydWUsXHJcblx0XHRcdFx0Zm9ybXM6IHtcclxuXHRcdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0XHRmb3JtTmFtZTogdHJ1ZSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3Qgc3ViamVjdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN1YmplY3RzRnJvbVNlcnZlcikpO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oc3ViamVjdHMpO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN1YmplY3RzRnJvbVNlcnZlciIsInN1YmplY3RFeGFtcyIsImZpbmRNYW55Iiwic2VsZWN0IiwiaWQiLCJzdWJqZWN0RGVmaW5pdGlvbiIsInN1YmplY3ROYW1lIiwiaW1hZ2VMb2NhdGlvbiIsInB1Ymxpc2hlZCIsImZvcm1zIiwiZm9ybU5hbWUiLCJzdWJqZWN0cyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/subjectsExam.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subjectsExam.tsx"));
module.exports = __webpack_exports__;

})();