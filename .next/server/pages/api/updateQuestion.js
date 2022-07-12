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
exports.id = "pages/api/updateQuestion";
exports.ids = ["pages/api/updateQuestion"];
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

/***/ "(api)/./pages/api/updateQuestion.tsx":
/*!**************************************!*\
  !*** ./pages/api/updateQuestion.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { question , answer , questionFormatId , reviewId , id , answerDetails , userId ,  } = req.body;\n    const answerFromUser = JSON.parse(JSON.stringify(answer));\n    let formatIdNumber = parseInt(questionFormatId);\n    let Id = parseInt(id);\n    let reviewIdNUmber = parseInt(reviewId);\n    let userIdNumber = parseInt(userId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.question.update({\n            where: {\n                id: Id\n            },\n            data: {\n                question,\n                answer: {\n                    deleteMany: {},\n                    create: answerFromUser\n                },\n                reviewId: reviewIdNUmber,\n                questionFormatId: formatIdNumber,\n                answerDetails,\n                usersId: userIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Successful added\",\n            type: \"success\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error writting database\",\n            type: \"error\"\n        });\n        console.log(error);\n        console.log(\"answer: \" + answer);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlUXVlc3Rpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBUTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFDTEMsUUFBUSxHQUNSQyxNQUFNLEdBQ05DLGdCQUFnQixHQUNoQkMsUUFBUSxHQUNSQyxFQUFFLEdBQ0ZDLGFBQWEsR0FDYkMsTUFBTSxLQUNOLEdBQUdSLEdBQUcsQ0FBQ1MsSUFBSTtJQUNaLE1BQU1DLGNBQWMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDVixNQUFNLENBQUMsQ0FBQztJQUN6RCxJQUFJVyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ1gsZ0JBQWdCLENBQUM7SUFDL0MsSUFBSVksRUFBRSxHQUFHRCxRQUFRLENBQUNULEVBQUUsQ0FBQztJQUNyQixJQUFJVyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ1YsUUFBUSxDQUFDO0lBQ3ZDLElBQUlhLFlBQVksR0FBR0gsUUFBUSxDQUFDUCxNQUFNLENBQUM7SUFFbkMsSUFBSTtRQUNILE1BQU1WLDhEQUFzQixDQUFDO1lBQzVCc0IsS0FBSyxFQUFFO2dCQUNOZCxFQUFFLEVBQUVVLEVBQUU7YUFDTjtZQUNESyxJQUFJLEVBQUU7Z0JBQ0xuQixRQUFRO2dCQUNSQyxNQUFNLEVBQUU7b0JBQ1BtQixVQUFVLEVBQUUsRUFBRTtvQkFDZEMsTUFBTSxFQUFFYixjQUFjO2lCQUN0QjtnQkFDREwsUUFBUSxFQUFFWSxjQUFjO2dCQUN4QmIsZ0JBQWdCLEVBQUVVLGNBQWM7Z0JBQ2hDUCxhQUFhO2dCQUNiaUIsT0FBTyxFQUFFTixZQUFZO2FBQ3JCO1NBQ0QsQ0FBQyxDQUFDO1FBQ0hqQixHQUFHLENBQUN3QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQkMsSUFBSSxFQUFFLFNBQVM7U0FDZixDQUFDLENBQUM7S0FDSCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNmNUIsR0FBRyxDQUFDd0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSx5QkFBeUI7WUFDbENDLElBQUksRUFBRSxPQUFPO1NBQ2IsQ0FBQyxDQUFDO1FBQ0hFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztRQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxHQUFHNUIsTUFBTSxDQUFDLENBQUM7S0FDakMsUUFBUztRQUNULE1BQU1MLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL3VwZGF0ZVF1ZXN0aW9uLnRzeD82MjE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG50eXBlIGRhdGFUeXBlID0ge1xyXG5cdHRvcGljTmFtZTogc3RyaW5nO1xyXG5cdHRvcGljRGVmaW5pdGlvbjogc3RyaW5nO1xyXG5cdGZvcm1JZDogc3RyaW5nO1xyXG5cdHN1YmplY3RJZDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHtcclxuXHRcdHF1ZXN0aW9uLFxyXG5cdFx0YW5zd2VyLFxyXG5cdFx0cXVlc3Rpb25Gb3JtYXRJZCxcclxuXHRcdHJldmlld0lkLFxyXG5cdFx0aWQsXHJcblx0XHRhbnN3ZXJEZXRhaWxzLFxyXG5cdFx0dXNlcklkLFxyXG5cdH0gPSByZXEuYm9keTtcclxuXHRjb25zdCBhbnN3ZXJGcm9tVXNlciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYW5zd2VyKSk7XHJcblx0bGV0IGZvcm1hdElkTnVtYmVyID0gcGFyc2VJbnQocXVlc3Rpb25Gb3JtYXRJZCk7XHJcblx0bGV0IElkID0gcGFyc2VJbnQoaWQpO1xyXG5cdGxldCByZXZpZXdJZE5VbWJlciA9IHBhcnNlSW50KHJldmlld0lkKTtcclxuXHRsZXQgdXNlcklkTnVtYmVyID0gcGFyc2VJbnQodXNlcklkKTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IHByaXNtYS5xdWVzdGlvbi51cGRhdGUoe1xyXG5cdFx0XHR3aGVyZToge1xyXG5cdFx0XHRcdGlkOiBJZCxcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHF1ZXN0aW9uLFxyXG5cdFx0XHRcdGFuc3dlcjoge1xyXG5cdFx0XHRcdFx0ZGVsZXRlTWFueToge30sXHJcblx0XHRcdFx0XHRjcmVhdGU6IGFuc3dlckZyb21Vc2VyLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cmV2aWV3SWQ6IHJldmlld0lkTlVtYmVyLFxyXG5cdFx0XHRcdHF1ZXN0aW9uRm9ybWF0SWQ6IGZvcm1hdElkTnVtYmVyLFxyXG5cdFx0XHRcdGFuc3dlckRldGFpbHMsXHJcblx0XHRcdFx0dXNlcnNJZDogdXNlcklkTnVtYmVyLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcblx0XHRcdG1lc3NhZ2U6ICdTdWNjZXNzZnVsIGFkZGVkJyxcclxuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ0Vycm9yIHdyaXR0aW5nIGRhdGFiYXNlJyxcclxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0Y29uc29sZS5sb2coJ2Fuc3dlcjogJyArIGFuc3dlcik7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXN0aW9uIiwiYW5zd2VyIiwicXVlc3Rpb25Gb3JtYXRJZCIsInJldmlld0lkIiwiaWQiLCJhbnN3ZXJEZXRhaWxzIiwidXNlcklkIiwiYm9keSIsImFuc3dlckZyb21Vc2VyIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZm9ybWF0SWROdW1iZXIiLCJwYXJzZUludCIsIklkIiwicmV2aWV3SWROVW1iZXIiLCJ1c2VySWROdW1iZXIiLCJ1cGRhdGUiLCJ3aGVyZSIsImRhdGEiLCJkZWxldGVNYW55IiwiY3JlYXRlIiwidXNlcnNJZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidHlwZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateQuestion.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateQuestion.tsx"));
module.exports = __webpack_exports__;

})();