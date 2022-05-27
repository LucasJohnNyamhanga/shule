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
exports.id = "pages/api/topicsReview";
exports.ids = ["pages/api/topicsReview"];
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

/***/ "(api)/./pages/api/topicsReview.tsx":
/*!************************************!*\
  !*** ./pages/api/topicsReview.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/prisma */ \"(api)/./db/prisma.tsx\");\n\nasync function handler(req, res) {\n    const { formId , subjectId  } = req.body;\n    let formIdreceived = parseInt(formId);\n    let subjectIdreceived = parseInt(subjectId);\n    try {\n        const topicsFromServer = await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.topicReview.findMany({\n            where: {\n                subjectId: subjectIdreceived,\n                formId: formIdreceived\n            },\n            select: {\n                id: true,\n                topicName: true,\n                topicDefinition: true,\n                formId: true,\n                subjectId: true,\n                published: true\n            }\n        });\n        const topics = JSON.parse(JSON.stringify(topicsFromServer));\n        res.status(200).json(topics);\n    } catch (error) {} finally{\n        await _db_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9waWNzUmV2aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV3QztBQUV6QixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFFQSxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsU0FBUyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUN0QyxJQUFJQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0osTUFBTSxDQUFDO0lBQ3JDLElBQUlLLGlCQUFpQixHQUFHRCxRQUFRLENBQUNILFNBQVMsQ0FBQztJQUM3QyxJQUFJO1FBQ0YsTUFBTUssZ0JBQWdCLEdBQUcsTUFBTVYsbUVBQTJCLENBQUM7WUFDekRhLEtBQUssRUFBRTtnQkFDTFIsU0FBUyxFQUFFSSxpQkFBaUI7Z0JBQzVCTCxNQUFNLEVBQUNHLGNBQWM7YUFDdEI7WUFDQ08sTUFBTSxFQUFFO2dCQUNOQyxFQUFFLEVBQUMsSUFBSTtnQkFDUEMsU0FBUyxFQUFFLElBQUk7Z0JBQ2ZDLGVBQWUsRUFBRSxJQUFJO2dCQUNyQmIsTUFBTSxFQUFFLElBQUk7Z0JBQ1pDLFNBQVMsRUFBRSxJQUFJO2dCQUNmYSxTQUFTLEVBQUMsSUFBSTthQUNmO1NBQ0YsQ0FBQztRQUNGLE1BQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDWixnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNEUCxHQUFHLENBQUNvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxDQUFDLENBQUM7S0FDNUIsQ0FBQyxPQUFPTSxLQUFLLEVBQUUsRUFFZixRQUFTO1FBQ1YsTUFBTXpCLDBEQUFrQixFQUFFLENBQUM7S0FDNUI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL3RvcGljc1Jldmlldy50c3g/MGY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcblxyXG4gIGNvbnN0IHsgZm9ybUlkLCBzdWJqZWN0SWQgfSA9IHJlcS5ib2R5XHJcbiAgbGV0IGZvcm1JZHJlY2VpdmVkID0gcGFyc2VJbnQoZm9ybUlkKTtcclxuICBsZXQgc3ViamVjdElkcmVjZWl2ZWQgPSBwYXJzZUludChzdWJqZWN0SWQpO1xyXG50cnkge1xyXG4gIGNvbnN0IHRvcGljc0Zyb21TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEudG9waWNSZXZpZXcuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgc3ViamVjdElkOiBzdWJqZWN0SWRyZWNlaXZlZCxcclxuICAgICAgZm9ybUlkOmZvcm1JZHJlY2VpdmVkXHJcbiAgICB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDp0cnVlLFxyXG4gICAgICAgIHRvcGljTmFtZTogdHJ1ZSxcclxuICAgICAgICB0b3BpY0RlZmluaXRpb246IHRydWUsXHJcbiAgICAgICAgZm9ybUlkOiB0cnVlLFxyXG4gICAgICAgIHN1YmplY3RJZDogdHJ1ZSxcclxuICAgICAgICBwdWJsaXNoZWQ6dHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHRvcGljcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9waWNzRnJvbVNlcnZlcikpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odG9waWNzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZm9ybUlkIiwic3ViamVjdElkIiwiYm9keSIsImZvcm1JZHJlY2VpdmVkIiwicGFyc2VJbnQiLCJzdWJqZWN0SWRyZWNlaXZlZCIsInRvcGljc0Zyb21TZXJ2ZXIiLCJ0b3BpY1JldmlldyIsImZpbmRNYW55Iiwid2hlcmUiLCJzZWxlY3QiLCJpZCIsInRvcGljTmFtZSIsInRvcGljRGVmaW5pdGlvbiIsInB1Ymxpc2hlZCIsInRvcGljcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/topicsReview.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/topicsReview.tsx"));
module.exports = __webpack_exports__;

})();