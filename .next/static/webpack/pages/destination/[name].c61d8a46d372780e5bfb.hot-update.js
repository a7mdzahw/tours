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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_shared_Rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/Rating */ \"./components/shared/Rating.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/pages/destination/[name].js\",\n    _this = undefined;\n\n\n\nvar DestinationCatalog = function DestinationCatalog(_ref) {\n  var destination = _ref.destination,\n      destinationTours = _ref.destinationTours;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"text-xl my-2 font-bold\",\n      children: [destination.name, \" Tours\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"text-sm text-muted mb-1 m-0 p-0\",\n      children: [destinationTours.length, \" results\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row container\",\n      children: destinationTours.map(function (tour) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-md-6 m-0 p-0\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card rounded-lg\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"card-body flex space-x-6\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: tour.img,\n                alt: tour.name,\n                className: \"w-64 rounded-lg\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 15,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                  children: tour.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 17,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {\n                  rating: tour.rating\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 18,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  children: tour.price\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 19,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 16,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, _this)\n        }, tour.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = DestinationCatalog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DestinationCatalog);\n\nvar _c;\n\n$RefreshReg$(_c, \"DestinationCatalog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVzdGluYXRpb24vW25hbWVdLmpzPzIyMzQiXSwibmFtZXMiOlsiRGVzdGluYXRpb25DYXRhbG9nIiwiZGVzdGluYXRpb24iLCJkZXN0aW5hdGlvblRvdXJzIiwibmFtZSIsImxlbmd0aCIsIm1hcCIsInRvdXIiLCJpbWciLCJyYXRpbmciLCJwcmljZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUF1QztBQUFBLE1BQXBDQyxXQUFvQyxRQUFwQ0EsV0FBb0M7QUFBQSxNQUF2QkMsZ0JBQXVCLFFBQXZCQSxnQkFBdUI7QUFDaEUsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHdCQUFkO0FBQUEsaUJBQXdDRCxXQUFXLENBQUNFLElBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBRyxlQUFTLEVBQUMsaUNBQWI7QUFBQSxpQkFBZ0RELGdCQUFnQixDQUFDRSxNQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSxnQkFDR0YsZ0JBQWdCLENBQUNHLEdBQWpCLENBQXFCLFVBQUNDLElBQUQ7QUFBQSw0QkFDcEI7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLDBCQUFmO0FBQUEsc0NBQ0U7QUFBSyxtQkFBRyxFQUFFQSxJQUFJLENBQUNDLEdBQWY7QUFBb0IsbUJBQUcsRUFBRUQsSUFBSSxDQUFDSCxJQUE5QjtBQUFvQyx5QkFBUyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLHdDQUNFO0FBQUEsNEJBQUtHLElBQUksQ0FBQ0g7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBUSx3QkFBTSxFQUFFRyxJQUFJLENBQUNFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRTtBQUFBLDRCQUFJRixJQUFJLENBQUNHO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQXVDSCxJQUFJLENBQUNJLEVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG9CO0FBQUEsT0FBckI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0F2QkQ7O0tBQU1WLGtCOztBQXNDTiwrREFBZUEsa0JBQWYiLCJmaWxlIjoiLi9wYWdlcy9kZXN0aW5hdGlvbi9bbmFtZV0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmF0aW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9SYXRpbmdcIjtcbmltcG9ydCBkZXN0aW5hdGlvbnMgZnJvbSBcIi4uLy4uL3B1YmxpYy9hc3NldHMvZGF0YS9kZXN0aW5hdGlvbnMuanNvblwiO1xuaW1wb3J0IHRvdXJzIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2RhdGEvdG91cnMuanNvblwiO1xuXG5jb25zdCBEZXN0aW5hdGlvbkNhdGFsb2cgPSAoeyBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb25Ub3VycyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG15LTIgZm9udC1ib2xkXCI+e2Rlc3RpbmF0aW9uLm5hbWV9IFRvdXJzPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZCBtYi0xIG0tMCBwLTBcIj57ZGVzdGluYXRpb25Ub3Vycy5sZW5ndGh9IHJlc3VsdHM8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb250YWluZXJcIj5cbiAgICAgICAge2Rlc3RpbmF0aW9uVG91cnMubWFwKCh0b3VyKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtLTAgcC0wXCIga2V5PXt0b3VyLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGZsZXggc3BhY2UteC02XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3RvdXIuaW1nfSBhbHQ9e3RvdXIubmFtZX0gY2xhc3NOYW1lPVwidy02NCByb3VuZGVkLWxnXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgyPnt0b3VyLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgIDxSYXRpbmcgcmF0aW5nPXt0b3VyLnJhdGluZ30gLz5cbiAgICAgICAgICAgICAgICAgIDxwPnt0b3VyLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IGRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zLmZpbmQoKGRlc3QpID0+IGRlc3QubmFtZSA9PT0gcXVlcnkubmFtZSk7XG5cbiAgY29uc3QgZGVzdGluYXRpb25Ub3VycyA9IFtdO1xuXG4gIGZvciAobGV0IGlkIG9mIGRlc3RpbmF0aW9uLnRvdXJzKSB7XG4gICAgY29uc3QgdG91ciA9IHRvdXJzLmZpbmQoKHRvdXIpID0+IHRvdXIuaWQgPT0gaWQpO1xuICAgIGlmICh0b3VyKSBkZXN0aW5hdGlvblRvdXJzLnB1c2godG91cik7XG4gIH1cblxuICByZXR1cm4geyBwcm9wczogeyBkZXN0aW5hdGlvblRvdXJzLCBkZXN0aW5hdGlvbiB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbkNhdGFsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/destination/[name].js\n");

/***/ })

});