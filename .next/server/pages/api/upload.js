"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "mv":
/*!*********************!*\
  !*** external "mv" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("mv");

/***/ }),

/***/ "(api)/./pages/api/upload.tsx":
/*!******************************!*\
  !*** ./pages/api/upload.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n\nvar mv = __webpack_require__(/*! mv */ \"mv\");\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm();\n        form.parse(req, (err, fields, files)=>{\n            if (err) return reject(err);\n            const fileUpload = JSON.parse(JSON.stringify(files));\n            var oldPath = fileUpload.file.filepath;\n            var newPath = `./public/uploads/${fileUpload.file.originalFilename}`;\n            mv(oldPath, newPath, function(err) {\n                console.log(err);\n            });\n            res.status(200).json({\n                file: `/uploads/${fileUpload.file.originalFilename}`\n            });\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBSXpDLElBQUlDLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxjQUFJLENBQUM7QUFHZixNQUFNQyxNQUFNLEdBQUc7SUFDbEJDLEdBQUcsRUFBRTtRQUNEQyxVQUFVLEVBQUUsS0FBSztLQUNwQjtDQUNKLENBQUM7QUFLYSxlQUFlQyxPQUFPLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFFN0UsTUFBTUMsSUFBSSxHQUFHLE1BQU0sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxHQUFLO1FBQ2hELE1BQU1DLElBQUksR0FBRyxJQUFJYixvREFBWSxFQUFFO1FBRS9CYSxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsR0FBRyxFQUFFLENBQUNRLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEdBQUs7WUFDcEMsSUFBSUYsR0FBRyxFQUFFLE9BQU9ILE1BQU0sQ0FBQ0csR0FBRyxDQUFDO1lBQzNCLE1BQU1HLFVBQVUsR0FBR0MsSUFBSSxDQUFDTCxLQUFLLENBQUNLLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxLQUFLLENBQUMsQ0FBQztZQUNwRCxJQUFJSSxPQUFPLEdBQUdILFVBQVUsQ0FBQ0ksSUFBSSxDQUFDQyxRQUFRO1lBQ3RDLElBQUlDLE9BQU8sR0FBRyxDQUFDLGlCQUFpQixFQUFFTixVQUFVLENBQUNJLElBQUksQ0FBQ0csZ0JBQWdCLENBQUUsQ0FBQztZQUNyRXhCLEVBQUUsQ0FBQ29CLE9BQU8sRUFBRUcsT0FBTyxFQUFFLFNBQVVULEdBQU8sRUFBRTtnQkFDcENXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixHQUFHLENBQUM7YUFDbkIsQ0FBQyxDQUFDO1lBQ0hQLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUNqQlAsSUFBSSxFQUFDLENBQUMsU0FBUyxFQUFFSixVQUFVLENBQUNJLElBQUksQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBQzthQUN0RCxDQUFDO1NBQ0wsQ0FBQztLQUVMLENBQUM7Q0FFTCIsInNvdXJjZXMiOlsid2VicGFjazovL3NodWxlLy4vcGFnZXMvYXBpL3VwbG9hZC50c3g/OGY1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmNvbWluZ0Zvcm0gfSBmcm9tICdmb3JtaWRhYmxlJ1xyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJ1xyXG5cclxudmFyIG12ID0gcmVxdWlyZSgnbXYnKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgYXBpOiB7XHJcbiAgICAgICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBJbmNvbWluZ0Zvcm0oKVxyXG4gICAgXHJcbiAgICAgICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVVcGxvYWQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpbGVzKSk7XHJcbiAgICAgICAgICAgIHZhciBvbGRQYXRoID0gZmlsZVVwbG9hZC5maWxlLmZpbGVwYXRoO1xyXG4gICAgICAgICAgICB2YXIgbmV3UGF0aCA9IGAuL3B1YmxpYy91cGxvYWRzLyR7ZmlsZVVwbG9hZC5maWxlLm9yaWdpbmFsRmlsZW5hbWUgfWA7XHJcbiAgICAgICAgICAgIG12KG9sZFBhdGgsIG5ld1BhdGgsIGZ1bmN0aW9uIChlcnI6YW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBmaWxlOmAvdXBsb2Fkcy8ke2ZpbGVVcGxvYWQuZmlsZS5vcmlnaW5hbEZpbGVuYW1lfWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG59Il0sIm5hbWVzIjpbIkluY29taW5nRm9ybSIsIm12IiwicmVxdWlyZSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZm9ybSIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJmaWxlVXBsb2FkIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9sZFBhdGgiLCJmaWxlIiwiZmlsZXBhdGgiLCJuZXdQYXRoIiwib3JpZ2luYWxGaWxlbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.tsx"));
module.exports = __webpack_exports__;

})();