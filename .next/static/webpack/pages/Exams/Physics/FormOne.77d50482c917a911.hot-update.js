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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../styles/reviewDisplay.module.scss */ \"./styles/reviewDisplay.module.scss\");\n/* harmony import */ var _styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ChevronRightOutlined */ \"./node_modules/@mui/icons-material/ChevronRightOutlined.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tools_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tools/Drawer */ \"./components/tools/Drawer.tsx\");\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\n/* harmony import */ var _components_tools_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/tools/modal */ \"./components/tools/modal.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar subjectLocatorLink = \"Physics\";\nvar formLocatorLink = \"FormOne\";\nvar Index = function(param) {\n    var topics = param.topics, note = param.note;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_6__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNavActive(\"Exams\");\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        navActive\n    ]);\n    if (topics.length < 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n            lineNumber: 106,\n            columnNumber: 10\n        }, _this);\n    }\n    if (note[0].review == null || note[0].review == \"undefined\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().notFound),\n            children: [\n                \"Reviews for $\",\n                note[0].topicName,\n                \" topic will be available soon.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n            lineNumber: 111,\n            columnNumber: 4\n        }, _this);\n    }\n    //!mambo yanaanza\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: note[0].topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: note[0].topicDefinition\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: note[0].topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                lineNumber: 121,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().innerContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().leftInnercontainerBody),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sticky),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicHeader),\n                                    children: \"Topics list\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().titleList),\n                                    children: topics.map(function(topic) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                passHref: true,\n                                                href: \"/Exams/\".concat(subjectLocatorLink, \"/\").concat(formLocatorLink, \"/\").concat(topic.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: topic.id == note[0].id ? \"\".concat((_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicTittle), \" \").concat((_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Active)) : (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().topicTittle),\n                                                        children: topic.topicName\n                                                    }, topic.id, false, {\n                                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                                        lineNumber: 138,\n                                                        columnNumber: 12\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                                    lineNumber: 137,\n                                                    columnNumber: 11\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 10\n                                            }, _this1)\n                                        }, topic.id, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 9\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().rightInnercontainerBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mobile),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_Drawer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    textHeader: \"LIST OF TOPICS\",\n                                    topic: topics,\n                                    active: note[0].id,\n                                    link: \"Review\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                    lineNumber: 156,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().BodyHeader),\n                                children: [\n                                    note[0].subject.subjectName,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                        lineNumber: 164,\n                                        columnNumber: 37\n                                    }, _this),\n                                    \" \",\n                                    note[0].form.formName,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                        lineNumber: 165,\n                                        columnNumber: 31\n                                    }, _this),\n                                    \" \",\n                                    note[0].topicName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().BodyContent),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_reviewDisplay_module_scss__WEBPACK_IMPORTED_MODULE_8___default().modal),\n                                    children: note.map(function(topic) {\n                                        return topic.review.map(function(review) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                name: review.name,\n                                                id: review.id,\n                                                subject: note[0].subject.subjectName,\n                                                topic: note[0].topicName,\n                                                form: note[0].form.formName\n                                            }, review.id, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                                lineNumber: 172,\n                                                columnNumber: 10\n                                            }, _this1);\n                                        });\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                    lineNumber: 169,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n                lineNumber: 127,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Exams/Physics/FormOne/index.tsx\",\n        lineNumber: 120,\n        columnNumber: 3\n    }, _this);\n};\n_s(Index, \"8XnDBuqwid0ybPU6g7WdH1V+qSo=\");\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // //*Removing default search bar :)\n // Index.getLayout = function PageLayout(page:ReactNode) {\n //   return (\n //       <>\n //           {page}\n //       </>\n //   )\n // }\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FeGFtcy9QaHlzaWNzL0Zvcm1PbmUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBFO0FBQ1I7QUFDYztBQU9uRDtBQUNBO0FBQ0U7QUFDMEI7QUFDZ0I7QUFDbEI7O0FBSXZELElBQU1XLGtCQUFrQixHQUFHLFNBQVM7QUFDcEMsSUFBTUMsZUFBZSxHQUFHLFNBQVM7QUEwRWpDLElBQU1DLEtBQUssR0FBRyxnQkFHd0M7UUFGckRDLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxJQUFJLFNBQUpBLElBQUk7OztJQUVKLElBQW9DZCxHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ1Esd0VBQVUsQ0FBQyxFQUFsRE8sU0FBUyxHQUFtQmYsR0FBc0IsQ0FBbERlLFNBQVMsRUFBRUMsWUFBWSxHQUFLaEIsR0FBc0IsQ0FBdkNnQixZQUFZO0lBRS9CZixnREFBUyxDQUFDLFdBQU07UUFDZmUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLHVEQUF1RDtLQUN2RCxFQUFFO1FBQUNELFNBQVM7S0FBQyxDQUFDLENBQUM7SUFFaEIsSUFBSUYsTUFBTSxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLHFCQUFPLDhEQUFDWCxtREFBSztZQUFDWSxVQUFVLEVBQUUsR0FBRzs7Ozs7aUJBQUksQ0FBQztLQUNsQztJQUVELElBQUlKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssTUFBTSxJQUFJLElBQUksSUFBSUwsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDSyxNQUFNLElBQUksV0FBVyxFQUFFO1FBQzVELHFCQUNDLDhEQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBRW5CLG1GQUFlOztnQkFBRSxlQUNuQjtnQkFBQ1ksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDUyxTQUFTO2dCQUFDLGdDQUNqQzs7Ozs7O2lCQUFNLENBQ0w7S0FDRjtJQUVELGlCQUFpQjtJQUVqQixxQkFDQyw4REFBQ0gsS0FBRztRQUFD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QUNDLFNBQVMsRUFBRW5CLHNGQUFrQjswQ0FDakMsNEVBQUNrQixLQUFHO29DQUFDQyxTQUFTLEVBQUVuQixnRkFBWTs4Q0FDMUJZLElBQUksQ0FBQ3FCLEdBQUcsQ0FBQyxTQUFDQyxLQUFVOytDQUNwQkEsS0FBSyxDQUFDakIsTUFBTSxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNoQixNQUFjO2lFQUMvQiw4REFBQ1YsK0RBQUs7Z0RBRUxrQixJQUFJLEVBQUVSLE1BQU0sQ0FBQ1EsSUFBSTtnREFDakJZLEVBQUUsRUFBRXBCLE1BQU0sQ0FBQ29CLEVBQUU7Z0RBQ2JVLE9BQU8sRUFBRW5DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ21DLE9BQU8sQ0FBQ0MsV0FBVztnREFDcENkLEtBQUssRUFBRXRCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1MsU0FBUztnREFDeEI0QixJQUFJLEVBQUVyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNxQyxJQUFJLENBQUNDLFFBQVE7K0NBTHRCakMsTUFBTSxDQUFDb0IsRUFBRTs7OztzREFNYjt5Q0FDRixDQUFDO3FDQUFBLENBQ0Y7Ozs7O3lDQUNJOzs7OztxQ0FDRDs7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0Q7Ozs7OzthQUNELENBQ0w7Q0FDRjtHQTlGSzNCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSzs7QUFnR1gsK0RBQWVBLEtBQUssRUFBQyxDQUVyQixvQ0FBb0M7Q0FDcEMsMERBQTBEO0NBQzFELGFBQWE7Q0FDYixXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixNQUFNO0NBQ04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9FeGFtcy9QaHlzaWNzL0Zvcm1PbmUvaW5kZXgudHN4PzJhMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZXMvcmV2aWV3RGlzcGxheS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBDaGV2cm9uUmlnaHRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uUmlnaHRPdXRsaW5lZCc7XHJcbmltcG9ydCB7IHR5cGUgfSBmcm9tICdvcyc7XHJcbmltcG9ydCB7IHJldmlldywgdG9waWMsIHRvcGljUmV2aWV3IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi8uLi8uLi9kYi9wcmlzbWEnO1xyXG5pbXBvcnQgdHlwZSB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJztcclxuaW1wb3J0IERyYXdlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3Rvb2xzL0RyYXdlcic7XHJcbmltcG9ydCB7IE5hdkNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbnRleHQvU3RhdGVDb250ZXh0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdG9vbHMvbW9kYWwnO1xyXG5cclxuY29uc3Qgc3ViamVjdExvY2F0b3IgPSAnUGh5c2ljcyc7XHJcbmNvbnN0IGZvcm1Mb2NhdG9yID0gJ0Zvcm0gT25lJztcclxuY29uc3Qgc3ViamVjdExvY2F0b3JMaW5rID0gJ1BoeXNpY3MnO1xyXG5jb25zdCBmb3JtTG9jYXRvckxpbmsgPSAnRm9ybU9uZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHRvcGljc0Zyb21TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEuZXhhbVR5cGUuZmluZE1hbnkoe1xyXG5cdFx0d2hlcmU6IHtcclxuXHRcdFx0cHVibGlzaGVkOiB0cnVlLFxyXG5cdFx0XHRzdWJqZWN0RXhhbXM6IHtcclxuXHRcdFx0XHRzdWJqZWN0TmFtZTogc3ViamVjdExvY2F0b3IsXHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm1FeGFtczoge1xyXG5cdFx0XHRcdGZvcm1OYW1lOiBmb3JtTG9jYXRvcixcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdG5hbWU6IHRydWUsXHJcblx0XHRcdGRlZmluaXRpb246IHRydWUsXHJcblx0XHRcdGZvcm1FeGFtczoge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0Zm9ybU5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViamVjdEV4YW1zOiB7XHJcblx0XHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0XHRzdWJqZWN0TmFtZTogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRjb25zdCB0b3BpY3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRvcGljc0Zyb21TZXJ2ZXIpKTtcclxuXHJcblx0Y29uc3Qgbm90ZUZyb21TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEuZXhhbVR5cGUuZmluZE1hbnkoe1xyXG5cdFx0dGFrZTogMSxcclxuXHRcdHdoZXJlOiB7XHJcblx0XHRcdHB1Ymxpc2hlZDogdHJ1ZSxcclxuXHRcdFx0c3ViamVjdEV4YW1zOiB7XHJcblx0XHRcdFx0c3ViamVjdE5hbWU6IHN1YmplY3RMb2NhdG9yLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb3JtRXhhbXM6IHtcclxuXHRcdFx0XHRmb3JtTmFtZTogZm9ybUxvY2F0b3IsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0OiB7XHJcblx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHRmb3JtRXhhbXM6IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdGZvcm1OYW1lOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YmplY3RFeGFtczoge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0c3ViamVjdE5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0bmFtZTogdHJ1ZSxcclxuXHRcdFx0ZGVmaW5pdGlvbjogdHJ1ZSxcclxuXHRcdFx0ZXhhbToge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRjb25zdCBub3RlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShub3RlRnJvbVNlcnZlcikpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dG9waWNzLFxyXG5cdFx0XHRub3RlLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgSW5kZXggPSAoe1xyXG5cdHRvcGljcyxcclxuXHRub3RlLFxyXG59OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSA9PiB7XHJcblx0Y29uc3QgeyBuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZSB9ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldE5hdkFjdGl2ZSgnRXhhbXMnKTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHR9LCBbbmF2QWN0aXZlXSk7XHJcblxyXG5cdGlmICh0b3BpY3MubGVuZ3RoIDwgMSkge1xyXG5cdFx0cmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs0MDR9IC8+O1xyXG5cdH1cclxuXHJcblx0aWYgKG5vdGVbMF0ucmV2aWV3ID09IG51bGwgfHwgbm90ZVswXS5yZXZpZXcgPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubm90Rm91bmR9PlxyXG5cdFx0XHRcdFJldmlld3MgZm9yICR7bm90ZVswXS50b3BpY05hbWV9IHRvcGljIHdpbGwgYmUgYXZhaWxhYmxlIHNvb24uXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vIW1hbWJvIHlhbmFhbnphXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT57bm90ZVswXS50b3BpY05hbWV9PC90aXRsZT5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17bm90ZVswXS50b3BpY0RlZmluaXRpb259IC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0na2V5d29yZHMnIGNvbnRlbnQ9e25vdGVbMF0udG9waWNOYW1lfSAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaW5uZXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubGVmdElubmVyY29udGFpbmVyQm9keX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnN0aWNreX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudG9waWNIZWFkZXJ9PlRvcGljcyBsaXN0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudGl0bGVMaXN0fT5cclxuXHRcdFx0XHRcdFx0XHR7dG9waWNzLm1hcCgodG9waWM6IHRvcGljKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17dG9waWMuaWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhc3NIcmVmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9FeGFtcy8ke3N1YmplY3RMb2NhdG9yTGlua30vJHtmb3JtTG9jYXRvckxpbmt9LyR7dG9waWMuaWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17dG9waWMuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9waWMuaWQgPT0gbm90ZVswXS5pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBgJHtTdHlsZXMudG9waWNUaXR0bGV9ICR7U3R5bGVzLkFjdGl2ZX1gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFN0eWxlcy50b3BpY1RpdHRsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dG9waWMudG9waWNOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnJpZ2h0SW5uZXJjb250YWluZXJCb2R5fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubW9iaWxlfT5cclxuXHRcdFx0XHRcdFx0PERyYXdlclxyXG5cdFx0XHRcdFx0XHRcdHRleHRIZWFkZXI9eydMSVNUIE9GIFRPUElDUyd9XHJcblx0XHRcdFx0XHRcdFx0dG9waWM9e3RvcGljc31cclxuXHRcdFx0XHRcdFx0XHRhY3RpdmU9e25vdGVbMF0uaWR9XHJcblx0XHRcdFx0XHRcdFx0bGluaz17J1Jldmlldyd9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuQm9keUhlYWRlcn0+XHJcblx0XHRcdFx0XHRcdHtub3RlWzBdLnN1YmplY3Quc3ViamVjdE5hbWV9IDxDaGV2cm9uUmlnaHRPdXRsaW5lZEljb24gLz57JyAnfVxyXG5cdFx0XHRcdFx0XHR7bm90ZVswXS5mb3JtLmZvcm1OYW1lfSA8Q2hldnJvblJpZ2h0T3V0bGluZWRJY29uIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0e25vdGVbMF0udG9waWNOYW1lfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLkJvZHlDb250ZW50fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5tb2RhbH0+XHJcblx0XHRcdFx0XHRcdFx0e25vdGUubWFwKCh0b3BpYzogYW55KSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0dG9waWMucmV2aWV3Lm1hcCgocmV2aWV3OiByZXZpZXcpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PE1vZGFsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtyZXZpZXcuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17cmV2aWV3Lm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e3Jldmlldy5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdWJqZWN0PXtub3RlWzBdLnN1YmplY3Quc3ViamVjdE5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dG9waWM9e25vdGVbMF0udG9waWNOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvcm09e25vdGVbMF0uZm9ybS5mb3JtTmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdCkpXHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxyXG4vLyAvLypSZW1vdmluZyBkZWZhdWx0IHNlYXJjaCBiYXIgOilcclxuLy8gSW5kZXguZ2V0TGF5b3V0ID0gZnVuY3Rpb24gUGFnZUxheW91dChwYWdlOlJlYWN0Tm9kZSkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICAgIDw+XHJcbi8vICAgICAgICAgICB7cGFnZX1cclxuLy8gICAgICAgPC8+XHJcbi8vICAgKVxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJTdHlsZXMiLCJDaGV2cm9uUmlnaHRPdXRsaW5lZEljb24iLCJIZWFkIiwiTGluayIsIkVycm9yIiwiRHJhd2VyIiwiTmF2Q29udGV4dCIsIk1vZGFsIiwic3ViamVjdExvY2F0b3JMaW5rIiwiZm9ybUxvY2F0b3JMaW5rIiwiSW5kZXgiLCJ0b3BpY3MiLCJub3RlIiwibmF2QWN0aXZlIiwic2V0TmF2QWN0aXZlIiwibGVuZ3RoIiwic3RhdHVzQ29kZSIsInJldmlldyIsImRpdiIsImNsYXNzTmFtZSIsIm5vdEZvdW5kIiwidG9waWNOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0b3BpY0RlZmluaXRpb24iLCJpbm5lckNvbnRhaW5lciIsImxlZnRJbm5lcmNvbnRhaW5lckJvZHkiLCJzdGlja3kiLCJ0b3BpY0hlYWRlciIsInRpdGxlTGlzdCIsIm1hcCIsInRvcGljIiwicGFzc0hyZWYiLCJocmVmIiwiaWQiLCJhIiwidG9waWNUaXR0bGUiLCJBY3RpdmUiLCJyaWdodElubmVyY29udGFpbmVyQm9keSIsIm1vYmlsZSIsInRleHRIZWFkZXIiLCJhY3RpdmUiLCJsaW5rIiwiQm9keUhlYWRlciIsInN1YmplY3QiLCJzdWJqZWN0TmFtZSIsImZvcm0iLCJmb3JtTmFtZSIsIkJvZHlDb250ZW50IiwibW9kYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Exams/Physics/FormOne/index.tsx\n");

/***/ })

});