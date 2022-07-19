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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { examTypeId , exam , description , year , hasAnswers , userId  } = req.body;\n    let hasAnswer = hasAnswers == \"true\" ? true : false;\n    let typeId = parseInt(examTypeId);\n    let yearDone = parseInt(year);\n    let userIdNumber = parseInt(userId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.exam.create({\n            data: {\n                examTypeId: typeId,\n                description,\n                exam,\n                year: yearDone,\n                hasAnswers: hasAnswer,\n                usersId: userIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Notes Successful Created.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkRXhhbS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUM7QUFRMUIsZUFBZUMsT0FBTyxDQUNwQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ25CO0lBQ0QsTUFBTSxFQUFFQyxVQUFVLEdBQUVDLElBQUksR0FBRUMsV0FBVyxHQUFFQyxJQUFJLEdBQUVDLFVBQVUsR0FBRUMsTUFBTSxHQUFFLEdBQUdQLEdBQUcsQ0FBQ1EsSUFBSTtJQUM1RSxJQUFJQyxTQUFTLEdBQUdILFVBQVUsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7SUFDbkQsSUFBSUksTUFBTSxHQUFHQyxRQUFRLENBQUNULFVBQVUsQ0FBQztJQUNqQyxJQUFJVSxRQUFRLEdBQUdELFFBQVEsQ0FBQ04sSUFBSSxDQUFDO0lBQzdCLElBQUlRLFlBQVksR0FBR0YsUUFBUSxDQUFDSixNQUFNLENBQUM7SUFDbkMsSUFBSTtRQUNILE1BQU1ULDBEQUFrQixDQUFDO1lBQ3hCaUIsSUFBSSxFQUFFO2dCQUNMYixVQUFVLEVBQUVRLE1BQU07Z0JBQ2xCTixXQUFXO2dCQUNYRCxJQUFJO2dCQUNKRSxJQUFJLEVBQUVPLFFBQVE7Z0JBQ2ROLFVBQVUsRUFBRUcsU0FBUztnQkFDckJPLE9BQU8sRUFBRUgsWUFBWTthQUNyQjtTQUNELENBQUMsQ0FBQztRQUNIWixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQ0MsSUFBSSxFQUFFLFNBQVM7U0FDZixDQUFDLENBQUM7S0FDSCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7UUFDbkJwQixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLDRCQUE0QjtZQUNyQ0MsSUFBSSxFQUFFLE9BQU87U0FDYixDQUFDLENBQUM7S0FDSCxRQUFTO1FBQ1QsTUFBTXRCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2FkZEV4YW0udHN4PzZjYzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XHJcbnR5cGUgZGF0YVR5cGUgPSB7XHJcblx0Zm9ybUlkOiBzdHJpbmc7XHJcblx0c3ViamVjdElkOiBzdHJpbmc7XHJcblx0dG9waWNJZDogc3RyaW5nO1xyXG5cdGNvbnRlbnQ6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuXHRjb25zdCB7IGV4YW1UeXBlSWQsIGV4YW0sIGRlc2NyaXB0aW9uLCB5ZWFyLCBoYXNBbnN3ZXJzLCB1c2VySWQgfSA9IHJlcS5ib2R5O1xyXG5cdGxldCBoYXNBbnN3ZXIgPSBoYXNBbnN3ZXJzID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuXHRsZXQgdHlwZUlkID0gcGFyc2VJbnQoZXhhbVR5cGVJZCk7XHJcblx0bGV0IHllYXJEb25lID0gcGFyc2VJbnQoeWVhcik7XHJcblx0bGV0IHVzZXJJZE51bWJlciA9IHBhcnNlSW50KHVzZXJJZCk7XHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IHByaXNtYS5leGFtLmNyZWF0ZSh7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRleGFtVHlwZUlkOiB0eXBlSWQsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0ZXhhbSxcclxuXHRcdFx0XHR5ZWFyOiB5ZWFyRG9uZSxcclxuXHRcdFx0XHRoYXNBbnN3ZXJzOiBoYXNBbnN3ZXIsXHJcblx0XHRcdFx0dXNlcnNJZDogdXNlcklkTnVtYmVyLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcblx0XHRcdG1lc3NhZ2U6ICdOb3RlcyBTdWNjZXNzZnVsIENyZWF0ZWQuJyxcclxuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ0Vycm9yIHdyaXR0aW5nIHRvIGRhdGFiYXNlJyxcclxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdH0pO1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJleGFtVHlwZUlkIiwiZXhhbSIsImRlc2NyaXB0aW9uIiwieWVhciIsImhhc0Fuc3dlcnMiLCJ1c2VySWQiLCJib2R5IiwiaGFzQW5zd2VyIiwidHlwZUlkIiwicGFyc2VJbnQiLCJ5ZWFyRG9uZSIsInVzZXJJZE51bWJlciIsImNyZWF0ZSIsImRhdGEiLCJ1c2Vyc0lkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addExam.tsx\n");

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