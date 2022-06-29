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
exports.id = "pages/api/addNotes";
exports.ids = ["pages/api/addNotes"];
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

/***/ "(api)/./pages/api/addNotes.tsx":
/*!********************************!*\
  !*** ./pages/api/addNotes.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { topicId , content , formId , subjectId  } = req.body;\n    let formIdNumber = parseInt(formId);\n    let subjectIdNumber = parseInt(subjectId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.note.create({\n            data: {\n                formId,\n                subjectId,\n                topicId,\n                content\n            }\n        });\n        res.status(200).json({\n            message: \"Notes Successful Created.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkTm90ZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXdDO0FBUXpCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBQ0MsR0FBb0IsRUFBRTtJQUU1RSxNQUFNLEVBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxNQUFNLEdBQUVDLFNBQVMsR0FBRSxHQUFHTCxHQUFHLENBQUNNLElBQUk7SUFDeEQsSUFBSUMsWUFBWSxHQUFHQyxRQUFRLENBQUNKLE1BQU0sQ0FBQztJQUNuQyxJQUFJSyxlQUFlLEdBQUdELFFBQVEsQ0FBQ0gsU0FBUyxDQUFDO0lBQ3JDLElBQUk7UUFDQSxNQUFNUCwwREFBa0IsQ0FBQztZQUNyQmMsSUFBSSxFQUFFO2dCQUNGUixNQUFNO2dCQUNOQyxTQUFTO2dCQUNUSCxPQUFPO2dCQUNQQyxPQUFPO2FBQ1Y7U0FDSixDQUFDO1FBQ0ZGLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDakJDLE9BQU8sRUFBRSwyQkFBMkI7WUFDcENDLElBQUksRUFBQyxTQUFTO1NBQ2pCLENBQUM7S0FDTCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNaaEIsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNqQkMsT0FBTyxFQUFFLDRCQUE0QjtZQUNyQ0MsSUFBSSxFQUFDLE9BQU87U0FDZixDQUFDLENBQUM7S0FDTixRQUFTO1FBQ04sTUFBTWxCLDBEQUFrQixFQUFFLENBQUM7S0FDOUI7Q0FDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2FkZE5vdGVzLnRzeD85NzVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSdcclxudHlwZSBkYXRhVHlwZSA9IHtcclxuICAgIGZvcm1JZDogc3RyaW5nLFxyXG4gICAgc3ViamVjdElkOiBzdHJpbmcsXHJcbiAgICB0b3BpY0lkOiBzdHJpbmcsXHJcbiAgICBjb250ZW50OnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QscmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICAgIFxyXG4gICAgY29uc3QgeyB0b3BpY0lkLCBjb250ZW50LCBmb3JtSWQsIHN1YmplY3RJZCB9ID0gcmVxLmJvZHlcclxuICAgIGxldCBmb3JtSWROdW1iZXIgPSBwYXJzZUludChmb3JtSWQpO1xyXG4gICAgbGV0IHN1YmplY3RJZE51bWJlciA9IHBhcnNlSW50KHN1YmplY3RJZCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLm5vdGUuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcGljSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm90ZXMgU3VjY2Vzc2Z1bCBDcmVhdGVkLicsXHJcbiAgICAgICAgICAgICAgICB0eXBlOidzdWNjZXNzJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciB3cml0dGluZyB0byBkYXRhYmFzZScsXHJcbiAgICAgICAgICAgICAgICB0eXBlOidlcnJvcidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9waWNJZCIsImNvbnRlbnQiLCJmb3JtSWQiLCJzdWJqZWN0SWQiLCJib2R5IiwiZm9ybUlkTnVtYmVyIiwicGFyc2VJbnQiLCJzdWJqZWN0SWROdW1iZXIiLCJub3RlIiwiY3JlYXRlIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidHlwZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addNotes.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addNotes.tsx"));
module.exports = __webpack_exports__;

})();