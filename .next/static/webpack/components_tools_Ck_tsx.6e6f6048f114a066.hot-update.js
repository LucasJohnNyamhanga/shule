"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_tools_Ck_tsx",{

/***/ "./components/tools/Ck.tsx":
/*!*********************************!*\
  !*** ./components/tools/Ck.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ \"./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js\");\n/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ckeditor5_build_classic_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ckeditor5-build-classic-extended */ \"./node_modules/ckeditor5-build-classic-extended/build/ckeditor.js\");\n/* harmony import */ var ckeditor5_build_classic_extended__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ckeditor5_build_classic_extended__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_ckEditor_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/ckEditor.module.scss */ \"./styles/ckEditor.module.scss\");\n/* harmony import */ var _styles_ckEditor_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ckEditor_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar Ck = function(param) {\n    var content = param.content, dataCk = param.dataCk, onReadyToStart = param.onReadyToStart;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ckEditor_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__.CKEditor, {\n            editor: (ckeditor5_build_classic_extended__WEBPACK_IMPORTED_MODULE_3___default()),\n            data: dataCk,\n            onReady: onReadyToStart,\n            onChange: function(event, editor) {\n                var data = editor.getData();\n                content(data);\n            },\n            onBlur: function(event, editor) {\n                console.log(\"Blur.\", editor);\n            },\n            onFocus: function(event, editor) {\n                console.log(\"Focus.\", editor);\n            },\n            config: {\n                toolbar: {\n                    items: [\n                        \"heading\",\n                        \"|\",\n                        \"fontfamily\",\n                        \"fontsize\",\n                        \"|\",\n                        \"alignment\",\n                        \"|\",\n                        \"fontColor\",\n                        \"fontBackgroundColor\",\n                        \"|\",\n                        \"bold\",\n                        \"italic\",\n                        \"strikethrough\",\n                        \"underline\",\n                        \"subscript\",\n                        \"superscript\",\n                        \"|\",\n                        \"link\",\n                        \"|\",\n                        \"outdent\",\n                        \"indent\",\n                        \"|\",\n                        \"bulletedList\",\n                        \"numberedList\",\n                        \"todoList\",\n                        \"|\",\n                        \"code\",\n                        \"codeBlock\",\n                        \"blockQuote\",\n                        \"|\",\n                        \"link\",\n                        \"imageUpload\",\n                        \"|\",\n                        \"insertTable\",\n                        \"specialCharacters\",\n                        \"tableColumn\",\n                        \"tableRow\",\n                        \"mergeTableCells\",\n                        \"mediaEmbed\",\n                        \"|\",\n                        \"undo\",\n                        \"redo\", \n                    ],\n                    shouldNotGroupWhenFull: true\n                },\n                simpleUpload: {\n                    // The URL that the images are uploaded to.\n                    uploadUrl: \"http://localhost:3000/api/uploadCk\"\n                }\n            }\n        }, void 0, false, {\n            fileName: \"/home/luca/Documents/GitHub/shule/components/tools/Ck.tsx\",\n            lineNumber: 15,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/luca/Documents/GitHub/shule/components/tools/Ck.tsx\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, _this);\n};\n_c = Ck;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ck);\nfunction handleEditor() {\n    throw new Error(\"Function not implemented.\");\n}\nvar _c;\n$RefreshReg$(_c, \"Ck\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rvb2xzL0NrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE4RDtBQUNUO0FBQ1E7QUFDTjtBQVF2RCxJQUFNSSxFQUFFLEdBQUcsZ0JBQXNEO1FBQW5EQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLGNBQWMsU0FBZEEsY0FBYztJQUM1QyxxQkFDQyw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVOLCtFQUFnQjtrQkFDL0IsNEVBQUNGLCtEQUFRO1lBQ1JVLE1BQU0sRUFBRVQseUVBQWE7WUFDckJVLElBQUksRUFBRU4sTUFBTTtZQUNaTyxPQUFPLEVBQUVOLGNBQWM7WUFDdkJPLFFBQVEsRUFBRSxTQUFDQyxLQUFVLEVBQUVKLE1BQVcsRUFBSztnQkFDdEMsSUFBTUMsSUFBSSxHQUFHRCxNQUFNLENBQUNLLE9BQU8sRUFBRTtnQkFDN0JYLE9BQU8sQ0FBQ08sSUFBSSxDQUFDLENBQUM7YUFDZDtZQUNESyxNQUFNLEVBQUUsU0FBQ0YsS0FBVSxFQUFFSixNQUFXLEVBQUs7Z0JBQ3BDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVSLE1BQU0sQ0FBQyxDQUFDO2FBQzdCO1lBQ0RTLE9BQU8sRUFBRSxTQUFDTCxLQUFVLEVBQUVKLE1BQVcsRUFBSztnQkFDckNPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRVIsTUFBTSxDQUFDLENBQUM7YUFDOUI7WUFDRFUsTUFBTSxFQUFFO2dCQUNQQyxPQUFPLEVBQUU7b0JBQ1JDLEtBQUssRUFBRTt3QkFDTixTQUFTO3dCQUNULEdBQUc7d0JBQ0gsWUFBWTt3QkFDWixVQUFVO3dCQUNWLEdBQUc7d0JBQ0gsV0FBVzt3QkFDWCxHQUFHO3dCQUNILFdBQVc7d0JBQ1gscUJBQXFCO3dCQUNyQixHQUFHO3dCQUNILE1BQU07d0JBQ04sUUFBUTt3QkFDUixlQUFlO3dCQUNmLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLEdBQUc7d0JBQ0gsTUFBTTt3QkFDTixHQUFHO3dCQUNILFNBQVM7d0JBQ1QsUUFBUTt3QkFDUixHQUFHO3dCQUNILGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxVQUFVO3dCQUNWLEdBQUc7d0JBQ0gsTUFBTTt3QkFDTixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osR0FBRzt3QkFDSCxNQUFNO3dCQUNOLGFBQWE7d0JBQ2IsR0FBRzt3QkFDSCxhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixHQUFHO3dCQUNILE1BQU07d0JBQ04sTUFBTTtxQkFDTjtvQkFDREMsc0JBQXNCLEVBQUUsSUFBSTtpQkFDNUI7Z0JBRURDLFlBQVksRUFBRTtvQkFDYiwyQ0FBMkM7b0JBQzNDQyxTQUFTLEVBQUUsb0NBQW9DO2lCQU0vQzthQUNEOzs7OztpQkFDQTs7Ozs7YUFDRyxDQUNMO0NBQ0Y7QUEvRUt0QixLQUFBQSxFQUFFO0FBaUZSLCtEQUFlQSxFQUFFLEVBQUM7QUFDbEIsU0FBU3VCLFlBQVksR0FBRztJQUN2QixNQUFNLElBQUlDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0NBQzdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9vbHMvQ2sudHN4P2I1YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ0tFZGl0b3IgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXJlYWN0JztcclxuaW1wb3J0IENsYXNzaWNFZGl0b3IgZnJvbSAnY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMtZXh0ZW5kZWQnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9ja0VkaXRvci5tb2R1bGUuc2Nzcyc7XHJcblxyXG50eXBlIGRhdGFDb250ZW50ID0ge1xyXG5cdGNvbnRlbnQ6IChkYXRhOiBzdHJpbmcpID0+IHZvaWQ7XHJcblx0ZGF0YUNrOiBzdHJpbmc7XHJcblx0b25SZWFkeVRvU3RhcnQ6ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBDayA9ICh7IGNvbnRlbnQsIGRhdGFDaywgb25SZWFkeVRvU3RhcnQgfTogZGF0YUNvbnRlbnQpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb250YWluZXJ9PlxyXG5cdFx0XHQ8Q0tFZGl0b3JcclxuXHRcdFx0XHRlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XHJcblx0XHRcdFx0ZGF0YT17ZGF0YUNrfVxyXG5cdFx0XHRcdG9uUmVhZHk9e29uUmVhZHlUb1N0YXJ0fVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQ6IGFueSwgZWRpdG9yOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdFx0Y29udGVudChkYXRhKTtcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHRcdG9uQmx1cj17KGV2ZW50OiBhbnksIGVkaXRvcjogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQmx1ci4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdH19XHJcblx0XHRcdFx0b25Gb2N1cz17KGV2ZW50OiBhbnksIGVkaXRvcjogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRm9jdXMuJywgZWRpdG9yKTtcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHRcdGNvbmZpZz17e1xyXG5cdFx0XHRcdFx0dG9vbGJhcjoge1xyXG5cdFx0XHRcdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdFx0XHRcdCdoZWFkaW5nJyxcclxuXHRcdFx0XHRcdFx0XHQnfCcsXHJcblx0XHRcdFx0XHRcdFx0J2ZvbnRmYW1pbHknLFxyXG5cdFx0XHRcdFx0XHRcdCdmb250c2l6ZScsXHJcblx0XHRcdFx0XHRcdFx0J3wnLFxyXG5cdFx0XHRcdFx0XHRcdCdhbGlnbm1lbnQnLFxyXG5cdFx0XHRcdFx0XHRcdCd8JyxcclxuXHRcdFx0XHRcdFx0XHQnZm9udENvbG9yJyxcclxuXHRcdFx0XHRcdFx0XHQnZm9udEJhY2tncm91bmRDb2xvcicsXHJcblx0XHRcdFx0XHRcdFx0J3wnLFxyXG5cdFx0XHRcdFx0XHRcdCdib2xkJyxcclxuXHRcdFx0XHRcdFx0XHQnaXRhbGljJyxcclxuXHRcdFx0XHRcdFx0XHQnc3RyaWtldGhyb3VnaCcsXHJcblx0XHRcdFx0XHRcdFx0J3VuZGVybGluZScsXHJcblx0XHRcdFx0XHRcdFx0J3N1YnNjcmlwdCcsXHJcblx0XHRcdFx0XHRcdFx0J3N1cGVyc2NyaXB0JyxcclxuXHRcdFx0XHRcdFx0XHQnfCcsXHJcblx0XHRcdFx0XHRcdFx0J2xpbmsnLFxyXG5cdFx0XHRcdFx0XHRcdCd8JyxcclxuXHRcdFx0XHRcdFx0XHQnb3V0ZGVudCcsXHJcblx0XHRcdFx0XHRcdFx0J2luZGVudCcsXHJcblx0XHRcdFx0XHRcdFx0J3wnLFxyXG5cdFx0XHRcdFx0XHRcdCdidWxsZXRlZExpc3QnLFxyXG5cdFx0XHRcdFx0XHRcdCdudW1iZXJlZExpc3QnLFxyXG5cdFx0XHRcdFx0XHRcdCd0b2RvTGlzdCcsXHJcblx0XHRcdFx0XHRcdFx0J3wnLFxyXG5cdFx0XHRcdFx0XHRcdCdjb2RlJyxcclxuXHRcdFx0XHRcdFx0XHQnY29kZUJsb2NrJyxcclxuXHRcdFx0XHRcdFx0XHQnYmxvY2tRdW90ZScsXHJcblx0XHRcdFx0XHRcdFx0J3wnLFxyXG5cdFx0XHRcdFx0XHRcdCdsaW5rJyxcclxuXHRcdFx0XHRcdFx0XHQnaW1hZ2VVcGxvYWQnLFxyXG5cdFx0XHRcdFx0XHRcdCd8JyxcclxuXHRcdFx0XHRcdFx0XHQnaW5zZXJ0VGFibGUnLFxyXG5cdFx0XHRcdFx0XHRcdCdzcGVjaWFsQ2hhcmFjdGVycycsXHJcblx0XHRcdFx0XHRcdFx0J3RhYmxlQ29sdW1uJyxcclxuXHRcdFx0XHRcdFx0XHQndGFibGVSb3cnLFxyXG5cdFx0XHRcdFx0XHRcdCdtZXJnZVRhYmxlQ2VsbHMnLFxyXG5cdFx0XHRcdFx0XHRcdCdtZWRpYUVtYmVkJyxcclxuXHRcdFx0XHRcdFx0XHQnfCcsXHJcblx0XHRcdFx0XHRcdFx0J3VuZG8nLFxyXG5cdFx0XHRcdFx0XHRcdCdyZWRvJyxcclxuXHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0c2hvdWxkTm90R3JvdXBXaGVuRnVsbDogdHJ1ZSxcclxuXHRcdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdFx0c2ltcGxlVXBsb2FkOiB7XHJcblx0XHRcdFx0XHRcdC8vIFRoZSBVUkwgdGhhdCB0aGUgaW1hZ2VzIGFyZSB1cGxvYWRlZCB0by5cclxuXHRcdFx0XHRcdFx0dXBsb2FkVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91cGxvYWRDaycsXHJcblx0XHRcdFx0XHRcdC8vIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0Ly8gaGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHQvLyAgICAgJ1gtQ1NSRi1UT0tFTic6ICdDU1JGLVRva2VuJyxcclxuXHRcdFx0XHRcdFx0Ly8gICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgPEpTT04gV2ViIFRva2VuPidcclxuXHRcdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENrO1xyXG5mdW5jdGlvbiBoYW5kbGVFZGl0b3IoKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ0tFZGl0b3IiLCJDbGFzc2ljRWRpdG9yIiwiU3R5bGVzIiwiQ2siLCJjb250ZW50IiwiZGF0YUNrIiwib25SZWFkeVRvU3RhcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJlZGl0b3IiLCJkYXRhIiwib25SZWFkeSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJnZXREYXRhIiwib25CbHVyIiwiY29uc29sZSIsImxvZyIsIm9uRm9jdXMiLCJjb25maWciLCJ0b29sYmFyIiwiaXRlbXMiLCJzaG91bGROb3RHcm91cFdoZW5GdWxsIiwic2ltcGxlVXBsb2FkIiwidXBsb2FkVXJsIiwiaGFuZGxlRWRpdG9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tools/Ck.tsx\n"));

/***/ })

});