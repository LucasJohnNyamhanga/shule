"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/References/Search",{

/***/ "./pages/References/Search/index.tsx":
/*!*******************************************!*\
  !*** ./pages/References/Search/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/search.module.scss */ \"./styles/search.module.scss\");\n/* harmony import */ var _styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Reference = function(param) {\n    var searchResults = param.searchResults, searchText = param.searchText;\n    var _this1 = _this;\n    var truncateHTML = function truncateHTML(text, length) {\n        var startIndex = text.toLowerCase().search(\"\".concat(searchText.toLowerCase().replaceAll(\" \", \"|\")));\n        if (text) {\n            console.log(searchText.toLowerCase().replaceAll(\" \", \"|\"));\n        }\n        if (startIndex > 70) {\n            startIndex -= 70;\n        }\n        var endIndex = startIndex + length;\n        var truncated = text.substring(startIndex, endIndex);\n        // Remove line breaks and surrounding whitespace\n        truncated = truncated.replace(/(\\r\\n|\\n|\\r)/gm, \"\").trim();\n        // If the text ends with an incomplete start tag, trim it off\n        truncated = truncated.replace(/<(\\w*)(?:(?:\\s\\w+(?:={0,1}([\"']{0,1})\\w*\\2{0,1})))*$/g, \"\");\n        // If the text ends with a truncated end tag, fix it.\n        var truncatedEndTagExpr = /<\\/((?:\\w*))$/g;\n        var truncatedEndTagMatch = truncatedEndTagExpr.exec(truncated);\n        if (truncatedEndTagMatch != null) {\n            var truncatedEndTag = truncatedEndTagMatch[1];\n            // Check to see if there's an identifiable tag in the end tag\n            if (truncatedEndTag.length > 0) {\n                // If so, find the start tag, and close it\n                var startTagExpr = new RegExp(\"<(\" + truncatedEndTag + \"\\\\w?)(?:(?:\\\\s\\\\w+(?:=([\\\"'])\\\\w*\\\\2)))*>\");\n                var testString = truncated;\n                var startTagMatch = startTagExpr.exec(testString);\n                var startTag = null;\n                while(startTagMatch != null){\n                    startTag = startTagMatch[1];\n                    testString = testString.replace(startTagExpr, \"\");\n                    startTagMatch = startTagExpr.exec(testString);\n                }\n                if (startTag != null) {\n                    truncated = truncated.replace(truncatedEndTagExpr, \"</\" + startTag + \">\");\n                }\n            } else {\n                // Otherwise, cull off the broken end tag\n                truncated = truncated.replace(truncatedEndTagExpr, \"\");\n            }\n        }\n        // Now the tricky part. Reverse the text, and look for opening tags. For each opening tag,\n        //  check to see that he closing tag before it is for that tag. If not, append a closing tag.\n        var testString = reverseHtml(truncated);\n        var reverseTagOpenExpr = /<(?:([\"'])\\w*\\1=\\w+ )*(\\w*)>/;\n        var tagMatch = reverseTagOpenExpr.exec(testString);\n        while(tagMatch != null){\n            var tag = tagMatch[0];\n            var tagName = tagMatch[2];\n            var startPos = tagMatch.index;\n            var endPos = startPos + tag.length;\n            var fragment = testString.substring(0, endPos);\n            // Test to see if an end tag is found in the fragment. If not, append one to the end\n            //  of the truncated HTML, thus closing the last unclosed tag\n            if (!new RegExp(\"<\" + tagName + \"/>\").test(fragment)) {\n                truncated += \"</\" + reverseHtml(tagName) + \">\";\n            }\n            // Get rid of the already tested fragment\n            testString = testString.replace(fragment, \"\");\n            // Get another tag to test\n            tagMatch = reverseTagOpenExpr.exec(testString);\n        }\n        return truncated;\n    };\n    var reverseHtml = function reverseHtml(str) {\n        var ph = String.fromCharCode(206);\n        var result = str.split(\"\").reverse().join(\"\");\n        while(result.indexOf(\"<\") > -1){\n            result = result.replace(\"<\", ph);\n        }\n        while(result.indexOf(\">\") > -1){\n            result = result.replace(\">\", \"<\");\n        }\n        while(result.indexOf(ph) > -1){\n            result = result.replace(ph, \">\");\n        }\n        return result;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), searchResultsStatus = ref1[0], setSearchResultsStatus = ref1[1];\n    var doc = searchResults.length > 0 ? searchResults[0].content : \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        searchResults.length > 0 ? setSearchResultsStatus(true) : setSearchResultsStatus(false);\n    }, [\n        searchResults,\n        searchText\n    ]);\n    // const content = unified()\n    // \t.use(rehypeParse, { fragment: true })\n    // \t.use(() => {\n    // \t\treturn (tree: Root) => {\n    // \t\t\tvisit(tree, 'element', (node, index, parent) => {\n    // \t\t\t\tif (node.type == 'element') {\n    // \t\t\t\t\tnode.children.map((child) => {\n    // \t\t\t\t\t\tconsole.log(child);\n    // \t\t\t\t\t});\n    // \t\t\t\t}\n    // \t\t\t});\n    // \t\t};\n    // \t})\n    // \t.use(rehypeStringify)\n    // \t.processSync(doc)\n    // \t.toString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().innerContainer),\n            children: [\n                searchResults.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().resultsHeader),\n                    children: \"About \".concat(searchResults.length, \" Search \").concat(searchResults.length > 1 ? \"Results\" : \"Result\", ' Found For \"').concat(searchText, '\"')\n                }, void 0, false, {\n                    fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n                    lineNumber: 185,\n                    columnNumber: 6\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().resultsHeader),\n                    children: 'No Search Result Found For \"'.concat(searchText, '\"')\n                }, void 0, false, {\n                    fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n                    lineNumber: 191,\n                    columnNumber: 6\n                }, _this),\n                searchResultsStatus && searchResults.map(function(result) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().resultDetails),\n                                    children: \"\".concat(result.subject.subjectName, \" > \").concat(result.form.formName, \" > \").concat(result.topic.topicName)\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n                                    lineNumber: 207,\n                                    columnNumber: 10\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/Notes/\".concat(result.subject.subjectName, \"/\").concat(result.form.formName.replace(\" \", \"\"), \"/\").concat(result.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ckContent \".concat((_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().result)),\n                                                dangerouslySetInnerHTML: {\n                                                    __html: truncateHTML(result.content, 700)\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n                                                lineNumber: 216,\n                                                columnNumber: 12\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                                className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().horizontalLine)\n                                            }, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n                                                lineNumber: 222,\n                                                columnNumber: 12\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n                                        lineNumber: 215,\n                                        columnNumber: 11\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n                                    lineNumber: 211,\n                                    columnNumber: 10\n                                }, _this1)\n                            ]\n                        }, void 0, true)\n                    }, result.id, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n                        lineNumber: 205,\n                        columnNumber: 8\n                    }, _this1);\n                }),\n                !searchResultsStatus && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ckContent \".concat((_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().resultNotFound)),\n                    dangerouslySetInnerHTML: {\n                        __html: \"<strong></strong>\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n                    lineNumber: 230,\n                    columnNumber: 6\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n            lineNumber: 183,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/References/Search/index.tsx\",\n        lineNumber: 182,\n        columnNumber: 3\n    }, _this);\n};\n_s(Reference, \"K+Dw4Ttq5e1BKOFC2zlQNd3OBZM=\");\n_c = Reference;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reference);\nvar _c;\n$RefreshReg$(_c, \"Reference\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmVmZXJlbmNlcy9TZWFyY2gvaW5kZXgudHN4P2Y1OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NlYXJjaC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IE5hdkNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbnRleHQvU3RhdGVDb250ZXh0JztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vLi4vLi4vZGIvcHJpc21hJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcblx0Y29uc3Qgc2VhcmNoVGV4dCA9IGNvbnRleHQucXVlcnkuZmluZCEudG9TdHJpbmcoKTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLm5vdGUuZmluZE1hbnkoe1xyXG5cdFx0d2hlcmU6IHtcclxuXHRcdFx0Y29udGVudDoge1xyXG5cdFx0XHRcdHNlYXJjaDogc2VhcmNoVGV4dCxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0aWQ6IHRydWUsXHJcblx0XHRcdGNvbnRlbnQ6IHRydWUsXHJcblx0XHRcdHN1YmplY3Q6IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdHN1YmplY3ROYW1lOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm06IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdGZvcm1OYW1lOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvcGljOiB7XHJcblx0XHRcdFx0c2VsZWN0OiB7XHJcblx0XHRcdFx0XHR0b3BpY05hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSk7XHJcblx0bGV0IHNlYXJjaFJlc3VsdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgc2VhcmNoUmVzdWx0cywgc2VhcmNoVGV4dCB9LFxyXG5cdH07XHJcbn07XHJcblxyXG50eXBlIG5vdGUgPSB7XHJcblx0c3ViamVjdE5hbWU6IGFueTtcclxuXHRpZDogbnVtYmVyO1xyXG5cdGNvbnRlbnQ6IHN0cmluZztcclxuXHRzdWJqZWN0OiB7XHJcblx0XHRzdWJqZWN0TmFtZTogc3RyaW5nO1xyXG5cdH07XHJcblx0Zm9ybToge1xyXG5cdFx0Zm9ybU5hbWU6IHN0cmluZztcclxuXHR9O1xyXG5cdHRvcGljOiB7XHJcblx0XHR0b3BpY05hbWU6IHN0cmluZztcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgUmVmZXJlbmNlID0gKHtcclxuXHRzZWFyY2hSZXN1bHRzLFxyXG5cdHNlYXJjaFRleHQsXHJcbn06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikgPT4ge1xyXG5cdGNvbnN0IHsgbmF2QWN0aXZlLCBzZXROYXZBY3RpdmUgfSA9IHVzZUNvbnRleHQoTmF2Q29udGV4dCk7XHJcblx0Y29uc3QgW3NlYXJjaFJlc3VsdHNTdGF0dXMsIHNldFNlYXJjaFJlc3VsdHNTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRmdW5jdGlvbiB0cnVuY2F0ZUhUTUwodGV4dDogc3RyaW5nLCBsZW5ndGg6IG51bWJlcikge1xyXG5cdFx0bGV0IHN0YXJ0SW5kZXggPSB0ZXh0XHJcblx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdC5zZWFyY2goYCR7c2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJyAnLCAnfCcpfWApO1xyXG5cdFx0aWYgKHRleHQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJyAnLCAnfCcpKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc3RhcnRJbmRleCA+IDcwKSB7XHJcblx0XHRcdHN0YXJ0SW5kZXggLT0gNzA7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIGxlbmd0aDtcclxuXHRcdHZhciB0cnVuY2F0ZWQgPSB0ZXh0LnN1YnN0cmluZyhzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcblx0XHQvLyBSZW1vdmUgbGluZSBicmVha3MgYW5kIHN1cnJvdW5kaW5nIHdoaXRlc3BhY2VcclxuXHRcdHRydW5jYXRlZCA9IHRydW5jYXRlZC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnJykudHJpbSgpO1xyXG5cdFx0Ly8gSWYgdGhlIHRleHQgZW5kcyB3aXRoIGFuIGluY29tcGxldGUgc3RhcnQgdGFnLCB0cmltIGl0IG9mZlxyXG5cdFx0dHJ1bmNhdGVkID0gdHJ1bmNhdGVkLnJlcGxhY2UoXHJcblx0XHRcdC88KFxcdyopKD86KD86XFxzXFx3Kyg/Oj17MCwxfShbXCInXXswLDF9KVxcdypcXDJ7MCwxfSkpKSokL2csXHJcblx0XHRcdCcnXHJcblx0XHQpO1xyXG5cdFx0Ly8gSWYgdGhlIHRleHQgZW5kcyB3aXRoIGEgdHJ1bmNhdGVkIGVuZCB0YWcsIGZpeCBpdC5cclxuXHRcdHZhciB0cnVuY2F0ZWRFbmRUYWdFeHByID0gLzxcXC8oKD86XFx3KikpJC9nO1xyXG5cdFx0dmFyIHRydW5jYXRlZEVuZFRhZ01hdGNoID0gdHJ1bmNhdGVkRW5kVGFnRXhwci5leGVjKHRydW5jYXRlZCk7XHJcblx0XHRpZiAodHJ1bmNhdGVkRW5kVGFnTWF0Y2ggIT0gbnVsbCkge1xyXG5cdFx0XHR2YXIgdHJ1bmNhdGVkRW5kVGFnID0gdHJ1bmNhdGVkRW5kVGFnTWF0Y2hbMV07XHJcblx0XHRcdC8vIENoZWNrIHRvIHNlZSBpZiB0aGVyZSdzIGFuIGlkZW50aWZpYWJsZSB0YWcgaW4gdGhlIGVuZCB0YWdcclxuXHRcdFx0aWYgKHRydW5jYXRlZEVuZFRhZy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Ly8gSWYgc28sIGZpbmQgdGhlIHN0YXJ0IHRhZywgYW5kIGNsb3NlIGl0XHJcblx0XHRcdFx0dmFyIHN0YXJ0VGFnRXhwciA9IG5ldyBSZWdFeHAoXHJcblx0XHRcdFx0XHQnPCgnICsgdHJ1bmNhdGVkRW5kVGFnICsgJ1xcXFx3PykoPzooPzpcXFxcc1xcXFx3Kyg/Oj0oW1wiXFwnXSlcXFxcdypcXFxcMikpKSo+J1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dmFyIHRlc3RTdHJpbmcgPSB0cnVuY2F0ZWQ7XHJcblx0XHRcdFx0dmFyIHN0YXJ0VGFnTWF0Y2ggPSBzdGFydFRhZ0V4cHIuZXhlYyh0ZXN0U3RyaW5nKTtcclxuXHJcblx0XHRcdFx0dmFyIHN0YXJ0VGFnID0gbnVsbDtcclxuXHRcdFx0XHR3aGlsZSAoc3RhcnRUYWdNYXRjaCAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRzdGFydFRhZyA9IHN0YXJ0VGFnTWF0Y2hbMV07XHJcblx0XHRcdFx0XHR0ZXN0U3RyaW5nID0gdGVzdFN0cmluZy5yZXBsYWNlKHN0YXJ0VGFnRXhwciwgJycpO1xyXG5cdFx0XHRcdFx0c3RhcnRUYWdNYXRjaCA9IHN0YXJ0VGFnRXhwci5leGVjKHRlc3RTdHJpbmcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoc3RhcnRUYWcgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0dHJ1bmNhdGVkID0gdHJ1bmNhdGVkLnJlcGxhY2UoXHJcblx0XHRcdFx0XHRcdHRydW5jYXRlZEVuZFRhZ0V4cHIsXHJcblx0XHRcdFx0XHRcdCc8LycgKyBzdGFydFRhZyArICc+J1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBjdWxsIG9mZiB0aGUgYnJva2VuIGVuZCB0YWdcclxuXHRcdFx0XHR0cnVuY2F0ZWQgPSB0cnVuY2F0ZWQucmVwbGFjZSh0cnVuY2F0ZWRFbmRUYWdFeHByLCAnJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIE5vdyB0aGUgdHJpY2t5IHBhcnQuIFJldmVyc2UgdGhlIHRleHQsIGFuZCBsb29rIGZvciBvcGVuaW5nIHRhZ3MuIEZvciBlYWNoIG9wZW5pbmcgdGFnLFxyXG5cdFx0Ly8gIGNoZWNrIHRvIHNlZSB0aGF0IGhlIGNsb3NpbmcgdGFnIGJlZm9yZSBpdCBpcyBmb3IgdGhhdCB0YWcuIElmIG5vdCwgYXBwZW5kIGEgY2xvc2luZyB0YWcuXHJcblx0XHR2YXIgdGVzdFN0cmluZzogc3RyaW5nID0gcmV2ZXJzZUh0bWwodHJ1bmNhdGVkKTtcclxuXHRcdHZhciByZXZlcnNlVGFnT3BlbkV4cHIgPSAvPCg/OihbXCInXSlcXHcqXFwxPVxcdysgKSooXFx3Kik+LztcclxuXHRcdHZhciB0YWdNYXRjaCA9IHJldmVyc2VUYWdPcGVuRXhwci5leGVjKHRlc3RTdHJpbmcpO1xyXG5cdFx0d2hpbGUgKHRhZ01hdGNoICE9IG51bGwpIHtcclxuXHRcdFx0dmFyIHRhZyA9IHRhZ01hdGNoWzBdO1xyXG5cdFx0XHR2YXIgdGFnTmFtZSA9IHRhZ01hdGNoWzJdO1xyXG5cdFx0XHR2YXIgc3RhcnRQb3MgPSB0YWdNYXRjaC5pbmRleDtcclxuXHRcdFx0dmFyIGVuZFBvcyA9IHN0YXJ0UG9zICsgdGFnLmxlbmd0aDtcclxuXHRcdFx0dmFyIGZyYWdtZW50ID0gdGVzdFN0cmluZy5zdWJzdHJpbmcoMCwgZW5kUG9zKTtcclxuXHRcdFx0Ly8gVGVzdCB0byBzZWUgaWYgYW4gZW5kIHRhZyBpcyBmb3VuZCBpbiB0aGUgZnJhZ21lbnQuIElmIG5vdCwgYXBwZW5kIG9uZSB0byB0aGUgZW5kXHJcblx0XHRcdC8vICBvZiB0aGUgdHJ1bmNhdGVkIEhUTUwsIHRodXMgY2xvc2luZyB0aGUgbGFzdCB1bmNsb3NlZCB0YWdcclxuXHRcdFx0aWYgKCFuZXcgUmVnRXhwKCc8JyArIHRhZ05hbWUgKyAnLz4nKS50ZXN0KGZyYWdtZW50KSkge1xyXG5cdFx0XHRcdHRydW5jYXRlZCArPSAnPC8nICsgcmV2ZXJzZUh0bWwodGFnTmFtZSkgKyAnPic7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gR2V0IHJpZCBvZiB0aGUgYWxyZWFkeSB0ZXN0ZWQgZnJhZ21lbnRcclxuXHRcdFx0dGVzdFN0cmluZyA9IHRlc3RTdHJpbmcucmVwbGFjZShmcmFnbWVudCwgJycpO1xyXG5cdFx0XHQvLyBHZXQgYW5vdGhlciB0YWcgdG8gdGVzdFxyXG5cdFx0XHR0YWdNYXRjaCA9IHJldmVyc2VUYWdPcGVuRXhwci5leGVjKHRlc3RTdHJpbmcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydW5jYXRlZDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJldmVyc2VIdG1sKHN0cjogc3RyaW5nKSB7XHJcblx0XHR2YXIgcGggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDIwNik7XHJcblx0XHR2YXIgcmVzdWx0ID0gc3RyLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XHJcblx0XHR3aGlsZSAocmVzdWx0LmluZGV4T2YoJzwnKSA+IC0xKSB7XHJcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKCc8JywgcGgpO1xyXG5cdFx0fVxyXG5cdFx0d2hpbGUgKHJlc3VsdC5pbmRleE9mKCc+JykgPiAtMSkge1xyXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZSgnPicsICc8Jyk7XHJcblx0XHR9XHJcblx0XHR3aGlsZSAocmVzdWx0LmluZGV4T2YocGgpID4gLTEpIHtcclxuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UocGgsICc+Jyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZG9jID0gc2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwID8gc2VhcmNoUmVzdWx0c1swXS5jb250ZW50IDogJyc7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDBcclxuXHRcdFx0PyBzZXRTZWFyY2hSZXN1bHRzU3RhdHVzKHRydWUpXHJcblx0XHRcdDogc2V0U2VhcmNoUmVzdWx0c1N0YXR1cyhmYWxzZSk7XHJcblx0fSwgW3NlYXJjaFJlc3VsdHMsIHNlYXJjaFRleHRdKTtcclxuXHQvLyBjb25zdCBjb250ZW50ID0gdW5pZmllZCgpXHJcblx0Ly8gXHQudXNlKHJlaHlwZVBhcnNlLCB7IGZyYWdtZW50OiB0cnVlIH0pXHJcblx0Ly8gXHQudXNlKCgpID0+IHtcclxuXHQvLyBcdFx0cmV0dXJuICh0cmVlOiBSb290KSA9PiB7XHJcblx0Ly8gXHRcdFx0dmlzaXQodHJlZSwgJ2VsZW1lbnQnLCAobm9kZSwgaW5kZXgsIHBhcmVudCkgPT4ge1xyXG5cdC8vIFx0XHRcdFx0aWYgKG5vZGUudHlwZSA9PSAnZWxlbWVudCcpIHtcclxuXHQvLyBcdFx0XHRcdFx0bm9kZS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XHJcblx0Ly8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coY2hpbGQpO1xyXG5cdC8vIFx0XHRcdFx0XHR9KTtcclxuXHQvLyBcdFx0XHRcdH1cclxuXHQvLyBcdFx0XHR9KTtcclxuXHQvLyBcdFx0fTtcclxuXHQvLyBcdH0pXHJcblx0Ly8gXHQudXNlKHJlaHlwZVN0cmluZ2lmeSlcclxuXHQvLyBcdC5wcm9jZXNzU3luYyhkb2MpXHJcblx0Ly8gXHQudG9TdHJpbmcoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5pbm5lckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0e3NlYXJjaFJlc3VsdHMubGVuZ3RoID4gMSA/IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucmVzdWx0c0hlYWRlcn0+e2BBYm91dCAke1xyXG5cdFx0XHRcdFx0XHRzZWFyY2hSZXN1bHRzLmxlbmd0aFxyXG5cdFx0XHRcdFx0fSBTZWFyY2ggJHtcclxuXHRcdFx0XHRcdFx0c2VhcmNoUmVzdWx0cy5sZW5ndGggPiAxID8gJ1Jlc3VsdHMnIDogJ1Jlc3VsdCdcclxuXHRcdFx0XHRcdH0gRm91bmQgRm9yIFwiJHtzZWFyY2hUZXh0fVwiYH08L2Rpdj5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xyXG5cdFx0XHRcdFx0XHRcdFN0eWxlcy5yZXN1bHRzSGVhZGVyXHJcblx0XHRcdFx0XHRcdH0+e2BObyBTZWFyY2ggUmVzdWx0IEZvdW5kIEZvciBcIiR7c2VhcmNoVGV4dH1cImB9PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7c2VhcmNoUmVzdWx0c1N0YXR1cyAmJlxyXG5cdFx0XHRcdFx0c2VhcmNoUmVzdWx0cy5tYXAoXHJcblx0XHRcdFx0XHRcdChyZXN1bHQ6IHtcclxuXHRcdFx0XHRcdFx0XHRmb3JtOiBhbnk7XHJcblx0XHRcdFx0XHRcdFx0dG9waWM6IGFueTtcclxuXHRcdFx0XHRcdFx0XHRpZDogUmVhY3QuS2V5IHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0XHRzdWJqZWN0OiBub3RlO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHN0cmluZztcclxuXHRcdFx0XHRcdFx0fSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtyZXN1bHQuaWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTdHlsZXMucmVzdWx0RGV0YWlsc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0+e2Ake3Jlc3VsdC5zdWJqZWN0LnN1YmplY3ROYW1lfSA+ICR7cmVzdWx0LmZvcm0uZm9ybU5hbWV9ID4gJHtyZXN1bHQudG9waWMudG9waWNOYW1lfWB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9Ob3Rlcy8ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnN1YmplY3Quc3ViamVjdE5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LyR7cmVzdWx0LmZvcm0uZm9ybU5hbWUucmVwbGFjZSgnICcsICcnKX0vJHtyZXN1bHQuaWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGNrQ29udGVudCAke1N0eWxlcy5yZXN1bHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfX2h0bWw6IHRydW5jYXRlSFRNTChyZXN1bHQuY29udGVudCwgNzAwKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPXtTdHlsZXMuaG9yaXpvbnRhbExpbmV9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHR7IXNlYXJjaFJlc3VsdHNTdGF0dXMgJiYgKFxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bja0NvbnRlbnQgJHtTdHlsZXMucmVzdWx0Tm90Rm91bmR9YH1cclxuXHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdFx0XHRfX2h0bWw6ICc8c3Ryb25nPjwvc3Ryb25nPicsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZmVyZW5jZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3R5bGVzIiwiTmF2Q29udGV4dCIsIkxpbmsiLCJSZWZlcmVuY2UiLCJzZWFyY2hSZXN1bHRzIiwic2VhcmNoVGV4dCIsInRydW5jYXRlSFRNTCIsInRleHQiLCJsZW5ndGgiLCJzdGFydEluZGV4IiwidG9Mb3dlckNhc2UiLCJzZWFyY2giLCJyZXBsYWNlQWxsIiwiY29uc29sZSIsImxvZyIsImVuZEluZGV4IiwidHJ1bmNhdGVkIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsInRyaW0iLCJ0cnVuY2F0ZWRFbmRUYWdFeHByIiwidHJ1bmNhdGVkRW5kVGFnTWF0Y2giLCJleGVjIiwidHJ1bmNhdGVkRW5kVGFnIiwic3RhcnRUYWdFeHByIiwiUmVnRXhwIiwidGVzdFN0cmluZyIsInN0YXJ0VGFnTWF0Y2giLCJzdGFydFRhZyIsInJldmVyc2VIdG1sIiwicmV2ZXJzZVRhZ09wZW5FeHByIiwidGFnTWF0Y2giLCJ0YWciLCJ0YWdOYW1lIiwic3RhcnRQb3MiLCJpbmRleCIsImVuZFBvcyIsImZyYWdtZW50IiwidGVzdCIsInN0ciIsInBoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicmVzdWx0Iiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsImluZGV4T2YiLCJuYXZBY3RpdmUiLCJzZXROYXZBY3RpdmUiLCJzZWFyY2hSZXN1bHRzU3RhdHVzIiwic2V0U2VhcmNoUmVzdWx0c1N0YXR1cyIsImRvYyIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbm5lckNvbnRhaW5lciIsInJlc3VsdHNIZWFkZXIiLCJtYXAiLCJyZXN1bHREZXRhaWxzIiwic3ViamVjdCIsInN1YmplY3ROYW1lIiwiZm9ybSIsImZvcm1OYW1lIiwidG9waWMiLCJ0b3BpY05hbWUiLCJocmVmIiwiaWQiLCJhIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJociIsImhvcml6b250YWxMaW5lIiwicmVzdWx0Tm90Rm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/References/Search/index.tsx\n");

/***/ })

});