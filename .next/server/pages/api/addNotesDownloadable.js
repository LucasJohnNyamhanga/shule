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
exports.id = "pages/api/addNotesDownloadable";
exports.ids = ["pages/api/addNotesDownloadable"];
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

/***/ "(api)/./pages/api/addNotesDownloadable.tsx":
/*!********************************************!*\
  !*** ./pages/api/addNotesDownloadable.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { name , link , fileExtension , subjectId , formId  } = req.body;\n    let formIdNumber = parseInt(formId);\n    let subjectIdNumber = parseInt(subjectId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.notesDownloadable.create({\n            data: {\n                name,\n                subjectId: subjectIdNumber,\n                formId: formIdNumber,\n                fileExtension,\n                link\n            }\n        });\n        res.status(200).json({\n            message: \"Downloadable Successful Created.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n        console.log(error);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkTm90ZXNEb3dubG9hZGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBUTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxJQUFJLEdBQUVDLGFBQWEsR0FBRUMsU0FBUyxHQUFFQyxNQUFNLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxJQUFJO0lBQ2pFLElBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUM7SUFDbkMsSUFBSUksZUFBZSxHQUFHRCxRQUFRLENBQUNKLFNBQVMsQ0FBQztJQUV6QyxJQUFJO1FBQ0gsTUFBTVAsdUVBQStCLENBQUM7WUFDckNlLElBQUksRUFBRTtnQkFDTFgsSUFBSTtnQkFDSkcsU0FBUyxFQUFFSyxlQUFlO2dCQUMxQkosTUFBTSxFQUFFRSxZQUFZO2dCQUNwQkosYUFBYTtnQkFDYkQsSUFBSTthQUNKO1NBQ0QsQ0FBQyxDQUFDO1FBQ0hGLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSxrQ0FBa0M7WUFDM0NDLElBQUksRUFBRSxTQUFTO1NBQ2YsQ0FBQyxDQUFDO0tBQ0gsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDZmpCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSw0QkFBNEI7WUFDckNDLElBQUksRUFBRSxPQUFPO1NBQ2IsQ0FBQyxDQUFDO1FBQ0hFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztLQUNuQixRQUFTO1FBQ1QsTUFBTXBCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2FkZE5vdGVzRG93bmxvYWRhYmxlLnRzeD9jYTlmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG50eXBlIGRhdGFUeXBlID0ge1xyXG5cdGZvcm1JZDogc3RyaW5nO1xyXG5cdHN1YmplY3RJZDogc3RyaW5nO1xyXG5cdHRvcGljSWQ6IHN0cmluZztcclxuXHRjb250ZW50OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG5cdHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcblx0cmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcblx0Y29uc3QgeyBuYW1lLCBsaW5rLCBmaWxlRXh0ZW5zaW9uLCBzdWJqZWN0SWQsIGZvcm1JZCB9ID0gcmVxLmJvZHk7XHJcblx0bGV0IGZvcm1JZE51bWJlciA9IHBhcnNlSW50KGZvcm1JZCk7XHJcblx0bGV0IHN1YmplY3RJZE51bWJlciA9IHBhcnNlSW50KHN1YmplY3RJZCk7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBwcmlzbWEubm90ZXNEb3dubG9hZGFibGUuY3JlYXRlKHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0c3ViamVjdElkOiBzdWJqZWN0SWROdW1iZXIsXHJcblx0XHRcdFx0Zm9ybUlkOiBmb3JtSWROdW1iZXIsXHJcblx0XHRcdFx0ZmlsZUV4dGVuc2lvbixcclxuXHRcdFx0XHRsaW5rLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcblx0XHRcdG1lc3NhZ2U6ICdEb3dubG9hZGFibGUgU3VjY2Vzc2Z1bCBDcmVhdGVkLicsXHJcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcblx0XHRcdG1lc3NhZ2U6ICdFcnJvciB3cml0dGluZyB0byBkYXRhYmFzZScsXHJcblx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHR9IGZpbmFsbHkge1xyXG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibmFtZSIsImxpbmsiLCJmaWxlRXh0ZW5zaW9uIiwic3ViamVjdElkIiwiZm9ybUlkIiwiYm9keSIsImZvcm1JZE51bWJlciIsInBhcnNlSW50Iiwic3ViamVjdElkTnVtYmVyIiwibm90ZXNEb3dubG9hZGFibGUiLCJjcmVhdGUiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addNotesDownloadable.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addNotesDownloadable.tsx"));
module.exports = __webpack_exports__;

})();