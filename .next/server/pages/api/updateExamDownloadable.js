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
exports.id = "pages/api/updateExamDownloadable";
exports.ids = ["pages/api/updateExamDownloadable"];
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

/***/ "(api)/./pages/api/updateExamDownloadable.tsx":
/*!**********************************************!*\
  !*** ./pages/api/updateExamDownloadable.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { id , name , link , fileExtension , examId  } = req.body;\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.examDownloadable.update({\n            where: {\n                id: parseInt(id)\n            },\n            data: {\n                name,\n                link,\n                fileExtension,\n                examId\n            }\n        });\n        res.status(200).json({\n            message: \"Update successful\",\n            type: \"success\"\n        });\n        console.log(\"file ext is :\" + fileExtension);\n    } catch (error) {\n        console.log(error);\n        res.status(200).json({\n            message: \"Error, Could not update.\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlRXhhbURvd25sb2FkYWJsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUM7QUFNMUIsZUFBZUMsT0FBTyxDQUNwQ0MsR0FBbUIsRUFDbkJDLEdBQThCLEVBQzdCO0lBQ0QsTUFBTSxFQUFFQyxFQUFFLEdBQUVDLElBQUksR0FBRUMsSUFBSSxHQUFFQyxhQUFhLEdBQUVDLE1BQU0sR0FBRSxHQUFHTixHQUFHLENBQUNPLElBQUk7SUFFMUQsSUFBSTtRQUNILE1BQU1ULHNFQUE4QixDQUFDO1lBQ3BDWSxLQUFLLEVBQUU7Z0JBQUVSLEVBQUUsRUFBRVMsUUFBUSxDQUFDVCxFQUFFLENBQUM7YUFBRTtZQUMzQlUsSUFBSSxFQUFFO2dCQUNMVCxJQUFJO2dCQUNKQyxJQUFJO2dCQUNKQyxhQUFhO2dCQUNiQyxNQUFNO2FBQ047U0FDRCxDQUFDLENBQUM7UUFDSEwsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsbUJBQW1CO1lBQUVDLElBQUksRUFBRSxTQUFTO1NBQUUsQ0FBQyxDQUFDO1FBQ3hFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEdBQUdiLGFBQWEsQ0FBQyxDQUFDO0tBQzdDLENBQUMsT0FBT2MsS0FBSyxFQUFFO1FBQ2ZGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUNuQmxCLEdBQUcsQ0FDRFksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLDBCQUEwQjtZQUFFQyxJQUFJLEVBQUUsT0FBTztTQUFFLENBQUMsQ0FBQztLQUMvRCxRQUFTO1FBQ1QsTUFBTWxCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL3VwZGF0ZUV4YW1Eb3dubG9hZGFibGUudHN4P2NhYTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XHJcbnR5cGUgdXNlckRhdGEgPSB7XHJcblx0bWVzc2FnZTogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZTx1c2VyRGF0YT5cclxuKSB7XHJcblx0Y29uc3QgeyBpZCwgbmFtZSwgbGluaywgZmlsZUV4dGVuc2lvbiwgZXhhbUlkIH0gPSByZXEuYm9keTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IHByaXNtYS5leGFtRG93bmxvYWRhYmxlLnVwZGF0ZSh7XHJcblx0XHRcdHdoZXJlOiB7IGlkOiBwYXJzZUludChpZCkgfSxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0bGluayxcclxuXHRcdFx0XHRmaWxlRXh0ZW5zaW9uLFxyXG5cdFx0XHRcdGV4YW1JZCxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnVXBkYXRlIHN1Y2Nlc3NmdWwnLCB0eXBlOiAnc3VjY2VzcycgfSk7XHJcblx0XHRjb25zb2xlLmxvZygnZmlsZSBleHQgaXMgOicgKyBmaWxlRXh0ZW5zaW9uKTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0cmVzXHJcblx0XHRcdC5zdGF0dXMoMjAwKVxyXG5cdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdFcnJvciwgQ291bGQgbm90IHVwZGF0ZS4nLCB0eXBlOiAnZXJyb3InIH0pO1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsIm5hbWUiLCJsaW5rIiwiZmlsZUV4dGVuc2lvbiIsImV4YW1JZCIsImJvZHkiLCJleGFtRG93bmxvYWRhYmxlIiwidXBkYXRlIiwid2hlcmUiLCJwYXJzZUludCIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateExamDownloadable.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateExamDownloadable.tsx"));
module.exports = __webpack_exports__;

})();