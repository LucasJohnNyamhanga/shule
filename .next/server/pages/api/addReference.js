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
exports.id = "pages/api/addReference";
exports.ids = ["pages/api/addReference"];
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

/***/ "(api)/./pages/api/addReference.tsx":
/*!************************************!*\
  !*** ./pages/api/addReference.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { name , description , data , formReference , subjectId , isPdf  } = req.body;\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.reference.create({\n            data: {\n                name,\n                description,\n                data,\n                formReference: {\n                    connect: formReference\n                },\n                subjectId,\n                isPdf: isPdf == \"True\" ? true : false\n            }\n        });\n        res.status(200).json({\n            message: \"Subject Successful added.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(\"Majanga : \" + error);\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkUmVmZXJlbmNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQVkxQixlQUFlQyxPQUFPLENBQ3BDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDbkI7SUFDRCxNQUFNLEVBQUVDLElBQUksR0FBRUMsV0FBVyxHQUFFQyxJQUFJLEdBQUVDLGFBQWEsR0FBRUMsU0FBUyxHQUFFQyxLQUFLLEdBQUUsR0FBR1AsR0FBRyxDQUFDUSxJQUFJO0lBRTdFLElBQUk7UUFDSCxNQUFNViwrREFBdUIsQ0FBQztZQUM3Qk0sSUFBSSxFQUFFO2dCQUNMRixJQUFJO2dCQUNKQyxXQUFXO2dCQUNYQyxJQUFJO2dCQUNKQyxhQUFhLEVBQUU7b0JBQ2RNLE9BQU8sRUFBRU4sYUFBYTtpQkFDdEI7Z0JBQ0RDLFNBQVM7Z0JBQ1RDLEtBQUssRUFBRUEsS0FBSyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSzthQUNyQztTQUNELENBQUMsQ0FBQztRQUNITixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCQyxPQUFPLEVBQUUsMkJBQTJCO1lBQ3BDQyxJQUFJLEVBQUUsU0FBUztTQUNmLENBQUMsQ0FBQztLQUNILENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksR0FBR0YsS0FBSyxDQUFDLENBQUM7UUFDbENmLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSw0QkFBNEI7WUFDckNDLElBQUksRUFBRSxPQUFPO1NBQ2IsQ0FBQyxDQUFDO0tBQ0gsUUFBUztRQUNULE1BQU1qQiwwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9hZGRSZWZlcmVuY2UudHN4P2YwNjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XHJcbnR5cGUgZGF0YVR5cGUgPSB7XHJcblx0c3ViamVjdE5hbWU6IHN0cmluZztcclxuXHRzdWJqZWN0RGVmaW5pdGlvbjogc3RyaW5nO1xyXG5cdGltYWdlTG9jYXRpb246IHN0cmluZztcclxuXHRmb3JtczogW1xyXG5cdFx0e1xyXG5cdFx0XHRpZDogbnVtYmVyO1xyXG5cdFx0fVxyXG5cdF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG5cdHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcblx0cmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcblx0Y29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0YSwgZm9ybVJlZmVyZW5jZSwgc3ViamVjdElkLCBpc1BkZiB9ID0gcmVxLmJvZHk7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBwcmlzbWEucmVmZXJlbmNlLmNyZWF0ZSh7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdGRhdGEsXHJcblx0XHRcdFx0Zm9ybVJlZmVyZW5jZToge1xyXG5cdFx0XHRcdFx0Y29ubmVjdDogZm9ybVJlZmVyZW5jZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHN1YmplY3RJZCxcclxuXHRcdFx0XHRpc1BkZjogaXNQZGYgPT0gJ1RydWUnID8gdHJ1ZSA6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcblx0XHRcdG1lc3NhZ2U6ICdTdWJqZWN0IFN1Y2Nlc3NmdWwgYWRkZWQuJyxcclxuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdNYWphbmdhIDogJyArIGVycm9yKTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ0Vycm9yIHdyaXR0aW5nIHRvIGRhdGFiYXNlJyxcclxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdH0pO1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJkYXRhIiwiZm9ybVJlZmVyZW5jZSIsInN1YmplY3RJZCIsImlzUGRmIiwiYm9keSIsInJlZmVyZW5jZSIsImNyZWF0ZSIsImNvbm5lY3QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInR5cGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addReference.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addReference.tsx"));
module.exports = __webpack_exports__;

})();