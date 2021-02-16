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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


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
          lineNumber: 39,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Append, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
            id: "basic-addon2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsSearch"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 50
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
              lineNumber: 51,
              columnNumber: 49
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 22
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined), filteredShips.map(ship => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: `/ships/${ship.url.substring(ship.url.lastIndexOf('/') - 2).split('/').join('')}/`,
            children: ship.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }, undefined);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInNoaXBzIiwicmVzdWx0cyIsImZpbG1zIiwiaW5kZXgiLCJ0aXRsZSIsInByZXNlbnQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsImZpbHRlcmVkU2hpcHMiLCJzZXRmaWx0ZXJlZFNoaXBzIiwiZmlsbUZpbHRlciIsIm5iIiwiZmlsdGVyIiwic2hpcCIsImluY2x1ZGVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJ1c2VFZmZlY3QiLCJuYW1lIiwibWFwIiwiZmlsbSIsInVybCIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwic3BsaXQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHLFVBQWdCO0FBQUE7O0FBQUEsTUFBWEMsS0FBVztBQUM1QixRQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsT0FBcEI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUFDQyxTQUFLLEVBQUMsQ0FBUDtBQUFVQyxTQUFLLEVBQUMsWUFBaEI7QUFBOEJDLFdBQU8sRUFBQztBQUF0QyxHQURZLEVBRVo7QUFBQ0YsU0FBSyxFQUFDLENBQVA7QUFBVUMsU0FBSyxFQUFDLHlCQUFoQjtBQUEyQ0MsV0FBTyxFQUFDO0FBQW5ELEdBRlksRUFHWjtBQUFDRixTQUFLLEVBQUMsQ0FBUDtBQUFVQyxTQUFLLEVBQUMsb0JBQWhCO0FBQXNDQyxXQUFPLEVBQUM7QUFBOUMsR0FIWSxFQUlaO0FBQUNGLFNBQUssRUFBQyxDQUFQO0FBQVVDLFNBQUssRUFBQyxvQkFBaEI7QUFBc0NDLFdBQU8sRUFBQztBQUE5QyxHQUpZLEVBS1o7QUFBQ0YsU0FBSyxFQUFDLENBQVA7QUFB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QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBT0QsT0FSQSxDQXBCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQ0gsQ0E3REQ7O0dBQU14QixLOztLQUFBQSxLO0FBMEVOO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNWY0OGU4OTFkYzFjYzAxYTU0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlcidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IHtCdXR0b24sSW5wdXRHcm91cCwgRm9ybUNvbnRyb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHsgQnNTZWFyY2ggfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmNvbnN0IEluZGV4ID0gKHsuLi5wcm9wc30pID0+IHtcclxuICBjb25zdCBzaGlwcyA9IHByb3BzLnJlc3VsdHM7XHJcbiAgY29uc3QgZmlsbXMgPSBbXHJcbiAgICB7aW5kZXg6MSwgdGl0bGU6J0EgTmV3IEhvcGUnLCBwcmVzZW50OmZhbHNlfSxcclxuICAgIHtpbmRleDoyLCB0aXRsZTonVGhlIEVtcGlyZSBTdHJpa2VzIEJhY2snLCBwcmVzZW50OmZhbHNlfSxcclxuICAgIHtpbmRleDozLCB0aXRsZTonUmV0dXJuIG9mIHRoZSBKZWRpJywgcHJlc2VudDpmYWxzZX0sXHJcbiAgICB7aW5kZXg6NCwgdGl0bGU6J1RoZSBQaGFudG9tIE1lbmFjZScsIHByZXNlbnQ6ZmFsc2V9LFxyXG4gICAge2luZGV4OjUsIHRpdGxlOidBdHRhY2sgb2YgdGhlIENsb25lcycsIHByZXNlbnQ6ZmFsc2V9LFxyXG4gICAge2luZGV4OjYsIHRpdGxlOidSZXZlbmdlIG9mIHRoZSBTaXRoJywgcHJlc2VudDpmYWxzZX1cclxuICBdXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmlsdGVyZWRTaGlwcywgc2V0ZmlsdGVyZWRTaGlwc10gPSB1c2VTdGF0ZShzaGlwcyk7XHJcbiAgY29uc3QgZmlsbUZpbHRlciA9IChuYikgPT57XHJcbiAgICBzZXRmaWx0ZXJlZFNoaXBzKHNoaXBzLmZpbHRlcihzaGlwID0+IHtcclxuICAgICAgcmV0dXJuIHNoaXAuZmlsbXMuaW5jbHVkZXMoYGh0dHA6Ly9zd2FwaS5kZXYvYXBpL2ZpbG1zLyR7bmJ9L2ApXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpPT57XHJcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldGZpbHRlcmVkU2hpcHMoc2hpcHMuZmlsdGVyKHNoaXA9PiBzaGlwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpKSkgXHJcbiAgfSxbc2VhcmNoXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBzaGlwIGJ5IG5hbWVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQgaWQ9XCJiYXNpYy1hZGRvbjJcIj48QnNTZWFyY2gvPjwvSW5wdXRHcm91cC5UZXh0PlxyXG4gICAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIHtmaWxtcy5tYXAoZmlsbT0+e1xyXG4gICAgICAgICAgICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJ0blwiPjxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCIgIGtleT17ZmlsbS5pbmRleH0gb25DbGljaz17KCkgPT5maWxtRmlsdGVyKGZpbG0uaW5kZXgpfSA+XHJcbiAgICAgICAgICAgICAgICB7ZmlsbS50aXRsZX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgKX0pfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2ZpbHRlcmVkU2hpcHMubWFwKHNoaXAgPT57XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaGlwcy8ke3NoaXAudXJsLnN1YnN0cmluZyhzaGlwLnVybC5sYXN0SW5kZXhPZignLycpIC0yICkuc3BsaXQoJy8nKS5qb2luKCcnKX0vYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2hpcC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3N0YXJzaGlwcy9gKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtwcm9wczogZGF0YX1cclxufVxyXG5cclxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc3dhcGkuZGV2L2FwaS9zdGFyc2hpcHMvYClcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgXHJcbi8vICAgICBpZiAoIWRhdGEpIHtcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHtzaGlwczogZGF0YS5yZXN1bHRzfVxyXG4vLyAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=