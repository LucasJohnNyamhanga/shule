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
exports.id = "pages/api/addReference";
exports.ids = ["pages/api/addReference"];
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

/***/ "(api)/./pages/api/addReference.tsx":
/*!************************************!*\
  !*** ./pages/api/addReference.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { name , description , data , formReference , subjectId , isPdf , userId  } = req.body;\n    let userIdNumber = parseInt(userId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.reference.create({\n            data: {\n                name,\n                description,\n                data,\n                formReference: {\n                    connect: formReference\n                },\n                subjectId,\n                isPdf: isPdf == \"True\" ? true : false,\n                usersId: userIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Subject Successful added.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(\"Majanga : \" + error);\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkUmVmZXJlbmNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQVkxQixlQUFlQyxPQUFPLENBQ3BDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDbkI7SUFDRCxNQUFNLEVBQUVDLElBQUksR0FBRUMsV0FBVyxHQUFFQyxJQUFJLEdBQUVDLGFBQWEsR0FBRUMsU0FBUyxHQUFFQyxLQUFLLEdBQUVDLE1BQU0sR0FBRSxHQUN6RVIsR0FBRyxDQUFDUyxJQUFJO0lBQ1QsSUFBSUMsWUFBWSxHQUFHQyxRQUFRLENBQUNILE1BQU0sQ0FBQztJQUVuQyxJQUFJO1FBQ0gsTUFBTVYsK0RBQXVCLENBQUM7WUFDN0JNLElBQUksRUFBRTtnQkFDTEYsSUFBSTtnQkFDSkMsV0FBVztnQkFDWEMsSUFBSTtnQkFDSkMsYUFBYSxFQUFFO29CQUNkUyxPQUFPLEVBQUVULGFBQWE7aUJBQ3RCO2dCQUNEQyxTQUFTO2dCQUNUQyxLQUFLLEVBQUVBLEtBQUssSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7Z0JBQ3JDUSxPQUFPLEVBQUVMLFlBQVk7YUFDckI7U0FDRCxDQUFDLENBQUM7UUFDSFQsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQ0MsSUFBSSxFQUFFLFNBQVM7U0FDZixDQUFDLENBQUM7S0FDSCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEdBQUdGLEtBQUssQ0FBQyxDQUFDO1FBQ2xDbkIsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLDRCQUE0QjtZQUNyQ0MsSUFBSSxFQUFFLE9BQU87U0FDYixDQUFDLENBQUM7S0FDSCxRQUFTO1FBQ1QsTUFBTXJCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2FkZFJlZmVyZW5jZS50c3g/ZjA2MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxudHlwZSBkYXRhVHlwZSA9IHtcclxuXHRzdWJqZWN0TmFtZTogc3RyaW5nO1xyXG5cdHN1YmplY3REZWZpbml0aW9uOiBzdHJpbmc7XHJcblx0aW1hZ2VMb2NhdGlvbjogc3RyaW5nO1xyXG5cdGZvcm1zOiBbXHJcblx0XHR7XHJcblx0XHRcdGlkOiBudW1iZXI7XHJcblx0XHR9XHJcblx0XTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuXHRjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRhLCBmb3JtUmVmZXJlbmNlLCBzdWJqZWN0SWQsIGlzUGRmLCB1c2VySWQgfSA9XHJcblx0XHRyZXEuYm9keTtcclxuXHRsZXQgdXNlcklkTnVtYmVyID0gcGFyc2VJbnQodXNlcklkKTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IHByaXNtYS5yZWZlcmVuY2UuY3JlYXRlKHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0ZGF0YSxcclxuXHRcdFx0XHRmb3JtUmVmZXJlbmNlOiB7XHJcblx0XHRcdFx0XHRjb25uZWN0OiBmb3JtUmVmZXJlbmNlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3ViamVjdElkLFxyXG5cdFx0XHRcdGlzUGRmOiBpc1BkZiA9PSAnVHJ1ZScgPyB0cnVlIDogZmFsc2UsXHJcblx0XHRcdFx0dXNlcnNJZDogdXNlcklkTnVtYmVyLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcblx0XHRcdG1lc3NhZ2U6ICdTdWJqZWN0IFN1Y2Nlc3NmdWwgYWRkZWQuJyxcclxuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdNYWphbmdhIDogJyArIGVycm9yKTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ0Vycm9yIHdyaXR0aW5nIHRvIGRhdGFiYXNlJyxcclxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdH0pO1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJkYXRhIiwiZm9ybVJlZmVyZW5jZSIsInN1YmplY3RJZCIsImlzUGRmIiwidXNlcklkIiwiYm9keSIsInVzZXJJZE51bWJlciIsInBhcnNlSW50IiwicmVmZXJlbmNlIiwiY3JlYXRlIiwiY29ubmVjdCIsInVzZXJzSWQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInR5cGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addReference.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addReference.tsx"));
module.exports = __webpack_exports__;

})();