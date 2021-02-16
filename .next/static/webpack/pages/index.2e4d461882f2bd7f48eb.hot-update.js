webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\slata\\Documents\\zadanie\\zad\\pages\\index.js",
    _s = $RefreshSig$();

// import Loader from '../components/loader'








const Index = (_ref) => {
  _s();

  let props = Object.assign({}, _ref);
  const ships = props.results;
  const films = [{
    index: 1,
    title: 'A New Hope',
    present: false
  }, {
    index: 2,
    title: 'The Empire Strikes Back',
    present: false
  }, {
    index: 3,
    title: 'Return of the Jedi',
    present: false
  }, {
    index: 4,
    title: 'The Phantom Menace',
    present: false
  }, {
    index: 5,
    title: 'Attack of the Clones',
    present: false
  }, {
    index: 6,
    title: 'Revenge of the Sith',
    present: false
  }];
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: filteredShips,
    1: setfilteredShips
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(ships);

  const filmFilter = nb => {
    setfilteredShips(ships.filter(ship => {
      return ship.films.includes(`http://swapi.dev/api/films/${nb}/`);
    }));
  };

  const handleChange = e => {
    setSearch(e.target.value.toLowerCase());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setfilteredShips(ships.filter(ship => ship.name.toLowerCase().includes(search)));
  }, [search]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
          placeholder: "Search ship by name",
          "aria-label": "search",
          "aria-describedby": "basic-addon2",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Append, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
            id: "basic-addon2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsSearch"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 50
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: films.map(film => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "title-btn",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              variant: "outline-secondary",
              onClick: () => filmFilter(film.index),
              children: film.title
            }, film.index, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 49
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 22
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "list",
        children: filteredShips.map(ship => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "list-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__["RiSpaceShipLine"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
              href: `/ships/${ship.url.substring(ship.url.lastIndexOf('/') - 2).split('/').join('')}/`,
              children: ship.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 17
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }, undefined);
};

_s(Index, "LUVQmXlsgD8AndJcZexqjhBR6jA=");

_c = Index;
// Index.getInitialProps = async function () {
//     const res = await fetch(`https://swapi.dev/api/starships/`)
//     const data = await res.json()
//     if (!data) {
//       return {
//         notFound: true,
//       }
//     }
//     return {ships: data.results}
//   }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInNoaXBzIiwicmVzdWx0cyIsImZpbG1zIiwiaW5kZXgiLCJ0aXRsZSIsInByZXNlbnQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsImZpbHRlcmVkU2hpcHMiLCJzZXRmaWx0ZXJlZFNoaXBzIiwiZmlsbUZpbHRlciIsIm5iIiwiZmlsdGVyIiwic2hpcCIsImluY2x1ZGVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJ1c2VFZmZlY3QiLCJuYW1lIiwibWFwIiwiZmlsbSIsInVybCIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwic3BsaXQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHLFVBQWdCO0FBQUE7O0FBQUEsTUFBWEMsS0FBVztBQUM1QixRQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsT0FBcEI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUFDQyxTQUFLLEVBQUMsQ0FBUDtBQUFVQyxTQUFLLEVBQUMsWUFBaEI7QUFBOEJDLFdBQU8sRUFBQztBQUF0QyxHQURZLEVBRVo7QUFBQ0YsU0FBSyxFQUFDLENBQVA7QUFBVUMsU0FBSyxFQUFDLHlCQUFoQjtBQUEyQ0MsV0FBTyxFQUFDO0FBQW5ELEdBRlksRUFHWjtBQUFDRixTQUFLLEVBQUMsQ0FBUDtBQUFVQyxTQUFLLEVBQUMsb0JBQWhCO0FBQXNDQyxXQUFPLEVBQUM7QUFBOUMsR0FIWSxFQUlaO0FBQUNGLFNBQUssRUFBQyxDQUFQO0FBQVVDLFNBQUssRUFBQyxvQkFBaEI7QUFBc0NDLFdBQU8sRUFBQztBQUE5QyxHQUpZLEVBS1o7QUFBQ0YsU0FBSyxFQUFDLENB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QUFsRCxDQUF3RCxHQUF4RCxFQUE2REMsSUFBN0QsQ0FBa0UsRUFBbEUsQ0FBc0UsR0FBNUY7QUFBQSx3QkFDR2YsSUFBSSxDQUFDUTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBUUQsU0FUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFDSCxDQWhFRDs7R0FBTXhCLEs7O0tBQUFBLEs7QUE2RU47QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJlNGQ0NjE4ODJmMmJkN2Y0OGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGVyJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQge0J1dHRvbixJbnB1dEdyb3VwLCBGb3JtQ29udHJvbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBCc1NlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgeyBSaVNwYWNlU2hpcExpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuY29uc3QgSW5kZXggPSAoey4uLnByb3BzfSkgPT4ge1xyXG4gIGNvbnN0IHNoaXBzID0gcHJvcHMucmVzdWx0cztcclxuICBjb25zdCBmaWxtcyA9IFtcclxuICAgIHtpbmRleDoxLCB0aXRsZTonQSBOZXcgSG9wZScsIHByZXNlbnQ6ZmFsc2V9LFxyXG4gICAge2luZGV4OjIsIHRpdGxlOidUaGUgRW1waXJlIFN0cmlrZXMgQmFjaycsIHByZXNlbnQ6ZmFsc2V9LFxyXG4gICAge2luZGV4OjMsIHRpdGxlOidSZXR1cm4gb2YgdGhlIEplZGknLCBwcmVzZW50OmZhbHNlfSxcclxuICAgIHtpbmRleDo0LCB0aXRsZTonVGhlIFBoYW50b20gTWVuYWNlJywgcHJlc2VudDpmYWxzZX0sXHJcbiAgICB7aW5kZXg6NSwgdGl0bGU6J0F0dGFjayBvZiB0aGUgQ2xvbmVzJywgcHJlc2VudDpmYWxzZX0sXHJcbiAgICB7aW5kZXg6NiwgdGl0bGU6J1JldmVuZ2Ugb2YgdGhlIFNpdGgnLCBwcmVzZW50OmZhbHNlfVxyXG4gIF1cclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZFNoaXBzLCBzZXRmaWx0ZXJlZFNoaXBzXSA9IHVzZVN0YXRlKHNoaXBzKTtcclxuICBjb25zdCBmaWxtRmlsdGVyID0gKG5iKSA9PntcclxuICAgIHNldGZpbHRlcmVkU2hpcHMoc2hpcHMuZmlsdGVyKHNoaXAgPT4ge1xyXG4gICAgICByZXR1cm4gc2hpcC5maWxtcy5pbmNsdWRlcyhgaHR0cDovL3N3YXBpLmRldi9hcGkvZmlsbXMvJHtuYn0vYClcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSk9PntcclxuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0ZmlsdGVyZWRTaGlwcyhzaGlwcy5maWx0ZXIoc2hpcD0+IHNoaXAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkpKSBcclxuICB9LFtzZWFyY2hdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHNoaXAgYnkgbmFtZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICAgICAgPElucHV0R3JvdXAuVGV4dCBpZD1cImJhc2ljLWFkZG9uMlwiPjxCc1NlYXJjaC8+PC9JbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAge2ZpbG1zLm1hcChmaWxtPT57XHJcbiAgICAgICAgICAgICAgcmV0dXJuKDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYnRuXCI+PEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zZWNvbmRhcnlcIiAga2V5PXtmaWxtLmluZGV4fSBvbkNsaWNrPXsoKSA9PmZpbG1GaWx0ZXIoZmlsbS5pbmRleCl9ID5cclxuICAgICAgICAgICAgICAgIHtmaWxtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICApfSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCcgPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRTaGlwcy5tYXAoc2hpcCA9PntcclxuICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICA8UmlTcGFjZVNoaXBMaW5lLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3NoaXBzLyR7c2hpcC51cmwuc3Vic3RyaW5nKHNoaXAudXJsLmxhc3RJbmRleE9mKCcvJykgLTIgKS5zcGxpdCgnLycpLmpvaW4oJycpfS9gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaGlwLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3N0YXJzaGlwcy9gKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtwcm9wczogZGF0YX1cclxufVxyXG5cclxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc3dhcGkuZGV2L2FwaS9zdGFyc2hpcHMvYClcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgXHJcbi8vICAgICBpZiAoIWRhdGEpIHtcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHtzaGlwczogZGF0YS5yZXN1bHRzfVxyXG4vLyAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=