module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/michal/Documents/farm-finder/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst FarmMapGL = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/FarmMapGL/FarmMapGL */ \"./components/FarmMapGL/FarmMapGL.js\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/FarmMapGL/FarmMapGL */ \"./components/FarmMapGL/FarmMapGL.js\")],\n    modules: ['../components/FarmMapGL/FarmMapGL']\n  }\n});\n\nfunction HomePage() {\n  const {\n    0: searchValue,\n    1: setSearchValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: features,\n    1: setFeatures\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n\n  const onSubmit = async e => {\n    e.preventDefault();\n\n    try {\n      const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${\"pk.eyJ1IjoibWljaGFsc3RhY2huaWsiLCJhIjoiY2thdHVnOXRwMGVlaDJxb2M5bmVnbXVwYSJ9.PMitc9_GavR10drtsXbcDg\"}`);\n      const json = await res.json();\n      console.log('json: ', json);\n      setFeatures(json.features);\n    } catch (error) {\n      console.log('error sending request');\n      console.error(error);\n    }\n  };\n\n  const logState = () => {\n    console.log('log state');\n    console.log(features);\n    console.log(searchValue);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, \"Welcome to Farm Finder\"), __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    value: searchValue,\n    onChange: e => setSearchValue(e.target.value),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"Search\")), features.length ? features.map(feature => __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 37\n    }\n  }, feature.place_name)) : null, __jsx(\"button\", {\n    onClick: logState,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, \"log state\"), __jsx(FarmMapGL, {\n    features: features,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkZhcm1NYXBHTCIsImR5bmFtaWMiLCJzc3IiLCJIb21lUGFnZSIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJ1c2VTdGF0ZSIsImZlYXR1cmVzIiwic2V0RmVhdHVyZXMiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJsb2dTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwibWFwIiwiZmVhdHVyZSIsInBsYWNlX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsbURBQU8sQ0FBQyxNQUFNLDZKQUFQLEVBQW9EO0FBQzNFQyxLQUFHLEVBQUUsS0FEc0U7QUFBQTtBQUFBLHdDQUF0Qyw4RUFBc0M7QUFBQSxjQUF0QyxtQ0FBc0M7QUFBQTtBQUFBLENBQXBELENBQXpCOztBQUlBLFNBQVNDLFFBQVQsR0FBb0I7QUFDbEIsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLEVBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsRUFBRCxDQUF4Qzs7QUFFQSxRQUFNRyxRQUFRLEdBQUcsTUFBT0MsQ0FBUCxJQUFhO0FBQzVCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSTtBQUNGLFlBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3BCLHFEQUFvRFQsV0FBWSxzQkFBcUJVLG9HQUFnQixFQURqRixDQUF2QjtBQUdBLFlBQU1DLElBQUksR0FBRyxNQUFNSCxHQUFHLENBQUNHLElBQUosRUFBbkI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsSUFBdEI7QUFDQVAsaUJBQVcsQ0FBQ08sSUFBSSxDQUFDUixRQUFOLENBQVg7QUFDRCxLQVBELENBT0UsT0FBT1csS0FBUCxFQUFjO0FBQ2RGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0FELGFBQU8sQ0FBQ0UsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRixHQWREOztBQWdCQSxRQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQkgsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsUUFBWjtBQUNBUyxXQUFPLENBQUNDLEdBQVIsQ0FBWWIsV0FBWjtBQUNELEdBSkQ7O0FBTUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQUVFO0FBQU0sWUFBUSxFQUFFSyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFNBQUssRUFBRUwsV0FGVDtBQUdFLFlBQVEsRUFBR00sQ0FBRCxJQUFPTCxjQUFjLENBQUNLLENBQUMsQ0FBQ1UsTUFBRixDQUFTQyxLQUFWLENBSGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixDQUZGLEVBVUdkLFFBQVEsQ0FBQ2UsTUFBVCxHQUNHZixRQUFRLENBQUNnQixHQUFULENBQWNDLE9BQUQsSUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1BLE9BQU8sQ0FBQ0MsVUFBZCxDQUExQixDQURILEdBRUcsSUFaTixFQWFFO0FBQVEsV0FBTyxFQUFFTixRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLEVBZUUsTUFBQyxTQUFEO0FBQVcsWUFBUSxFQUFFWixRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsQ0FERjtBQW1CRDs7QUFFY0osdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgRmFybU1hcEdMID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvRmFybU1hcEdML0Zhcm1NYXBHTCcpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZmVhdHVyZXMsIHNldEZlYXR1cmVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9nZW9jb2RpbmcvdjUvbWFwYm94LnBsYWNlcy8ke3NlYXJjaFZhbHVlfS5qc29uP2FjY2Vzc190b2tlbj0ke3Byb2Nlc3MuZW52LktFWX1gXG4gICAgICApO1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygnanNvbjogJywganNvbik7XG4gICAgICBzZXRGZWF0dXJlcyhqc29uLmZlYXR1cmVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHNlbmRpbmcgcmVxdWVzdCcpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ1N0YXRlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdsb2cgc3RhdGUnKTtcbiAgICBjb25zb2xlLmxvZyhmZWF0dXJlcyk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoVmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5XZWxjb21lIHRvIEZhcm0gRmluZGVyPC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24+U2VhcmNoPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7ZmVhdHVyZXMubGVuZ3RoXG4gICAgICAgID8gZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiA8ZGl2PntmZWF0dXJlLnBsYWNlX25hbWV9PC9kaXY+KVxuICAgICAgICA6IG51bGx9XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ1N0YXRlfT5sb2cgc3RhdGU8L2J1dHRvbj5cbiAgICAgIHsvKiB7ZmVhdHVyZXMubGVuZ3RoID8gPEZhcm1NYXBHTCBmZWF0dXJlcz17ZmVhdHVyZXN9PjwvRmFybU1hcEdMPiA6IG51bGx9ICovfVxuICAgICAgPEZhcm1NYXBHTCBmZWF0dXJlcz17ZmVhdHVyZXN9PjwvRmFybU1hcEdMPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michal/Documents/farm-finder/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-map-gl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXAtZ2xcIj81YWIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LW1hcC1nbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hcC1nbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-map-gl\n");

/***/ })

/******/ });