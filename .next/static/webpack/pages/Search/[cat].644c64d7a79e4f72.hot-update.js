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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/createNotes.module.scss */ \"./styles/createNotes.module.scss\");\n/* harmony import */ var _styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unified */ \"./node_modules/unified/index.js\");\n/* harmony import */ var rehype_parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rehype-parse */ \"./node_modules/rehype-parse/index.js\");\n/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rehype-stringify */ \"./node_modules/rehype-stringify/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! unist-util-visit */ \"./node_modules/unist-util-visit/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Reference = function(param) {\n    var searchResults = param.searchResults, searchText = param.searchText;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    var doc = searchResults[0].content;\n    var content = (0,unified__WEBPACK_IMPORTED_MODULE_3__.unified)().use(rehype_parse__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        fragment: true\n    }).use(function() {\n        return function(tree) {\n            (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_5__.visit)(tree, \"element\", function(node) {\n                if (node.tagName == \"p\") {\n                    // node.children.map((paragraph) => {\n                    // \tconsole.log(paragraph.value);\n                    // });\n                    if (typeof node.children[0].value != \"undefined\") {\n                        console.log(node.children[0].value);\n                    } else {\n                        console.log(node.children[0].children);\n                    }\n                }\n            });\n        };\n    }).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).processSync(doc).toString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().innerContainer),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_createNotes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rightInnercontainerBody),\n                children: \"Hello Tanzania\"\n            }, void 0, false, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Search/[cat].tsx\",\n                lineNumber: 65,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Search/[cat].tsx\",\n            lineNumber: 64,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Search/[cat].tsx\",\n        lineNumber: 63,\n        columnNumber: 3\n    }, _this);\n};\n_s(Reference, \"ESWGTCN7KgqewEm9HnUmASViPrQ=\");\n_c = Reference;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reference);\nvar _c;\n$RefreshReg$(_c, \"Reference\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TZWFyY2gvW2NhdF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUMwRTtBQUdoQjtBQUdTO0FBRWpDO0FBQ0s7QUFDUTtBQUNOOztBQW9CekMsSUFBTVEsU0FBUyxHQUFHLGdCQUc0QztRQUY3REMsYUFBYSxTQUFiQSxhQUFhLEVBQ2JDLFVBQVUsU0FBVkEsVUFBVTs7SUFFVixJQUFvQ1QsR0FBc0IsR0FBdEJBLGlEQUFVLENBQUNFLHdFQUFVLENBQUMsRUFBbERRLFNBQVMsR0FBbUJWLEdBQXNCLENBQWxEVSxTQUFTLEVBQUVDLFlBQVksR0FBS1gsR0FBc0IsQ0FBdkNXLFlBQVk7SUFFL0IsSUFBTUMsR0FBRyxHQUFHSixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUNLLE9BQU87SUFDcEMsSUFBTUEsT0FBTyxHQUFHVixnREFBTyxFQUFFLENBQ3ZCVyxHQUFHLENBQUNWLG9EQUFXLEVBQUU7UUFBRVcsUUFBUSxFQUFFLElBQUk7S0FBRSxDQUFDLENBQ3BDRCxHQUFHLENBQUMsV0FBTTtRQUNWLE9BQU8sU0FBQ0UsSUFBSSxFQUFLO1lBQ2hCVix1REFBSyxDQUFDVSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQUNDLElBQUksRUFBSztnQkFDaEMsSUFBSUEsSUFBSSxDQUFDQyxPQUFPLElBQUksR0FBRyxFQUFFO29CQUN4QixxQ0FBcUM7b0JBQ3JDLGlDQUFpQztvQkFDakMsTUFBTTtvQkFDTixJQUFJLE9BQU9ELElBQUksQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLElBQUksV0FBVyxFQUFFO3dCQUNqREMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLElBQUksQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQztxQkFDcEMsTUFBTTt3QkFDTkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLElBQUksQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQSxRQUFRLENBQUMsQ0FBQztxQkFDdkM7aUJBQ0Q7YUFDRCxDQUFDLENBQUM7U0FDSCxDQUFDO0tBQ0YsQ0FBQyxDQUNETCxHQUFHLENBQUNULHdEQUFlLENBQUMsQ0FDcEJrQixXQUFXLENBQUNYLEdBQUcsQ0FBQyxDQUNoQlksUUFBUSxFQUFFO0lBRVoscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFekIsa0ZBQWdCO2tCQUMvQiw0RUFBQ3dCLEtBQUc7WUFBQ0MsU0FBUyxFQUFFekIsdUZBQXFCO3NCQUNwQyw0RUFBQ3dCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRXpCLGdHQUE4QjswQkFBRSxnQkFBYzs7Ozs7cUJBQU07Ozs7O2lCQUMvRDs7Ozs7YUFDRCxDQUNMO0NBQ0Y7R0FwQ0tNLFNBQVM7QUFBVEEsS0FBQUEsU0FBUzs7QUFzQ2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9TZWFyY2gvW2NhdF0udHN4P2I1ODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBzdWJqZWN0UmVmZXJlbmNlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jcmVhdGVOb3Rlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGV4dC9TdGF0ZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9kYi9wcmlzbWEnO1xyXG5pbXBvcnQgeyB1bmlmaWVkIH0gZnJvbSAndW5pZmllZCc7XHJcbmltcG9ydCByZWh5cGVQYXJzZSBmcm9tICdyZWh5cGUtcGFyc2UnO1xyXG5pbXBvcnQgcmVoeXBlU3RyaW5naWZ5IGZyb20gJ3JlaHlwZS1zdHJpbmdpZnknO1xyXG5pbXBvcnQgeyB2aXNpdCB9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHRjb25zdCBjYXRlZ29yeSA9IGNvbnRleHQucGFyYW1zIS5jYXQ7XHJcblx0Y29uc3Qgc2VhcmNoVGV4dCA9IGNvbnRleHQucXVlcnkuc2VhcmNoIS50b1N0cmluZygpO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEubm90ZS5maW5kTWFueSh7XHJcblx0XHR3aGVyZToge1xyXG5cdFx0XHRjb250ZW50OiB7XHJcblx0XHRcdFx0c2VhcmNoOiBzZWFyY2hUZXh0LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRsZXQgc2VhcmNoUmVzdWx0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyBzZWFyY2hSZXN1bHRzLCBzZWFyY2hUZXh0IH0sXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IFJlZmVyZW5jZSA9ICh7XHJcblx0c2VhcmNoUmVzdWx0cyxcclxuXHRzZWFyY2hUZXh0LFxyXG59OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz4pID0+IHtcclxuXHRjb25zdCB7IG5hdkFjdGl2ZSwgc2V0TmF2QWN0aXZlIH0gPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xyXG5cclxuXHRjb25zdCBkb2MgPSBzZWFyY2hSZXN1bHRzWzBdLmNvbnRlbnQ7XHJcblx0Y29uc3QgY29udGVudCA9IHVuaWZpZWQoKVxyXG5cdFx0LnVzZShyZWh5cGVQYXJzZSwgeyBmcmFnbWVudDogdHJ1ZSB9KVxyXG5cdFx0LnVzZSgoKSA9PiB7XHJcblx0XHRcdHJldHVybiAodHJlZSkgPT4ge1xyXG5cdFx0XHRcdHZpc2l0KHRyZWUsICdlbGVtZW50JywgKG5vZGUpID0+IHtcclxuXHRcdFx0XHRcdGlmIChub2RlLnRhZ05hbWUgPT0gJ3AnKSB7XHJcblx0XHRcdFx0XHRcdC8vIG5vZGUuY2hpbGRyZW4ubWFwKChwYXJhZ3JhcGgpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhwYXJhZ3JhcGgudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBub2RlLmNoaWxkcmVuWzBdLnZhbHVlICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cobm9kZS5jaGlsZHJlblswXS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cobm9kZS5jaGlsZHJlblswXS5jaGlsZHJlbik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdH0pXHJcblx0XHQudXNlKHJlaHlwZVN0cmluZ2lmeSlcclxuXHRcdC5wcm9jZXNzU3luYyhkb2MpXHJcblx0XHQudG9TdHJpbmcoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5pbm5lckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yaWdodElubmVyY29udGFpbmVyQm9keX0+SGVsbG8gVGFuemFuaWE8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiU3R5bGVzIiwiTmF2Q29udGV4dCIsInVuaWZpZWQiLCJyZWh5cGVQYXJzZSIsInJlaHlwZVN0cmluZ2lmeSIsInZpc2l0IiwiUmVmZXJlbmNlIiwic2VhcmNoUmVzdWx0cyIsInNlYXJjaFRleHQiLCJuYXZBY3RpdmUiLCJzZXROYXZBY3RpdmUiLCJkb2MiLCJjb250ZW50IiwidXNlIiwiZnJhZ21lbnQiLCJ0cmVlIiwibm9kZSIsInRhZ05hbWUiLCJjaGlsZHJlbiIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3NTeW5jIiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbm5lckNvbnRhaW5lciIsInJpZ2h0SW5uZXJjb250YWluZXJCb2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Search/[cat].tsx\n");

/***/ })

});