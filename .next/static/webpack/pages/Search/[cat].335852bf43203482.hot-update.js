"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Search/[cat]",{

/***/ "./pages/Search/[cat].tsx":
/*!********************************!*\
  !*** ./pages/Search/[cat].tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/createNotes.module.scss */ \"./styles/createNotes.module.scss\");\n/* harmony import */ var _styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unified */ \"./node_modules/unified/index.js\");\n/* harmony import */ var rehype_parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rehype-parse */ \"./node_modules/rehype-parse/index.js\");\n/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rehype-stringify */ \"./node_modules/rehype-stringify/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! unist-util-visit */ \"./node_modules/unist-util-visit/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Reference = function(param) {\n    var searchResults = param.searchResults, searchText = param.searchText;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    var searchTarget;\n    var doc = searchResults[0].content;\n    var content = (0,unified__WEBPACK_IMPORTED_MODULE_3__.unified)().use(rehype_parse__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        fragment: true\n    }).use(function() {\n        return function(tree) {\n            (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_5__.visit)(tree, \"element\", function(node) {\n                if (node.tagName == \"p\") {\n                    searchTarget.push(node);\n                }\n            });\n        };\n    }).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).processSync(doc).toString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().innerContainer),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rightInnercontainerBody),\n                children: \"Hello Tanzania\"\n            }, void 0, false, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Search/[cat].tsx\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Search/[cat].tsx\",\n            lineNumber: 58,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Search/[cat].tsx\",\n        lineNumber: 57,\n        columnNumber: 3\n    }, _this);\n};\n_s(Reference, \"ESWGTCN7KgqewEm9HnUmASViPrQ=\");\n_c = Reference;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reference);\nvar _c;\n$RefreshReg$(_c, \"Reference\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TZWFyY2gvW2NhdF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUMwRTtBQUdoQjtBQUdTO0FBRWpDO0FBQ0s7QUFDUTtBQUNOOztBQW9CekMsSUFBTVEsU0FBUyxHQUFHLGdCQUc0QztRQUY3REMsYUFBYSxTQUFiQSxhQUFhLEVBQ2JDLFVBQVUsU0FBVkEsVUFBVTs7SUFFVixJQUFvQ1QsR0FBc0IsR0FBdEJBLGlEQUFVLENBQUNFLHdFQUFVLENBQUMsRUFBbERRLFNBQVMsR0FBbUJWLEdBQXNCLENBQWxEVSxTQUFTLEVBQUVDLFlBQVksR0FBS1gsR0FBc0IsQ0FBdkNXLFlBQVk7SUFDL0IsSUFBSUMsWUFBWTtJQUVoQixJQUFNQyxHQUFHLEdBQUdMLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sT0FBTztJQUNwQyxJQUFNQSxPQUFPLEdBQUdYLGdEQUFPLEVBQUUsQ0FDdkJZLEdBQUcsQ0FBQ1gsb0RBQVcsRUFBRTtRQUFFWSxRQUFRLEVBQUUsSUFBSTtLQUFFLENBQUMsQ0FDcENELEdBQUcsQ0FBQyxXQUFNO1FBQ1YsT0FBTyxTQUFDRSxJQUFJLEVBQUs7WUFDaEJYLHVEQUFLLENBQUNXLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBQ0MsSUFBSSxFQUFLO2dCQUNoQyxJQUFJQSxJQUFJLENBQUNDLE9BQU8sSUFBSSxHQUFHLEVBQUU7b0JBQ3hCUCxZQUFZLENBQUNRLElBQUksQ0FBQ0YsSUFBSSxDQUFDLENBQUM7aUJBQ3hCO2FBQ0QsQ0FBQyxDQUFDO1NBQ0gsQ0FBQztLQUNGLENBQUMsQ0FDREgsR0FBRyxDQUFDVix3REFBZSxDQUFDLENBQ3BCZ0IsV0FBVyxDQUFDUixHQUFHLENBQUMsQ0FDaEJTLFFBQVEsRUFBRTtJQUVaLHFCQUNDLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRXZCLGtGQUFnQjtrQkFDL0IsNEVBQUNzQixLQUFHO1lBQUNDLFNBQVMsRUFBRXZCLHVGQUFxQjtzQkFDcEMsNEVBQUNzQixLQUFHO2dCQUFDQyxTQUFTLEVBQUV2QixnR0FBOEI7MEJBQUUsZ0JBQWM7Ozs7O3FCQUFNOzs7OztpQkFDL0Q7Ozs7O2FBQ0QsQ0FDTDtDQUNGO0dBOUJLTSxTQUFTO0FBQVRBLEtBQUFBLFNBQVM7O0FBZ0NmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2VhcmNoL1tjYXRdLnRzeD9iNTgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgc3ViamVjdFJlZmVyZW5jZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvY3JlYXRlTm90ZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IE5hdkNvbnRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRleHQvU3RhdGVDb250ZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vZGIvcHJpc21hJztcclxuaW1wb3J0IHsgdW5pZmllZCB9IGZyb20gJ3VuaWZpZWQnO1xyXG5pbXBvcnQgcmVoeXBlUGFyc2UgZnJvbSAncmVoeXBlLXBhcnNlJztcclxuaW1wb3J0IHJlaHlwZVN0cmluZ2lmeSBmcm9tICdyZWh5cGUtc3RyaW5naWZ5JztcclxuaW1wb3J0IHsgdmlzaXQgfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcblx0Y29uc3QgY2F0ZWdvcnkgPSBjb250ZXh0LnBhcmFtcyEuY2F0O1xyXG5cdGNvbnN0IHNlYXJjaFRleHQgPSBjb250ZXh0LnF1ZXJ5LnNlYXJjaCEudG9TdHJpbmcoKTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLm5vdGUuZmluZE1hbnkoe1xyXG5cdFx0d2hlcmU6IHtcclxuXHRcdFx0Y29udGVudDoge1xyXG5cdFx0XHRcdHNlYXJjaDogc2VhcmNoVGV4dCxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSk7XHJcblx0bGV0IHNlYXJjaFJlc3VsdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgc2VhcmNoUmVzdWx0cywgc2VhcmNoVGV4dCB9LFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBSZWZlcmVuY2UgPSAoe1xyXG5cdHNlYXJjaFJlc3VsdHMsXHJcblx0c2VhcmNoVGV4dCxcclxufTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSA9PiB7XHJcblx0Y29uc3QgeyBuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZSB9ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcclxuXHRsZXQgc2VhcmNoVGFyZ2V0OiBzdHJpbmdbXTtcclxuXHJcblx0Y29uc3QgZG9jID0gc2VhcmNoUmVzdWx0c1swXS5jb250ZW50O1xyXG5cdGNvbnN0IGNvbnRlbnQgPSB1bmlmaWVkKClcclxuXHRcdC51c2UocmVoeXBlUGFyc2UsIHsgZnJhZ21lbnQ6IHRydWUgfSlcclxuXHRcdC51c2UoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKHRyZWUpID0+IHtcclxuXHRcdFx0XHR2aXNpdCh0cmVlLCAnZWxlbWVudCcsIChub2RlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAobm9kZS50YWdOYW1lID09ICdwJykge1xyXG5cdFx0XHRcdFx0XHRzZWFyY2hUYXJnZXQucHVzaChub2RlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdH0pXHJcblx0XHQudXNlKHJlaHlwZVN0cmluZ2lmeSlcclxuXHRcdC5wcm9jZXNzU3luYyhkb2MpXHJcblx0XHQudG9TdHJpbmcoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5pbm5lckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yaWdodElubmVyY29udGFpbmVyQm9keX0+SGVsbG8gVGFuemFuaWE8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiU3R5bGVzIiwiTmF2Q29udGV4dCIsInVuaWZpZWQiLCJyZWh5cGVQYXJzZSIsInJlaHlwZVN0cmluZ2lmeSIsInZpc2l0IiwiUmVmZXJlbmNlIiwic2VhcmNoUmVzdWx0cyIsInNlYXJjaFRleHQiLCJuYXZBY3RpdmUiLCJzZXROYXZBY3RpdmUiLCJzZWFyY2hUYXJnZXQiLCJkb2MiLCJjb250ZW50IiwidXNlIiwiZnJhZ21lbnQiLCJ0cmVlIiwibm9kZSIsInRhZ05hbWUiLCJwdXNoIiwicHJvY2Vzc1N5bmMiLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImlubmVyQ29udGFpbmVyIiwicmlnaHRJbm5lcmNvbnRhaW5lckJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Search/[cat].tsx\n");

/***/ })

});