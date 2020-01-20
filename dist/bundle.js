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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api-service */ \"./src/services/api-service.js\");\n\nvar IMG_FALLBACK_SRC = 'https://via.placeholder.com/200x200.jpg';\nvar queryString = window.location.search;\nvar urlParams = new URLSearchParams(queryString);\nvar nextPageNumber = urlParams.get('page') || 1;\n\nvar populateProductList = function populateProductList(pageNumber) {\n  var container = document.getElementById('products-container');\n  Object(_services_api_service__WEBPACK_IMPORTED_MODULE_0__[\"products\"])(pageNumber).then(function (products) {\n    return container.innerHTML += products && Object.values(products).map(function (product) {\n      return productCard(product);\n    }).join('');\n  });\n};\n\nvar productCard = function productCard(product) {\n  var _product$installments = product.installments,\n      count = _product$installments.count,\n      value = _product$installments.value;\n  var installments = count && value ? \"ou \".concat(count, \"x de \").concat(currencyFormat(value)) : '';\n  var hasDiscount = product.oldPrice > product.price;\n  return \"<div id=\\\"pid-\".concat(product.id, \"\\\" class=\\\"card\\\">\\n        <img src=\\\"\").concat(product.image, \"\\\" alt=\\\"\").concat(product.name, \"\\\" onerror=\\\"this.src='\").concat(IMG_FALLBACK_SRC, \"'\\\" class=\\\"product-img\\\">\\n        <p>\").concat(product.name, \"</p>\\n        <p>\").concat(product.description, \"</p>\\n        <p>\").concat(hasDiscount && 'De: ' + currencyFormat(product.oldPrice), \"</p>\\n        <p class=\\\"price\\\">\").concat(hasDiscount && 'Por: ').concat(currencyFormat(product.price), \"</p>\\n        <p>\").concat(installments, \"</p>\\n        <button class=\\\"addtocart button\\\">Comprar</button>\\n    </div> \");\n};\n\nvar currencyFormat = function currencyFormat(price) {\n  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pt-BR';\n  var currency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'BRL';\n  return price && price.toLocaleString(locale, {\n    currency: currency,\n    style: 'currency'\n  });\n};\n\nvar loadNextPage = function loadNextPage() {\n  updateQueryString('page', nextPageNumber);\n  populateProductList(nextPageNumber);\n  nextPageNumber++;\n};\n\nvar updateQueryString = function updateQueryString(key, value) {\n  if ('URLSearchParams' in window) {\n    var searchParams = new URLSearchParams(window.location.search);\n    searchParams.set(key, value);\n    var newPath = window.location.pathname + '?' + searchParams.toString();\n    history.pushState(null, '', newPath);\n  }\n};\n\nvar submitNewsletter = function submitNewsletter(e) {\n  e.preventDefault();\n  var form = e.target;\n  var submitBtn = form.querySelector('input[type=submit');\n\n  if (form.checkValidity()) {\n    submitBtn.value = '... Salvando';\n    var newsletterUser = {\n      'name': form.name.value,\n      'email': form.email.value\n    };\n    Object(_services_api_service__WEBPACK_IMPORTED_MODULE_0__[\"addUser\"])(newsletterUser).then(function () {\n      return submitBtn.value = 'Usuário salvo! :)';\n    });\n  }\n};\n\nwindow.onload = function () {\n  var newsletterForm = document.getElementById('newsletter-form');\n  var nextPageBtn = document.getElementById('next-page');\n\n  newsletterForm.onsubmit = function (e) {\n    return submitNewsletter(e);\n  };\n\n  nextPageBtn.onclick = function () {\n    return loadNextPage();\n  };\n\n  loadNextPage();\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/services/api-service.js":
/*!*************************************!*\
  !*** ./src/services/api-service.js ***!
  \*************************************/
/*! exports provided: products, addUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"products\", function() { return products; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addUser\", function() { return addUser; });\nvar API_ENDPOINT = 'https://frontend-intern-challenge-api.iurykrieger.now.sh';\n\nvar products = function products(page) {\n  return fetch(\"\".concat(API_ENDPOINT, \"/products\"), {\n    qs: {\n      page: page\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    return data && data.products;\n  })[\"catch\"](function (err) {\n    return console.error(err);\n  });\n};\n\nvar addUser = function addUser(user) {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      resolve(console.log(user));\n    }, 2000);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/services/api-service.js?");

/***/ })

/******/ });