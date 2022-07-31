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
exports.id = "pages/api/searchUser";
exports.ids = ["pages/api/searchUser"];
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

/***/ "(api)/./pages/api/searchUser.tsx":
/*!**********************************!*\
  !*** ./pages/api/searchUser.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { user  } = req.body;\n    console.log(user);\n    try {\n        const result = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.users.findMany({\n            where: {\n                username: {\n                    contains: user\n                }\n            },\n            select: {\n                id: true,\n                username: true,\n                isAdmin: true,\n                isSuperUser: true,\n                image: true,\n                name: true,\n                vifurushi: {\n                    select: {\n                        name: true,\n                        value: true\n                    }\n                },\n                purchase: {\n                    select: {\n                        name: true,\n                        value: true\n                    }\n                }\n            }\n        });\n        let searchResults = JSON.parse(JSON.stringify(result));\n        if (searchResults.length > 0) {\n            res.status(200).json(searchResults);\n        } else {\n            const result1 = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.users.findMany({\n                where: {\n                    name: {\n                        contains: user\n                    }\n                },\n                select: {\n                    id: true,\n                    username: true,\n                    name: true\n                }\n            });\n            let searchResults1 = JSON.parse(JSON.stringify(result1));\n            res.status(200).json(searchResults1);\n        }\n    } catch (error) {\n        res.status(404).json(\"Not Found\");\n        console.log(error);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoVXNlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUM7QUFRMUIsZUFBZUMsT0FBTyxDQUNwQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ25CO0lBQ0QsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7SUFDbEIsSUFBSTtRQUNILE1BQU1JLE1BQU0sR0FBRyxNQUFNUiw2REFBcUIsQ0FBQztZQUMxQ1csS0FBSyxFQUFFO2dCQUNOQyxRQUFRLEVBQUU7b0JBQ1RDLFFBQVEsRUFBRVQsSUFBSTtpQkFDZDthQUNEO1lBQ0RVLE1BQU0sRUFBRTtnQkFDUEMsRUFBRSxFQUFFLElBQUk7Z0JBQ1JILFFBQVEsRUFBRSxJQUFJO2dCQUNkSSxPQUFPLEVBQUUsSUFBSTtnQkFDYkMsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCQyxLQUFLLEVBQUUsSUFBSTtnQkFDWEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1ZDLFNBQVMsRUFBRTtvQkFDVk4sTUFBTSxFQUFFO3dCQUNQSyxJQUFJLEVBQUUsSUFBSTt3QkFDVkUsS0FBSyxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Q7Z0JBQ0RDLFFBQVEsRUFBRTtvQkFDVFIsTUFBTSxFQUFFO3dCQUNQSyxJQUFJLEVBQUUsSUFBSTt3QkFDVkUsS0FBSyxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Q7YUFDRDtTQUNELENBQUM7UUFDRixJQUFJRSxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ2xCLE1BQU0sQ0FBQyxDQUFDO1FBRXRELElBQUllLGFBQWEsQ0FBQ0ksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QnhCLEdBQUcsQ0FBQ3lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTixhQUFhLENBQUMsQ0FBQztTQUNwQyxNQUFNO1lBQ04sTUFBTWYsT0FBTSxHQUFHLE1BQU1SLDZEQUFxQixDQUFDO2dCQUMxQ1csS0FBSyxFQUFFO29CQUNOUSxJQUFJLEVBQUU7d0JBQ0xOLFFBQVEsRUFBRVQsSUFBSTtxQkFDZDtpQkFDRDtnQkFDRFUsTUFBTSxFQUFFO29CQUNQQyxFQUFFLEVBQUUsSUFBSTtvQkFDUkgsUUFBUSxFQUFFLElBQUk7b0JBQ2RPLElBQUksRUFBRSxJQUFJO2lCQUNWO2FBQ0QsQ0FBQztZQUNGLElBQUlJLGNBQWEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDbEIsT0FBTSxDQUFDLENBQUM7WUFDdERMLEdBQUcsQ0FBQ3lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTixjQUFhLENBQUMsQ0FBQztTQUNwQztLQUNELENBQUMsT0FBT08sS0FBSyxFQUFFO1FBQ2YzQixHQUFHLENBQUN5QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQ3ZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdUIsS0FBSyxDQUFDLENBQUM7S0FDbkIsUUFBUztRQUNULE1BQU05QiwwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9zZWFyY2hVc2VyLnRzeD83NTFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uL2RiL3ByaXNtYSc7XG50eXBlIGRhdGFUeXBlID0ge1xuXHRmb3JtSWQ6IHN0cmluZztcblx0c3ViamVjdElkOiBzdHJpbmc7XG5cdHRvcGljSWQ6IHN0cmluZztcblx0Y29udGVudDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcblx0cmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuXHRjb25zdCB7IHVzZXIgfSA9IHJlcS5ib2R5O1xuXHRjb25zb2xlLmxvZyh1c2VyKTtcblx0dHJ5IHtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEudXNlcnMuZmluZE1hbnkoe1xuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0dXNlcm5hbWU6IHtcblx0XHRcdFx0XHRjb250YWluczogdXNlcixcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzZWxlY3Q6IHtcblx0XHRcdFx0aWQ6IHRydWUsXG5cdFx0XHRcdHVzZXJuYW1lOiB0cnVlLFxuXHRcdFx0XHRpc0FkbWluOiB0cnVlLFxuXHRcdFx0XHRpc1N1cGVyVXNlcjogdHJ1ZSxcblx0XHRcdFx0aW1hZ2U6IHRydWUsXG5cdFx0XHRcdG5hbWU6IHRydWUsXG5cdFx0XHRcdHZpZnVydXNoaToge1xuXHRcdFx0XHRcdHNlbGVjdDoge1xuXHRcdFx0XHRcdFx0bmFtZTogdHJ1ZSxcblx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHB1cmNoYXNlOiB7XG5cdFx0XHRcdFx0c2VsZWN0OiB7XG5cdFx0XHRcdFx0XHRuYW1lOiB0cnVlLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0bGV0IHNlYXJjaFJlc3VsdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXG5cdFx0aWYgKHNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oc2VhcmNoUmVzdWx0cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS51c2Vycy5maW5kTWFueSh7XG5cdFx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdFx0bmFtZToge1xuXHRcdFx0XHRcdFx0Y29udGFpbnM6IHVzZXIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c2VsZWN0OiB7XG5cdFx0XHRcdFx0aWQ6IHRydWUsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IHRydWUsXG5cdFx0XHRcdFx0bmFtZTogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0bGV0IHNlYXJjaFJlc3VsdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oc2VhcmNoUmVzdWx0cyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNDA0KS5qc29uKCdOb3QgRm91bmQnKTtcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdH0gZmluYWxseSB7XG5cdFx0YXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlciIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwidXNlcnMiLCJmaW5kTWFueSIsIndoZXJlIiwidXNlcm5hbWUiLCJjb250YWlucyIsInNlbGVjdCIsImlkIiwiaXNBZG1pbiIsImlzU3VwZXJVc2VyIiwiaW1hZ2UiLCJuYW1lIiwidmlmdXJ1c2hpIiwidmFsdWUiLCJwdXJjaGFzZSIsInNlYXJjaFJlc3VsdHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/searchUser.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/searchUser.tsx"));
module.exports = __webpack_exports__;

})();