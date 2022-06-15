"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/useMediaQuery */ \"./node_modules/@mui/material/useMediaQuery/index.js\");\n/* harmony import */ var _components_layout_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Nav */ \"./components/layout/Nav.tsx\");\n/* harmony import */ var _components_layout_NavMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/NavMobile */ \"./components/layout/NavMobile.tsx\");\n/* harmony import */ var _components_layout_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Search */ \"./components/layout/Search.tsx\");\n/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Footer */ \"./components/layout/Footer.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_ckEditorStyles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ckEditorStyles.scss */ \"./styles/ckEditorStyles.scss\");\n/* harmony import */ var _styles_ckEditorStyles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ckEditorStyles_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_tools_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tools/progress */ \"./components/tools/progress/index.tsx\");\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Store */ \"./Store/index.tsx\");\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/context/StateContext */ \"./components/context/StateContext.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyApp(param1) {\n    var Component = param1.Component, pageProps = param1.pageProps;\n    _s();\n    var matches = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(\"(min-width:958px)\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"Notes\"), navActive = ref[0], setNavActive = ref[1];\n    //*progress router\n    var setIsAnimating1 = (0,_Store__WEBPACK_IMPORTED_MODULE_10__.useProgressStore)(function(param) {\n        var setIsAnimating = param.setIsAnimating;\n        return setIsAnimating;\n    });\n    var isAnimating1 = (0,_Store__WEBPACK_IMPORTED_MODULE_10__.useProgressStore)(function(param) {\n        var isAnimating = param.isAnimating;\n        return isAnimating;\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        var handleStart = function() {\n            setIsAnimating1(true);\n        };\n        var handleStop = function() {\n            setIsAnimating1(false);\n        };\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleStop);\n        router.events.on(\"routeChangeError\", handleStop);\n        return function() {\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleStop);\n            router.events.off(\"routeChangeError\", handleStop);\n        };\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        router\n    ]);\n    if (Component.getLayout) {\n        return Component.getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_progress__WEBPACK_IMPORTED_MODULE_9__.Progress, {\n                    isAnimating: isAnimating1\n                }, void 0, false, {\n                    fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_11__.NavContext.Provider, {\n                    value: {\n                        setNavActive: setNavActive,\n                        navActive: navActive\n                    },\n                    children: [\n                        matches ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 17\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_NavMobile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n            lineNumber: 61,\n            columnNumber: 4\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_progress__WEBPACK_IMPORTED_MODULE_9__.Progress, {\n                isAnimating: isAnimating1\n            }, void 0, false, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                lineNumber: 88,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_11__.NavContext.Provider, {\n                value: {\n                    setNavActive: setNavActive,\n                    navActive: navActive\n                },\n                children: [\n                    matches ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 16\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_NavMobile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 32\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Search__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n                lineNumber: 89,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/_app.tsx\",\n        lineNumber: 87,\n        columnNumber: 3\n    }, this);\n}\n_s(MyApp, \"4VPLTu6vj3IKHsD+v9rXrQjq890=\", false, function() {\n    return [\n        _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n        _Store__WEBPACK_IMPORTED_MODULE_10__.useProgressStore,\n        _Store__WEBPACK_IMPORTED_MODULE_10__.useProgressStore,\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRTtvQkFDTlosWUFBWSxFQUFaQSxZQUFZO29CQUNaRCxTQUFTLEVBQVRBLFNBQVM7aUJBQ1Q7O29CQUNBRCxPQUFPLGlCQUFHLDhEQUFDYiw4REFBUzs7Ozs0QkFBRyxpQkFBRyw4REFBQ0Msb0VBQVM7Ozs7NEJBQUc7a0NBQ3hDLDhEQUFDQyxpRUFBTTs7Ozs0QkFBRztrQ0FDViw4REFBQ1MsU0FBUyxvQkFBS0MsU0FBUzs7Ozs0QkFBSTtrQ0FDNUIsOERBQUNULGlFQUFNOzs7OzRCQUFHOzs7Ozs7b0JBQ1c7Ozs7OztZQVVqQixDQUNMO0NBQ0Y7R0FsRlFPLEtBQUs7O1FBQ0dYLG9FQUFhO1FBS05TLHFEQUFnQjtRQUduQkEscURBQWdCO1FBQ3JCRixrREFBUzs7O0FBVmhCSSxLQUFBQSxLQUFLO0FBb0ZkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeSc7XG5pbXBvcnQgTmF2aWdhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L05hdic7XG5pbXBvcnQgTmF2TW9iaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L05hdk1vYmlsZSc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1NlYXJjaCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlcic7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvY2tFZGl0b3JTdHlsZXMuc2Nzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9vbHMvcHJvZ3Jlc3MnO1xuaW1wb3J0IHsgdXNlUHJvZ3Jlc3NTdG9yZSB9IGZyb20gJy4uL1N0b3JlJztcbmltcG9ydCB7IHR5cGUgfSBmcm9tICdvcyc7XG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0L1N0YXRlQ29udGV4dCc7XG5cbnR5cGUgUGFnZTxQID0ge30+ID0gTmV4dFBhZ2U8UD4gJiB7XG5cdC8vIFlvdSBjYW4gZGlzYWJsZSB3aGljaGV2ZXIgeW91IGRvbid0IG5lZWRcblx0Z2V0TGF5b3V0PzogKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gUmVhY3ROb2RlO1xuXHRsYXlvdXQ/OiBDb21wb25lbnRUeXBlO1xufTtcblxudHlwZSBQcm9wcyA9IEFwcFByb3BzICYge1xuXHRDb21wb25lbnQ6IFBhZ2U7XG59O1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkge1xuXHRjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSgnKG1pbi13aWR0aDo5NThweCknKTtcblxuXHRjb25zdCBbbmF2QWN0aXZlLCBzZXROYXZBY3RpdmVdID0gdXNlU3RhdGUoJ05vdGVzJyk7XG5cblx0Ly8qcHJvZ3Jlc3Mgcm91dGVyXG5cdGNvbnN0IHNldElzQW5pbWF0aW5nID0gdXNlUHJvZ3Jlc3NTdG9yZShcblx0XHQoeyBzZXRJc0FuaW1hdGluZyB9OiBhbnkpID0+IHNldElzQW5pbWF0aW5nXG5cdCk7XG5cdGNvbnN0IGlzQW5pbWF0aW5nID0gdXNlUHJvZ3Jlc3NTdG9yZSgoeyBpc0FuaW1hdGluZyB9OiBhbnkpID0+IGlzQW5pbWF0aW5nKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG5cdFx0XHRzZXRJc0FuaW1hdGluZyh0cnVlKTtcblx0XHR9O1xuXHRcdGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG5cdFx0XHRzZXRJc0FuaW1hdGluZyhmYWxzZSk7XG5cdFx0fTtcblxuXHRcdHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XG5cdFx0cm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xuXHRcdHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcblx0XHRcdHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XG5cdFx0XHRyb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xuXHRcdH07XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHR9LCBbcm91dGVyXSk7XG5cblx0aWYgKENvbXBvbmVudC5nZXRMYXlvdXQpIHtcblx0XHRyZXR1cm4gQ29tcG9uZW50LmdldExheW91dChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHsvKiA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHksXG4gICAgICBib2R5ID4gZGl2OmZpcnN0LWNoaWxkLFxuICAgICAgZGl2I19fbmV4dCxcbiAgICAgIGRpdiNfX25leHQgPiBkaXYge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPiAqL31cblxuXHRcdFx0XHQ8UHJvZ3Jlc3MgaXNBbmltYXRpbmc9e2lzQW5pbWF0aW5nfSAvPlxuXHRcdFx0XHQ8TmF2Q29udGV4dC5Qcm92aWRlclxuXHRcdFx0XHRcdHZhbHVlPXt7XG5cdFx0XHRcdFx0XHRzZXROYXZBY3RpdmUsXG5cdFx0XHRcdFx0XHRuYXZBY3RpdmUsXG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0e21hdGNoZXMgPyA8TmF2aWdhdG9yIC8+IDogPE5hdk1vYmlsZSAvPn1cblx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHQ8L05hdkNvbnRleHQuUHJvdmlkZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cblx0XHRcdDxQcm9ncmVzcyBpc0FuaW1hdGluZz17aXNBbmltYXRpbmd9IC8+XG5cdFx0XHQ8TmF2Q29udGV4dC5Qcm92aWRlclxuXHRcdFx0XHR2YWx1ZT17e1xuXHRcdFx0XHRcdHNldE5hdkFjdGl2ZSxcblx0XHRcdFx0XHRuYXZBY3RpdmUsXG5cdFx0XHRcdH19PlxuXHRcdFx0XHR7bWF0Y2hlcyA/IDxOYXZpZ2F0b3IgLz4gOiA8TmF2TW9iaWxlIC8+fVxuXHRcdFx0XHQ8U2VhcmNoIC8+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0PC9OYXZDb250ZXh0LlByb3ZpZGVyPlxuXHRcdFx0ey8qIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSxcbiAgICAgIGJvZHkgPiBkaXY6Zmlyc3QtY2hpbGQsXG4gICAgICBkaXYjX19uZXh0LFxuICAgICAgZGl2I19fbmV4dCA+IGRpdiB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+ICovfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VNZWRpYVF1ZXJ5IiwiTmF2aWdhdG9yIiwiTmF2TW9iaWxlIiwiU2VhcmNoIiwiRm9vdGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJQcm9ncmVzcyIsInVzZVByb2dyZXNzU3RvcmUiLCJOYXZDb250ZXh0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYXRjaGVzIiwibmF2QWN0aXZlIiwic2V0TmF2QWN0aXZlIiwic2V0SXNBbmltYXRpbmciLCJpc0FuaW1hdGluZyIsInJvdXRlciIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlU3RvcCIsImV2ZW50cyIsIm9uIiwib2ZmIiwiZ2V0TGF5b3V0IiwiZGl2IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});