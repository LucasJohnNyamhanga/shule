"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Review/Physics/FormOne",{

/***/ "./pages/Review/Physics/FormOne/index.tsx":
/*!************************************************!*\
  !*** ./pages/Review/Physics/FormOne/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../styles/reviewDisplay.module.scss */ \"./styles/reviewDisplay.module.scss\");\n/* harmony import */ var _styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ChevronRightOutlined */ \"./node_modules/@mui/icons-material/ChevronRightOutlined.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tools_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tools/Drawer */ \"./components/tools/Drawer.tsx\");\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\n/* harmony import */ var _components_tools_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/tools/modal */ \"./components/tools/modal.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar subjectLocatorLink = \"Physics\";\nvar formLocatorLink = \"FormOne\";\nvar Index = function(param) {\n    var topics = param.topics, note = param.note;\n    var _this1 = _this;\n    var truncate = function truncate(str) {\n        return str.length > truncateLimit ? str.slice(0, truncateLimit) + \"...\" : str;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_6__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNavActive(\"Review\");\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        navActive\n    ]);\n    if (topics.length < 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n            lineNumber: 108,\n            columnNumber: 10\n        }, _this);\n    }\n    if (note[0].review == null || note[0].review == \"undefined\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().notFound),\n            children: [\n                \"Reviews for $\",\n                note[0].topicName,\n                \" topic will be available soon.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n            lineNumber: 113,\n            columnNumber: 4\n        }, _this);\n    }\n    var truncateLimit = 10;\n    //!mambo yanaanza\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: note[0].topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: note[0].topicDefinition\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: note[0].topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                lineNumber: 129,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().innerContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().leftInnercontainerBody),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sticky),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicHeader),\n                                    children: \"Topics list\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().titleList),\n                                    children: topics.map(function(topic) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                passHref: true,\n                                                href: \"/Review/\".concat(subjectLocatorLink, \"/\").concat(formLocatorLink, \"/\").concat(topic.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: topic.id == note[0].id ? \"\".concat((_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicTittle), \" \").concat((_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Active)) : (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicTittle),\n                                                        children: topic.topicName\n                                                    }, topic.id, false, {\n                                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                                        lineNumber: 146,\n                                                        columnNumber: 12\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                                    lineNumber: 145,\n                                                    columnNumber: 11\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                                lineNumber: 142,\n                                                columnNumber: 10\n                                            }, _this1)\n                                        }, topic.id, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                            lineNumber: 141,\n                                            columnNumber: 9\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().rightInnercontainerBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mobile),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_Drawer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    textHeader: \"LIST OF TOPICS\",\n                                    topic: topics,\n                                    active: note[0].id,\n                                    link: \"Review\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                    lineNumber: 164,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().BodyHeader),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().statusBar),\n                                    children: [\n                                        note[0].subject.subjectName,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                            lineNumber: 173,\n                                            columnNumber: 38\n                                        }, _this),\n                                        \" \",\n                                        note[0].form.formName,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                            lineNumber: 174,\n                                            columnNumber: 32\n                                        }, _this),\n                                        \" \",\n                                        truncate(note[0].topicName)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                    lineNumber: 172,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                lineNumber: 171,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().BodyContent),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().modal),\n                                    children: note.map(function(topic) {\n                                        return topic.review.map(function(review) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                name: review.name,\n                                                id: review.id,\n                                                subject: note[0].subject.subjectName,\n                                                topic: note[0].topicName,\n                                                form: note[0].form.formName\n                                            }, review.id, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                                lineNumber: 182,\n                                                columnNumber: 10\n                                            }, _this1);\n                                        });\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                    lineNumber: 179,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                lineNumber: 178,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 162,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                lineNumber: 135,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n        lineNumber: 128,\n        columnNumber: 3\n    }, _this);\n};\n_s(Index, \"8XnDBuqwid0ybPU6g7WdH1V+qSo=\");\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // //*Removing default search bar :)\n // Index.getLayout = function PageLayout(page:ReactNode) {\n //   return (\n //       <>\n //           {page}\n //       </>\n //   )\n // }\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SZXZpZXcvUGh5c2ljcy9Gb3JtT25lL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwRTtBQUNSO0FBQ2M7QUFNbkQ7QUFDQTtBQUNFO0FBQzBCO0FBQ2dCO0FBQ2xCOztBQUl2RCxJQUFNVyxrQkFBa0IsR0FBRyxTQUFTO0FBQ3BDLElBQU1DLGVBQWUsR0FBRyxTQUFTO0FBNkVqQyxJQUFNQyxLQUFLLEdBQUcsZ0JBR3dDO1FBRnJEQyxNQUFNLFNBQU5BLE1BQU0sRUFDTkMsSUFBSSxTQUFKQSxJQUFJOztRQXFCS0MsUUFBUSxHQUFqQixTQUFTQSxRQUFRLENBQUNDLEdBQVcsRUFBRTtRQUM5QixPQUFPQSxHQUFHLENBQUNDLE1BQU0sR0FBR0MsYUFBYSxHQUM5QkYsR0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFRCxhQUFhLENBQUMsR0FBRyxLQUFLLEdBQ25DRixHQUFHLENBQUM7S0FDUDs7SUF2QkQsSUFBb0NoQixHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ1Esd0VBQVUsQ0FBQyxFQUFsRFksU0FBUyxHQUFtQnBCLEdBQXNCLENBQWxEb0IsU0FBUyxFQUFFQyxZQUFZLEdBQUtyQixHQUFzQixDQUF2Q3FCLFlBQVk7SUFFL0JwQixnREFBUyxDQUFDLFdBQU07UUFDZm9CLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2Qix1REFBdUQ7S0FDdkQsRUFBRTtRQUFDRCxTQUFTO0tBQUMsQ0FBQyxDQUFDO0lBRWhCLElBQUlQLE1BQU0sQ0FBQ0ksTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN0QixxQkFBTyw4REFBQ1gsbURBQUs7WUFBQ2dCLFVBQVUsRUFBRSxHQUFHOzs7OztpQkFBSSxDQUFDO0tBQ2xDO0lBRUQsSUFBSVIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDUyxNQUFNLElBQUksSUFBSSxJQUFJVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNTLE1BQU0sSUFBSSxXQUFXLEVBQUU7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LDBEQUEwRDtDQUMxRCxhQUFhO0NBQ2IsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osTUFBTTtDQUNOLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmV2aWV3L1BoeXNpY3MvRm9ybU9uZS9pbmRleC50c3g/MjVlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9yZXZpZXdEaXNwbGF5Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IENoZXZyb25SaWdodE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25SaWdodE91dGxpbmVkJztcclxuaW1wb3J0IHsgdHlwZSB9IGZyb20gJ29zJztcclxuaW1wb3J0IHsgcmV2aWV3LCB0b3BpYywgdG9waWNSZXZpZXcgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uLy4uLy4uL2RiL3ByaXNtYSc7XHJcbmltcG9ydCB0eXBlIHsgR2V0U3RhdGljUHJvcHMsIEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJztcclxuaW1wb3J0IERyYXdlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3Rvb2xzL0RyYXdlcic7XHJcbmltcG9ydCB7IE5hdkNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbnRleHQvU3RhdGVDb250ZXh0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdG9vbHMvbW9kYWwnO1xyXG5cclxuY29uc3Qgc3ViamVjdExvY2F0b3IgPSAnUGh5c2ljcyc7XHJcbmNvbnN0IGZvcm1Mb2NhdG9yID0gJ0Zvcm0gT25lJztcclxuY29uc3Qgc3ViamVjdExvY2F0b3JMaW5rID0gJ1BoeXNpY3MnO1xyXG5jb25zdCBmb3JtTG9jYXRvckxpbmsgPSAnRm9ybU9uZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHRvcGljc0Zyb21TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEudG9waWNSZXZpZXcuZmluZE1hbnkoe1xyXG5cdFx0d2hlcmU6IHtcclxuXHRcdFx0cHVibGlzaGVkOiB0cnVlLFxyXG5cdFx0XHRzdWJqZWN0OiB7XHJcblx0XHRcdFx0c3ViamVjdE5hbWU6IHN1YmplY3RMb2NhdG9yLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb3JtOiB7XHJcblx0XHRcdFx0Zm9ybU5hbWU6IGZvcm1Mb2NhdG9yLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHNlbGVjdDoge1xyXG5cdFx0XHRpZDogdHJ1ZSxcclxuXHRcdFx0dG9waWNOYW1lOiB0cnVlLFxyXG5cdFx0XHR0b3BpY0RlZmluaXRpb246IHRydWUsXHJcblx0XHRcdGZvcm06IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdGZvcm1OYW1lOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YmplY3Q6IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdHN1YmplY3ROYW1lOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IHRvcGljcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9waWNzRnJvbVNlcnZlcikpO1xyXG5cclxuXHRjb25zdCBub3RlRnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS50b3BpY1Jldmlldy5maW5kTWFueSh7XHJcblx0XHR0YWtlOiAxLFxyXG5cdFx0d2hlcmU6IHtcclxuXHRcdFx0cHVibGlzaGVkOiB0cnVlLFxyXG5cdFx0XHRzdWJqZWN0OiB7XHJcblx0XHRcdFx0c3ViamVjdE5hbWU6IHN1YmplY3RMb2NhdG9yLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb3JtOiB7XHJcblx0XHRcdFx0Zm9ybU5hbWU6IGZvcm1Mb2NhdG9yLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHNlbGVjdDoge1xyXG5cdFx0XHRpZDogdHJ1ZSxcclxuXHRcdFx0Zm9ybToge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0Zm9ybU5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViamVjdDoge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0c3ViamVjdE5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9waWNOYW1lOiB0cnVlLFxyXG5cdFx0XHR0b3BpY0RlZmluaXRpb246IHRydWUsXHJcblx0XHRcdHJldmlldzoge1xyXG5cdFx0XHRcdHdoZXJlOiB7XHJcblx0XHRcdFx0XHRwdWJsaXNoZWQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRcdFx0bmFtZTogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRjb25zdCBub3RlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShub3RlRnJvbVNlcnZlcikpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dG9waWNzLFxyXG5cdFx0XHRub3RlLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgSW5kZXggPSAoe1xyXG5cdHRvcGljcyxcclxuXHRub3RlLFxyXG59OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSA9PiB7XHJcblx0Y29uc3QgeyBuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZSB9ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldE5hdkFjdGl2ZSgnUmV2aWV3Jyk7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgW25hdkFjdGl2ZV0pO1xyXG5cclxuXHRpZiAodG9waWNzLmxlbmd0aCA8IDEpIHtcclxuXHRcdHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuXHR9XHJcblxyXG5cdGlmIChub3RlWzBdLnJldmlldyA9PSBudWxsIHx8IG5vdGVbMF0ucmV2aWV3ID09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5vdEZvdW5kfT5cclxuXHRcdFx0XHRSZXZpZXdzIGZvciAke25vdGVbMF0udG9waWNOYW1lfSB0b3BpYyB3aWxsIGJlIGF2YWlsYWJsZSBzb29uLlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5cdGxldCB0cnVuY2F0ZUxpbWl0ID0gMTA7XHJcblx0ZnVuY3Rpb24gdHJ1bmNhdGUoc3RyOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiBzdHIubGVuZ3RoID4gdHJ1bmNhdGVMaW1pdFxyXG5cdFx0XHQ/IHN0ci5zbGljZSgwLCB0cnVuY2F0ZUxpbWl0KSArICcuLi4nXHJcblx0XHRcdDogc3RyO1xyXG5cdH1cclxuXHJcblx0Ly8hbWFtYm8geWFuYWFuemFcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPntub3RlWzBdLnRvcGljTmFtZX08L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtub3RlWzBdLnRvcGljRGVmaW5pdGlvbn0gLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD17bm90ZVswXS50b3BpY05hbWV9IC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5pbm5lckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5sZWZ0SW5uZXJjb250YWluZXJCb2R5fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc3RpY2t5fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b3BpY0hlYWRlcn0+VG9waWNzIGxpc3Q8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy50aXRsZUxpc3R9PlxyXG5cdFx0XHRcdFx0XHRcdHt0b3BpY3MubWFwKCh0b3BpYzogdG9waWMpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXt0b3BpYy5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFzc0hyZWZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL1Jldmlldy8ke3N1YmplY3RMb2NhdG9yTGlua30vJHtmb3JtTG9jYXRvckxpbmt9LyR7dG9waWMuaWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17dG9waWMuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9waWMuaWQgPT0gbm90ZVswXS5pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBgJHtTdHlsZXMudG9waWNUaXR0bGV9ICR7U3R5bGVzLkFjdGl2ZX1gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFN0eWxlcy50b3BpY1RpdHRsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dG9waWMudG9waWNOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJpZ2h0SW5uZXJjb250YWluZXJCb2R5fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubW9iaWxlfT5cclxuXHRcdFx0XHRcdFx0PERyYXdlclxyXG5cdFx0XHRcdFx0XHRcdHRleHRIZWFkZXI9eydMSVNUIE9GIFRPUElDUyd9XHJcblx0XHRcdFx0XHRcdFx0dG9waWM9e3RvcGljc31cclxuXHRcdFx0XHRcdFx0XHRhY3RpdmU9e25vdGVbMF0uaWR9XHJcblx0XHRcdFx0XHRcdFx0bGluaz17J1Jldmlldyd9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuQm9keUhlYWRlcn0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc3RhdHVzQmFyfT5cclxuXHRcdFx0XHRcdFx0XHR7bm90ZVswXS5zdWJqZWN0LnN1YmplY3ROYW1lfSA8Q2hldnJvblJpZ2h0T3V0bGluZWRJY29uIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7bm90ZVswXS5mb3JtLmZvcm1OYW1lfSA8Q2hldnJvblJpZ2h0T3V0bGluZWRJY29uIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7dHJ1bmNhdGUobm90ZVswXS50b3BpY05hbWUpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5Cb2R5Q29udGVudH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubW9kYWx9PlxyXG5cdFx0XHRcdFx0XHRcdHtub3RlLm1hcCgodG9waWM6IGFueSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdHRvcGljLnJldmlldy5tYXAoKHJldmlldzogcmV2aWV3KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cmV2aWV3LmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e3Jldmlldy5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtyZXZpZXcuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3ViamVjdD17bm90ZVswXS5zdWJqZWN0LnN1YmplY3ROYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvcGljPXtub3RlWzBdLnRvcGljTmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb3JtPXtub3RlWzBdLmZvcm0uZm9ybU5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuLy8gLy8qUmVtb3ZpbmcgZGVmYXVsdCBzZWFyY2ggYmFyIDopXHJcbi8vIEluZGV4LmdldExheW91dCA9IGZ1bmN0aW9uIFBhZ2VMYXlvdXQocGFnZTpSZWFjdE5vZGUpIHtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgICA8PlxyXG4vLyAgICAgICAgICAge3BhZ2V9XHJcbi8vICAgICAgIDwvPlxyXG4vLyAgIClcclxuLy8gfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiU3R5bGVzIiwiQ2hldnJvblJpZ2h0T3V0bGluZWRJY29uIiwiSGVhZCIsIkxpbmsiLCJFcnJvciIsIkRyYXdlciIsIk5hdkNvbnRleHQiLCJNb2RhbCIsInN1YmplY3RMb2NhdG9yTGluayIsImZvcm1Mb2NhdG9yTGluayIsIkluZGV4IiwidG9waWNzIiwibm90ZSIsInRydW5jYXRlIiwic3RyIiwibGVuZ3RoIiwidHJ1bmNhdGVMaW1pdCIsInNsaWNlIiwibmF2QWN0aXZlIiwic2V0TmF2QWN0aXZlIiwic3RhdHVzQ29kZSIsInJldmlldyIsImRpdiIsImNsYXNzTmFtZSIsIm5vdEZvdW5kIiwidG9waWNOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0b3BpY0RlZmluaXRpb24iLCJpbm5lckNvbnRhaW5lciIsImxlZnRJbm5lcmNvbnRhaW5lckJvZHkiLCJzdGlja3kiLCJ0b3BpY0hlYWRlciIsInRpdGxlTGlzdCIsIm1hcCIsInRvcGljIiwicGFzc0hyZWYiLCJocmVmIiwiaWQiLCJhIiwidG9waWNUaXR0bGUiLCJBY3RpdmUiLCJyaWdodElubmVyY29udGFpbmVyQm9keSIsIm1vYmlsZSIsInRleHRIZWFkZXIiLCJhY3RpdmUiLCJsaW5rIiwiQm9keUhlYWRlciIsInN0YXR1c0JhciIsInN1YmplY3QiLCJzdWJqZWN0TmFtZSIsImZvcm0iLCJmb3JtTmFtZSIsIkJvZHlDb250ZW50IiwibW9kYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Review/Physics/FormOne/index.tsx\n");

/***/ })

});