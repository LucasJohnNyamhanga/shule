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
exports.id = "pages/api/addSubjectReference";
exports.ids = ["pages/api/addSubjectReference"];
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

/***/ "(api)/./pages/api/addSubjectReference.tsx":
/*!*******************************************!*\
  !*** ./pages/api/addSubjectReference.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { subjectName , subjectDefinition , imageLocation , forms , userId  } = req.body;\n    let userIdNumber = parseInt(userId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.subjectReference.create({\n            data: {\n                subjectName,\n                subjectDefinition,\n                imageLocation,\n                forms: {\n                    connect: forms\n                },\n                usersId: userIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Subject Successful added.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(\"Majanga : \" + error);\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkU3ViamVjdFJlZmVyZW5jZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUM7QUFZMUIsZUFBZUMsT0FBTyxDQUNwQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ25CO0lBQ0QsTUFBTSxFQUFFQyxXQUFXLEdBQUVDLGlCQUFpQixHQUFFQyxhQUFhLEdBQUVDLEtBQUssR0FBRUMsTUFBTSxHQUFFLEdBQ3JFTixHQUFHLENBQUNPLElBQUk7SUFDVCxJQUFJQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDO0lBRW5DLElBQUk7UUFDSCxNQUFNUixzRUFBOEIsQ0FBQztZQUNwQ2MsSUFBSSxFQUFFO2dCQUNMVixXQUFXO2dCQUNYQyxpQkFBaUI7Z0JBQ2pCQyxhQUFhO2dCQUNiQyxLQUFLLEVBQUU7b0JBQ05RLE9BQU8sRUFBRVIsS0FBSztpQkFDZDtnQkFDRFMsT0FBTyxFQUFFTixZQUFZO2FBQ3JCO1NBQ0QsQ0FBQyxDQUFDO1FBQ0hQLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSwyQkFBMkI7WUFDcENDLElBQUksRUFBRSxTQUFTO1NBQ2YsQ0FBQyxDQUFDO0tBQ0gsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxHQUFHRixLQUFLLENBQUMsQ0FBQztRQUNsQ2xCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSw0QkFBNEI7WUFDckNDLElBQUksRUFBRSxPQUFPO1NBQ2IsQ0FBQyxDQUFDO0tBQ0gsUUFBUztRQUNULE1BQU1wQiwwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9hZGRTdWJqZWN0UmVmZXJlbmNlLnRzeD82NzdkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG50eXBlIGRhdGFUeXBlID0ge1xyXG5cdHN1YmplY3ROYW1lOiBzdHJpbmc7XHJcblx0c3ViamVjdERlZmluaXRpb246IHN0cmluZztcclxuXHRpbWFnZUxvY2F0aW9uOiBzdHJpbmc7XHJcblx0Zm9ybXM6IFtcclxuXHRcdHtcclxuXHRcdFx0aWQ6IG51bWJlcjtcclxuXHRcdH1cclxuXHRdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHsgc3ViamVjdE5hbWUsIHN1YmplY3REZWZpbml0aW9uLCBpbWFnZUxvY2F0aW9uLCBmb3JtcywgdXNlcklkIH0gPVxyXG5cdFx0cmVxLmJvZHk7XHJcblx0bGV0IHVzZXJJZE51bWJlciA9IHBhcnNlSW50KHVzZXJJZCk7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuc3ViamVjdFJlZmVyZW5jZS5jcmVhdGUoe1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0c3ViamVjdE5hbWUsXHJcblx0XHRcdFx0c3ViamVjdERlZmluaXRpb24sXHJcblx0XHRcdFx0aW1hZ2VMb2NhdGlvbixcclxuXHRcdFx0XHRmb3Jtczoge1xyXG5cdFx0XHRcdFx0Y29ubmVjdDogZm9ybXMsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR1c2Vyc0lkOiB1c2VySWROdW1iZXIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ1N1YmplY3QgU3VjY2Vzc2Z1bCBhZGRlZC4nLFxyXG5cdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5sb2coJ01hamFuZ2EgOiAnICsgZXJyb3IpO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG5cdFx0XHRtZXNzYWdlOiAnRXJyb3Igd3JpdHRpbmcgdG8gZGF0YWJhc2UnLFxyXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0fSk7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN1YmplY3ROYW1lIiwic3ViamVjdERlZmluaXRpb24iLCJpbWFnZUxvY2F0aW9uIiwiZm9ybXMiLCJ1c2VySWQiLCJib2R5IiwidXNlcklkTnVtYmVyIiwicGFyc2VJbnQiLCJzdWJqZWN0UmVmZXJlbmNlIiwiY3JlYXRlIiwiZGF0YSIsImNvbm5lY3QiLCJ1c2Vyc0lkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addSubjectReference.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addSubjectReference.tsx"));
module.exports = __webpack_exports__;

})();