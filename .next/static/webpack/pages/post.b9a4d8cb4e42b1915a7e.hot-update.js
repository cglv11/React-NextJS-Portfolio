self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ "./profile.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\mi pc\\Desktop\\NextJS-React-Portfolio\\pages\\post.js",
    _this = undefined,
    _s = $RefreshSig$();





var Post = function Post() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var currentPost = _profile__WEBPACK_IMPORTED_MODULE_3__.posts.filter(function (post) {
    return post.title === router.query.title;
  })[0]; //take every single post and show what you choosen
  //currentPost containe the JSON Object of de the post

  console.log(currentPost);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    footer: false,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: currentPost.imageURL,
        className: "img-fluid",
        style: {
          width: '50%'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: currentPost.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY3VycmVudFBvc3QiLCJwb3N0cyIsInBvc3QiLCJ0aXRsZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImltYWdlVVJMIiwid2lkdGgiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0Msa0RBQUEsQ0FBYSxVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDQyxLQUFMLEtBQWVMLE1BQU0sQ0FBQ00sS0FBUCxDQUFhRCxLQUFoQztBQUFBLEdBQWpCLEVBQXdELENBQXhELENBQXBCLENBRmUsQ0FFZ0U7QUFDL0U7O0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixXQUFaO0FBQ0Esc0JBQ0ksOERBQUMsdURBQUQ7QUFBUSxVQUFNLEVBQUUsS0FBaEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0k7QUFBSyxXQUFHLEVBQUVBLFdBQVcsQ0FBQ08sUUFBdEI7QUFBZ0MsaUJBQVMsRUFBQyxXQUExQztBQUFzRCxhQUFLLEVBQUU7QUFBQ0MsZUFBSyxFQUFFO0FBQVI7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSxrQkFBSVIsV0FBVyxDQUFDUztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FiRDs7R0FBTVosSTtVQUNhRSxrRDs7O0tBRGJGLEk7QUFlTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0LmI5YTRkOGNiNGU0MmIxOTE1YTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7cG9zdHN9IGZyb20gJy4uL3Byb2ZpbGUnXHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBjdXJyZW50UG9zdCA9IHBvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QudGl0bGUgPT09IHJvdXRlci5xdWVyeS50aXRsZSlbMF0gLy90YWtlIGV2ZXJ5IHNpbmdsZSBwb3N0IGFuZCBzaG93IHdoYXQgeW91IGNob29zZW5cclxuICAgIC8vY3VycmVudFBvc3QgY29udGFpbmUgdGhlIEpTT04gT2JqZWN0IG9mIGRlIHRoZSBwb3N0XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UG9zdCk7XHJcbiAgICByZXR1cm4gKCAgICAgICAgXHJcbiAgICAgICAgPExheW91dCBmb290ZXI9e2ZhbHNlfSA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50UG9zdC5pbWFnZVVSTH0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3R5bGU9e3t3aWR0aDogJzUwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICA8cD57Y3VycmVudFBvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==