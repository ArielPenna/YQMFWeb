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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\ESCRITORIIO KISAR\\WZS\\Proyectos\\YQMF-WEB-NEXT\\YQMFWeb\\components\\Container.js";




const Container = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Yo Quiero Mis Fotos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      href: "/icon.png",
      type: "image/png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container p-4",
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)]
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\ESCRITORIIO KISAR\\WZS\\Proyectos\\YQMF-WEB-NEXT\\YQMFWeb\\components\\Navbar.js";




const NavBar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    bg: "warning",
    expand: "md",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/logo.png",
        width: "210",
        height: "50",
        className: "d-inline-block align-top",
        alt: "YQMF logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
      "aria-controls": "basic-navbar-nav"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
      id: "basic-navbar-nav",
      className: "justify-content-end",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        className: "ml-auto justify-content-end",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
          href: "/",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
          title: "Productos",
          id: "basic-nav-dropdown",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
            href: "/fotos",
            children: "Fotos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
            href: "/fotolibros",
            children: "Fotolibros"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
          href: "/contacto",
          children: "Contacto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        class: "d-flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
          className: "fab fa-instagram fa-2x",
          href: "https://www.instagram.com/yoquieromisfotos/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInstagram"],
            color: "black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
          className: "fab fa-facebook fa-2x",
          href: "https://www.facebook.com/yoquieromisfotos",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebookSquare"],
            color: "black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
          className: "fab fa-whatsapp fa-2x",
          href: "https://wa.me/5491135365490",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWhatsapp"],
            color: "black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");

var _jsxFileName = "D:\\ESCRITORIIO KISAR\\WZS\\Proyectos\\YQMF-WEB-NEXT\\YQMFWeb\\pages\\index.js";


const Index = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Index"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iLCJOYXZCYXIiLCJmYUluc3RhZ3JhbSIsImZhRmFjZWJvb2tTcXVhcmUiLCJmYVdoYXRzYXBwIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFF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QUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSxxRUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxtQkFBUyxFQUFDLHVCQUFwQjtBQUE0QyxjQUFJLEVBQUMsMkNBQWpEO0FBQUEsaUNBQ0UscUVBQUMsOEVBQUQ7QUFBaUIsZ0JBQUksRUFBRUMsbUZBQXZCO0FBQXlDLGlCQUFLLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFPRSxxRUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxtQkFBUyxFQUFDLHVCQUFwQjtBQUE0QyxjQUFJLEVBQUMsNkJBQWpEO0FBQUEsaUNBQ0UscUVBQUMsOEVBQUQ7QUFBaUIsZ0JBQUksRUFBRUMsNkVBQXZCO0FBQW1DLGlCQUFLLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTZCRCxDQTlCRDs7QUFnQ2VILHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBOztBQUVBLE1BQU1JLEtBQUssR0FBRyxNQUFNO0FBQ2xCLHNCQUNFLHFFQUFDLDZEQUFEO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQU9lQSxvRUFBZixFOzs7Ozs7Ozs7OztBQ1RBLCtEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZiYXInO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5ZbyBRdWllcm8gTWlzIEZvdG9zPC90aXRsZT5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaWNvbi5wbmdcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxOYXZCYXIgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcclxuIiwiaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkRyb3Bkb3duIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFJbnN0YWdyYW0sIGZhRmFjZWJvb2tTcXVhcmUsIGZhV2hhdHNhcHAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdmJhciBiZz1cIndhcm5pbmdcIiBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiB3aWR0aD1cIjIxMFwiIGhlaWdodD1cIjUwXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCIgYWx0PVwiWVFNRiBsb2dvXCIgLz5cclxuICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvIGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiPkhvbWU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiUHJvZHVjdG9zXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9mb3Rvc1wiPkZvdG9zPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL2ZvdG9saWJyb3NcIj5Gb3RvbGlicm9zPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2NvbnRhY3RvXCI+Q29udGFjdG88L05hdi5MaW5rPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDxOYXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtIGZhLTJ4XCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20veW9xdWllcm9taXNmb3Rvcy9cIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUluc3RhZ3JhbX0gY29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vayBmYS0yeFwiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20veW9xdWllcm9taXNmb3Rvc1wiPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmFjZWJvb2tTcXVhcmV9IGNvbG9yPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJmYWIgZmEtd2hhdHNhcHAgZmEtMnhcIiBocmVmPVwiaHR0cHM6Ly93YS5tZS81NDkxMTM1MzY1NDkwXCI+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFXaGF0c2FwcH0gY29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxoMT5JbmRleDwvaDE+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==