"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Exams/Download/[id]",{

/***/ "./pages/Exams/Download/[id].tsx":
/*!***************************************!*\
  !*** ./pages/Exams/Download/[id].tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/notesDisplay.module.scss */ \"./styles/notesDisplay.module.scss\");\n/* harmony import */ var _styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ChevronRightOutlined */ \"./node_modules/@mui/icons-material/ChevronRightOutlined.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar subjectLocator = \"Physics\";\nvar formLocator = \"Form One\";\nvar subjectLocatorLink = \"Physics\";\nvar formLocatorLink = \"FormOne\";\nvar Index = function(param) {\n    var downloads = param.downloads;\n    var _this1 = _this;\n    _s();\n    var notify = function(message) {\n        return (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(message);\n    };\n    var notifySuccess = function(message) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(message);\n    };\n    var notifyError = function(message) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(message);\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive, userData = ref.userData;\n    var ref1 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)(), session = ref1.data, status = ref1.status;\n    var ref2 = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(), push = ref2.push, asPath = ref2.asPath;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNavActive(\"Notes\");\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        navActive\n    ]);\n    var handleDownload = function(link) {\n        if (session) {\n            push(\"/Pricing?callbackUrl=\".concat(asPath));\n        //FileSaver.saveAs(link, link.replace(/(.*)\\//g, ''));\n        } else {\n            push(\"/Auth/SignIn?callbackUrl=\".concat(asPath));\n        }\n    };\n    //!mambo yanaanza\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {\n                position: \"bottom-left\"\n            }, void 0, false, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                lineNumber: 107,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"\".concat(subjectLocator, \" \").concat(formLocator, \" Notes Download\")\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                        lineNumber: 109,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                        lineNumber: 110,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"\".concat(subjectLocator, \" \").concat(subjectLocator, \" Notes Download\")\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                        lineNumber: 111,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"\".concat(subjectLocator, \" \").concat(subjectLocator, \" Notes Download\")\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                        lineNumber: 115,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                lineNumber: 108,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().innerContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rightInnercontainerBody),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().BodyHeader),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().statusBar),\n                                children: [\n                                    subjectLocator,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 25\n                                    }, _this),\n                                    \" \",\n                                    formLocator,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 8\n                                    }, _this),\n                                    \" \",\n                                    \"Downloads\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                lineNumber: 123,\n                                columnNumber: 7\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                            lineNumber: 122,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().downloadCenterHeader),\n                            children: \"Download Center For \".concat(downloads.description, \" \").concat(downloads.year, \" Exam.\")\n                        }, void 0, false, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                            lineNumber: 128,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().BodyContent),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Following \".concat(downloads.length > 1 ? \"Files  are\" : \"File is\", \"\\n\t\t\t\t\t\t\tavailable for download.\")\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: downloads.examDownloadable.map(function(download) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().downloadCard),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().child1),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            children: \"Name:\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                                            lineNumber: 141,\n                                                            columnNumber: 11\n                                                        }, _this1),\n                                                        \" \",\n                                                        download.name\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                                    lineNumber: 140,\n                                                    columnNumber: 10\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().child2),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            children: \"Format:\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                                            lineNumber: 144,\n                                                            columnNumber: 11\n                                                        }, _this1),\n                                                        \" \",\n                                                        download.fileExtension.toUpperCase()\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                                    lineNumber: 143,\n                                                    columnNumber: 10\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().download),\n                                                    onClick: function() {\n                                                        handleDownload(download.link);\n                                                    },\n                                                    children: \"Download\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                                    lineNumber: 147,\n                                                    columnNumber: 10\n                                                }, _this1)\n                                            ]\n                                        }, download.id, true, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                            lineNumber: 139,\n                                            columnNumber: 9\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                            lineNumber: 132,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                    lineNumber: 121,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n                lineNumber: 120,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Download/[id].tsx\",\n        lineNumber: 106,\n        columnNumber: 3\n    }, _this);\n};\n_s(Index, \"+17TOSGcAcaZNlXDvRx498cusgQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0VBQUMsT0FBSzs7Ozs7a0VBQU87d0RBQUEsR0FBQzt3REFBQ0gsUUFBUSxDQUFDYixJQUFJOzs7Ozs7MERBQzVCOzhEQUNOLDhEQUFDTixLQUFHO29EQUFDQyxTQUFTLEVBQUUvQixnRkFBYTs7c0VBQzVCLDhEQUFDb0QsTUFBSTtzRUFBQyxTQUFPOzs7OztrRUFBTzt3REFBQSxHQUFDO3dEQUFDSCxRQUFRLENBQUNLLGFBQWEsQ0FBQ0MsV0FBVyxFQUFFOzs7Ozs7MERBQ3JEOzhEQUVOLDhEQUFDekIsS0FBRztvREFDSEMsU0FBUyxFQUFFL0Isa0ZBQWU7b0RBQzFCd0QsT0FBTyxFQUFFLFdBQU07d0RBQ2Q1QixjQUFjLENBQUNxQixRQUFRLENBQUNwQixJQUFJLENBQUMsQ0FBQztxREFDOUI7OERBQUUsVUFFSjs7Ozs7MERBQU07OzJDQWRHb0IsUUFBUSxDQUFDUSxFQUFFOzs7O2tEQWVmO3FDQUNOLENBQUM7Ozs7O3lDQUNHOzs7Ozs7aUNBQ0Q7Ozs7Ozt5QkFDRDs7Ozs7cUJBQ0Q7Ozs7OzthQUNELENBQ0w7Q0FDRjtHQW5GSzdDLEtBQUs7O1FBT3dCUix1REFBVTtRQUNuQkMsa0RBQVM7OztBQVI3Qk8sS0FBQUEsS0FBSzs7QUFxRlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9FeGFtcy9Eb3dubG9hZC9baWRdLnRzeD8wZWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocywgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vZGIvcHJpc21hJztcclxuaW1wb3J0IHsgZXhhbVR5cGUsIG5vdGVzRG93bmxvYWRhYmxlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbm90ZXNEaXNwbGF5Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IENoZXZyb25SaWdodE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25SaWdodE91dGxpbmVkJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29udGV4dC9TdGF0ZUNvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcblxyXG5jb25zdCBzdWJqZWN0TG9jYXRvciA9ICdQaHlzaWNzJztcclxuY29uc3QgZm9ybUxvY2F0b3IgPSAnRm9ybSBPbmUnO1xyXG5jb25zdCBzdWJqZWN0TG9jYXRvckxpbmsgPSAnUGh5c2ljcyc7XHJcbmNvbnN0IGZvcm1Mb2NhdG9yTGluayA9ICdGb3JtT25lJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cdGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXM/LmlkO1xyXG5cdGxldCBJZCA9IHBhcnNlSW50KFN0cmluZyhpZCkpO1xyXG5cdC8vIC4uLlxyXG5cdGNvbnN0IGV4YW1TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEuZXhhbS5maW5kVW5pcXVlKHtcclxuXHRcdHdoZXJlOiB7XHJcblx0XHRcdGlkOiBJZCxcclxuXHRcdH0sXHJcblx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0ZGVzY3JpcHRpb246IHRydWUsXHJcblx0XHRcdHllYXI6IHRydWUsXHJcblx0XHRcdGV4YW1Eb3dubG9hZGFibGU6IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdG5hbWU6IHRydWUsXHJcblx0XHRcdFx0XHRsaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdFx0XHRmaWxlRXh0ZW5zaW9uOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBkb3dubG9hZHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4YW1TZXJ2ZXIpKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGRvd25sb2FkcyxcclxuXHRcdH0sXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Ly8gLi4uXHJcblx0Y29uc3QgZXhhbVNlcnZlciA9IGF3YWl0IHByaXNtYS5leGFtLmZpbmRNYW55KHtcclxuXHRcdHdoZXJlOiB7XHJcblx0XHRcdHB1Ymxpc2hlZDogdHJ1ZSxcclxuXHRcdH0sXHJcblx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0aWQ6IHRydWUsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IGV4YW1UeXBlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleGFtU2VydmVyKSk7XHJcblxyXG5cdGNvbnN0IHBhdGhzID0gZXhhbVR5cGUubWFwKCh0eXBlOiBleGFtVHlwZSkgPT4ge1xyXG5cdFx0bGV0IGlkID0gU3RyaW5nKHR5cGUuaWQpO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0aWQ6IGAke2lkfWAsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH0pO1xyXG5cdHJldHVybiB7XHJcblx0XHRwYXRocyxcclxuXHRcdGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxyXG5cdH07XHJcbn07XHJcblxyXG50eXBlIHRhYmxlS2V5ID0ge1xyXG5cdGtleXM6IHN0cmluZ1tdO1xyXG59O1xyXG5cclxuY29uc3QgSW5kZXggPSAoe1xyXG5cdGRvd25sb2FkcyxcclxufTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikgPT4ge1xyXG5cdGNvbnN0IG5vdGlmeSA9IChtZXNzYWdlOiBzdHJpbmcpID0+IHRvYXN0KG1lc3NhZ2UpO1xyXG5cdGNvbnN0IG5vdGlmeVN1Y2Nlc3MgPSAobWVzc2FnZTogc3RyaW5nKSA9PiB0b2FzdC5zdWNjZXNzKG1lc3NhZ2UpO1xyXG5cdGNvbnN0IG5vdGlmeUVycm9yID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gdG9hc3QuZXJyb3IobWVzc2FnZSk7XHJcblx0Y29uc3QgeyBuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZSwgdXNlckRhdGEgfSA9IHVzZUNvbnRleHQoTmF2Q29udGV4dCk7XHJcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcclxuXHRjb25zdCB7IHB1c2gsIGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXROYXZBY3RpdmUoJ05vdGVzJyk7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgW25hdkFjdGl2ZV0pO1xyXG5cclxuXHRsZXQgaGFuZGxlRG93bmxvYWQgPSAobGluazogc3RyaW5nKSA9PiB7XHJcblx0XHRpZiAoc2Vzc2lvbikge1xyXG5cdFx0XHRwdXNoKGAvUHJpY2luZz9jYWxsYmFja1VybD0ke2FzUGF0aH1gKTtcclxuXHRcdFx0Ly9GaWxlU2F2ZXIuc2F2ZUFzKGxpbmssIGxpbmsucmVwbGFjZSgvKC4qKVxcLy9nLCAnJykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cHVzaChgL0F1dGgvU2lnbkluP2NhbGxiYWNrVXJsPSR7YXNQYXRofWApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIW1hbWJvIHlhbmFhbnphXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0+XHJcblx0XHRcdDxUb2FzdGVyIHBvc2l0aW9uPSdib3R0b20tbGVmdCcgLz5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPntgJHtzdWJqZWN0TG9jYXRvcn0gJHtmb3JtTG9jYXRvcn0gTm90ZXMgRG93bmxvYWRgfTwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcblx0XHRcdFx0PG1ldGFcclxuXHRcdFx0XHRcdG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG5cdFx0XHRcdFx0Y29udGVudD17YCR7c3ViamVjdExvY2F0b3J9ICR7c3ViamVjdExvY2F0b3J9IE5vdGVzIERvd25sb2FkYH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxtZXRhXHJcblx0XHRcdFx0XHRuYW1lPSdrZXl3b3JkcydcclxuXHRcdFx0XHRcdGNvbnRlbnQ9e2Ake3N1YmplY3RMb2NhdG9yfSAke3N1YmplY3RMb2NhdG9yfSBOb3RlcyBEb3dubG9hZGB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmlubmVyQ29udGFpbmVyfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJpZ2h0SW5uZXJjb250YWluZXJCb2R5fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuQm9keUhlYWRlcn0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc3RhdHVzQmFyfT5cclxuXHRcdFx0XHRcdFx0XHR7c3ViamVjdExvY2F0b3J9IDxDaGV2cm9uUmlnaHRPdXRsaW5lZEljb24gLz4ge2Zvcm1Mb2NhdG9yfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0PENoZXZyb25SaWdodE91dGxpbmVkSWNvbiAvPiB7YERvd25sb2Fkc2B9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XHJcblx0XHRcdFx0XHRcdFx0U3R5bGVzLmRvd25sb2FkQ2VudGVySGVhZGVyXHJcblx0XHRcdFx0XHRcdH0+e2BEb3dubG9hZCBDZW50ZXIgRm9yICR7ZG93bmxvYWRzLmRlc2NyaXB0aW9ufSAke2Rvd25sb2Fkcy55ZWFyfSBFeGFtLmB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLkJvZHlDb250ZW50fT5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHR7YEZvbGxvd2luZyAke2Rvd25sb2Fkcy5sZW5ndGggPiAxID8gYEZpbGVzICBhcmVgIDogYEZpbGUgaXNgfVxyXG5cdFx0XHRcdFx0XHRcdGF2YWlsYWJsZSBmb3IgZG93bmxvYWQuYH1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0e2Rvd25sb2Fkcy5leGFtRG93bmxvYWRhYmxlLm1hcCgoZG93bmxvYWQ6IG5vdGVzRG93bmxvYWRhYmxlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17ZG93bmxvYWQuaWR9IGNsYXNzTmFtZT17U3R5bGVzLmRvd25sb2FkQ2FyZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2hpbGQxfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5OYW1lOjwvc3Bhbj4ge2Rvd25sb2FkLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNoaWxkMn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+Rm9ybWF0Ojwvc3Bhbj4ge2Rvd25sb2FkLmZpbGVFeHRlbnNpb24udG9VcHBlckNhc2UoKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtTdHlsZXMuZG93bmxvYWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRG93bmxvYWQoZG93bmxvYWQubGluayk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RG93bmxvYWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJTdHlsZXMiLCJDaGV2cm9uUmlnaHRPdXRsaW5lZEljb24iLCJIZWFkIiwiTmF2Q29udGV4dCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJzdWJqZWN0TG9jYXRvciIsImZvcm1Mb2NhdG9yIiwic3ViamVjdExvY2F0b3JMaW5rIiwiZm9ybUxvY2F0b3JMaW5rIiwiSW5kZXgiLCJkb3dubG9hZHMiLCJub3RpZnkiLCJtZXNzYWdlIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJub3RpZnlFcnJvciIsImVycm9yIiwibmF2QWN0aXZlIiwic2V0TmF2QWN0aXZlIiwidXNlckRhdGEiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInB1c2giLCJhc1BhdGgiLCJoYW5kbGVEb3dubG9hZCIsImxpbmsiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJwb3NpdGlvbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiaW5uZXJDb250YWluZXIiLCJyaWdodElubmVyY29udGFpbmVyQm9keSIsIkJvZHlIZWFkZXIiLCJzdGF0dXNCYXIiLCJkb3dubG9hZENlbnRlckhlYWRlciIsImRlc2NyaXB0aW9uIiwieWVhciIsIkJvZHlDb250ZW50IiwibGVuZ3RoIiwiZXhhbURvd25sb2FkYWJsZSIsIm1hcCIsImRvd25sb2FkIiwiZG93bmxvYWRDYXJkIiwiY2hpbGQxIiwic3BhbiIsImNoaWxkMiIsImZpbGVFeHRlbnNpb24iLCJ0b1VwcGVyQ2FzZSIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Exams/Download/[id].tsx\n"));

/***/ })

});