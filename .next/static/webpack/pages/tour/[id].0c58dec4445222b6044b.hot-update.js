/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tour/[id]",{

/***/ "./pages/tour/[id].js":
/*!****************************!*\
  !*** ./pages/tour/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_shared_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/Rating */ \"./components/shared/Rating.js\");\n/* harmony import */ var _public_assets_data_tours_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/data/tours.json */ \"./public/assets/data/tours.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/pages/tour/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar TourDescription = function TourDescription() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      tour = _useState[0],\n      setTour = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var tour = _public_assets_data_tours_json__WEBPACK_IMPORTED_MODULE_4__.find(function (tour) {\n      return tour.id == (next_router__WEBPACK_IMPORTED_MODULE_2___default().query.id);\n    });\n    setTour(tour);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: tour.img,\n      alt: tour.name,\n      className: \"h-64 w-100\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: tour.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Rating__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), tour.place]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TourDescription, \"eVgd3ulJJvFVOqREvr1G6kBYDmA=\");\n\n_c = TourDescription;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TourDescription);\n\nvar _c;\n\n$RefreshReg$(_c, \"TourDescription\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG91ci9baWRdLmpzPzgzMmUiXSwibmFtZXMiOlsiVG91ckRlc2NyaXB0aW9uIiwidXNlU3RhdGUiLCJ0b3VyIiwic2V0VG91ciIsInVzZUVmZmVjdCIsInRvdXJzIiwiaWQiLCJyb3V0ZXIiLCJpbWciLCJuYW1lIiwicGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDSkMsK0NBQVEsQ0FBQyxFQUFELENBREo7QUFBQSxNQUNyQkMsSUFEcUI7QUFBQSxNQUNmQyxPQURlOztBQUU1QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUYsSUFBSSxHQUFHRyxnRUFBQSxDQUFXLFVBQUNILElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNJLEVBQUwsSUFBV0MsNkRBQXJCO0FBQUEsS0FBWCxDQUFiO0FBQ0FKLFdBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUVBLElBQUksQ0FBQ00sR0FBZjtBQUFvQixTQUFHLEVBQUVOLElBQUksQ0FBQ08sSUFBOUI7QUFBb0MsZUFBUyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQUtQLElBQUksQ0FBQ087QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFJR1AsSUFBSSxDQUFDUSxLQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FmRDs7R0FBTVYsZTs7S0FBQUEsZTtBQWlCTiwrREFBZUEsZUFBZiIsImZpbGUiOiIuL3BhZ2VzL3RvdXIvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmF0aW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9SYXRpbmdcIjtcbmltcG9ydCB0b3VycyBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9kYXRhL3RvdXJzLmpzb25cIjtcblxuY29uc3QgVG91ckRlc2NyaXB0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbdG91ciwgc2V0VG91cl0gPSB1c2VTdGF0ZSh7fSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG91ciA9IHRvdXJzLmZpbmQoKHRvdXIpID0+IHRvdXIuaWQgPT0gcm91dGVyLnF1ZXJ5LmlkKTtcbiAgICBzZXRUb3VyKHRvdXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9e3RvdXIuaW1nfSBhbHQ9e3RvdXIubmFtZX0gY2xhc3NOYW1lPVwiaC02NCB3LTEwMFwiIC8+XG4gICAgICA8aDI+e3RvdXIubmFtZX08L2gyPlxuICAgICAgPFJhdGluZyAvPlxuICAgICAge3RvdXIucGxhY2V9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3VyRGVzY3JpcHRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tour/[id].js\n");

/***/ })

});