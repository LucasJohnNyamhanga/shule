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
exports.id = "pages/api/addSubjectExam";
exports.ids = ["pages/api/addSubjectExam"];
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

/***/ "(api)/./pages/api/addSubjectExam.tsx":
/*!**************************************!*\
  !*** ./pages/api/addSubjectExam.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { subjectName , subjectDefinition , imageLocation , forms , userId  } = req.body;\n    let userIdNumber = parseInt(userId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.subjectExams.create({\n            data: {\n                subjectName,\n                subjectDefinition,\n                imageLocation,\n                forms: {\n                    connect: forms\n                },\n                usersId: userIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Subject Successful added.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(\"Majanga : \" + error);\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkU3ViamVjdEV4YW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBWTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFBRUMsV0FBVyxHQUFFQyxpQkFBaUIsR0FBRUMsYUFBYSxHQUFFQyxLQUFLLEdBQUVDLE1BQU0sR0FBRSxHQUNyRU4sR0FBRyxDQUFDTyxJQUFJO0lBQ1QsSUFBSUMsWUFBWSxHQUFHQyxRQUFRLENBQUNILE1BQU0sQ0FBQztJQUNuQyxJQUFJO1FBQ0gsTUFBTVIsa0VBQTBCLENBQUM7WUFDaENjLElBQUksRUFBRTtnQkFDTFYsV0FBVztnQkFDWEMsaUJBQWlCO2dCQUNqQkMsYUFBYTtnQkFDYkMsS0FBSyxFQUFFO29CQUNOUSxPQUFPLEVBQUVSLEtBQUs7aUJBQ2Q7Z0JBQ0RTLE9BQU8sRUFBRU4sWUFBWTthQUNyQjtTQUNELENBQUMsQ0FBQztRQUNIUCxHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCQyxPQUFPLEVBQUUsMkJBQTJCO1lBQ3BDQyxJQUFJLEVBQUUsU0FBUztTQUNmLENBQUMsQ0FBQztLQUNILENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksR0FBR0YsS0FBSyxDQUFDLENBQUM7UUFDbENsQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCQyxPQUFPLEVBQUUsNEJBQTRCO1lBQ3JDQyxJQUFJLEVBQUUsT0FBTztTQUNiLENBQUMsQ0FBQztLQUNILFFBQVM7UUFDVCxNQUFNcEIsMERBQWtCLEVBQUUsQ0FBQztLQUMzQjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvYWRkU3ViamVjdEV4YW0udHN4PzliNDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XHJcbnR5cGUgZGF0YVR5cGUgPSB7XHJcblx0c3ViamVjdE5hbWU6IHN0cmluZztcclxuXHRzdWJqZWN0RGVmaW5pdGlvbjogc3RyaW5nO1xyXG5cdGltYWdlTG9jYXRpb246IHN0cmluZztcclxuXHRmb3JtczogW1xyXG5cdFx0e1xyXG5cdFx0XHRpZDogbnVtYmVyO1xyXG5cdFx0fVxyXG5cdF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG5cdHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcblx0cmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcblx0Y29uc3QgeyBzdWJqZWN0TmFtZSwgc3ViamVjdERlZmluaXRpb24sIGltYWdlTG9jYXRpb24sIGZvcm1zLCB1c2VySWQgfSA9XHJcblx0XHRyZXEuYm9keTtcclxuXHRsZXQgdXNlcklkTnVtYmVyID0gcGFyc2VJbnQodXNlcklkKTtcclxuXHR0cnkge1xyXG5cdFx0YXdhaXQgcHJpc21hLnN1YmplY3RFeGFtcy5jcmVhdGUoe1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0c3ViamVjdE5hbWUsXHJcblx0XHRcdFx0c3ViamVjdERlZmluaXRpb24sXHJcblx0XHRcdFx0aW1hZ2VMb2NhdGlvbixcclxuXHRcdFx0XHRmb3Jtczoge1xyXG5cdFx0XHRcdFx0Y29ubmVjdDogZm9ybXMsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR1c2Vyc0lkOiB1c2VySWROdW1iZXIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ1N1YmplY3QgU3VjY2Vzc2Z1bCBhZGRlZC4nLFxyXG5cdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5sb2coJ01hamFuZ2EgOiAnICsgZXJyb3IpO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG5cdFx0XHRtZXNzYWdlOiAnRXJyb3Igd3JpdHRpbmcgdG8gZGF0YWJhc2UnLFxyXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0fSk7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN1YmplY3ROYW1lIiwic3ViamVjdERlZmluaXRpb24iLCJpbWFnZUxvY2F0aW9uIiwiZm9ybXMiLCJ1c2VySWQiLCJib2R5IiwidXNlcklkTnVtYmVyIiwicGFyc2VJbnQiLCJzdWJqZWN0RXhhbXMiLCJjcmVhdGUiLCJkYXRhIiwiY29ubmVjdCIsInVzZXJzSWQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInR5cGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addSubjectExam.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addSubjectExam.tsx"));
module.exports = __webpack_exports__;

})();