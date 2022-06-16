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
exports.id = "pages/api/subjectsReference";
exports.ids = ["pages/api/subjectsReference"];
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

/***/ "(api)/./pages/api/subjectsReference.tsx":
/*!*****************************************!*\
  !*** ./pages/api/subjectsReference.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    try {\n        const subjectsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.subjectReference.findMany({\n            select: {\n                id: true,\n                subjectDefinition: true,\n                subjectName: true,\n                imageLocation: true,\n                published: true,\n                forms: {\n                    select: {\n                        formName: true\n                    }\n                }\n            }\n        });\n        const subjects = JSON.parse(JSON.stringify(subjectsFromServer));\n        res.status(200).json(subjects);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3ViamVjdHNSZWZlcmVuY2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBWTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUE4QixFQUM3QjtJQUNELElBQUk7UUFDSCxNQUFNQyxrQkFBa0IsR0FBRyxNQUFNSix3RUFBZ0MsQ0FBQztZQUNqRU8sTUFBTSxFQUFFO2dCQUNQQyxFQUFFLEVBQUUsSUFBSTtnQkFDUkMsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkJDLFdBQVcsRUFBRSxJQUFJO2dCQUNqQkMsYUFBYSxFQUFFLElBQUk7Z0JBQ25CQyxTQUFTLEVBQUUsSUFBSTtnQkFDZkMsS0FBSyxFQUFFO29CQUNOTixNQUFNLEVBQUU7d0JBQ1BPLFFBQVEsRUFBRSxJQUFJO3FCQUNkO2lCQUNEO2FBQ0Q7U0FDRCxDQUFDO1FBQ0YsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNkLGtCQUFrQixDQUFDLENBQUM7UUFDL0RELEdBQUcsQ0FBQ2dCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxRQUFRLENBQUMsQ0FBQztLQUMvQixDQUFDLE9BQU9NLEtBQUssRUFBRSxFQUNmLFFBQVM7UUFDVCxNQUFNckIsMERBQWtCLEVBQUUsQ0FBQztLQUMzQjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvc3ViamVjdHNSZWZlcmVuY2UudHN4PzkxOTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XHJcbnR5cGUgdXNlckRhdGEgPSB7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRzdWJqZWN0TmFtZTogc3RyaW5nO1xyXG5cdHN1YmplY3REZWZpbml0aW9uOiBzdHJpbmcgfCBudWxsO1xyXG5cdGltYWdlTG9jYXRpb246IHN0cmluZyB8IG51bGw7XHJcblx0cHVibGlzaGVkOiBib29sZWFuO1xyXG5cdGZvcm1zOiB7XHJcblx0XHRmb3JtTmFtZTogU3RyaW5nO1xyXG5cdH1bXTtcclxufVtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlPHVzZXJEYXRhPlxyXG4pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3Qgc3ViamVjdHNGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLnN1YmplY3RSZWZlcmVuY2UuZmluZE1hbnkoe1xyXG5cdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRpZDogdHJ1ZSxcclxuXHRcdFx0XHRzdWJqZWN0RGVmaW5pdGlvbjogdHJ1ZSxcclxuXHRcdFx0XHRzdWJqZWN0TmFtZTogdHJ1ZSxcclxuXHRcdFx0XHRpbWFnZUxvY2F0aW9uOiB0cnVlLFxyXG5cdFx0XHRcdHB1Ymxpc2hlZDogdHJ1ZSxcclxuXHRcdFx0XHRmb3Jtczoge1xyXG5cdFx0XHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0XHRcdGZvcm1OYW1lOiB0cnVlLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBzdWJqZWN0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3ViamVjdHNGcm9tU2VydmVyKSk7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihzdWJqZWN0cyk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHR9IGZpbmFsbHkge1xyXG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3ViamVjdHNGcm9tU2VydmVyIiwic3ViamVjdFJlZmVyZW5jZSIsImZpbmRNYW55Iiwic2VsZWN0IiwiaWQiLCJzdWJqZWN0RGVmaW5pdGlvbiIsInN1YmplY3ROYW1lIiwiaW1hZ2VMb2NhdGlvbiIsInB1Ymxpc2hlZCIsImZvcm1zIiwiZm9ybU5hbWUiLCJzdWJqZWN0cyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/subjectsReference.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subjectsReference.tsx"));
module.exports = __webpack_exports__;

})();