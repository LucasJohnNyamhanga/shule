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
exports.id = "pages/api/getAdmins";
exports.ids = ["pages/api/getAdmins"];
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

/***/ "(api)/./pages/api/getAdmins.tsx":
/*!*********************************!*\
  !*** ./pages/api/getAdmins.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { user  } = req.body;\n    console.log(user);\n    try {\n        const result = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.users.findMany({\n            where: {\n                isAdmin: true\n            },\n            select: {\n                id: true,\n                username: true,\n                name: true\n            }\n        });\n        let searchResults = JSON.parse(JSON.stringify(result));\n        if (searchResults.length > 0) {\n            res.status(200).json(searchResults);\n        } else {\n            const result1 = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.users.findMany({\n                where: {\n                    name: {\n                        contains: user\n                    }\n                },\n                select: {\n                    id: true,\n                    username: true,\n                    isAdmin: true,\n                    isSuperUser: true,\n                    image: true,\n                    name: true,\n                    vifurushi: {\n                        select: {\n                            name: true,\n                            value: true\n                        }\n                    },\n                    purchase: {\n                        select: {\n                            name: true,\n                            value: true\n                        }\n                    }\n                }\n            });\n            let searchResults1 = JSON.parse(JSON.stringify(result1));\n            res.status(200).json(searchResults1);\n        }\n    } catch (error) {\n        res.status(404).json(\"Not Found\");\n        console.log(error);\n    } finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0QWRtaW5zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQVExQixlQUFlQyxPQUFPLENBQ3BDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDbkI7SUFDRCxNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUMsQ0FBQztJQUNsQixJQUFJO1FBQ0gsTUFBTUksTUFBTSxHQUFHLE1BQU1SLDZEQUFxQixDQUFDO1lBQzFDVyxLQUFLLEVBQUU7Z0JBQ05DLE9BQU8sRUFBRSxJQUFJO2FBQ2I7WUFDREMsTUFBTSxFQUFFO2dCQUNQQyxFQUFFLEVBQUUsSUFBSTtnQkFDUkMsUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLElBQUksRUFBRSxJQUFJO2FBQ1Y7U0FDRCxDQUFDO1FBQ0YsSUFBSUMsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNaLE1BQU0sQ0FBQyxDQUFDO1FBRXRELElBQUlTLGFBQWEsQ0FBQ0ksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QmxCLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTixhQUFhLENBQUMsQ0FBQztTQUNwQyxNQUFNO1lBQ04sTUFBTVQsT0FBTSxHQUFHLE1BQU1SLDZEQUFxQixDQUFDO2dCQUMxQ1csS0FBSyxFQUFFO29CQUNOSyxJQUFJLEVBQUU7d0JBQ0xRLFFBQVEsRUFBRXBCLElBQUk7cUJBQ2Q7aUJBQ0Q7Z0JBQ0RTLE1BQU0sRUFBRTtvQkFDUEMsRUFBRSxFQUFFLElBQUk7b0JBQ1JDLFFBQVEsRUFBRSxJQUFJO29CQUNkSCxPQUFPLEVBQUUsSUFBSTtvQkFDYmEsV0FBVyxFQUFFLElBQUk7b0JBQ2pCQyxLQUFLLEVBQUUsSUFBSTtvQkFDWFYsSUFBSSxFQUFFLElBQUk7b0JBQ1ZXLFNBQVMsRUFBRTt3QkFDVmQsTUFBTSxFQUFFOzRCQUNQRyxJQUFJLEVBQUUsSUFBSTs0QkFDVlksS0FBSyxFQUFFLElBQUk7eUJBQ1g7cUJBQ0Q7b0JBQ0RDLFFBQVEsRUFBRTt3QkFDVGhCLE1BQU0sRUFBRTs0QkFDUEcsSUFBSSxFQUFFLElBQUk7NEJBQ1ZZLEtBQUssRUFBRSxJQUFJO3lCQUNYO3FCQUNEO2lCQUNEO2FBQ0QsQ0FBQztZQUNGLElBQUlYLGNBQWEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDWixPQUFNLENBQUMsQ0FBQztZQUN0REwsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNOLGNBQWEsQ0FBQyxDQUFDO1NBQ3BDO0tBQ0QsQ0FBQyxPQUFPYSxLQUFLLEVBQUU7UUFDZjNCLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xDakIsT0FBTyxDQUFDQyxHQUFHLENBQUN1QixLQUFLLENBQUMsQ0FBQztLQUNuQixRQUFTO1FBQ1QsTUFBTTlCLDBEQUFrQixFQUFFLENBQUM7S0FDM0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL2dldEFkbWlucy50c3g/ZmQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xudHlwZSBkYXRhVHlwZSA9IHtcblx0Zm9ybUlkOiBzdHJpbmc7XG5cdHN1YmplY3RJZDogc3RyaW5nO1xuXHR0b3BpY0lkOiBzdHJpbmc7XG5cdGNvbnRlbnQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG5cdHJlcTogTmV4dEFwaVJlcXVlc3QsXG5cdHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcblx0Y29uc3QgeyB1c2VyIH0gPSByZXEuYm9keTtcblx0Y29uc29sZS5sb2codXNlcik7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLnVzZXJzLmZpbmRNYW55KHtcblx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdGlzQWRtaW46IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0c2VsZWN0OiB7XG5cdFx0XHRcdGlkOiB0cnVlLFxuXHRcdFx0XHR1c2VybmFtZTogdHJ1ZSxcblx0XHRcdFx0bmFtZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0bGV0IHNlYXJjaFJlc3VsdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXG5cdFx0aWYgKHNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oc2VhcmNoUmVzdWx0cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS51c2Vycy5maW5kTWFueSh7XG5cdFx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdFx0bmFtZToge1xuXHRcdFx0XHRcdFx0Y29udGFpbnM6IHVzZXIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c2VsZWN0OiB7XG5cdFx0XHRcdFx0aWQ6IHRydWUsXG5cdFx0XHRcdFx0dXNlcm5hbWU6IHRydWUsXG5cdFx0XHRcdFx0aXNBZG1pbjogdHJ1ZSxcblx0XHRcdFx0XHRpc1N1cGVyVXNlcjogdHJ1ZSxcblx0XHRcdFx0XHRpbWFnZTogdHJ1ZSxcblx0XHRcdFx0XHRuYW1lOiB0cnVlLFxuXHRcdFx0XHRcdHZpZnVydXNoaToge1xuXHRcdFx0XHRcdFx0c2VsZWN0OiB7XG5cdFx0XHRcdFx0XHRcdG5hbWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHB1cmNoYXNlOiB7XG5cdFx0XHRcdFx0XHRzZWxlY3Q6IHtcblx0XHRcdFx0XHRcdFx0bmFtZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGxldCBzZWFyY2hSZXN1bHRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHNlYXJjaFJlc3VsdHMpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDQwNCkuanNvbignTm90IEZvdW5kJyk7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHR9IGZpbmFsbHkge1xuXHRcdGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuXHR9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXIiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInVzZXJzIiwiZmluZE1hbnkiLCJ3aGVyZSIsImlzQWRtaW4iLCJzZWxlY3QiLCJpZCIsInVzZXJuYW1lIiwibmFtZSIsInNlYXJjaFJlc3VsdHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwiY29udGFpbnMiLCJpc1N1cGVyVXNlciIsImltYWdlIiwidmlmdXJ1c2hpIiwidmFsdWUiLCJwdXJjaGFzZSIsImVycm9yIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getAdmins.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getAdmins.tsx"));
module.exports = __webpack_exports__;

})();