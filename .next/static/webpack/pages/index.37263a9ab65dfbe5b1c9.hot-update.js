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
        children: filteredShips.map(ship => {
          ship.films.map(film => {
            films.map(movie => {
              if (parseInt(film.substring(film.lastIndexOf('/') - 2).split('/').join(''), 10) === movie.index && movie.present === false) {
                movie.present = true;
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "title-btn",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                    variant: "outline-secondary",
                    onClick: () => filmFilter(movie.index),
                    children: movie.title
                  }, movie.index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 56
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 29
                }, undefined);
              }
            });
          });
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
              lineNumber: 69,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
              href: `/ships/${ship.url.substring(ship.url.lastIndexOf('/') - 2).split('/').join('')}/`,
              children: ship.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInNoaXBzIiwicmVzdWx0cyIsImZpbG1zIiwiaW5kZXgiLCJ0aXRsZSIsInByZXNlbnQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsImZpbHRlcmVkU2hpcHMiLCJzZXRmaWx0ZXJlZFNoaXBzIiwiZmlsbUZpbHRlciIsIm5iIiwiZmlsdGVyIiwic2hpcCIsImluY2x1ZGVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJ1c2VFZmZlY3QiLCJuYW1lIiwibWFwIiwiZmlsbSIsIm1vdmllIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInNwbGl0Iiwiam9pbiIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLEtBQUssR0FBRyxVQUFnQjtBQUFBOztBQUFBLE1BQVhDLEtBQVc7QUFDNUIsUUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE9BQXBCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFBQ0MsU0FBSyxFQUFDLENBQVA7QUFBVUMsU0FBSyxFQUFDLFlBQWhCO0FBQThCQyxXQUFPLEVBQUM7QUFBdEMsR0FEWSxFQUVaO0FBQUNGLFNBQUssRUFBQyxDQUFQO0FBQVVDLFNBQUssRUFBQyx5QkFBaEI7QUFBMkNDLFdBQU8sRUFBQztBQUFuRCxHQUZZLEVBR1o7QUFBQ0YsU0FBSyxFQUFDLENBQVA7QUFBVUMsU0FBSyxFQUFDLG9CQUFoQjtBQUFzQ0MsV0FBTyxFQUFDO0FBQTlDLEdBSFksRUFJWjtBQUFDRixTQUFLLEVBQUMsQ0FBUDtBQUFVQyxTQUFLLEVBQUMsb0JBQWhCO0FBQXNDQyxXQUFPLEVBQUM7QUFBOUMsR0FKWSxFQUtaO0FBQUNGLFNBQUssRUFBQyxDQUFQO0FBQVVDLFNBQUssRUFBQyxzQkFBaEI7QUFBd0NDLFdBQU8sRUFBQztBQUFoRCxHQUxZLEVBTVo7QUFBQ0YsU0FBSyxFQUFDLENBQVA7QUFBVUMsU0FBSyxFQUFDLHFCQUFoQjtBQUF1Q0MsV0FBTyxFQUFDO0FBQS9DLEdBTlksQ0FBZDtBQVFBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NGLHNEQUFRLENBQUNSLEtBQUQsQ0FBbEQ7O0FBQ0EsUUFBTVcsVUFBVSxHQUFJQyxFQUFELElBQU87QUFDeEJGLG9CQUFnQixDQUFDVixLQUFLLENBQUNhLE1BQU4sQ0FBYUMsSUFBSSxJQUFJO0FBQ3BDLGFBQU9BLElBQUksQ0FBQ1osS0FBTCxDQUFXYSxRQUFYLENBQXFCLDhCQUE2QkgsRUFBRyxHQUFyRCxDQUFQO0FBQ0QsS0FGZ0IsQ0FBRCxDQUFoQjtBQUdELEdBSkQ7O0FBT0EsUUFBTUksWUFBWSxHQUFJQyxDQUFELElBQUs7QUFDeEJWLGFBQVMsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsV0FBZixFQUFELENBQVQ7QUFDRCxHQUZEOztBQUlBQyx5REFBUyxDQUFDLE1BQU07QUFDWlgsb0JBQWdCLENBQUNWLEtBQUssQ0FBQ2EsTUFBTixDQUFhQyxJQUFJLElBQUdBLElBQUksQ0FBQ1EsSUFBTCxDQUFVRixXQUFWLEdBQXdCTCxRQUF4QixDQUFpQ1QsTUFBakMsQ0FBcEIsQ0FBRCxDQUFoQjtBQUNILEdBRlEsRUFFUCxDQUFDQSxNQUFELENBRk8sQ0FBVDtBQUlFLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBQSw4QkFDRSxxRUFBQywwREFBRDtBQUFZLGlCQUFTLEVBQUMsTUFBdEI7QUFBQSxnQ0FDRSxxRUFBQywyREFBRDtBQUNFLHFCQUFXLEVBQUMscUJBRGQ7QUFFRSx3QkFBVyxRQUZiO0FBR0UsOEJBQWlCLGNBSG5CO0FBSUUsa0JBQVEsRUFBSVU7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0UscUVBQUMsMERBQUQsQ0FBWSxNQUFaO0FBQUEsaUNBQ0UscUVBQUMsMERBQUQsQ0FBWSxJQUFaO0FBQWlCLGNBQUUsRUFBQyxjQUFwQjtBQUFBLG1DQUFtQyxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVlFO0FBQUEsa0JBQ0dQLGFBQWEsQ0FBQ2MsR0FBZCxDQUFrQlQsSUFBSSxJQUFFO0FBQ3ZCQSxjQUFJLENBQUNaLEtBQUwsQ0FBV3FCLEdBQVgsQ0FBZUMsSUFBSSxJQUFFO0FBQ25CdEIsaUJBQUssQ0FBQ3FCLEdBQU4sQ0FBVUUsS0FBSyxJQUFJO0FBQ2pCLGtCQUFHQyxRQUFRLENBQUNGLElBQUksQ0FBQ0csU0FBTCxDQUFlSCxJQUFJLENBQUNJLFdBQUwsQ0FBaUIsR0FBakIsSUFBdUIsQ0FBdEMsRUFBMENDLEtBQTFDLENBQWdELEdBQWhELEVBQXFEQyxJQUFyRCxDQUEwRCxFQUExRCxDQUFELEVBQStELEVBQS9ELENBQVIsS0FBOEVMLEtBQUssQ0FBQ3RCLEtBQXBGLElBQTZGc0IsS0FBSyxDQUFDcEIsT0FBTixLQUFnQixLQUFoSCxFQUFzSDtBQUNwSG9CLHFCQUFLLENBQUNwQixPQUFOLEdBQWMsSUFBZDtBQUNBLG9DQUFRO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQUEseUNBQTJCLHFFQUFDLHNEQUFEO0FBQVEsMkJBQU8sRUFBQyxtQkFBaEI7QUFBdUQsMkJBQU8sRUFBRSxNQUFLTSxVQUFVLENBQUNjLEtBQUssQ0FBQ3RCLEtBQVAsQ0FBL0U7QUFBQSw4QkFDaENzQixLQUFLLENBQUNyQjtBQUQwQixxQkFBMENxQixLQUFLLENBQUN0QixLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQVI7QUFHRDtBQUNGLGFBUEQ7QUFTSCxXQVZDO0FBVUMsU0FYRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkYsZUEyQkU7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxrQkFDR00sYUFBYSxDQUFDYyxHQUFkLENBQWtCVCxJQUFJLElBQUc7QUFDeEIsOEJBQ0U7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxvQ0FDSSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUkscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFHLFVBQVNBLElBQUksQ0FBQ2lCLEdBQUwsQ0FBU0osU0FBVCxDQUFtQmIsSUFBSSxDQUFDaUIsR0FBTCxDQUFTSCxXQUFULENBQXFCLEdBQXJCLElBQTJCLENBQTlDLEVBQWtEQyxLQUFsRCxDQUF3RCxHQUF4RCxFQUE2REMsSUFBN0QsQ0FBa0UsRUFBbEUsQ0FBc0UsR0FBNUY7QUFBQSx3QkFDR2hCLElBQUksQ0FBQ1E7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVFELFNBVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE0Q0gsQ0F2RUQ7O0dBQU14QixLOztLQUFBQSxLOztBQW9GU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzcyNjNhOWFiNjVkZmJlNWIxYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCB7QnV0dG9uLElucHV0R3JvdXAsIEZvcm1Db250cm9sfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IEJzU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXHJcbmltcG9ydCB7IFJpU3BhY2VTaGlwTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5jb25zdCBJbmRleCA9ICh7Li4ucHJvcHN9KSA9PiB7XHJcbiAgY29uc3Qgc2hpcHMgPSBwcm9wcy5yZXN1bHRzO1xyXG4gIGNvbnN0IGZpbG1zID0gW1xyXG4gICAge2luZGV4OjEsIHRpdGxlOidBIE5ldyBIb3BlJywgcHJlc2VudDpmYWxzZX0sXHJcbiAgICB7aW5kZXg6MiwgdGl0bGU6J1RoZSBFbXBpcmUgU3RyaWtlcyBCYWNrJywgcHJlc2VudDpmYWxzZX0sXHJcbiAgICB7aW5kZXg6MywgdGl0bGU6J1JldHVybiBvZiB0aGUgSmVkaScsIHByZXNlbnQ6ZmFsc2V9LFxyXG4gICAge2luZGV4OjQsIHRpdGxlOidUaGUgUGhhbnRvbSBNZW5hY2UnLCBwcmVzZW50OmZhbHNlfSxcclxuICAgIHtpbmRleDo1LCB0aXRsZTonQXR0YWNrIG9mIHRoZSBDbG9uZXMnLCBwcmVzZW50OmZhbHNlfSxcclxuICAgIHtpbmRleDo2LCB0aXRsZTonUmV2ZW5nZSBvZiB0aGUgU2l0aCcsIHByZXNlbnQ6ZmFsc2V9XHJcbiAgXVxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkU2hpcHMsIHNldGZpbHRlcmVkU2hpcHNdID0gdXNlU3RhdGUoc2hpcHMpO1xyXG4gIGNvbnN0IGZpbG1GaWx0ZXIgPSAobmIpID0+e1xyXG4gICAgc2V0ZmlsdGVyZWRTaGlwcyhzaGlwcy5maWx0ZXIoc2hpcCA9PiB7XHJcbiAgICAgIHJldHVybiBzaGlwLmZpbG1zLmluY2x1ZGVzKGBodHRwOi8vc3dhcGkuZGV2L2FwaS9maWxtcy8ke25ifS9gKVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKT0+e1xyXG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRmaWx0ZXJlZFNoaXBzKHNoaXBzLmZpbHRlcihzaGlwPT4gc2hpcC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKSkpIFxyXG4gIH0sW3NlYXJjaF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggc2hpcCBieSBuYW1lXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24yXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0IGlkPVwiYmFzaWMtYWRkb24yXCI+PEJzU2VhcmNoLz48L0lucHV0R3JvdXAuVGV4dD5cclxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRTaGlwcy5tYXAoc2hpcD0+e1xyXG4gICAgICAgICAgICAgIHNoaXAuZmlsbXMubWFwKGZpbG09PntcclxuICAgICAgICAgICAgICAgIGZpbG1zLm1hcChtb3ZpZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KGZpbG0uc3Vic3RyaW5nKGZpbG0ubGFzdEluZGV4T2YoJy8nKSAtMiApLnNwbGl0KCcvJykuam9pbignJyksMTApPT09IG1vdmllLmluZGV4ICYmIG1vdmllLnByZXNlbnQ9PT1mYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWUucHJlc2VudD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1idG5cIj48QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiICBrZXk9e21vdmllLmluZGV4fSBvbkNsaWNrPXsoKSA9PmZpbG1GaWx0ZXIobW92aWUuaW5kZXgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+PC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSl9KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0JyA+XHJcbiAgICAgICAgICAgIHtmaWx0ZXJlZFNoaXBzLm1hcChzaGlwID0+e1xyXG4gICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaVNwYWNlU2hpcExpbmUvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2hpcHMvJHtzaGlwLnVybC5zdWJzdHJpbmcoc2hpcC51cmwubGFzdEluZGV4T2YoJy8nKSAtMiApLnNwbGl0KCcvJykuam9pbignJyl9L2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NoaXAubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3N3YXBpLmRldi9hcGkvc3RhcnNoaXBzL2ApXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICBpZiAoIWRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4ge3Byb3BzOiBkYXRhfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9