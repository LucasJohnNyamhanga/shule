"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Exams/Physics/FormOne",{

/***/ "./pages/Exams/Physics/FormOne/index.tsx":
/*!***********************************************!*\
  !*** ./pages/Exams/Physics/FormOne/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../styles/reviewDisplay.module.scss */ \"./styles/reviewDisplay.module.scss\");\n/* harmony import */ var _styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ChevronRightOutlined */ \"./node_modules/@mui/icons-material/ChevronRightOutlined.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tools_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tools/Drawer */ \"./components/tools/Drawer.tsx\");\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\n/* harmony import */ var _components_tools_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/tools/modal */ \"./components/tools/modal.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar subjectLocatorLink = \"Physics\";\nvar formLocatorLink = \"FormOne\";\nvar Index = function(param) {\n    var topics = param.topics, note = param.note;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_6__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNavActive(\"Exams\");\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        navActive\n    ]);\n    if (topics.length < 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n            lineNumber: 107,\n            columnNumber: 10\n        }, _this);\n    }\n    if (note[0].exam == null || note[0].exam == \"undefined\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().notFound),\n            children: [\n                \"Reviews for $\",\n                note[0].exam.exam,\n                \" topic will be available soon.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n            lineNumber: 112,\n            columnNumber: 4\n        }, _this);\n    }\n    //!mambo yanaanza\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: note[0].topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: note[0].topicDefinition\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: note[0].topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                lineNumber: 122,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().innerContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().leftInnercontainerBody),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sticky),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicHeader),\n                                    children: \"Topics list\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().titleList),\n                                    children: topics.map(function(topic) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                passHref: true,\n                                                href: \"/Exams/\".concat(subjectLocatorLink, \"/\").concat(formLocatorLink, \"/\").concat(topic.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: topic.id == note[0].id ? \"\".concat((_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicTittle), \" \").concat((_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Active)) : (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicTittle)\n                                                    }, topic.id, false, {\n                                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                                        lineNumber: 139,\n                                                        columnNumber: 12\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                                    lineNumber: 138,\n                                                    columnNumber: 11\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 10\n                                            }, _this1)\n                                        }, topic.id, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                            lineNumber: 134,\n                                            columnNumber: 9\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().rightInnercontainerBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mobile),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_Drawer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    textHeader: \"LIST OF TOPICS\",\n                                    topic: topics,\n                                    active: note[0].id,\n                                    link: \"Review\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                    lineNumber: 157,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                lineNumber: 156,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().BodyHeader),\n                                children: [\n                                    note[0].subject.subjectName,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                        lineNumber: 165,\n                                        columnNumber: 37\n                                    }, _this),\n                                    \" \",\n                                    note[0].form.formName,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                        lineNumber: 166,\n                                        columnNumber: 31\n                                    }, _this),\n                                    \" \",\n                                    note[0].topicName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                lineNumber: 164,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().BodyContent),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().modal),\n                                    children: note.map(function(topic) {\n                                        return topic.review.map(function(review) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                name: review.name,\n                                                id: review.id,\n                                                subject: note[0].subject.subjectName,\n                                                topic: note[0].topicName,\n                                                form: note[0].form.formName\n                                            }, review.id, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                                lineNumber: 173,\n                                                columnNumber: 10\n                                            }, _this1);\n                                        });\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                    lineNumber: 170,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                lineNumber: 169,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                lineNumber: 128,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n        lineNumber: 121,\n        columnNumber: 3\n    }, _this);\n};\n_s(Index, \"8XnDBuqwid0ybPU6g7WdH1V+qSo=\");\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // //*Removing default search bar :)\n // Index.getLayout = function PageLayout(page:ReactNode) {\n //   return (\n //       <>\n //           {page}\n //       </>\n //   )\n // }\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FeGFtcy9QaHlzaWNzL0Zvcm1PbmUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBFO0FBQ1I7QUFDYztBQU9uRDtBQUNBO0FBQ0U7QUFDMEI7QUFDZ0I7QUFDbEI7O0FBSXZELElBQU1XLGtCQUFrQixHQUFHLFNBQVM7QUFDcEMsSUFBTUMsZUFBZSxHQUFHLFNBQVM7QUEyRWpDLElBQU1DLEtBQUssR0FBRyxnQkFHNEM7UUFGckRDLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxJQUFJLFNBQUpBLElBQUk7OztJQUVSLElBQW9DZCxHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ1Esd0VBQVUsQ0FBQyxFQUFsRE8sU0FBUyxHQUFtQmYsR0FBc0IsQ0FBbERlLFNBQVMsRUFBRUMsWUFBWSxHQUFLaEIsR0FBc0IsQ0FBdkNnQixZQUFZO0lBRS9CZixnREFBUyxDQUFDLFdBQU07UUFDZmUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLHVEQUF1RDtLQUN2RCxFQUFFO1FBQUNELFNBQVM7S0FBQyxDQUFDLENBQUM7SUFFaEIsSUFBSUYsTUFBTSxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLHFCQUFPLDhEQUFDWCxtREFBSztZQUFDWSxVQUFVLEVBQUUsR0FBRzs7Ozs7aUJBQUksQ0FBQztLQUNsQztJQUVELElBQUlKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssSUFBSSxJQUFJLElBQUksSUFBSUwsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDSyxJQUFJLElBQUksV0FBVyxFQUFFO1FBQ3hELHFCQUNDLDhEQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBRW5CLG1GQUFlOztnQkFBRSxlQUNuQjtnQkFBQ1ksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDSyxJQUFJLENBQUNBLElBQUk7Z0JBQUMsZ0NBQ2pDOzs7Ozs7aUJBQU0sQ0FDTDtLQUNGO0lBRUQsaUJBQWlCO0lBRWpCLHFCQUNDLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRW5CLG9GQUFnQjs7MEJBQy9CLDhEQUFDRSxrREFBSTs7a0NBQ0osOERBQUNvQixPQUFLO2tDQUFFVixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNXLFNBQVM7Ozs7OzZCQUFTO2tDQUNsQyw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNDLE9BQU8sRUFBQyx1Q0FBdUM7Ozs7OzZCQUFHO2tDQUN4RSw4REFBQ0YsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBRWQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDZSxlQUFlOzs7Ozs2QkFBSTtrQ0FDN0QsOERBQUNILE1BQUk7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUVkLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1csU0FBUzs7Ozs7NkJBQUk7Ozs7OztxQkFDOUM7MEJBQ1AsOERBQUNMLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRW5CLHlGQUFxQjs7a0NBQ3BDLDhEQUFDa0IsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFbkIsaUdBQTZCO2tDQUM1Qyw0RUFBQ2tCLEtBQUc7NEJBQUNDLFNBQVMsRUFBRW5CLGlGQUFhOzs4Q0FDNUIsOERBQUNrQixLQUFHO29DQUFDQyxTQUFTLEVBQUVuQixzRkFBa0I7OENBQUUsYUFBVzs7Ozs7eUNBQU07OENBQ3JELDhEQUFDa0IsS0FBRztvQ0FBQ0MsU0FBUyxFQUFFbkIsb0ZBQWdCOzhDQUM5QlcsTUFBTSxDQUFDc0IsR0FBRyxDQUFDLFNBQUNDLEtBQWU7NkRBQzNCLDhEQUFDaEIsS0FBRztzREFDSCw0RUFBQ2Ysa0RBQUk7Z0RBQ0pnQyxRQUFRO2dEQUNSQyxJQUFJLEVBQUUsU0FBUSxDQUF3QjNCLE1BQWUsQ0FBckNELGtCQUFrQixFQUFDLEdBQUMsQ0FBa0IsQ0FBRzBCLE1BQVEsQ0FBM0J6QixlQUFlLEVBQUMsR0FBQyxDQUFXLFFBQVR5QixLQUFLLENBQUNHLEVBQUUsQ0FBRTswREFDbkUsNEVBQUNDLEdBQUM7OERBQ0QsNEVBQUNwQixLQUFHO3dEQUVIQyxTQUFTLEVBQ1JlLEtBQUssQ0FBQ0csRUFBRSxJQUFJekIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDeUIsRUFBRSxHQUNuQixFQUFDLENBQXdCckMsTUFBYSxDQUFuQ0Esc0ZBQWtCLEVBQUMsR0FBQyxDQUFnQixRQUFkQSxpRkFBYSxDQUFFLEdBQ3hDQSxzRkFBa0I7dURBSmpCa0MsS0FBSyxDQUFDRyxFQUFFOzs7OzhEQU9SOzs7OzswREFDSDs7Ozs7c0RBQ0U7MkNBZkVILEtBQUssQ0FBQ0csRUFBRTs7OztrREFnQlo7cUNBQ04sQ0FBQzs7Ozs7eUNBQ0c7Ozs7OztpQ0FDRDs7Ozs7NkJBQ0Q7a0NBQ04sOERBQUNuQixLQUFHO3dCQUFDQyxTQUFTLEVBQUVuQixrR0FBOEI7OzBDQUM3Qyw4REFBQ2tCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRW5CLGlGQUFhOzBDQUM1Qiw0RUFBQ0ssZ0VBQU07b0NBQ05zQyxVQUFVLEVBQUUsZ0JBQWdCO29DQUM1QlQsS0FBSyxFQUFFdkIsTUFBTTtvQ0FDYmlDLE1BQU0sRUFBRWhDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ3lCLEVBQUU7b0NBQ2xCUSxJQUFJLEVBQUUsUUFBUTs7Ozs7eUNBQ2I7Ozs7O3FDQUNHOzBDQUNOLDhEQUFDM0IsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFbkIscUZBQWlCOztvQ0FDL0JZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ21DLE9BQU8sQ0FBQ0MsV0FBVztvQ0FBQyxHQUFDO2tEQUFBLDhEQUFDL0MsZ0ZBQXdCOzs7OzZDQUFHO29DQUFDLEdBQUc7b0NBQzdEVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNxQyxJQUFJLENBQUNDLFFBQVE7b0NBQUMsR0FBQztrREFBQSw4REFBQ2pELGdGQUF3Qjs7Ozs2Q0FBRztvQ0FBQyxHQUFHO29DQUN2RFcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDVyxTQUFTOzs7Ozs7cUNBQ2I7MENBQ04sOERBQUNMLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRW5CLHNGQUFrQjswQ0FDakMsNEVBQUNrQixLQUFHO29DQUFDQyxTQUFTLEVBQUVuQixnRkFBWTs4Q0FDMUJZLElBQUksQ0FBQ3FCLEdBQUcsQ0FBQyxTQUFDQyxLQUFVOytDQUNwQkEsS0FBSyxDQUFDbUIsTUFBTSxDQUFDcEIsR0FBRyxDQUFDLFNBQUNvQixNQUFjO2lFQUMvQiw4REFBQzlDLCtEQUFLO2dEQUVMa0IsSUFBSSxFQUFFNEIsTUFBTSxDQUFDNUIsSUFBSTtnREFDakJZLEVBQUUsRUFBRWdCLE1BQU0sQ0FBQ2hCLEVBQUU7Z0RBQ2JVLE9BQU8sRUFBRW5DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ21DLE9BQU8sQ0FBQ0MsV0FBVztnREFDcENkLEtBQUssRUFBRXRCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1csU0FBUztnREFDeEIwQixJQUFJLEVBQUVyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNxQyxJQUFJLENBQUNDLFFBQVE7K0NBTHRCRyxNQUFNLENBQUNoQixFQUFFOzs7O3NEQU1iO3lDQUNGLENBQUM7cUNBQUEsQ0FDRjs7Ozs7eUNBQ0k7Ozs7O3FDQUNEOzs7Ozs7NkJBQ0Q7Ozs7OztxQkFDRDs7Ozs7O2FBQ0QsQ0FDTDtDQUNGO0dBOUZLM0IsS0FBSztBQUFMQSxLQUFBQSxLQUFLOztBQWdHWCwrREFBZUEsS0FBSyxFQUFDLENBRXJCLG9DQUFvQztDQUNwQywwREFBMEQ7Q0FDMUQsYUFBYTtDQUNiLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLE1BQU07Q0FDTixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0V4YW1zL1BoeXNpY3MvRm9ybU9uZS9pbmRleC50c3g/MmEyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9yZXZpZXdEaXNwbGF5Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IENoZXZyb25SaWdodE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25SaWdodE91dGxpbmVkJztcclxuaW1wb3J0IHsgdHlwZSB9IGZyb20gJ29zJztcclxuaW1wb3J0IHsgZXhhbVR5cGUsIHJldmlldywgdG9waWMsIHRvcGljUmV2aWV3IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi8uLi8uLi9kYi9wcmlzbWEnO1xyXG5pbXBvcnQgdHlwZSB7IEdldFN0YXRpY1Byb3BzLCBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy90b29scy9EcmF3ZXInO1xyXG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb250ZXh0L1N0YXRlQ29udGV4dCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3Rvb2xzL21vZGFsJztcclxuXHJcbmNvbnN0IHN1YmplY3RMb2NhdG9yID0gJ1BoeXNpY3MnO1xyXG5jb25zdCBmb3JtTG9jYXRvciA9ICdGb3JtIE9uZSc7XHJcbmNvbnN0IHN1YmplY3RMb2NhdG9yTGluayA9ICdQaHlzaWNzJztcclxuY29uc3QgZm9ybUxvY2F0b3JMaW5rID0gJ0Zvcm1PbmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCB0b3BpY3NGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLmV4YW1UeXBlLmZpbmRNYW55KHtcclxuXHRcdHdoZXJlOiB7XHJcblx0XHRcdHB1Ymxpc2hlZDogdHJ1ZSxcclxuXHRcdFx0c3ViamVjdEV4YW1zOiB7XHJcblx0XHRcdFx0c3ViamVjdE5hbWU6IHN1YmplY3RMb2NhdG9yLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb3JtRXhhbXM6IHtcclxuXHRcdFx0XHRmb3JtTmFtZTogZm9ybUxvY2F0b3IsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0OiB7XHJcblx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRuYW1lOiB0cnVlLFxyXG5cdFx0XHRkZWZpbml0aW9uOiB0cnVlLFxyXG5cdFx0XHRmb3JtRXhhbXM6IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdGZvcm1OYW1lOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YmplY3RFeGFtczoge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0c3ViamVjdE5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSk7XHJcblx0Y29uc3QgdG9waWNzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0b3BpY3NGcm9tU2VydmVyKSk7XHJcblxyXG5cdGNvbnN0IG5vdGVGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLmV4YW1UeXBlLmZpbmRNYW55KHtcclxuXHRcdHRha2U6IDEsXHJcblx0XHR3aGVyZToge1xyXG5cdFx0XHRwdWJsaXNoZWQ6IHRydWUsXHJcblx0XHRcdHN1YmplY3RFeGFtczoge1xyXG5cdFx0XHRcdHN1YmplY3ROYW1lOiBzdWJqZWN0TG9jYXRvcixcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybUV4YW1zOiB7XHJcblx0XHRcdFx0Zm9ybU5hbWU6IGZvcm1Mb2NhdG9yLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHNlbGVjdDoge1xyXG5cdFx0XHRpZDogdHJ1ZSxcclxuXHRcdFx0Zm9ybUV4YW1zOiB7XHJcblx0XHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0XHRmb3JtTmFtZTogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJqZWN0RXhhbXM6IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdHN1YmplY3ROYW1lOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdG5hbWU6IHRydWUsXHJcblx0XHRcdGRlZmluaXRpb246IHRydWUsXHJcblx0XHRcdGV4YW06IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRydWUsXHJcblx0XHRcdFx0XHRleGFtOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IG5vdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vdGVGcm9tU2VydmVyKSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR0b3BpY3MsXHJcblx0XHRcdG5vdGUsXHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBJbmRleCA9ICh7XG4gICAgXHR0b3BpY3MsXG4gICAgXHRub3RlLFxuICAgIH06IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pID0+IHtcclxuXHRjb25zdCB7IG5hdkFjdGl2ZSwgc2V0TmF2QWN0aXZlIH0gPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0TmF2QWN0aXZlKCdFeGFtcycpO1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFtuYXZBY3RpdmVdKTtcclxuXHJcblx0aWYgKHRvcGljcy5sZW5ndGggPCAxKSB7XHJcblx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcblx0fVxyXG5cclxuXHRpZiAobm90ZVswXS5leGFtID09IG51bGwgfHwgbm90ZVswXS5leGFtID09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5vdEZvdW5kfT5cclxuXHRcdFx0XHRSZXZpZXdzIGZvciAke25vdGVbMF0uZXhhbS5leGFtfSB0b3BpYyB3aWxsIGJlIGF2YWlsYWJsZSBzb29uLlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHQvLyFtYW1ibyB5YW5hYW56YVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb250YWluZXJ9PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+e25vdGVbMF0udG9waWNOYW1lfTwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e25vdGVbMF0udG9waWNEZWZpbml0aW9ufSAvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PXtub3RlWzBdLnRvcGljTmFtZX0gLz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmlubmVyQ29udGFpbmVyfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmxlZnRJbm5lcmNvbnRhaW5lckJvZHl9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5zdGlja3l9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnRvcGljSGVhZGVyfT5Ub3BpY3MgbGlzdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnRpdGxlTGlzdH0+XHJcblx0XHRcdFx0XHRcdFx0e3RvcGljcy5tYXAoKHRvcGljOiBleGFtVHlwZSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e3RvcGljLmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXNzSHJlZlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e2AvRXhhbXMvJHtzdWJqZWN0TG9jYXRvckxpbmt9LyR7Zm9ybUxvY2F0b3JMaW5rfS8ke3RvcGljLmlkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3RvcGljLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcGljLmlkID09IG5vdGVbMF0uaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gYCR7U3R5bGVzLnRvcGljVGl0dGxlfSAke1N0eWxlcy5BY3RpdmV9YFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBTdHlsZXMudG9waWNUaXR0bGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yaWdodElubmVyY29udGFpbmVyQm9keX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm1vYmlsZX0+XHJcblx0XHRcdFx0XHRcdDxEcmF3ZXJcclxuXHRcdFx0XHRcdFx0XHR0ZXh0SGVhZGVyPXsnTElTVCBPRiBUT1BJQ1MnfVxyXG5cdFx0XHRcdFx0XHRcdHRvcGljPXt0b3BpY3N9XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlPXtub3RlWzBdLmlkfVxyXG5cdFx0XHRcdFx0XHRcdGxpbms9eydSZXZpZXcnfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLkJvZHlIZWFkZXJ9PlxyXG5cdFx0XHRcdFx0XHR7bm90ZVswXS5zdWJqZWN0LnN1YmplY3ROYW1lfSA8Q2hldnJvblJpZ2h0T3V0bGluZWRJY29uIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0e25vdGVbMF0uZm9ybS5mb3JtTmFtZX0gPENoZXZyb25SaWdodE91dGxpbmVkSWNvbiAvPnsnICd9XHJcblx0XHRcdFx0XHRcdHtub3RlWzBdLnRvcGljTmFtZX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5Cb2R5Q29udGVudH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubW9kYWx9PlxyXG5cdFx0XHRcdFx0XHRcdHtub3RlLm1hcCgodG9waWM6IGFueSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdHRvcGljLnJldmlldy5tYXAoKHJldmlldzogcmV2aWV3KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cmV2aWV3LmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e3Jldmlldy5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtyZXZpZXcuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3ViamVjdD17bm90ZVswXS5zdWJqZWN0LnN1YmplY3ROYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvcGljPXtub3RlWzBdLnRvcGljTmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb3JtPXtub3RlWzBdLmZvcm0uZm9ybU5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuLy8gLy8qUmVtb3ZpbmcgZGVmYXVsdCBzZWFyY2ggYmFyIDopXHJcbi8vIEluZGV4LmdldExheW91dCA9IGZ1bmN0aW9uIFBhZ2VMYXlvdXQocGFnZTpSZWFjdE5vZGUpIHtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgICA8PlxyXG4vLyAgICAgICAgICAge3BhZ2V9XHJcbi8vICAgICAgIDwvPlxyXG4vLyAgIClcclxuLy8gfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiU3R5bGVzIiwiQ2hldnJvblJpZ2h0T3V0bGluZWRJY29uIiwiSGVhZCIsIkxpbmsiLCJFcnJvciIsIkRyYXdlciIsIk5hdkNvbnRleHQiLCJNb2RhbCIsInN1YmplY3RMb2NhdG9yTGluayIsImZvcm1Mb2NhdG9yTGluayIsIkluZGV4IiwidG9waWNzIiwibm90ZSIsIm5hdkFjdGl2ZSIsInNldE5hdkFjdGl2ZSIsImxlbmd0aCIsInN0YXR1c0NvZGUiLCJleGFtIiwiZGl2IiwiY2xhc3NOYW1lIiwibm90Rm91bmQiLCJjb250YWluZXIiLCJ0aXRsZSIsInRvcGljTmFtZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRvcGljRGVmaW5pdGlvbiIsImlubmVyQ29udGFpbmVyIiwibGVmdElubmVyY29udGFpbmVyQm9keSIsInN0aWNreSIsInRvcGljSGVhZGVyIiwidGl0bGVMaXN0IiwibWFwIiwidG9waWMiLCJwYXNzSHJlZiIsImhyZWYiLCJpZCIsImEiLCJ0b3BpY1RpdHRsZSIsIkFjdGl2ZSIsInJpZ2h0SW5uZXJjb250YWluZXJCb2R5IiwibW9iaWxlIiwidGV4dEhlYWRlciIsImFjdGl2ZSIsImxpbmsiLCJCb2R5SGVhZGVyIiwic3ViamVjdCIsInN1YmplY3ROYW1lIiwiZm9ybSIsImZvcm1OYW1lIiwiQm9keUNvbnRlbnQiLCJtb2RhbCIsInJldmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Exams/Physics/FormOne/index.tsx\n");

/***/ })

});