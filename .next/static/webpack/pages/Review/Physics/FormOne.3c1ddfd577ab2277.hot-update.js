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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../styles/reviewDisplay.module.scss */ \"./styles/reviewDisplay.module.scss\");\n/* harmony import */ var _styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ChevronRightOutlined */ \"./node_modules/@mui/icons-material/ChevronRightOutlined.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tools_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tools/Drawer */ \"./components/tools/Drawer.tsx\");\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\n/* harmony import */ var _components_tools_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/tools/modal */ \"./components/tools/modal.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar subjectLocatorLink = \"Physics\";\nvar formLocatorLink = \"FormOne\";\nvar Index = function(param) {\n    var topics = param.topics, note = param.note;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_6__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNavActive(\"Review\");\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        navActive\n    ]);\n    if (topics.length < 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n            lineNumber: 108,\n            columnNumber: 10\n        }, _this);\n    }\n    if (note[0].review == null || note[0].review == \"undefined\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().notFound),\n            children: [\n                \"Reviews for $\",\n                note[0].topicName,\n                \" topic will be available soon.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n            lineNumber: 113,\n            columnNumber: 4\n        }, _this);\n    }\n    //!mambo yanaanza\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: note[0].topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: note[0].topicDefinition\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: note[0].topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                lineNumber: 123,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().innerContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().leftInnercontainerBody),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sticky),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicHeader),\n                                    children: \"Topics list\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().titleList),\n                                    children: topics.map(function(topic) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                passHref: true,\n                                                href: \"/Review/\".concat(subjectLocatorLink, \"/\").concat(formLocatorLink, \"/\").concat(topic.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: topic.id == note[0].id ? \"\".concat((_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicTittle), \" \").concat((_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Active)) : (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicTittle),\n                                                        children: topic.topicName\n                                                    }, topic.id, false, {\n                                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                                        lineNumber: 140,\n                                                        columnNumber: 12\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                                    lineNumber: 139,\n                                                    columnNumber: 11\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                                lineNumber: 136,\n                                                columnNumber: 10\n                                            }, _this1)\n                                        }, topic.id, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                            lineNumber: 135,\n                                            columnNumber: 9\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().rightInnercontainerBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mobile),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_Drawer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    textHeader: \"LIST OF TOPICS\",\n                                    topic: topics,\n                                    active: note[0].id,\n                                    link: \"Review\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().BodyHeader),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().statusBar),\n                                    children: [\n                                        note[0].subject.subjectName,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                            lineNumber: 167,\n                                            columnNumber: 38\n                                        }, _this),\n                                        \" \",\n                                        note[0].form.formName,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                            lineNumber: 168,\n                                            columnNumber: 32\n                                        }, _this),\n                                        \" \",\n                                        note[0].topicName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                    lineNumber: 166,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                lineNumber: 165,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().BodyContent),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().modal),\n                                    children: note.map(function(topic) {\n                                        return topic.review.map(function(review) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                name: review.name,\n                                                id: review.id,\n                                                subject: note[0].subject.subjectName,\n                                                topic: note[0].topicName,\n                                                form: note[0].form.formName\n                                            }, review.id, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                                lineNumber: 176,\n                                                columnNumber: 10\n                                            }, _this1);\n                                        });\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                    lineNumber: 173,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                                lineNumber: 172,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n                lineNumber: 129,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Review/Physics/FormOne/index.tsx\",\n        lineNumber: 122,\n        columnNumber: 3\n    }, _this);\n};\n_s(Index, \"8XnDBuqwid0ybPU6g7WdH1V+qSo=\");\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // //*Removing default search bar :)\n // Index.getLayout = function PageLayout(page:ReactNode) {\n //   return (\n //       <>\n //           {page}\n //       </>\n //   )\n // }\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SZXZpZXcvUGh5c2ljcy9Gb3JtT25lL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwRTtBQUNSO0FBQ2M7QUFNbkQ7QUFDQTtBQUNFO0FBQzBCO0FBQ2dCO0FBQ2xCOztBQUl2RCxJQUFNVyxrQkFBa0IsR0FBRyxTQUFTO0FBQ3BDLElBQU1DLGVBQWUsR0FBRyxTQUFTO0FBNkVqQyxJQUFNQyxLQUFLLEdBQUcsZ0JBR3dDO1FBRnJEQyxNQUFNLFNBQU5BLE1BQU0sRUFDTkMsSUFBSSxTQUFKQSxJQUFJOzs7SUFFSixJQUFvQ2QsR0FBc0IsR0FBdEJBLGlEQUFVLENBQUNRLHdFQUFVLENBQUMsRUFBbERPLFNBQVMsR0FBbUJmLEdBQXNCLENBQWxEZSxTQUFTLEVBQUVDLFlBQVksR0FBS2hCLEdBQXNCLENBQXZDZ0IsWUFBWTtJQUUvQmYsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2ZlLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2Qix1REFBdUQ7S0FDdkQsRUFBRTtRQUFDRCxTQUFTO0tBQUMsQ0FBQyxDQUFDO0lBRWhCLElBQUlGLE1BQU0sQ0FBQ0ksTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN0QixxQkFBTyw4REFBQ1gsbURBQUs7WUFBQ1ksVUFBVSxFQUFFLEdBQUc7Ozs7O2lCQUFJLENBQUM7S0FDbEM7SUFFRCxJQUFJSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNLLE1BQU0sSUFBSSxJQUFJLElBQUlMLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssTUFBTSxJQUFJLFdBQVcsRUFBRTtRQUM1RCxxQkFDQyw4REFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUVuQixtRkFBZTs7Z0JBQUUsZUFDbkI7Z0JBQUNZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1MsU0FBUztnQkFBQyxnQ0FDakM7Ozs7OztpQkFBTSxDQUNMO0tBQ0Y7SUFFRCxpQkFBaUI7SUFFakIscUJBQ0MsOERBQUNILEtBQUc7UUFB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QUFDLENBQUNTLFNBQVM7Ozs7Ozt5Q0FDYjs7Ozs7cUNBQ0Q7MENBQ04sOERBQUNILEtBQUc7Z0NBQUNDLFNBQVMsRUFBRW5CLHNGQUFrQjswQ0FDakMsNEVBQUNrQixLQUFHO29DQUFDQyxTQUFTLEVBQUVuQixnRkFBWTs4Q0FDMUJZLElBQUksQ0FBQ3FCLEdBQUcsQ0FBQyxTQUFDQyxLQUFVOytDQUNwQkEsS0FBSyxDQUFDakIsTUFBTSxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNoQixNQUFjO2lFQUMvQiw4REFBQ1YsK0RBQUs7Z0RBRUxrQixJQUFJLEVBQUVSLE1BQU0sQ0FBQ1EsSUFBSTtnREFDakJZLEVBQUUsRUFBRXBCLE1BQU0sQ0FBQ29CLEVBQUU7Z0RBQ2JXLE9BQU8sRUFBRXBDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29DLE9BQU8sQ0FBQ0MsV0FBVztnREFDcENmLEtBQUssRUFBRXRCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1MsU0FBUztnREFDeEI2QixJQUFJLEVBQUV0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNzQyxJQUFJLENBQUNDLFFBQVE7K0NBTHRCbEMsTUFBTSxDQUFDb0IsRUFBRTs7OztzREFNYjt5Q0FDRixDQUFDO3FDQUFBLENBQ0Y7Ozs7O3lDQUNJOzs7OztxQ0FDRDs7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0Q7Ozs7OzthQUNELENBQ0w7Q0FDRjtHQWhHSzNCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSzs7QUFrR1gsK0RBQWVBLEtBQUssRUFBQyxDQUVyQixvQ0FBb0M7Q0FDcEMsMERBQTBEO0NBQzFELGFBQWE7Q0FDYixXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixNQUFNO0NBQ04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9SZXZpZXcvUGh5c2ljcy9Gb3JtT25lL2luZGV4LnRzeD8yNWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vLi4vLi4vLi4vc3R5bGVzL3Jldmlld0Rpc3BsYXkubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgQ2hldnJvblJpZ2h0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvblJpZ2h0T3V0bGluZWQnO1xyXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnb3MnO1xyXG5pbXBvcnQgeyByZXZpZXcsIHRvcGljLCB0b3BpY1JldmlldyB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGIvcHJpc21hJztcclxuaW1wb3J0IHR5cGUgeyBHZXRTdGF0aWNQcm9wcywgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdG9vbHMvRHJhd2VyJztcclxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29udGV4dC9TdGF0ZUNvbnRleHQnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy90b29scy9tb2RhbCc7XHJcblxyXG5jb25zdCBzdWJqZWN0TG9jYXRvciA9ICdQaHlzaWNzJztcclxuY29uc3QgZm9ybUxvY2F0b3IgPSAnRm9ybSBPbmUnO1xyXG5jb25zdCBzdWJqZWN0TG9jYXRvckxpbmsgPSAnUGh5c2ljcyc7XHJcbmNvbnN0IGZvcm1Mb2NhdG9yTGluayA9ICdGb3JtT25lJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgdG9waWNzRnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS50b3BpY1Jldmlldy5maW5kTWFueSh7XHJcblx0XHR3aGVyZToge1xyXG5cdFx0XHRwdWJsaXNoZWQ6IHRydWUsXHJcblx0XHRcdHN1YmplY3Q6IHtcclxuXHRcdFx0XHRzdWJqZWN0TmFtZTogc3ViamVjdExvY2F0b3IsXHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm06IHtcclxuXHRcdFx0XHRmb3JtTmFtZTogZm9ybUxvY2F0b3IsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0OiB7XHJcblx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHR0b3BpY05hbWU6IHRydWUsXHJcblx0XHRcdHRvcGljRGVmaW5pdGlvbjogdHJ1ZSxcclxuXHRcdFx0Zm9ybToge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0Zm9ybU5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViamVjdDoge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0c3ViamVjdE5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSk7XHJcblx0Y29uc3QgdG9waWNzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0b3BpY3NGcm9tU2VydmVyKSk7XHJcblxyXG5cdGNvbnN0IG5vdGVGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLnRvcGljUmV2aWV3LmZpbmRNYW55KHtcclxuXHRcdHRha2U6IDEsXHJcblx0XHR3aGVyZToge1xyXG5cdFx0XHRwdWJsaXNoZWQ6IHRydWUsXHJcblx0XHRcdHN1YmplY3Q6IHtcclxuXHRcdFx0XHRzdWJqZWN0TmFtZTogc3ViamVjdExvY2F0b3IsXHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm06IHtcclxuXHRcdFx0XHRmb3JtTmFtZTogZm9ybUxvY2F0b3IsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0OiB7XHJcblx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRmb3JtOiB7XHJcblx0XHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0XHRmb3JtTmFtZTogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJqZWN0OiB7XHJcblx0XHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0XHRzdWJqZWN0TmFtZTogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3BpY05hbWU6IHRydWUsXHJcblx0XHRcdHRvcGljRGVmaW5pdGlvbjogdHJ1ZSxcclxuXHRcdFx0cmV2aWV3OiB7XHJcblx0XHRcdFx0d2hlcmU6IHtcclxuXHRcdFx0XHRcdHB1Ymxpc2hlZDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdFx0XHRuYW1lOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IG5vdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vdGVGcm9tU2VydmVyKSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR0b3BpY3MsXHJcblx0XHRcdG5vdGUsXHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBJbmRleCA9ICh7XHJcblx0dG9waWNzLFxyXG5cdG5vdGUsXHJcbn06IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pID0+IHtcclxuXHRjb25zdCB7IG5hdkFjdGl2ZSwgc2V0TmF2QWN0aXZlIH0gPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0TmF2QWN0aXZlKCdSZXZpZXcnKTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHR9LCBbbmF2QWN0aXZlXSk7XHJcblxyXG5cdGlmICh0b3BpY3MubGVuZ3RoIDwgMSkge1xyXG5cdFx0cmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs0MDR9IC8+O1xyXG5cdH1cclxuXHJcblx0aWYgKG5vdGVbMF0ucmV2aWV3ID09IG51bGwgfHwgbm90ZVswXS5yZXZpZXcgPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubm90Rm91bmR9PlxyXG5cdFx0XHRcdFJldmlld3MgZm9yICR7bm90ZVswXS50b3BpY05hbWV9IHRvcGljIHdpbGwgYmUgYXZhaWxhYmxlIHNvb24uXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vIW1hbWJvIHlhbmFhbnphXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT57bm90ZVswXS50b3BpY05hbWV9PC90aXRsZT5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17bm90ZVswXS50b3BpY0RlZmluaXRpb259IC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0na2V5d29yZHMnIGNvbnRlbnQ9e25vdGVbMF0udG9waWNOYW1lfSAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaW5uZXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubGVmdElubmVyY29udGFpbmVyQm9keX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnN0aWNreX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9waWNIZWFkZXJ9PlRvcGljcyBsaXN0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudGl0bGVMaXN0fT5cclxuXHRcdFx0XHRcdFx0XHR7dG9waWNzLm1hcCgodG9waWM6IHRvcGljKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17dG9waWMuaWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhc3NIcmVmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9SZXZpZXcvJHtzdWJqZWN0TG9jYXRvckxpbmt9LyR7Zm9ybUxvY2F0b3JMaW5rfS8ke3RvcGljLmlkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3RvcGljLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcGljLmlkID09IG5vdGVbMF0uaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gYCR7U3R5bGVzLnRvcGljVGl0dGxlfSAke1N0eWxlcy5BY3RpdmV9YFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBTdHlsZXMudG9waWNUaXR0bGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RvcGljLnRvcGljTmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yaWdodElubmVyY29udGFpbmVyQm9keX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm1vYmlsZX0+XHJcblx0XHRcdFx0XHRcdDxEcmF3ZXJcclxuXHRcdFx0XHRcdFx0XHR0ZXh0SGVhZGVyPXsnTElTVCBPRiBUT1BJQ1MnfVxyXG5cdFx0XHRcdFx0XHRcdHRvcGljPXt0b3BpY3N9XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlPXtub3RlWzBdLmlkfVxyXG5cdFx0XHRcdFx0XHRcdGxpbms9eydSZXZpZXcnfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLkJvZHlIZWFkZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnN0YXR1c0Jhcn0+XHJcblx0XHRcdFx0XHRcdFx0e25vdGVbMF0uc3ViamVjdC5zdWJqZWN0TmFtZX0gPENoZXZyb25SaWdodE91dGxpbmVkSWNvbiAvPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0e25vdGVbMF0uZm9ybS5mb3JtTmFtZX0gPENoZXZyb25SaWdodE91dGxpbmVkSWNvbiAvPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0e25vdGVbMF0udG9waWNOYW1lfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5Cb2R5Q29udGVudH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubW9kYWx9PlxyXG5cdFx0XHRcdFx0XHRcdHtub3RlLm1hcCgodG9waWM6IGFueSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdHRvcGljLnJldmlldy5tYXAoKHJldmlldzogcmV2aWV3KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cmV2aWV3LmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e3Jldmlldy5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtyZXZpZXcuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3ViamVjdD17bm90ZVswXS5zdWJqZWN0LnN1YmplY3ROYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvcGljPXtub3RlWzBdLnRvcGljTmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb3JtPXtub3RlWzBdLmZvcm0uZm9ybU5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuLy8gLy8qUmVtb3ZpbmcgZGVmYXVsdCBzZWFyY2ggYmFyIDopXHJcbi8vIEluZGV4LmdldExheW91dCA9IGZ1bmN0aW9uIFBhZ2VMYXlvdXQocGFnZTpSZWFjdE5vZGUpIHtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgICA8PlxyXG4vLyAgICAgICAgICAge3BhZ2V9XHJcbi8vICAgICAgIDwvPlxyXG4vLyAgIClcclxuLy8gfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiU3R5bGVzIiwiQ2hldnJvblJpZ2h0T3V0bGluZWRJY29uIiwiSGVhZCIsIkxpbmsiLCJFcnJvciIsIkRyYXdlciIsIk5hdkNvbnRleHQiLCJNb2RhbCIsInN1YmplY3RMb2NhdG9yTGluayIsImZvcm1Mb2NhdG9yTGluayIsIkluZGV4IiwidG9waWNzIiwibm90ZSIsIm5hdkFjdGl2ZSIsInNldE5hdkFjdGl2ZSIsImxlbmd0aCIsInN0YXR1c0NvZGUiLCJyZXZpZXciLCJkaXYiLCJjbGFzc05hbWUiLCJub3RGb3VuZCIsInRvcGljTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidG9waWNEZWZpbml0aW9uIiwiaW5uZXJDb250YWluZXIiLCJsZWZ0SW5uZXJjb250YWluZXJCb2R5Iiwic3RpY2t5IiwidG9waWNIZWFkZXIiLCJ0aXRsZUxpc3QiLCJtYXAiLCJ0b3BpYyIsInBhc3NIcmVmIiwiaHJlZiIsImlkIiwiYSIsInRvcGljVGl0dGxlIiwiQWN0aXZlIiwicmlnaHRJbm5lcmNvbnRhaW5lckJvZHkiLCJtb2JpbGUiLCJ0ZXh0SGVhZGVyIiwiYWN0aXZlIiwibGluayIsIkJvZHlIZWFkZXIiLCJzdGF0dXNCYXIiLCJzdWJqZWN0Iiwic3ViamVjdE5hbWUiLCJmb3JtIiwiZm9ybU5hbWUiLCJCb2R5Q29udGVudCIsIm1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Review/Physics/FormOne/index.tsx\n");

/***/ })

});