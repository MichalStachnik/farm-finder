module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/michal/Documents/farm-finder/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction HomePage() {\n  let {\n    0: searchValue,\n    1: setSearchValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const onSubmit = async e => {\n    e.preventDefault();\n    const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${key}`);\n    const json = await res.json();\n    console.log('json: ', json);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, \"Welcome to Farm Finder\"), __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    value: searchValue,\n    onChange: e => setSearchValue(e.target.value),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Search\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInVzZVN0YXRlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsImtleSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsTUFBSTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLEVBQUQsQ0FBNUM7O0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU9DLENBQVAsSUFBYTtBQUM1QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDcEIscURBQW9EUCxXQUFZLHNCQUFxQlEsR0FBSSxFQURyRSxDQUF2QjtBQUdBLFVBQU1DLElBQUksR0FBRyxNQUFNSCxHQUFHLENBQUNHLElBQUosRUFBbkI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsSUFBdEI7QUFDRCxHQVJEOztBQVVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFFRTtBQUFNLFlBQVEsRUFBRU4sUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxTQUFLLEVBQUVILFdBRlQ7QUFHRSxZQUFRLEVBQUdJLENBQUQsSUFBT0gsY0FBYyxDQUFDRyxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVixDQUhqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsQ0FGRixDQURGO0FBYUQ7O0FBRWNkLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGxldCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9nZW9jb2RpbmcvdjUvbWFwYm94LnBsYWNlcy8ke3NlYXJjaFZhbHVlfS5qc29uP2FjY2Vzc190b2tlbj0ke2tleX1gXG4gICAgKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZygnanNvbjogJywganNvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPldlbGNvbWUgdG8gRmFybSBGaW5kZXI8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michal/Documents/farm-finder/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });