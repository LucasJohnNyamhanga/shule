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
exports.id = "pages/api/examTypeVerify";
exports.ids = ["pages/api/examTypeVerify"];
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

/***/ "(api)/./pages/api/examTypeVerify.tsx":
/*!**************************************!*\
  !*** ./pages/api/examTypeVerify.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { formId , subjectId , name  } = req.body;\n    let formIdreceived = parseInt(formId);\n    let subjectIdreceived = parseInt(subjectId);\n    try {\n        const topicsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.examType.findMany({\n            where: {\n                subjectId: subjectIdreceived,\n                formId: formIdreceived,\n                name\n            },\n            select: {\n                id: true,\n                name: true,\n                definition: true,\n                formId: true,\n                subjectId: true,\n                published: true\n            }\n        });\n        const topics = JSON.parse(JSON.stringify(topicsFromServer));\n        res.status(200).json(topics);\n    } catch (error) {\n        console.log(error);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXhhbVR5cGVWZXJpZnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBRTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxTQUFTLEdBQUVDLElBQUksR0FBRSxHQUFHSixHQUFHLENBQUNLLElBQUk7SUFDNUMsSUFBSUMsY0FBYyxHQUFHQyxRQUFRLENBQUNMLE1BQU0sQ0FBQztJQUNyQyxJQUFJTSxpQkFBaUIsR0FBR0QsUUFBUSxDQUFDSixTQUFTLENBQUM7SUFDM0MsSUFBSTtRQUNILE1BQU1NLGdCQUFnQixHQUFHLE1BQU1YLGdFQUF3QixDQUFDO1lBQ3ZEYyxLQUFLLEVBQUU7Z0JBQ05ULFNBQVMsRUFBRUssaUJBQWlCO2dCQUM1Qk4sTUFBTSxFQUFFSSxjQUFjO2dCQUN0QkYsSUFBSTthQUNKO1lBQ0RTLE1BQU0sRUFBRTtnQkFDUEMsRUFBRSxFQUFFLElBQUk7Z0JBQ1JWLElBQUksRUFBRSxJQUFJO2dCQUNWVyxVQUFVLEVBQUUsSUFBSTtnQkFDaEJiLE1BQU0sRUFBRSxJQUFJO2dCQUNaQyxTQUFTLEVBQUUsSUFBSTtnQkFDZmEsU0FBUyxFQUFFLElBQUk7YUFDZjtTQUNELENBQUM7UUFDRixNQUFNQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1gsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRFIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLE1BQU0sQ0FBQyxDQUFDO0tBQzdCLENBQUMsT0FBT00sS0FBSyxFQUFFO1FBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztLQUNuQixRQUFTO1FBQ1QsTUFBTXpCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2V4YW1UeXBlVmVyaWZ5LnRzeD81Y2U0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHsgZm9ybUlkLCBzdWJqZWN0SWQsIG5hbWUgfSA9IHJlcS5ib2R5O1xyXG5cdGxldCBmb3JtSWRyZWNlaXZlZCA9IHBhcnNlSW50KGZvcm1JZCk7XHJcblx0bGV0IHN1YmplY3RJZHJlY2VpdmVkID0gcGFyc2VJbnQoc3ViamVjdElkKTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgdG9waWNzRnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS5leGFtVHlwZS5maW5kTWFueSh7XHJcblx0XHRcdHdoZXJlOiB7XHJcblx0XHRcdFx0c3ViamVjdElkOiBzdWJqZWN0SWRyZWNlaXZlZCxcclxuXHRcdFx0XHRmb3JtSWQ6IGZvcm1JZHJlY2VpdmVkLFxyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRcdG5hbWU6IHRydWUsXHJcblx0XHRcdFx0ZGVmaW5pdGlvbjogdHJ1ZSxcclxuXHRcdFx0XHRmb3JtSWQ6IHRydWUsXHJcblx0XHRcdFx0c3ViamVjdElkOiB0cnVlLFxyXG5cdFx0XHRcdHB1Ymxpc2hlZDogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgdG9waWNzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0b3BpY3NGcm9tU2VydmVyKSk7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih0b3BpY3MpO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZvcm1JZCIsInN1YmplY3RJZCIsIm5hbWUiLCJib2R5IiwiZm9ybUlkcmVjZWl2ZWQiLCJwYXJzZUludCIsInN1YmplY3RJZHJlY2VpdmVkIiwidG9waWNzRnJvbVNlcnZlciIsImV4YW1UeXBlIiwiZmluZE1hbnkiLCJ3aGVyZSIsInNlbGVjdCIsImlkIiwiZGVmaW5pdGlvbiIsInB1Ymxpc2hlZCIsInRvcGljcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/examTypeVerify.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/examTypeVerify.tsx"));
module.exports = __webpack_exports__;

})();