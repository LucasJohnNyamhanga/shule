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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { user  } = req.body;\n    console.log(user);\n    try {\n        const result = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.order.findMany({\n            where: {\n                status: true\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            },\n            select: {\n                id: true,\n                orderNumber: true,\n                description: true,\n                createdAt: true,\n                status: true\n            }\n        });\n        let searchResults = JSON.parse(JSON.stringify(result));\n        if (searchResults.length > 0) {\n            res.status(200).json(searchResults);\n        } else {\n            const result1 = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.users.findMany({\n                where: {\n                    name: {\n                        contains: user\n                    }\n                },\n                select: {\n                    id: true,\n                    username: true,\n                    isAdmin: true,\n                    isSuperUser: true,\n                    image: true,\n                    name: true,\n                    vifurushi: {\n                        select: {\n                            name: true,\n                            value: true\n                        }\n                    },\n                    purchase: {\n                        select: {\n                            name: true,\n                            value: true\n                        }\n                    }\n                }\n            });\n            let searchResults1 = JSON.parse(JSON.stringify(result1));\n            res.status(200).json(searchResults1);\n        }\n    } catch (error) {\n        res.status(404).json(\"Not Found\");\n        console.log(error);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0T3JkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXlDO0FBUTFCLGVBQWVDLE9BQU8sQ0FDcENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNuQjtJQUNELE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO0lBQ2xCLElBQUk7UUFDSCxNQUFNSSxNQUFNLEdBQUcsTUFBTVIsNkRBQXFCLENBQUM7WUFDMUNXLEtBQUssRUFBRTtnQkFDTkMsTUFBTSxFQUFFLElBQUk7YUFDWjtZQUNEQyxPQUFPLEVBQUU7Z0JBQ1JDLFNBQVMsRUFBRSxNQUFNO2FBQ2pCO1lBQ0RDLE1BQU0sRUFBRTtnQkFDUEMsRUFBRSxFQUFFLElBQUk7Z0JBQ1JDLFdBQVcsRUFBRSxJQUFJO2dCQUNqQkMsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCSixTQUFTLEVBQUUsSUFBSTtnQkFDZkYsTUFBTSxFQUFFLElBQUk7YUFDWjtTQUNELENBQUM7UUFDRixJQUFJTyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ2QsTUFBTSxDQUFDLENBQUM7UUFFdEQsSUFBSVcsYUFBYSxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCcEIsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNZLElBQUksQ0FBQ0wsYUFBYSxDQUFDLENBQUM7U0FDcEMsTUFBTTtZQUNOLE1BQU1YLE9BQU0sR0FBRyxNQUFNUiw2REFBcUIsQ0FBQztnQkFDMUNXLEtBQUssRUFBRTtvQkFDTmUsSUFBSSxFQUFFO3dCQUNMQyxRQUFRLEVBQUV2QixJQUFJO3FCQUNkO2lCQUNEO2dCQUNEVyxNQUFNLEVBQUU7b0JBQ1BDLEVBQUUsRUFBRSxJQUFJO29CQUNSWSxRQUFRLEVBQUUsSUFBSTtvQkFDZEMsT0FBTyxFQUFFLElBQUk7b0JBQ2JDLFdBQVcsRUFBRSxJQUFJO29CQUNqQkMsS0FBSyxFQUFFLElBQUk7b0JBQ1hMLElBQUksRUFBRSxJQUFJO29CQUNWTSxTQUFTLEVBQUU7d0JBQ1ZqQixNQUFNLEVBQUU7NEJBQ1BXLElBQUksRUFBRSxJQUFJOzRCQUNWTyxLQUFLLEVBQUUsSUFBSTt5QkFDWDtxQkFDRDtvQkFDREMsUUFBUSxFQUFFO3dCQUNUbkIsTUFBTSxFQUFFOzRCQUNQVyxJQUFJLEVBQUUsSUFBSTs0QkFDVk8sS0FBSyxFQUFFLElBQUk7eUJBQ1g7cUJBQ0Q7aUJBQ0Q7YUFDRCxDQUFDO1lBQ0YsSUFBSWQsY0FBYSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNkLE9BQU0sQ0FBQyxDQUFDO1lBQ3RETCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1ksSUFBSSxDQUFDTCxjQUFhLENBQUMsQ0FBQztTQUNwQztLQUNELENBQUMsT0FBT2dCLEtBQUssRUFBRTtRQUNmaEMsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNZLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQ2xCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNEIsS0FBSyxDQUFDLENBQUM7S0FDbkIsUUFBUztRQUNULE1BQU1uQywwREFBa0IsRUFBRSxDQUFDO0tBQzNCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9nZXRPcmRlci50c3g/YTcwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xudHlwZSBkYXRhVHlwZSA9IHtcblx0Zm9ybUlkOiBzdHJpbmc7XG5cdHN1YmplY3RJZDogc3RyaW5nO1xuXHR0b3BpY0lkOiBzdHJpbmc7XG5cdGNvbnRlbnQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG5cdHJlcTogTmV4dEFwaVJlcXVlc3QsXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcblx0Y29uc3QgeyB1c2VyIH0gPSByZXEuYm9keTtcblx0Y29uc29sZS5sb2codXNlcik7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLm9yZGVyLmZpbmRNYW55KHtcblx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdHN0YXR1czogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHRvcmRlckJ5OiB7XG5cdFx0XHRcdGNyZWF0ZWRBdDogJ2Rlc2MnLFxuXHRcdFx0fSxcblx0XHRcdHNlbGVjdDoge1xuXHRcdFx0XHRpZDogdHJ1ZSxcblx0XHRcdFx0b3JkZXJOdW1iZXI6IHRydWUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiB0cnVlLFxuXHRcdFx0XHRjcmVhdGVkQXQ6IHRydWUsXG5cdFx0XHRcdHN0YXR1czogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0bGV0IHNlYXJjaFJlc3VsdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXG5cdFx0aWYgKHNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oc2VhcmNoUmVzdWx0cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS51c2Vycy5maW5kTWFueSh7XG5cdFx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdFx0bmFtZToge1xuXHRcdFx0XHRcdFx0Y29udGFpbnM6IHVzZXIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c2VsZWN0OiB7XG5cdFx0XHRcdFx0aWQ6IHRydWUsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IHRydWUsXG5cdFx0XHRcdFx0aXNBZG1pbjogdHJ1ZSxcblx0XHRcdFx0XHRpc1N1cGVyVXNlcjogdHJ1ZSxcblx0XHRcdFx0XHRpbWFnZTogdHJ1ZSxcblx0XHRcdFx0XHRuYW1lOiB0cnVlLFxuXHRcdFx0XHRcdHZpZnVydXNoaToge1xuXHRcdFx0XHRcdFx0c2VsZWN0OiB7XG5cdFx0XHRcdFx0XHRcdG5hbWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHB1cmNoYXNlOiB7XG5cdFx0XHRcdFx0XHRzZWxlY3Q6IHtcblx0XHRcdFx0XHRcdFx0bmFtZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGxldCBzZWFyY2hSZXN1bHRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHNlYXJjaFJlc3VsdHMpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDQwNCkuanNvbignTm90IEZvdW5kJyk7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHR9IGZpbmFsbHkge1xuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuXHR9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXIiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsIm9yZGVyIiwiZmluZE1hbnkiLCJ3aGVyZSIsInN0YXR1cyIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJzZWxlY3QiLCJpZCIsIm9yZGVyTnVtYmVyIiwiZGVzY3JpcHRpb24iLCJzZWFyY2hSZXN1bHRzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibGVuZ3RoIiwianNvbiIsInVzZXJzIiwibmFtZSIsImNvbnRhaW5zIiwidXNlcm5hbWUiLCJpc0FkbWluIiwiaXNTdXBlclVzZXIiLCJpbWFnZSIsInZpZnVydXNoaSIsInZhbHVlIiwicHVyY2hhc2UiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getOrder.tsx\n");

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