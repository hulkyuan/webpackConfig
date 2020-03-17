/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"news": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/news.js","vendors~index~news","index~news"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.html */ \"./src/footer.html\");\n/* harmony import */ var _footer_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.html */ \"./src/header.html\");\n/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_html__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n(function () {\n    $('#header').append(_header_html__WEBPACK_IMPORTED_MODULE_2___default.a);\n    $('#footer').append(_footer_html__WEBPACK_IMPORTED_MODULE_1___default.a);\n    var url = 'news';\n    $('#header .links a.dynamic').each(function (index) {\n        if ($(this)[0].pathname.indexOf(url) >= 0) {\n            $(this).addClass('active');\n        }\n    })\n    var host = \"https://news.tsfinance.com.cn\";\n    var all = [];\n    $('.links>li').hover(\n        function () {\n            var target = $(this).find('.childContainer');\n            target.removeClass('hide');\n            var left = $(this).width() - target.width();\n            target.css('left', left / 2);\n            $(this).find('.childContainer').addClass(\"show\");\n        },\n        function () {\n            $(this).find('.childContainer').removeClass('show');\n            $(this).find('.childContainer').addClass(\"hide\");\n        }\n    );\n    getCategory(26);\n    function getCategory(catid) {\n        var catid = catid;\n        $.ajax(host + '/api.php?m=Json&a=getalllist&catid=' + catid, {\n            dataType: \"json\",\n            crossDomain: true,\n            success: function (data) {\n                var list = '';\n                data.sort(function (a, b) {\n                    return b.updatetime - a.updatetime;\n                })\n                for (var i = 0; i < data.length; i++) {\n                    var time = new Date();\n                    time.setTime(data[i].updatetime * 1000);\n\n                    var title = \"\";\n                    var color = \"\";\n                    switch (data[i].catid) {\n                        case '27':\n                            title = \"公司新闻\";\n                            color = \"blue\";\n                            break;\n                        case '28':\n                            title = \"行业观点\";\n                            color = \"orange\";\n                            break;\n                        case '32':\n                            title = \"市场观察\";\n                            color = \"purple\";\n                            break;\n                    }\n                    var date = time.getFullYear() + \"-\" + (time.getMonth() + 1) + \"-\" + time.getDate();\n                    list += '<div class=\"item \">'\n                        + '<div class=\"left col-xs-12 col-md-6\">'\n                        + '<div class=\"cat\">'\n                        + '<div class=\"circle ' + color + '\"></div>'\n                        + title + '</div>'\n                        + '<div class=\"title\">'\n                        + '<a href=\"' + \"./content.html?id=\" + data[i].id + '&catid=' + data[i].catid + '\" target=\"_self\">' + data[i].title + '</a>'\n                        + '</div>'\n                        + '<div class=\"desc\">' + data[i].description + '</div>'\n                        + '<div class=\"more hidden-xs\">'\n                        + '<a href=\"' + \"./content.html?id=\" + data[i].id + '&catid=' + data[i].catid + '\" target=\"_self\">'\n                        + '<img src=\"/images/news/more.png\"/>'\n                        + '</a>'\n                        + '<span class=\"date\">' + date + '</span>'\n                        + '</div>'\n                        + '</div>'\n                        + '<div class=\"right col-xs-12  col-md-6\">'\n                        + '<img src=' + data[i].thumb + ' />'\n                        + '</div>'\n                        + '</div>'\n\n                }\n                $(\".list\").html(list);\n            }\n        });\n    }\n\n})();\n(function (w, d, n, a, j) {\n    w[n] = w[n] || function () {\n        (w[n].a = w[n].a || []).push(arguments);\n    };\n    j = d.createElement('script');\n    j.async = true;\n    j.src = 'https://qiyukf.com/script/61b5bec5f72b78b7a6bc598344c01c63.js';\n    d.body.appendChild(j);\n})(window, document, 'ysf');\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/news.js?");

/***/ })

/******/ });