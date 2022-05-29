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
exports.id = "pages/api/examType";
exports.ids = ["pages/api/examType"];
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

/***/ "(api)/./pages/api/examType.tsx":
/*!********************************!*\
  !*** ./pages/api/examType.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { formId , subjectId  } = req.body;\n    let formIdreceived = parseInt(formId);\n    let subjectIdreceived = parseInt(subjectId);\n    try {\n        const topicsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.examType.findMany({\n            where: {\n                subjectId: subjectIdreceived,\n                formId: formIdreceived\n            },\n            select: {\n                id: true,\n                name: true,\n                definition: true,\n                formId: true,\n                subjectId: true,\n                published: true\n            }\n        });\n        const topics = JSON.parse(JSON.stringify(topicsFromServer));\n        res.status(200).json(topics);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXhhbVR5cGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBRTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxTQUFTLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBQ3RDLElBQUlDLGNBQWMsR0FBR0MsUUFBUSxDQUFDSixNQUFNLENBQUM7SUFDckMsSUFBSUssaUJBQWlCLEdBQUdELFFBQVEsQ0FBQ0gsU0FBUyxDQUFDO0lBQzNDLElBQUk7UUFDSCxNQUFNSyxnQkFBZ0IsR0FBRyxNQUFNVixnRUFBd0IsQ0FBQztZQUN2RGEsS0FBSyxFQUFFO2dCQUNOUixTQUFTLEVBQUVJLGlCQUFpQjtnQkFDNUJMLE1BQU0sRUFBRUcsY0FBYzthQUN0QjtZQUNETyxNQUFNLEVBQUU7Z0JBQ1BDLEVBQUUsRUFBRSxJQUFJO2dCQUNSQyxJQUFJLEVBQUUsSUFBSTtnQkFDVkMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCYixNQUFNLEVBQUUsSUFBSTtnQkFDWkMsU0FBUyxFQUFFLElBQUk7Z0JBQ2ZhLFNBQVMsRUFBRSxJQUFJO2FBQ2Y7U0FDRCxDQUFDO1FBQ0YsTUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNaLGdCQUFnQixDQUFDLENBQUM7UUFDM0RQLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxNQUFNLENBQUMsQ0FBQztLQUM3QixDQUFDLE9BQU9NLEtBQUssRUFBRSxFQUNmLFFBQVM7UUFDVCxNQUFNekIsMERBQWtCLEVBQUUsQ0FBQztLQUMzQjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvZXhhbVR5cGUudHN4PzU3NmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG5cdHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcblx0cmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcblx0Y29uc3QgeyBmb3JtSWQsIHN1YmplY3RJZCB9ID0gcmVxLmJvZHk7XHJcblx0bGV0IGZvcm1JZHJlY2VpdmVkID0gcGFyc2VJbnQoZm9ybUlkKTtcclxuXHRsZXQgc3ViamVjdElkcmVjZWl2ZWQgPSBwYXJzZUludChzdWJqZWN0SWQpO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB0b3BpY3NGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLmV4YW1UeXBlLmZpbmRNYW55KHtcclxuXHRcdFx0d2hlcmU6IHtcclxuXHRcdFx0XHRzdWJqZWN0SWQ6IHN1YmplY3RJZHJlY2VpdmVkLFxyXG5cdFx0XHRcdGZvcm1JZDogZm9ybUlkcmVjZWl2ZWQsXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRcdG5hbWU6IHRydWUsXHJcblx0XHRcdFx0ZGVmaW5pdGlvbjogdHJ1ZSxcclxuXHRcdFx0XHRmb3JtSWQ6IHRydWUsXHJcblx0XHRcdFx0c3ViamVjdElkOiB0cnVlLFxyXG5cdFx0XHRcdHB1Ymxpc2hlZDogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgdG9waWNzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0b3BpY3NGcm9tU2VydmVyKSk7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih0b3BpY3MpO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZvcm1JZCIsInN1YmplY3RJZCIsImJvZHkiLCJmb3JtSWRyZWNlaXZlZCIsInBhcnNlSW50Iiwic3ViamVjdElkcmVjZWl2ZWQiLCJ0b3BpY3NGcm9tU2VydmVyIiwiZXhhbVR5cGUiLCJmaW5kTWFueSIsIndoZXJlIiwic2VsZWN0IiwiaWQiLCJuYW1lIiwiZGVmaW5pdGlvbiIsInB1Ymxpc2hlZCIsInRvcGljcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/examType.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/examType.tsx"));
module.exports = __webpack_exports__;

})();