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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/components/shared/Accordion.js\",\n    _this = undefined;\n\nvar Accordion = function Accordion(_ref) {\n  var name = _ref.name,\n      id = _ref.id,\n      children = _ref.children;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"accordion accordion-flush\",\n    id: id,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"accordion-item\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"accordion-header text-indigo-700\",\n        id: \"flush-headingOne\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"accordion-button collapsed bg-white\",\n          type: \"button\",\n          \"data-bs-toggle\": \"collapse\",\n          \"data-bs-target\": \"#\".concat(id),\n          \"aria-expanded\": \"false\",\n          \"aria-controls\": \"flush-collapseOne\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"text-indigo-700 text-xl\",\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 6,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: id,\n        className: \"accordion-collapse collapse\",\n        \"aria-labelledby\": \"flush-headingOne\",\n        \"data-bs-parent\": \"#accordionFlushExample\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"accordion-body text-gray-500\",\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\nvar _c;\n\n$RefreshReg$(_c, \"Accordion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQWNjb3JkaW9uLmpzP2MyYjMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwibmFtZSIsImlkIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTRCO0FBQUEsTUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxFQUFtQixRQUFuQkEsRUFBbUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDNUMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBMkMsTUFBRSxFQUFFRCxFQUEvQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGtDQUFkO0FBQWlELFVBQUUsRUFBQyxrQkFBcEQ7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLEVBQUMscUNBRFo7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLDRCQUFlLFVBSGpCO0FBSUUsdUNBQW9CQSxFQUFwQixDQUpGO0FBS0UsMkJBQWMsT0FMaEI7QUFNRSwyQkFBYyxtQkFOaEI7QUFBQSxpQ0FRRTtBQUFNLHFCQUFTLEVBQUMseUJBQWhCO0FBQUEsc0JBQTJDRDtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWFFO0FBQ0UsVUFBRSxFQUFFQyxFQUROO0FBRUUsaUJBQVMsRUFBQyw2QkFGWjtBQUdFLDJCQUFnQixrQkFIbEI7QUFJRSwwQkFBZSx3QkFKakI7QUFBQSwrQkFNRTtBQUFLLG1CQUFTLEVBQUMsOEJBQWY7QUFBQSxvQkFBK0NDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBM0JEOztLQUFNSCxTO0FBNkJOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaGFyZWQvQWNjb3JkaW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQWNjb3JkaW9uID0gKHsgbmFtZSwgaWQsIGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbiBhY2NvcmRpb24tZmx1c2hcIiBpZD17aWR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlciB0ZXh0LWluZGlnby03MDBcIiBpZD1cImZsdXNoLWhlYWRpbmdPbmVcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZCBiZy13aGl0ZVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9e2AjJHtpZH1gfVxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJmbHVzaC1jb2xsYXBzZU9uZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNzAwIHRleHQteGxcIj57bmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJmbHVzaC1oZWFkaW5nT25lXCJcbiAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cIiNhY2NvcmRpb25GbHVzaEV4YW1wbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keSB0ZXh0LWdyYXktNTAwXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/shared/Accordion.js\n");

/***/ })

});