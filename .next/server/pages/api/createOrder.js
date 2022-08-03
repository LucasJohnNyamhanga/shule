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
exports.id = "pages/api/createOrder";
exports.ids = ["pages/api/createOrder"];
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

/***/ "(api)/./pages/api/createOrder.tsx":
/*!***********************************!*\
  !*** ./pages/api/createOrder.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { orderNumber , description , amountPaid , booksDownload , examAccess , examsSolvedDownload , examsUnsolvedDownload , notesDownload , quizExcercises , userId ,  } = req.body;\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.order.create({\n            data: {\n                orderNumber,\n                description,\n                amountPaid: parseInt(amountPaid),\n                booksDownload: parseInt(booksDownload),\n                examAccess: parseInt(examAccess),\n                examsSolvedDownload: parseInt(examsSolvedDownload),\n                examsUnsolvedDownload: parseInt(examsUnsolvedDownload),\n                notesDownload: parseInt(notesDownload),\n                quizExcercises: parseInt(quizExcercises),\n                userId: parseInt(userId)\n            }\n        });\n        res.status(200).json({\n            message: \"Order Successful Created.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlT3JkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBRTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFDTEMsV0FBVyxHQUNYQyxXQUFXLEdBQ1hDLFVBQVUsR0FDVkMsYUFBYSxHQUNiQyxVQUFVLEdBQ1ZDLG1CQUFtQixHQUNuQkMscUJBQXFCLEdBQ3JCQyxhQUFhLEdBQ2JDLGNBQWMsR0FDZEMsTUFBTSxLQUNOLEdBQUdYLEdBQUcsQ0FBQ1ksSUFBSTtJQUNaLElBQUk7UUFDSCxNQUFNZCwyREFBbUIsQ0FBQztZQUN6QmlCLElBQUksRUFBRTtnQkFDTGIsV0FBVztnQkFDWEMsV0FBVztnQkFDWEMsVUFBVSxFQUFFWSxRQUFRLENBQUNaLFVBQVUsQ0FBQztnQkFDaENDLGFBQWEsRUFBRVcsUUFBUSxDQUFDWCxhQUFhLENBQUM7Z0JBQ3RDQyxVQUFVLEVBQUVVLFFBQVEsQ0FBQ1YsVUFBVSxDQUFDO2dCQUNoQ0MsbUJBQW1CLEVBQUVTLFFBQVEsQ0FBQ1QsbUJBQW1CLENBQUM7Z0JBQ2xEQyxxQkFBcUIsRUFBRVEsUUFBUSxDQUFDUixxQkFBcUIsQ0FBQztnQkFDdERDLGFBQWEsRUFBRU8sUUFBUSxDQUFDUCxhQUFhLENBQUM7Z0JBQ3RDQyxjQUFjLEVBQUVNLFFBQVEsQ0FBQ04sY0FBYyxDQUFDO2dCQUN4Q0MsTUFBTSxFQUFFSyxRQUFRLENBQUNMLE1BQU0sQ0FBQzthQUN4QjtTQUNELENBQUMsQ0FBQztRQUNIVixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQ0MsSUFBSSxFQUFFLFNBQVM7U0FDZixDQUFDLENBQUM7S0FDSCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7UUFDbkJwQixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLDRCQUE0QjtZQUNyQ0MsSUFBSSxFQUFFLE9BQU87U0FDYixDQUFDLENBQUM7S0FDSCxRQUFTO1FBQ1QsTUFBTXRCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2NyZWF0ZU9yZGVyLnRzeD83YjczIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHtcclxuXHRcdG9yZGVyTnVtYmVyLFxyXG5cdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRhbW91bnRQYWlkLFxyXG5cdFx0Ym9va3NEb3dubG9hZCxcclxuXHRcdGV4YW1BY2Nlc3MsXHJcblx0XHRleGFtc1NvbHZlZERvd25sb2FkLFxyXG5cdFx0ZXhhbXNVbnNvbHZlZERvd25sb2FkLFxyXG5cdFx0bm90ZXNEb3dubG9hZCxcclxuXHRcdHF1aXpFeGNlcmNpc2VzLFxyXG5cdFx0dXNlcklkLFxyXG5cdH0gPSByZXEuYm9keTtcclxuXHR0cnkge1xyXG5cdFx0YXdhaXQgcHJpc21hLm9yZGVyLmNyZWF0ZSh7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRvcmRlck51bWJlcixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbixcclxuXHRcdFx0XHRhbW91bnRQYWlkOiBwYXJzZUludChhbW91bnRQYWlkKSxcclxuXHRcdFx0XHRib29rc0Rvd25sb2FkOiBwYXJzZUludChib29rc0Rvd25sb2FkKSxcclxuXHRcdFx0XHRleGFtQWNjZXNzOiBwYXJzZUludChleGFtQWNjZXNzKSxcclxuXHRcdFx0XHRleGFtc1NvbHZlZERvd25sb2FkOiBwYXJzZUludChleGFtc1NvbHZlZERvd25sb2FkKSxcclxuXHRcdFx0XHRleGFtc1Vuc29sdmVkRG93bmxvYWQ6IHBhcnNlSW50KGV4YW1zVW5zb2x2ZWREb3dubG9hZCksXHJcblx0XHRcdFx0bm90ZXNEb3dubG9hZDogcGFyc2VJbnQobm90ZXNEb3dubG9hZCksXHJcblx0XHRcdFx0cXVpekV4Y2VyY2lzZXM6IHBhcnNlSW50KHF1aXpFeGNlcmNpc2VzKSxcclxuXHRcdFx0XHR1c2VySWQ6IHBhcnNlSW50KHVzZXJJZCksXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ09yZGVyIFN1Y2Nlc3NmdWwgQ3JlYXRlZC4nLFxyXG5cdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG5cdFx0XHRtZXNzYWdlOiAnRXJyb3Igd3JpdHRpbmcgdG8gZGF0YWJhc2UnLFxyXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0fSk7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm9yZGVyTnVtYmVyIiwiZGVzY3JpcHRpb24iLCJhbW91bnRQYWlkIiwiYm9va3NEb3dubG9hZCIsImV4YW1BY2Nlc3MiLCJleGFtc1NvbHZlZERvd25sb2FkIiwiZXhhbXNVbnNvbHZlZERvd25sb2FkIiwibm90ZXNEb3dubG9hZCIsInF1aXpFeGNlcmNpc2VzIiwidXNlcklkIiwiYm9keSIsIm9yZGVyIiwiY3JlYXRlIiwiZGF0YSIsInBhcnNlSW50Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/createOrder.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createOrder.tsx"));
module.exports = __webpack_exports__;

})();