"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Notes/Physics/FormOne/[id]",{

/***/ "./pages/Notes/Physics/FormOne/[id].tsx":
/*!**********************************************!*\
  !*** ./pages/Notes/Physics/FormOne/[id].tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../styles/notesDisplay.module.scss */ \"./styles/notesDisplay.module.scss\");\n/* harmony import */ var _styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ChevronRightOutlined */ \"./node_modules/@mui/icons-material/ChevronRightOutlined.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_tools_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/tools/Drawer */ \"./components/tools/Drawer.tsx\");\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar subjectLocatorLink = \"Physics\";\nvar formLocatorLink = \"FormOne\";\nvar Index = function(param) {\n    var topics = param.topics, thisTopicData = param.thisTopicData, download = param.download;\n    var _this1 = _this;\n    var truncate = function truncate(str) {\n        return str.length > truncateLimit ? str.slice(0, truncateLimit) + \"...\" : str;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_5__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNavActive(\"Notes\");\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        navActive\n    ]);\n    var htmlServer;\n    if (typeof thisTopicData.note == \"undefined\") {\n        htmlServer = \"<div className={Styles.notFound} >Notes for \".concat(thisTopicData.topicName, \" topic will be available soon.</div>\");\n    } else {\n        var result = thisTopicData.note.content.replaceAll(\"img\", 'Image layout=\"fill\" objectfit=\"cover\"');\n        htmlServer = result;\n    }\n    var truncateLimit = 12;\n    //!mambo yanaanza\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: thisTopicData.topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                        lineNumber: 192,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                        lineNumber: 193,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: thisTopicData.topicDefinition\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                        lineNumber: 194,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: thisTopicData.topicName\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                        lineNumber: 196,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                lineNumber: 191,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().innerContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().leftInnercontainerBody),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sticky),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().topicHeader),\n                                    children: \"Topics list\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                    lineNumber: 201,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().titleList),\n                                    children: topics.map(function(topic) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                passHref: true,\n                                                href: \"/Notes/\".concat(subjectLocatorLink, \"/\").concat(formLocatorLink, \"/\").concat(topic.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: topic.id == thisTopicData.id ? \"\".concat((_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().topicTittle), \" \").concat((_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().Active)) : (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().topicTittle),\n                                                        children: topic.topicName\n                                                    }, topic.id, false, {\n                                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                                        lineNumber: 210,\n                                                        columnNumber: 12\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                                    lineNumber: 209,\n                                                    columnNumber: 11\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                                lineNumber: 206,\n                                                columnNumber: 10\n                                            }, _this1)\n                                        }, topic.id, false, {\n                                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                            lineNumber: 205,\n                                            columnNumber: 9\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                    lineNumber: 203,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                            lineNumber: 200,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                        lineNumber: 199,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().rightInnercontainerBody),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mobile),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tools_Drawer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    textHeader: \"LIST OF TOPICS\",\n                                    topic: topics,\n                                    active: thisTopicData.id,\n                                    link: \"Notes\"\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                    lineNumber: 228,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                lineNumber: 227,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().BodyHeader),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().statusBar),\n                                        children: [\n                                            thisTopicData.subject.subjectName,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                                lineNumber: 237,\n                                                columnNumber: 44\n                                            }, _this),\n                                            \" \",\n                                            thisTopicData.form.formName,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ChevronRightOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                                lineNumber: 238,\n                                                columnNumber: 38\n                                            }, _this),\n                                            \" \",\n                                            truncate(thisTopicData.topicName)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                        lineNumber: 236,\n                                        columnNumber: 7\n                                    }, _this),\n                                    download.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().download),\n                                        children: \"Download Notes\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                        lineNumber: 242,\n                                        columnNumber: 8\n                                    }, _this) : \"\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                lineNumber: 235,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_notesDisplay_module_scss__WEBPACK_IMPORTED_MODULE_6___default().BodyContent),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"ckContent\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: htmlServer\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                    lineNumber: 248,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                                lineNumber: 247,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                        lineNumber: 226,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n                lineNumber: 198,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Physics/FormOne/[id].tsx\",\n        lineNumber: 190,\n        columnNumber: 3\n    }, _this);\n};\n_s(Index, \"8XnDBuqwid0ybPU6g7WdH1V+qSo=\");\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Ob3Rlcy9QaHlzaWNzL0Zvcm1PbmUvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFcUQ7QUFDWTtBQUNlO0FBQ25EO0FBQ0E7QUFDNEI7QUFDZ0I7O0FBT3pFLElBQU1TLGtCQUFrQixHQUFHLFNBQVM7QUFDcEMsSUFBTUMsZUFBZSxHQUFHLFNBQVM7QUErSGpDLElBQU1DLEtBQUssR0FBRyxnQkFJd0M7UUFIckRDLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxhQUFhLFNBQWJBLGFBQWEsRUFDYkMsUUFBUSxTQUFSQSxRQUFROztRQWtDQ0MsUUFBUSxHQUFqQixTQUFTQSxRQUFRLENBQUNDLEdBQVcsRUFBRTtRQUM5QixPQUFPQSxHQUFHLENBQUNDLE1BQU0sR0FBR0MsYUFBYSxHQUM5QkYsR0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFRCxhQUFhLENBQUMsR0FBRyxLQUFLLEdBQ25DRixHQUFHLENBQUM7S0FDUDs7SUFwQ0QsSUFBb0NmLEdBQXNCLEdBQXRCQSxpREFBVSxDQUFDTyx3RUFBVSxDQUFDLEVBQWxEWSxTQUFTLEdBQW1CbkIsR0FBc0IsQ0FBbERtQixTQUFTLEVBQUVDLFlBQVksR0FBS3BCLEdBQXNCLENBQXZDb0IsWUFBWTtJQUUvQm5CLGdEQUFTLENBQUMsV0FBTTtRQUNmbUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLHVEQUF1RDtLQUN2RCxFQUFFO1FBQUNELFNBQVM7S0FBQyxDQUFDLENBQUM7SUFFaEIsSUFBSUUsVUFBVTtJQUVkLElBQUksT0FBT1QsYUFBYSxDQUFDVSxJQUFJLElBQUksV0FBVyxFQUFFO1FBQzdDRCxVQUFVLEdBQUcsOENBQTZDLENBQTBCLE1BQW9DLENBQTVEVCxhQUFhLENBQUNXLFNBQVMsRUFBQyxzQ0FBb0MsQ0FBQyxDQUFDO0tBQzFILE1BQU07UUFDTixJQUFJQyxNQUFNLEdBQUdaLGFBQWEsQ0FBQ1UsSUFBSSxDQUFDRyxPQUFPLENBQUND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NENBQUMsR0FBRzs0Q0FDN0RXLFFBQVEsQ0FBQ0YsYUFBYSxDQUFDVyxTQUFTLENBQUM7Ozs7Ozs2Q0FDN0I7b0NBQ0xWLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLENBQUMsaUJBQ25CLDhEQUFDVyxLQUFHO3dDQUFDQyxTQUFTLEVBQUUxQixrRkFBZTtrREFBRSxnQkFBYzs7Ozs7NkNBQU0sR0FFckQsRUFBRTs7Ozs7O3FDQUVFOzBDQUNOLDhEQUFDeUIsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFMUIscUZBQWtCOzBDQUNqQyw0RUFBQ3lCLEtBQUc7b0NBQ0hDLFNBQVMsRUFBQyxXQUFXO29DQUNyQitCLHVCQUF1QixFQUFFO3dDQUFFQyxNQUFNLEVBQUV2QyxVQUFVO3FDQUFFOzs7Ozt5Q0FDOUM7Ozs7O3FDQUNHOzs7Ozs7NkJBQ0Q7Ozs7OztxQkFDRDs7Ozs7O2FBQ0QsQ0FDTDtDQUNGO0dBakhLWCxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7O0FBbUhYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTm90ZXMvUGh5c2ljcy9Gb3JtT25lL1tpZF0udHN4P2NiZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzLCBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi8uLi8uLi9kYi9wcmlzbWEnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9ub3Rlc0Rpc3BsYXkubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgQ2hldnJvblJpZ2h0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvblJpZ2h0T3V0bGluZWQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdG9vbHMvRHJhd2VyJztcclxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29udGV4dC9TdGF0ZUNvbnRleHQnO1xyXG5pbXBvcnQgeyB1bmlmaWVkIH0gZnJvbSAndW5pZmllZCc7XHJcbmltcG9ydCByZWh5cGVTdHJpbmdpZnkgZnJvbSAncmVoeXBlLXN0cmluZ2lmeSc7XHJcbmltcG9ydCByZWh5cGVQYXJzZSBmcm9tICdyZWh5cGUtcGFyc2UnO1xyXG5cclxuY29uc3Qgc3ViamVjdExvY2F0b3IgPSAnUGh5c2ljcyc7XHJcbmNvbnN0IGZvcm1Mb2NhdG9yID0gJ0Zvcm0gT25lJztcclxuY29uc3Qgc3ViamVjdExvY2F0b3JMaW5rID0gJ1BoeXNpY3MnO1xyXG5jb25zdCBmb3JtTG9jYXRvckxpbmsgPSAnRm9ybU9uZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHRjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zPy5pZDtcclxuXHRsZXQgSWQgPSBwYXJzZUludChTdHJpbmcoaWQpKTtcclxuXHQvLyAuLi5cclxuXHRjb25zdCB0b3BpY0RhdGEgPSBhd2FpdCBwcmlzbWEudG9waWMuZmluZFVuaXF1ZSh7XHJcblx0XHR3aGVyZToge1xyXG5cdFx0XHRpZDogSWQsXHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0OiB7XHJcblx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0XHR0b3BpY05hbWU6IHRydWUsXHJcblx0XHRcdHRvcGljRGVmaW5pdGlvbjogdHJ1ZSxcclxuXHRcdFx0c3ViamVjdDoge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0c3ViamVjdE5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybToge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0Zm9ybU5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0bm90ZToge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0Y29udGVudDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgdGhpc1RvcGljRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9waWNEYXRhKSk7XHJcblxyXG5cdGNvbnN0IGRvd25sb2FkRnJvbVNlcnZlciA9IGF3YWl0IHByaXNtYS5ub3Rlc0Rvd25sb2FkYWJsZS5maW5kTWFueSh7XHJcblx0XHR3aGVyZToge1xyXG5cdFx0XHRwdWJsaXNoZWQ6IHRydWUsXHJcblx0XHRcdHN1YmplY3Q6IHtcclxuXHRcdFx0XHRzdWJqZWN0TmFtZTogc3ViamVjdExvY2F0b3IsXHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm06IHtcclxuXHRcdFx0XHRmb3JtTmFtZTogZm9ybUxvY2F0b3IsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0c2VsZWN0OiB7XHJcblx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRjb25zdCBkb3dubG9hZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZG93bmxvYWRGcm9tU2VydmVyKSk7XHJcblxyXG5cdGNvbnN0IHRvcGljc0Zyb21TZXJ2ZXIgPSBhd2FpdCBwcmlzbWEudG9waWMuZmluZE1hbnkoe1xyXG5cdFx0d2hlcmU6IHtcclxuXHRcdFx0cHVibGlzaGVkOiB0cnVlLFxyXG5cdFx0XHRzdWJqZWN0OiB7XHJcblx0XHRcdFx0c3ViamVjdE5hbWU6IHN1YmplY3RMb2NhdG9yLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb3JtOiB7XHJcblx0XHRcdFx0Zm9ybU5hbWU6IGZvcm1Mb2NhdG9yLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHNlbGVjdDoge1xyXG5cdFx0XHRpZDogdHJ1ZSxcclxuXHRcdFx0dG9waWNOYW1lOiB0cnVlLFxyXG5cdFx0XHR0b3BpY0RlZmluaXRpb246IHRydWUsXHJcblx0XHRcdHN1YmplY3Q6IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdHN1YmplY3ROYW1lOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm06IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdGZvcm1OYW1lOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IHRvcGljcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9waWNzRnJvbVNlcnZlcikpO1xyXG5cclxuXHRjb25zdCBjb250ZW50ID0gdW5pZmllZCgpXHJcblx0XHQudXNlKHJlaHlwZVBhcnNlLCB7XHJcblx0XHRcdGZyYWdtZW50OiB0cnVlLFxyXG5cdFx0fSlcclxuXHRcdC51c2UoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKHRyZWUpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0cmVlKTtcclxuXHRcdFx0fTtcclxuXHRcdH0pXHJcblx0XHQudXNlKHJlaHlwZVN0cmluZ2lmeSlcclxuXHRcdC5wcm9jZXNzU3luYyh0aGlzVG9waWNEYXRhLm5vdGUuY29udGVudClcclxuXHRcdC50b1N0cmluZygpO1xyXG5cdGNvbnNvbGUubG9nKGNvbnRlbnQpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dG9waWNzLFxyXG5cdFx0XHR0aGlzVG9waWNEYXRhLFxyXG5cdFx0XHRkb3dubG9hZCxcclxuXHRcdH0sXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Ly8gLi4uXHJcblx0Y29uc3Qgbm90ZXNTZXJ2ZXIgPSBhd2FpdCBwcmlzbWEudG9waWMuZmluZE1hbnkoe1xyXG5cdFx0c2VsZWN0OiB7XHJcblx0XHRcdGlkOiB0cnVlLFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0dHlwZSBkYXRhTm90ZSA9IHtcclxuXHRcdGlkOiBudW1iZXI7XHJcblx0fTtcclxuXHRjb25zdCBub3Rlc0RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vdGVzU2VydmVyKSk7XHJcblx0Y29uc3QgcGF0aHMgPSBub3Rlc0RhdGEubWFwKChub3RlOiBkYXRhTm90ZSkgPT4ge1xyXG5cdFx0bGV0IGlkID0gU3RyaW5nKG5vdGUuaWQpO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0aWQ6IGAke2lkfWAsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH0pO1xyXG5cdHJldHVybiB7XHJcblx0XHRwYXRocyxcclxuXHRcdGZhbGxiYWNrOiBmYWxzZSxcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgSW5kZXggPSAoe1xyXG5cdHRvcGljcyxcclxuXHR0aGlzVG9waWNEYXRhLFxyXG5cdGRvd25sb2FkLFxyXG59OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSA9PiB7XHJcblx0Y29uc3QgeyBuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZSB9ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldE5hdkFjdGl2ZSgnTm90ZXMnKTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHR9LCBbbmF2QWN0aXZlXSk7XHJcblxyXG5cdGxldCBodG1sU2VydmVyO1xyXG5cclxuXHRpZiAodHlwZW9mIHRoaXNUb3BpY0RhdGEubm90ZSA9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0aHRtbFNlcnZlciA9IGA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm5vdEZvdW5kfSA+Tm90ZXMgZm9yICR7dGhpc1RvcGljRGF0YS50b3BpY05hbWV9IHRvcGljIHdpbGwgYmUgYXZhaWxhYmxlIHNvb24uPC9kaXY+YDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bGV0IHJlc3VsdCA9IHRoaXNUb3BpY0RhdGEubm90ZS5jb250ZW50LnJlcGxhY2VBbGwoXHJcblx0XHRcdGBpbWdgLFxyXG5cdFx0XHRgSW1hZ2UgbGF5b3V0PVwiZmlsbFwiIG9iamVjdGZpdD1cImNvdmVyXCJgXHJcblx0XHQpO1xyXG5cdFx0aHRtbFNlcnZlciA9IHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdHR5cGUgZGF0YVRvcGljID0ge1xyXG5cdFx0aWQ6IG51bWJlcjtcclxuXHRcdHRvcGljTmFtZTogc3RyaW5nO1xyXG5cdFx0dG9waWNEZWZpbml0aW9uOiBzdHJpbmc7XHJcblx0XHRzdWJqZWN0OiB7XHJcblx0XHRcdHN1YmplY3ROYW1lOiBzdHJpbmc7XHJcblx0XHR9O1xyXG5cdFx0Zm9ybToge1xyXG5cdFx0XHRmb3JtTmFtZTogc3RyaW5nO1xyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRsZXQgdHJ1bmNhdGVMaW1pdCA9IDEyO1xyXG5cdGZ1bmN0aW9uIHRydW5jYXRlKHN0cjogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gc3RyLmxlbmd0aCA+IHRydW5jYXRlTGltaXRcclxuXHRcdFx0PyBzdHIuc2xpY2UoMCwgdHJ1bmNhdGVMaW1pdCkgKyAnLi4uJ1xyXG5cdFx0XHQ6IHN0cjtcclxuXHR9XHJcblxyXG5cdC8vIW1hbWJvIHlhbmFhbnphXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT57dGhpc1RvcGljRGF0YS50b3BpY05hbWV9PC90aXRsZT5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17dGhpc1RvcGljRGF0YS50b3BpY0RlZmluaXRpb259IC8+XHJcblx0XHRcdFx0ey8qIC8vIWFkZCBrZXl3b3JkcyAqL31cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD17dGhpc1RvcGljRGF0YS50b3BpY05hbWV9IC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5pbm5lckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5sZWZ0SW5uZXJjb250YWluZXJCb2R5fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc3RpY2t5fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy50b3BpY0hlYWRlcn0+VG9waWNzIGxpc3Q8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudGl0bGVMaXN0fT5cclxuXHRcdFx0XHRcdFx0XHR7dG9waWNzLm1hcCgodG9waWM6IGRhdGFUb3BpYykgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e3RvcGljLmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXNzSHJlZlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e2AvTm90ZXMvJHtzdWJqZWN0TG9jYXRvckxpbmt9LyR7Zm9ybUxvY2F0b3JMaW5rfS8ke3RvcGljLmlkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3RvcGljLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcGljLmlkID09IHRoaXNUb3BpY0RhdGEuaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gYCR7U3R5bGVzLnRvcGljVGl0dGxlfSAke1N0eWxlcy5BY3RpdmV9YFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBTdHlsZXMudG9waWNUaXR0bGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RvcGljLnRvcGljTmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yaWdodElubmVyY29udGFpbmVyQm9keX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm1vYmlsZX0+XHJcblx0XHRcdFx0XHRcdDxEcmF3ZXJcclxuXHRcdFx0XHRcdFx0XHR0ZXh0SGVhZGVyPXsnTElTVCBPRiBUT1BJQ1MnfVxyXG5cdFx0XHRcdFx0XHRcdHRvcGljPXt0b3BpY3N9XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlPXt0aGlzVG9waWNEYXRhLmlkfVxyXG5cdFx0XHRcdFx0XHRcdGxpbms9eydOb3Rlcyd9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuQm9keUhlYWRlcn0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuc3RhdHVzQmFyfT5cclxuXHRcdFx0XHRcdFx0XHR7dGhpc1RvcGljRGF0YS5zdWJqZWN0LnN1YmplY3ROYW1lfSA8Q2hldnJvblJpZ2h0T3V0bGluZWRJY29uIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7dGhpc1RvcGljRGF0YS5mb3JtLmZvcm1OYW1lfSA8Q2hldnJvblJpZ2h0T3V0bGluZWRJY29uIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7dHJ1bmNhdGUodGhpc1RvcGljRGF0YS50b3BpY05hbWUpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0e2Rvd25sb2FkLmxlbmd0aCA+IDAgPyAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5kb3dubG9hZH0+RG93bmxvYWQgTm90ZXM8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQnJ1xyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLkJvZHlDb250ZW50fT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2tDb250ZW50J1xyXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbFNlcnZlciB9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiU3R5bGVzIiwiQ2hldnJvblJpZ2h0T3V0bGluZWRJY29uIiwiSGVhZCIsIkxpbmsiLCJEcmF3ZXIiLCJOYXZDb250ZXh0Iiwic3ViamVjdExvY2F0b3JMaW5rIiwiZm9ybUxvY2F0b3JMaW5rIiwiSW5kZXgiLCJ0b3BpY3MiLCJ0aGlzVG9waWNEYXRhIiwiZG93bmxvYWQiLCJ0cnVuY2F0ZSIsInN0ciIsImxlbmd0aCIsInRydW5jYXRlTGltaXQiLCJzbGljZSIsIm5hdkFjdGl2ZSIsInNldE5hdkFjdGl2ZSIsImh0bWxTZXJ2ZXIiLCJub3RlIiwidG9waWNOYW1lIiwicmVzdWx0IiwiY29udGVudCIsInJlcGxhY2VBbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwidG9waWNEZWZpbml0aW9uIiwiaW5uZXJDb250YWluZXIiLCJsZWZ0SW5uZXJjb250YWluZXJCb2R5Iiwic3RpY2t5IiwidG9waWNIZWFkZXIiLCJ0aXRsZUxpc3QiLCJtYXAiLCJ0b3BpYyIsInBhc3NIcmVmIiwiaHJlZiIsImlkIiwiYSIsInRvcGljVGl0dGxlIiwiQWN0aXZlIiwicmlnaHRJbm5lcmNvbnRhaW5lckJvZHkiLCJtb2JpbGUiLCJ0ZXh0SGVhZGVyIiwiYWN0aXZlIiwibGluayIsIkJvZHlIZWFkZXIiLCJzdGF0dXNCYXIiLCJzdWJqZWN0Iiwic3ViamVjdE5hbWUiLCJmb3JtIiwiZm9ybU5hbWUiLCJCb2R5Q29udGVudCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Notes/Physics/FormOne/[id].tsx\n");

/***/ })

});