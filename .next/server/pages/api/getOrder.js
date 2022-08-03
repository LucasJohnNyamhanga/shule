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
exports.id = "pages/api/getOrder";
exports.ids = ["pages/api/getOrder"];
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

/***/ "(api)/./pages/api/getOrder.tsx":
/*!********************************!*\
  !*** ./pages/api/getOrder.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { user  } = req.body;\n    console.log(user);\n    try {\n        const result = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.order.findMany({\n            where: {\n                status: true\n            },\n            select: {\n                id: true,\n                orderNumber: true,\n                description: true\n            }\n        });\n        let searchResults = JSON.parse(JSON.stringify(result));\n        if (searchResults.length > 0) {\n            res.status(200).json(searchResults);\n        } else {\n            const result1 = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.users.findMany({\n                where: {\n                    name: {\n                        contains: user\n                    }\n                },\n                select: {\n                    id: true,\n                    username: true,\n                    isAdmin: true,\n                    isSuperUser: true,\n                    image: true,\n                    name: true,\n                    vifurushi: {\n                        select: {\n                            name: true,\n                            value: true\n                        }\n                    },\n                    purchase: {\n                        select: {\n                            name: true,\n                            value: true\n                        }\n                    }\n                }\n            });\n            let searchResults1 = JSON.parse(JSON.stringify(result1));\n            res.status(200).json(searchResults1);\n        }\n    } catch (error) {\n        res.status(404).json(\"Not Found\");\n        console.log(error);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0T3JkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBUTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO0lBQ2xCLElBQUk7UUFDSCxNQUFNSSxNQUFNLEdBQUcsTUFBTVIsNkRBQXFCLENBQUM7WUFDMUNXLEtBQUssRUFBRTtnQkFDTkMsTUFBTSxFQUFFLElBQUk7YUFDWjtZQUNEQyxNQUFNLEVBQUU7Z0JBQ1BDLEVBQUUsRUFBRSxJQUFJO2dCQUNSQyxXQUFXLEVBQUUsSUFBSTtnQkFDakJDLFdBQVcsRUFBRSxJQUFJO2FBQ2pCO1NBQ0QsQ0FBQztRQUNGLElBQUlDLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDWixNQUFNLENBQUMsQ0FBQztRQUV0RCxJQUFJUyxhQUFhLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0JsQixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1UsSUFBSSxDQUFDTCxhQUFhLENBQUMsQ0FBQztTQUNwQyxNQUFNO1lBQ04sTUFBTVQsT0FBTSxHQUFHLE1BQU1SLDZEQUFxQixDQUFDO2dCQUMxQ1csS0FBSyxFQUFFO29CQUNOYSxJQUFJLEVBQUU7d0JBQ0xDLFFBQVEsRUFBRXJCLElBQUk7cUJBQ2Q7aUJBQ0Q7Z0JBQ0RTLE1BQU0sRUFBRTtvQkFDUEMsRUFBRSxFQUFFLElBQUk7b0JBQ1JZLFFBQVEsRUFBRSxJQUFJO29CQUNkQyxPQUFPLEVBQUUsSUFBSTtvQkFDYkMsV0FBVyxFQUFFLElBQUk7b0JBQ2pCQyxLQUFLLEVBQUUsSUFBSTtvQkFDWEwsSUFBSSxFQUFFLElBQUk7b0JBQ1ZNLFNBQVMsRUFBRTt3QkFDVmpCLE1BQU0sRUFBRTs0QkFDUFcsSUFBSSxFQUFFLElBQUk7NEJBQ1ZPLEtBQUssRUFBRSxJQUFJO3lCQUNYO3FCQUNEO29CQUNEQyxRQUFRLEVBQUU7d0JBQ1RuQixNQUFNLEVBQUU7NEJBQ1BXLElBQUksRUFBRSxJQUFJOzRCQUNWTyxLQUFLLEVBQUUsSUFBSTt5QkFDWDtxQkFDRDtpQkFDRDthQUNELENBQUM7WUFDRixJQUFJZCxjQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1osT0FBTSxDQUFDLENBQUM7WUFDdERMLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDVSxJQUFJLENBQUNMLGNBQWEsQ0FBQyxDQUFDO1NBQ3BDO0tBQ0QsQ0FBQyxPQUFPZ0IsS0FBSyxFQUFFO1FBQ2Y5QixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xDaEIsT0FBTyxDQUFDQyxHQUFHLENBQUMwQixLQUFLLENBQUMsQ0FBQztLQUNuQixRQUFTO1FBQ1QsTUFBTWpDLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2dldE9yZGVyLnRzeD9hNzA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XG50eXBlIGRhdGFUeXBlID0ge1xuXHRmb3JtSWQ6IHN0cmluZztcblx0c3ViamVjdElkOiBzdHJpbmc7XG5cdHRvcGljSWQ6IHN0cmluZztcblx0Y29udGVudDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcblx0cmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuXHRjb25zdCB7IHVzZXIgfSA9IHJlcS5ib2R5O1xuXHRjb25zb2xlLmxvZyh1c2VyKTtcblx0dHJ5IHtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEub3JkZXIuZmluZE1hbnkoe1xuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0c3RhdHVzOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHNlbGVjdDoge1xuXHRcdFx0XHRpZDogdHJ1ZSxcblx0XHRcdFx0b3JkZXJOdW1iZXI6IHRydWUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRsZXQgc2VhcmNoUmVzdWx0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cblx0XHRpZiAoc2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihzZWFyY2hSZXN1bHRzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLnVzZXJzLmZpbmRNYW55KHtcblx0XHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0XHRuYW1lOiB7XG5cdFx0XHRcdFx0XHRjb250YWluczogdXNlcixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZWxlY3Q6IHtcblx0XHRcdFx0XHRpZDogdHJ1ZSxcblx0XHRcdFx0XHR1c2VybmFtZTogdHJ1ZSxcblx0XHRcdFx0XHRpc0FkbWluOiB0cnVlLFxuXHRcdFx0XHRcdGlzU3VwZXJVc2VyOiB0cnVlLFxuXHRcdFx0XHRcdGltYWdlOiB0cnVlLFxuXHRcdFx0XHRcdG5hbWU6IHRydWUsXG5cdFx0XHRcdFx0dmlmdXJ1c2hpOiB7XG5cdFx0XHRcdFx0XHRzZWxlY3Q6IHtcblx0XHRcdFx0XHRcdFx0bmFtZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cHVyY2hhc2U6IHtcblx0XHRcdFx0XHRcdHNlbGVjdDoge1xuXHRcdFx0XHRcdFx0XHRuYW1lOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0bGV0IHNlYXJjaFJlc3VsdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oc2VhcmNoUmVzdWx0cyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNDA0KS5qc29uKCdOb3QgRm91bmQnKTtcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdH0gZmluYWxseSB7XG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlciIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0Iiwib3JkZXIiLCJmaW5kTWFueSIsIndoZXJlIiwic3RhdHVzIiwic2VsZWN0IiwiaWQiLCJvcmRlck51bWJlciIsImRlc2NyaXB0aW9uIiwic2VhcmNoUmVzdWx0cyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImxlbmd0aCIsImpzb24iLCJ1c2VycyIsIm5hbWUiLCJjb250YWlucyIsInVzZXJuYW1lIiwiaXNBZG1pbiIsImlzU3VwZXJVc2VyIiwiaW1hZ2UiLCJ2aWZ1cnVzaGkiLCJ2YWx1ZSIsInB1cmNoYXNlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getOrder.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getOrder.tsx"));
module.exports = __webpack_exports__;

})();