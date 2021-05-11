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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_shared_Rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/Rating */ \"./components/shared/Rating.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/pages/destination/[name].js\",\n    _this = undefined;\n\n\n\nvar DestinationCatalog = function DestinationCatalog(_ref) {\n  var destination = _ref.destination,\n      destinationTours = _ref.destinationTours;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: destination.img,\n        alt: destination.name,\n        className: \"w-100 h-72\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      style: {\n        minHeight: \"62vh\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"text-3xl my-3 font-bold uppercase text-indigo-600\",\n          children: [\"Explore the best of \", destination.name, \" Tours\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"text-sm text-muted mb-1\",\n          children: [destinationTours.length, \" results\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row container m-0 p-0\",\n        children: destinationTours.map(function (tour) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-4 px-2 mb-3 relative\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"card rounded-lg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body flex space-x-6\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                  src: tour.img,\n                  alt: tour.name,\n                  className: \"h-48 w-64 rounded-lg object-cover\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 23,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: tour.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 25,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {\n                    rating: tour.rating\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 26,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: tour.price\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 27,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 24,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  className: \"text-indigo-600 absolute bottom-4 right-4 text-sm\",\n                  children: \"read more...\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 29,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 15\n            }, _this)\n          }, tour.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = DestinationCatalog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DestinationCatalog);\n\nvar _c;\n\n$RefreshReg$(_c, \"DestinationCatalog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVzdGluYXRpb24vW25hbWVdLmpzPzIyMzQiXSwibmFtZXMiOlsiRGVzdGluYXRpb25DYXRhbG9nIiwiZGVzdGluYXRpb24iLCJkZXN0aW5hdGlvblRvdXJzIiwiaW1nIiwibmFtZSIsIm1pbkhlaWdodCIsImxlbmd0aCIsIm1hcCIsInRvdXIiLCJyYXRpbmciLCJwcmljZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBdUM7QUFBQSxNQUFwQ0MsV0FBb0MsUUFBcENBLFdBQW9DO0FBQUEsTUFBdkJDLGdCQUF1QixRQUF2QkEsZ0JBQXVCO0FBQ2hFLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUQsV0FBVyxDQUFDRSxHQUF0QjtBQUEyQixXQUFHLEVBQUVGLFdBQVcsQ0FBQ0csSUFBNUM7QUFBa0QsaUJBQVMsRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiLE9BQWxDO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsbURBQWQ7QUFBQSw2Q0FDdUJKLFdBQVcsQ0FBQ0csSUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBRyxtQkFBUyxFQUFDLHlCQUFiO0FBQUEscUJBQXdDRixnQkFBZ0IsQ0FBQ0ksTUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0U7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUEsa0JBQ0dKLGdCQUFnQixDQUFDSyxHQUFqQixDQUFxQixVQUFDQyxJQUFEO0FBQUEsOEJBQ3BCO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxpQkFBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQywwQkFBZjtBQUFBLHdDQUNFO0FBQUsscUJBQUcsRUFBRUEsSUFBSSxDQUFDTCxHQUFmO0FBQW9CLHFCQUFHLEVBQUVLLElBQUksQ0FBQ0osSUFBOUI7QUFBb0MsMkJBQVMsRUFBQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQSwwQ0FDRTtBQUFBLDhCQUFLSSxJQUFJLENBQUNKO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQVEsMEJBQU0sRUFBRUksSUFBSSxDQUFDQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLGVBR0U7QUFBQSw4QkFBSUQsSUFBSSxDQUFDRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBT0U7QUFBRywyQkFBUyxFQUFDLG1EQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFrREYsSUFBSSxDQUFDRyxFQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURvQjtBQUFBLFNBQXJCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFnQ0QsQ0FqQ0Q7O0tBQU1YLGtCOztBQWdETiwrREFBZUEsa0JBQWYiLCJmaWxlIjoiLi9wYWdlcy9kZXN0aW5hdGlvbi9bbmFtZV0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmF0aW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9SYXRpbmdcIjtcbmltcG9ydCBkZXN0aW5hdGlvbnMgZnJvbSBcIi4uLy4uL3B1YmxpYy9hc3NldHMvZGF0YS9kZXN0aW5hdGlvbnMuanNvblwiO1xuaW1wb3J0IHRvdXJzIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2RhdGEvdG91cnMuanNvblwiO1xuXG5jb25zdCBEZXN0aW5hdGlvbkNhdGFsb2cgPSAoeyBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb25Ub3VycyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPXtkZXN0aW5hdGlvbi5pbWd9IGFsdD17ZGVzdGluYXRpb24ubmFtZX0gY2xhc3NOYW1lPVwidy0xMDAgaC03MlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjYydmhcIiB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG15LTMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LWluZGlnby02MDBcIj5cbiAgICAgICAgICAgIEV4cGxvcmUgdGhlIGJlc3Qgb2Yge2Rlc3RpbmF0aW9uLm5hbWV9IFRvdXJzXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQgbWItMVwiPntkZXN0aW5hdGlvblRvdXJzLmxlbmd0aH0gcmVzdWx0czwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRhaW5lciBtLTAgcC0wXCI+XG4gICAgICAgICAge2Rlc3RpbmF0aW9uVG91cnMubWFwKCh0b3VyKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHB4LTIgbWItMyByZWxhdGl2ZVwiIGtleT17dG91ci5pZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZmxleCBzcGFjZS14LTZcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0b3VyLmltZ30gYWx0PXt0b3VyLm5hbWV9IGNsYXNzTmFtZT1cImgtNDggdy02NCByb3VuZGVkLWxnIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3RvdXIubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8UmF0aW5nIHJhdGluZz17dG91ci5yYXRpbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt0b3VyLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNjAwIGFic29sdXRlIGJvdHRvbS00IHJpZ2h0LTQgdGV4dC1zbVwiPnJlYWQgbW9yZS4uLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IGRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zLmZpbmQoKGRlc3QpID0+IGRlc3QubmFtZSA9PT0gcXVlcnkubmFtZSk7XG5cbiAgY29uc3QgZGVzdGluYXRpb25Ub3VycyA9IFtdO1xuXG4gIGZvciAobGV0IGlkIG9mIGRlc3RpbmF0aW9uLnRvdXJzKSB7XG4gICAgY29uc3QgdG91ciA9IHRvdXJzLmZpbmQoKHRvdXIpID0+IHRvdXIuaWQgPT0gaWQpO1xuICAgIGlmICh0b3VyKSBkZXN0aW5hdGlvblRvdXJzLnB1c2godG91cik7XG4gIH1cblxuICByZXR1cm4geyBwcm9wczogeyBkZXN0aW5hdGlvblRvdXJzLCBkZXN0aW5hdGlvbiB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbkNhdGFsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/destination/[name].js\n");

/***/ })

});