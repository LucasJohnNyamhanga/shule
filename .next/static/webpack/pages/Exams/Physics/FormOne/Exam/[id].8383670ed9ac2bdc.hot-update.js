"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Exams/Physics/FormOne/Exam/[id]",{

/***/ "./pages/Exams/Physics/FormOne/Exam/[id].tsx":
/*!***************************************************!*\
  !*** ./pages/Exams/Physics/FormOne/Exam/[id].tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../styles/reviewDisplay.module.scss */ \"./styles/reviewDisplay.module.scss\");\n/* harmony import */ var _styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ChevronRightOutlined */ \"./node_modules/@mui/icons-material/ChevronRightOutlined.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar subjectLocatorLink = \"Physics\";\nvar formLocatorLink = \"FormOne\";\nvar Index = function(param) {\n    var thisexam = param.thisexam;\n    var truncate = function truncate(str) {\n        return str.length > truncateLimit ? str.slice(0, truncateLimit) + \"...\" : str;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        keys: []\n    }), keyInTable = ref1[0], setKeyInTable = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNavActive(\"Exams\");\n    }, [\n        navActive\n    ]);\n    if (thisexam == \"undefined\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().notFound),\n            children: \"Cant find Exam, will be resolved soon.\"\n        }, void 0, false, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n            lineNumber: 117,\n            columnNumber: 4\n        }, _this);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNavActive(\"Exams\");\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        navActive\n    ]);\n    //!mambo yanaanza\n    var truncateLimit = 12;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: thisexam.name\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                        lineNumber: 140,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                        lineNumber: 141,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: thisexam.description\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                        lineNumber: 142,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: thisexam.description\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                        lineNumber: 144,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                lineNumber: 139,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().innerContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rightInnercontainerBody),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().BodyHeader),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().statusBar),\n                                    children: [\n                                        thisexam.examType.subjectExams.subjectName,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                                            lineNumber: 154,\n                                            columnNumber: 8\n                                        }, _this),\n                                        \" \",\n                                        thisexam.examType.formExams.formName,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                                            lineNumber: 156,\n                                            columnNumber: 8\n                                        }, _this),\n                                        \" \",\n                                        truncate(thisexam.description)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().download),\n                                    children: \"Download Exam\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                            lineNumber: 151,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_4___default().BodyContent),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ckContent\",\n                                dangerouslySetInnerHTML: {\n                                    __html: thisexam.exam\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                                lineNumber: 161,\n                                columnNumber: 7\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                            lineNumber: 160,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                    lineNumber: 147,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n                lineNumber: 146,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/Exam/[id].tsx\",\n        lineNumber: 138,\n        columnNumber: 3\n    }, _this);\n};\n_s(Index, \"94OJct4BBlHR4ddRSkJv+1B0j/c=\");\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FeGFtcy9QaHlzaWNzL0Zvcm1PbmUvRXhhbS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUcrRDtBQUNNO0FBQ1c7QUFDbkQ7QUFDK0M7O0FBSTVFLElBQU1RLGtCQUFrQixHQUFHLFNBQVM7QUFDcEMsSUFBTUMsZUFBZSxHQUFHLFNBQVM7QUF5RmpDLElBQU1DLEtBQUssR0FBRyxnQkFFNEM7UUFEckRDLFFBQVEsU0FBUkEsUUFBUTtRQTRCSEMsUUFBUSxHQUFqQixTQUFTQSxRQUFRLENBQUNDLEdBQVcsRUFBRTtRQUM5QixPQUFPQSxHQUFHLENBQUNDLE1BQU0sR0FBR0MsYUFBYSxHQUM5QkYsR0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFRCxhQUFhLENBQUMsR0FBRyxLQUFLLEdBQ25DRixHQUFHLENBQUM7S0FDUDs7SUE5QkQsSUFBb0NaLEdBQXNCLEdBQXRCQSxpREFBVSxDQUFDTSx3RUFBVSxDQUFDLEVBQWxEVSxTQUFTLEdBQW1CaEIsR0FBc0IsQ0FBbERnQixTQUFTLEVBQUVDLFlBQVksR0FBS2pCLEdBQXNCLENBQXZDaUIsWUFBWTtJQUUvQixJQUFvQ2YsSUFFbEMsR0FGa0NBLCtDQUFRLENBQVc7UUFDdERnQixJQUFJLEVBQUUsRUFBRTtLQUNSLENBQUMsRUE1R0gsVUEwR2tCLEdBQW1CaEIsSUFFbEMsR0FGZSxFQTFHbEIsYUEwR2lDLEdBQUlBLElBRWxDLEdBRjhCO0lBSWhDRCxnREFBUyxDQUFDLFdBQU07UUFDZmdCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN0QixFQUFFO1FBQUNELFNBQVM7S0FBQyxDQUFDLENBQUM7SUFFaEIsSUFBSU4sUUFBUSxJQUFJLFdBQVcsRUFBRTtRQUM1QixxQkFDQyw4REFBQ1csS0FBRztZQUFDQyxTQUFTLEVBQUVuQixtRkFBZTtzQkFBRSx3Q0FFakM7Ozs7O2lCQUFNLENBQ0w7S0FDRjtJQUVERixnREFBUyxDQUFDLFdBQU07UUFDZmdCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0Qix1REFBdUQ7S0FDdkQsRUFBRTtRQUFDRCxTQUFTO0tBQUMsQ0FBQyxDQUFDO0lBRWhCLGlCQUFpQjtJQUVqQixJQUFJRixhQUFhLEdBQUcsRUFBRTtJQU90QixxQkFDQyw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUVuQixvRkFBZ0I7OzBCQUMvQiw4REFBQ0Usa0RBQUk7O2tDQUNKLDhEQUFDb0IsT0FBSztrQ0FBRWYsUUFBUSxDQUFDZ0IsSUFBSTs7Ozs7NkJBQVM7a0NBQzlCLDhEQUFDQyxNQUFJO3dCQUFDRCxJQUFJLEVBQUMsVUFBVTt3QkFBQ0UsT0FBTyxFQUFDLHVDQUF1Qzs7Ozs7NkJBQUc7a0NBQ3hFLDhEQUFDRCxNQUFJO3dCQUFDRCxJQUFJLEVBQUMsYUFBYTt3QkFBQ0UsT0FBTyxFQUFFbEIsUUFBUSxDQUFDbUIsV0FBVzs7Ozs7NkJBQUk7a0NBRTFELDhEQUFDRixNQUFJO3dCQUFDRCxJQUFJLEVBQUMsVUFBVTt3QkFBQ0UsT0FBTyxFQUFFbEIsUUFBUSxDQUFDbUIsV0FBVzs7Ozs7NkJBQUk7Ozs7OztxQkFDakQ7MEJBQ1AsOERBQUNSLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRW5CLHlGQUFxQjswQkFDcEMsNEVBQUNrQixLQUFHO29CQUFDQyxTQUFTLEVBQUVuQixrR0FBOEI7O3NDQUk3Qyw4REFBQ2tCLEtBQUc7NEJBQUNDLFNBQVMsRUFBRW5CLHFGQUFpQjs7OENBQ2hDLDhEQUFDa0IsS0FBRztvQ0FBQ0MsU0FBUyxFQUFFbkIsb0ZBQWdCOzt3Q0FDOUJPLFFBQVEsQ0FBQ3dCLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxXQUFXO3dDQUFFLEdBQUc7c0RBQ2hELDhEQUFDaEMsZ0ZBQXdCOzs7O2lEQUFHO3dDQUFDLEdBQUc7d0NBQy9CTSxRQUFRLENBQUN3QixRQUFRLENBQUNHLFNBQVMsQ0FBQ0MsUUFBUTt3Q0FBRSxHQUFHO3NEQUMxQyw4REFBQ2xDLGdGQUF3Qjs7OztpREFBRzt3Q0FBQSxHQUFDO3dDQUFDTyxRQUFRLENBQUNELFFBQVEsQ0FBQ21CLFdBQVcsQ0FBQzs7Ozs7O3lDQUN2RDs4Q0FDTiw4REFBQ1IsS0FBRztvQ0FBQ0MsU0FBUyxFQUFFbkIsbUZBQWU7OENBQUUsZUFBYTs7Ozs7eUNBQU07Ozs7OztpQ0FDL0M7c0NBQ04sOERBQUNrQixLQUFHOzRCQUFDQyxTQUFTLEVBQUVuQixzRkFBa0I7c0NBQ2pDLDRFQUFDa0IsS0FBRztnQ0FDSEMsU0FBUyxFQUFDLFdBQVc7Z0NBQ3JCbUIsdUJBQXVCLEVBQUU7b0NBQUVDLE1BQU0sRUFBRWhDLFFBQVEsQ0FBQ2lDLElBQUk7aUNBQUU7Ozs7O3FDQUNqRDs7Ozs7aUNBQ0c7Ozs7Ozt5QkFDRDs7Ozs7cUJBQ0Q7Ozs7OzthQUNELENBQ0w7Q0FDRjtHQXBFS2xDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSzs7QUFzRVgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9FeGFtcy9QaHlzaWNzL0Zvcm1PbmUvRXhhbS9baWRdLnRzeD8yYzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocywgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZGIvcHJpc21hJztcclxuaW1wb3J0IHsgZXhhbVR5cGUgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9yZXZpZXdEaXNwbGF5Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IENoZXZyb25SaWdodE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25SaWdodE91dGxpbmVkJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29udGV4dC9TdGF0ZUNvbnRleHQnO1xyXG5cclxuY29uc3Qgc3ViamVjdExvY2F0b3IgPSAnUGh5c2ljcyc7XHJcbmNvbnN0IGZvcm1Mb2NhdG9yID0gJ0Zvcm0gT25lJztcclxuY29uc3Qgc3ViamVjdExvY2F0b3JMaW5rID0gJ1BoeXNpY3MnO1xyXG5jb25zdCBmb3JtTG9jYXRvckxpbmsgPSAnRm9ybU9uZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHRjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zPy5pZDtcclxuXHRsZXQgSWQgPSBwYXJzZUludChTdHJpbmcoaWQpKTtcclxuXHQvLyAuLi5cclxuXHRjb25zdCBleGFtU2VydmVyID0gYXdhaXQgcHJpc21hLmV4YW0uZmluZFVuaXF1ZSh7XHJcblx0XHR3aGVyZToge1xyXG5cdFx0XHRpZDogSWQsXHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0OiB7XHJcblx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogdHJ1ZSxcclxuXHRcdFx0eWVhcjogdHJ1ZSxcclxuXHRcdFx0aGFzQW5zd2VyczogdHJ1ZSxcclxuXHRcdFx0ZXhhbTogdHJ1ZSxcclxuXHRcdFx0ZXhhbVR5cGU6IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdHN1YmplY3RFeGFtczoge1xyXG5cdFx0XHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdFx0XHRzdWJqZWN0TmFtZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmb3JtRXhhbXM6IHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0XHRcdFx0Zm9ybU5hbWU6IHRydWUsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXhhbToge1xyXG5cdFx0XHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdFx0XHRleGFtRG93bmxvYWRhYmxlOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB0aGlzZXhhbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXhhbVNlcnZlcikpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dGhpc2V4YW0sXHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG5cdC8vIC4uLlxyXG5cdGNvbnN0IGV4YW1TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEuZXhhbS5maW5kTWFueSh7XHJcblx0XHR3aGVyZToge1xyXG5cdFx0XHRwdWJsaXNoZWQ6IHRydWUsXHJcblx0XHRcdGV4YW1UeXBlOiB7XHJcblx0XHRcdFx0c3ViamVjdEV4YW1zOiB7XHJcblx0XHRcdFx0XHRzdWJqZWN0TmFtZTogc3ViamVjdExvY2F0b3IsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmb3JtRXhhbXM6IHtcclxuXHRcdFx0XHRcdGZvcm1OYW1lOiBmb3JtTG9jYXRvcixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHNlbGVjdDoge1xyXG5cdFx0XHRpZDogdHJ1ZSxcclxuXHRcdH0sXHJcblx0fSk7XHJcblx0Y29uc3QgZXhhbVR5cGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4YW1TZXJ2ZXIpKTtcclxuXHJcblx0Y29uc3QgcGF0aHMgPSBleGFtVHlwZS5tYXAoKHR5cGU6IGV4YW1UeXBlKSA9PiB7XHJcblx0XHRsZXQgaWQgPSBTdHJpbmcodHlwZS5pZCk7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRpZDogYCR7aWR9YCxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzLFxyXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxyXG5cdH07XHJcbn07XHJcblxyXG50eXBlIHRhYmxlS2V5ID0ge1xyXG5cdGtleXM6IHN0cmluZ1tdO1xyXG59O1xyXG5cclxuY29uc3QgSW5kZXggPSAoe1xuICAgIFx0dGhpc2V4YW0sXG4gICAgfTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikgPT4ge1xyXG5cdGNvbnN0IHsgbmF2QWN0aXZlLCBzZXROYXZBY3RpdmUgfSA9IHVzZUNvbnRleHQoTmF2Q29udGV4dCk7XHJcblxyXG5cdGNvbnN0IFtrZXlJblRhYmxlLCBzZXRLZXlJblRhYmxlXSA9IHVzZVN0YXRlPHRhYmxlS2V5Pih7XHJcblx0XHRrZXlzOiBbXSxcclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldE5hdkFjdGl2ZSgnRXhhbXMnKTtcclxuXHR9LCBbbmF2QWN0aXZlXSk7XHJcblxyXG5cdGlmICh0aGlzZXhhbSA9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5ub3RGb3VuZH0+XHJcblx0XHRcdFx0Q2FudCBmaW5kIEV4YW0sIHdpbGwgYmUgcmVzb2x2ZWQgc29vbi5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldE5hdkFjdGl2ZSgnRXhhbXMnKTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHR9LCBbbmF2QWN0aXZlXSk7XHJcblxyXG5cdC8vIW1hbWJvIHlhbmFhbnphXHJcblxyXG5cdGxldCB0cnVuY2F0ZUxpbWl0ID0gMTI7XHJcblx0ZnVuY3Rpb24gdHJ1bmNhdGUoc3RyOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiBzdHIubGVuZ3RoID4gdHJ1bmNhdGVMaW1pdFxyXG5cdFx0XHQ/IHN0ci5zbGljZSgwLCB0cnVuY2F0ZUxpbWl0KSArICcuLi4nXHJcblx0XHRcdDogc3RyO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPnt0aGlzZXhhbS5uYW1lfTwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e3RoaXNleGFtLmRlc2NyaXB0aW9ufSAvPlxyXG5cdFx0XHRcdHsvKiAvLyFhZGQga2V5d29yZHMgKi99XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0na2V5d29yZHMnIGNvbnRlbnQ9e3RoaXNleGFtLmRlc2NyaXB0aW9ufSAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaW5uZXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmlnaHRJbm5lcmNvbnRhaW5lckJvZHl9PlxyXG5cdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubW9iaWxlfT5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLkJvZHlIZWFkZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnN0YXR1c0Jhcn0+XHJcblx0XHRcdFx0XHRcdFx0e3RoaXNleGFtLmV4YW1UeXBlLnN1YmplY3RFeGFtcy5zdWJqZWN0TmFtZX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxDaGV2cm9uUmlnaHRPdXRsaW5lZEljb24gLz57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdHt0aGlzZXhhbS5leGFtVHlwZS5mb3JtRXhhbXMuZm9ybU5hbWV9eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8Q2hldnJvblJpZ2h0T3V0bGluZWRJY29uIC8+IHt0cnVuY2F0ZSh0aGlzZXhhbS5kZXNjcmlwdGlvbil9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmRvd25sb2FkfT5Eb3dubG9hZCBFeGFtPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuQm9keUNvbnRlbnR9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdja0NvbnRlbnQnXHJcblx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzZXhhbS5leGFtIH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlcyIsIkNoZXZyb25SaWdodE91dGxpbmVkSWNvbiIsIkhlYWQiLCJOYXZDb250ZXh0Iiwic3ViamVjdExvY2F0b3JMaW5rIiwiZm9ybUxvY2F0b3JMaW5rIiwiSW5kZXgiLCJ0aGlzZXhhbSIsInRydW5jYXRlIiwic3RyIiwibGVuZ3RoIiwidHJ1bmNhdGVMaW1pdCIsInNsaWNlIiwibmF2QWN0aXZlIiwic2V0TmF2QWN0aXZlIiwia2V5cyIsImtleUluVGFibGUiLCJzZXRLZXlJblRhYmxlIiwiZGl2IiwiY2xhc3NOYW1lIiwibm90Rm91bmQiLCJjb250YWluZXIiLCJ0aXRsZSIsIm5hbWUiLCJtZXRhIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiaW5uZXJDb250YWluZXIiLCJyaWdodElubmVyY29udGFpbmVyQm9keSIsIkJvZHlIZWFkZXIiLCJzdGF0dXNCYXIiLCJleGFtVHlwZSIsInN1YmplY3RFeGFtcyIsInN1YmplY3ROYW1lIiwiZm9ybUV4YW1zIiwiZm9ybU5hbWUiLCJkb3dubG9hZCIsIkJvZHlDb250ZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJleGFtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Exams/Physics/FormOne/Exam/[id].tsx\n");

/***/ })

});