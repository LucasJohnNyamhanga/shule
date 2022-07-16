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
exports.id = "pages/api/createUser";
exports.ids = ["pages/api/createUser"];
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

/***/ "(api)/./pages/api/createUser.tsx":
/*!**********************************!*\
  !*** ./pages/api/createUser.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { name , image , username , password  } = req.body;\n    try {\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.users.create({\n            data: {\n                name,\n                image,\n                username,\n                password,\n                vifurushi: {\n                    create: [\n                        {\n                            name: \"notesDownload\",\n                            value: 0\n                        },\n                        {\n                            name: \"quizExcercises\",\n                            value: 0\n                        },\n                        {\n                            name: \"examsUnsolvedDownload\",\n                            value: 0\n                        },\n                        {\n                            name: \"examsSolvedDownload\",\n                            value: 0\n                        },\n                        {\n                            name: \"examAccess\",\n                            value: 0\n                        },\n                        {\n                            name: \"booksDownload\",\n                            value: 0\n                        }, \n                    ]\n                }\n            }\n        });\n        res.status(200).json({\n            message: \"Account Successful Created.\",\n            type: \"success\"\n        });\n    } catch (error) {\n        console.log(error);\n        res.status(200).json({\n            message: \"Error writting to database\",\n            type: \"error\"\n        });\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlVXNlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUM7QUFFMUIsZUFBZUMsT0FBTyxDQUNwQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ25CO0lBQ0QsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUUsR0FBR0wsR0FBRyxDQUFDTSxJQUFJO0lBQ3BELElBQUk7UUFDSCxNQUFNUiwyREFBbUIsQ0FBQztZQUN6QlcsSUFBSSxFQUFFO2dCQUNMUCxJQUFJO2dCQUNKQyxLQUFLO2dCQUNMQyxRQUFRO2dCQUNSQyxRQUFRO2dCQUNSSyxTQUFTLEVBQUU7b0JBQ1ZGLE1BQU0sRUFBRTt3QkFDUDs0QkFBRU4sSUFBSSxFQUFFLGVBQWU7NEJBQUVTLEtBQUssRUFBRSxDQUFDO3lCQUFFO3dCQUNuQzs0QkFBRVQsSUFBSSxFQUFFLGdCQUFnQjs0QkFBRVMsS0FBSyxFQUFFLENBQUM7eUJBQUU7d0JBQ3BDOzRCQUFFVCxJQUFJLEVBQUUsdUJBQXVCOzRCQUFFUyxLQUFLLEVBQUUsQ0FBQzt5QkFBRTt3QkFDM0M7NEJBQUVULElBQUksRUFBRSxxQkFBcUI7NEJBQUVTLEtBQUssRUFBRSxDQUFDO3lCQUFFO3dCQUN6Qzs0QkFBRVQsSUFBSSxFQUFFLFlBQVk7NEJBQUVTLEtBQUssRUFBRSxDQUFDO3lCQUFFO3dCQUNoQzs0QkFBRVQsSUFBSSxFQUFFLGVBQWU7NEJBQUVTLEtBQUssRUFBRSxDQUFDO3lCQUFFO3FCQUNuQztpQkFDRDthQUNEO1NBQ0QsQ0FBQyxDQUFDO1FBQ0hWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJDLE9BQU8sRUFBRSw2QkFBNkI7WUFDdENDLElBQUksRUFBRSxTQUFTO1NBQ2YsQ0FBQyxDQUFDO0tBQ0gsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1FBQ25CZixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCQyxPQUFPLEVBQUUsNEJBQTRCO1lBQ3JDQyxJQUFJLEVBQUUsT0FBTztTQUNiLENBQUMsQ0FBQztLQUNILFFBQVM7UUFDVCxNQUFNakIsMERBQWtCLEVBQUUsQ0FBQztLQUMzQjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2h1bGUvLi9wYWdlcy9hcGkvY3JlYXRlVXNlci50c3g/Yjg1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcblx0cmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuXHRyZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuXHRjb25zdCB7IG5hbWUsIGltYWdlLCB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBwcmlzbWEudXNlcnMuY3JlYXRlKHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0aW1hZ2UsXHJcblx0XHRcdFx0dXNlcm5hbWUsXHJcblx0XHRcdFx0cGFzc3dvcmQsXHJcblx0XHRcdFx0dmlmdXJ1c2hpOiB7XHJcblx0XHRcdFx0XHRjcmVhdGU6IFtcclxuXHRcdFx0XHRcdFx0eyBuYW1lOiAnbm90ZXNEb3dubG9hZCcsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFx0XHRcdHsgbmFtZTogJ3F1aXpFeGNlcmNpc2VzJywgdmFsdWU6IDAgfSxcclxuXHRcdFx0XHRcdFx0eyBuYW1lOiAnZXhhbXNVbnNvbHZlZERvd25sb2FkJywgdmFsdWU6IDAgfSxcclxuXHRcdFx0XHRcdFx0eyBuYW1lOiAnZXhhbXNTb2x2ZWREb3dubG9hZCcsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFx0XHRcdHsgbmFtZTogJ2V4YW1BY2Nlc3MnLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcdFx0XHR7IG5hbWU6ICdib29rc0Rvd25sb2FkJywgdmFsdWU6IDAgfSxcclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG5cdFx0XHRtZXNzYWdlOiAnQWNjb3VudCBTdWNjZXNzZnVsIENyZWF0ZWQuJyxcclxuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogJ0Vycm9yIHdyaXR0aW5nIHRvIGRhdGFiYXNlJyxcclxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdH0pO1xyXG5cdH0gZmluYWxseSB7XHJcblx0XHRhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiaW1hZ2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInVzZXJzIiwiY3JlYXRlIiwiZGF0YSIsInZpZnVydXNoaSIsInZhbHVlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/createUser.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createUser.tsx"));
module.exports = __webpack_exports__;

})();