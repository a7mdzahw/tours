/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/destination/[name]",{

/***/ "./pages/destination/[name].js":
/*!*************************************!*\
  !*** ./pages/destination/[name].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_shared_Rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/Rating */ \"./components/shared/Rating.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/pages/destination/[name].js\",\n    _this = undefined;\n\n\n\nvar DestinationCatalog = function DestinationCatalog(_ref) {\n  var destination = _ref.destination,\n      destinationTours = _ref.destinationTours;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    style: {\n      minHeight: \"62vh\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"px-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-xl my-2 font-bold uppercase\",\n        children: [\"Explore the best of \", destination.name, \" Tours\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-sm text-muted mb-1\",\n        children: [destinationTours.length, \" results\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row container m-0 p-0\",\n      children: destinationTours.map(function (tour) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-md-4 px-2 mb-3\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card rounded-lg\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"card-body flex space-x-6\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: tour.img,\n                alt: tour.name,\n                className: \"h-48 w-64 rounded-lg object-cover\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                  children: tour.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 19,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {\n                  rating: tour.rating\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 20,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  children: tour.price\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 21,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 18,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 13\n          }, _this)\n        }, tour.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = DestinationCatalog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DestinationCatalog);\n\nvar _c;\n\n$RefreshReg$(_c, \"DestinationCatalog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVzdGluYXRpb24vW25hbWVdLmpzPzIyMzQiXSwibmFtZXMiOlsiRGVzdGluYXRpb25DYXRhbG9nIiwiZGVzdGluYXRpb24iLCJkZXN0aW5hdGlvblRvdXJzIiwibWluSGVpZ2h0IiwibmFtZSIsImxlbmd0aCIsIm1hcCIsInRvdXIiLCJpbWciLCJyYXRpbmciLCJwcmljZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUF1QztBQUFBLE1BQXBDQyxXQUFvQyxRQUFwQ0EsV0FBb0M7QUFBQSxNQUF2QkMsZ0JBQXVCLFFBQXZCQSxnQkFBdUI7QUFDaEUsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBbEM7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGtDQUFkO0FBQUEsMkNBQXNFRixXQUFXLENBQUNHLElBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFDLHlCQUFiO0FBQUEsbUJBQXdDRixnQkFBZ0IsQ0FBQ0csTUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLGdCQUNHSCxnQkFBZ0IsQ0FBQ0ksR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRDtBQUFBLDRCQUNwQjtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsMEJBQWY7QUFBQSxzQ0FDRTtBQUFLLG1CQUFHLEVBQUVBLElBQUksQ0FBQ0MsR0FBZjtBQUFvQixtQkFBRyxFQUFFRCxJQUFJLENBQUNILElBQTlCO0FBQW9DLHlCQUFTLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsd0NBQ0U7QUFBQSw0QkFBS0csSUFBSSxDQUFDSDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRSw4REFBQyw4REFBRDtBQUFRLHdCQUFNLEVBQUVHLElBQUksQ0FBQ0U7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQUdFO0FBQUEsNEJBQUlGLElBQUksQ0FBQ0c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBeUNILElBQUksQ0FBQ0ksRUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0I7QUFBQSxPQUFyQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQXpCRDs7S0FBTVgsa0I7O0FBd0NOLCtEQUFlQSxrQkFBZiIsImZpbGUiOiIuL3BhZ2VzL2Rlc3RpbmF0aW9uL1tuYW1lXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSYXRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL1JhdGluZ1wiO1xuaW1wb3J0IGRlc3RpbmF0aW9ucyBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9kYXRhL2Rlc3RpbmF0aW9ucy5qc29uXCI7XG5pbXBvcnQgdG91cnMgZnJvbSBcIi4uLy4uL3B1YmxpYy9hc3NldHMvZGF0YS90b3Vycy5qc29uXCI7XG5cbmNvbnN0IERlc3RpbmF0aW9uQ2F0YWxvZyA9ICh7IGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvblRvdXJzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IG1pbkhlaWdodDogXCI2MnZoXCIgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgbXktMiBmb250LWJvbGQgdXBwZXJjYXNlXCI+RXhwbG9yZSB0aGUgYmVzdCBvZiB7ZGVzdGluYXRpb24ubmFtZX0gVG91cnM8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQgbWItMVwiPntkZXN0aW5hdGlvblRvdXJzLmxlbmd0aH0gcmVzdWx0czwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29udGFpbmVyIG0tMCBwLTBcIj5cbiAgICAgICAge2Rlc3RpbmF0aW9uVG91cnMubWFwKCh0b3VyKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBweC0yIG1iLTNcIiBrZXk9e3RvdXIuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZmxleCBzcGFjZS14LTZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dG91ci5pbWd9IGFsdD17dG91ci5uYW1lfSBjbGFzc05hbWU9XCJoLTQ4IHctNjQgcm91bmRlZC1sZyBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDI+e3RvdXIubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgPFJhdGluZyByYXRpbmc9e3RvdXIucmF0aW5nfSAvPlxuICAgICAgICAgICAgICAgICAgPHA+e3RvdXIucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbnMuZmluZCgoZGVzdCkgPT4gZGVzdC5uYW1lID09PSBxdWVyeS5uYW1lKTtcblxuICBjb25zdCBkZXN0aW5hdGlvblRvdXJzID0gW107XG5cbiAgZm9yIChsZXQgaWQgb2YgZGVzdGluYXRpb24udG91cnMpIHtcbiAgICBjb25zdCB0b3VyID0gdG91cnMuZmluZCgodG91cikgPT4gdG91ci5pZCA9PSBpZCk7XG4gICAgaWYgKHRvdXIpIGRlc3RpbmF0aW9uVG91cnMucHVzaCh0b3VyKTtcbiAgfVxuXG4gIHJldHVybiB7IHByb3BzOiB7IGRlc3RpbmF0aW9uVG91cnMsIGRlc3RpbmF0aW9uIH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uQ2F0YWxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/destination/[name].js\n");

/***/ })

});