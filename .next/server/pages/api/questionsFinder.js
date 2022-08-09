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
exports.id = "pages/api/questionsFinder";
exports.ids = ["pages/api/questionsFinder"];
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

/***/ "(api)/./pages/api/questionsFinder.tsx":
/*!***************************************!*\
  !*** ./pages/api/questionsFinder.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { reviewId  } = req.body;\n    let Idreceived = parseInt(reviewId);\n    try {\n        const topicsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.question.findMany({\n            where: {\n                reviewId: Idreceived,\n                published: true\n            },\n            select: {\n                id: true,\n                question: true,\n                answer: {\n                    select: {\n                        id: true,\n                        answer: true,\n                        valid: true\n                    }\n                },\n                questionFormat: {\n                    select: {\n                        name: true\n                    }\n                },\n                published: true,\n                questionFormatId: true,\n                answerDetails: true\n            }\n        });\n        const topics = JSON.parse(JSON.stringify(topicsFromServer));\n        res.status(200).json(topics);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVlc3Rpb25zRmluZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQUUxQixlQUFlQyxPQUFPLENBQ3BDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDbkI7SUFDRCxNQUFNLEVBQUVDLFFBQVEsR0FBRSxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFDN0IsSUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNILFFBQVEsQ0FBQztJQUNuQyxJQUFJO1FBQ0gsTUFBTUksZ0JBQWdCLEdBQUcsTUFBTVIsZ0VBQXdCLENBQUM7WUFDdkRXLEtBQUssRUFBRTtnQkFDTlAsUUFBUSxFQUFFRSxVQUFVO2dCQUNwQk0sU0FBUyxFQUFFLElBQUk7YUFDZjtZQUNEQyxNQUFNLEVBQUU7Z0JBQ1BDLEVBQUUsRUFBRSxJQUFJO2dCQUNSTCxRQUFRLEVBQUUsSUFBSTtnQkFDZE0sTUFBTSxFQUFFO29CQUNQRixNQUFNLEVBQUU7d0JBQ1BDLEVBQUUsRUFBRSxJQUFJO3dCQUNSQyxNQUFNLEVBQUUsSUFBSTt3QkFDWkMsS0FBSyxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Q7Z0JBQ0RDLGNBQWMsRUFBRTtvQkFDZkosTUFBTSxFQUFFO3dCQUNQSyxJQUFJLEVBQUUsSUFBSTtxQkFDVjtpQkFDRDtnQkFDRE4sU0FBUyxFQUFFLElBQUk7Z0JBQ2ZPLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCQyxhQUFhLEVBQUUsSUFBSTthQUNuQjtTQUNELENBQUM7UUFDRixNQUFNQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ2hCLGdCQUFnQixDQUFDLENBQUM7UUFDM0RMLEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxNQUFNLENBQUMsQ0FBQztLQUM3QixDQUFDLE9BQU9NLEtBQUssRUFBRSxFQUNmLFFBQVM7UUFDVCxNQUFNM0IsMERBQWtCLEVBQUUsQ0FBQztLQUMzQjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvcXVlc3Rpb25zRmluZGVyLnRzeD8zMmMwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cdGNvbnN0IHsgcmV2aWV3SWQgfSA9IHJlcS5ib2R5O1xyXG5cdGxldCBJZHJlY2VpdmVkID0gcGFyc2VJbnQocmV2aWV3SWQpO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB0b3BpY3NGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLnF1ZXN0aW9uLmZpbmRNYW55KHtcclxuXHRcdFx0d2hlcmU6IHtcclxuXHRcdFx0XHRyZXZpZXdJZDogSWRyZWNlaXZlZCxcclxuXHRcdFx0XHRwdWJsaXNoZWQ6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRcdHF1ZXN0aW9uOiB0cnVlLFxyXG5cdFx0XHRcdGFuc3dlcjoge1xyXG5cdFx0XHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRhbnN3ZXI6IHRydWUsXHJcblx0XHRcdFx0XHRcdHZhbGlkOiB0cnVlLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHF1ZXN0aW9uRm9ybWF0OiB7XHJcblx0XHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogdHJ1ZSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwdWJsaXNoZWQ6IHRydWUsXHJcblx0XHRcdFx0cXVlc3Rpb25Gb3JtYXRJZDogdHJ1ZSxcclxuXHRcdFx0XHRhbnN3ZXJEZXRhaWxzOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCB0b3BpY3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRvcGljc0Zyb21TZXJ2ZXIpKTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHRvcGljcyk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHR9IGZpbmFsbHkge1xyXG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmV2aWV3SWQiLCJib2R5IiwiSWRyZWNlaXZlZCIsInBhcnNlSW50IiwidG9waWNzRnJvbVNlcnZlciIsInF1ZXN0aW9uIiwiZmluZE1hbnkiLCJ3aGVyZSIsInB1Ymxpc2hlZCIsInNlbGVjdCIsImlkIiwiYW5zd2VyIiwidmFsaWQiLCJxdWVzdGlvbkZvcm1hdCIsIm5hbWUiLCJxdWVzdGlvbkZvcm1hdElkIiwiYW5zd2VyRGV0YWlscyIsInRvcGljcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/questionsFinder.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/questionsFinder.tsx"));
module.exports = __webpack_exports__;

})();