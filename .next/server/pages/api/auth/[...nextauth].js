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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "(api)/./components/context/StateContext.tsx":
/*!*********************************************!*\
  !*** ./components/context/StateContext.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavContext\": () => (/* binding */ NavContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NavContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb21wb25lbnRzL2NvbnRleHQvU3RhdGVDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFLL0IsTUFBTUMsVUFBVSxpQkFBR0Qsb0RBQWEsQ0FBYyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vY29tcG9uZW50cy9jb250ZXh0L1N0YXRlQ29udGV4dC50c3g/OGM5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIGRhdGFDb250ZXh0ID0ge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbmV4cG9ydCBjb25zdCBOYXZDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxkYXRhQ29udGV4dD4oe30pOyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiTmF2Q29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./components/context/StateContext.tsx\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../db/prisma */ \"(api)/./db/prisma.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/context/StateContext */ \"(api)/./components/context/StateContext.tsx\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            // The name to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"Credentials\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const { setUserData , userData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_5__.NavContext);\n                // Add logic here to look up the user from the credentials supplied\n                const userFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.users.findFirst({\n                    where: {\n                        username: credentials?.username,\n                        password: credentials?.password\n                    },\n                    select: {\n                        id: true,\n                        firstName: true,\n                        lastName: true,\n                        username: true,\n                        isAdmin: true\n                    }\n                });\n                const userfound = await JSON.parse(JSON.stringify(userFromServer));\n                const user = {\n                    id: userfound.id,\n                    name: `${userfound.firstName} ${userfound.lastName}`,\n                    email: userfound.username,\n                    admin: userfound.isAdmin\n                };\n                if (user) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    setUserData(userfound.isAdmin);\n                    return user;\n                } else {\n                    // If you return null then an error will be displayed advising the user to check their details.\n                    return null;\n                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter\n                }\n            }\n        }), \n    ],\n    pages: {\n        signIn: \"/Auth/SignIn\"\n    },\n    callbacks: {\n        async session ({ session , user , token  }) {\n            console.log(\"session\", {\n                session,\n                user\n            });\n            return session;\n        },\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            console.log(\"jwt\", {\n                user,\n                token\n            });\n            return token;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUNVO0FBQ3RCO0FBQ1Q7QUFDbUM7QUFFdEUsaUVBQWVBLGdEQUFRLENBQUM7SUFDdkJNLFNBQVMsRUFBRTtRQUNWTCxpRUFBYyxDQUFDO1lBQ2RNLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1NBQzlDLENBQUM7UUFDRlYsc0VBQW1CLENBQUM7WUFDbkIsbUVBQW1FO1lBQ25FVyxJQUFJLEVBQUUsYUFBYTtZQUNuQiwyRUFBMkU7WUFDM0UscUVBQXFFO1lBQ3JFLG1EQUFtRDtZQUNuRCx5RUFBeUU7WUFDekVDLFdBQVcsRUFBRTtnQkFDWkMsUUFBUSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsVUFBVTtvQkFBRUMsSUFBSSxFQUFFLE1BQU07b0JBQUVDLFdBQVcsRUFBRSxRQUFRO2lCQUFFO2dCQUNwRUMsUUFBUSxFQUFFO29CQUFFSCxLQUFLLEVBQUUsVUFBVTtvQkFBRUMsSUFBSSxFQUFFLFVBQVU7aUJBQUU7YUFDakQ7WUFDRCxNQUFNRyxTQUFTLEVBQUNOLFdBQVcsRUFBRU8sR0FBRyxFQUFFO2dCQUNqQyxNQUFNLEVBQUVDLFdBQVcsR0FBRUMsUUFBUSxHQUFFLEdBQUduQixpREFBVSxDQUFDQyx3RUFBVSxDQUFDO2dCQUN4RCxtRUFBbUU7Z0JBQ25FLE1BQU1tQixjQUFjLEdBQUcsTUFBTXJCLDhEQUFzQixDQUFDO29CQUNuRHdCLEtBQUssRUFBRTt3QkFDTlosUUFBUSxFQUFFRCxXQUFXLEVBQUVDLFFBQVE7d0JBQy9CSSxRQUFRLEVBQUVMLFdBQVcsRUFBRUssUUFBUTtxQkFDL0I7b0JBQ0RTLE1BQU0sRUFBRTt3QkFDUEMsRUFBRSxFQUFFLElBQUk7d0JBQ1JDLFNBQVMsRUFBRSxJQUFJO3dCQUNmQyxRQUFRLEVBQUUsSUFBSTt3QkFDZGhCLFFBQVEsRUFBRSxJQUFJO3dCQUNkaUIsT0FBTyxFQUFFLElBQUk7cUJBQ2I7aUJBQ0QsQ0FBQztnQkFDRixNQUFNQyxTQUFTLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDWixjQUFjLENBQUMsQ0FBQztnQkFFbEUsTUFBTWEsSUFBSSxHQUFHO29CQUNaUixFQUFFLEVBQUVJLFNBQVMsQ0FBQ0osRUFBRTtvQkFDaEJoQixJQUFJLEVBQUUsQ0FBQyxFQUFFb0IsU0FBUyxDQUFDSCxTQUFTLENBQUMsQ0FBQyxFQUFFRyxTQUFTLENBQUNGLFFBQVEsQ0FBQyxDQUFDO29CQUNwRE8sS0FBSyxFQUFFTCxTQUFTLENBQUNsQixRQUFRO29CQUN6QndCLEtBQUssRUFBRU4sU0FBUyxDQUFDRCxPQUFPO2lCQUN4QjtnQkFFRCxJQUFJSyxJQUFJLEVBQUU7b0JBQ1Qsa0VBQWtFO29CQUNsRWYsV0FBVyxDQUFDVyxTQUFTLENBQUNELE9BQU8sQ0FBQyxDQUFDO29CQUMvQixPQUFPSyxJQUFJLENBQUM7aUJBQ1osTUFBTTtvQkFDTiwrRkFBK0Y7b0JBQy9GLE9BQU8sSUFBSSxDQUFDO2dCQUVaLDJJQUEySTtpQkFDM0k7YUFDRDtTQUNELENBQUM7S0FDRjtJQUNERyxLQUFLLEVBQUU7UUFDTkMsTUFBTSxFQUFFLGNBQWM7S0FDdEI7SUFDREMsU0FBUyxFQUFFO1FBQ1YsTUFBTUMsT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRU4sSUFBSSxHQUFFTyxLQUFLLEdBQUUsRUFBRTtZQUN2Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFO2dCQUFFSCxPQUFPO2dCQUFFTixJQUFJO2FBQUUsQ0FBQyxDQUFDO1lBQzFDLE9BQU9NLE9BQU8sQ0FBQztTQUNmO1FBQ0QsTUFBTUksR0FBRyxFQUFDLEVBQUVILEtBQUssR0FBRVAsSUFBSSxHQUFFVyxPQUFPLEdBQUVDLE9BQU8sR0FBRUMsU0FBUyxHQUFFLEVBQUU7WUFDdkRMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFBRVQsSUFBSTtnQkFBRU8sS0FBSzthQUFFLENBQUMsQ0FBQztZQUNwQyxPQUFPQSxLQUFLLENBQUM7U0FDYjtLQUNEO0lBQ0RPLE1BQU0sRUFBRTNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMkMsZUFBZTtDQUNuQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHN4P2MxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi8uLi9kYi9wcmlzbWEnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbnRleHQvU3RhdGVDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuXHRwcm92aWRlcnM6IFtcblx0XHRHb29nbGVQcm92aWRlcih7XG5cdFx0XHRjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXG5cdFx0XHRjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcblx0XHR9KSxcblx0XHRDcmVkZW50aWFsc1Byb3ZpZGVyKHtcblx0XHRcdC8vIFRoZSBuYW1lIHRvIGRpc3BsYXkgb24gdGhlIHNpZ24gaW4gZm9ybSAoZS5nLiBcIlNpZ24gaW4gd2l0aC4uLlwiKVxuXHRcdFx0bmFtZTogJ0NyZWRlbnRpYWxzJyxcblx0XHRcdC8vIFRoZSBjcmVkZW50aWFscyBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgc3VpdGFibGUgZm9ybSBvbiB0aGUgc2lnbiBpbiBwYWdlLlxuXHRcdFx0Ly8gWW91IGNhbiBzcGVjaWZ5IHdoYXRldmVyIGZpZWxkcyB5b3UgYXJlIGV4cGVjdGluZyB0byBiZSBzdWJtaXR0ZWQuXG5cdFx0XHQvLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cblx0XHRcdC8vIFlvdSBjYW4gcGFzcyBhbnkgSFRNTCBhdHRyaWJ1dGUgdG8gdGhlIDxpbnB1dD4gdGFnIHRocm91Z2ggdGhlIG9iamVjdC5cblx0XHRcdGNyZWRlbnRpYWxzOiB7XG5cdFx0XHRcdHVzZXJuYW1lOiB7IGxhYmVsOiAnVXNlcm5hbWUnLCB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiAnanNtaXRoJyB9LFxuXHRcdFx0XHRwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9LFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XG5cdFx0XHRcdGNvbnN0IHsgc2V0VXNlckRhdGEsIHVzZXJEYXRhIH0gPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xuXHRcdFx0XHQvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXG5cdFx0XHRcdGNvbnN0IHVzZXJGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLnVzZXJzLmZpbmRGaXJzdCh7XG5cdFx0XHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0XHRcdHVzZXJuYW1lOiBjcmVkZW50aWFscz8udXNlcm5hbWUsXG5cdFx0XHRcdFx0XHRwYXNzd29yZDogY3JlZGVudGlhbHM/LnBhc3N3b3JkLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2VsZWN0OiB7XG5cdFx0XHRcdFx0XHRpZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGZpcnN0TmFtZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGxhc3ROYW1lOiB0cnVlLFxuXHRcdFx0XHRcdFx0dXNlcm5hbWU6IHRydWUsXG5cdFx0XHRcdFx0XHRpc0FkbWluOiB0cnVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zdCB1c2VyZm91bmQgPSBhd2FpdCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXJGcm9tU2VydmVyKSk7XG5cblx0XHRcdFx0Y29uc3QgdXNlciA9IHtcblx0XHRcdFx0XHRpZDogdXNlcmZvdW5kLmlkLFxuXHRcdFx0XHRcdG5hbWU6IGAke3VzZXJmb3VuZC5maXJzdE5hbWV9ICR7dXNlcmZvdW5kLmxhc3ROYW1lfWAsXG5cdFx0XHRcdFx0ZW1haWw6IHVzZXJmb3VuZC51c2VybmFtZSxcblx0XHRcdFx0XHRhZG1pbjogdXNlcmZvdW5kLmlzQWRtaW4sXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0aWYgKHVzZXIpIHtcblx0XHRcdFx0XHQvLyBBbnkgb2JqZWN0IHJldHVybmVkIHdpbGwgYmUgc2F2ZWQgaW4gYHVzZXJgIHByb3BlcnR5IG9mIHRoZSBKV1Rcblx0XHRcdFx0XHRzZXRVc2VyRGF0YSh1c2VyZm91bmQuaXNBZG1pbik7XG5cdFx0XHRcdFx0cmV0dXJuIHVzZXI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gSWYgeW91IHJldHVybiBudWxsIHRoZW4gYW4gZXJyb3Igd2lsbCBiZSBkaXNwbGF5ZWQgYWR2aXNpbmcgdGhlIHVzZXIgdG8gY2hlY2sgdGhlaXIgZGV0YWlscy5cblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0XHRcdC8vIFlvdSBjYW4gYWxzbyBSZWplY3QgdGhpcyBjYWxsYmFjayB3aXRoIGFuIEVycm9yIHRodXMgdGhlIHVzZXIgd2lsbCBiZSBzZW50IHRvIHRoZSBlcnJvciBwYWdlIHdpdGggdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBxdWVyeSBwYXJhbWV0ZXJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KSxcblx0XSxcblx0cGFnZXM6IHtcblx0XHRzaWduSW46ICcvQXV0aC9TaWduSW4nLFxuXHR9LFxuXHRjYWxsYmFja3M6IHtcblx0XHRhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdXNlciwgdG9rZW4gfSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3Nlc3Npb24nLCB7IHNlc3Npb24sIHVzZXIgfSk7XG5cdFx0XHRyZXR1cm4gc2Vzc2lvbjtcblx0XHR9LFxuXHRcdGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIgfSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2p3dCcsIHsgdXNlciwgdG9rZW4gfSk7XG5cdFx0XHRyZXR1cm4gdG9rZW47XG5cdFx0fSxcblx0fSxcblx0c2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByaXNtYSIsInVzZUNvbnRleHQiLCJOYXZDb250ZXh0IiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwibmFtZSIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwic2V0VXNlckRhdGEiLCJ1c2VyRGF0YSIsInVzZXJGcm9tU2VydmVyIiwidXNlcnMiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInNlbGVjdCIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpc0FkbWluIiwidXNlcmZvdW5kIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidXNlciIsImVtYWlsIiwiYWRtaW4iLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJqd3QiLCJhY2NvdW50IiwicHJvZmlsZSIsImlzTmV3VXNlciIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].tsx\n");

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