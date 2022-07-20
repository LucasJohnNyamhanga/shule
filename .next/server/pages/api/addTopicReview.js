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
exports.id = "pages/api/addTopicReview";
exports.ids = ["pages/api/addTopicReview"];
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

/***/ "(api)/./pages/api/addTopicReview.tsx":
/*!**************************************!*\
  !*** ./pages/api/addTopicReview.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { topicName , topicDefinition , formId , subjectId , userId  } = req.body;\n    let formIdNumber = parseInt(formId);\n    let subjectIdNumber = parseInt(subjectId);\n    let userIdNumber = parseInt(userId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.topicReview.create({\n            data: {\n                topicName,\n                topicDefinition,\n                formId: formIdNumber,\n                subjectId: subjectIdNumber,\n                usersId: userIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Successful added\",\n            type: \"success\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error writting database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkVG9waWNSZXZpZXcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBUTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFBRUMsU0FBUyxHQUFFQyxlQUFlLEdBQUVDLE1BQU0sR0FBRUMsU0FBUyxHQUFFQyxNQUFNLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxJQUFJO0lBQzFFLElBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDTCxNQUFNLENBQUM7SUFDbkMsSUFBSU0sZUFBZSxHQUFHRCxRQUFRLENBQUNKLFNBQVMsQ0FBQztJQUN6QyxJQUFJTSxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDO0lBRW5DLElBQUk7UUFDSCxNQUFNUixpRUFBeUIsQ0FBQztZQUMvQmdCLElBQUksRUFBRTtnQkFDTFosU0FBUztnQkFDVEMsZUFBZTtnQkFDZkMsTUFBTSxFQUFFSSxZQUFZO2dCQUNwQkgsU0FBUyxFQUFFSyxlQUFlO2dCQUMxQkssT0FBTyxFQUFFSixZQUFZO2FBQ3JCO1NBQ0QsQ0FBQyxDQUFDO1FBQ0hWLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0JDLElBQUksRUFBRSxTQUFTO1NBQ2YsQ0FBQyxDQUFDO0tBQ0gsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDZm5CLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSx5QkFBeUI7WUFDbENDLElBQUksRUFBRSxPQUFPO1NBQ2IsQ0FBQyxDQUFDO0tBQ0gsUUFBUztRQUNULE1BQU1yQiwwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9hZGRUb3BpY1Jldmlldy50c3g/ZTFhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxudHlwZSBkYXRhVHlwZSA9IHtcclxuXHR0b3BpY05hbWU6IHN0cmluZztcclxuXHR0b3BpY0RlZmluaXRpb246IHN0cmluZztcclxuXHRmb3JtSWQ6IHN0cmluZztcclxuXHRzdWJqZWN0SWQ6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuXHRjb25zdCB7IHRvcGljTmFtZSwgdG9waWNEZWZpbml0aW9uLCBmb3JtSWQsIHN1YmplY3RJZCwgdXNlcklkIH0gPSByZXEuYm9keTtcclxuXHRsZXQgZm9ybUlkTnVtYmVyID0gcGFyc2VJbnQoZm9ybUlkKTtcclxuXHRsZXQgc3ViamVjdElkTnVtYmVyID0gcGFyc2VJbnQoc3ViamVjdElkKTtcclxuXHRsZXQgdXNlcklkTnVtYmVyID0gcGFyc2VJbnQodXNlcklkKTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IHByaXNtYS50b3BpY1Jldmlldy5jcmVhdGUoe1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dG9waWNOYW1lLFxyXG5cdFx0XHRcdHRvcGljRGVmaW5pdGlvbixcclxuXHRcdFx0XHRmb3JtSWQ6IGZvcm1JZE51bWJlcixcclxuXHRcdFx0XHRzdWJqZWN0SWQ6IHN1YmplY3RJZE51bWJlcixcclxuXHRcdFx0XHR1c2Vyc0lkOiB1c2VySWROdW1iZXIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ1N1Y2Nlc3NmdWwgYWRkZWQnLFxyXG5cdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG5cdFx0XHRtZXNzYWdlOiAnRXJyb3Igd3JpdHRpbmcgZGF0YWJhc2UnLFxyXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0fSk7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInRvcGljTmFtZSIsInRvcGljRGVmaW5pdGlvbiIsImZvcm1JZCIsInN1YmplY3RJZCIsInVzZXJJZCIsImJvZHkiLCJmb3JtSWROdW1iZXIiLCJwYXJzZUludCIsInN1YmplY3RJZE51bWJlciIsInVzZXJJZE51bWJlciIsInRvcGljUmV2aWV3IiwiY3JlYXRlIiwiZGF0YSIsInVzZXJzSWQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInR5cGUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/addTopicReview.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addTopicReview.tsx"));
module.exports = __webpack_exports__;

})();