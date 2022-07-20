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
exports.id = "pages/api/addQuestion";
exports.ids = ["pages/api/addQuestion"];
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

/***/ "(api)/./pages/api/addQuestion.tsx":
/*!***********************************!*\
  !*** ./pages/api/addQuestion.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { question , answer , questionFormatId , reviewId , answerDetails , userId ,  } = req.body;\n    const answerFromUser = JSON.parse(JSON.stringify(answer));\n    let formatIdNumber = parseInt(questionFormatId);\n    let reviewIdNUmber = parseInt(reviewId);\n    let userIdNumber = parseInt(userId);\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.question.create({\n            data: {\n                question,\n                answer: {\n                    create: answerFromUser\n                },\n                reviewId: reviewIdNUmber,\n                questionFormatId: formatIdNumber,\n                answerDetails,\n                usersId: userIdNumber\n            }\n        });\n        res.status(200).json({\n            message: \"Successful added\",\n            type: \"success\"\n        });\n    } catch (error) {\n        res.status(200).json({\n            message: \"Error writting database\",\n            type: \"error\"\n        });\n        console.log(error);\n        console.log(\"answer: \" + answer);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkUXVlc3Rpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBUTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFDTEMsUUFBUSxHQUNSQyxNQUFNLEdBQ05DLGdCQUFnQixHQUNoQkMsUUFBUSxHQUNSQyxhQUFhLEdBQ2JDLE1BQU0sS0FDTixHQUFHUCxHQUFHLENBQUNRLElBQUk7SUFDWixNQUFNQyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1QsTUFBTSxDQUFDLENBQUM7SUFDekQsSUFBSVUsY0FBYyxHQUFHQyxRQUFRLENBQUNWLGdCQUFnQixDQUFDO0lBQy9DLElBQUlXLGNBQWMsR0FBR0QsUUFBUSxDQUFDVCxRQUFRLENBQUM7SUFDdkMsSUFBSVcsWUFBWSxHQUFHRixRQUFRLENBQUNQLE1BQU0sQ0FBQztJQUVuQyxJQUFJO1FBQ0gsTUFBTVQsOERBQXNCLENBQUM7WUFDNUJvQixJQUFJLEVBQUU7Z0JBQ0xoQixRQUFRO2dCQUNSQyxNQUFNLEVBQUU7b0JBQ1BjLE1BQU0sRUFBRVIsY0FBYztpQkFDdEI7Z0JBQ0RKLFFBQVEsRUFBRVUsY0FBYztnQkFDeEJYLGdCQUFnQixFQUFFUyxjQUFjO2dCQUNoQ1AsYUFBYTtnQkFDYmEsT0FBTyxFQUFFSCxZQUFZO2FBQ3JCO1NBQ0QsQ0FBQyxDQUFDO1FBQ0hmLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCQyxPQUFPLEVBQUUsa0JBQWtCO1lBQzNCQyxJQUFJLEVBQUUsU0FBUztTQUNmLENBQUMsQ0FBQztLQUNILENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ2Z2QixHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLHlCQUF5QjtZQUNsQ0MsSUFBSSxFQUFFLE9BQU87U0FDYixDQUFDLENBQUM7UUFDSEUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1FBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEdBQUd2QixNQUFNLENBQUMsQ0FBQztLQUNqQyxRQUFTO1FBQ1QsTUFBTUwsMERBQWtCLEVBQUUsQ0FBQztLQUMzQjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvYWRkUXVlc3Rpb24udHN4P2EwNWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XHJcbnR5cGUgZGF0YVR5cGUgPSB7XHJcblx0dG9waWNOYW1lOiBzdHJpbmc7XHJcblx0dG9waWNEZWZpbml0aW9uOiBzdHJpbmc7XHJcblx0Zm9ybUlkOiBzdHJpbmc7XHJcblx0c3ViamVjdElkOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG5cdHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcblx0cmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0cXVlc3Rpb24sXHJcblx0XHRhbnN3ZXIsXHJcblx0XHRxdWVzdGlvbkZvcm1hdElkLFxyXG5cdFx0cmV2aWV3SWQsXHJcblx0XHRhbnN3ZXJEZXRhaWxzLFxyXG5cdFx0dXNlcklkLFxyXG5cdH0gPSByZXEuYm9keTtcclxuXHRjb25zdCBhbnN3ZXJGcm9tVXNlciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYW5zd2VyKSk7XHJcblx0bGV0IGZvcm1hdElkTnVtYmVyID0gcGFyc2VJbnQocXVlc3Rpb25Gb3JtYXRJZCk7XHJcblx0bGV0IHJldmlld0lkTlVtYmVyID0gcGFyc2VJbnQocmV2aWV3SWQpO1xyXG5cdGxldCB1c2VySWROdW1iZXIgPSBwYXJzZUludCh1c2VySWQpO1xyXG5cclxuXHR0cnkge1xyXG5cdFx0YXdhaXQgcHJpc21hLnF1ZXN0aW9uLmNyZWF0ZSh7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRxdWVzdGlvbixcclxuXHRcdFx0XHRhbnN3ZXI6IHtcclxuXHRcdFx0XHRcdGNyZWF0ZTogYW5zd2VyRnJvbVVzZXIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRyZXZpZXdJZDogcmV2aWV3SWROVW1iZXIsXHJcblx0XHRcdFx0cXVlc3Rpb25Gb3JtYXRJZDogZm9ybWF0SWROdW1iZXIsXHJcblx0XHRcdFx0YW5zd2VyRGV0YWlscyxcclxuXHRcdFx0XHR1c2Vyc0lkOiB1c2VySWROdW1iZXIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ1N1Y2Nlc3NmdWwgYWRkZWQnLFxyXG5cdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG5cdFx0XHRtZXNzYWdlOiAnRXJyb3Igd3JpdHRpbmcgZGF0YWJhc2UnLFxyXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRjb25zb2xlLmxvZygnYW5zd2VyOiAnICsgYW5zd2VyKTtcclxuXHR9IGZpbmFsbHkge1xyXG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJxdWVzdGlvbkZvcm1hdElkIiwicmV2aWV3SWQiLCJhbnN3ZXJEZXRhaWxzIiwidXNlcklkIiwiYm9keSIsImFuc3dlckZyb21Vc2VyIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZm9ybWF0SWROdW1iZXIiLCJwYXJzZUludCIsInJldmlld0lkTlVtYmVyIiwidXNlcklkTnVtYmVyIiwiY3JlYXRlIiwiZGF0YSIsInVzZXJzSWQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInR5cGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addQuestion.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addQuestion.tsx"));
module.exports = __webpack_exports__;

})();