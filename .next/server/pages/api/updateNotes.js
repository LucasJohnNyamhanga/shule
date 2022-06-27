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
exports.id = "pages/api/updateNotes";
exports.ids = ["pages/api/updateNotes"];
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

/***/ "(api)/./pages/api/updateNotes.tsx":
/*!***********************************!*\
  !*** ./pages/api/updateNotes.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { id , formId , subjectId , topicId , content  } = req.body;\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.note.update({\n            where: {\n                id: parseInt(id)\n            },\n            data: {\n                content,\n                topicId,\n                subjectId,\n                formId\n            }\n        });\n        res.status(200).json({\n            message: \"Update successful\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error, Could not update.\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlTm90ZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXdDO0FBTXpCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUE4QixFQUM5QjtJQUNBLE1BQU0sRUFBRUMsRUFBRSxHQUFFQyxNQUFNLEdBQUVDLFNBQVMsR0FBRUMsT0FBTyxHQUFFQyxPQUFPLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxJQUFJO0lBSTFELElBQUk7UUFDRixNQUFNVCwwREFBa0IsQ0FBQztZQUNqQlksS0FBSyxFQUFFO2dCQUFFUixFQUFFLEVBQUdTLFFBQVEsQ0FBQ1QsRUFBRSxDQUFDO2FBQUU7WUFDNUJVLElBQUksRUFBRTtnQkFDSk4sT0FBTztnQkFDUEQsT0FBTztnQkFDUEQsU0FBUztnQkFDVEQsTUFBTTthQUNQO1NBQ0osQ0FBQztRQUNORixHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLE9BQU8sRUFBQyxtQkFBbUI7U0FBQyxDQUFDLENBQUM7S0FDckQsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDZGYsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUMsMEJBQTBCO1NBQUMsQ0FBQyxDQUFDO0tBQzVELFFBQVM7UUFDUixNQUFNakIsMERBQWtCLEVBQUUsQ0FBQztLQUM1QjtDQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvdXBkYXRlTm90ZXMudHN4PzNjZjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJ1xyXG50eXBlIHVzZXJEYXRhID0ge1xyXG4gIG1lc3NhZ2U6c3RyaW5nLFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTx1c2VyRGF0YT5cclxuKSB7XHJcbiAgY29uc3QgeyBpZCwgZm9ybUlkLCBzdWJqZWN0SWQsIHRvcGljSWQsIGNvbnRlbnQgfSA9IHJlcS5ib2R5XHJcbiAgXHJcblxyXG4gIFxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgcHJpc21hLm5vdGUudXBkYXRlKHtcclxuICAgICAgICAgICAgICB3aGVyZTogeyBpZCA6IHBhcnNlSW50KGlkKSB9LFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICB0b3BpY0lkLFxyXG4gICAgICAgICAgICAgICAgc3ViamVjdElkLFxyXG4gICAgICAgICAgICAgICAgZm9ybUlkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOlwiVXBkYXRlIHN1Y2Nlc3NmdWxcIn0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lc3NhZ2U6XCJFcnJvciwgQ291bGQgbm90IHVwZGF0ZS5cIn0pO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsImZvcm1JZCIsInN1YmplY3RJZCIsInRvcGljSWQiLCJjb250ZW50IiwiYm9keSIsIm5vdGUiLCJ1cGRhdGUiLCJ3aGVyZSIsInBhcnNlSW50IiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateNotes.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateNotes.tsx"));
module.exports = __webpack_exports__;

})();