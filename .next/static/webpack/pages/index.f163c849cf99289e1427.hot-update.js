/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/Slider */ \"./components/shared/Slider.js\");\n/* harmony import */ var _components_tours_Destination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tours/Destination */ \"./components/tours/Destination.js\");\n/* harmony import */ var _components_tours_Tour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tours/Tour */ \"./components/tours/Tour.js\");\n/* harmony import */ var _public_assets_data_destinations_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/assets/data/destinations.json */ \"./public/assets/data/destinations.json\");\n/* harmony import */ var _public_assets_data_tours_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/data/tours.json */ \"./public/assets/data/tours.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_public_assets_data_destinations_json__WEBPACK_IMPORTED_MODULE_5__),\n      destinations = _useState[0],\n      setDestinations = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_public_assets_data_tours_json__WEBPACK_IMPORTED_MODULE_6__),\n      tours = _useState2[0],\n      setTours = _useState2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"relative\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: \"/assets/img/hero.jpeg\",\n      alt: \"hero pic\",\n      className: \"w-100 max-h-screen\",\n      style: {\n        objectFit: \"cover\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"form absolute top-20 left-20 bg-gray-100 p-10 bg-opacity-50\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          className: \"text-xl font-bold text-indigo-600 mb-2\",\n          children: \"Find amazing things to do.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          className: \"py-2 w-100 shadow focus:outline-none px-2 focus:border-md focus:border-indigo-600 \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"mt-2 block bg-indigo-600 text-white px-4 py-2 w-100 rounded-lg\",\n          children: \"Search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"top_destnations container py-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-indigo-700 text-xl mb-3\",\n        children: \"Top Destinations\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: destinations.map(function (destination) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-6 col-md-2 mb-2\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tours_Destination__WEBPACK_IMPORTED_MODULE_3__.default, {\n              destination: destination\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 17\n            }, _this)\n          }, destination.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"conatiner py-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-indigo-700 text-xl mb-3\",\n        children: \"Top Tours\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Slider__WEBPACK_IMPORTED_MODULE_2__.default, {\n        children: tours.map(function (tour) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tours_Tour__WEBPACK_IMPORTED_MODULE_4__.default, {\n            tour: tour\n          }, tour.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 20\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"8HZJjVsUk0uuv0NmfzV1Nmt/CfA=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJkZXN0aW5hdGlvbnNEYXRhIiwiZGVzdGluYXRpb25zIiwic2V0RGVzdGluYXRpb25zIiwidG91cnNEYXRhIiwidG91cnMiLCJzZXRUb3VycyIsIm9iamVjdEZpdCIsIm1hcCIsImRlc3RpbmF0aW9uIiwiaWQiLCJ0b3VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ3VCQywrQ0FBUSxDQUFDQyxrRUFBRCxDQUQvQjtBQUFBLE1BQ1ZDLFlBRFU7QUFBQSxNQUNJQyxlQURKOztBQUFBLG1CQUVTSCwrQ0FBUSxDQUFDSSwyREFBRCxDQUZqQjtBQUFBLE1BRVZDLEtBRlU7QUFBQSxNQUVIQyxRQUZHOztBQUlqQixzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUMsdUJBQVQ7QUFBaUMsU0FBRyxFQUFDLFVBQXJDO0FBQWdELGVBQVMsRUFBQyxvQkFBMUQ7QUFBK0UsV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYjtBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFDLDZEQUFoQjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyx3Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxtQkFBUyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU1FO0FBQVEsbUJBQVMsRUFBQyxnRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBYUU7QUFBUyxlQUFTLEVBQUMsZ0NBQW5CO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNHTCxZQUFZLENBQUNNLEdBQWIsQ0FBaUIsVUFBQ0MsV0FBRCxFQUFpQjtBQUNqQyw4QkFDRTtBQUEwQixxQkFBUyxFQUFDLHFCQUFwQztBQUFBLG1DQUNFLDhEQUFDLGtFQUFEO0FBQWEseUJBQVcsRUFBRUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVVBLFdBQVcsQ0FBQ0MsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUtELFNBTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsZUEwQkU7QUFBUyxlQUFTLEVBQUMsZ0JBQW5CO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyw4REFBRDtBQUFBLGtCQUNHTCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDRyxJQUFELEVBQVU7QUFDbkIsOEJBQU8sOERBQUMsMkRBQUQ7QUFBb0IsZ0JBQUksRUFBRUE7QUFBMUIsYUFBV0EsSUFBSSxDQUFDRCxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0QsU0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0F6Q0Q7O0dBQU1YLEk7O0tBQUFBLEk7QUEyQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9TbGlkZXJcIjtcbmltcG9ydCBEZXN0aW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy90b3Vycy9EZXN0aW5hdGlvblwiO1xuaW1wb3J0IFRvdXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG91cnMvVG91clwiO1xuXG5pbXBvcnQgZGVzdGluYXRpb25zRGF0YSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9kYXRhL2Rlc3RpbmF0aW9ucy5qc29uXCI7XG5pbXBvcnQgdG91cnNEYXRhIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2RhdGEvdG91cnMuanNvblwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbZGVzdGluYXRpb25zLCBzZXREZXN0aW5hdGlvbnNdID0gdXNlU3RhdGUoZGVzdGluYXRpb25zRGF0YSk7XG4gIGNvbnN0IFt0b3Vycywgc2V0VG91cnNdID0gdXNlU3RhdGUodG91cnNEYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvaGVyby5qcGVnXCIgYWx0PVwiaGVybyBwaWNcIiBjbGFzc05hbWU9XCJ3LTEwMCBtYXgtaC1zY3JlZW5cIiBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybSBhYnNvbHV0ZSB0b3AtMjAgbGVmdC0yMCBiZy1ncmF5LTEwMCBwLTEwIGJnLW9wYWNpdHktNTBcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1pbmRpZ28tNjAwIG1iLTJcIj5GaW5kIGFtYXppbmcgdGhpbmdzIHRvIGRvLjwvaDI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHctMTAwIHNoYWRvdyBmb2N1czpvdXRsaW5lLW5vbmUgcHgtMiBmb2N1czpib3JkZXItbWQgZm9jdXM6Ym9yZGVyLWluZGlnby02MDAgXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtMiBibG9jayBiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHctMTAwIHJvdW5kZWQtbGdcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvcF9kZXN0bmF0aW9ucyBjb250YWluZXIgcHktNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNzAwIHRleHQteGwgbWItM1wiPlRvcCBEZXN0aW5hdGlvbnM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtkZXN0aW5hdGlvbnMubWFwKChkZXN0aW5hdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Rlc3RpbmF0aW9uLmlkfSBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgPERlc3RpbmF0aW9uIGRlc3RpbmF0aW9uPXtkZXN0aW5hdGlvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29uYXRpbmVyIHB5LTRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTcwMCB0ZXh0LXhsIG1iLTNcIj5Ub3AgVG91cnM8L2gyPlxuICAgICAgICA8U2xpZGVyPlxuICAgICAgICAgIHt0b3Vycy5tYXAoKHRvdXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8VG91ciBrZXk9e3RvdXIuaWR9IHRvdXI9e3RvdXJ9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});