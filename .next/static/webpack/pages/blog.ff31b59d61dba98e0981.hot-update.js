self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ "./profile.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\mi pc\\Desktop\\NextJS-React-Portfolio\\pages\\blog.js",
    _this = undefined;




var PostCard = function PostCard(_ref) {
  var post = _ref.post;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-md-4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "overflow",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: post.imageURL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = PostCard;

var Blog = function Blog() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    footer: false,
    title: "My Blog",
    light: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.map(function (post, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {
          post: post
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_c2 = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c, _c2;

$RefreshReg$(_c, "PostCard");
$RefreshReg$(_c2, "Blog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpbWFnZVVSTCIsInRpdGxlIiwiY29udGVudCIsIkJsb2ciLCJwb3N0cyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLHNCQUNiO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNJO0FBQUEsb0JBQUtELElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBSUYsSUFBSSxDQUFDRztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURhO0FBQUEsQ0FBakI7O0tBQU1KLFE7O0FBY04sSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDVCw4REFBQyx1REFBRDtBQUFRLFVBQU0sRUFBRSxLQUFoQjtBQUF1QixTQUFLLEVBQUMsU0FBN0I7QUFBdUMsU0FBSyxNQUE1QztBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFFUUMsK0NBQUEsQ0FBVSxVQUFDTCxJQUFELEVBQU9NLENBQVA7QUFBQSw0QkFDTiw4REFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFTjtBQUFoQixXQUEyQk0sQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETTtBQUFBLE9BQVY7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURTO0FBQUEsQ0FBYjs7TUFBTUYsSTtBQVlOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuZmYzMWI1OWQ2MWRiYTk4ZTA5ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge3Bvc3RzfSBmcm9tICcuLi9wcm9maWxlJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZVVSTH0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuY29uc3QgQmxvZyA9ICgpID0+IChcclxuICAgIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0gdGl0bGU9XCJNeSBCbG9nXCIgbGlnaHQgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0Q2FyZCBwb3N0PXtwb3N0fSBrZXk9e2l9Lz4gICBcclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdLCJzb3VyY2VSb290IjoiIn0=