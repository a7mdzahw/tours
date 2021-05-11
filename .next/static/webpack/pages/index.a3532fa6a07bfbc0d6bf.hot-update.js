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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/SearchForm */ \"./components/shared/SearchForm.js\");\n/* harmony import */ var _components_shared_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/Slider */ \"./components/shared/Slider.js\");\n/* harmony import */ var _components_tours_Destination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tours/Destination */ \"./components/tours/Destination.js\");\n/* harmony import */ var _components_tours_Tour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tours/Tour */ \"./components/tours/Tour.js\");\n/* harmony import */ var _public_assets_data_destinations_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/data/destinations.json */ \"./public/assets/data/destinations.json\");\n/* harmony import */ var _public_assets_data_tours_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/data/tours.json */ \"./public/assets/data/tours.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_public_assets_data_destinations_json__WEBPACK_IMPORTED_MODULE_6__),\n      destinations = _useState[0],\n      setDestinations = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_public_assets_data_tours_json__WEBPACK_IMPORTED_MODULE_7__),\n      tours = _useState2[0],\n      setTours = _useState2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"relative\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: \"/assets/img/hero.jpeg\",\n      alt: \"hero pic\",\n      className: \"w-100 md:h-96 \",\n      style: {\n        objectFit: \"cover\",\n        maxHeight: \"93vh\",\n        backgroundPosition: \"top\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_SearchForm__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"top_destnations container py-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-indigo-700 text-xl mb-3\",\n        children: \"Top Destinations\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: destinations.map(function (destination) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-6 col-md-2 mb-2\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tours_Destination__WEBPACK_IMPORTED_MODULE_4__.default, {\n              destination: destination\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 17\n            }, _this)\n          }, destination.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"container py-4 tours\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-indigo-700 text-xl mb-3\",\n        children: \"Top Tours\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          width: \"97%\",\n          margin: \"auto\"\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Slider__WEBPACK_IMPORTED_MODULE_3__.default, {\n          children: tours.map(function (tour) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tours_Tour__WEBPACK_IMPORTED_MODULE_5__.default, {\n              tour: tour\n            }, tour.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 22\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"8HZJjVsUk0uuv0NmfzV1Nmt/CfA=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJkZXN0aW5hdGlvbnNEYXRhIiwiZGVzdGluYXRpb25zIiwic2V0RGVzdGluYXRpb25zIiwidG91cnNEYXRhIiwidG91cnMiLCJzZXRUb3VycyIsIm9iamVjdEZpdCIsIm1heEhlaWdodCIsImJhY2tncm91bmRQb3NpdGlvbiIsIm1hcCIsImRlc3RpbmF0aW9uIiwiaWQiLCJ3aWR0aCIsIm1hcmdpbiIsInRvdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDdUJDLCtDQUFRLENBQUNDLGtFQUFELENBRC9CO0FBQUEsTUFDVkMsWUFEVTtBQUFBLE1BQ0lDLGVBREo7O0FBQUEsbUJBRVNILCtDQUFRLENBQUNJLDJEQUFELENBRmpCO0FBQUEsTUFFVkMsS0FGVTtBQUFBLE1BRUhDLFFBRkc7O0FBSWpCLHNCQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBQyx1QkFETjtBQUVFLFNBQUcsRUFBQyxVQUZOO0FBR0UsZUFBUyxFQUFDLGdCQUhaO0FBSUUsV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUUsT0FBYjtBQUFzQkMsaUJBQVMsRUFBRSxNQUFqQztBQUF5Q0MsMEJBQWtCLEVBQUU7QUFBN0Q7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVdFO0FBQVMsZUFBUyxFQUFDLGdDQUFuQjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDR1AsWUFBWSxDQUFDUSxHQUFiLENBQWlCLFVBQUNDLFdBQUQsRUFBaUI7QUFDakMsOEJBQ0U7QUFBMEIscUJBQVMsRUFBQyxxQkFBcEM7QUFBQSxtQ0FDRSw4REFBQyxrRUFBRDtBQUFhLHlCQUFXLEVBQUVBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVQSxXQUFXLENBQUNDLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFLRCxTQU5BO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGLGVBd0JFO0FBQVMsZUFBUyxFQUFDLHNCQUFuQjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFLEtBQVQ7QUFBZ0JDLGdCQUFNLEVBQUU7QUFBeEIsU0FBWjtBQUFBLCtCQUNFLDhEQUFDLDhEQUFEO0FBQUEsb0JBQ0dULEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUNLLElBQUQsRUFBVTtBQUNuQixnQ0FBTyw4REFBQywyREFBRDtBQUFvQixrQkFBSSxFQUFFQTtBQUExQixlQUFXQSxJQUFJLENBQUNILEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFDRCxXQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0F6Q0Q7O0dBQU1iLEk7O0tBQUFBLEk7QUEyQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9TZWFyY2hGb3JtXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9TbGlkZXJcIjtcbmltcG9ydCBEZXN0aW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy90b3Vycy9EZXN0aW5hdGlvblwiO1xuaW1wb3J0IFRvdXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG91cnMvVG91clwiO1xuXG5pbXBvcnQgZGVzdGluYXRpb25zRGF0YSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9kYXRhL2Rlc3RpbmF0aW9ucy5qc29uXCI7XG5pbXBvcnQgdG91cnNEYXRhIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2RhdGEvdG91cnMuanNvblwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbZGVzdGluYXRpb25zLCBzZXREZXN0aW5hdGlvbnNdID0gdXNlU3RhdGUoZGVzdGluYXRpb25zRGF0YSk7XG4gIGNvbnN0IFt0b3Vycywgc2V0VG91cnNdID0gdXNlU3RhdGUodG91cnNEYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaGVyby5qcGVnXCJcbiAgICAgICAgYWx0PVwiaGVybyBwaWNcIlxuICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBtZDpoLTk2IFwiXG4gICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb3ZlclwiLCBtYXhIZWlnaHQ6IFwiOTN2aFwiLCBiYWNrZ3JvdW5kUG9zaXRpb246IFwidG9wXCIgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvcF9kZXN0bmF0aW9ucyBjb250YWluZXIgcHktNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNzAwIHRleHQteGwgbWItM1wiPlRvcCBEZXN0aW5hdGlvbnM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtkZXN0aW5hdGlvbnMubWFwKChkZXN0aW5hdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Rlc3RpbmF0aW9uLmlkfSBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgPERlc3RpbmF0aW9uIGRlc3RpbmF0aW9uPXtkZXN0aW5hdGlvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTQgdG91cnNcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTcwMCB0ZXh0LXhsIG1iLTNcIj5Ub3AgVG91cnM8L2gyPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjk3JVwiLCBtYXJnaW46IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxTbGlkZXI+XG4gICAgICAgICAgICB7dG91cnMubWFwKCh0b3VyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8VG91ciBrZXk9e3RvdXIuaWR9IHRvdXI9e3RvdXJ9IC8+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});