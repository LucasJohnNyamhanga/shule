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
exports.id = "pages/api/topicsVerifyReview";
exports.ids = ["pages/api/topicsVerifyReview"];
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

/***/ "(api)/./pages/api/topicsVerifyReview.tsx":
/*!******************************************!*\
  !*** ./pages/api/topicsVerifyReview.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { formId , subjectId , topicName  } = req.body;\n    let formIdreceived = parseInt(formId);\n    let subjectIdreceived = parseInt(subjectId);\n    try {\n        const topicsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.topicReview.findMany({\n            where: {\n                subjectId: subjectIdreceived,\n                formId: formIdreceived,\n                topicName\n            },\n            select: {\n                id: true,\n                topicName: true,\n                topicDefinition: true,\n                formId: true,\n                subjectId: true,\n                published: true\n            }\n        });\n        const topics = JSON.parse(JSON.stringify(topicsFromServer));\n        res.status(200).json(topics);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9waWNzVmVyaWZ5UmV2aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV3QztBQUV6QixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFFQSxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsU0FBUyxHQUFHQyxTQUFTLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxJQUFJO0lBQ2xELElBQUlDLGNBQWMsR0FBR0MsUUFBUSxDQUFDTCxNQUFNLENBQUM7SUFDckMsSUFBSU0saUJBQWlCLEdBQUdELFFBQVEsQ0FBQ0osU0FBUyxDQUFDO0lBQzdDLElBQUk7UUFDRixNQUFNTSxnQkFBZ0IsR0FBRyxNQUFNWCxtRUFBMkIsQ0FBQztZQUN6RGMsS0FBSyxFQUFFO2dCQUNMVCxTQUFTLEVBQUVLLGlCQUFpQjtnQkFDNUJOLE1BQU0sRUFBRUksY0FBYztnQkFDdEJGLFNBQVM7YUFDVjtZQUNDUyxNQUFNLEVBQUU7Z0JBQ05DLEVBQUUsRUFBQyxJQUFJO2dCQUNQVixTQUFTLEVBQUUsSUFBSTtnQkFDZlcsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCYixNQUFNLEVBQUUsSUFBSTtnQkFDWkMsU0FBUyxFQUFFLElBQUk7Z0JBQ2ZhLFNBQVMsRUFBQyxJQUFJO2FBQ2Y7U0FDRixDQUFDO1FBQ0YsTUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNYLGdCQUFnQixDQUFDLENBQUM7UUFDM0RSLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxNQUFNLENBQUMsQ0FBQztLQUM1QixDQUFDLE9BQU9NLEtBQUssRUFBRSxFQUVmLFFBQVM7UUFDVixNQUFNekIsMERBQWtCLEVBQUUsQ0FBQztLQUM1QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvdG9waWNzVmVyaWZ5UmV2aWV3LnRzeD9jMGQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuXHJcbiAgY29uc3QgeyBmb3JtSWQsIHN1YmplY3RJZCwgIHRvcGljTmFtZSB9ID0gcmVxLmJvZHlcclxuICBsZXQgZm9ybUlkcmVjZWl2ZWQgPSBwYXJzZUludChmb3JtSWQpO1xyXG4gIGxldCBzdWJqZWN0SWRyZWNlaXZlZCA9IHBhcnNlSW50KHN1YmplY3RJZCk7XHJcbnRyeSB7XHJcbiAgY29uc3QgdG9waWNzRnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS50b3BpY1Jldmlldy5maW5kTWFueSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBzdWJqZWN0SWQ6IHN1YmplY3RJZHJlY2VpdmVkLFxyXG4gICAgICBmb3JtSWQ6IGZvcm1JZHJlY2VpdmVkLFxyXG4gICAgICB0b3BpY05hbWUsXHJcbiAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDp0cnVlLFxyXG4gICAgICAgIHRvcGljTmFtZTogdHJ1ZSxcclxuICAgICAgICB0b3BpY0RlZmluaXRpb246IHRydWUsXHJcbiAgICAgICAgZm9ybUlkOiB0cnVlLFxyXG4gICAgICAgIHN1YmplY3RJZDogdHJ1ZSxcclxuICAgICAgICBwdWJsaXNoZWQ6dHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHRvcGljcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9waWNzRnJvbVNlcnZlcikpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odG9waWNzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZm9ybUlkIiwic3ViamVjdElkIiwidG9waWNOYW1lIiwiYm9keSIsImZvcm1JZHJlY2VpdmVkIiwicGFyc2VJbnQiLCJzdWJqZWN0SWRyZWNlaXZlZCIsInRvcGljc0Zyb21TZXJ2ZXIiLCJ0b3BpY1JldmlldyIsImZpbmRNYW55Iiwid2hlcmUiLCJzZWxlY3QiLCJpZCIsInRvcGljRGVmaW5pdGlvbiIsInB1Ymxpc2hlZCIsInRvcGljcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/topicsVerifyReview.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/topicsVerifyReview.tsx"));
module.exports = __webpack_exports__;

})();