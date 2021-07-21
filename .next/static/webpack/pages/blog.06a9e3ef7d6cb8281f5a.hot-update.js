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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
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
          src: post.imageURL,
          className: "card-img-top"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/post?title=".concat(post.title),
          as: "react",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "btn btn-light",
            children: "Read"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = PostCard;

var Blog = function Blog() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    footer: true,
    title: "My Blog",
    light: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.map(function (post, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {
          post: post
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpbWFnZVVSTCIsInRpdGxlIiwiY29udGVudCIsIkJsb2ciLCJwb3N0cyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxzQkFDYjtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUVBLElBQUksQ0FBQ0MsUUFBZjtBQUF5QixtQkFBUyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNJO0FBQUEsb0JBQUtELElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBSUYsSUFBSSxDQUFDRztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSw4REFBQyxrREFBRDtBQUFNLGNBQUksd0JBQWlCSCxJQUFJLENBQUNFLEtBQXRCLENBQVY7QUFBeUMsWUFBRSxFQUFDLE9BQTVDO0FBQUEsaUNBQ0k7QUFBUSxxQkFBUyxFQUFDLGVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFBQSxDQUFqQjs7S0FBTUgsUTs7QUFtQk4sSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDVCw4REFBQyx1REFBRDtBQUFRLFVBQU0sRUFBRSxJQUFoQjtBQUFzQixTQUFLLEVBQUMsU0FBNUI7QUFBc0MsU0FBSyxNQUEzQztBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFFUUMsK0NBQUEsQ0FBVSxVQUFDTCxJQUFELEVBQU9NLENBQVA7QUFBQSw0QkFDTiw4REFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFTjtBQUFoQixXQUEyQk0sQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETTtBQUFBLE9BQVY7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURTO0FBQUEsQ0FBYjs7TUFBTUYsSTtBQVlOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuMDZhOWUzZWY3ZDZjYjgyODFmNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge3Bvc3RzfSBmcm9tICcuLi9wcm9maWxlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlVVJMfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfSBhcz1cInJlYWN0XCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmNvbnN0IEJsb2cgPSAoKSA9PiAoXHJcbiAgICA8TGF5b3V0IGZvb3Rlcj17dHJ1ZX0gdGl0bGU9XCJNeSBCbG9nXCIgbGlnaHQgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0Q2FyZCBwb3N0PXtwb3N0fSBrZXk9e2l9Lz4gICBcclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdLCJzb3VyY2VSb290IjoiIn0=