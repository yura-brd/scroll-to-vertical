(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ScrollToVertical", [], factory);
	else if(typeof exports === 'object')
		exports["ScrollToVertical"] = factory();
	else
		root["ScrollToVertical"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/script.include.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/script.include.js":
/*!********************************!*\
  !*** ./demo/script.include.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _scrollTo = _interopRequireDefault(__webpack_require__(/*! ../src/scrollTo */ \"./src/scrollTo.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _scrollTo.default('.js_scroll_to', {\n  step: 30,\n  isBehavior: false,\n  eventType: 'click',\n  typeToScroll: 'href',\n  typeToScrollAdd: 48,\n  loadCallback: function loadCallback(that) {\n    console.group('loadCallback');\n    console.log(that);\n    console.groupEnd();\n  },\n  startEventCallback: function startEventCallback(event, that, $el, endPosition) {\n    console.group('startEventCallback');\n    console.log(event);\n    console.log(that);\n    console.log($el);\n    console.log(endPosition);\n    console.groupEnd();\n  },\n  beforeAnimationCallback: function beforeAnimationCallback(that, $el, endPosition) {\n    console.group('beforeAnimationCallback');\n    console.log(that);\n    console.log($el);\n    console.log(endPosition);\n    console.groupEnd();\n  },\n  afterAnimationCallback: function afterAnimationCallback(that) {\n    console.group('beforeAnimationCallback');\n    console.log(that);\n    console.groupEnd();\n  }\n});\nnew _scrollTo.default('.top', {\n  eventType: 'mouseover',\n  behavior: \"smooth\",\n  typeToScroll: 0\n});\nnew _scrollTo.default('.bottom', {\n  typeToScroll: function typeToScroll() {\n    return document.documentElement.scrollHeight;\n  }\n});\n\n//# sourceURL=webpack://ScrollToVertical/./demo/script.include.js?");

/***/ }),

/***/ "./src/polyfill.js":
/*!*************************!*\
  !*** ./src/polyfill.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (window.NodeList && !NodeList.prototype.forEach) {\n  NodeList.prototype.forEach = function (callback, thisArg) {\n    thisArg = thisArg || window;\n\n    for (var i = 0; i < this.length; i++) {\n      callback.call(thisArg, this[i], i, this);\n    }\n  };\n}\n\nif (!Array.prototype.fill) {\n  Object.defineProperty(Array.prototype, 'fill', {\n    value: function value(_value) {\n      if (this == null) {\n        throw new TypeError('this is null or not defined');\n      }\n\n      var O = Object(this);\n      var len = O.length >>> 0;\n      var start = arguments[1];\n      var relativeStart = start >> 0;\n      var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);\n      var end = arguments[2];\n      var relativeEnd = end === undefined ? len : end >> 0;\n      var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);\n\n      while (k < final) {\n        O[k] = _value;\n        k++;\n      }\n\n      return O;\n    }\n  });\n}\n\n//# sourceURL=webpack://ScrollToVertical/./src/polyfill.js?");

/***/ }),

/***/ "./src/scrollTo.js":
/*!*************************!*\
  !*** ./src/scrollTo.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n__webpack_require__(/*! ./polyfill.js */ \"./src/polyfill.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ScrollToVertical = /*#__PURE__*/function () {\n  function ScrollToVertical(selector) {\n    var _options$isBehavior;\n\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, ScrollToVertical);\n\n    this.selector = selector || '[href^=\"#\"]';\n    this.isBehavior = (_options$isBehavior = options.isBehavior) !== null && _options$isBehavior !== void 0 ? _options$isBehavior : true;\n    this.behavior = options.behavior || 'smooth';\n    this.STEP = options.step || 50;\n    this.typeToScrollAdd = typeof options.typeToScrollAdd === 'number' ? options.typeToScrollAdd : 0;\n    this.eventType = options.eventType || 'click';\n    this.supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style && this.isBehavior;\n    this.stepAnimation = this.stepAnimation.bind(this);\n\n    if (typeof options.typeToScroll === 'function') {\n      this.typeToScroll = options.typeToScroll.bind(this);\n    } else {\n      var _options$typeToScroll;\n\n      this.typeToScroll = (_options$typeToScroll = options.typeToScroll) !== null && _options$typeToScroll !== void 0 ? _options$typeToScroll : 'href';\n    }\n\n    this.loadCallback = options.loadCallback || null;\n    this.startEventCallback = options.startEventCallback || null;\n    this.beforeAnimationCallback = options.beforeAnimationCallback || null;\n    this.afterAnimationCallback = options.afterAnimationCallback || null;\n    this.scrollOption = {};\n    this.selector && this.init();\n  }\n\n  _createClass(ScrollToVertical, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var $elements = document.querySelectorAll(this.selector);\n      this.loadCallback && this.loadCallback(this);\n      $elements.forEach(function ($el) {\n        $el.addEventListener(_this.eventType, function (e) {\n          e.preventDefault();\n\n          if (typeof _this.typeToScroll === 'function') {\n            var endScroll = _this.typeToScroll(e, _this, $el) - _this.typeToScrollAdd;\n\n            _this.startEventCallback && _this.startEventCallback(e, _this, $el, endScroll);\n\n            _this.stepAnimationInit(endScroll, $el);\n          } else if (typeof _this.typeToScroll === 'number') {\n            _this.startEventCallback && _this.startEventCallback(e, _this, $el, _this.typeToScroll);\n\n            _this.stepAnimationInit(_this.typeToScroll - _this.typeToScrollAdd, $el);\n          } else {\n            var $scrollToElement = document.querySelector($el.getAttribute('href'));\n\n            var _endScroll = _this.findEndPosition($scrollToElement) - _this.typeToScrollAdd;\n\n            _this.startEventCallback && _this.startEventCallback(e, _this, $el, _endScroll);\n\n            _this.stepAnimationInit(_endScroll, $el);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"stepAnimationInit\",\n    value: function stepAnimationInit(toPos, $el) {\n      this.beforeAnimationCallback && this.beforeAnimationCallback(this, $el, toPos);\n      var currentScroll = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);\n      var itemsStep = this.crateSteps(currentScroll, toPos);\n\n      if (this.supportsNativeSmoothScroll) {\n        window.scrollTo({\n          top: toPos,\n          behavior: this.behavior\n        });\n      } else {\n        if (itemsStep.length) {\n          this.scrollOption = {\n            thisStep: 0,\n            limitScrollDown: document.body.scrollHeight - window.innerHeight + this.STEP,\n            itemsStep: itemsStep,\n            isDown: itemsStep[0] < itemsStep[1]\n          };\n          window.requestAnimationFrame(this.stepAnimation);\n        }\n      }\n    }\n  }, {\n    key: \"stepAnimation\",\n    value: function stepAnimation() {\n      window.scrollTo(0, this.scrollOption.itemsStep[this.scrollOption.thisStep]);\n      this.scrollOption.thisStep++;\n      var nestStep = this.scrollOption.itemsStep[this.scrollOption.thisStep];\n\n      if (nestStep || nestStep === 0) {\n        var isDownNext = true; // определенеи вниз + если есть куда крутить\n\n        if (this.scrollOption.isDown && nestStep > this.scrollOption.limitScrollDown) {\n          isDownNext = false;\n        }\n\n        if (isDownNext) {\n          requestAnimationFrame(this.stepAnimation);\n        } else {\n          this.afterAnimationCallback && this.afterAnimationCallback(this);\n        }\n      } else {\n        this.afterAnimationCallback && this.afterAnimationCallback(this);\n      }\n    }\n  }, {\n    key: \"findEndPosition\",\n    value: function findEndPosition(element) {\n      var res = 0;\n\n      function resVal() {\n        res += element.offsetTop;\n        element = element.offsetParent;\n\n        if (element) {\n          return resVal(element.offsetParent);\n        } else {\n          return res;\n        }\n      }\n\n      return resVal();\n    }\n  }, {\n    key: \"crateSteps\",\n    value: function crateSteps(start, end) {\n      var _this2 = this;\n\n      var reverse = -1;\n      var countStep = Math.round((start - end) / this.STEP);\n\n      if (start < end) {\n        countStep = Math.round((end - start) / this.STEP);\n        reverse = 1;\n      }\n\n      return new Array(countStep).fill('').map(function (item, ind) {\n        if (ind + 1 === countStep) {\n          return end;\n        } else {\n          return start + _this2.STEP * (ind + 1) * reverse;\n        }\n      });\n    }\n  }]);\n\n  return ScrollToVertical;\n}();\n\nvar _default = ScrollToVertical;\nexports.default = _default;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://ScrollToVertical/./src/scrollTo.js?");

/***/ })

/******/ });
});