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
exports.id = "pages/api/getUser";
exports.ids = ["pages/api/getUser"];
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

/***/ "(api)/./pages/api/getUser.tsx":
/*!*******************************!*\
  !*** ./pages/api/getUser.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { username  } = req.body;\n    try {\n        const userFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.users.findFirst({\n            where: {\n                username\n            },\n            select: {\n                id: true,\n                username: true,\n                isAdmin: true,\n                image: true\n            }\n        });\n        const user = JSON.parse(JSON.stringify(userFromServer));\n        if (user) {\n            res.status(200).json(user);\n        } else {\n            res.status(404).json(\"Not Found\");\n        }\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VXNlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUM7QUFFMUIsZUFBZUMsT0FBTyxDQUNwQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ25CO0lBQ0QsTUFBTSxFQUFFQyxRQUFRLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBQzdCLElBQUk7UUFDSCxNQUFNQyxjQUFjLEdBQUcsTUFBTU4sOERBQXNCLENBQUM7WUFDbkRTLEtBQUssRUFBRTtnQkFDTkwsUUFBUTthQUNSO1lBQ0RNLE1BQU0sRUFBRTtnQkFDUEMsRUFBRSxFQUFFLElBQUk7Z0JBQ1JQLFFBQVEsRUFBRSxJQUFJO2dCQUNkUSxPQUFPLEVBQUUsSUFBSTtnQkFDYkMsS0FBSyxFQUFFLElBQUk7YUFDWDtTQUNELENBQUM7UUFDRixNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1gsY0FBYyxDQUFDLENBQUM7UUFDdkQsSUFBSVEsSUFBSSxFQUFFO1lBQ1RYLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLElBQUksQ0FBQyxDQUFDO1NBQzNCLE1BQU07WUFDTlgsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsQztLQUNELENBQUMsT0FBT0MsS0FBSyxFQUFFLEVBQ2YsUUFBUztRQUNULE1BQU1wQiwwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9nZXRVc2VyLnRzeD9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJlcS5ib2R5O1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB1c2VyRnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS51c2Vycy5maW5kRmlyc3Qoe1xyXG5cdFx0XHR3aGVyZToge1xyXG5cdFx0XHRcdHVzZXJuYW1lLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRpZDogdHJ1ZSxcclxuXHRcdFx0XHR1c2VybmFtZTogdHJ1ZSxcclxuXHRcdFx0XHRpc0FkbWluOiB0cnVlLFxyXG5cdFx0XHRcdGltYWdlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCB1c2VyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1c2VyRnJvbVNlcnZlcikpO1xyXG5cdFx0aWYgKHVzZXIpIHtcclxuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXMuc3RhdHVzKDQwNCkuanNvbignTm90IEZvdW5kJyk7XHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHR9IGZpbmFsbHkge1xyXG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlcm5hbWUiLCJib2R5IiwidXNlckZyb21TZXJ2ZXIiLCJ1c2VycyIsImZpbmRGaXJzdCIsIndoZXJlIiwic2VsZWN0IiwiaWQiLCJpc0FkbWluIiwiaW1hZ2UiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getUser.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getUser.tsx"));
module.exports = __webpack_exports__;

})();