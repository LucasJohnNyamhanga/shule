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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { id , examTypeId , exam , description , year , hasAnswers  } = req.body;\n    let hasAnswer = hasAnswers == \"true\" ? true : false;\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.exam.update({\n            where: {\n                id: parseInt(id)\n            },\n            data: {\n                examTypeId: parseInt(examTypeId),\n                exam,\n                description,\n                year: parseInt(year),\n                hasAnswers: hasAnswer\n            }\n        });\n        res.status(200).json({\n            message: \"Update successful\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(200).json({\n            message: \"Error, Could not update.\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlRXhhbS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUM7QUFNMUIsZUFBZUMsT0FBTyxDQUNwQ0MsR0FBbUIsRUFDbkJDLEdBQThCLEVBQzdCO0lBQ0QsTUFBTSxFQUFFQyxFQUFFLEdBQUVDLFVBQVUsR0FBRUMsSUFBSSxHQUFFQyxXQUFXLEdBQUVDLElBQUksR0FBRUMsVUFBVSxHQUFFLEdBQUdQLEdBQUcsQ0FBQ1EsSUFBSTtJQUN4RSxJQUFJQyxTQUFTLEdBQUdGLFVBQVUsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7SUFFbkQsSUFBSTtRQUNILE1BQU1ULDBEQUFrQixDQUFDO1lBQ3hCYSxLQUFLLEVBQUU7Z0JBQUVULEVBQUUsRUFBRVUsUUFBUSxDQUFDVixFQUFFLENBQUM7YUFBRTtZQUMzQlcsSUFBSSxFQUFFO2dCQUNMVixVQUFVLEVBQUVTLFFBQVEsQ0FBQ1QsVUFBVSxDQUFDO2dCQUNoQ0MsSUFBSTtnQkFDSkMsV0FBVztnQkFDWEMsSUFBSSxFQUFFTSxRQUFRLENBQUNOLElBQUksQ0FBQztnQkFDcEJDLFVBQVUsRUFBRUUsU0FBUzthQUNyQjtTQUNELENBQUMsQ0FBQztRQUNIUixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxtQkFBbUI7WUFBRUMsSUFBSSxFQUFFLFNBQVM7U0FBRSxDQUFDLENBQUM7S0FDeEUsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1FBQ25CakIsR0FBRyxDQUNEYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ1hDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsMEJBQTBCO1lBQUVDLElBQUksRUFBRSxPQUFPO1NBQUUsQ0FBQyxDQUFDO0tBQy9ELFFBQVM7UUFDVCxNQUFNbkIsMERBQWtCLEVBQUUsQ0FBQztLQUMzQjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvdXBkYXRlRXhhbS50c3g/M2RkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxudHlwZSB1c2VyRGF0YSA9IHtcclxuXHRtZXNzYWdlOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuXHRyZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlPHVzZXJEYXRhPlxyXG4pIHtcclxuXHRjb25zdCB7IGlkLCBleGFtVHlwZUlkLCBleGFtLCBkZXNjcmlwdGlvbiwgeWVhciwgaGFzQW5zd2VycyB9ID0gcmVxLmJvZHk7XHJcblx0bGV0IGhhc0Fuc3dlciA9IGhhc0Fuc3dlcnMgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuXHR0cnkge1xyXG5cdFx0YXdhaXQgcHJpc21hLmV4YW0udXBkYXRlKHtcclxuXHRcdFx0d2hlcmU6IHsgaWQ6IHBhcnNlSW50KGlkKSB9LFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0ZXhhbVR5cGVJZDogcGFyc2VJbnQoZXhhbVR5cGVJZCksXHJcblx0XHRcdFx0ZXhhbSxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbixcclxuXHRcdFx0XHR5ZWFyOiBwYXJzZUludCh5ZWFyKSxcclxuXHRcdFx0XHRoYXNBbnN3ZXJzOiBoYXNBbnN3ZXIsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1VwZGF0ZSBzdWNjZXNzZnVsJywgdHlwZTogJ3N1Y2Nlc3MnIH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRyZXNcclxuXHRcdFx0LnN0YXR1cygyMDApXHJcblx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ0Vycm9yLCBDb3VsZCBub3QgdXBkYXRlLicsIHR5cGU6ICdlcnJvcicgfSk7XHJcblx0fSBmaW5hbGx5IHtcclxuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImlkIiwiZXhhbVR5cGVJZCIsImV4YW0iLCJkZXNjcmlwdGlvbiIsInllYXIiLCJoYXNBbnN3ZXJzIiwiYm9keSIsImhhc0Fuc3dlciIsInVwZGF0ZSIsIndoZXJlIiwicGFyc2VJbnQiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateExam.tsx\n");

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