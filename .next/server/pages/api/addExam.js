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
exports.id = "pages/api/addExam";
exports.ids = ["pages/api/addExam"];
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

/***/ "(api)/./pages/api/addExam.tsx":
/*!*******************************!*\
  !*** ./pages/api/addExam.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { examTypeId , exam , description , year , hasAnswers  } = req.body;\n    let hasAnswer = hasAnswers == \"true\" ? true : false;\n    let typeId = parseInt(examTypeId);\n    let yearDone = parseInt(year);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.exam.create({\n            data: {\n                examTypeId: typeId,\n                description,\n                exam,\n                year: yearDone,\n                hasAnswers: hasAnswer\n            }\n        });\n        res.status(200).json({\n            message: \"Notes Successful Created.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkRXhhbS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUM7QUFRMUIsZUFBZUMsT0FBTyxDQUNwQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ25CO0lBQ0QsTUFBTSxFQUFFQyxVQUFVLEdBQUVDLElBQUksR0FBRUMsV0FBVyxHQUFFQyxJQUFJLEdBQUVDLFVBQVUsR0FBRSxHQUFHTixHQUFHLENBQUNPLElBQUk7SUFDcEUsSUFBSUMsU0FBUyxHQUFHRixVQUFVLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLO0lBQ25ELElBQUlHLE1BQU0sR0FBR0MsUUFBUSxDQUFDUixVQUFVLENBQUM7SUFDakMsSUFBSVMsUUFBUSxHQUFHRCxRQUFRLENBQUNMLElBQUksQ0FBQztJQUM3QixJQUFJO1FBQ0gsTUFBTVAsMERBQWtCLENBQUM7WUFDeEJlLElBQUksRUFBRTtnQkFDTFgsVUFBVSxFQUFFTyxNQUFNO2dCQUNsQkwsV0FBVztnQkFDWEQsSUFBSTtnQkFDSkUsSUFBSSxFQUFFTSxRQUFRO2dCQUNkTCxVQUFVLEVBQUVFLFNBQVM7YUFDckI7U0FDRCxDQUFDLENBQUM7UUFDSFAsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQ0MsSUFBSSxFQUFFLFNBQVM7U0FDZixDQUFDLENBQUM7S0FDSCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7UUFDbkJqQixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCQyxPQUFPLEVBQUUsNEJBQTRCO1lBQ3JDQyxJQUFJLEVBQUUsT0FBTztTQUNiLENBQUMsQ0FBQztLQUNILFFBQVM7UUFDVCxNQUFNbkIsMERBQWtCLEVBQUUsQ0FBQztLQUMzQjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvYWRkRXhhbS50c3g/NmNjMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxudHlwZSBkYXRhVHlwZSA9IHtcclxuXHRmb3JtSWQ6IHN0cmluZztcclxuXHRzdWJqZWN0SWQ6IHN0cmluZztcclxuXHR0b3BpY0lkOiBzdHJpbmc7XHJcblx0Y29udGVudDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHsgZXhhbVR5cGVJZCwgZXhhbSwgZGVzY3JpcHRpb24sIHllYXIsIGhhc0Fuc3dlcnMgfSA9IHJlcS5ib2R5O1xyXG5cdGxldCBoYXNBbnN3ZXIgPSBoYXNBbnN3ZXJzID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuXHRsZXQgdHlwZUlkID0gcGFyc2VJbnQoZXhhbVR5cGVJZCk7XHJcblx0bGV0IHllYXJEb25lID0gcGFyc2VJbnQoeWVhcik7XHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IHByaXNtYS5leGFtLmNyZWF0ZSh7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRleGFtVHlwZUlkOiB0eXBlSWQsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0ZXhhbSxcclxuXHRcdFx0XHR5ZWFyOiB5ZWFyRG9uZSxcclxuXHRcdFx0XHRoYXNBbnN3ZXJzOiBoYXNBbnN3ZXIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ05vdGVzIFN1Y2Nlc3NmdWwgQ3JlYXRlZC4nLFxyXG5cdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG5cdFx0XHRtZXNzYWdlOiAnRXJyb3Igd3JpdHRpbmcgdG8gZGF0YWJhc2UnLFxyXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0fSk7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImV4YW1UeXBlSWQiLCJleGFtIiwiZGVzY3JpcHRpb24iLCJ5ZWFyIiwiaGFzQW5zd2VycyIsImJvZHkiLCJoYXNBbnN3ZXIiLCJ0eXBlSWQiLCJwYXJzZUludCIsInllYXJEb25lIiwiY3JlYXRlIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidHlwZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/addExam.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addExam.tsx"));
module.exports = __webpack_exports__;

})();