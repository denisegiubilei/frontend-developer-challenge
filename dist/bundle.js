/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ProductCard/Constants.js":
/*!*************************************************!*\
  !*** ./src/components/ProductCard/Constants.js ***!
  \*************************************************/
/*! exports provided: ADDTOCART_TEXT, IMG_FALLBACK_SRC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADDTOCART_TEXT\", function() { return ADDTOCART_TEXT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMG_FALLBACK_SRC\", function() { return IMG_FALLBACK_SRC; });\nvar ADDTOCART_TEXT = 'Comprar';\nvar IMG_FALLBACK_SRC = 'https://via.placeholder.com/200x200.jpg';\n\n//# sourceURL=webpack:///./src/components/ProductCard/Constants.js?");

/***/ }),

/***/ "./src/components/ProductCard/ProductCard.js":
/*!***************************************************!*\
  !*** ./src/components/ProductCard/ProductCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/components/ProductCard/Constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\n\n\nvar ProductCard = function ProductCard(p) {\n  var hasDiscount = p.oldPrice && p.price && p.oldPrice > p.price;\n\n  var installments = function installments() {\n    return p.installments && p.installments.count && p.installments.value ? \"ou \".concat(p.installments.count, \"x de \").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"currencyFmt\"])(p.installments.value)) : '';\n  };\n\n  return \"<div id=\\\"pid-\".concat(p.id, \"\\\" class=\\\"card\\\">\\n        <img src=\\\"\").concat(p.image, \"\\\" alt=\\\"\").concat(p.name, \"\\\" onerror=\\\"this.src='\").concat(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"IMG_FALLBACK_SRC\"], \"'\\\" class=\\\"product-img\\\">\\n        <p>\").concat(p.name, \"</p>\\n        <p>\").concat(p.description, \"</p>\\n        <p>\").concat(hasDiscount && 'De: ' + Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"currencyFmt\"])(p.oldPrice), \"</p>\\n        <p class=\\\"price\\\">\").concat(hasDiscount && 'Por: ').concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"currencyFmt\"])(p.price), \"</p>\\n        <p>\").concat(installments(), \"</p>\\n        <button class=\\\"addtocart button\\\">\").concat(_Constants__WEBPACK_IMPORTED_MODULE_0__[\"ADDTOCART_TEXT\"], \"</button>\\n    </div> \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\n\n//# sourceURL=webpack:///./src/components/ProductCard/ProductCard.js?");

/***/ }),

/***/ "./src/components/ProductCard/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProductCard/index.js ***!
  \*********************************************/
/*! exports provided: ProductCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCard */ \"./src/components/ProductCard/ProductCard.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ProductCard\", function() { return _ProductCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/ProductCard/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api-service */ \"./src/services/api-service.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProductCard */ \"./src/components/ProductCard/index.js\");\n\n\nvar queryString = window.location.search;\nvar urlParams = new URLSearchParams(queryString);\nvar nextPage = urlParams.get('page') || 1;\n\nvar updateQueryString = function updateQueryString(key, value) {\n  if ('URLSearchParams' in window) {\n    var searchParams = new URLSearchParams(window.location.search);\n    searchParams.set(key, value);\n    var newPath = window.location.pathname + '?' + searchParams.toString();\n    history.pushState(null, '', newPath);\n  }\n};\n\nvar populateProductList = function populateProductList(page) {\n  var container = document.getElementById('products-container');\n  Object(_services_api_service__WEBPACK_IMPORTED_MODULE_0__[\"products\"])(page).then(function (products) {\n    return container.innerHTML += products && Object.values(products).map(function (product) {\n      return Object(_components_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"ProductCard\"])(product);\n    }).join('');\n  });\n};\n\nvar loadNextPage = function loadNextPage() {\n  updateQueryString(\"page\", nextPage);\n  populateProductList(nextPage);\n  nextPage++;\n};\n\nwindow.onload = function () {\n  var nextPageBtn = document.getElementById('next-page');\n\n  nextPageBtn.onclick = function () {\n    return loadNextPage();\n  };\n\n  loadNextPage();\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/services/api-service.js":
/*!*************************************!*\
  !*** ./src/services/api-service.js ***!
  \*************************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"products\", function() { return products; });\nvar API_ENDPOINT = 'https://frontend-intern-challenge-api.iurykrieger.now.sh';\n\nvar products = function products(page) {\n  return fetch(\"\".concat(API_ENDPOINT, \"/products\"), {\n    qs: {\n      page: page\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    return data && data.products;\n  })[\"catch\"](function (err) {\n    return console.error(err);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/services/api-service.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: currencyFmt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currencyFmt\", function() { return currencyFmt; });\nvar currencyFmt = function currencyFmt(price) {\n  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pt-BR';\n  var currency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'BRL';\n  return price && price.toLocaleString(locale, {\n    currency: currency,\n    style: 'currency'\n  });\n};\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ })

/******/ });