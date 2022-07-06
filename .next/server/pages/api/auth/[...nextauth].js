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

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../db/prisma */ \"(api)/./db/prisma.tsx\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            // The name to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"Credentials\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                const userFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.users.findFirst({\n                    where: {\n                        username: credentials?.username\n                    },\n                    select: {\n                        id: true,\n                        name: true,\n                        username: true,\n                        password: true\n                    }\n                });\n                const userfound = await JSON.parse(JSON.stringify(userFromServer));\n                let comaparison = await bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials.password, userfound.password);\n                if (comaparison) {\n                    const user = {\n                        id: userfound.id,\n                        name: `${userfound.name}`,\n                        email: userfound.username,\n                        image: \"\"\n                    };\n                    // Any object returned will be saved in `user` property of the JWT\n                    return user;\n                } else {\n                    // If you return null then an error will be displayed advising the user to check their details.\n                    return null;\n                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter\n                }\n            }\n        }), \n    ],\n    pages: {\n        signIn: \"/Auth/SignIn\"\n    },\n    callbacks: {\n        async session ({ session , user , token  }) {\n            return session;\n        },\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            const userFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.users.findFirst({\n                where: {\n                    username: token.email\n                },\n                select: {\n                    id: true\n                }\n            });\n            const userfound = await JSON.parse(JSON.stringify(userFromServer));\n            if (userfound) {\n            //userfound\n            } else {\n                //create user\n                await _db_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.users.create({\n                    data: {\n                        name: token.name,\n                        image: token.picture,\n                        username: token.email,\n                        password: `googleHasIt`\n                    }\n                });\n            }\n            return token;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ1U7QUFDdEI7QUFDZDtBQUU5QixpRUFBZUEsZ0RBQVEsQ0FBQztJQUN2QkssU0FBUyxFQUFFO1FBQ1ZKLGlFQUFjLENBQUM7WUFDZEssUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0I7U0FDOUMsQ0FBQztRQUNGVCxzRUFBbUIsQ0FBQztZQUNuQixtRUFBbUU7WUFDbkVVLElBQUksRUFBRSxhQUFhO1lBQ25CLDJFQUEyRTtZQUMzRSxxRUFBcUU7WUFDckUsbURBQW1EO1lBQ25ELHlFQUF5RTtZQUN6RUMsV0FBVyxFQUFFO2dCQUNaQyxRQUFRLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxVQUFVO29CQUFFQyxJQUFJLEVBQUUsTUFBTTtvQkFBRUMsV0FBVyxFQUFFLFFBQVE7aUJBQUU7Z0JBQ3BFQyxRQUFRLEVBQUU7b0JBQUVILEtBQUssRUFBRSxVQUFVO29CQUFFQyxJQUFJLEVBQUUsVUFBVTtpQkFBRTthQUNqRDtZQUNELE1BQU1HLFNBQVMsRUFBQ04sV0FBVyxFQUFFTyxHQUFHLEVBQUU7Z0JBQ2pDLG1FQUFtRTtnQkFDbkUsTUFBTUMsY0FBYyxHQUFHLE1BQU1sQiw4REFBc0IsQ0FBQztvQkFDbkRxQixLQUFLLEVBQUU7d0JBQ05WLFFBQVEsRUFBRUQsV0FBVyxFQUFFQyxRQUFRO3FCQUMvQjtvQkFDRFcsTUFBTSxFQUFFO3dCQUNQQyxFQUFFLEVBQUUsSUFBSTt3QkFDUmQsSUFBSSxFQUFFLElBQUk7d0JBQ1ZFLFFBQVEsRUFBRSxJQUFJO3dCQUNkSSxRQUFRLEVBQUUsSUFBSTtxQkFDZDtpQkFDRCxDQUFDO2dCQUNGLE1BQU1TLFNBQVMsR0FBRyxNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNULGNBQWMsQ0FBQyxDQUFDO2dCQUVsRSxJQUFJVSxXQUFXLEdBQUcsTUFBTTNCLHVEQUFjLENBQ3JDUyxXQUFXLENBQUVLLFFBQVEsRUFDckJTLFNBQVMsQ0FBQ1QsUUFBUSxDQUNsQjtnQkFFRCxJQUFJYSxXQUFXLEVBQUU7b0JBQ2hCLE1BQU1FLElBQUksR0FBRzt3QkFDWlAsRUFBRSxFQUFFQyxTQUFTLENBQUNELEVBQUU7d0JBQ2hCZCxJQUFJLEVBQUUsQ0FBQyxFQUFFZSxTQUFTLENBQUNmLElBQUksQ0FBQyxDQUFDO3dCQUN6QnNCLEtBQUssRUFBRVAsU0FBUyxDQUFDYixRQUFRO3dCQUN6QnFCLEtBQUssRUFBRSxFQUFFO3FCQUNUO29CQUVELGtFQUFrRTtvQkFDbEUsT0FBT0YsSUFBSSxDQUFDO2lCQUNaLE1BQU07b0JBQ04sK0ZBQStGO29CQUMvRixPQUFPLElBQUksQ0FBQztnQkFFWiwySUFBMkk7aUJBQzNJO2FBQ0Q7U0FDRCxDQUFDO0tBQ0Y7SUFDREcsS0FBSyxFQUFFO1FBQ05DLE1BQU0sRUFBRSxjQUFjO0tBQ3RCO0lBQ0RDLFNBQVMsRUFBRTtRQUNWLE1BQU1DLE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUVOLElBQUksR0FBRU8sS0FBSyxHQUFFLEVBQUU7WUFDdkMsT0FBT0QsT0FBTyxDQUFDO1NBQ2Y7UUFDRCxNQUFNRSxHQUFHLEVBQUMsRUFBRUQsS0FBSyxHQUFFUCxJQUFJLEdBQUVTLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtZQUN2RCxNQUFNdkIsY0FBYyxHQUFHLE1BQU1sQiw4REFBc0IsQ0FBQztnQkFDbkRxQixLQUFLLEVBQUU7b0JBQ05WLFFBQVEsRUFBRTBCLEtBQUssQ0FBQ04sS0FBSztpQkFDckI7Z0JBQ0RULE1BQU0sRUFBRTtvQkFDUEMsRUFBRSxFQUFFLElBQUk7aUJBQ1I7YUFDRCxDQUFDO1lBQ0YsTUFBTUMsU0FBUyxHQUFHLE1BQU1DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1QsY0FBYyxDQUFDLENBQUM7WUFDbEUsSUFBSU0sU0FBUyxFQUFFO1lBQ2QsV0FBVzthQUNYLE1BQU07Z0JBQ04sYUFBYTtnQkFDYixNQUFNeEIsMkRBQW1CLENBQUM7b0JBQ3pCMkMsSUFBSSxFQUFFO3dCQUNMbEMsSUFBSSxFQUFFNEIsS0FBSyxDQUFDNUIsSUFBSTt3QkFDaEJ1QixLQUFLLEVBQUVLLEtBQUssQ0FBQ08sT0FBTzt3QkFDcEJqQyxRQUFRLEVBQUUwQixLQUFLLENBQUNOLEtBQUs7d0JBQ3JCaEIsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN2QjtpQkFDRCxDQUFDLENBQUM7YUFDSDtZQUNELE9BQU9zQixLQUFLLENBQUM7U0FDYjtLQUNEO0lBQ0RRLE1BQU0sRUFBRXpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeUMsZUFBZTtDQUNuQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHVsZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHN4P2MxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi8uLi9kYi9wcmlzbWEnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0R29vZ2xlUHJvdmlkZXIoe1xuXHRcdFx0Y2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQhLFxuXHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCEsXG5cdFx0fSksXG5cdFx0Q3JlZGVudGlhbHNQcm92aWRlcih7XG5cdFx0XHQvLyBUaGUgbmFtZSB0byBkaXNwbGF5IG9uIHRoZSBzaWduIGluIGZvcm0gKGUuZy4gXCJTaWduIGluIHdpdGguLi5cIilcblx0XHRcdG5hbWU6ICdDcmVkZW50aWFscycsXG5cdFx0XHQvLyBUaGUgY3JlZGVudGlhbHMgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIHN1aXRhYmxlIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cblx0XHRcdC8vIFlvdSBjYW4gc3BlY2lmeSB3aGF0ZXZlciBmaWVsZHMgeW91IGFyZSBleHBlY3RpbmcgdG8gYmUgc3VibWl0dGVkLlxuXHRcdFx0Ly8gZS5nLiBkb21haW4sIHVzZXJuYW1lLCBwYXNzd29yZCwgMkZBIHRva2VuLCBldGMuXG5cdFx0XHQvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXG5cdFx0XHRjcmVkZW50aWFsczoge1xuXHRcdFx0XHR1c2VybmFtZTogeyBsYWJlbDogJ1VzZXJuYW1lJywgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjogJ2pzbWl0aCcgfSxcblx0XHRcdFx0cGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcblx0XHRcdH0sXG5cdFx0XHRhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuXHRcdFx0XHQvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXG5cdFx0XHRcdGNvbnN0IHVzZXJGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLnVzZXJzLmZpbmRGaXJzdCh7XG5cdFx0XHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0XHRcdHVzZXJuYW1lOiBjcmVkZW50aWFscz8udXNlcm5hbWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZWxlY3Q6IHtcblx0XHRcdFx0XHRcdGlkOiB0cnVlLFxuXHRcdFx0XHRcdFx0bmFtZTogdHJ1ZSxcblx0XHRcdFx0XHRcdHVzZXJuYW1lOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGFzc3dvcmQ6IHRydWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IHVzZXJmb3VuZCA9IGF3YWl0IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXNlckZyb21TZXJ2ZXIpKTtcblxuXHRcdFx0XHRsZXQgY29tYXBhcmlzb24gPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcblx0XHRcdFx0XHRjcmVkZW50aWFscyEucGFzc3dvcmQsXG5cdFx0XHRcdFx0dXNlcmZvdW5kLnBhc3N3b3JkXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aWYgKGNvbWFwYXJpc29uKSB7XG5cdFx0XHRcdFx0Y29uc3QgdXNlciA9IHtcblx0XHRcdFx0XHRcdGlkOiB1c2VyZm91bmQuaWQsXG5cdFx0XHRcdFx0XHRuYW1lOiBgJHt1c2VyZm91bmQubmFtZX1gLFxuXHRcdFx0XHRcdFx0ZW1haWw6IHVzZXJmb3VuZC51c2VybmFtZSxcblx0XHRcdFx0XHRcdGltYWdlOiAnJyxcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0Ly8gQW55IG9iamVjdCByZXR1cm5lZCB3aWxsIGJlIHNhdmVkIGluIGB1c2VyYCBwcm9wZXJ0eSBvZiB0aGUgSldUXG5cdFx0XHRcdFx0cmV0dXJuIHVzZXI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gSWYgeW91IHJldHVybiBudWxsIHRoZW4gYW4gZXJyb3Igd2lsbCBiZSBkaXNwbGF5ZWQgYWR2aXNpbmcgdGhlIHVzZXIgdG8gY2hlY2sgdGhlaXIgZGV0YWlscy5cblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0XHRcdC8vIFlvdSBjYW4gYWxzbyBSZWplY3QgdGhpcyBjYWxsYmFjayB3aXRoIGFuIEVycm9yIHRodXMgdGhlIHVzZXIgd2lsbCBiZSBzZW50IHRvIHRoZSBlcnJvciBwYWdlIHdpdGggdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBxdWVyeSBwYXJhbWV0ZXJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KSxcblx0XSxcblx0cGFnZXM6IHtcblx0XHRzaWduSW46ICcvQXV0aC9TaWduSW4nLFxuXHR9LFxuXHRjYWxsYmFja3M6IHtcblx0XHRhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdXNlciwgdG9rZW4gfSkge1xuXHRcdFx0cmV0dXJuIHNlc3Npb247XG5cdFx0fSxcblx0XHRhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyIH0pIHtcblx0XHRcdGNvbnN0IHVzZXJGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLnVzZXJzLmZpbmRGaXJzdCh7XG5cdFx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdFx0dXNlcm5hbWU6IHRva2VuLmVtYWlsLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZWxlY3Q6IHtcblx0XHRcdFx0XHRpZDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgdXNlcmZvdW5kID0gYXdhaXQgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1c2VyRnJvbVNlcnZlcikpO1xuXHRcdFx0aWYgKHVzZXJmb3VuZCkge1xuXHRcdFx0XHQvL3VzZXJmb3VuZFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly9jcmVhdGUgdXNlclxuXHRcdFx0XHRhd2FpdCBwcmlzbWEudXNlcnMuY3JlYXRlKHtcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRuYW1lOiB0b2tlbi5uYW1lISxcblx0XHRcdFx0XHRcdGltYWdlOiB0b2tlbi5waWN0dXJlLFxuXHRcdFx0XHRcdFx0dXNlcm5hbWU6IHRva2VuLmVtYWlsLFxuXHRcdFx0XHRcdFx0cGFzc3dvcmQ6IGBnb29nbGVIYXNJdGAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdG9rZW47XG5cdFx0fSxcblx0fSxcblx0c2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByaXNtYSIsImJjcnlwdCIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsInVzZXJGcm9tU2VydmVyIiwidXNlcnMiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInNlbGVjdCIsImlkIiwidXNlcmZvdW5kIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY29tYXBhcmlzb24iLCJjb21wYXJlIiwidXNlciIsImVtYWlsIiwiaW1hZ2UiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsImp3dCIsImFjY291bnQiLCJwcm9maWxlIiwiaXNOZXdVc2VyIiwiY3JlYXRlIiwiZGF0YSIsInBpY3R1cmUiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].tsx\n");

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