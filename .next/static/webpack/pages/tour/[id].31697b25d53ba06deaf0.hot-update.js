/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tour/[id]",{

/***/ "./components/shared/Accordion.js":
/*!****************************************!*\
  !*** ./components/shared/Accordion.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/components/shared/Accordion.js\",\n    _this = undefined;\n\nvar Accordion = function Accordion(_ref) {\n  var name = _ref.name,\n      children = _ref.children;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"accordion accordion-flush bg-white text-indigo-700\",\n    id: \"accordionFlushExample\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"accordion-item\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"accordion-header\",\n        id: \"flush-headingOne\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"accordion-button collapsed\",\n          type: \"button\",\n          \"data-bs-toggle\": \"collapse\",\n          \"data-bs-target\": \"#flush-collapseOne\",\n          \"aria-expanded\": \"false\",\n          \"aria-controls\": \"flush-collapseOne\",\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 6,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"flush-collapseOne\",\n        className: \"accordion-collapse collapse\",\n        \"aria-labelledby\": \"flush-headingOne\",\n        \"data-bs-parent\": \"#accordionFlushExample\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"accordion-body\",\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\nvar _c;\n\n$RefreshReg$(_c, \"Accordion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQWNjb3JkaW9uLmpzP2MyYjMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwibmFtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDeEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsb0RBQWY7QUFBb0UsTUFBRSxFQUFDLHVCQUF2RTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQWlDLFVBQUUsRUFBQyxrQkFBcEM7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLEVBQUMsNEJBRFo7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLDRCQUFlLFVBSGpCO0FBSUUsNEJBQWUsb0JBSmpCO0FBS0UsMkJBQWMsT0FMaEI7QUFNRSwyQkFBYyxtQkFOaEI7QUFBQSxvQkFRR0Q7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBYUU7QUFDRSxVQUFFLEVBQUMsbUJBREw7QUFFRSxpQkFBUyxFQUFDLDZCQUZaO0FBR0UsMkJBQWdCLGtCQUhsQjtBQUlFLDBCQUFlLHdCQUpqQjtBQUFBLCtCQU1FO0FBQUssbUJBQVMsRUFBQyxnQkFBZjtBQUFBLG9CQUFpQ0M7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0EzQkQ7O0tBQU1GLFM7QUE2Qk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NoYXJlZC9BY2NvcmRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBY2NvcmRpb24gPSAoeyBuYW1lLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24gYWNjb3JkaW9uLWZsdXNoIGJnLXdoaXRlIHRleHQtaW5kaWdvLTcwMFwiIGlkPVwiYWNjb3JkaW9uRmx1c2hFeGFtcGxlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCIgaWQ9XCJmbHVzaC1oZWFkaW5nT25lXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2ZsdXNoLWNvbGxhcHNlT25lXCJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZmx1c2gtY29sbGFwc2VPbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJmbHVzaC1jb2xsYXBzZU9uZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJmbHVzaC1oZWFkaW5nT25lXCJcbiAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cIiNhY2NvcmRpb25GbHVzaEV4YW1wbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/shared/Accordion.js\n");

/***/ })

});