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
exports.id = "pages/api/questions";
exports.ids = ["pages/api/questions"];
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

/***/ "(api)/./pages/api/questions.tsx":
/*!*********************************!*\
  !*** ./pages/api/questions.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { reviewId  } = req.body;\n    let Idreceived = parseInt(reviewId);\n    try {\n        const topicsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.question.findMany({\n            where: {\n                reviewId: Idreceived\n            },\n            select: {\n                id: true,\n                question: true,\n                answer: {\n                    select: {\n                        id: true,\n                        answer: true,\n                        valid: true\n                    }\n                },\n                questionFormat: {\n                    select: {\n                        name: true\n                    }\n                },\n                published: true,\n                questionFormatId: true,\n                answerDetails: true\n            }\n        });\n        const topics = JSON.parse(JSON.stringify(topicsFromServer));\n        res.status(200).json(topics);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVlc3Rpb25zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV3QztBQUV6QixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFFQSxNQUFNLEVBQUVDLFFBQVEsR0FBRSxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFDN0IsSUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNILFFBQVEsQ0FBQztJQUNyQyxJQUFJO1FBQ0YsTUFBTUksZ0JBQWdCLEdBQUcsTUFBTVIsZ0VBQXdCLENBQUM7WUFDdERXLEtBQUssRUFBRTtnQkFDTFAsUUFBUSxFQUFFRSxVQUFVO2FBQ3JCO1lBQ0NNLE1BQU0sRUFBRTtnQkFDTkMsRUFBRSxFQUFFLElBQUk7Z0JBQ1JKLFFBQVEsRUFBQyxJQUFJO2dCQUNiSyxNQUFNLEVBQUM7b0JBQ0xGLE1BQU0sRUFBQzt3QkFDTEMsRUFBRSxFQUFDLElBQUk7d0JBQ1BDLE1BQU0sRUFBQyxJQUFJO3dCQUNYQyxLQUFLLEVBQUMsSUFBSTtxQkFDWDtpQkFDRjtnQkFDREMsY0FBYyxFQUFDO29CQUNiSixNQUFNLEVBQUM7d0JBQ0xLLElBQUksRUFBQyxJQUFJO3FCQUNWO2lCQUNGO2dCQUNEQyxTQUFTLEVBQUMsSUFBSTtnQkFDZEMsZ0JBQWdCLEVBQUMsSUFBSTtnQkFDckJDLGFBQWEsRUFBQyxJQUFJO2FBQ25CO1NBQ0YsQ0FBQztRQUNGLE1BQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDaEIsZ0JBQWdCLENBQUMsQ0FBQztRQUMzREwsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLE1BQU0sQ0FBQyxDQUFDO0tBQzVCLENBQUMsT0FBT00sS0FBSyxFQUFFLEVBRWYsUUFBUztRQUNWLE1BQU0zQiwwREFBa0IsRUFBRSxDQUFDO0tBQzVCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9xdWVzdGlvbnMudHN4P2RmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cclxuICBjb25zdCB7IHJldmlld0lkIH0gPSByZXEuYm9keVxyXG4gIGxldCBJZHJlY2VpdmVkID0gcGFyc2VJbnQocmV2aWV3SWQpO1xyXG50cnkge1xyXG4gIGNvbnN0IHRvcGljc0Zyb21TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEucXVlc3Rpb24uZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgcmV2aWV3SWQ6IElkcmVjZWl2ZWQsXHJcbiAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBxdWVzdGlvbjp0cnVlLFxyXG4gICAgICAgIGFuc3dlcjp7XHJcbiAgICAgICAgICBzZWxlY3Q6e1xyXG4gICAgICAgICAgICBpZDp0cnVlLFxyXG4gICAgICAgICAgICBhbnN3ZXI6dHJ1ZSxcclxuICAgICAgICAgICAgdmFsaWQ6dHJ1ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHF1ZXN0aW9uRm9ybWF0OntcclxuICAgICAgICAgIHNlbGVjdDp7XHJcbiAgICAgICAgICAgIG5hbWU6dHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHVibGlzaGVkOnRydWUsXHJcbiAgICAgICAgcXVlc3Rpb25Gb3JtYXRJZDp0cnVlLFxyXG4gICAgICAgIGFuc3dlckRldGFpbHM6dHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHRvcGljcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9waWNzRnJvbVNlcnZlcikpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odG9waWNzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmV2aWV3SWQiLCJib2R5IiwiSWRyZWNlaXZlZCIsInBhcnNlSW50IiwidG9waWNzRnJvbVNlcnZlciIsInF1ZXN0aW9uIiwiZmluZE1hbnkiLCJ3aGVyZSIsInNlbGVjdCIsImlkIiwiYW5zd2VyIiwidmFsaWQiLCJxdWVzdGlvbkZvcm1hdCIsIm5hbWUiLCJwdWJsaXNoZWQiLCJxdWVzdGlvbkZvcm1hdElkIiwiYW5zd2VyRGV0YWlscyIsInRvcGljcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/questions.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/questions.tsx"));
module.exports = __webpack_exports__;

})();