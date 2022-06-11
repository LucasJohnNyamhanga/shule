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
exports.id = "pages/api/updateReference";
exports.ids = ["pages/api/updateReference"];
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

/***/ "(api)/./pages/api/updateReference.tsx":
/*!***************************************!*\
  !*** ./pages/api/updateReference.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { id , name , description , data , formReference , subjectId , isPdf  } = req.body;\n    console.log(data);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.reference.update({\n            where: {\n                id: parseInt(id)\n            },\n            data: {\n                name,\n                description,\n                data,\n                formReference: {\n                    set: formReference\n                },\n                subjectId,\n                isPdf: isPdf == \"True\" ? true : false\n            }\n        });\n        res.status(200).json({\n            message: \"Update successful\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(200).json({\n            message: \"Error, Could not update.\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlUmVmZXJlbmNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQU0xQixlQUFlQyxPQUFPLENBQ3BDQyxHQUFtQixFQUNuQkMsR0FBOEIsRUFDN0I7SUFDRCxNQUFNLEVBQUVDLEVBQUUsR0FBRUMsSUFBSSxHQUFFQyxXQUFXLEdBQUVDLElBQUksR0FBRUMsYUFBYSxHQUFFQyxTQUFTLEdBQUVDLEtBQUssR0FBRSxHQUNyRVIsR0FBRyxDQUFDUyxJQUFJO0lBRVRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixJQUFJLENBQUMsQ0FBQztJQUVsQixJQUFJO1FBQ0gsTUFBTVAsK0RBQXVCLENBQUM7WUFDN0JnQixLQUFLLEVBQUU7Z0JBQUVaLEVBQUUsRUFBRWEsUUFBUSxDQUFDYixFQUFFLENBQUM7YUFBRTtZQUMzQkcsSUFBSSxFQUFFO2dCQUNMRixJQUFJO2dCQUNKQyxXQUFXO2dCQUNYQyxJQUFJO2dCQUNKQyxhQUFhLEVBQUU7b0JBQ2RVLEdBQUcsRUFBRVYsYUFBYTtpQkFDbEI7Z0JBQ0RDLFNBQVM7Z0JBQ1RDLEtBQUssRUFBRUEsS0FBSyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSzthQUNyQztTQUNELENBQUMsQ0FBQztRQUNIUCxHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsbUJBQW1CO1lBQUVDLElBQUksRUFBRSxTQUFTO1NBQUUsQ0FBQyxDQUFDO0tBQ3hFLENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ2ZYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxLQUFLLENBQUMsQ0FBQztRQUNuQnBCLEdBQUcsQ0FDRGdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSwwQkFBMEI7WUFBRUMsSUFBSSxFQUFFLE9BQU87U0FBRSxDQUFDLENBQUM7S0FDL0QsUUFBUztRQUNULE1BQU10QiwwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS91cGRhdGVSZWZlcmVuY2UudHN4Pzg5NWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XHJcbnR5cGUgdXNlckRhdGEgPSB7XHJcblx0bWVzc2FnZTogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZTx1c2VyRGF0YT5cclxuKSB7XHJcblx0Y29uc3QgeyBpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGEsIGZvcm1SZWZlcmVuY2UsIHN1YmplY3RJZCwgaXNQZGYgfSA9XHJcblx0XHRyZXEuYm9keTtcclxuXHJcblx0Y29uc29sZS5sb2coZGF0YSk7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBwcmlzbWEucmVmZXJlbmNlLnVwZGF0ZSh7XHJcblx0XHRcdHdoZXJlOiB7IGlkOiBwYXJzZUludChpZCkgfSxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0ZGF0YSxcclxuXHRcdFx0XHRmb3JtUmVmZXJlbmNlOiB7XHJcblx0XHRcdFx0XHRzZXQ6IGZvcm1SZWZlcmVuY2UsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdWJqZWN0SWQsXHJcblx0XHRcdFx0aXNQZGY6IGlzUGRmID09ICdUcnVlJyA/IHRydWUgOiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnVXBkYXRlIHN1Y2Nlc3NmdWwnLCB0eXBlOiAnc3VjY2VzcycgfSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdHJlc1xyXG5cdFx0XHQuc3RhdHVzKDIwMClcclxuXHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnRXJyb3IsIENvdWxkIG5vdCB1cGRhdGUuJywgdHlwZTogJ2Vycm9yJyB9KTtcclxuXHR9IGZpbmFsbHkge1xyXG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJkYXRhIiwiZm9ybVJlZmVyZW5jZSIsInN1YmplY3RJZCIsImlzUGRmIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJyZWZlcmVuY2UiLCJ1cGRhdGUiLCJ3aGVyZSIsInBhcnNlSW50Iiwic2V0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateReference.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateReference.tsx"));
module.exports = __webpack_exports__;

})();