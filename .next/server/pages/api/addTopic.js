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
exports.id = "pages/api/addTopic";
exports.ids = ["pages/api/addTopic"];
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

/***/ "(api)/./pages/api/addTopic.tsx":
/*!********************************!*\
  !*** ./pages/api/addTopic.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { topicName , topicDefinition , formId , subjectId  } = req.body;\n    let formIdNumber = parseInt(formId);\n    let subjectIdNumber = parseInt(subjectId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.topic.create({\n            data: {\n                topicName,\n                topicDefinition,\n                formId: formIdNumber,\n                subjectId: subjectIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Successful added\",\n            type: \"success\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error writting database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkVG9waWMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXdDO0FBUXpCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBQ0MsR0FBb0IsRUFBRTtJQUU1RSxNQUFNLEVBQUVDLFNBQVMsR0FBRUMsZUFBZSxHQUFFQyxNQUFNLEdBQUVDLFNBQVMsR0FBRSxHQUFHTCxHQUFHLENBQUNNLElBQUk7SUFDbEUsSUFBSUMsWUFBWSxHQUFHQyxRQUFRLENBQUNKLE1BQU0sQ0FBQztJQUNuQyxJQUFJSyxlQUFlLEdBQUdELFFBQVEsQ0FBQ0gsU0FBUyxDQUFDO0lBQ3JDLElBQUk7UUFDQSxNQUFNUCwyREFBbUIsQ0FBQztZQUN0QmMsSUFBSSxFQUFFO2dCQUNGVixTQUFTO2dCQUNUQyxlQUFlO2dCQUNmQyxNQUFNLEVBQUNHLFlBQVk7Z0JBQ25CRixTQUFTLEVBQUNJLGVBQWU7YUFDNUI7U0FDSixDQUFDO1FBQ0ZSLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDakJDLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0JDLElBQUksRUFBQyxTQUFTO1NBQ2pCLENBQUM7S0FDTCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNaaEIsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNqQkMsT0FBTyxFQUFFLHlCQUF5QjtZQUNsQ0MsSUFBSSxFQUFDLE9BQU87U0FDZixDQUFDLENBQUM7S0FDTixRQUFTO1FBQ04sTUFBTWxCLDBEQUFrQixFQUFFLENBQUM7S0FDOUI7Q0FDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2FkZFRvcGljLnRzeD9hNDc2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSdcclxudHlwZSBkYXRhVHlwZSA9IHtcclxuICAgIHRvcGljTmFtZTogc3RyaW5nLFxyXG4gICAgdG9waWNEZWZpbml0aW9uOiBzdHJpbmcsXHJcbiAgICBmb3JtSWQ6IHN0cmluZyxcclxuICAgIHN1YmplY3RJZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCxyZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gICAgXHJcbiAgICBjb25zdCB7IHRvcGljTmFtZSwgdG9waWNEZWZpbml0aW9uLCBmb3JtSWQsIHN1YmplY3RJZCB9ID0gcmVxLmJvZHlcclxuICAgIGxldCBmb3JtSWROdW1iZXIgPSBwYXJzZUludChmb3JtSWQpO1xyXG4gICAgbGV0IHN1YmplY3RJZE51bWJlciA9IHBhcnNlSW50KHN1YmplY3RJZCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLnRvcGljLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9waWNOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcGljRGVmaW5pdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBmb3JtSWQ6Zm9ybUlkTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RJZDpzdWJqZWN0SWROdW1iZXIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsIGFkZGVkJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6J3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHdyaXR0aW5nIGRhdGFiYXNlJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6J2Vycm9yJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b3BpY05hbWUiLCJ0b3BpY0RlZmluaXRpb24iLCJmb3JtSWQiLCJzdWJqZWN0SWQiLCJib2R5IiwiZm9ybUlkTnVtYmVyIiwicGFyc2VJbnQiLCJzdWJqZWN0SWROdW1iZXIiLCJ0b3BpYyIsImNyZWF0ZSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInR5cGUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/addTopic.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addTopic.tsx"));
module.exports = __webpack_exports__;

})();