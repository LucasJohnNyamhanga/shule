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
exports.id = "pages/api/updateExam";
exports.ids = ["pages/api/updateExam"];
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

/***/ "(api)/./pages/api/updateExam.tsx":
/*!**********************************!*\
  !*** ./pages/api/updateExam.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { id , examTypeId , exam , description , year , hasAnswers , userId  } = req.body;\n    let userIdNumber = parseInt(userId);\n    let hasAnswer = hasAnswers == \"true\" ? true : false;\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.exam.update({\n            where: {\n                id: parseInt(id)\n            },\n            data: {\n                examTypeId: parseInt(examTypeId),\n                exam,\n                description,\n                year: parseInt(year),\n                hasAnswers: hasAnswer,\n                usersId: userIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Update successful\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(200).json({\n            message: \"Error, Could not update.\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlRXhhbS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUM7QUFNMUIsZUFBZUMsT0FBTyxDQUNwQ0MsR0FBbUIsRUFDbkJDLEdBQThCLEVBQzdCO0lBQ0QsTUFBTSxFQUFFQyxFQUFFLEdBQUVDLFVBQVUsR0FBRUMsSUFBSSxHQUFFQyxXQUFXLEdBQUVDLElBQUksR0FBRUMsVUFBVSxHQUFFQyxNQUFNLEdBQUUsR0FDcEVSLEdBQUcsQ0FBQ1MsSUFBSTtJQUNULElBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUM7SUFDbkMsSUFBSUksU0FBUyxHQUFHTCxVQUFVLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLO0lBRW5ELElBQUk7UUFDSCxNQUFNVCwwREFBa0IsQ0FBQztZQUN4QmdCLEtBQUssRUFBRTtnQkFBRVosRUFBRSxFQUFFUyxRQUFRLENBQUNULEVBQUUsQ0FBQzthQUFFO1lBQzNCYSxJQUFJLEVBQUU7Z0JBQ0xaLFVBQVUsRUFBRVEsUUFBUSxDQUFDUixVQUFVLENBQUM7Z0JBQ2hDQyxJQUFJO2dCQUNKQyxXQUFXO2dCQUNYQyxJQUFJLEVBQUVLLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDO2dCQUNwQkMsVUFBVSxFQUFFSyxTQUFTO2dCQUNyQkksT0FBTyxFQUFFTixZQUFZO2FBQ3JCO1NBQ0QsQ0FBQyxDQUFDO1FBQ0hULEdBQUcsQ0FBQ2dCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxtQkFBbUI7WUFBRUMsSUFBSSxFQUFFLFNBQVM7U0FBRSxDQUFDLENBQUM7S0FDeEUsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1FBQ25CcEIsR0FBRyxDQUNEZ0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLDBCQUEwQjtZQUFFQyxJQUFJLEVBQUUsT0FBTztTQUFFLENBQUMsQ0FBQztLQUMvRCxRQUFTO1FBQ1QsTUFBTXRCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL3VwZGF0ZUV4YW0udHN4PzNkZGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XHJcbnR5cGUgdXNlckRhdGEgPSB7XHJcblx0bWVzc2FnZTogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZTx1c2VyRGF0YT5cclxuKSB7XHJcblx0Y29uc3QgeyBpZCwgZXhhbVR5cGVJZCwgZXhhbSwgZGVzY3JpcHRpb24sIHllYXIsIGhhc0Fuc3dlcnMsIHVzZXJJZCB9ID1cclxuXHRcdHJlcS5ib2R5O1xyXG5cdGxldCB1c2VySWROdW1iZXIgPSBwYXJzZUludCh1c2VySWQpO1xyXG5cdGxldCBoYXNBbnN3ZXIgPSBoYXNBbnN3ZXJzID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IHByaXNtYS5leGFtLnVwZGF0ZSh7XHJcblx0XHRcdHdoZXJlOiB7IGlkOiBwYXJzZUludChpZCkgfSxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGV4YW1UeXBlSWQ6IHBhcnNlSW50KGV4YW1UeXBlSWQpLFxyXG5cdFx0XHRcdGV4YW0sXHJcblx0XHRcdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0eWVhcjogcGFyc2VJbnQoeWVhciksXHJcblx0XHRcdFx0aGFzQW5zd2VyczogaGFzQW5zd2VyLFxyXG5cdFx0XHRcdHVzZXJzSWQ6IHVzZXJJZE51bWJlcixcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnVXBkYXRlIHN1Y2Nlc3NmdWwnLCB0eXBlOiAnc3VjY2VzcycgfSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdHJlc1xyXG5cdFx0XHQuc3RhdHVzKDIwMClcclxuXHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnRXJyb3IsIENvdWxkIG5vdCB1cGRhdGUuJywgdHlwZTogJ2Vycm9yJyB9KTtcclxuXHR9IGZpbmFsbHkge1xyXG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJleGFtVHlwZUlkIiwiZXhhbSIsImRlc2NyaXB0aW9uIiwieWVhciIsImhhc0Fuc3dlcnMiLCJ1c2VySWQiLCJib2R5IiwidXNlcklkTnVtYmVyIiwicGFyc2VJbnQiLCJoYXNBbnN3ZXIiLCJ1cGRhdGUiLCJ3aGVyZSIsImRhdGEiLCJ1c2Vyc0lkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateExam.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateExam.tsx"));
module.exports = __webpack_exports__;

})();