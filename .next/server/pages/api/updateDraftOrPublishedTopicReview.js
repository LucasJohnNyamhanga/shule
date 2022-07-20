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
exports.id = "pages/api/updateDraftOrPublishedTopicReview";
exports.ids = ["pages/api/updateDraftOrPublishedTopicReview"];
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

/***/ "(api)/./pages/api/updateDraftOrPublishedTopicReview.tsx":
/*!*********************************************************!*\
  !*** ./pages/api/updateDraftOrPublishedTopicReview.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { id , published  } = req.body;\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.topicReview.update({\n            where: {\n                id: parseInt(id)\n            },\n            data: {\n                published: published\n            }\n        });\n        res.status(200).json({\n            message: \"Update successful\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error, Could not update.\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlRHJhZnRPclB1Ymxpc2hlZFRvcGljUmV2aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV3QztBQU16QixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBOEIsRUFDOUI7SUFDQSxNQUFNLEVBQUVDLEVBQUUsR0FBRUMsU0FBUyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUdoQyxJQUFJO1FBQ0YsTUFBTU4saUVBQXlCLENBQUM7WUFDeEJTLEtBQUssRUFBRTtnQkFBRUwsRUFBRSxFQUFHTSxRQUFRLENBQUNOLEVBQUUsQ0FBQzthQUFFO1lBQzVCTyxJQUFJLEVBQUU7Z0JBQ0pOLFNBQVMsRUFBQ0EsU0FBUzthQUNwQjtTQUNKLENBQUM7UUFDTkYsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUMsbUJBQW1CO1NBQUMsQ0FBQyxDQUFDO0tBQ3JELENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ2RaLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFDLDBCQUEwQjtTQUFDLENBQUMsQ0FBQztLQUM1RCxRQUFTO1FBQ1IsTUFBTWQsMERBQWtCLEVBQUUsQ0FBQztLQUM1QjtDQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvdXBkYXRlRHJhZnRPclB1Ymxpc2hlZFRvcGljUmV2aWV3LnRzeD85YjQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSdcclxudHlwZSB1c2VyRGF0YSA9IHtcclxuICBtZXNzYWdlOnN0cmluZyxcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8dXNlckRhdGE+XHJcbikge1xyXG4gIGNvbnN0IHsgaWQsIHB1Ymxpc2hlZCB9ID0gcmVxLmJvZHlcclxuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgcHJpc21hLnRvcGljUmV2aWV3LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgOiBwYXJzZUludChpZCkgfSxcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBwdWJsaXNoZWQ6cHVibGlzaGVkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOlwiVXBkYXRlIHN1Y2Nlc3NmdWxcIn0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lc3NhZ2U6XCJFcnJvciwgQ291bGQgbm90IHVwZGF0ZS5cIn0pO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInB1Ymxpc2hlZCIsImJvZHkiLCJ0b3BpY1JldmlldyIsInVwZGF0ZSIsIndoZXJlIiwicGFyc2VJbnQiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateDraftOrPublishedTopicReview.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateDraftOrPublishedTopicReview.tsx"));
module.exports = __webpack_exports__;

})();