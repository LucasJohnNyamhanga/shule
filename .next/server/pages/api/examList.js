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
exports.id = "pages/api/examList";
exports.ids = ["pages/api/examList"];
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

/***/ "(api)/./pages/api/examList.tsx":
/*!********************************!*\
  !*** ./pages/api/examList.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { examTypeId  } = req.body;\n    let id = parseInt(examTypeId);\n    console.log(\"id ya examType ni \" + id);\n    try {\n        const topicsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.examType.findUnique({\n            where: {\n                id\n            },\n            select: {\n                exam: {\n                    select: {\n                        id: true,\n                        description: true,\n                        year: true\n                    }\n                }\n            }\n        });\n        const topics = JSON.parse(JSON.stringify(topicsFromServer));\n        res.status(200).json(topics);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXhhbUxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBRTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFBRUMsVUFBVSxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUMvQixJQUFJQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0gsVUFBVSxDQUFDO0lBQzdCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBR0gsRUFBRSxDQUFDLENBQUM7SUFDdkMsSUFBSTtRQUNILE1BQU1JLGdCQUFnQixHQUFHLE1BQU1WLGtFQUEwQixDQUFDO1lBQ3pEYSxLQUFLLEVBQUU7Z0JBQ05QLEVBQUU7YUFDRjtZQUNEUSxNQUFNLEVBQUU7Z0JBQ1BDLElBQUksRUFBRTtvQkFDTEQsTUFBTSxFQUFFO3dCQUNQUixFQUFFLEVBQUUsSUFBSTt3QkFDUlUsV0FBVyxFQUFFLElBQUk7d0JBQ2pCQyxJQUFJLEVBQUUsSUFBSTtxQkFDVjtpQkFDRDthQUNEO1NBQ0QsQ0FBQztRQUNGLE1BQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDWCxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNEUCxHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxDQUFDLENBQUM7S0FDN0IsQ0FBQyxPQUFPTSxLQUFLLEVBQUUsRUFDZixRQUFTO1FBQ1QsTUFBTXhCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2V4YW1MaXN0LnRzeD8zYjcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHsgZXhhbVR5cGVJZCB9ID0gcmVxLmJvZHk7XHJcblx0bGV0IGlkID0gcGFyc2VJbnQoZXhhbVR5cGVJZCk7XHJcblx0Y29uc29sZS5sb2coJ2lkIHlhIGV4YW1UeXBlIG5pICcgKyBpZCk7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHRvcGljc0Zyb21TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEuZXhhbVR5cGUuZmluZFVuaXF1ZSh7XHJcblx0XHRcdHdoZXJlOiB7XHJcblx0XHRcdFx0aWQsXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdGV4YW06IHtcclxuXHRcdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0XHRpZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRydWUsXHJcblx0XHRcdFx0XHRcdHllYXI6IHRydWUsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHRvcGljcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9waWNzRnJvbVNlcnZlcikpO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24odG9waWNzKTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJleGFtVHlwZUlkIiwiYm9keSIsImlkIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwidG9waWNzRnJvbVNlcnZlciIsImV4YW1UeXBlIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0IiwiZXhhbSIsImRlc2NyaXB0aW9uIiwieWVhciIsInRvcGljcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/examList.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/examList.tsx"));
module.exports = __webpack_exports__;

})();