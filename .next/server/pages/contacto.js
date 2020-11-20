module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contacto.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\ESCRITORIIO KISAR\\WZS\\Proyectos\\YQMF-WEB-NEXT\\YQMFWeb\\components\\Container.js";





const Container = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "jsx-3085554274",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("html", {
      lang: "es",
      className: "jsx-3085554274"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      className: "jsx-3085554274",
      children: "Yo Quiero Mis Fotos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      href: "/icon.png",
      type: "image/png",
      className: "jsx-3085554274"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: "jsx-3085554274" + " " + "container p-4 text-center",
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3085554274",
    children: "main.jsx-3085554274{min-height:100vh;min-width:100vw;background-color:#ffdf2b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxFU0NSSVRPUklJTyBLSVNBUlxcV1pTXFxQcm95ZWN0b3NcXFlRTUYtV0VCLU5FWFRcXFlRTUZXZWJcXGNvbXBvbmVudHNcXENvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjTyxBQUc0QixpQkFDRCxnQkFDUyx5QkFDM0IiLCJmaWxlIjoiRDpcXEVTQ1JJVE9SSUlPIEtJU0FSXFxXWlNcXFByb3llY3Rvc1xcWVFNRi1XRUItTkVYVFxcWVFNRldlYlxcY29tcG9uZW50c1xcQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdmJhcic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPGh0bWwgbGFuZz1cImVzXCI+PC9odG1sPlxyXG4gICAgICA8dGl0bGU+WW8gUXVpZXJvIE1pcyBGb3RvczwvdGl0bGU+XHJcbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ljb24ucG5nXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8TmF2QmFyIC8+XHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00IHRleHQtY2VudGVyXCI+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZjJiO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\ESCRITORIIO KISAR\\\\WZS\\\\Proyectos\\\\YQMF-WEB-NEXT\\\\YQMFWeb\\\\components\\\\Container.js */"
  }, void 0, false, void 0, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\ESCRITORIIO KISAR\\WZS\\Proyectos\\YQMF-WEB-NEXT\\YQMFWeb\\components\\Navbar.js";





const NavBar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    bg: "warning",
    className: "head",
    expand: "md",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/logo.png",
        width: "210",
        height: "48",
        alt: "YQMF logo",
        className: "jsx-1934378537" + " " + "d-inline-block align-top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
      "aria-controls": "basic-navbar-nav"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
      id: "basic-navbar-nav",
      className: "justify-content-end",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        className: "ml-auto justify-content-end mr-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          href: "/",
          className: "font-weight-bold lead",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
          title: "Productos",
          id: "basic-nav-dropdown",
          className: "font-weight-bold lead",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
            href: "/fotos",
            className: "font-weight-bold lead",
            children: "Fotos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
            href: "/fotolibros",
            className: "font-weight-bold lead",
            children: "Fotolibros"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          href: "/contacto",
          className: "font-weight-bold lead",
          children: "Contacto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        class: "d-flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          className: "fab fa-instagram fa-2x",
          href: "https://www.instagram.com/yoquieromisfotos/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInstagram"],
            color: "black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          className: "fab fa-facebook fa-2x",
          href: "https://www.facebook.com/yoquieromisfotos",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFacebookSquare"],
            color: "black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
          className: "fab fa-whatsapp fa-2x",
          href: "https://wa.me/5491135365490",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWhatsapp"],
            color: "black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1934378537",
      children: ".head.jsx-1934378537{background:#e43397 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxFU0NSSVRPUklJTyBLSVNBUlxcV1pTXFxQcm95ZWN0b3NcXFlRTUYtV0VCLU5FWFRcXFlRTUZXZWJcXGNvbXBvbmVudHNcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q1MsQUFHMkMsOEJBQ2hDIiwiZmlsZSI6IkQ6XFxFU0NSSVRPUklJTyBLSVNBUlxcV1pTXFxQcm95ZWN0b3NcXFlRTUYtV0VCLU5FWFRcXFlRTUZXZWJcXGNvbXBvbmVudHNcXE5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmJhciwgTmF2LCBOYXZEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhSW5zdGFncmFtLCBmYUZhY2Vib29rU3F1YXJlLCBmYVdoYXRzYXBwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgYmc9XCJ3YXJuaW5nXCIgY2xhc3NOYW1lPVwiaGVhZFwiIGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIHdpZHRoPVwiMjEwXCIgaGVpZ2h0PVwiNDhcIiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIiBhbHQ9XCJZUU1GIGxvZ29cIiAvPlxyXG4gICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG8ganVzdGlmeS1jb250ZW50LWVuZCBtci0yXCI+XHJcbiAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGxlYWRcIj5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT1cIlByb2R1Y3Rvc1wiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBsZWFkXCI+XHJcbiAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvZm90b3NcIiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGxlYWRcIj5cclxuICAgICAgICAgICAgICBGb3Rvc1xyXG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvZm90b2xpYnJvc1wiIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbGVhZFwiPlxyXG4gICAgICAgICAgICAgIEZvdG9saWJyb3NcclxuICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2NvbnRhY3RvXCIgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBsZWFkXCI+XHJcbiAgICAgICAgICAgIENvbnRhY3RvXHJcbiAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDxOYXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtIGZhLTJ4XCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20veW9xdWllcm9taXNmb3Rvcy9cIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUluc3RhZ3JhbX0gY29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vayBmYS0yeFwiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20veW9xdWllcm9taXNmb3Rvc1wiPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmFjZWJvb2tTcXVhcmV9IGNvbG9yPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJmYWIgZmEtd2hhdHNhcHAgZmEtMnhcIiBocmVmPVwiaHR0cHM6Ly93YS5tZS81NDkxMTM1MzY1NDkwXCI+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFXaGF0c2FwcH0gY29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTQzMzk3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\ESCRITORIIO KISAR\\\\WZS\\\\Proyectos\\\\YQMF-WEB-NEXT\\\\YQMFWeb\\\\components\\\\Navbar.js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/contacto.js":
/*!***************************!*\
  !*** ./pages/contacto.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");

var _jsxFileName = "D:\\ESCRITORIIO KISAR\\WZS\\Proyectos\\YQMF-WEB-NEXT\\YQMFWeb\\pages\\contacto.js";







const Contacto = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-581134797",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "jsx-581134797" + " " + "my-5 display-4",
        children: "Contactanos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        className: "d-flex align-items-center justify-content-center align-middle",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-581134797" + " " + "d-flex",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
            className: "fas fa-envelope fa-8x",
            href: "mailto:contacto@yoquieromisfotos.com.ar",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"],
              color: "black"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
            className: "fab fa-whatsapp fa-8x",
            href: "https://wa.me/5491135365490",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWhatsapp"],
              color: "black"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-581134797" + " " + "d-flex",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
            className: "fab fa-instagram fa-8x",
            href: "https://www.instagram.com/yoquieromisfotos/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInstagram"],
              color: "black"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
            className: "fab fa-facebook fa-8x",
            href: "https://www.facebook.com/yoquieromisfotos",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFacebookSquare"],
              color: "black"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "581134797",
      children: ".nav.jsx-581134797{display:Flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxFU0NSSVRPUklJTyBLSVNBUlxcV1pTXFxQcm95ZWN0b3NcXFlRTUYtV0VCLU5FWFRcXFlRTUZXZWJcXHBhZ2VzXFxjb250YWN0by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ1MsQUFHMEIsYUFDTixpQ0FDZ0IsbUdBQ0osNkZBQ3JCIiwiZmlsZSI6IkQ6XFxFU0NSSVRPUklJTyBLSVNBUlxcV1pTXFxQcm95ZWN0b3NcXFlRTUYtV0VCLU5FWFRcXFlRTUZXZWJcXHBhZ2VzXFxjb250YWN0by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhV2hhdHNhcHAsIGZhSW5zdGFncmFtLCBmYUZhY2Vib29rU3F1YXJlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhRW52ZWxvcGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBDb250YWN0byA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXktNSBkaXNwbGF5LTRcIj5Db250YWN0YW5vczwvaDM+XHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24tbWlkZGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlIGZhLTh4XCIgaHJlZj1cIm1haWx0bzpjb250YWN0b0B5b3F1aWVyb21pc2ZvdG9zLmNvbS5hclwiPlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFbnZlbG9wZX0gY29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJmYWIgZmEtd2hhdHNhcHAgZmEtOHhcIiBocmVmPVwiaHR0cHM6Ly93YS5tZS81NDkxMTM1MzY1NDkwXCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdoYXRzYXBwfSBjb2xvcj1cImJsYWNrXCIgLz5cclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW0gZmEtOHhcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS95b3F1aWVyb21pc2ZvdG9zL1wiPlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFJbnN0YWdyYW19IGNvbG9yPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rIGZhLTh4XCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS95b3F1aWVyb21pc2ZvdG9zXCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rU3F1YXJlfSBjb2xvcj1cImJsYWNrXCIgLz5cclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IEZsZXg7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0bztcclxuIl19 */\n/*@ sourceURL=D:\\\\ESCRITORIIO KISAR\\\\WZS\\\\Proyectos\\\\YQMF-WEB-NEXT\\\\YQMFWeb\\\\pages\\\\contacto.js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Contacto);

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFjdG8uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiTmF2QmFyIiwiZmFJbnN0YWdyYW0iLCJmYUZhY2Vib29rU3F1YXJlIiwiZmFXaGF0c2FwcCIsIkNvbnRhY3RvIiwiZmFFbnZlbG9wZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7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QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFLHFFQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLHFCQUFTLEVBQUMsdUJBQXBCO0FBQTRDLGdCQUFJLEVBQUMsMkNBQWpEO0FBQUEsbUNBQ0UscUVBQUMsOEVBQUQ7QUFBaUIsa0JBQUksRUFBRUMsbUZBQXZCO0FBQXlDLG1CQUFLLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtQ0QsQ0FwQ0Q7O0FBcUNlRSx1RUFBZixFOzs7Ozs7Ozs7OztBQzVDQSwrRDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9jb250YWN0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY29udGFjdG8uanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2YmFyJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8aHRtbCBsYW5nPVwiZXNcIj48L2h0bWw+XHJcbiAgICAgIDx0aXRsZT5ZbyBRdWllcm8gTWlzIEZvdG9zPC90aXRsZT5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaWNvbi5wbmdcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxOYXZCYXIgLz5cclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTQgdGV4dC1jZW50ZXJcIj57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRmMmI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcclxuIiwiaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkRyb3Bkb3duIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFJbnN0YWdyYW0sIGZhRmFjZWJvb2tTcXVhcmUsIGZhV2hhdHNhcHAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdmJhciBiZz1cIndhcm5pbmdcIiBjbGFzc05hbWU9XCJoZWFkXCIgZXhwYW5kPVwibWRcIj5cclxuICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgd2lkdGg9XCIyMTBcIiBoZWlnaHQ9XCI0OFwiIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiIGFsdD1cIllRTUYgbG9nb1wiIC8+XHJcbiAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCIgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0byBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1yLTJcIj5cclxuICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbGVhZFwiPlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiUHJvZHVjdG9zXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGxlYWRcIj5cclxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9mb3Rvc1wiIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbGVhZFwiPlxyXG4gICAgICAgICAgICAgIEZvdG9zXHJcbiAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9mb3RvbGlicm9zXCIgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBsZWFkXCI+XHJcbiAgICAgICAgICAgICAgRm90b2xpYnJvc1xyXG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvY29udGFjdG9cIiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGxlYWRcIj5cclxuICAgICAgICAgICAgQ29udGFjdG9cclxuICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPE5hdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW0gZmEtMnhcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS95b3F1aWVyb21pc2ZvdG9zL1wiPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSBjb2xvcj1cImJsYWNrXCIgLz5cclxuICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rIGZhLTJ4XCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS95b3F1aWVyb21pc2ZvdG9zXCI+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGYWNlYm9va1NxdWFyZX0gY29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cImZhYiBmYS13aGF0c2FwcCBmYS0yeFwiIGhyZWY9XCJodHRwczovL3dhLm1lLzU0OTExMzUzNjU0OTBcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdoYXRzYXBwfSBjb2xvcj1cImJsYWNrXCIgLz5cclxuICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaGVhZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNDMzOTcgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9OYXZiYXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwiaW1wb3J0IHsgTmF2IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFXaGF0c2FwcCwgZmFJbnN0YWdyYW0sIGZhRmFjZWJvb2tTcXVhcmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFFbnZlbG9wZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuXHJcbmNvbnN0IENvbnRhY3RvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJteS01IGRpc3BsYXktNFwiPkNvbnRhY3Rhbm9zPC9oMz5cclxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1taWRkbGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUgZmEtOHhcIiBocmVmPVwibWFpbHRvOmNvbnRhY3RvQHlvcXVpZXJvbWlzZm90b3MuY29tLmFyXCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVudmVsb3BlfSBjb2xvcj1cImJsYWNrXCIgLz5cclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cImZhYiBmYS13aGF0c2FwcCBmYS04eFwiIGhyZWY9XCJodHRwczovL3dhLm1lLzU0OTExMzUzNjU0OTBcIj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2hhdHNhcHB9IGNvbG9yPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbSBmYS04eFwiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3lvcXVpZXJvbWlzZm90b3MvXCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUluc3RhZ3JhbX0gY29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2sgZmEtOHhcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3lvcXVpZXJvbWlzZm90b3NcIj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmFjZWJvb2tTcXVhcmV9IGNvbG9yPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogRmxleDtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RvO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9