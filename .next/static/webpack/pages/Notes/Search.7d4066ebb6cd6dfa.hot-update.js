"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Notes/Search",{

/***/ "./pages/Notes/Search/index.tsx":
/*!**************************************!*\
  !*** ./pages/Notes/Search/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/search.module.scss */ \"./styles/search.module.scss\");\n/* harmony import */ var _styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/context/StateContext */ \"./components/context/StateContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Reference = function(param) {\n    var searchResults = param.searchResults, searchText = param.searchText;\n    var _this1 = _this;\n    var truncateHTML = function truncateHTML(text, length) {\n        var startIndex = text.toLowerCase().search(\"\".concat(searchText.toLowerCase().replaceAll(\" \", \"|\")));\n        if (text) {\n            console.log(searchText.toLowerCase().replaceAll(\" \", \"|\"));\n        }\n        if (startIndex > 70) {\n            startIndex -= 70;\n        }\n        var endIndex = startIndex + length;\n        var truncated = text.substring(startIndex, endIndex);\n        // Remove line breaks and surrounding whitespace\n        truncated = truncated.replace(/(\\r\\n|\\n|\\r)/gm, \"\").trim();\n        // If the text ends with an incomplete start tag, trim it off\n        truncated = truncated.replace(/<(\\w*)(?:(?:\\s\\w+(?:={0,1}([\"']{0,1})\\w*\\2{0,1})))*$/g, \"\");\n        // If the text ends with a truncated end tag, fix it.\n        var truncatedEndTagExpr = /<\\/((?:\\w*))$/g;\n        var truncatedEndTagMatch = truncatedEndTagExpr.exec(truncated);\n        if (truncatedEndTagMatch != null) {\n            var truncatedEndTag = truncatedEndTagMatch[1];\n            // Check to see if there's an identifiable tag in the end tag\n            if (truncatedEndTag.length > 0) {\n                // If so, find the start tag, and close it\n                var startTagExpr = new RegExp(\"<(\" + truncatedEndTag + \"\\\\w?)(?:(?:\\\\s\\\\w+(?:=([\\\"'])\\\\w*\\\\2)))*>\");\n                var testString = truncated;\n                var startTagMatch = startTagExpr.exec(testString);\n                var startTag = null;\n                while(startTagMatch != null){\n                    startTag = startTagMatch[1];\n                    testString = testString.replace(startTagExpr, \"\");\n                    startTagMatch = startTagExpr.exec(testString);\n                }\n                if (startTag != null) {\n                    truncated = truncated.replace(truncatedEndTagExpr, \"</\" + startTag + \">\");\n                }\n            } else {\n                // Otherwise, cull off the broken end tag\n                truncated = truncated.replace(truncatedEndTagExpr, \"\");\n            }\n        }\n        // Now the tricky part. Reverse the text, and look for opening tags. For each opening tag,\n        //  check to see that he closing tag before it is for that tag. If not, append a closing tag.\n        var testString = reverseHtml(truncated);\n        var reverseTagOpenExpr = /<(?:([\"'])\\w*\\1=\\w+ )*(\\w*)>/;\n        var tagMatch = reverseTagOpenExpr.exec(testString);\n        while(tagMatch != null){\n            var tag = tagMatch[0];\n            var tagName = tagMatch[2];\n            var startPos = tagMatch.index;\n            var endPos = startPos + tag.length;\n            var fragment = testString.substring(0, endPos);\n            // Test to see if an end tag is found in the fragment. If not, append one to the end\n            //  of the truncated HTML, thus closing the last unclosed tag\n            if (!new RegExp(\"<\" + tagName + \"/>\").test(fragment)) {\n                truncated += \"</\" + reverseHtml(tagName) + \">\";\n            }\n            // Get rid of the already tested fragment\n            testString = testString.replace(fragment, \"\");\n            // Get another tag to test\n            tagMatch = reverseTagOpenExpr.exec(testString);\n        }\n        return truncated;\n    };\n    var reverseHtml = function reverseHtml(str) {\n        var ph = String.fromCharCode(206);\n        var result = str.split(\"\").reverse().join(\"\");\n        while(result.indexOf(\"<\") > -1){\n            result = result.replace(\"<\", ph);\n        }\n        while(result.indexOf(\">\") > -1){\n            result = result.replace(\">\", \"<\");\n        }\n        while(result.indexOf(ph) > -1){\n            result = result.replace(ph, \">\");\n        }\n        return result;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.NavContext), navActive = ref.navActive, setNavActive = ref.setNavActive;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), searchResultsStatus = ref1[0], setSearchResultsStatus = ref1[1];\n    var doc = searchResults.length > 0 ? searchResults[0].content : \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        searchResults.length > 0 ? setSearchResultsStatus(true) : setSearchResultsStatus(false);\n    }, [\n        searchResults,\n        searchText\n    ]);\n    // const content = unified()\n    // \t.use(rehypeParse, { fragment: true })\n    // \t.use(() => {\n    // \t\treturn (tree: Root) => {\n    // \t\t\tvisit(tree, 'element', (node, index, parent) => {\n    // \t\t\t\tif (node.type == 'element') {\n    // \t\t\t\t\tnode.children.map((child) => {\n    // \t\t\t\t\t\tconsole.log(child);\n    // \t\t\t\t\t});\n    // \t\t\t\t}\n    // \t\t\t});\n    // \t\t};\n    // \t})\n    // \t.use(rehypeStringify)\n    // \t.processSync(doc)\n    // \t.toString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().innerContainer),\n            children: [\n                searchResults.length > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().resultsHeader),\n                    children: \"About \".concat(searchResults.length, \" \").concat(searchResults.length > 1 ? \"Results\" : \"Result\", \" Found\")\n                }, void 0, false, {\n                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n                    lineNumber: 185,\n                    columnNumber: 6\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().resultsHeader),\n                    children: \"No result found for search \".concat(searchText)\n                }, void 0, false, {\n                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n                    lineNumber: 189,\n                    columnNumber: 6\n                }, _this),\n                searchResultsStatus && searchResults.map(function(result) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().resultDetails),\n                                    children: \"\".concat(result.subject.subjectName, \" > \").concat(result.form.formName, \" > \").concat(result.topic.topicName)\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n                                    lineNumber: 205,\n                                    columnNumber: 10\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/Notes/\".concat(result.subject.subjectName, \"/\").concat(result.form.formName.replace(\" \", \"\"), \"/\").concat(result.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ckContent \".concat((_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().result)),\n                                                dangerouslySetInnerHTML: {\n                                                    __html: truncateHTML(result.content, 700)\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n                                                lineNumber: 214,\n                                                columnNumber: 12\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                                className: (_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().horizontalLine)\n                                            }, void 0, false, {\n                                                fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n                                                lineNumber: 220,\n                                                columnNumber: 12\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n                                        lineNumber: 213,\n                                        columnNumber: 11\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n                                    lineNumber: 209,\n                                    columnNumber: 10\n                                }, _this1)\n                            ]\n                        }, void 0, true)\n                    }, result.id, false, {\n                        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n                        lineNumber: 203,\n                        columnNumber: 8\n                    }, _this1);\n                }),\n                !searchResultsStatus && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ckContent \".concat((_styles_search_module_scss__WEBPACK_IMPORTED_MODULE_4___default().resultNotFound)),\n                    dangerouslySetInnerHTML: {\n                        __html: \"<strong></strong>\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n                    lineNumber: 228,\n                    columnNumber: 6\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n            lineNumber: 183,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/luca/Documents/GitHub/shule/pages/Notes/Search/index.tsx\",\n        lineNumber: 182,\n        columnNumber: 3\n    }, _this);\n};\n_s(Reference, \"K+Dw4Ttq5e1BKOFC2zlQNd3OBZM=\");\n_c = Reference;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reference);\nvar _c;\n$RefreshReg$(_c, \"Reference\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aC9pbmRleC50c3g/ZTg1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2VhcmNoLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29udGV4dC9TdGF0ZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi8uLi9kYi9wcmlzbWEnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHRjb25zdCBzZWFyY2hUZXh0ID0gY29udGV4dC5xdWVyeS5maW5kIS50b1N0cmluZygpO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEubm90ZS5maW5kTWFueSh7XHJcblx0XHR3aGVyZToge1xyXG5cdFx0XHRjb250ZW50OiB7XHJcblx0XHRcdFx0c2VhcmNoOiBzZWFyY2hUZXh0LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHNlbGVjdDoge1xyXG5cdFx0XHRpZDogdHJ1ZSxcclxuXHRcdFx0Y29udGVudDogdHJ1ZSxcclxuXHRcdFx0c3ViamVjdDoge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0c3ViamVjdE5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybToge1xyXG5cdFx0XHRcdHNlbGVjdDoge1xyXG5cdFx0XHRcdFx0Zm9ybU5hbWU6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9waWM6IHtcclxuXHRcdFx0XHRzZWxlY3Q6IHtcclxuXHRcdFx0XHRcdHRvcGljTmFtZTogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRsZXQgc2VhcmNoUmVzdWx0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyBzZWFyY2hSZXN1bHRzLCBzZWFyY2hUZXh0IH0sXHJcblx0fTtcclxufTtcclxuXHJcbnR5cGUgbm90ZSA9IHtcclxuXHRzdWJqZWN0TmFtZTogYW55O1xyXG5cdGlkOiBudW1iZXI7XHJcblx0Y29udGVudDogc3RyaW5nO1xyXG5cdHN1YmplY3Q6IHtcclxuXHRcdHN1YmplY3ROYW1lOiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3JtOiB7XHJcblx0XHRmb3JtTmFtZTogc3RyaW5nO1xyXG5cdH07XHJcblx0dG9waWM6IHtcclxuXHRcdHRvcGljTmFtZTogc3RyaW5nO1xyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBSZWZlcmVuY2UgPSAoe1xuICAgIFx0c2VhcmNoUmVzdWx0cyxcbiAgICBcdHNlYXJjaFRleHQsXG4gICAgfTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSA9PiB7XHJcblx0Y29uc3QgeyBuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZSB9ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcclxuXHRjb25zdCBbc2VhcmNoUmVzdWx0c1N0YXR1cywgc2V0U2VhcmNoUmVzdWx0c1N0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGZ1bmN0aW9uIHRydW5jYXRlSFRNTCh0ZXh0OiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyKSB7XHJcblx0XHRsZXQgc3RhcnRJbmRleCA9IHRleHRcclxuXHRcdFx0LnRvTG93ZXJDYXNlKClcclxuXHRcdFx0LnNlYXJjaChgJHtzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnICcsICd8Jyl9YCk7XHJcblx0XHRpZiAodGV4dCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnICcsICd8JykpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzdGFydEluZGV4ID4gNzApIHtcclxuXHRcdFx0c3RhcnRJbmRleCAtPSA3MDtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgbGVuZ3RoO1xyXG5cdFx0dmFyIHRydW5jYXRlZCA9IHRleHQuc3Vic3RyaW5nKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuXHRcdC8vIFJlbW92ZSBsaW5lIGJyZWFrcyBhbmQgc3Vycm91bmRpbmcgd2hpdGVzcGFjZVxyXG5cdFx0dHJ1bmNhdGVkID0gdHJ1bmNhdGVkLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sICcnKS50cmltKCk7XHJcblx0XHQvLyBJZiB0aGUgdGV4dCBlbmRzIHdpdGggYW4gaW5jb21wbGV0ZSBzdGFydCB0YWcsIHRyaW0gaXQgb2ZmXHJcblx0XHR0cnVuY2F0ZWQgPSB0cnVuY2F0ZWQucmVwbGFjZShcclxuXHRcdFx0LzwoXFx3KikoPzooPzpcXHNcXHcrKD86PXswLDF9KFtcIiddezAsMX0pXFx3KlxcMnswLDF9KSkpKiQvZyxcclxuXHRcdFx0JydcclxuXHRcdCk7XHJcblx0XHQvLyBJZiB0aGUgdGV4dCBlbmRzIHdpdGggYSB0cnVuY2F0ZWQgZW5kIHRhZywgZml4IGl0LlxyXG5cdFx0dmFyIHRydW5jYXRlZEVuZFRhZ0V4cHIgPSAvPFxcLygoPzpcXHcqKSkkL2c7XHJcblx0XHR2YXIgdHJ1bmNhdGVkRW5kVGFnTWF0Y2ggPSB0cnVuY2F0ZWRFbmRUYWdFeHByLmV4ZWModHJ1bmNhdGVkKTtcclxuXHRcdGlmICh0cnVuY2F0ZWRFbmRUYWdNYXRjaCAhPSBudWxsKSB7XHJcblx0XHRcdHZhciB0cnVuY2F0ZWRFbmRUYWcgPSB0cnVuY2F0ZWRFbmRUYWdNYXRjaFsxXTtcclxuXHRcdFx0Ly8gQ2hlY2sgdG8gc2VlIGlmIHRoZXJlJ3MgYW4gaWRlbnRpZmlhYmxlIHRhZyBpbiB0aGUgZW5kIHRhZ1xyXG5cdFx0XHRpZiAodHJ1bmNhdGVkRW5kVGFnLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHQvLyBJZiBzbywgZmluZCB0aGUgc3RhcnQgdGFnLCBhbmQgY2xvc2UgaXRcclxuXHRcdFx0XHR2YXIgc3RhcnRUYWdFeHByID0gbmV3IFJlZ0V4cChcclxuXHRcdFx0XHRcdCc8KCcgKyB0cnVuY2F0ZWRFbmRUYWcgKyAnXFxcXHc/KSg/Oig/OlxcXFxzXFxcXHcrKD86PShbXCJcXCddKVxcXFx3KlxcXFwyKSkpKj4nXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR2YXIgdGVzdFN0cmluZyA9IHRydW5jYXRlZDtcclxuXHRcdFx0XHR2YXIgc3RhcnRUYWdNYXRjaCA9IHN0YXJ0VGFnRXhwci5leGVjKHRlc3RTdHJpbmcpO1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhcnRUYWcgPSBudWxsO1xyXG5cdFx0XHRcdHdoaWxlIChzdGFydFRhZ01hdGNoICE9IG51bGwpIHtcclxuXHRcdFx0XHRcdHN0YXJ0VGFnID0gc3RhcnRUYWdNYXRjaFsxXTtcclxuXHRcdFx0XHRcdHRlc3RTdHJpbmcgPSB0ZXN0U3RyaW5nLnJlcGxhY2Uoc3RhcnRUYWdFeHByLCAnJyk7XHJcblx0XHRcdFx0XHRzdGFydFRhZ01hdGNoID0gc3RhcnRUYWdFeHByLmV4ZWModGVzdFN0cmluZyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzdGFydFRhZyAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHR0cnVuY2F0ZWQgPSB0cnVuY2F0ZWQucmVwbGFjZShcclxuXHRcdFx0XHRcdFx0dHJ1bmNhdGVkRW5kVGFnRXhwcixcclxuXHRcdFx0XHRcdFx0JzwvJyArIHN0YXJ0VGFnICsgJz4nXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBPdGhlcndpc2UsIGN1bGwgb2ZmIHRoZSBicm9rZW4gZW5kIHRhZ1xyXG5cdFx0XHRcdHRydW5jYXRlZCA9IHRydW5jYXRlZC5yZXBsYWNlKHRydW5jYXRlZEVuZFRhZ0V4cHIsICcnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gTm93IHRoZSB0cmlja3kgcGFydC4gUmV2ZXJzZSB0aGUgdGV4dCwgYW5kIGxvb2sgZm9yIG9wZW5pbmcgdGFncy4gRm9yIGVhY2ggb3BlbmluZyB0YWcsXHJcblx0XHQvLyAgY2hlY2sgdG8gc2VlIHRoYXQgaGUgY2xvc2luZyB0YWcgYmVmb3JlIGl0IGlzIGZvciB0aGF0IHRhZy4gSWYgbm90LCBhcHBlbmQgYSBjbG9zaW5nIHRhZy5cclxuXHRcdHZhciB0ZXN0U3RyaW5nOiBzdHJpbmcgPSByZXZlcnNlSHRtbCh0cnVuY2F0ZWQpO1xyXG5cdFx0dmFyIHJldmVyc2VUYWdPcGVuRXhwciA9IC88KD86KFtcIiddKVxcdypcXDE9XFx3KyApKihcXHcqKT4vO1xyXG5cdFx0dmFyIHRhZ01hdGNoID0gcmV2ZXJzZVRhZ09wZW5FeHByLmV4ZWModGVzdFN0cmluZyk7XHJcblx0XHR3aGlsZSAodGFnTWF0Y2ggIT0gbnVsbCkge1xyXG5cdFx0XHR2YXIgdGFnID0gdGFnTWF0Y2hbMF07XHJcblx0XHRcdHZhciB0YWdOYW1lID0gdGFnTWF0Y2hbMl07XHJcblx0XHRcdHZhciBzdGFydFBvcyA9IHRhZ01hdGNoLmluZGV4O1xyXG5cdFx0XHR2YXIgZW5kUG9zID0gc3RhcnRQb3MgKyB0YWcubGVuZ3RoO1xyXG5cdFx0XHR2YXIgZnJhZ21lbnQgPSB0ZXN0U3RyaW5nLnN1YnN0cmluZygwLCBlbmRQb3MpO1xyXG5cdFx0XHQvLyBUZXN0IHRvIHNlZSBpZiBhbiBlbmQgdGFnIGlzIGZvdW5kIGluIHRoZSBmcmFnbWVudC4gSWYgbm90LCBhcHBlbmQgb25lIHRvIHRoZSBlbmRcclxuXHRcdFx0Ly8gIG9mIHRoZSB0cnVuY2F0ZWQgSFRNTCwgdGh1cyBjbG9zaW5nIHRoZSBsYXN0IHVuY2xvc2VkIHRhZ1xyXG5cdFx0XHRpZiAoIW5ldyBSZWdFeHAoJzwnICsgdGFnTmFtZSArICcvPicpLnRlc3QoZnJhZ21lbnQpKSB7XHJcblx0XHRcdFx0dHJ1bmNhdGVkICs9ICc8LycgKyByZXZlcnNlSHRtbCh0YWdOYW1lKSArICc+JztcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBHZXQgcmlkIG9mIHRoZSBhbHJlYWR5IHRlc3RlZCBmcmFnbWVudFxyXG5cdFx0XHR0ZXN0U3RyaW5nID0gdGVzdFN0cmluZy5yZXBsYWNlKGZyYWdtZW50LCAnJyk7XHJcblx0XHRcdC8vIEdldCBhbm90aGVyIHRhZyB0byB0ZXN0XHJcblx0XHRcdHRhZ01hdGNoID0gcmV2ZXJzZVRhZ09wZW5FeHByLmV4ZWModGVzdFN0cmluZyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1bmNhdGVkO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmV2ZXJzZUh0bWwoc3RyOiBzdHJpbmcpIHtcclxuXHRcdHZhciBwaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjA2KTtcclxuXHRcdHZhciByZXN1bHQgPSBzdHIuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcclxuXHRcdHdoaWxlIChyZXN1bHQuaW5kZXhPZignPCcpID4gLTEpIHtcclxuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoJzwnLCBwaCk7XHJcblx0XHR9XHJcblx0XHR3aGlsZSAocmVzdWx0LmluZGV4T2YoJz4nKSA+IC0xKSB7XHJcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKCc+JywgJzwnKTtcclxuXHRcdH1cclxuXHRcdHdoaWxlIChyZXN1bHQuaW5kZXhPZihwaCkgPiAtMSkge1xyXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShwaCwgJz4nKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRjb25zdCBkb2MgPSBzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDAgPyBzZWFyY2hSZXN1bHRzWzBdLmNvbnRlbnQgOiAnJztcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMFxyXG5cdFx0XHQ/IHNldFNlYXJjaFJlc3VsdHNTdGF0dXModHJ1ZSlcclxuXHRcdFx0OiBzZXRTZWFyY2hSZXN1bHRzU3RhdHVzKGZhbHNlKTtcclxuXHR9LCBbc2VhcmNoUmVzdWx0cywgc2VhcmNoVGV4dF0pO1xyXG5cdC8vIGNvbnN0IGNvbnRlbnQgPSB1bmlmaWVkKClcclxuXHQvLyBcdC51c2UocmVoeXBlUGFyc2UsIHsgZnJhZ21lbnQ6IHRydWUgfSlcclxuXHQvLyBcdC51c2UoKCkgPT4ge1xyXG5cdC8vIFx0XHRyZXR1cm4gKHRyZWU6IFJvb3QpID0+IHtcclxuXHQvLyBcdFx0XHR2aXNpdCh0cmVlLCAnZWxlbWVudCcsIChub2RlLCBpbmRleCwgcGFyZW50KSA9PiB7XHJcblx0Ly8gXHRcdFx0XHRpZiAobm9kZS50eXBlID09ICdlbGVtZW50Jykge1xyXG5cdC8vIFx0XHRcdFx0XHRub2RlLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcclxuXHQvLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhjaGlsZCk7XHJcblx0Ly8gXHRcdFx0XHRcdH0pO1xyXG5cdC8vIFx0XHRcdFx0fVxyXG5cdC8vIFx0XHRcdH0pO1xyXG5cdC8vIFx0XHR9O1xyXG5cdC8vIFx0fSlcclxuXHQvLyBcdC51c2UocmVoeXBlU3RyaW5naWZ5KVxyXG5cdC8vIFx0LnByb2Nlc3NTeW5jKGRvYylcclxuXHQvLyBcdC50b1N0cmluZygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb250YWluZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmlubmVyQ29udGFpbmVyfT5cclxuXHRcdFx0XHR7c2VhcmNoUmVzdWx0cy5sZW5ndGggPiAxID8gKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5yZXN1bHRzSGVhZGVyfT57YEFib3V0ICR7XHJcblx0XHRcdFx0XHRcdHNlYXJjaFJlc3VsdHMubGVuZ3RoXHJcblx0XHRcdFx0XHR9ICR7c2VhcmNoUmVzdWx0cy5sZW5ndGggPiAxID8gJ1Jlc3VsdHMnIDogJ1Jlc3VsdCd9IEZvdW5kYH08L2Rpdj5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xyXG5cdFx0XHRcdFx0XHRcdFN0eWxlcy5yZXN1bHRzSGVhZGVyXHJcblx0XHRcdFx0XHRcdH0+e2BObyByZXN1bHQgZm91bmQgZm9yIHNlYXJjaCAke3NlYXJjaFRleHR9YH08L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtzZWFyY2hSZXN1bHRzU3RhdHVzICYmXHJcblx0XHRcdFx0XHRzZWFyY2hSZXN1bHRzLm1hcChcclxuXHRcdFx0XHRcdFx0KHJlc3VsdDoge1xyXG5cdFx0XHRcdFx0XHRcdGZvcm06IGFueTtcclxuXHRcdFx0XHRcdFx0XHR0b3BpYzogYW55O1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBSZWFjdC5LZXkgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHRcdHN1YmplY3Q6IG5vdGU7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogc3RyaW5nO1xyXG5cdFx0XHRcdFx0XHR9KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e3Jlc3VsdC5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFN0eWxlcy5yZXN1bHREZXRhaWxzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fT57YCR7cmVzdWx0LnN1YmplY3Quc3ViamVjdE5hbWV9ID4gJHtyZXN1bHQuZm9ybS5mb3JtTmFtZX0gPiAke3Jlc3VsdC50b3BpYy50b3BpY05hbWV9YH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL05vdGVzLyR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQuc3ViamVjdC5zdWJqZWN0TmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0vJHtyZXN1bHQuZm9ybS5mb3JtTmFtZS5yZXBsYWNlKCcgJywgJycpfS8ke3Jlc3VsdC5pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgY2tDb250ZW50ICR7U3R5bGVzLnJlc3VsdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9faHRtbDogdHJ1bmNhdGVIVE1MKHJlc3VsdC5jb250ZW50LCA3MDApLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxociBjbGFzc05hbWU9e1N0eWxlcy5ob3Jpem9udGFsTGluZX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdHshc2VhcmNoUmVzdWx0c1N0YXR1cyAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGNrQ29udGVudCAke1N0eWxlcy5yZXN1bHROb3RGb3VuZH1gfVxyXG5cdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG5cdFx0XHRcdFx0XHRcdF9faHRtbDogJzxzdHJvbmc+PC9zdHJvbmc+JyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdHlsZXMiLCJOYXZDb250ZXh0IiwiTGluayIsIlJlZmVyZW5jZSIsInNlYXJjaFJlc3VsdHMiLCJzZWFyY2hUZXh0IiwidHJ1bmNhdGVIVE1MIiwidGV4dCIsImxlbmd0aCIsInN0YXJ0SW5kZXgiLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaCIsInJlcGxhY2VBbGwiLCJjb25zb2xlIiwibG9nIiwiZW5kSW5kZXgiLCJ0cnVuY2F0ZWQiLCJzdWJzdHJpbmciLCJyZXBsYWNlIiwidHJpbSIsInRydW5jYXRlZEVuZFRhZ0V4cHIiLCJ0cnVuY2F0ZWRFbmRUYWdNYXRjaCIsImV4ZWMiLCJ0cnVuY2F0ZWRFbmRUYWciLCJzdGFydFRhZ0V4cHIiLCJSZWdFeHAiLCJ0ZXN0U3RyaW5nIiwic3RhcnRUYWdNYXRjaCIsInN0YXJ0VGFnIiwicmV2ZXJzZUh0bWwiLCJyZXZlcnNlVGFnT3BlbkV4cHIiLCJ0YWdNYXRjaCIsInRhZyIsInRhZ05hbWUiLCJzdGFydFBvcyIsImluZGV4IiwiZW5kUG9zIiwiZnJhZ21lbnQiLCJ0ZXN0Iiwic3RyIiwicGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJyZXN1bHQiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwiaW5kZXhPZiIsIm5hdkFjdGl2ZSIsInNldE5hdkFjdGl2ZSIsInNlYXJjaFJlc3VsdHNTdGF0dXMiLCJzZXRTZWFyY2hSZXN1bHRzU3RhdHVzIiwiZG9jIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImlubmVyQ29udGFpbmVyIiwicmVzdWx0c0hlYWRlciIsIm1hcCIsInJlc3VsdERldGFpbHMiLCJzdWJqZWN0Iiwic3ViamVjdE5hbWUiLCJmb3JtIiwiZm9ybU5hbWUiLCJ0b3BpYyIsInRvcGljTmFtZSIsImhyZWYiLCJpZCIsImEiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImhyIiwiaG9yaXpvbnRhbExpbmUiLCJyZXN1bHROb3RGb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Notes/Search/index.tsx\n");

/***/ })

});