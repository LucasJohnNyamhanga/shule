"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Notes/Physics/FormOne",{

/***/ "./pages/Notes/Physics/FormOne/index.tsx":
/*!***********************************************!*\
  !*** ./pages/Notes/Physics/FormOne/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../styles/notesDisplay.module.scss */ \"./styles/notesDisplay.module.scss\");\n/* harmony import */ var _styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ChevronRightOutlined */ \"./node_modules/@mui/icons-material/ChevronRightOutlined.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_tools_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tools/Drawer */ \"./components/tools/Drawer.tsx\");\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar subjectLocatorLink = \"Physics\";\nvar formLocatorLink = \"FormOne\";\nvar Index = function(param) {\n    var topics = param.topics, note = param.note, download = param.download;\n    var _this1 = _this;\n    var truncate = function truncate(str) {\n        return str.length > truncateLimit ? str.slice(0, truncateLimit) + \"...\" : str;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_6__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    console.log(download);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNavActive(\"Notes\");\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        navActive\n    ]);\n    if (topics.length < 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n            lineNumber: 121,\n            columnNumber: 10\n        }, _this);\n    }\n    var htmlServer;\n    if (typeof note[0].note == \"undefined\") {\n        htmlServer = \"<div className={Styles.notFound} >Notes for \".concat(note[0].topicName, \" topic will be available soon.</div>\");\n    } else {\n        var result = note[0].note.content.replaceAll(\"img\", 'Image layout=\"fill\" objectfit=\"cover\"');\n        htmlServer = result;\n    }\n    var truncateLimit = 12;\n    //!mambo yanaanza\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: note[0].topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: note[0].topicDefinition\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: note[0].topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                lineNumber: 147,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().innerContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().leftInnercontainerBody),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sticky),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().topicHeader),\n                                    children: \"Topics list\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                    lineNumber: 156,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().titleList),\n                                    children: topics.map(function(topic) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                passHref: true,\n                                                href: \"/Notes/\".concat(subjectLocatorLink, \"/\").concat(formLocatorLink, \"/\").concat(topic.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: topic.id == note[0].id ? \"\".concat((_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().topicTittle), \" \").concat((_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Active)) : (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().topicTittle),\n                                                        children: topic.topicName\n                                                    }, topic.id, false, {\n                                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                                        lineNumber: 164,\n                                                        columnNumber: 12\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                                    lineNumber: 163,\n                                                    columnNumber: 11\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                                lineNumber: 160,\n                                                columnNumber: 10\n                                            }, _this1)\n                                        }, topic.id, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                            lineNumber: 159,\n                                            columnNumber: 9\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                    lineNumber: 157,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                            lineNumber: 155,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rightInnercontainerBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobile),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_Drawer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    textHeader: \"LIST OF TOPICS\",\n                                    topic: topics,\n                                    active: note[0].id,\n                                    link: \"Notes\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                    lineNumber: 182,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().BodyHeader),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().statusBar),\n                                        children: [\n                                            note[0].subject.subjectName,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                                lineNumber: 191,\n                                                columnNumber: 38\n                                            }, _this),\n                                            \" \",\n                                            note[0].form.formName,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                                lineNumber: 192,\n                                                columnNumber: 32\n                                            }, _this),\n                                            \" \",\n                                            truncate(note[0].topicName)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                        lineNumber: 190,\n                                        columnNumber: 7\n                                    }, _this),\n                                    download.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().download),\n                                        children: \"Download Notes\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                        lineNumber: 196,\n                                        columnNumber: 8\n                                    }, _this) : \"\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                lineNumber: 189,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_7___default().BodyContent),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"ckContent\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: htmlServer\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                    lineNumber: 202,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                                lineNumber: 201,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                        lineNumber: 180,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n                lineNumber: 153,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/index.tsx\",\n        lineNumber: 146,\n        columnNumber: 3\n    }, _this);\n};\n_s(Index, \"8XnDBuqwid0ybPU6g7WdH1V+qSo=\");\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // //*Removing default search bar :)\n // Index.getLayout = function PageLayout(page:ReactNode) {\n //   return (\n //       <>\n //           {page}\n //       </>\n //   )\n // }\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Ob3Rlcy9QaHlzaWNzL0Zvcm1PbmUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBcUQ7QUFDWTtBQUNlO0FBSW5EO0FBQ0E7QUFDRTtBQUMwQjtBQUNnQjs7QUFJekUsSUFBTVUsa0JBQWtCLEdBQUcsU0FBUztBQUNwQyxJQUFNQyxlQUFlLEdBQUcsU0FBUztBQTBGakMsSUFBTUMsS0FBSyxHQUFHLGdCQUk0QztRQUhyREMsTUFBTSxTQUFOQSxNQUFNLEVBQ05DLElBQUksU0FBSkEsSUFBSSxFQUNKQyxRQUFRLFNBQVJBLFFBQVE7O1FBNEJIQyxRQUFRLEdBQWpCLFNBQVNBLFFBQVEsQ0FBQ0MsR0FBVyxFQUFFO1FBQzlCLE9BQU9BLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHQyxhQUFhLEdBQzlCRixHQUFHLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUVELGFBQWEsQ0FBQyxHQUFHLEtBQUssR0FDbkNGLEdBQUcsQ0FBQztLQUNQOztJQTlCRCxJQUFvQ2hCLEdBQXNCLEdBQXRCQSxpREFBVSxDQUFDUSx3RUFBVSxDQUFDLEVBQWxEWSxTQUFTLEdBQW1CcEIsR0FBc0IsQ0FBbERvQixTQUFTLEVBQUVDLFlBQVksR0FBS3JCLEdBQXNCLENBQXZDcUIsWUFBWTtJQUUvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNULFFBQVEsQ0FBQyxDQUFDO0lBRXRCYixnREFBUyxDQUFDLFdBQU07UUFDZm9CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0Qix1REFBdUQ7S0FDdkQsRUFBRTtRQUFDRCxTQUFTO0tBQUMsQ0FBQyxDQUFDO0lBRWhCLElBQUlSLE1BQU0sQ0FBQ0ssTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN0QixxQkFBTyw4REFBQ1gsbURBQUs7WUFBQ2tCLFVBQVUsRUFBRSxHQUFHOzs7OztpQkFBSSxDQUFDO0tBQ2xDO0lBRUQsSUFBSUMsVUFBVTtJQUVkLElBQUksT0FBT1osSUFBSSxDQUFDLENBQUMs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aWNzL0Zvcm1PbmUvaW5kZXgudHN4PzFiOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZXMvbm90ZXNEaXNwbGF5Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IENoZXZyb25SaWdodE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25SaWdodE91dGxpbmVkJztcclxuaW1wb3J0IHsgdG9waWMgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uLy4uLy4uL2RiL3ByaXNtYSc7XHJcbmltcG9ydCB0eXBlIHsgR2V0U3RhdGljUHJvcHMsIEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJztcclxuaW1wb3J0IERyYXdlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3Rvb2xzL0RyYXdlcic7XHJcbmltcG9ydCB7IE5hdkNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbnRleHQvU3RhdGVDb250ZXh0JztcclxuXHJcbmNvbnN0IHN1YmplY3RMb2NhdG9yID0gJ1BoeXNpY3MnO1xyXG5jb25zdCBmb3JtTG9jYXRvciA9ICdGb3JtIE9uZSc7XHJcbmNvbnN0IHN1YmplY3RMb2NhdG9yTGluayA9ICdQaHlzaWNzJztcclxuY29uc3QgZm9ybUxvY2F0b3JMaW5rID0gJ0Zvcm1PbmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCB0b3BpY3NGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLnRvcGljLmZpbmRNYW55KHtcclxuXHRcdHdoZXJlOiB7XHJcblx0XHRcdHB1Ymxpc2hlZDogdHJ1ZSxcclxuXHRcdFx0c3ViamVjdDoge1xyXG5cdFx0XHRcdHN1YmplY3ROYW1lOiBzdWJqZWN0TG9jYXRvcixcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybToge1xyXG5cdFx0XHRcdGZvcm1OYW1lOiBmb3JtTG9jYXRvcixcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdHRvcGljTmFtZTogdHJ1ZSxcclxuXHRcdFx0dG9waWNEZWZpbml0aW9uOiB0cnVlLFxyXG5cdFx0XHRmb3JtOiB7XHJcblx0XHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0XHRmb3JtTmFtZTogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJqZWN0OiB7XHJcblx0XHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0XHRzdWJqZWN0TmFtZTogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRjb25zdCB0b3BpY3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRvcGljc0Zyb21TZXJ2ZXIpKTtcclxuXHJcblx0Y29uc3QgZG93bmxvYWRGcm9tU2VydmVyID0gYXdhaXQgcHJpc21hLm5vdGVzRG93bmxvYWRhYmxlLmZpbmRNYW55KHtcclxuXHRcdHdoZXJlOiB7XHJcblx0XHRcdHB1Ymxpc2hlZDogdHJ1ZSxcclxuXHRcdFx0c3ViamVjdDoge1xyXG5cdFx0XHRcdHN1YmplY3ROYW1lOiBzdWJqZWN0TG9jYXRvcixcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybToge1xyXG5cdFx0XHRcdGZvcm1OYW1lOiBmb3JtTG9jYXRvcixcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0aWQ6IHRydWUsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IGRvd25sb2FkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkb3dubG9hZEZyb21TZXJ2ZXIpKTtcclxuXHJcblx0Y29uc3Qgbm90ZUZyb21TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEudG9waWMuZmluZE1hbnkoe1xyXG5cdFx0dGFrZTogMSxcclxuXHRcdHdoZXJlOiB7XHJcblx0XHRcdHB1Ymxpc2hlZDogdHJ1ZSxcclxuXHRcdFx0c3ViamVjdDoge1xyXG5cdFx0XHRcdHN1YmplY3ROYW1lOiBzdWJqZWN0TG9jYXRvcixcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybToge1xyXG5cdFx0XHRcdGZvcm1OYW1lOiBmb3JtTG9jYXRvcixcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdG5vdGU6IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybToge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0Zm9ybU5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViamVjdDoge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0c3ViamVjdE5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9waWNOYW1lOiB0cnVlLFxyXG5cdFx0XHR0b3BpY0RlZmluaXRpb246IHRydWUsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IG5vdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vdGVGcm9tU2VydmVyKSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR0b3BpY3MsXHJcblx0XHRcdG5vdGUsXHJcblx0XHRcdGRvd25sb2FkLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgSW5kZXggPSAoe1xuICAgIFx0dG9waWNzLFxuICAgIFx0bm90ZSxcbiAgICBcdGRvd25sb2FkLFxuICAgIH06IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pID0+IHtcclxuXHRjb25zdCB7IG5hdkFjdGl2ZSwgc2V0TmF2QWN0aXZlIH0gPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhkb3dubG9hZCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXROYXZBY3RpdmUoJ05vdGVzJyk7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgW25hdkFjdGl2ZV0pO1xyXG5cclxuXHRpZiAodG9waWNzLmxlbmd0aCA8IDEpIHtcclxuXHRcdHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuXHR9XHJcblxyXG5cdGxldCBodG1sU2VydmVyO1xyXG5cclxuXHRpZiAodHlwZW9mIG5vdGVbMF0ubm90ZSA9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0aHRtbFNlcnZlciA9IGA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5vdEZvdW5kfSA+Tm90ZXMgZm9yICR7bm90ZVswXS50b3BpY05hbWV9IHRvcGljIHdpbGwgYmUgYXZhaWxhYmxlIHNvb24uPC9kaXY+YDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bGV0IHJlc3VsdCA9IG5vdGVbMF0ubm90ZS5jb250ZW50LnJlcGxhY2VBbGwoXHJcblx0XHRcdGBpbWdgLFxyXG5cdFx0XHRgSW1hZ2UgbGF5b3V0PVwiZmlsbFwiIG9iamVjdGZpdD1cImNvdmVyXCJgXHJcblx0XHQpO1xyXG5cdFx0aHRtbFNlcnZlciA9IHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdGxldCB0cnVuY2F0ZUxpbWl0ID0gMTI7XHJcblx0ZnVuY3Rpb24gdHJ1bmNhdGUoc3RyOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiBzdHIubGVuZ3RoID4gdHJ1bmNhdGVMaW1pdFxyXG5cdFx0XHQ/IHN0ci5zbGljZSgwLCB0cnVuY2F0ZUxpbWl0KSArICcuLi4nXHJcblx0XHRcdDogc3RyO1xyXG5cdH1cclxuXHJcblx0Ly8hbWFtYm8geWFuYWFuemFcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPntub3RlWzBdLnRvcGljTmFtZX08L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtub3RlWzBdLnRvcGljRGVmaW5pdGlvbn0gLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD17bm90ZVswXS50b3BpY05hbWV9IC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5pbm5lckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5sZWZ0SW5uZXJjb250YWluZXJCb2R5fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc3RpY2t5fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b3BpY0hlYWRlcn0+VG9waWNzIGxpc3Q8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy50aXRsZUxpc3R9PlxyXG5cdFx0XHRcdFx0XHRcdHt0b3BpY3MubWFwKCh0b3BpYzogdG9waWMpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXt0b3BpYy5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFzc0hyZWZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL05vdGVzLyR7c3ViamVjdExvY2F0b3JMaW5rfS8ke2Zvcm1Mb2NhdG9yTGlua30vJHt0b3BpYy5pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXt0b3BpYy5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BpYy5pZCA9PSBub3RlWzBdLmlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGAke1N0eWxlcy50b3BpY1RpdHRsZX0gJHtTdHlsZXMuQWN0aXZlfWBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogU3R5bGVzLnRvcGljVGl0dGxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0b3BpYy50b3BpY05hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmlnaHRJbm5lcmNvbnRhaW5lckJvZHl9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5tb2JpbGV9PlxyXG5cdFx0XHRcdFx0XHQ8RHJhd2VyXHJcblx0XHRcdFx0XHRcdFx0dGV4dEhlYWRlcj17J0xJU1QgT0YgVE9QSUNTJ31cclxuXHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWNzfVxyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZT17bm90ZVswXS5pZH1cclxuXHRcdFx0XHRcdFx0XHRsaW5rPXsnTm90ZXMnfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLkJvZHlIZWFkZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnN0YXR1c0Jhcn0+XHJcblx0XHRcdFx0XHRcdFx0e25vdGVbMF0uc3ViamVjdC5zdWJqZWN0TmFtZX0gPENoZXZyb25SaWdodE91dGxpbmVkSWNvbiAvPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0e25vdGVbMF0uZm9ybS5mb3JtTmFtZX0gPENoZXZyb25SaWdodE91dGxpbmVkSWNvbiAvPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0e3RydW5jYXRlKG5vdGVbMF0udG9waWNOYW1lKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdHtkb3dubG9hZC5sZW5ndGggPiAwID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuZG93bmxvYWR9PkRvd25sb2FkIE5vdGVzPC9kaXY+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0JydcclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5Cb2R5Q29udGVudH0+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NrQ29udGVudCdcclxuXHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWxTZXJ2ZXIgfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcbi8vIC8vKlJlbW92aW5nIGRlZmF1bHQgc2VhcmNoIGJhciA6KVxyXG4vLyBJbmRleC5nZXRMYXlvdXQgPSBmdW5jdGlvbiBQYWdlTGF5b3V0KHBhZ2U6UmVhY3ROb2RlKSB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgICAgPD5cclxuLy8gICAgICAgICAgIHtwYWdlfVxyXG4vLyAgICAgICA8Lz5cclxuLy8gICApXHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlN0eWxlcyIsIkNoZXZyb25SaWdodE91dGxpbmVkSWNvbiIsIkhlYWQiLCJMaW5rIiwiRXJyb3IiLCJEcmF3ZXIiLCJOYXZDb250ZXh0Iiwic3ViamVjdExvY2F0b3JMaW5rIiwiZm9ybUxvY2F0b3JMaW5rIiwiSW5kZXgiLCJ0b3BpY3MiLCJub3RlIiwiZG93bmxvYWQiLCJ0cnVuY2F0ZSIsInN0ciIsImxlbmd0aCIsInRydW5jYXRlTGltaXQiLCJzbGljZSIsIm5hdkFjdGl2ZSIsInNldE5hdkFjdGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwiaHRtbFNlcnZlciIsInRvcGljTmFtZSIsInJlc3VsdCIsImNvbnRlbnQiLCJyZXBsYWNlQWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsInRvcGljRGVmaW5pdGlvbiIsImlubmVyQ29udGFpbmVyIiwibGVmdElubmVyY29udGFpbmVyQm9keSIsInN0aWNreSIsInRvcGljSGVhZGVyIiwidGl0bGVMaXN0IiwibWFwIiwidG9waWMiLCJwYXNzSHJlZiIsImhyZWYiLCJpZCIsImEiLCJ0b3BpY1RpdHRsZSIsIkFjdGl2ZSIsInJpZ2h0SW5uZXJjb250YWluZXJCb2R5IiwibW9iaWxlIiwidGV4dEhlYWRlciIsImFjdGl2ZSIsImxpbmsiLCJCb2R5SGVhZGVyIiwic3RhdHVzQmFyIiwic3ViamVjdCIsInN1YmplY3ROYW1lIiwiZm9ybSIsImZvcm1OYW1lIiwiQm9keUNvbnRlbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Notes/Physics/FormOne/index.tsx\n");

/***/ })

});