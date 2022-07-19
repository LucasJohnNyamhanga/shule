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
exports.id = "pages/api/addpurchase";
exports.ids = ["pages/api/addpurchase"];
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

/***/ "(api)/./pages/api/addpurchase.tsx":
/*!***********************************!*\
  !*** ./pages/api/addpurchase.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { name , value , usersId  } = req.body;\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.purchase.create({\n            data: {\n                usersId: parseInt(usersId),\n                name,\n                value\n            }\n        });\n        res.status(200).json({\n            message: \"Purchase Successful.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n        console.log(error);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkcHVyY2hhc2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBUTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRSxHQUFHSixHQUFHLENBQUNLLElBQUk7SUFDekMsSUFBSTtRQUNILE1BQU1QLDhEQUFzQixDQUFDO1lBQzVCVSxJQUFJLEVBQUU7Z0JBQ0xKLE9BQU8sRUFBRUssUUFBUSxDQUFDTCxPQUFPLENBQUM7Z0JBQzFCRixJQUFJO2dCQUNKQyxLQUFLO2FBQ0w7U0FDRCxDQUFDLENBQUM7UUFDSEYsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQkMsSUFBSSxFQUFFLFNBQVM7U0FDZixDQUFDLENBQUM7S0FDSCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNmYixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCQyxPQUFPLEVBQUUsNEJBQTRCO1lBQ3JDQyxJQUFJLEVBQUUsT0FBTztTQUNiLENBQUMsQ0FBQztRQUNIRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7S0FDbkIsUUFBUztRQUNULE1BQU1oQiwwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9hZGRwdXJjaGFzZS50c3g/NWU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxudHlwZSBkYXRhVHlwZSA9IHtcclxuXHRmb3JtSWQ6IHN0cmluZztcclxuXHRzdWJqZWN0SWQ6IHN0cmluZztcclxuXHR0b3BpY0lkOiBzdHJpbmc7XHJcblx0Y29udGVudDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHsgbmFtZSwgdmFsdWUsIHVzZXJzSWQgfSA9IHJlcS5ib2R5O1xyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBwcmlzbWEucHVyY2hhc2UuY3JlYXRlKHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHVzZXJzSWQ6IHBhcnNlSW50KHVzZXJzSWQpLFxyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ1B1cmNoYXNlIFN1Y2Nlc3NmdWwuJyxcclxuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ0Vycm9yIHdyaXR0aW5nIHRvIGRhdGFiYXNlJyxcclxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwidmFsdWUiLCJ1c2Vyc0lkIiwiYm9keSIsInB1cmNoYXNlIiwiY3JlYXRlIiwiZGF0YSIsInBhcnNlSW50Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addpurchase.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addpurchase.tsx"));
module.exports = __webpack_exports__;

})();