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
exports.id = "pages/api/addReview";
exports.ids = ["pages/api/addReview"];
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

/***/ "(api)/./pages/api/addReview.tsx":
/*!*********************************!*\
  !*** ./pages/api/addReview.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { name , topicId , formId , subjectId , userId  } = req.body;\n    let formIdNumber = parseInt(formId);\n    let subjectIdNumber = parseInt(subjectId);\n    let userIdNumber = parseInt(userId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.review.create({\n            data: {\n                name,\n                topicId,\n                formId: formIdNumber,\n                subjectId: subjectIdNumber,\n                usersId: userIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Successful added\",\n            type: \"success\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error writting database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkUmV2aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQVExQixlQUFlQyxPQUFPLENBQ3BDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDbkI7SUFDRCxNQUFNLEVBQUVDLElBQUksR0FBRUMsT0FBTyxHQUFFQyxNQUFNLEdBQUVDLFNBQVMsR0FBRUMsTUFBTSxHQUFFLEdBQUdOLEdBQUcsQ0FBQ08sSUFBSTtJQUM3RCxJQUFJQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDO0lBQ25DLElBQUlNLGVBQWUsR0FBR0QsUUFBUSxDQUFDSixTQUFTLENBQUM7SUFDekMsSUFBSU0sWUFBWSxHQUFHRixRQUFRLENBQUNILE1BQU0sQ0FBQztJQUVuQyxJQUFJO1FBQ0gsTUFBTVIsNERBQW9CLENBQUM7WUFDMUJnQixJQUFJLEVBQUU7Z0JBQ0xaLElBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLE1BQU0sRUFBRUksWUFBWTtnQkFDcEJILFNBQVMsRUFBRUssZUFBZTtnQkFDMUJLLE9BQU8sRUFBRUosWUFBWTthQUNyQjtTQUNELENBQUMsQ0FBQztRQUNIVixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCQyxPQUFPLEVBQUUsa0JBQWtCO1lBQzNCQyxJQUFJLEVBQUUsU0FBUztTQUNmLENBQUMsQ0FBQztLQUNILENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ2ZuQixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCQyxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDQyxJQUFJLEVBQUUsT0FBTztTQUNiLENBQUMsQ0FBQztLQUNILFFBQVM7UUFDVCxNQUFNckIsMERBQWtCLEVBQUUsQ0FBQztLQUMzQjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvYWRkUmV2aWV3LnRzeD84MmFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG50eXBlIGRhdGFUeXBlID0ge1xyXG5cdHRvcGljTmFtZTogc3RyaW5nO1xyXG5cdHRvcGljRGVmaW5pdGlvbjogc3RyaW5nO1xyXG5cdGZvcm1JZDogc3RyaW5nO1xyXG5cdHN1YmplY3RJZDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHsgbmFtZSwgdG9waWNJZCwgZm9ybUlkLCBzdWJqZWN0SWQsIHVzZXJJZCB9ID0gcmVxLmJvZHk7XHJcblx0bGV0IGZvcm1JZE51bWJlciA9IHBhcnNlSW50KGZvcm1JZCk7XHJcblx0bGV0IHN1YmplY3RJZE51bWJlciA9IHBhcnNlSW50KHN1YmplY3RJZCk7XHJcblx0bGV0IHVzZXJJZE51bWJlciA9IHBhcnNlSW50KHVzZXJJZCk7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBwcmlzbWEucmV2aWV3LmNyZWF0ZSh7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdHRvcGljSWQsXHJcblx0XHRcdFx0Zm9ybUlkOiBmb3JtSWROdW1iZXIsXHJcblx0XHRcdFx0c3ViamVjdElkOiBzdWJqZWN0SWROdW1iZXIsXHJcblx0XHRcdFx0dXNlcnNJZDogdXNlcklkTnVtYmVyLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcblx0XHRcdG1lc3NhZ2U6ICdTdWNjZXNzZnVsIGFkZGVkJyxcclxuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ0Vycm9yIHdyaXR0aW5nIGRhdGFiYXNlJyxcclxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdH0pO1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwidG9waWNJZCIsImZvcm1JZCIsInN1YmplY3RJZCIsInVzZXJJZCIsImJvZHkiLCJmb3JtSWROdW1iZXIiLCJwYXJzZUludCIsInN1YmplY3RJZE51bWJlciIsInVzZXJJZE51bWJlciIsInJldmlldyIsImNyZWF0ZSIsImRhdGEiLCJ1c2Vyc0lkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addReview.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addReview.tsx"));
module.exports = __webpack_exports__;

})();