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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_shared_Rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/Rating */ \"./components/shared/Rating.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/pages/destination/[name].js\",\n    _this = undefined;\n\n\n\nvar DestinationCatalog = function DestinationCatalog(_ref) {\n  var destination = _ref.destination,\n      destinationTours = _ref.destinationTours;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    style: {\n      minHeight: \"62vh\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        minWidth: \"100vw !important\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: destination.img,\n        alt: destination.name,\n        className: \"w-100 h-64\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"px-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-xl my-2 font-bold uppercase text-indigo-500\",\n        children: [\"Explore the best of \", destination.name, \" Tours\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-sm text-muted mb-1\",\n        children: [destinationTours.length, \" results\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row container m-0 p-0\",\n      children: destinationTours.map(function (tour) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-md-4 px-2 mb-3\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card rounded-lg\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"card-body flex space-x-6\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: tour.img,\n                alt: tour.name,\n                className: \"h-48 w-64 rounded-lg object-cover\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                  children: tour.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 24,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {\n                  rating: tour.rating\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 25,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  children: tour.price\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 26,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 23,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, _this)\n        }, tour.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = DestinationCatalog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DestinationCatalog);\n\nvar _c;\n\n$RefreshReg$(_c, \"DestinationCatalog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVzdGluYXRpb24vW25hbWVdLmpzPzIyMzQiXSwibmFtZXMiOlsiRGVzdGluYXRpb25DYXRhbG9nIiwiZGVzdGluYXRpb24iLCJkZXN0aW5hdGlvblRvdXJzIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJpbWciLCJuYW1lIiwibGVuZ3RoIiwibWFwIiwidG91ciIsInJhdGluZyIsInByaWNlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFJQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQXVDO0FBQUEsTUFBcENDLFdBQW9DLFFBQXBDQSxXQUFvQztBQUFBLE1BQXZCQyxnQkFBdUIsUUFBdkJBLGdCQUF1QjtBQUNoRSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFsQztBQUFBLDRCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQUFaO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVILFdBQVcsQ0FBQ0ksR0FBdEI7QUFBMkIsV0FBRyxFQUFFSixXQUFXLENBQUNLLElBQTVDO0FBQWtELGlCQUFTLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsa0RBQWQ7QUFBQSwyQ0FDdUJMLFdBQVcsQ0FBQ0ssSUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFHLGlCQUFTLEVBQUMseUJBQWI7QUFBQSxtQkFBd0NKLGdCQUFnQixDQUFDSyxNQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQVVFO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsZ0JBQ0dMLGdCQUFnQixDQUFDTSxHQUFqQixDQUFxQixVQUFDQyxJQUFEO0FBQUEsNEJBQ3BCO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQywwQkFBZjtBQUFBLHNDQUNFO0FBQUssbUJBQUcsRUFBRUEsSUFBSSxDQUFDSixHQUFmO0FBQW9CLG1CQUFHLEVBQUVJLElBQUksQ0FBQ0gsSUFBOUI7QUFBb0MseUJBQVMsRUFBQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQSx3Q0FDRTtBQUFBLDRCQUFLRyxJQUFJLENBQUNIO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQVEsd0JBQU0sRUFBRUcsSUFBSSxDQUFDQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0U7QUFBQSw0QkFBSUQsSUFBSSxDQUFDRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUF5Q0YsSUFBSSxDQUFDRyxFQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURvQjtBQUFBLE9BQXJCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkJELENBOUJEOztLQUFNWixrQjs7QUE2Q04sK0RBQWVBLGtCQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZGVzdGluYXRpb24vW25hbWVdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJhdGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvUmF0aW5nXCI7XG5pbXBvcnQgZGVzdGluYXRpb25zIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2RhdGEvZGVzdGluYXRpb25zLmpzb25cIjtcbmltcG9ydCB0b3VycyBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9kYXRhL3RvdXJzLmpzb25cIjtcblxuY29uc3QgRGVzdGluYXRpb25DYXRhbG9nID0gKHsgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uVG91cnMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjYydmhcIiB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWluV2lkdGg6IFwiMTAwdncgIWltcG9ydGFudFwiIH19PlxuICAgICAgICA8aW1nIHNyYz17ZGVzdGluYXRpb24uaW1nfSBhbHQ9e2Rlc3RpbmF0aW9uLm5hbWV9IGNsYXNzTmFtZT1cInctMTAwIGgtNjRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgbXktMiBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtaW5kaWdvLTUwMFwiPlxuICAgICAgICAgIEV4cGxvcmUgdGhlIGJlc3Qgb2Yge2Rlc3RpbmF0aW9uLm5hbWV9IFRvdXJzXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZCBtYi0xXCI+e2Rlc3RpbmF0aW9uVG91cnMubGVuZ3RofSByZXN1bHRzPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb250YWluZXIgbS0wIHAtMFwiPlxuICAgICAgICB7ZGVzdGluYXRpb25Ub3Vycy5tYXAoKHRvdXIpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHB4LTIgbWItM1wiIGtleT17dG91ci5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBmbGV4IHNwYWNlLXgtNlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0b3VyLmltZ30gYWx0PXt0b3VyLm5hbWV9IGNsYXNzTmFtZT1cImgtNDggdy02NCByb3VuZGVkLWxnIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMj57dG91ci5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8UmF0aW5nIHJhdGluZz17dG91ci5yYXRpbmd9IC8+XG4gICAgICAgICAgICAgICAgICA8cD57dG91ci5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCBkZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9ucy5maW5kKChkZXN0KSA9PiBkZXN0Lm5hbWUgPT09IHF1ZXJ5Lm5hbWUpO1xuXG4gIGNvbnN0IGRlc3RpbmF0aW9uVG91cnMgPSBbXTtcblxuICBmb3IgKGxldCBpZCBvZiBkZXN0aW5hdGlvbi50b3Vycykge1xuICAgIGNvbnN0IHRvdXIgPSB0b3Vycy5maW5kKCh0b3VyKSA9PiB0b3VyLmlkID09IGlkKTtcbiAgICBpZiAodG91cikgZGVzdGluYXRpb25Ub3Vycy5wdXNoKHRvdXIpO1xuICB9XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGVzdGluYXRpb25Ub3VycywgZGVzdGluYXRpb24gfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzdGluYXRpb25DYXRhbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/destination/[name].js\n");

/***/ })

});