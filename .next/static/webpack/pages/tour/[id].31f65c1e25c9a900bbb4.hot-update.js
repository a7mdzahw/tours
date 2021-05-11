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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/Accordion */ \"./components/shared/Accordion.js\");\n/* harmony import */ var _components_shared_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/Rating */ \"./components/shared/Rating.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zahw/Desktop/tours-agency/pages/tour/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TourDescription = function TourDescription(_ref) {\n  _s();\n\n  var tour = _ref.tour;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Included\"),\n      tab = _useState[0],\n      setTab = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"space-y-10 mt-3 description max-w-2xl\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-2xl font-bold\",\n        children: tour.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Rating__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"text-green-700\",\n          children: \"1200 reviews\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this), tour.place]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-lg-6 \",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: tour.img,\n            alt: tour.name,\n            className: \"h-64 w-100\",\n            style: {\n              objectFit: \"cover\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"card-body col-md-6\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-content space-y-4\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n              className: \"fw-bold text-xl\",\n              children: [\"from \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-normal text-gray-700\",\n                children: [tour.price, \" LE\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 22\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"w-64 px-4 py-3 bg-purple-700 text-white rounded hidden md:block\",\n              children: \"Check Availability\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n          className: \"mx-2 md:hidden\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"overview container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-2xl  uppercase mb-2\",\n        children: \"Overview\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-gray-500\",\n        children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates maiores cumque quam dicta obcaecati fuga rem sit expedita repellendus commodi.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container md:hidden\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Accordion__WEBPACK_IMPORTED_MODULE_2__.default, {\n        name: \"What's Included\",\n        id: \"included\",\n        children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam rem tenetur sint neque. Sit possimus voluptate eaque, amet quasi temporibus autem ex dignissimos quam fugit nobis! Sapiente, rerum ad.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Accordion__WEBPACK_IMPORTED_MODULE_2__.default, {\n        name: \"Itineray\",\n        id: \"itineray\",\n        children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam rem tenetur sint neque. Sit possimus voluptate eaque, amet quasi temporibus autem ex dignissimos quam fugit nobis! Sapiente, rerum ad.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Accordion__WEBPACK_IMPORTED_MODULE_2__.default, {\n        name: \"Depature & Return\",\n        id: \"leave\",\n        children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam rem tenetur sint neque. Sit possimus voluptate eaque, amet quasi temporibus autem ex dignissimos quam fugit nobis! Sapiente, rerum ad.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"hidden container md:block\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"nav nav-tabs\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n          name: \"Included\",\n          onClick: setTab,\n          current: tab\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n          name: \"Itineray\",\n          onClick: setTab,\n          current: tab\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n          name: \"Depature\",\n          onClick: setTab,\n          current: tab\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-sm text-gray-500 mt-2\",\n        children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit error maiores sed laudantium perferendis vero explicabo quibusdam quidem corporis nesciunt?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"bg-white p-3 shadow-md fixed md:hidden bottom-0 inset-x-0\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"w-100 px-4 py-3 bg-purple-700 text-white rounded \",\n        children: \"Check Availability\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TourDescription, \"BxKSVHMLFj0d19Ga2134jDoanvM=\");\n\n_c = TourDescription;\n\nvar Tab = function Tab(_ref2) {\n  var name = _ref2.name,\n      _onClick = _ref2.onClick,\n      current = _ref2.current;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n    className: \"nav-item\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"nav-link \".concat(current === name && \"active\"),\n      \"aria-current\": \"page\",\n      onClick: function onClick() {\n        return _onClick(name);\n      },\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Tab;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TourDescription);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TourDescription\");\n$RefreshReg$(_c2, \"Tab\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG91ci9baWRdLmpzPzgzMmUiXSwibmFtZXMiOlsiVG91ckRlc2NyaXB0aW9uIiwidG91ciIsInVzZVN0YXRlIiwidGFiIiwic2V0VGFiIiwibmFtZSIsInBsYWNlIiwiaW1nIiwib2JqZWN0Rml0IiwicHJpY2UiLCJUYWIiLCJvbkNsaWNrIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNkQywrQ0FBUSxDQUFDLFVBQUQsQ0FETTtBQUFBLE1BQzdCQyxHQUQ2QjtBQUFBLE1BQ3hCQyxNQUR3Qjs7QUFHcEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsdUNBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLG9CQUFkO0FBQUEsa0JBQW9DSCxJQUFJLENBQUNJO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBTUdKLElBQUksQ0FBQ0ssS0FOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUVMLElBQUksQ0FBQ00sR0FBZjtBQUFvQixlQUFH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RUQsQ0FyRUQ7O0dBQU1ILGU7O0tBQUFBLGU7O0FBdUVOLElBQU1VLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsTUFBR0wsSUFBSCxTQUFHQSxJQUFIO0FBQUEsTUFBU00sUUFBVCxTQUFTQSxPQUFUO0FBQUEsTUFBa0JDLE9BQWxCLFNBQWtCQSxPQUFsQjtBQUFBLHNCQUNWO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQSwyQkFDRTtBQUFRLGVBQVMscUJBQWNBLE9BQU8sS0FBS1AsSUFBWixJQUFvQixRQUFsQyxDQUFqQjtBQUErRCxzQkFBYSxNQUE1RTtBQUFtRixhQUFPLEVBQUU7QUFBQSxlQUFNTSxRQUFPLENBQUNOLElBQUQsQ0FBYjtBQUFBLE9BQTVGO0FBQUEsZ0JBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVTtBQUFBLENBQVo7O01BQU1LLEc7O0FBYU4sK0RBQWVWLGVBQWYiLCJmaWxlIjoiLi9wYWdlcy90b3VyL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQWNjb3JkaW9uXCI7XG5pbXBvcnQgUmF0aW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9SYXRpbmdcIjtcbmltcG9ydCB0b3VycyBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9kYXRhL3RvdXJzLmpzb25cIjtcblxuY29uc3QgVG91ckRlc2NyaXB0aW9uID0gKHsgdG91ciB9KSA9PiB7XG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZShcIkluY2x1ZGVkXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEwIG10LTMgZGVzY3JpcHRpb24gbWF4LXctMnhsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RvdXIubmFtZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XG4gICAgICAgICAgPFJhdGluZyAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNzAwXCI+MTIwMCByZXZpZXdzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RvdXIucGxhY2V9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0b3VyLmltZ30gYWx0PXt0b3VyLm5hbWV9IGNsYXNzTmFtZT1cImgtNjQgdy0xMDBcIiBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGNvbC1tZC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC14bFwiPlxuICAgICAgICAgICAgICAgIGZyb20gPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTcwMFwiPnt0b3VyLnByaWNlfSBMRTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTY0IHB4LTQgcHktMyBiZy1wdXJwbGUtNzAwIHRleHQtd2hpdGUgcm91bmRlZCBoaWRkZW4gbWQ6YmxvY2tcIj5cbiAgICAgICAgICAgICAgICBDaGVjayBBdmFpbGFiaWxpdHlcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXgtMiBtZDpoaWRkZW5cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJ2aWV3IGNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgIHVwcGVyY2FzZSBtYi0yXCI+T3ZlcnZpZXc8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZvbHVwdGF0ZXMgbWFpb3JlcyBjdW1xdWUgcXVhbSBkaWN0YSBvYmNhZWNhdGkgZnVnYVxuICAgICAgICAgIHJlbSBzaXQgZXhwZWRpdGEgcmVwZWxsZW5kdXMgY29tbW9kaS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtZDpoaWRkZW5cIj5cbiAgICAgICAgPEFjY29yZGlvbiBuYW1lPVwiV2hhdCdzIEluY2x1ZGVkXCIgaWQ9XCJpbmNsdWRlZFwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOZW1vIHRvdGFtIHJlbSB0ZW5ldHVyIHNpbnQgbmVxdWUuIFNpdCBwb3NzaW11c1xuICAgICAgICAgIHZvbHVwdGF0ZSBlYXF1ZSwgYW1ldCBxdWFzaSB0ZW1wb3JpYnVzIGF1dGVtIGV4IGRpZ25pc3NpbW9zIHF1YW0gZnVnaXQgbm9iaXMhIFNhcGllbnRlLCByZXJ1bSBhZC5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDxBY2NvcmRpb24gbmFtZT1cIkl0aW5lcmF5XCIgaWQ9XCJpdGluZXJheVwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOZW1vIHRvdGFtIHJlbSB0ZW5ldHVyIHNpbnQgbmVxdWUuIFNpdCBwb3NzaW11c1xuICAgICAgICAgIHZvbHVwdGF0ZSBlYXF1ZSwgYW1ldCBxdWFzaSB0ZW1wb3JpYnVzIGF1dGVtIGV4IGRpZ25pc3NpbW9zIHF1YW0gZnVnaXQgbm9iaXMhIFNhcGllbnRlLCByZXJ1bSBhZC5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDxBY2NvcmRpb24gbmFtZT1cIkRlcGF0dXJlICYgUmV0dXJuXCIgaWQ9XCJsZWF2ZVwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOZW1vIHRvdGFtIHJlbSB0ZW5ldHVyIHNpbnQgbmVxdWUuIFNpdCBwb3NzaW11c1xuICAgICAgICAgIHZvbHVwdGF0ZSBlYXF1ZSwgYW1ldCBxdWFzaSB0ZW1wb3JpYnVzIGF1dGVtIGV4IGRpZ25pc3NpbW9zIHF1YW0gZnVnaXQgbm9iaXMhIFNhcGllbnRlLCByZXJ1bSBhZC5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGNvbnRhaW5lciBtZDpibG9ja1wiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgPFRhYiBuYW1lPVwiSW5jbHVkZWRcIiBvbkNsaWNrPXtzZXRUYWJ9IGN1cnJlbnQ9e3RhYn0gLz5cbiAgICAgICAgICA8VGFiIG5hbWU9XCJJdGluZXJheVwiIG9uQ2xpY2s9e3NldFRhYn0gY3VycmVudD17dGFifSAvPlxuICAgICAgICAgIDxUYWIgbmFtZT1cIkRlcGF0dXJlXCIgb25DbGljaz17c2V0VGFifSBjdXJyZW50PXt0YWJ9IC8+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG10LTJcIj5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2l0IGVycm9yIG1haW9yZXMgc2VkIGxhdWRhbnRpdW0gcGVyZmVyZW5kaXMgdmVyb1xuICAgICAgICAgIGV4cGxpY2FibyBxdWlidXNkYW0gcXVpZGVtIGNvcnBvcmlzIG5lc2NpdW50P1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTMgc2hhZG93LW1kIGZpeGVkIG1kOmhpZGRlbiBib3R0b20tMCBpbnNldC14LTBcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEwMCBweC00IHB5LTMgYmctcHVycGxlLTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgXCI+Q2hlY2sgQXZhaWxhYmlsaXR5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFRhYiA9ICh7IG5hbWUsIG9uQ2xpY2ssIGN1cnJlbnQgfSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17YG5hdi1saW5rICR7Y3VycmVudCA9PT0gbmFtZSAmJiBcImFjdGl2ZVwifWB9IGFyaWEtY3VycmVudD1cInBhZ2VcIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKG5hbWUpfT5cbiAgICAgIHtuYW1lfVxuICAgIDwvYnV0dG9uPlxuICA8L2xpPlxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgdG91ciA9IHRvdXJzLmZpbmQoKHRvdXIpID0+IHRvdXIuaWQgPT0gcXVlcnkuaWQpO1xuICByZXR1cm4geyBwcm9wczogeyB0b3VyIH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvdXJEZXNjcmlwdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tour/[id].js\n");

/***/ })

});