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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./db/prisma.tsx":
/*!***********************!*\
  !*** ./db/prisma.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9wcmlzbWEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQWN0QyxNQUFNQyxNQUFNLEdBRWpCQyxNQUFNLENBQUNELE1BQU0sSUFFYixJQUFJRCx3REFBWSxDQUFDO0lBRWZHLEdBQUcsRUFBRTtRQUFDLE9BQU87S0FBQztDQUVmLENBQUM7QUFHSixJQUFJQyxJQUFxQyxFQUFFRixNQUFNLENBQUNELE1BQU0sR0FBR0EsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vZGIvcHJpc21hLnRzeD80NDlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5cbmRlY2xhcmUgZ2xvYmFsIHtcblxuICAvLyBhbGxvdyBnbG9iYWwgYHZhcmAgZGVjbGFyYXRpb25zXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxuXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxuXG59XG5cblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG5cbiAgZ2xvYmFsLnByaXNtYSB8fFxuXG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuXG4gICAgbG9nOiBbJ3F1ZXJ5J10sXG5cbiAgfSlcblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYSA9IHByaXNtYSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/prisma.tsx\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].tsx":
/*!******************************************!*\
  !*** ./pages/api/auth/[...nextauth].tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            // The name to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"Credentials\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                const userFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.users.findFirst({\n                    where: {\n                        username: credentials?.username,\n                        password: credentials?.password\n                    },\n                    select: {\n                        id: true,\n                        firstName: true,\n                        lastName: true,\n                        username: true,\n                        isAdmin: true\n                    }\n                });\n                const userfound = await JSON.parse(JSON.stringify(userFromServer));\n                const user = {\n                    id: userfound.id,\n                    name: `${userfound.firstName} ${userfound.lastName}`,\n                    email: userfound.username,\n                    admin: userfound.isAdmin\n                };\n                if (user) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    return user;\n                } else {\n                    // If you return null then an error will be displayed advising the user to check their details.\n                    return null;\n                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter\n                }\n            }\n        }), \n    ],\n    pages: {\n        signIn: \"/Auth/SignIn\"\n    },\n    callbacks: {\n        async session ({ session , user , token  }) {\n            console.log(\"session\", {\n                session,\n                user\n            });\n            return session;\n        },\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            console.log(\"jwt\", {\n                user,\n                token\n            });\n            return token;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUNVO0FBQ3RCO0FBRTVDLGlFQUFlQSxnREFBUSxDQUFDO0lBQ3ZCSSxTQUFTLEVBQUU7UUFDVkgsaUVBQWMsQ0FBQztZQUNkSSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtTQUM5QyxDQUFDO1FBQ0ZSLHNFQUFtQixDQUFDO1lBQ25CLG1FQUFtRTtZQUNuRVMsSUFBSSxFQUFFLGFBQWE7WUFDbkIsMkVBQTJFO1lBQzNFLHFFQUFxRTtZQUNyRSxtREFBbUQ7WUFDbkQseUVBQXlFO1lBQ3pFQyxXQUFXLEVBQUU7Z0JBQ1pDLFFBQVEsRUFBRTtvQkFBRUMsS0FBSyxFQUFFLFVBQVU7b0JBQUVDLElBQUksRUFBRSxNQUFNO29CQUFFQyxXQUFXLEVBQUUsUUFBUTtpQkFBRTtnQkFDcEVDLFFBQVEsRUFBRTtvQkFBRUgsS0FBSyxFQUFFLFVBQVU7b0JBQUVDLElBQUksRUFBRSxVQUFVO2lCQUFFO2FBQ2pEO1lBQ0QsTUFBTUcsU0FBUyxFQUFDTixXQUFXLEVBQUVPLEdBQUcsRUFBRTtnQkFDakMsbUVBQW1FO2dCQUNuRSxNQUFNQyxjQUFjLEdBQUcsTUFBTWpCLDhEQUFzQixDQUFDO29CQUNuRG9CLEtBQUssRUFBRTt3QkFDTlYsUUFBUSxFQUFFRCxXQUFXLEVBQUVDLFFBQVE7d0JBQy9CSSxRQUFRLEVBQUVMLFdBQVcsRUFBRUssUUFBUTtxQkFDL0I7b0JBQ0RPLE1BQU0sRUFBRTt3QkFDUEMsRUFBRSxFQUFFLElBQUk7d0JBQ1JDLFNBQVMsRUFBRSxJQUFJO3dCQUNmQyxRQUFRLEVBQUUsSUFBSTt3QkFDZGQsUUFBUSxFQUFFLElBQUk7d0JBQ2RlLE9BQU8sRUFBRSxJQUFJO3FCQUNiO2lCQUNELENBQUM7Z0JBQ0YsTUFBTUMsU0FBUyxHQUFHLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1osY0FBYyxDQUFDLENBQUM7Z0JBRWxFLE1BQU1hLElBQUksR0FBRztvQkFDWlIsRUFBRSxFQUFFSSxTQUFTLENBQUNKLEVBQUU7b0JBQ2hCZCxJQUFJLEVBQUUsQ0FBQyxFQUFFa0IsU0FBUyxDQUFDSCxTQUFTLENBQUMsQ0FBQyxFQUFFRyxTQUFTLENBQUNGLFFBQVEsQ0FBQyxDQUFDO29CQUNwRE8sS0FBSyxFQUFFTCxTQUFTLENBQUNoQixRQUFRO29CQUN6QnNCLEtBQUssRUFBRU4sU0FBUyxDQUFDRCxPQUFPO2lCQUN4QjtnQkFFRCxJQUFJSyxJQUFJLEVBQUU7b0JBQ1Qsa0VBQWtFO29CQUNsRSxPQUFPQSxJQUFJLENBQUM7aUJBQ1osTUFBTTtvQkFDTiwrRkFBK0Y7b0JBQy9GLE9BQU8sSUFBSSxDQUFDO2dCQUVaLDJJQUEySTtpQkFDM0k7YUFDRDtTQUNELENBQUM7S0FDRjtJQUNERyxLQUFLLEVBQUU7UUFDTkMsTUFBTSxFQUFFLGNBQWM7S0FDdEI7SUFDREMsU0FBUyxFQUFFO1FBQ1YsTUFBTUMsT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRU4sSUFBSSxHQUFFTyxLQUFLLEdBQUUsRUFBRTtZQUN2Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFO2dCQUFFSCxPQUFPO2dCQUFFTixJQUFJO2FBQUUsQ0FBQyxDQUFDO1lBQzFDLE9BQU9NLE9BQU8sQ0FBQztTQUNmO1FBQ0QsTUFBTUksR0FBRyxFQUFDLEVBQUVILEtBQUssR0FBRVAsSUFBSSxHQUFFVyxPQUFPLEdBQUVDLE9BQU8sR0FBRUMsU0FBUyxHQUFFLEVBQUU7WUFDdkRMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFBRVQsSUFBSTtnQkFBRU8sS0FBSzthQUFFLENBQUMsQ0FBQztZQUNwQyxPQUFPQSxLQUFLLENBQUM7U0FDYjtLQUNEO0lBQ0RPLE1BQU0sRUFBRXpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeUMsZUFBZTtDQUNuQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHN4P2MxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi8uLi9kYi9wcmlzbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG5cdHByb3ZpZGVyczogW1xuXHRcdEdvb2dsZVByb3ZpZGVyKHtcblx0XHRcdGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEISxcblx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQhLFxuXHRcdH0pLFxuXHRcdENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuXHRcdFx0Ly8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuIFwiU2lnbiBpbiB3aXRoLi4uXCIpXG5cdFx0XHRuYW1lOiAnQ3JlZGVudGlhbHMnLFxuXHRcdFx0Ly8gVGhlIGNyZWRlbnRpYWxzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgYSBzdWl0YWJsZSBmb3JtIG9uIHRoZSBzaWduIGluIHBhZ2UuXG5cdFx0XHQvLyBZb3UgY2FuIHNwZWNpZnkgd2hhdGV2ZXIgZmllbGRzIHlvdSBhcmUgZXhwZWN0aW5nIHRvIGJlIHN1Ym1pdHRlZC5cblx0XHRcdC8vIGUuZy4gZG9tYWluLCB1c2VybmFtZSwgcGFzc3dvcmQsIDJGQSB0b2tlbiwgZXRjLlxuXHRcdFx0Ly8gWW91IGNhbiBwYXNzIGFueSBIVE1MIGF0dHJpYnV0ZSB0byB0aGUgPGlucHV0PiB0YWcgdGhyb3VnaCB0aGUgb2JqZWN0LlxuXHRcdFx0Y3JlZGVudGlhbHM6IHtcblx0XHRcdFx0dXNlcm5hbWU6IHsgbGFiZWw6ICdVc2VybmFtZScsIHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6ICdqc21pdGgnIH0sXG5cdFx0XHRcdHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcblx0XHRcdFx0Ly8gQWRkIGxvZ2ljIGhlcmUgdG8gbG9vayB1cCB0aGUgdXNlciBmcm9tIHRoZSBjcmVkZW50aWFscyBzdXBwbGllZFxuXHRcdFx0XHRjb25zdCB1c2VyRnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS51c2Vycy5maW5kRmlyc3Qoe1xuXHRcdFx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdFx0XHR1c2VybmFtZTogY3JlZGVudGlhbHM/LnVzZXJuYW1lLFxuXHRcdFx0XHRcdFx0cGFzc3dvcmQ6IGNyZWRlbnRpYWxzPy5wYXNzd29yZCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNlbGVjdDoge1xuXHRcdFx0XHRcdFx0aWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRmaXJzdE5hbWU6IHRydWUsXG5cdFx0XHRcdFx0XHRsYXN0TmFtZTogdHJ1ZSxcblx0XHRcdFx0XHRcdHVzZXJuYW1lOiB0cnVlLFxuXHRcdFx0XHRcdFx0aXNBZG1pbjogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc3QgdXNlcmZvdW5kID0gYXdhaXQgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1c2VyRnJvbVNlcnZlcikpO1xuXG5cdFx0XHRcdGNvbnN0IHVzZXIgPSB7XG5cdFx0XHRcdFx0aWQ6IHVzZXJmb3VuZC5pZCxcblx0XHRcdFx0XHRuYW1lOiBgJHt1c2VyZm91bmQuZmlyc3ROYW1lfSAke3VzZXJmb3VuZC5sYXN0TmFtZX1gLFxuXHRcdFx0XHRcdGVtYWlsOiB1c2VyZm91bmQudXNlcm5hbWUsXG5cdFx0XHRcdFx0YWRtaW46IHVzZXJmb3VuZC5pc0FkbWluLFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGlmICh1c2VyKSB7XG5cdFx0XHRcdFx0Ly8gQW55IG9iamVjdCByZXR1cm5lZCB3aWxsIGJlIHNhdmVkIGluIGB1c2VyYCBwcm9wZXJ0eSBvZiB0aGUgSldUXG5cdFx0XHRcdFx0cmV0dXJuIHVzZXI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gSWYgeW91IHJldHVybiBudWxsIHRoZW4gYW4gZXJyb3Igd2lsbCBiZSBkaXNwbGF5ZWQgYWR2aXNpbmcgdGhlIHVzZXIgdG8gY2hlY2sgdGhlaXIgZGV0YWlscy5cblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0XHRcdC8vIFlvdSBjYW4gYWxzbyBSZWplY3QgdGhpcyBjYWxsYmFjayB3aXRoIGFuIEVycm9yIHRodXMgdGhlIHVzZXIgd2lsbCBiZSBzZW50IHRvIHRoZSBlcnJvciBwYWdlIHdpdGggdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBxdWVyeSBwYXJhbWV0ZXJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KSxcblx0XSxcblx0cGFnZXM6IHtcblx0XHRzaWduSW46ICcvQXV0aC9TaWduSW4nLFxuXHR9LFxuXHRjYWxsYmFja3M6IHtcblx0XHRhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdXNlciwgdG9rZW4gfSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3Nlc3Npb24nLCB7IHNlc3Npb24sIHVzZXIgfSk7XG5cdFx0XHRyZXR1cm4gc2Vzc2lvbjtcblx0XHR9LFxuXHRcdGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIgfSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2p3dCcsIHsgdXNlciwgdG9rZW4gfSk7XG5cdFx0XHRyZXR1cm4gdG9rZW47XG5cdFx0fSxcblx0fSxcblx0c2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByaXNtYSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsInVzZXJGcm9tU2VydmVyIiwidXNlcnMiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInNlbGVjdCIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpc0FkbWluIiwidXNlcmZvdW5kIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidXNlciIsImVtYWlsIiwiYWRtaW4iLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJqd3QiLCJhY2NvdW50IiwicHJvZmlsZSIsImlzTmV3VXNlciIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].tsx"));
module.exports = __webpack_exports__;

})();