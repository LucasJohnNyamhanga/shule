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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { topicName , topicDefinition , formId , subjectId , userId  } = req.body;\n    let formIdNumber = parseInt(formId);\n    let subjectIdNumber = parseInt(subjectId);\n    let userIdNumber = parseInt(userId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.topic.create({\n            data: {\n                topicName,\n                topicDefinition,\n                formId: formIdNumber,\n                subjectId: subjectIdNumber,\n                usersId: userIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Successful added\",\n            type: \"success\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error writting database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkVG9waWMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBUTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFBRUMsU0FBUyxHQUFFQyxlQUFlLEdBQUVDLE1BQU0sR0FBRUMsU0FBUyxHQUFFQyxNQUFNLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxJQUFJO0lBQzFFLElBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDTCxNQUFNLENBQUM7SUFDbkMsSUFBSU0sZUFBZSxHQUFHRCxRQUFRLENBQUNKLFNBQVMsQ0FBQztJQUN6QyxJQUFJTSxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDO0lBQ25DLElBQUk7UUFDSCxNQUFNUiwyREFBbUIsQ0FBQztZQUN6QmdCLElBQUksRUFBRTtnQkFDTFosU0FBUztnQkFDVEMsZUFBZTtnQkFDZkMsTUFBTSxFQUFFSSxZQUFZO2dCQUNwQkgsU0FBUyxFQUFFSyxlQUFlO2dCQUMxQkssT0FBTyxFQUFFSixZQUFZO2FBQ3JCO1NBQ0QsQ0FBQyxDQUFDO1FBQ0hWLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0JDLElBQUksRUFBRSxTQUFTO1NBQ2YsQ0FBQyxDQUFDO0tBQ0gsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDZm5CLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSx5QkFBeUI7WUFDbENDLElBQUksRUFBRSxPQUFPO1NBQ2IsQ0FBQyxDQUFDO0tBQ0gsUUFBUztRQUNULE1BQU1yQiwwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9hZGRUb3BpYy50c3g/YTQ3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxudHlwZSBkYXRhVHlwZSA9IHtcclxuXHR0b3BpY05hbWU6IHN0cmluZztcclxuXHR0b3BpY0RlZmluaXRpb246IHN0cmluZztcclxuXHRmb3JtSWQ6IHN0cmluZztcclxuXHRzdWJqZWN0SWQ6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuXHRjb25zdCB7IHRvcGljTmFtZSwgdG9waWNEZWZpbml0aW9uLCBmb3JtSWQsIHN1YmplY3RJZCwgdXNlcklkIH0gPSByZXEuYm9keTtcclxuXHRsZXQgZm9ybUlkTnVtYmVyID0gcGFyc2VJbnQoZm9ybUlkKTtcclxuXHRsZXQgc3ViamVjdElkTnVtYmVyID0gcGFyc2VJbnQoc3ViamVjdElkKTtcclxuXHRsZXQgdXNlcklkTnVtYmVyID0gcGFyc2VJbnQodXNlcklkKTtcclxuXHR0cnkge1xyXG5cdFx0YXdhaXQgcHJpc21hLnRvcGljLmNyZWF0ZSh7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0b3BpY05hbWUsXHJcblx0XHRcdFx0dG9waWNEZWZpbml0aW9uLFxyXG5cdFx0XHRcdGZvcm1JZDogZm9ybUlkTnVtYmVyLFxyXG5cdFx0XHRcdHN1YmplY3RJZDogc3ViamVjdElkTnVtYmVyLFxyXG5cdFx0XHRcdHVzZXJzSWQ6IHVzZXJJZE51bWJlcixcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG5cdFx0XHRtZXNzYWdlOiAnU3VjY2Vzc2Z1bCBhZGRlZCcsXHJcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcblx0XHRcdG1lc3NhZ2U6ICdFcnJvciB3cml0dGluZyBkYXRhYmFzZScsXHJcblx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHR9KTtcclxuXHR9IGZpbmFsbHkge1xyXG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9waWNOYW1lIiwidG9waWNEZWZpbml0aW9uIiwiZm9ybUlkIiwic3ViamVjdElkIiwidXNlcklkIiwiYm9keSIsImZvcm1JZE51bWJlciIsInBhcnNlSW50Iiwic3ViamVjdElkTnVtYmVyIiwidXNlcklkTnVtYmVyIiwidG9waWMiLCJjcmVhdGUiLCJkYXRhIiwidXNlcnNJZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidHlwZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addTopic.tsx\n");

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