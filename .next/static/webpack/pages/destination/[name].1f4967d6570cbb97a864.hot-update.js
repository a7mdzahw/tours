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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_shared_Rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/Rating */ \"./components/shared/Rating.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/pages/destination/[name].js\",\n    _this = undefined;\n\n\n\nvar DestinationCatalog = function DestinationCatalog(_ref) {\n  var destination = _ref.destination,\n      destinationTours = _ref.destinationTours;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"text-xl my-2 font-bold\",\n      children: [destination.name, \" Tours\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"text-sm text-muted mb-1\",\n      children: [destinationTours.length, \" results\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"tours\",\n      children: destinationTours.map(function (tour) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"card rounded-lg\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body flex space-x-6\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: tour.img,\n              alt: tour.name,\n              className: \"w-64 rounded-lg\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: tour.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 16,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {\n                rating: tour.rating\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: tour.price\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 18,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, _this)\n        }, tour.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = DestinationCatalog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DestinationCatalog);\n\nvar _c;\n\n$RefreshReg$(_c, \"DestinationCatalog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVzdGluYXRpb24vW25hbWVdLmpzPzIyMzQiXSwibmFtZXMiOlsiRGVzdGluYXRpb25DYXRhbG9nIiwiZGVzdGluYXRpb24iLCJkZXN0aW5hdGlvblRvdXJzIiwibmFtZSIsImxlbmd0aCIsIm1hcCIsInRvdXIiLCJpbWciLCJyYXRpbmciLCJwcmljZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUF1QztBQUFBLE1BQXBDQyxXQUFvQyxRQUFwQ0EsV0FBb0M7QUFBQSxNQUF2QkMsZ0JBQXVCLFFBQXZCQSxnQkFBdUI7QUFDaEUsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHdCQUFkO0FBQUEsaUJBQXdDRCxXQUFXLENBQUNFLElBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBRyxlQUFTLEVBQUMseUJBQWI7QUFBQSxpQkFBd0NELGdCQUFnQixDQUFDRSxNQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSxnQkFDR0YsZ0JBQWdCLENBQUNHLEdBQWpCLENBQXFCLFVBQUNDLElBQUQ7QUFBQSw0QkFDcEI7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsb0NBQ0U7QUFBSyxpQkFBRyxFQUFFQSxJQUFJLENBQUNDLEdBQWY7QUFBb0IsaUJBQUcsRUFBRUQsSUFBSSxDQUFDSCxJQUE5QjtBQUFvQyx1QkFBUyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHNDQUNFO0FBQUEsMEJBQUtHLElBQUksQ0FBQ0g7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBUSxzQkFBTSxFQUFFRyxJQUFJLENBQUNFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFHRTtBQUFBLDBCQUFJRixJQUFJLENBQUNHO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBc0NILElBQUksQ0FBQ0ksRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0I7QUFBQSxPQUFyQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXJCRDs7S0FBTVYsa0I7O0FBa0NOLCtEQUFlQSxrQkFBZiIsImZpbGUiOiIuL3BhZ2VzL2Rlc3RpbmF0aW9uL1tuYW1lXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSYXRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL1JhdGluZ1wiO1xuaW1wb3J0IGRlc3RpbmF0aW9ucyBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9kYXRhL2Rlc3RpbmF0aW9ucy5qc29uXCI7XG5pbXBvcnQgdG91cnMgZnJvbSBcIi4uLy4uL3B1YmxpYy9hc3NldHMvZGF0YS90b3Vycy5qc29uXCI7XG5cbmNvbnN0IERlc3RpbmF0aW9uQ2F0YWxvZyA9ICh7IGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvblRvdXJzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgbXktMiBmb250LWJvbGRcIj57ZGVzdGluYXRpb24ubmFtZX0gVG91cnM8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkIG1iLTFcIj57ZGVzdGluYXRpb25Ub3Vycy5sZW5ndGh9IHJlc3VsdHM8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdXJzXCI+XG4gICAgICAgIHtkZXN0aW5hdGlvblRvdXJzLm1hcCgodG91cikgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCByb3VuZGVkLWxnXCIga2V5PXt0b3VyLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGZsZXggc3BhY2UteC02XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0b3VyLmltZ30gYWx0PXt0b3VyLm5hbWV9IGNsYXNzTmFtZT1cInctNjQgcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPnt0b3VyLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8UmF0aW5nIHJhdGluZz17dG91ci5yYXRpbmd9IC8+XG4gICAgICAgICAgICAgICAgPHA+e3RvdXIucHJpY2V9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbnMuZmluZCgoZGVzdCkgPT4gZGVzdC5uYW1lID09PSBxdWVyeS5uYW1lKTtcbiAgY29uc3QgZGVzdGluYXRpb25Ub3VycyA9IFtdO1xuICBmb3IgKGxldCBpZCBpbiBkZXN0aW5hdGlvbi50b3Vycykge1xuICAgIGNvbnN0IHRvdXIgPSB0b3Vycy5maW5kKCh0b3VyKSA9PiB0b3VyLmlkID09IGlkKTtcbiAgICBpZiAodG91cikgZGVzdGluYXRpb25Ub3Vycy5wdXNoKHRvdXIpO1xuICB9XG4gIGNvbnNvbGUubG9nKGRlc3RpbmF0aW9uVG91cnMpO1xuICByZXR1cm4geyBwcm9wczogeyBkZXN0aW5hdGlvblRvdXJzLCBkZXN0aW5hdGlvbiB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbkNhdGFsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/destination/[name].js\n");

/***/ })

});