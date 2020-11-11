/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // setting


	// Util


	// model


	// events

	// import UpdateList from '_MyLibs/View/Events/EventMgr/UpdateList.es6';
	// import ResizeList from '_MyLibs/View/Events/EventMgr/ResizeList.es6';

	// import MouseList from '_MyLibs/View/Events/EventMgr/MouseList.es6';

	// view


	var _Conf = __webpack_require__(1);

	var _Conf2 = _interopRequireDefault(_Conf);

	var _Util = __webpack_require__(2);

	var _Util2 = _interopRequireDefault(_Util);

	var _Func = __webpack_require__(11);

	var _Func2 = _interopRequireDefault(_Func);

	var _Debugger = __webpack_require__(12);

	var _Debugger2 = _interopRequireDefault(_Debugger);

	var _Controller = __webpack_require__(13);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _Controller3 = __webpack_require__(19);

	var _Controller4 = _interopRequireDefault(_Controller3);

	var _ResourceMgr = __webpack_require__(22);

	var _ResourceMgr2 = _interopRequireDefault(_ResourceMgr);

	var _UpdateMgr = __webpack_require__(25);

	var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);

	var _ResizeMgr = __webpack_require__(26);

	var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);

	var _ScrollMgr = __webpack_require__(27);

	var _ScrollMgr2 = _interopRequireDefault(_ScrollMgr);

	var _MouseMgr = __webpack_require__(28);

	var _MouseMgr2 = _interopRequireDefault(_MouseMgr);

	var _ScrollList = __webpack_require__(29);

	var _ScrollList2 = _interopRequireDefault(_ScrollList);

	var _JudgeEnvironment = __webpack_require__(17);

	var _JudgeEnvironment2 = _interopRequireDefault(_JudgeEnvironment);

	var _View = __webpack_require__(30);

	var _View2 = _interopRequireDefault(_View);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Common = function () {
	  function Common() {
	    _classCallCheck(this, Common);

	    this.onImmediate();
	    this.setEvents();
	  }

	  _createClass(Common, [{
	    key: "onImmediate",
	    value: function onImmediate() {
	      // ------------------------------------------------------------
	      //  初期値の設定・データの配置
	      //  util関数の初期化
	      //  イベントマネージャーの設置
	      // ------------------------------------------------------------
	      // setting
	      gb.conf = new _Conf2.default();

	      // util
	      gb.d = new _Debugger2.default();
	      gb.u = new _Util2.default();
	      gb.f = new _Func2.default();

	      new _JudgeEnvironment2.default();

	      if (gb.conf.isUpdateMgr) gb.up = new _UpdateMgr2.default();
	      if (gb.conf.isResizeMgr) gb.r = new _ResizeMgr2.default();

	      window.updates = [];
	      this.onReady();
	    }
	  }, {
	    key: "onReady",
	    value: function onReady() {
	      // ------------------------------------------------------------
	      //  View
	      // ------------------------------------------------------------
	      // Layout, UI, Effects
	      gb.v = new _View2.default();
	    }
	  }, {
	    key: "onLoad",
	    value: function onLoad() {
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	      // ------------------------------------------------------------
	      //  Model
	      // ------------------------------------------------------------
	      // ------------------------------------------------------------
	      //  View
	      // ------------------------------------------------------------
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      $(window).on("load", this.onLoad.bind(this));
	    }
	  }]);

	  return Common;
	}();

	// ------------------------------------------------------------
	//
	//  Main
	//
	// ------------------------------------------------------------


	exports.default = Common;
	(function () {
	  // // globalオブジェクト
	  if (window.gb === undefined) window.gb = {};

	  gb.common = new Common();

	  if (gb.up) gb.up.loop(); //全体のループスタート
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  Config
	//
	// ------------------------------------------------------------

	var Conf = function Conf() {
	  _classCallCheck(this, Conf);

	  // ------------------------------------------------------------
	  //  本番フラグ
	  // ------------------------------------------------------------
	  this.RELEASE = true;
	  // this.RELEASE = false;

	  // ------------------------------------------------------------
	  //  フラグ関連
	  // ------------------------------------------------------------
	  // ログ出力, パラメータ, Stars
	  this.LOG = true;
	  this.PARAM = true;
	  this.Profiler = true;
	  this.LOADING = true;
	  this.OPENING = false;
	  this.EFFECT = false;
	  this.INERTIA = false;

	  // Event
	  this.isUpdateMgr = true;
	  this.isResizeMgr = true;
	  this.isScrollMgr = true;
	  this.isMouseMgr = true;

	  if (this.RELEASE) {
	    this.LOG = false;
	    this.PARAM = false;
	    this.Profiler = false;
	    this.LOADING = true;
	    this.OPENING = false;
	    this.EFFECT = false;
	    this.INERTIA = false;
	  }

	  // ------------------------------------------------------------
	  //  basic width height
	  // ------------------------------------------------------------
	  // viewport size
	  this.vDefW = window.innerWidth;
	  this.vDefH = window.innerHeight;
	  this.vW = window.innerWidth;
	  this.vH = window.innerHeight;
	  this.vSPW = window.innerWidth;
	  this.vSPH = window.innerHeight;

	  // target size
	  this.DefW = 1300;
	  this.DefH = 850;
	  this.W = 1200;
	  this.H = 750;
	  this.SPW = 375;
	  this.SPH = 667;

	  // ------------------------------------------------------------
	  //  ブレイクポイント
	  // ------------------------------------------------------------
	  this.bp00 = 375;
	  this.bp01 = 768;
	  this.bp02 = 1080;
	  this.bp03 = 1280;

	  // ------------------------------------------------------------
	  //  レティナ対応
	  // ------------------------------------------------------------
	  this.isRetina = window.devicePixelRatio && window.devicePixelRatio > 1 ? true : false;

	  // ------------------------------------------------------------
	  //
	  //  resource
	  //
	  // ------------------------------------------------------------

	  // ------------------------------------------------------------
	  //  API
	  // ------------------------------------------------------------
	  // this.APIData = APIData();
	  this.APIURL = './setting.xml';

	  // ------------------------------------------------------------
	  //  URL
	  // ------------------------------------------------------------
	  // this.URLData = URLData();

	  // ------------------------------------------------------------
	  //  sound data
	  // ------------------------------------------------------------
	  // this.soundData = SoundData();

	  // ------------------------------------------------------------
	  //  video
	  // ------------------------------------------------------------
	  // this.videoData = videoData();

	  // ------------------------------------------------------------
	  //  img
	  // ------------------------------------------------------------
	  // this.imgData = imgData();

	  // ------------------------------------------------------------
	  //  web font loaded
	  // ------------------------------------------------------------
	  // this.webFontLoaded = false;

	  // ------------------------------------------------------------
	  //
	  //  Ohter
	  //
	  // ------------------------------------------------------------
	  this.isFirst = true;

	  this.isSound = true;
	};

	exports.default = Conf;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Array = __webpack_require__(3);

	var _Array2 = _interopRequireDefault(_Array);

	var _Color = __webpack_require__(4);

	var _Color2 = _interopRequireDefault(_Color);

	var _DateClass = __webpack_require__(5);

	var _DateClass2 = _interopRequireDefault(_DateClass);

	var _Device = __webpack_require__(6);

	var _Device2 = _interopRequireDefault(_Device);

	var _Math = __webpack_require__(7);

	var _Math2 = _interopRequireDefault(_Math);

	var _Other = __webpack_require__(8);

	var _Other2 = _interopRequireDefault(_Other);

	var _String = __webpack_require__(9);

	var _String2 = _interopRequireDefault(_String);

	var _Url = __webpack_require__(10);

	var _Url2 = _interopRequireDefault(_Url);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // ------------------------------------------------------------
	//
	//  Util
	//
	// ------------------------------------------------------------

	var Util = function Util() {
	  _classCallCheck(this, Util);

	  this.a = new _Array2.default();
	  this.c = new _Color2.default();
	  this.d = new _DateClass2.default();
	  this.dv = new _Device2.default();
	  this.m = new _Math2.default();
	  this.o = new _Other2.default();
	  this.s = new _String2.default();
	  this.u = new _Url2.default();
	};

	exports.default = Util;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  Array
	//
	// ------------------------------------------------------------

	var Array = function () {
	  function Array() {
	    _classCallCheck(this, Array);
	  }

	  // ------------------------------------------------------------
	  //
	  //  Array
	  //
	  // ------------------------------------------------------------

	  // 配列内のランダムな値をひとつ取得
	  // -----------------------------------
	  // @arr : 配列
	  // return : 配列内の値
	  // -----------------------------------


	  _createClass(Array, [{
	    key: "arrRand",
	    value: function arrRand(arr) {

	      return arr[gb.u.m.randomInt(0, arr.length - 1)];
	    }

	    // 配列をランダムに並べ替え
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // -----------------------------------

	  }, {
	    key: "shuffle",
	    value: function shuffle(ary) {

	      var arr = [];
	      arr = ary.slice();
	      var i = arr.length;
	      while (i) {
	        var j = Math.floor(Math.random() * i);
	        var t = arr[--i];
	        arr[i] = arr[j];
	        arr[j] = t;
	      }
	      return arr;
	    }

	    // ランダムな数値を作る

	  }, {
	    key: "randomArr",
	    value: function randomArr(len) {

	      var arr = [];

	      for (var i = 0; i < len; i++) {
	        arr.push(i);
	      }arr = this.shuffle(arr);

	      return arr;
	    }

	    // nullを削除した配列を返す
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // return : null削除した配列(Array)
	    // -----------------------------------

	  }, {
	    key: "sliceNull",
	    value: function sliceNull(arr) {

	      var i, l, len1, newArr, val;
	      newArr = [];
	      for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
	        val = arr[i];
	        if (val !== null) {
	          newArr.push(val);
	        }
	      }
	      return newArr;
	    }

	    // 配列内のパラメータを比較してソート
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // @para : パラメーター名
	    // @desc : 降順かどうか(boolean) デフォルトは昇順
	    // -----------------------------------

	  }, {
	    key: "sort",
	    value: function sort(arr, para, desc) {
	      if (desc === void 0) {
	        desc = false;
	      }
	      if (desc) {
	        return arr.sort(function (a, b) {
	          return b[para] - a[para];
	        });
	      } else {
	        return arr.sort(function (a, b) {
	          return a[para] - b[para];
	        });
	      }
	    }
	  }, {
	    key: "getKey",
	    value: function getKey(list, value) {
	      var returnKey = [];
	      for (var key in list) {
	        if (list[key] == value) {
	          returnKey.push(key);
	        }
	      }
	      return returnKey;
	    }
	  }]);

	  return Array;
	}();

	exports.default = Array;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  Color
	//
	// ------------------------------------------------------------

	var Color = function () {
	    function Color() {
	        _classCallCheck(this, Color);
	    }

	    // rgbからHEX(16進数)カラー取得
	    // -----------------------------------
	    // @r : 0~255
	    // @g : 0~255
	    // @b : 0~255
	    // return : ex "#FFFFFF"
	    // -----------------------------------


	    _createClass(Color, [{
	        key: "getHexColor",
	        value: function getHexColor(r, g, b) {
	            var str;
	            str = (r << 16 | g << 8 | b).toString(16);
	            return "#" + new Array(7 - str.length).join("0") + str;
	        }

	        // rgbからhslへ

	    }, {
	        key: "rgbToHsl",
	        value: function rgbToHsl(r, g, b) {
	            r /= 255;
	            g /= 255;
	            b /= 255;

	            var max = Math.max(r, g, b);
	            var min = Math.min(r, g, b);
	            var h, s, l;

	            l = (max + min) / 2;

	            if (max === min) {
	                h = s = 0;
	            } else {
	                var d = max - min;
	                switch (max) {
	                    case r:
	                        h = ((g - b) / d * 60 + 360) % 360;break;
	                    case g:
	                        h = (b - r) / d * 60 + 120;break;
	                    case b:
	                        h = (r - g) / d * 60 + 240;break;
	                }
	                s = l <= 0.5 ? d / (max + min) : d / (2 - max - min);
	            }

	            return [h, s * 100, l * 100];
	        }

	        // hslからrgbへ

	    }, {
	        key: "hslToRgb",
	        value: function hslToRgb(h, s, l) {
	            s /= 100;
	            l /= 100;

	            var r, g, b;

	            if (s === 0) {
	                r = g = b = l * 255;
	            } else {
	                var v2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
	                var v1 = 2 * l - v2;
	                r = Math.round(hueToRgb(v1, v2, h + 120) * 255);
	                g = Math.round(hueToRgb(v1, v2, h) * 255);
	                b = Math.round(hueToRgb(v1, v2, h - 120) * 255);
	            }

	            return [r, g, b];
	        }
	    }]);

	    return Color;
	}();

	exports.default = Color;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  DateClass
	//
	// ------------------------------------------------------------

	var DateClass = function () {
	  function DateClass() {
	    _classCallCheck(this, DateClass);

	    this.startTime = null;
	    this.elapsedTime = null;
	    this.now = new Date();
	  }

	  _createClass(DateClass, [{
	    key: "getNow",
	    value: function getNow() {

	      this.now = new Date();
	    }
	  }, {
	    key: "start",
	    value: function start() {

	      this.now = new Date();
	      this.startTime = this.now.getTime();
	    }
	  }, {
	    key: "elapsed",
	    value: function elapsed() {

	      this.now = new Date();
	      return this.elapsedTime = this.now.getTime() - this.startTime;
	    }
	  }, {
	    key: "m",
	    value: function m() {

	      this.elapsed();
	      return Math.floor(this.elapsedTime + 100 / 60);
	    }
	  }, {
	    key: "s",
	    value: function s() {

	      this.elapsed();
	      return Math.floor(this.elapsedTime / 1000);
	    }
	  }, {
	    key: "ms",
	    value: function ms() {

	      this.elapsed();
	      return this.elapsedTime;
	    }
	  }, {
	    key: "time",
	    value: function time() {

	      this.getNow();

	      this.hour = this.now.getHours(); // 時
	      this.minute = this.now.getMinutes(); // 分
	      this.second = this.now.getSeconds();
	    }
	  }, {
	    key: "date",
	    value: function date() {

	      return this.now.getDate();
	    }
	  }, {
	    key: "months",
	    value: function months() {

	      var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	      return this.now.getMonth() + 1;
	    }
	  }, {
	    key: "year",
	    value: function year() {

	      return this.now.getFullYear();
	    }
	  }, {
	    key: "day",
	    value: function day() {

	      // 曜日 (日本語)
	      var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
	      var wDJ = weekDayJP[this.now.getDay()];

	      // 曜日 (英語)
	      var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	      var wDE = weekDayEN[this.now.getDay()];
	    }

	    // 数日後のDateオブジェクト取得
	    // -----------------------------------

	  }, {
	    key: "afterDay",
	    value: function afterDay(date, num) {

	      return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
	    }
	  }]);

	  return DateClass;
	}();

	exports.default = DateClass;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  Device
	//
	// ------------------------------------------------------------

	var Device = function () {
	  function Device() {
	    _classCallCheck(this, Device);

	    this.ua = window.navigator.userAgent.toLowerCase(); //useragent
	    this.appV = window.navigator.appVersion.toLowerCase(); //appVersion
	    this.isRes = null;
	    this.isResSP = null; // responsive sp
	    this.isResPC = null; // responsive pc

	    this.isPC = null;
	    this.isSP = null;
	    this.isTAB = null;
	    this.isMB = null;
	    this.isIE = false;

	    this.isSetSPSize = false;
	  }

	  // ------------------------------------------------------------
	  //
	  //  device
	  //
	  // ------------------------------------------------------------

	  _createClass(Device, [{
	    key: "isDeviceSP",
	    value: function isDeviceSP() {

	      var media = ["iphone", "ipod", "ipad", "android", "dream", "cupcake", "blackberry9500", "blackberry9530", "blackberry9520", "blackberry9550", "blackberry9800", "webos", "incognito", "webmate"];
	      var pattern = new RegExp(media.join("|"), "i");

	      var b = pattern.test(this.ua);
	      if (b) $('body').addClass('isDeviceSP');

	      this.isSP = b;
	    }
	  }, {
	    key: "isDeviceTAB",
	    value: function isDeviceTAB() {

	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("touch") != -1 || this.ua.indexOf("ipad") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") == -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("tablet") != -1 || this.ua.indexOf("kindle") != -1 || this.ua.indexOf("silk") != -1 || this.ua.indexOf("playbook") != -1;
	      if (b) $('body').addClass('isDeviceTAB');

	      this.isTAB = b;
	    }
	  }, {
	    key: "isDeviceMB",
	    value: function isDeviceMB() {

	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("phone") != -1 || this.ua.indexOf("iphone") != -1 || this.ua.indexOf("ipod") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("blackberry") != -1;
	      if (b) $('body').addClass('isDeviceMB');

	      this.isMB = b;
	    }
	  }, {
	    key: "isDevicePC",
	    value: function isDevicePC() {

	      if (!(this.isSP || this.isTAB || this.isMB)) {

	        $('body').addClass('isDevicePC');
	        this.isPC = true;
	        return;
	      }

	      this.isPC = false;
	    }
	  }, {
	    key: "setEventString",
	    value: function setEventString() {

	      this.eClick = this.isTab || this.isSP ? 'touchstart' : 'click';
	      this.eStart = this.isTab || this.isSP ? 'touchstart' : 'mousedown';
	      this.eEnd = this.isTab || this.isSP ? 'touchend' : 'mouseup';
	      this.eMove = this.isTab || this.isSP ? 'touchmove' : 'mousemove';

	      this.eEnter = this.isTab || this.isSP ? 'touchstart' : 'mouseenter';
	      this.eLeave = this.isTab || this.isSP ? 'touchend' : 'mouseleave';
	      this.eOver = this.isTab || this.isSP ? 'touchstart' : 'mouseover';
	      this.eOut = this.isTab || this.isSP ? 'touchend' : 'mouseout';

	      this.eWheel = this.isTab || this.isSP ? 'touchmove' : 'mousewheel';
	      this.eScroll = this.isTab || this.isSP ? 'touchmove' : 'scroll';
	    }

	    // スマフォ判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isSmt",
	    value: function isSmt() {

	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;
	    }

	    // タブレット端末かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isTablet",
	    value: function isTablet() {

	      return this.isIpad() || this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1;
	    }

	    // iPad判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isIpad",
	    value: function isIpad() {

	      return navigator.userAgent.indexOf('iPad') > 0;
	    }

	    // ------------------------------------------------------------
	    //
	    //  OS
	    //
	    // ------------------------------------------------------------

	    // Android判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isAndroid",
	    value: function isAndroid() {

	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;
	    }
	  }, {
	    key: "isiPhone",
	    value: function isiPhone() {
	      var pattern = new RegExp("iphone", "i");
	      return pattern.test(this.ua);
	    }

	    // iOS判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isIos",
	    value: function isIos() {

	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;
	    }

	    // PS3判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isPs3",
	    value: function isPs3() {

	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PLAYSTATION 3') > 0;
	    }

	    // VITA判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isVita",
	    value: function isVita() {

	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PlayStation Vita') > 0;
	    }

	    // ------------------------------------------------------------
	    //
	    //  browser
	    //
	    // ------------------------------------------------------------

	  }, {
	    key: "isBrowserCheck",
	    value: function isBrowserCheck() {

	      this.isIEVersion();
	      this.isEdge();
	      this.isChrome();
	      this.isFF();
	      this.isSafari();
	      this.isOpera();
	      this.isIOSNotSfari();
	      this.isAPPBrowser();
	    }

	    // IEかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isIe",
	    value: function isIe() {

	      var ua;
	      ua = window.navigator.userAgent.toLowerCase();
	      return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
	    }

	    // WINかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isWin",
	    value: function isWin() {

	      return navigator.platform.indexOf("Win") !== -1;
	    }

	    // googleChromeかどうか pcのみ
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isChrome",
	    value: function isChrome() {

	      if (this.ua.indexOf('chrome') !== -1) {

	        $('body').addClass('isChorme');
	        return true;
	      } else {

	        return false;
	      }
	    }

	    // FireFoxかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isFF",
	    value: function isFF() {

	      if (this.ua.indexOf('firefox') !== -1) {

	        $('body').addClass('isFF');
	        return true;
	      } else {

	        return false;
	      }
	    }
	  }, {
	    key: "isSafari",
	    value: function isSafari() {

	      if (!this.isChrome() && this.ua.indexOf("lunascape") == -1) {

	        var pattern = new RegExp("safari", "i");
	        if (pattern.test(this.ua)) {

	          $('body').addClass('isSafari');
	          return true;
	        } else {

	          return false;
	        }
	      } else {

	        return false;
	      }
	    }
	  }, {
	    key: "isOpera",
	    value: function isOpera() {

	      var pattern = new RegExp("opera", "i");
	      if (pattern.test(this.ua)) {

	        $('body').addClass('isOpera');
	        return true;
	      } else {

	        return false;
	      }
	    }

	    // iOSのsafari以外かどうか spでsafariかsafariでないか(chromeかandroidの標準ブラウザか)を判定したい場合はこちらを使う
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isIOSNotSfari",
	    value: function isIOSNotSfari() {

	      if (this.isIos() && this.ua.indexOf('safari') === -1 || this.isIos() && this.ua.indexOf('crios') > 0 || this.isIos() && this.ua.indexOf('gsa') > 0) {

	        $('body').addClass('isIOSNotSafari');
	        // alert('isIOSNotSafari');
	        return true;
	      } else {

	        $('html').addClass('isIOSSafari');
	        // alert('isSafari');
	        return false;
	      }
	    }
	  }, {
	    key: "isAPPBrowser",
	    value: function isAPPBrowser() {

	      // debug
	      // var r01 = this.ua.indexOf("fban/fbios;fbav") !== -1;
	      // var r02 = this.ua.indexOf("twitter") !== -1;

	      // // $('body').prepend(String(r01));
	      // // $('body').prepend(String(r02));

	      // // alert(r01);
	      // // alert(r02);

	      if (this.ua.indexOf("fban/fbios;fbav") !== -1 || this.ua.indexOf("twitter") !== -1) {

	        $('body').addClass('isAPPBrowser');
	        return true;
	      } else {

	        return false;
	      }
	    }

	    // ------------------------------------------------------------
	    //
	    //  version
	    //
	    // ------------------------------------------------------------
	    // IE8以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isIe8Under",
	    value: function isIe8Under() {

	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 8 && msie !== 0;
	    }

	    // IE9以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isIe9Under",
	    value: function isIe9Under() {

	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 9 && msie !== 0;
	    }

	    // IE10以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isIe10Under",
	    value: function isIe10Under() {

	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 10 && msie !== 0;
	    }

	    // IE11以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isIe11Under",
	    value: function isIe11Under() {

	      var b = this.isIe10Under() || this.ua.indexOf("trident") != -1;
	      return b;
	      // return true;
	    }

	    // edgeかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "isEdge",
	    value: function isEdge() {

	      log(this.ua.indexOf("AppleWebkit"), this.ua.indexOf("Edge"), this.ua, this.appV);
	      var b = this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1;

	      if (b) $('body').addClass('isEdge');

	      return b;
	      // return true;
	    }
	  }, {
	    key: "isIEVersion",
	    value: function isIEVersion() {

	      $('body').addClass('isIE');
	      this.isIE = true;

	      if (this.appV.indexOf("msie 10.") != -1) {
	        $('body').addClass('isIE10');
	        return 'ie10';
	      } else if (this.appV.indexOf("msie 9.") != -1) {
	        $('body').addClass('isIE9');
	        return 'ie9';
	      } else if (this.appV.indexOf("msie 8.") != -1) {
	        $('body').addClass('isIE8');
	        return 'ie8';
	      } else if (this.appV.indexOf("msie 7.") != -1) {
	        $('body').addClass('isIE7');
	        return 'ie7';
	      } else if (this.appV.indexOf("msie 6.") != -1) {
	        $('body').addClass('isIE6');
	        return 'ie6';
	      } else if (this.appV.indexOf("trident") != -1) {
	        $('body').addClass('isIE11');
	        return 'ie11';
	      }

	      $('body').removeClass('isIE');
	      this.isIE = false;
	      return 'notIE';
	    }
	  }, {
	    key: "isAndroidVersion",
	    value: function isAndroidVersion() {

	      if (this.ua.indexOf("android") > 0) {

	        var version = parseFloat(this.ua.slice(this.ua.indexOf("android") + 8));
	        return version;
	      }
	    }
	  }, {
	    key: "isiphoneVersion",
	    value: function isiphoneVersion() {

	      if (this.ua.indexOf("iPhone OS") > 0) {

	        var version = parseFloat(this.ua.slice(this.ua.indexOf("iPhone OS") + 10));
	        return version;
	      }
	    }

	    // ------------------------------------------------------------
	    //
	    //  portrait / landscape
	    //
	    // ------------------------------------------------------------

	  }, {
	    key: "isDirection",
	    value: function isDirection() {

	      var W = window.innerWidth,
	          H = window.innerHeight;

	      if (H > W) {
	        $("body").addClass("portrait");
	        $("body").removeClass("landscape");
	      } else {
	        $("body").addClass("landscape");
	        $("body").removeClass("portrait");
	      }
	    }

	    // ------------------------------------------------------------
	    //
	    //  responsive 横幅を見る
	    //
	    // ------------------------------------------------------------

	  }, {
	    key: "isResponsive",
	    value: function isResponsive() {
	      var bp00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 375 - 1;
	      var bp01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 960;
	      var bp02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
	      var bp03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1280 + 1;


	      var W = window.innerWidth,
	          H = window.innerHeight;

	      // ブレイクしたときに一度だけイベントを発行する
	      if (W > bp00 && this.isRes == 'sp-s') $(window).trigger('sp_s_sp');
	      if (W <= bp00 && this.isRes == 'sp') $(window).trigger('sp_sp_s');
	      if (W > bp01 && this.isRes == 'sp') $(window).trigger('sp_tab');
	      if (W <= bp01 && this.isRes == 'tab') $(window).trigger('tab_sp');
	      if (W > bp02 && this.isRes == 'tab') $(window).trigger('tab_pc');
	      if (W <= bp02 && this.isRes == 'pc') $(window).trigger('pc_tab');
	      if (W > bp03 && this.isRes == 'pc') $(window).trigger('pc_pc_w');
	      if (W <= bp03 && this.isRes == 'pc-w') $(window).trigger('pc_w_pc');

	      // isRes
	      if (W <= bp00) this.isRes = 'sp-s';
	      if (W > bp00 && W <= bp01) this.isRes = 'sp';
	      if (W > bp01 && W <= bp02) this.isRes = 'tab';
	      if (W > bp02 && W <= bp03) this.isRes = 'pc';
	      if (W > bp03) this.isRes = 'pc-w';

	      // isResPC, isResSP
	      if (W > bp01) {
	        this.isResSP = false;
	        this.isResPC = true;
	        $('body').removeClass('isResponsiveSP');
	        $('body').addClass('isResponsivePC');
	      } else {
	        this.isResSP = true;
	        this.isResPC = false;
	        $('body').addClass('isResponsiveSP');
	        $('body').removeClass('isResponsivePC');
	      }

	      log(this.isResSP, this.isResPC);
	    }

	    // ------------------------------------------------------------
	    //
	    //  user agentでpc,sp振り分け
	    //
	    // ------------------------------------------------------------

	  }, {
	    key: "isPCSP",
	    value: function isPCSP(urlPC, urlSP) {

	      var url = location.href;

	      if (!this.isPC && !this.isTAB && url.indexOf('pc') != -1) {

	        location.href = urlSP;
	      }

	      if (this.isPC && url.indexOf('pc') == -1) {

	        location.href = urlPC;
	      }

	      if (this.isTAB && url.indexOf('pc') == -1) {

	        location.href = urlPC;
	      }
	    }
	  }]);

	  return Device;
	}();

	exports.default = Device;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  MyMath
	//
	// ------------------------------------------------------------

	var MyMath = function () {
	  function MyMath() {
	    _classCallCheck(this, MyMath);
	  }

	  // ランダムな整数を取得
	  // -----------------------------------
	  // @min : 最小値(int)
	  // @max : 最大値(int)
	  // return : minからmaxまでのランダムな整数(int)
	  // -----------------------------------


	  _createClass(MyMath, [{
	    key: "randomInt",
	    value: function randomInt(min, max) {

	      return Math.floor(Math.random() * (max + 1 - min) + min);
	    }

	    // ランダムな整数を2つの範囲から取得
	    // -----------------------------------
	    // @min1 : 最小値1(int)
	    // @max1 : 最大値1(int)
	    // @min2 : 最小値2(int)
	    // @max2 : 最大値2(int)
	    // return : minからmaxまでのランダムな整数(int)
	    // -----------------------------------

	  }, {
	    key: "random2",
	    value: function random2(min1, max1, min2, max2) {

	      if (this.hit(2)) {
	        return this.randomInt(min1, max1);
	      } else {
	        return this.randomInt(min2, max2);
	      }
	    }

	    // 1/@rangeの確率でtrueを取得
	    // -----------------------------------
	    // @range : 母数(int)
	    // return : true or false(boolean)
	    // -----------------------------------

	  }, {
	    key: "hit",
	    value: function hit(range) {

	      return this.randomInt(0, range - 1) === 0;
	    }

	    // 0から範囲内でランダムな整数を取得
	    // -----------------------------------
	    // @val : 範囲(int)
	    // return : ランダムな整数(int)
	    // -----------------------------------

	  }, {
	    key: "range",
	    value: function range(val) {

	      return this.randomInt(-val, val);
	    }

	    // 値をマッピング
	    // -----------------------------------
	    // @num : マッピングする値(Number)
	    // @resMin : 結果となる値の最小値(Number)
	    // @resMax : 結果となる値の最大値(Number)
	    // @baseMin : 元となる値の最小値(Number)
	    // @baseMax : 元となる値の最大値(Number)
	    // return : マッピングされた値(Number)
	    // -----------------------------------

	  }, {
	    key: "map",
	    value: function map(num, resMin, resMax, baseMin, baseMax) {

	      var p;
	      if (num < baseMin) {
	        return resMin;
	      }
	      if (num > baseMax) {
	        return resMax;
	      }
	      p = (resMax - resMin) / (baseMax - baseMin);

	      return (num - baseMin) * p + resMin;
	    }
	  }, {
	    key: "demical",
	    value: function demical(v) {
	      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


	      // 計算 ( Math.pow( 10, 4 ) = 10000 )
	      var val = Math.floor(v * Math.pow(10, n)) / Math.pow(10, n);

	      return val;
	    }
	  }, {
	    key: "float",
	    value: function float(v) {
	      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


	      return v.toFixed(n);
	    }

	    // 数値に小数点第@n位までをつけた文字列を返す
	    // -----------------------------------
	    // @num : 値(Number)
	    // @n : 小数点の位(int)
	    // return : 変換された値(String)
	    // -----------------------------------
	    // decimal(num, n) {
	    //   var i, pos;
	    //   num = String(num);
	    //   pos = num.indexOf(".");
	    //   if (n === 0) {
	    //     return num.split(".")[0];
	    //   }
	    //   if (pos === -1) {
	    //     num += ".";
	    //     i = 0;
	    //     while (i < n) {
	    //       num += "0";
	    //       i++;
	    //     }
	    //     return num;
	    //   }
	    //   num = num.substr(0, pos) + num.substr(pos, n + 1);
	    //   return num;
	    // }

	  }, {
	    key: "clamp",
	    value: function clamp(val, min, max, minVal, maxVal) {

	      if (val < min) val = minVal == undefined ? min : minVal;else if (val > max) val = maxVal == undefined ? max : maxVal;

	      return val;
	    }
	  }, {
	    key: "rate",
	    value: function rate(val, base) {

	      var v = val / base;

	      return v;
	    }
	  }, {
	    key: "lerp",
	    value: function lerp(val01, val02, val) {

	      val = val < 0 ? 0 : val;
	      val = val > 1 ? 1 : val;
	      return val01 + (val02 - val01) * val;
	    }
	  }, {
	    key: "degree",
	    value: function degree(radians) {

	      return radians * 180 / Math.PI; //1ラジアンが何度か
	    }

	    // to radians

	  }, {
	    key: "radian",
	    value: function radian(angle) {

	      return angle * Math.PI / 180; //1度何ラジアンか
	    }
	  }, {
	    key: "dist",
	    value: function dist(p1, p2) {

	      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	    }
	  }, {
	    key: "ascend",
	    value: function ascend(arr) {

	      arr.sort(function (a, b) {
	        if (a > b) return -1;
	        if (a < b) return 1;
	        return 0;
	      });
	      // var a = [5,3,9,1,10]
	      // 結果:10,9,5,3,1

	      return arr;
	    }
	  }, {
	    key: "descend",
	    value: function descend(arr) {

	      arr.sort(function (a, b) {
	        if (a < b) return -1;
	        if (a > b) return 1;
	        return 0;
	      });

	      // var a = [5,3,9,1,10]
	      // 結果:1,3,5,9,10

	      return arr;
	    }

	    // map(value, min01, max01, min02, max02) {

	    //   var dis01 = max01 - min01;
	    //   var dis02 = max02 - min02

	    //   var rate = dis02 / dis01;

	    //   value = value * rate;

	    //   return value;
	    // }

	  }, {
	    key: "constrain",
	    value: function constrain(value, min, max) {

	      return Math.min(max, Math.max(value, min));

	      // if (value <= low) value = low;
	      // if (value >= high) value = high;     
	      // return value;
	    }
	  }]);

	  return MyMath;
	}();

	exports.default = MyMath;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  Other
	//
	// ------------------------------------------------------------

	var Other = function () {
	  function Other() {
	    _classCallCheck(this, Other);
	  }

	  // ------------------------------------------------------------
	  //  getPageID
	  // ------------------------------------------------------------


	  _createClass(Other, [{
	    key: 'getPageID',
	    value: function getPageID() {

	      this.pageID = $('body').attr('id');
	    }

	    // ------------------------------------------------------------
	    //
	    //  Data type check
	    //
	    // ------------------------------------------------------------

	  }, {
	    key: 'isObject',
	    value: function isObject(value, ignoreArray) {
	      return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
	    }
	  }, {
	    key: 'isNumber',
	    value: function isNumber(value) {
	      return typeof value === 'number';
	    }
	  }, {
	    key: 'isString',
	    value: function isString(value) {
	      return typeof value === 'string';
	    }
	  }, {
	    key: 'isFunction',
	    value: function isFunction(value) {
	      return typeof value === 'function';
	    }
	  }, {
	    key: 'isArray',
	    value: function isArray(value) {
	      return Object.prototype.toString.call(value) === '[object Array]';
	    }
	  }, {
	    key: 'isNull',
	    value: function isNull(value) {
	      return value === null;
	    }
	  }, {
	    key: 'isUndefined',
	    value: function isUndefined(value) {
	      return typeof value === 'undefined';
	    }

	    // ------------------------------------------------------------
	    //
	    //  other
	    //
	    // ------------------------------------------------------------

	  }, {
	    key: 'setImgSPSize',
	    value: function setImgSPSize($target) {

	      // responsive spのとき処理
	      // if (!this.isResSP) return;
	      // 一度だけ処理
	      if (this.isSetSPSize) return;
	      this.isSetSPSize = true;

	      var $img = $target,
	          len = $img.length;

	      $img.each(function (i) {

	        var w = Math.floor($(this).width() / 2),
	            h = Math.floor($(this).height() / 2);

	        $(this).attr({
	          'width': w,
	          'height': h
	        });

	        if (len == i + 1) $(window).trigger('setSpZieEnd');
	      });
	    }

	    // ------------------------------------------------------------
	    //  スマホ操作無効
	    // ------------------------------------------------------------

	  }, {
	    key: 'notMove',
	    value: function notMove() {
	      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	      var $wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('#wrapper');


	      if (flag) {

	        $wrap.on('touchstart.noControl touchmove.noControl touchend.noControl', function (e) {
	          e.preventDefault();
	        });

	        // this.f = (e)=>{e.preventDefault();};
	        // document.addEventListener('touchmove', this.f, { passive: false });
	      } else {

	        $wrap.off('touchstart.noControl touchmove.noControl touchend.noControl');

	        // document.removeEventListener('touchmove', this.f, false);
	      }

	      // this.offNotMove();

	      // $(window).on('touchstart.noControl touchmove.noControl touchend.noControl click.noControl', function(e){e.preventDefault();});
	    }

	    // offNotMove() {

	    //   $(window).off('touchstart.noControl touchmove.noControl touchend.noControl');
	    //   // $(window).off('touchstart.noControl touchmove.noControl touchend.noControl click.noControl');

	    // }

	    // notMove(flag=true) {

	    //   if (flag) {

	    //     this.f = (e)=>{e.preventDefault();};

	    //     document.addEventListener('touchmove', this.f, { passive: false });

	    //   } else {

	    //     log('off',this.f)

	    //     document.removeEventListener('touchmove', this.f, false);

	    //   }

	    // }

	    // notMove() {

	    //   this.offNotMove();

	    //   this.f = (e)=>{e.preventDefault();};

	    //   document.addEventListener('touchmove', this.f.bind(this), { passive: false });

	    // }

	    // offNotMove() {


	    //   log(111,this.f);
	    //   if (this.f) {
	    //     log(111,this.f);
	    //     document.removeEventListener('touchmove', this.f.bind(this));  
	    //   }

	    // }


	  }, {
	    key: 'setPreventMousemove',
	    value: function setPreventMousemove() {

	      var self = this;

	      this.removePrevent();
	      $(window).on('touchmove.noControl', function (e) {
	        e.preventDefault();
	      });
	    }
	  }, {
	    key: 'preventDefault',
	    value: function preventDefault(e) {

	      e = e || window.event;
	      if (e.preventDefault) e.preventDefault();
	      e.returnValue = false;
	    }
	  }, {
	    key: 'preventDefaultForScrollKeys',
	    value: function preventDefaultForScrollKeys(e) {

	      if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	      }
	    }
	  }, {
	    key: 'disableScroll',
	    value: function disableScroll($target) {

	      if ($target.get(0).addEventListener) // older FF
	        $target.get(0).addEventListener('DOMMouseScroll', this.preventDefault, false);
	      $target.get(0).onwheel = this.preventDefault; // modern standard
	      $target.get(0).onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
	      $target.get(0).ontouchmove = this.preventDefault; // mobile
	      // document.onkeydown  = this.preventDefaultForScrollKeys;
	    }
	  }, {
	    key: 'enableScroll',
	    value: function enableScroll($target) {

	      if ($target.get(0).removeEventListener) $target.get(0).removeEventListener('DOMMouseScroll', this.preventDefault, false);
	      $target.get(0).onmousewheel = document.onmousewheel = null;
	      $target.get(0).onwheel = null;
	      $target.get(0).ontouchmove = null;
	      document.onkeydown = null;
	    }

	    // 全画面

	  }, {
	    key: 'full',
	    value: function full() {

	      var b = document.body;
	      // var b = document.getElementById("wrapper")
	      // var b = document.getElementsByClassName('menu03');

	      if (b.requestFullScreen) {
	        b.requestFullScreen();
	      } else if (b.webkitRequestFullScreen) {
	        b.webkitRequestFullScreen();
	      } else if (b.mozRequestFullScreen) {
	        b.mozRequestFullScreen();
	      } else if (b.msRequestFullscreen) {
	        b.msRequestFullscreen();
	      } else {
	        alert('ご利用のブラウザはフルスクリーン操作に対応していません');
	        return;
	      }
	    }
	  }]);

	  return Other;
	}();

	exports.default = Other;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  String
	//
	// ------------------------------------------------------------

	var String = function () {
	  function String() {
	    _classCallCheck(this, String);
	  }

	  _createClass(String, [{
	    key: "isContain",
	    value: function isContain(str, contain) {

	      // strの中に,containが存在したら
	      if (str.indexOf(contain) != -1) {
	        return true;
	      }

	      return false;
	    }

	    // 0埋めで2桁にする関数

	  }, {
	    key: "add0",
	    value: function add0(str) {
	      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -2;


	      return ("000000000000" + str).substr(num);
	    }

	    // 値段表記
	    // -----------------------------------

	  }, {
	    key: "price",
	    value: function price(num) {

	      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	    }

	    // 文字列を反転
	    // -----------------------------------
	    // @str : 文字列(String)
	    // return : 文字列(String)
	    // -----------------------------------

	  }, {
	    key: "strReverse",
	    value: function strReverse(str) {

	      var i, len, res;
	      res = "";
	      len = str.length;
	      i = 1;
	      while (i <= len) {
	        res += str.substr(-i, 1);
	        i++;
	      }
	      return res;
	    }

	    // 文字列の全置換
	    // -----------------------------------
	    // @val  : 文字列
	    // @oeg  : 置換前の文字列
	    // @dest : 置換後の文字列
	    // -----------------------------------

	  }, {
	    key: "replaceAll",
	    value: function replaceAll(val, org, dest) {

	      return val.split(org).join(dest);
	    }
	  }, {
	    key: "strReplace",
	    value: function strReplace(str, before, after) {

	      var r = new RegExp(before, 'g');

	      return str.replace(r, after);
	    }

	    // ユニークIDを取得
	    // -----------------------------------

	  }, {
	    key: "unique",
	    value: function unique() {

	      return new Date().getTime();
	    }
	  }]);

	  return String;
	}();

	exports.default = String;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  Url
	//
	// ------------------------------------------------------------

	var Url = function () {
	  function Url() {
	    _classCallCheck(this, Url);
	  }

	  // クエリ抜き出し


	  _createClass(Url, [{
	    key: 'getParam',
	    value: function getParam() {

	      var url = location.href;
	      var param = url.split('?')[1];
	      if (param == undefined) return undefined;
	      var paramItems = param.split('&');
	      var list = {};

	      for (var i = 0; i < paramItems.length; i++) {

	        paramItem = paramItems[i].split('=');
	        list[paramItem[0]] = paramItem[1];
	      }

	      return list;
	    }
	  }, {
	    key: 'setParam',
	    value: function setParam(text) {

	      window.history.pushState('', '', '?' + text);
	    }

	    // ハッシュ取得
	    // -----------------------------------
	    // return : location.hashの#を削除したやつ
	    // -----------------------------------

	  }, {
	    key: 'hash',
	    value: function hash() {

	      return location.hash.replace("#", "");
	    }
	  }, {
	    key: 'getHash',
	    value: function getHash() {

	      return location.hash;
	    }
	  }, {
	    key: 'setHash',
	    value: function setHash(text) {

	      location.hash = text;
	    }

	    // 指定したstringがクッキーにセットされていたらtrue

	  }, {
	    key: 'checkCookie',
	    value: function checkCookie(str) {

	      var flag = null;

	      if ($.cookie(str) == undefined || $.cookie(str) == '') flag = false;else flag = true;

	      return flag;
	    }

	    // 指定したstringがクッキーにセットされていたらtrue

	  }, {
	    key: 'getCookie',
	    value: function getCookie(str) {

	      if ($.cookie(str) == undefined || $.cookie(str) == '') return null;else return $.cookie(str);
	    }
	  }, {
	    key: 'setCookie',
	    value: function setCookie(str, val, period) {

	      var p = period || 5 * 1000; // 5秒
	      // var p = period || 30 * 1000; // 30秒
	      // var p = period || 15 * 60 * 1000; // 15分
	      // var p = period || 7 * 24 * 60 * 60 * 1000; //7日
	      var date = new Date();
	      date.setTime(date.getTime() + p);

	      $.cookie(str, val, { expires: date, path: '/' });
	    }

	    // ------------------------------------------------------------
	    //  host,protcol
	    // ------------------------------------------------------------

	  }, {
	    key: 'protocol',
	    value: function protocol() {

	      return location.protocol;
	    }
	  }, {
	    key: 'host',
	    value: function host() {

	      return location.hostname;
	      // return location.host
	    }
	  }, {
	    key: 'port',
	    value: function port() {

	      return location.port;
	    }
	  }, {
	    key: 'path',
	    value: function path() {

	      return location.pathname;
	    }
	  }]);

	  return Url;
	}();

	exports.default = Url;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  Func
	//
	// ------------------------------------------------------------

	var Func = function () {
	  function Func() {
	    _classCallCheck(this, Func);

	    this.blank();
	    this.requestAnimationFrame();
	    this.scrollRestoration(false);
	    this.checkPassive();
	  }

	  _createClass(Func, [{
	    key: 'blank',
	    value: function blank() {

	      $(function () {
	        $('.blank').attr('target', '_blank');
	      });
	    }
	  }, {
	    key: 'scrollRestoration',
	    value: function scrollRestoration() {
	      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


	      // スクロール位置を元の位置に戻す
	      if (bool) {

	        window.history.scrollRestoration = 'auto';

	        // スクロール位置を必ず一番上に
	      } else {

	        window.history.scrollRestoration = 'manual';
	      }
	    }
	  }, {
	    key: 'requestAnimationFrame',
	    value: function requestAnimationFrame() {

	      var FPS = 1000 / 60;

	      window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
	      window.mozRequestAnimationFrame || // 古いfirefox用
	      window.webkitRequestAnimationFrame || // safari6以前、iOS6 safari用
	      function (callback) {
	        window.setTimeout(callback, FPS);
	      };

	      window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function (timer) {
	        window.clearTimeout(timer);
	      };
	    }

	    // smart phone 全画面

	  }, {
	    key: 'SPH',
	    value: function SPH() {
	      var _this = this;

	      var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');


	      if (gb.u.dv.isPC) return;

	      var r = function r() {
	        clearTimeout(_this.Timer);
	        _this.Timer = setTimeout(function () {
	          var adjust = 0;
	          if ($('body').hasClass('landscape')) adjust = 200;
	          $target.innerHeight(gb.r.h + adjust);
	        }, 100);
	      };

	      r();

	      // $(window).on('resize', r);
	      $(window).on('orientationchange', r);
	    }
	  }, {
	    key: 'checkCssBlend',
	    value: function checkCssBlend() {

	      if ('CSS' in window && 'supports' in window.CSS) {
	        if (!window.CSS.supports('mix-blend-mode', 'soft-light')) {
	          document.documentElement.classList.add('not-mix-blend-mode');
	        }
	      }

	      log(gb.u.isIE);

	      if (gb.u.isIE) {

	        document.documentElement.classList.add('not-mix-blend-mode');
	      };
	    }
	  }, {
	    key: 'notSaveImg',
	    value: function notSaveImg() {

	      // ------------------------------------------------------------
	      //
	      //  pc
	      //
	      // ------------------------------------------------------------

	      if (gb.u.isPC) {

	        $(function () {
	          $("img").on("contextmenu", function () {
	            return false;
	          });
	        });
	      }

	      // ------------------------------------------------------------
	      //
	      //  sp android
	      //
	      // ------------------------------------------------------------
	      var v = gb.u.isAndroidVersion();

	      if (v == undefined) return;
	      if (v < 5) {

	        var timer;
	        $("img").on("touchstart", function () {
	          timer = setTimeout(function () {
	            alert("画像は保存できません");
	          }, 500);
	          return false;
	        });
	        $("img").on("touchend", function () {
	          clearTimeout(timer);
	          return false;
	        });
	      }
	    }
	  }, {
	    key: 'smartRollover',
	    value: function smartRollover($target) {
	      var off = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_off.';
	      var on = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_on.';


	      var $images = $target;

	      for (var i = 0; i < $images.length; i++) {

	        if ($images.eq(i).get(0).getAttribute("src").match(off)) {

	          log(111);

	          $images.eq(i).get(0).onmouseover = function () {
	            this.setAttribute("src", this.getAttribute("src").replace(off, on));
	          };
	          $images.eq(i).get(0).onmouseout = function () {
	            this.setAttribute("src", this.getAttribute("src").replace(on, off));
	          };
	        }
	      }
	    }
	  }, {
	    key: 'checkPassive',
	    value: function checkPassive() {

	      // check passive 
	      var supportsPassive = false;
	      try {
	        // getter として opts.passive を定義して、 addEventListener 内で呼ばれたことがわかるようにする
	        var opts = Object.defineProperty({}, 'passive', {
	          get: function get() {
	            // 内部で opts.passive が呼ばれたら対応ブラウザ
	            // 用意しておいたフラグを有効にする
	            supportsPassive = true;
	          }
	        });
	        // 試しに適当なイベントを補足し、 opts.passive が呼ばれるか試す
	        window.addEventListener("test", null, opts);
	        window.removeEventListener("test", null, opts);
	      } catch (e) {}

	      window.addEventListenerWithOptions = function (target, type, handler, options) {
	        var optionsOrCapture = options;
	        if (!supportsPassive) {
	          // 非対応ブラウザでは、他のオプションは全て捨て
	          // { capture: bool } の値を useCapture の値として採用する
	          optionsOrCapture = options.capture;
	        }
	        //
	        target.addEventListener(type, handler, optionsOrCapture);
	      };
	    }
	  }]);

	  return Func;
	}();

	exports.default = Func;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  Debugger
	//
	// ------------------------------------------------------------

	var Debugger = function () {
	  function Debugger() {
	    _classCallCheck(this, Debugger);

	    this.setup();
	    this.setEvents();
	  }

	  _createClass(Debugger, [{
	    key: 'setup',
	    value: function setup() {

	      this.console(); // console
	    }

	    // html外出し用

	  }, {
	    key: 'setupHTML',
	    value: function setupHTML() {

	      // 本番だったら、div追加しない
	      if (!gb.conf.LOG) return;

	      this.$target = $('<div class="debug"></div>');

	      this.$target.prependTo($('body')).css({
	        position: 'fixed',
	        'z-index': 99999,
	        left: 20,
	        top: 20
	      });
	    }

	    // log系を短く

	  }, {
	    key: 'console',
	    value: function (_console) {
	      function console() {
	        return _console.apply(this, arguments);
	      }

	      console.toString = function () {
	        return _console.toString();
	      };

	      return console;
	    }(function () {

	      // 置換対象のメソッドを配列として保持する
	      var methods = ['log'];

	      // consoleが使えない場合は空のオブジェクトを設定しておく
	      if (typeof window.console === "undefined") {
	        window.console = {};
	      }

	      // 各メソッドをwindowへ直接追加して行く
	      for (var i in methods) {
	        (function (m) {

	          // consoleにある？デバッグモードは有効？consoleのものは関数？
	          if (console[m] && typeof console[m] === "function" && gb.conf.LOG) {
	            window[m] = console[m].bind(console);
	          } else {
	            // debugModeがfalse,もしくは該当メソッドが存在しない場合は、空のメソッドを用意する
	            window[m] = function () {};
	          }
	        })(methods[i]);
	      }
	    })

	    // htmlに外出し

	  }, {
	    key: 'html',
	    value: function html(v) {

	      // 本番だったら、div追加しない
	      if (!gb.conf.LOG) return;

	      this.$target.text(v);
	    }

	    // alert

	  }, {
	    key: 'alert',
	    value: function alert(v) {

	      window.alert(v);
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {

	      this.setupHTML();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {

	      $(document).on('ready', this.onReady.bind(this));
	    }
	  }]);

	  return Debugger;
	}();

	exports.default = Debugger;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var _UrlParamMgr = __webpack_require__(14);

	var _UrlParamMgr2 = _interopRequireDefault(_UrlParamMgr);

	var _JudgeEnvironment = __webpack_require__(17);

	var _JudgeEnvironment2 = _interopRequireDefault(_JudgeEnvironment);

	var _Profiler = __webpack_require__(18);

	var _Profiler2 = _interopRequireDefault(_Profiler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);

	    this.setup();
	    this.setEvents();
	  }

	  _createClass(Controller, [{
	    key: 'setup',
	    value: function setup() {

	      // page id
	      gb.pageID = $('body').attr('id');

	      // UrlParam パラメータ調整用
	      gb.urlp = new _UrlParamMgr2.default();

	      // デバイス確認
	      gb.je = new _JudgeEnvironment2.default();

	      if (gb.conf.Profiler) new _Profiler2.default(); // Profiler
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);

	  return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	var _Keys = __webpack_require__(16);

	var _Keys2 = _interopRequireDefault(_Keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
	//
	//  UrlParamMgr
	//
	// ------------------------------------------------------------

	var UrlParamMgr = function (_Base) {
	  _inherits(UrlParamMgr, _Base);

	  function UrlParamMgr() {
	    _classCallCheck(this, UrlParamMgr);

	    var _this = _possibleConstructorReturn(this, (UrlParamMgr.__proto__ || Object.getPrototypeOf(UrlParamMgr)).call(this));

	    _this.name = 'UrlParamMgr';

	    _this.keys = (0, _Keys2.default)();

	    _this.setParam();
	    _this.getParam();

	    return _this;
	  }

	  _createClass(UrlParamMgr, [{
	    key: 'setParam',
	    value: function setParam() {}
	  }, {
	    key: 'getParam',
	    value: function getParam() {

	      var params = location.search.replace('?', '').split('&');

	      // データの設定
	      for (var i = 0, len = params.length; i < len; i++) {

	        // 各キー、バリューを取得
	        var param = params[i];
	        var p = param.split('=');
	        var key = p[0],
	            value = p[1];

	        // データと比較して設定
	        for (var j = 0; j < this.keys.length; j++) {

	          var obj = this.keys[j];

	          // パラメータがキーと一緒だったら
	          if (obj.key === key) {

	            // 各値と比較
	            for (var k = 0; k < obj.value.length; k++) {

	              var val = obj.value[k];

	              // キーをthis.keysのkeyに、valueを比較して同値だったものに
	              if (val === value) {
	                this[obj.key] = val;
	                break;
	                // anyは、どの値でも
	              } else if (val == 'any') {
	                this[obj.key] = value;
	                break;
	                // anyでも、特定の値でもなければ、def値を入れる
	              } else {
	                this[obj.key] = obj.def;
	              }
	            };
	          }
	        };
	      }

	      // キーに値が設定されてなければ、def値を設定
	      for (var j = 0; j < this.keys.length; j++) {

	        var obj = this.keys[j];

	        if (this[obj.key] == undefined) this[obj.key] = obj.def;
	      }
	    }
	  }]);

	  return UrlParamMgr;
	}(_Base3.default);

	exports.default = UrlParamMgr;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ------------------------------------------------------------
	//
	//  Base
	//
	// ------------------------------------------------------------

	var Base = function () {
	  function Base() {
	    _classCallCheck(this, Base);

	    this.name = 'Base';

	    this.isUEv = false; // update
	    this.isREv = false; // resize
	    this.isSEv = false; // scroll
	    this.isMEv = false; // mouse
	    this.prevent = true;

	    this.isloop = true;
	  }

	  _createClass(Base, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'loop',
	    value: function loop() {

	      if (this.isloop) {

	        this.update();
	        this.draw();

	        this.Timer = requestAnimationFrame(this.loop.bind(this));
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {}
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {

	      var self = this;

	      if (this.isUEv) this.loop();
	      if (this.isREv) $(window).on('resize' + '.' + this.name, this.onResize.bind(this));
	      if (this.isSEv) $(window).on('scroll' + '.' + this.name, this.onScroll.bind(this));
	      if (this.isMEv) $(window).on('touchmove' + '.' + this.name, function (e) {
	        self.onMouseMove.call(self, e);
	        if (self.prevent) e.preventDefault();
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {

	      if (this.isUEv) {
	        this.isloop = false;
	        cancelAnimationFrame(this.Timer);
	      }
	      if (this.isREv) $(window).off('resize' + '.' + this.name);
	      if (this.isSEv) $(window).off('scroll' + '.' + this.name);
	      if (this.isMEv) $(window).off('touchmove' + '.' + this.name);
	    }
	  }, {
	    key: 'onU',
	    value: function onU() {

	      this.isUEv = true;
	      this.isloop = true;
	      this.loop();
	    }
	  }, {
	    key: 'offU',
	    value: function offU() {

	      this.isloop = false;
	      if (this.isUEv) cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: 'offR',
	    value: function offR() {

	      if (this.isREv) $(window).off('resize' + '.' + this.name);
	    }
	  }, {
	    key: 'offS',
	    value: function offS() {

	      if (this.isSEv) $(window).off('scroll' + '.' + this.name);
	    }
	  }, {
	    key: 'offM',
	    value: function offM() {

	      if (this.isMEv) $(window).off('touchmove' + '.' + this.name);
	    }
	  }]);

	  return Base;
	}();

	exports.default = Base;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = function data() {

	  return [{
	    'key': 'mode',
	    'def': 'visual',
	    'value': ['visual', 'ui', 'util', 'inspection']
	  }, {
	    'key': 'num',
	    'def': '01',
	    'value': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
	  }, {
	    'key': 'effect',
	    'def': '01',
	    'value': ['01', '02']
	  }, {
	    'key': 'move',
	    'def': 'add',
	    'value': ['add', 'easing']
	  }, {
	    'key': 'pattern',
	    'def': '2',
	    'value': ['1', '2', '3', '4', '5']
	  }, {
	    'key': 'param03',
	    'def': '3',
	    'value': ['any']
	  }];
	};

	exports.default = data;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  JudgeEnvironment
	//
	//--------------------------------------------------

	var JudgeEnvironment = function (_Base) {
	  _inherits(JudgeEnvironment, _Base);

	  function JudgeEnvironment() {
	    _classCallCheck(this, JudgeEnvironment);

	    var _this = _possibleConstructorReturn(this, (JudgeEnvironment.__proto__ || Object.getPrototypeOf(JudgeEnvironment)).call(this));

	    _this.name = 'JudgeEnvironment';

	    _this.isUEv = false; // update
	    _this.isREv = true; // resize
	    _this.isSEv = false; // scroll
	    _this.isMEv = false; // mouse

	    _this.setup();
	    _this.setEvents();

	    return _this;
	  }

	  _createClass(JudgeEnvironment, [{
	    key: 'setup',
	    value: function setup() {

	      this.isREv = true;

	      // デバイス判定
	      gb.u.dv.isDeviceSP();
	      gb.u.dv.isDeviceTAB();
	      gb.u.dv.isDeviceMB();
	      gb.u.dv.isDevicePC();
	      gb.u.dv.setEventString();

	      // ブラウザ判定
	      gb.u.dv.isBrowserCheck();

	      // responsive / portrait / landscape
	      gb.u.dv.isDirection();
	      gb.u.dv.isResponsive(gb.conf.bp00, gb.conf.bp01, gb.conf.bp02, gb.conf.bp03);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {

	      gb.u.dv.isDirection.call(gb.u.dv);
	      gb.u.dv.isResponsive.call(gb.u.dv, gb.conf.bp00, gb.conf.bp01, gb.conf.bp02, gb.conf.bp03);
	    }
	  }]);

	  return JudgeEnvironment;
	}(_Base3.default);

	exports.default = JudgeEnvironment;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Profiler
	//
	//--------------------------------------------------

	var Profiler = function (_Base) {
	  _inherits(Profiler, _Base);

	  function Profiler() {
	    _classCallCheck(this, Profiler);

	    var _this = _possibleConstructorReturn(this, (Profiler.__proto__ || Object.getPrototypeOf(Profiler)).call(this));

	    _this.name = 'Profiler';

	    _this.isUEv = true; // update

	    _this.setup();
	    _this.setEvents();

	    return _this;
	  }

	  _createClass(Profiler, [{
	    key: 'setup',
	    value: function setup() {

	      this.Stats = new Stats();
	      this.Stats.domElement.style.position = "fixed";
	      this.Stats.domElement.style.left = "0px";
	      this.Stats.domElement.style.top = "0px";
	      document.body.appendChild(this.Stats.domElement);
	    }
	  }, {
	    key: 'update',
	    value: function update() {

	      if (this.Stats) this.Stats.update();
	    }
	  }]);

	  return Profiler;
	}(_Base3.default);

	exports.default = Profiler;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	var _Events = __webpack_require__(20);

	var _Events2 = _interopRequireDefault(_Events);

	var _Render_def = __webpack_require__(21);

	var _Render_def2 = _interopRequireDefault(_Render_def);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  ReadyMgr
	//
	//--------------------------------------------------

	var ReadyMgr = function (_Base) {
	  _inherits(ReadyMgr, _Base);

	  function ReadyMgr() {
	    _classCallCheck(this, ReadyMgr);

	    var _this = _possibleConstructorReturn(this, (ReadyMgr.__proto__ || Object.getPrototypeOf(ReadyMgr)).call(this));

	    _this.name = 'ReadyMgr';

	    _this.completed = 0;
	    _this.total = 1; // 最初に0で割られるのを防ぐ
	    _this.current = 0;

	    _this.$wrap = $('#wrapper');

	    if (gb.conf.LOADING) _this.setup(); // loading有り
	    else _this.setup_not_loading(); // loading無し

	    _this.setEvents();

	    return _this;
	  }

	  _createClass(ReadyMgr, [{
	    key: 'setup',
	    value: function setup() {

	      this.e = new _Events2.default(this);
	      this.r = new _Render_def2.default();

	      this.r.add();
	      this.r.show();
	    }
	  }, {
	    key: 'setup_not_loading',
	    value: function setup_not_loading() {

	      // this.$wrap.css('opacity', 1);
	      this.onComplete();
	    }
	  }, {
	    key: 'update',
	    value: function update() {

	      this.e = this.e.update();
	      this.r.update(this.e);
	    }
	  }, {
	    key: 'onComplete',
	    value: function onComplete() {

	      // update処理をやめる
	      this.offU();

	      this.r.hide();

	      var tl = new TimelineMax();

	      tl.to(this.$wrap, 0.0, {
	        opacity: 1,
	        delay: 0,
	        ease: Power2.easeInOut,
	        onComplete: function onComplete() {}
	      }).add(function () {
	        $(window).trigger('loadingEnd');
	      }, .75);
	    }
	  }]);

	  return ReadyMgr;
	}(_Base3.default);

	exports.default = ReadyMgr;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//--------------------------------------------------
	//
	//  Events
	//
	//--------------------------------------------------

	var Events = function () {
	  function Events(parent) {
	    _classCallCheck(this, Events);

	    this.parent = parent;

	    this.current = 0;
	    this.ease = 0.12;

	    this.isLock = false;
	    this.loopStart = true;

	    this.setup();
	    this.setEvents();
	  }

	  _createClass(Events, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "update",
	    value: function update() {

	      var target = gb.lm.completed / gb.lm.total * 100;
	      this.current += (target - this.current) * this.ease;
	      gb.lm.current = this.current;
	      // log(gb.lm.completed,gb.lm.total)

	      // 終了処理
	      if (this.current >= 100 && !this.isLock) {
	        this.isLock = true;
	        this.parent.onComplete();
	      }

	      // current が 99.9 より大きければ 100 と見なして終了処理へ
	      if (this.current > 99.9) {
	        this.current = 100;
	      }

	      // log(gb.lm.completed, gb.lm.total, this.current);

	      return this;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {}
	  }]);

	  return Events;
	}();

	exports.default = Events;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//--------------------------------------------------
	//
	//  Render
	//
	//--------------------------------------------------

	var Render = function () {
	  function Render(parent) {
	    _classCallCheck(this, Render);

	    this.$wrap = $('html');

	    this.setup();
	    this.setEvents();
	  }

	  _createClass(Render, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'add',
	    value: function add() {

	      var html = '<div id="loading">' + '<div class="loadingBar"></div>' + '<div class="loadingPercent"></div>' + '</div>';

	      this.$wrap.append(html);

	      // get dom
	      this.$loading = $('#loading');
	      this.$bar = $('#loading .loadingBar');
	      this.$percent = $('#loading .loadingPercent');
	    }
	  }, {
	    key: 'show',
	    value: function show() {

	      // var tl = new TimelineMax();

	      // tl.to(this.$loading, 1.0, {
	      //   opacity: 1,
	      //   ease: Expo.easeInOut,
	      //   onComplete: ()=>{

	      //   }
	      // })

	      TweenMax.set(this.$loading, { opacity: 1 });
	    }
	  }, {
	    key: 'update',
	    value: function update(e) {

	      // log('loading', e.current);

	      this.$bar.css({ width: e.current + '%' }); // bar
	      // this.$percent.html( Math.floor(e.current) + '<span>%</span>'); // value
	      this.$percent.html(Math.floor(e.current)); // value
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this = this;

	      var tl = new TimelineMax();

	      tl.to(this.$bar, 1.0, {
	        x: '102%',
	        ease: Expo.easeInOut,
	        onComplete: function onComplete() {

	          _this.remove();
	        }
	      }).to(this.$percent, 1.0, {
	        opacity: 0,
	        ease: Power2.easeInOut
	      }, 0.0);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {

	      this.$loading.remove();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);

	  return Render;
	}();

	exports.default = Render;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  LoadMgr
	//
	//--------------------------------------------------

	// import {Promise} from 'es6-promise';

	var _OtherLoader = __webpack_require__(23);

	var _OtherLoader2 = _interopRequireDefault(_OtherLoader);

	var _THREELoader = __webpack_require__(24);

	var _THREELoader2 = _interopRequireDefault(_THREELoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoadMgr = function () {
	  function LoadMgr() {
	    _classCallCheck(this, LoadMgr);

	    this.isFirst = true;

	    this.setup();
	    // this.setEvents();
	  }

	  _createClass(LoadMgr, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'setupLoad',
	    value: function setupLoad() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);

	  return LoadMgr;
	}();

	exports.default = LoadMgr;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//--------------------------------------------------
	//
	//  Loader
	//
	//--------------------------------------------------

	// TextLoader
	// SVGLoader
	// CSSLoader
	// JavaScriptLoader
	// BinaryLoader
	// ImageLoader
	// SpriteSheetLoader
	// VideoLoader
	// SoundLoader
	// JSONLoader
	// JSONPLoader
	// XMLLoader

	var Loader = function () {
	  function Loader() {
	    _classCallCheck(this, Loader);

	    this.cb = function () {};
	  }

	  _createClass(Loader, [{
	    key: 'youtubeIframeScript',
	    value: function youtubeIframeScript(cb) {

	      // IFrame Player API の読み込み
	      var tag = document.createElement('script');
	      tag.onload = function () {

	        // this.cb();

	      };

	      // tag.src = "https://www.youtube.com/iframe_api";
	      tag.src = "//www.youtube.com/iframe_api";
	      var firstScriptTag = document.getElementsByTagName('script')[0];
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	      // YouTube動画
	      window.onYouTubeIframeReady = function () {

	        log('youtubeready');
	      };
	    }
	  }, {
	    key: 'webFont',
	    value: function webFont(config) {

	      // web font loader用jsのappend
	      var wf = document.createElement('script');
	      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	      wf.type = 'text/javascript';
	      wf.async = 'true';
	      var s = document.getElementsByTagName('script')[0];
	      s.parentNode.insertBefore(wf, s);

	      var again = function again() {

	        // yt.playerがloadされていない場合を考慮して
	        if (typeof WebFont !== "undefined" && WebFont) {

	          WebFont.load(config);
	        } else {

	          setTimeout(again, 100);
	        }
	      };

	      again();
	    }
	  }, {
	    key: 'webFont_setting',
	    value: function webFont_setting() {

	      // web font loader用param
	      // var config = {
	      //   custom: {
	      //     families: [
	      //       'Cormorant',
	      //       'Roboto Condensed'
	      //       // 'Noto Sans Japanese',
	      //       // 'Roboto',
	      //       // 'Alegreya Sans',
	      //       // 'Alegreya Sans SC'
	      //       ],
	      //     urls: [
	      //       'https://fonts.googleapis.com/css?family=Cormorant:500,500i|Roboto+Condensed'
	      //       // './ff15/royal/gallery2018/assets/css/font.css',
	      //       // 'https://fonts.googleapis.com/css?family=Roboto:400,500,300',
	      //       // 'https://fonts.googleapis.com/css?family=Alegreya+Sans:400,100',
	      //       // 'https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,300,100'
	      //       ]
	      //   },
	      //   active: function() { 

	      //       log('webFont!!!!');
	      //       gb.in.conf.webFontLoaded = true;

	      //   } 
	      // };

	      var conf = {
	        custom: {
	          families: ['Source Code Pro', 'FontAwesome'],
	          urls: ['https://fonts.googleapis.com/css?family=Source+Code+Pro:600', 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'],
	          testStrings: {
	            'FontAwesome': '\uF001'
	          }
	        },
	        // Web Fontが使用可能になったとき
	        active: function active() {
	          new DemoIconsWorld();
	        }
	      };

	      var loader = new Loader();
	      loader.webFont(config);
	    }
	  }]);

	  return Loader;
	}();

	exports.default = Loader;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//--------------------------------------------------
	//
	//  THREELoader
	//
	//--------------------------------------------------

	// TextLoader
	// SVGLoader
	// CSSLoader
	// JavaScriptLoader
	// BinaryLoader
	// ImageLoader
	// SpriteSheetLoader
	// VideoLoader
	// SoundLoader
	// JSONLoader
	// JSONPLoader
	// XMLLoader

	var THREELoader = function () {
	  function THREELoader() {
	    _classCallCheck(this, THREELoader);

	    this.cb = function () {};
	  }

	  _createClass(THREELoader, [{
	    key: "textureByName",
	    value: function textureByName(len, r, cbProg, cbComp) {
	      var _this = this;

	      this.list = [];
	      var cnt = 0;

	      for (var i = 0; i < len; i++) {

	        var resource = r[i];
	        var tl = new THREE.TextureLoader();
	        // tl.crossOrigin = 'anonymous';
	        tl.load(resource, function (tex) {

	          tex.wrapS = THREE.RepeatWrapping;
	          tex.wrapT = THREE.RepeatWrapping;

	          cbProg();
	          cnt++; // ロード数をカウント
	          _this.list.push(tex);
	          if (cnt == len) cbComp();
	        });
	      }
	    }
	  }, {
	    key: "textureByName_order",
	    value: function textureByName_order(len, r, cbProg, cbComp) {
	      var _this2 = this;

	      this.list = [];
	      var cnt = 0;

	      var load = function load(i) {

	        var resource = r[i];
	        var tl = new THREE.TextureLoader();
	        // tl.crossOrigin = 'anonymous';
	        tl.load(resource, function (tex) {

	          tex.wrapS = THREE.RepeatWrapping;
	          tex.wrapT = THREE.RepeatWrapping;

	          // ロード数をカウント
	          cnt++;
	          _this2.list.push(tex);

	          cbProg();
	          if (cnt == len) cbComp();else load(cnt);
	        });
	      };

	      load(cnt);
	    }
	  }]);

	  return THREELoader;
	}();

	exports.default = THREELoader;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//--------------------------------------------------
	//
	//  updateManager
	//
	//--------------------------------------------------

	var UpdateMgr = function () {
	  function UpdateMgr() {
	    _classCallCheck(this, UpdateMgr);

	    this.frame = 0;
	    this.len = 0;
	    this.Timer = null;
	    this.isStop = false;

	    this.st = 0;
	    this.et = 0;
	    this.delta = 0;
	    this.frameRate = 0;

	    this.setup();
	  }

	  _createClass(UpdateMgr, [{
	    key: "setup",
	    value: function setup() {

	      this.start = this.st = new Date().getTime();
	      this.fps = 60.0;
	      this.frameLength = 6.0;
	    }
	  }, {
	    key: "loop",
	    value: function loop() {

	      // delta
	      var et = new Date().getTime();
	      this.delta = et - this.st;
	      this.st = et;

	      // frame
	      this.frame++;

	      // 再帰
	      this.Timer = requestAnimationFrame(this.loop.bind(this));
	    }
	  }, {
	    key: "stop",
	    value: function stop() {

	      cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: "resume",
	    value: function resume() {

	      this.loop();
	    }
	  }, {
	    key: "getElapsedTime",
	    value: function getElapsedTime() {

	      var elapsed = new Date().getTime() - this.start;

	      return elapsed / 1000;
	    }
	  }]);

	  return UpdateMgr;
	}();

	exports.default = UpdateMgr;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//--------------------------------------------------
	//
	//  ResizeMgr
	//
	//--------------------------------------------------

	var ResizeMgr = function () {
	  function ResizeMgr() {
	    _classCallCheck(this, ResizeMgr);

	    this.w = 0;
	    this.h = 0;
	    this.oldW = 0;
	    this.oldH = 0;
	    this.ww = 0;
	    this.wh = 0;

	    this.setup();
	    this.setEvents();
	  }

	  _createClass(ResizeMgr, [{
	    key: 'setup',
	    value: function setup() {

	      this.getWindowSize();
	    }
	  }, {
	    key: 'getWindowSize',
	    value: function getWindowSize() {

	      this.oldW = this.w;
	      this.oldH = this.h;
	      this.w = window.innerWidth;
	      this.h = window.innerHeight;

	      this.ww = $(window).width();
	      this.hh = $(window).height();

	      this.haw = this.w / 2;
	      this.hah = this.h / 2;
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize(e) {

	      this.getWindowSize();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {

	      $(window).on('resize', this.onResize.bind(this));
	      // $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
	      // $(window).on('resize', $.debounce(200, this.onResize.bind(this)));
	    }
	  }]);

	  return ResizeMgr;
	}();

	exports.default = ResizeMgr;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//--------------------------------------------------
	//
	//  ScrollMgr
	//
	//--------------------------------------------------

	var ScrollMgr = function () {
	  function ScrollMgr() {
	    _classCallCheck(this, ScrollMgr);

	    // this.$wrap = $(window);
	    if (gb.u.dv.isPC) this.$wrap = $(window);else this.$wrap = $('#wrapper');

	    this.st = 0; // 現在のscroll top
	    this.prest = 0;
	    this.sb = 0; // 現在のscroll bottom

	    this.isUp = null; // 上スクロールか下スクロールか;
	    this.dis = 0;
	    this.deltaY = 0;
	    this.offset = 0;

	    this.isSetWheel = false;

	    this.setup();
	    this.setEvents();
	  }

	  _createClass(ScrollMgr, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {

	      this.st = this.$wrap.scrollTop();
	      this.sb = this.st + gb.r.h;

	      // down or up
	      // if (this.st > this.prest) {
	      //   console.log('down');
	      // } else {
	      //   console.log('up');
	      // }
	      // this.prest = this.st;
	    }
	  }, {
	    key: 'onWheel',
	    value: function onWheel(e, delta, deltaX, deltaY) {

	      this.isWheel = true;

	      if (deltaY > 0) this.isUp = true;else this.isUp = false;

	      this.dis = deltaY - this.deltaY;
	      this.offset += deltaY;
	      this.deltaY = deltaY;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;

	      // scroll
	      var $wrap = this.$wrap.get(0);
	      window.addEventListenerWithOptions($wrap, 'scroll', this.onScroll.bind(this), { passive: true, capture: false });
	      // this.$wrap.on('scroll', $.throttle(100, false, this.onScroll.bind(this)));

	      // wheel
	      if (this.isSetWheel) $(document).on('mousewheel', function (e, delta, deltaX, deltaY) {
	        _this.onWheel(e, delta, deltaX, deltaY);
	      }); // → document指定だと、trackball controlsが上手く動かない
	      // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onWheel(e,delta,deltaX,deltaY);});
	    }
	  }]);

	  return ScrollMgr;
	}();

	exports.default = ScrollMgr;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//--------------------------------------------------
	//
	//  MouseMgr
	//
	//--------------------------------------------------

	var MouseMgr = function () {
	  function MouseMgr() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $(document);

	    _classCallCheck(this, MouseMgr);

	    this.$wrap = $wrap;

	    this.x = 0;
	    this.y = 0;
	    this.px = 0; // previous
	    this.py = 0; // previous

	    this.cx = 0;
	    this.cy = 0;

	    this.setup();
	    this.setEvents();
	  }

	  _createClass(MouseMgr, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "onMousemove",
	    value: function onMousemove(e) {

	      this.getPos(e);
	    }
	  }, {
	    key: "onTouchmove",
	    value: function onTouchmove(e) {

	      this.x = e.originalEvent.changedTouches[0].pageX;
	      this.y = e.originalEvent.changedTouches[0].pageY;
	    }
	  }, {
	    key: "getPos",
	    value: function getPos(e) {

	      if (e.offsetX == undefined) {
	        // this works for Firefox
	        this.x = e.pageX - this.$wrap.offset().left;
	        this.y = e.pageY - this.$wrap.offset().top;
	      } else {
	        // works in Google Chrome
	        this.x = e.pageX - $(window).scrollLeft();
	        this.y = e.pageY - $(window).scrollTop();
	      }

	      this.cx = e.clientX - gb.r.haw;
	      this.cy = e.clientY - gb.r.hah;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this = this;

	      this.$wrap.on("touchmove.MouseMgr", function (e) {
	        _this.onTouchmove(e);
	      });
	      this.$wrap.on("mousemove.MouseMgr", function (e) {
	        _this.onMousemove(e);
	      });
	    }
	  }, {
	    key: "removeEvents",
	    value: function removeEvents() {

	      this.$wrap.off("touchmove.MouseMgr");
	      this.$wrap.off("mousemove.MouseMgr");
	    }
	  }]);

	  return MouseMgr;
	}();

	exports.default = MouseMgr;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//--------------------------------------------------
	//
	//  ScrollList
	//
	//--------------------------------------------------

	var ScrollList = function () {
	  function ScrollList() {
	    _classCallCheck(this, ScrollList);

	    this.list = [];
	    this.endList = [];

	    this.isStart = true;
	    this.isWheel = false; // wheel中か、そうでないか
	    this.endTimer = 200;

	    this.setup();
	    this.setEvents();
	  }

	  _createClass(ScrollList, [{
	    key: 'setup',
	    value: function setup() {

	      // this.add('end',this.onEnd.bind(this));

	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {

	      var obj = { name: name, func: func };

	      this.list.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {

	      ScrollList.arrRemove(this.list, name);
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll(e) {

	      // if (this.isStart) {
	      //   this.isStart = false;
	      //   // log('resizeStart');
	      //   // 最初だけの処理
	      // };

	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onMouseWheel',
	    value: function onMouseWheel(e, delta, deltaX, deltaY) {

	      this.isWheel = true;

	      if (deltaY > 0) this.upWheel = true;else this.upWheel = false;

	      for (var i in this.list) {
	        this.list[i].func();
	      }
	    }
	  }, {
	    key: 'onEnd',
	    value: function onEnd(e) {

	      var self = this;

	      if (this.Timer) clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        self.isStart = true;
	        self.isWheel = false;

	        for (var i in self.endList) {
	          self.endList[i]();
	        }
	      }, this.endTimer);
	    }
	  }, {
	    key: 'addFixedObjectScroll',
	    value: function addFixedObjectScroll($target) {

	      this.list.push(function () {

	        $target.css("left", -$(window).scrollLeft());
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {

	      // $(window).on('scroll', (e)=>{this.onScroll(e);});
	      // var $wrap = $(window).get(0);
	      if (gb.u.dv.isPC) var $wrap = $(window).get(0);else var $wrap = $('#wrapper').get(0);
	      window.addEventListenerWithOptions($wrap, 'scroll', this.onScroll.bind(this), { passive: true, capture: false });
	      // $(window).on('scroll', $.throttle(100, false, this.onScroll.bind(this)));
	      // $(document).on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onMouseWheel(e,delta,deltaX,deltaY);}); // → document指定だと、trackball controlsが上手く動かない
	      // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onMouseWheel(e,delta,deltaX,deltaY);});
	    }

	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------

	  }], [{
	    key: 'arrRemove',
	    value: function arrRemove(arr, name) {

	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];

	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }

	      return arr;
	    }
	  }]);

	  return ScrollList;
	}();

	exports.default = ScrollList;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	var _Controller = __webpack_require__(31);

	var _Controller2 = _interopRequireDefault(_Controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  ViewTop sss
	//
	//--------------------------------------------------


	var ViewCommon = function (_Base) {
	  _inherits(ViewCommon, _Base);

	  function ViewCommon() {
	    _classCallCheck(this, ViewCommon);

	    var _this = _possibleConstructorReturn(this, (ViewCommon.__proto__ || Object.getPrototypeOf(ViewCommon)).call(this));

	    _this.name = "ViewCommon";

	    _this.isUEv = false; // update
	    _this.isREv = true; // resize
	    _this.isSEv = false; // scroll
	    _this.isMEv = false; // mouse

	    _this.setup();
	    _this.setEvents();
	    return _this;
	  }

	  _createClass(ViewCommon, [{
	    key: "setup",
	    value: function setup() {
	      this.ui = new _Controller2.default();
	    }
	  }, {
	    key: "onLoad",
	    value: function onLoad() {
	      this.ui.setup();
	      // ------------------------------------------------------------
	      // timeline
	      // ------------------------------------------------------------
	    }
	  }, {
	    key: "onLoadingEnd",
	    value: function onLoadingEnd() {
	      // ------------------------------------------------------------
	      //  Util
	      // ------------------------------------------------------------
	      // ------------------------------------------------------------
	      //  layout
	      // ------------------------------------------------------------
	      // ------------------------------------------------------------
	      //  ui
	      // ------------------------------------------------------------
	      // ------------------------------------------------------------
	      // effect
	      // ------------------------------------------------------------
	      // ------------------------------------------------------------
	      // Scene / timeline
	      // ------------------------------------------------------------
	    }
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "onResize",
	    value: function onResize() {}
	  }, {
	    key: "onLoadAll",
	    value: function onLoadAll() {
	      // new Responsive();
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      _get(ViewCommon.prototype.__proto__ || Object.getPrototypeOf(ViewCommon.prototype), "setEvents", this).call(this);

	      $(window).on("load", this.onLoad.bind(this));
	      $(window).on("loadingEnd", this.onLoadingEnd.bind(this));
	      $(window).on("loadAll", this.onLoadAll.bind(this));
	    }
	  }]);

	  return ViewCommon;
	}(_Base3.default);

	exports.default = ViewCommon;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	var _index = __webpack_require__(32);

	var m = _interopRequireWildcard(_index);

	var _Controller = __webpack_require__(33);

	var _Controller2 = _interopRequireDefault(_Controller);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller() {
	    _classCallCheck(this, Controller);

	    // this.setup()
	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.setEvents();

	    // this.timeline();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      if ($("#top").length) this.top = new _Controller2.default();
	    }
	  }, {
	    key: "timeline",
	    value: function timeline() {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "onResize",
	    value: function onResize() {}
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.random = random;
	exports.randomInt = randomInt;
	exports.random2 = random2;
	exports.hit = hit;
	exports.range = range;
	exports.map = map;
	exports.demical = demical;
	exports.float = float;
	exports.clamp = clamp;
	exports.rate = rate;
	exports.lerp = lerp;
	exports.degree = degree;
	exports.radian = radian;
	exports.dist = dist;
	exports.ascend = ascend;
	exports.descend = descend;
	exports.constrain = constrain;
	/**
	 * Generate a random float
	 *
	 * @param  {number} minValue  Minimum boundary
	 * @param  {number} maxValue  Maximum boundary
	 * @param  {number} precision Precision
	 * @return {number}           Generated float
	 */
	function random(minValue, maxValue) {
	  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;


	  return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
	}

	// ランダムな整数を取得
	// -----------------------------------
	// @min : 最小値(int)
	// @max : 最大値(int)
	// return : minからmaxまでのランダムな整数(int)
	// -----------------------------------
	function randomInt(min, max) {

	  return Math.floor(Math.random() * (max + 1 - min) + min);
	}

	// ランダムな整数を2つの範囲から取得
	// -----------------------------------
	// @min1 : 最小値1(int)
	// @max1 : 最大値1(int)
	// @min2 : 最小値2(int)
	// @max2 : 最大値2(int)
	// return : minからmaxまでのランダムな整数(int)
	// -----------------------------------
	function random2(min1, max1, min2, max2) {

	  if (this.hit(2)) {
	    return this.randomInt(min1, max1);
	  } else {
	    return this.randomInt(min2, max2);
	  }
	}

	// 1/@rangeの確率でtrueを取得
	// -----------------------------------
	// @range : 母数(int)
	// return : true or false(boolean)
	// -----------------------------------
	function hit(range) {

	  return this.randomInt(0, range - 1) === 0;
	}

	// 0から範囲内でランダムな整数を取得
	// -----------------------------------
	// @val : 範囲(int)
	// return : ランダムな整数(int)
	// -----------------------------------
	function range(val) {

	  return this.randomInt(-val, val);
	}

	// 値をマッピング
	// -----------------------------------
	// @num : マッピングする値(Number)
	// @resMin : 結果となる値の最小値(Number)
	// @resMax : 結果となる値の最大値(Number)
	// @baseMin : 元となる値の最小値(Number)
	// @baseMax : 元となる値の最大値(Number)
	// return : マッピングされた値(Number)
	// -----------------------------------
	function map(num, resMin, resMax, baseMin, baseMax) {

	  var p;
	  if (num < baseMin) {
	    return resMin;
	  }
	  if (num > baseMax) {
	    return resMax;
	  }
	  p = (resMax - resMin) / (baseMax - baseMin);

	  return (num - baseMin) * p + resMin;
	}

	function demical(v) {
	  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


	  // 計算 ( Math.pow( 10, 4 ) = 10000 )
	  var val = Math.floor(v * Math.pow(10, n)) / Math.pow(10, n);

	  return val;
	}

	function float(v) {
	  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


	  return v.toFixed(n);
	}

	// 数値に小数点第@n位までをつけた文字列を返す
	// -----------------------------------
	// @num : 値(Number)
	// @n : 小数点の位(int)
	// return : 変換された値(String)
	// -----------------------------------
	// decimal(num, n) {
	//   var i, pos;
	//   num = String(num);
	//   pos = num.indexOf(".");
	//   if (n === 0) {
	//     return num.split(".")[0];
	//   }
	//   if (pos === -1) {
	//     num += ".";
	//     i = 0;
	//     while (i < n) {
	//       num += "0";
	//       i++;
	//     }
	//     return num;
	//   }
	//   num = num.substr(0, pos) + num.substr(pos, n + 1);
	//   return num;
	// }

	function clamp(val, min, max, minVal, maxVal) {

	  if (val < min) val = minVal == undefined ? min : minVal;else if (val > max) val = maxVal == undefined ? max : maxVal;

	  return val;
	}

	function rate(val, base) {

	  var v = val / base;

	  return v;
	}

	function lerp(val01, val02, val) {

	  val = val < 0 ? 0 : val;
	  val = val > 1 ? 1 : val;
	  return val01 + (val02 - val01) * val;
	}

	function degree(radians) {

	  return radians * 180 / Math.PI; //1ラジアンが何度か
	}

	// to radians
	function radian(angle) {

	  return angle * Math.PI / 180; //1度何ラジアンか
	}

	function dist(p1, p2) {

	  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	}

	function ascend(arr) {

	  arr.sort(function (a, b) {
	    if (a > b) return -1;
	    if (a < b) return 1;
	    return 0;
	  });
	  // var a = [5,3,9,1,10]
	  // 結果:10,9,5,3,1

	  return arr;
	}

	function descend(arr) {

	  arr.sort(function (a, b) {
	    if (a < b) return -1;
	    if (a > b) return 1;
	    return 0;
	  });

	  // var a = [5,3,9,1,10]
	  // 結果:1,3,5,9,10

	  return arr;
	}

	// map(value, min01, max01, min02, max02) {

	//   var dis01 = max01 - min01;
	//   var dis02 = max02 - min02

	//   var rate = dis02 / dis01;

	//   value = value * rate;

	//   return value;
	// }

	function constrain(value, min, max) {

	  return Math.min(max, Math.max(value, min));

	  // if (value <= low) value = low;
	  // if (value >= high) value = high;     
	  // return value;
	}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	var _Controller = __webpack_require__(34);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _Controller3 = __webpack_require__(35);

	var _Controller4 = _interopRequireDefault(_Controller3);

	var _Controller5 = __webpack_require__(37);

	var _Controller6 = _interopRequireDefault(_Controller5);

	var _Controller7 = __webpack_require__(38);

	var _Controller8 = _interopRequireDefault(_Controller7);

	var _Controller9 = __webpack_require__(43);

	var _Controller10 = _interopRequireDefault(_Controller9);

	var _Controller11 = __webpack_require__(44);

	var _Controller12 = _interopRequireDefault(_Controller11);

	var _Controller13 = __webpack_require__(45);

	var _Controller14 = _interopRequireDefault(_Controller13);

	var _Controller15 = __webpack_require__(46);

	var _Controller16 = _interopRequireDefault(_Controller15);

	var _Controller17 = __webpack_require__(61);

	var _Controller18 = _interopRequireDefault(_Controller17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller() {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.setup();
	    _this.setEvents();
	    _this.onResize();

	    // this.timeline();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      $(".btn-primary").each(function (i, e) {
	        new _Controller2.default(e);
	      });

	      new _Controller4.default($(".tabWrap"));

	      $(".footer-link").each(function (i, e) {
	        new _Controller6.default(e);
	      });
	      $(".menu-lang-link").each(function (i, e) {
	        new _Controller6.default(e);
	      });

	      this.menu = new _Controller8.default({
	        $btn: $(".header-menu-btn"),
	        $contents: $(".menu")
	      });
	      $(".parallax,.parallax2").each(function (i, e) {
	        new _Controller10.default($(e), {
	          ease: e.dataset.ease - 0,
	          max: e.dataset.max - 0
	        });
	      });

	      $(".HoverImg").each(function (i, e) {
	        new _Controller12.default(e);
	      });

	      this.scrollBtn = new _Controller14.default($(".scroll-btn"));
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "onU", this).call(this);

	      this.kv = new _Controller16.default();

	      this.cookie = new _Controller18.default();

	      this.show();
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var _this2 = this;

	      this.kv.timeline(function (e) {
	        _this2.scrollBtn.show();

	        return _this2.menu.showBtn();
	      }).then(function (e) {
	        _this2.cookie.show();
	      });
	    }
	  }, {
	    key: "timeline",
	    value: function timeline() {}
	  }, {
	    key: "update",
	    value: function update() {
	      window.updates.map(function (update) {
	        update.cb();
	      });
	    }
	  }, {
	    key: "onResize",
	    value: function onResize() {
	      console.log("resize");

	      document.body.style.setProperty("--h", window.innerHeight + "px");
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);

	      $(window).on("resize", this.onResize.bind(this));
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller(ele) {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$ele = $(ele);
	    _this.name = "HoverClass";

	    _this.setup();
	    _this.setEvents();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "draw",
	    value: function draw() {}
	  }, {
	    key: "show",
	    value: function show() {
	      var tl = new TimelineMax();
	      tl.to(this.$ele.find(".bg"), 0.5, {
	        scaleX: 1,
	        ease: Expo.easeOut,
	        startAt: {
	          "transform-origin": "0 0"
	        }
	      });
	      return tl;
	    }
	  }, {
	    key: "hide",
	    value: function hide(progress) {
	      var tl = new TimelineMax();

	      var t = (0.5 - 0.5 * progress) * 0.5;
	      tl
	      //途中で終わったscaleを最後までやる
	      .to(this.$ele.find(".bg"), t, {
	        scaleX: 1,
	        ease: Expo.easeOut,
	        startAt: {
	          "transform-origin": "0 0"
	        }
	      }).to(this.$ele.find(".bg"), 0.5, {
	        scaleX: 0,
	        ease: Expo.easeOut,
	        startAt: {
	          "transform-origin": "100% 0"
	        }
	      }, t);

	      return tl;
	    }
	  }, {
	    key: "onEnter",
	    value: function onEnter() {
	      // console.log(this.tl);
	      // this.tl.kill();
	      if (this.tl) this.tl.kill();
	      this.tl = new TimelineMax();
	      this.tl.add(this.show());
	    }
	  }, {
	    key: "onLeave",
	    value: function onLeave() {
	      var progress = this.tl.progress();
	      this.tl.kill();
	      this.tl = new TimelineMax();
	      this.tl.add(this.hide(progress));
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));
	      this.$ele.on("mouseleave." + this.name, this.onLeave.bind(this));
	      this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
	      this.$ele.on("touchend." + this.name, this.onLeave.bind(this));
	    }
	  }, {
	    key: "removeEvents",
	    value: function removeEvents() {
	      this.$ele.off("mouseenter." + this.name);
	      this.$ele.off("mouseleave." + this.name);
	      this.$ele.off("touchstart." + this.name);
	      this.$ele.off("touchend." + this.name);
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.removeEvents();
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	var _Controller = __webpack_require__(36);

	var _Controller2 = _interopRequireDefault(_Controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	// import gsap from ''


	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller($ele) {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$ele = $ele;
	    _this.color = {
	      activeBtnbg: "#fff",
	      activeBtnColor: "#2e2f30",
	      nonActiveBtnBg: "#000ba3",
	      nonActiveBtnColor: "#fff"
	    };
	    _this.setup();
	    _this.setEvents();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      this.onResize();

	      this.$ele.find(".tabbtn.is-active .base_bg").css({
	        "background-color": this.color.activeBtnbg
	      });
	      this.$ele.find(".tabbtn.is-active span").css({
	        color: this.color.activeBtnColor
	      });

	      this.$ele.find(".tabContents.is-active .tabContentsItem").css({
	        opacity: 1,
	        transform: "translateY(0px)"
	      });

	      this.$ele.find(".tabbtn").each(function (i, e) {
	        new _Controller2.default(e);
	      });
	    }
	  }, {
	    key: "onResize",
	    value: function onResize() {
	      var h = this.$ele.find(".tabContents.is-active").outerHeight(true);

	      $(".index-solution-contents-inner").height(h);
	    }
	  }, {
	    key: "changeContents",
	    value: function changeContents(_ref) {
	      var $prevContents = _ref.$prevContents,
	          $prevBtn = _ref.$prevBtn,
	          $nextContents = _ref.$nextContents,
	          $nextBtn = _ref.$nextBtn;

	      $prevContents.removeClass("is-active");
	      $prevBtn.removeClass("is-active");
	      $nextContents.addClass("is-active");
	      $nextBtn.addClass("is-active");
	      if (this.tl) this.tl.kill();
	      this.killTL();
	      this.tl = new TimelineMax();
	      this.tl
	      //hide
	      .add(this.hide($prevContents, $prevBtn)).add(this.showBtn($nextBtn), 0)
	      //show
	      .add(this.show($nextContents, $nextBtn));
	    }
	  }, {
	    key: "killTL",
	    value: function killTL() {
	      TweenMax.killTweensOf($(".tabContentsItem"));
	      TweenMax.killTweensOf($(".tabBtn span"));
	    }
	  }, {
	    key: "show",
	    value: function show($contents, $btn) {
	      var tl = new TimelineMax();

	      //contents
	      $contents.find(".tabContentsItem").each(function (i, item) {
	        tl.to(item, 0.5, {
	          opacity: 1,
	          y: 0,
	          ease: Expo.easeOut,
	          startAt: {
	            y: 10
	          }
	        }, i * 0.03);
	      });

	      return tl;
	    }
	  }, {
	    key: "showBtn",
	    value: function showBtn($btn) {
	      var tl = new TimelineMax();
	      tl
	      //btn
	      .to($btn.find(".base_bg"), 0.5, {
	        "background-color": this.color.activeBtnbg,

	        ease: Expo.easeOut
	      }).to($btn.find("span"), 0.5, {
	        color: this.color.activeBtnColor,
	        ease: Expo.easeOut
	      }, 0);
	      return tl;
	    }
	  }, {
	    key: "hideBtn",
	    value: function hideBtn($btn) {
	      var tl = new TimelineMax();
	      tl
	      //btn
	      .to($btn.find(".base_bg"), 0.5, {
	        "background-color": this.color.nonActiveBtnBg,

	        ease: Expo.easeOut
	      }).to($btn.find("span"), 0.5, {
	        color: this.color.nonActiveBtnColor
	      }, 0);
	      return tl;
	    }
	  }, {
	    key: "hide",
	    value: function hide($contents, $btn) {
	      var tl = new TimelineMax();
	      tl.add(this.hideBtn($btn));
	      //contents
	      $contents.find(".tabContentsItem").each(function (i, item) {
	        tl.to(item, 0.5, {
	          opacity: 0,
	          y: -10,
	          ease: Expo.easeOut
	        }, i * 0.03);
	      });

	      return tl;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this2 = this;

	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);

	      this.$ele.find(".tabbtn").on("click", function (e) {
	        var $target = $(e.currentTarget);
	        if ($target.hasClass("is-active")) return;

	        var index = $target.index();
	        var $prevBtn = _this2.$ele.find(".tabbtn.is-active");
	        var $prevContents = _this2.$ele.find(".tabContents.is-active");
	        _this2.changeContents({
	          $prevContents: $prevContents,
	          $prevBtn: $prevBtn,
	          $nextBtn: $target,
	          $nextContents: _this2.$ele.find(".tabContents").eq(index)
	        });
	      });

	      $(window).on("resize", this.onResize.bind(this));
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller(ele) {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$ele = $(ele);
	    _this.name = "HoverClass";

	    _this.setup();
	    _this.setEvents();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "draw",
	    value: function draw() {}
	  }, {
	    key: "show",
	    value: function show() {
	      var tl = new TimelineMax();
	      tl.to(this.$ele.find(".bg"), 0.5, {
	        scaleX: 1,
	        ease: Expo.easeOut,
	        startAt: {
	          "transform-origin": "0 0"
	        }
	      });
	      return tl;
	    }
	  }, {
	    key: "hide",
	    value: function hide(progress) {
	      var tl = new TimelineMax();

	      var t = (0.5 - 0.5 * progress) * 0.5;
	      tl
	      //途中で終わったscaleを最後までやる
	      .to(this.$ele.find(".bg"), t, {
	        scaleX: 1,
	        ease: Expo.easeOut,
	        startAt: {
	          "transform-origin": "0 0"
	        }
	      }).to(this.$ele.find(".bg"), 0.5, {
	        scaleX: 0,
	        ease: Expo.easeOut,
	        startAt: {
	          "transform-origin": "100% 0"
	        }
	      }, t);

	      return tl;
	    }
	  }, {
	    key: "onEnter",
	    value: function onEnter() {
	      // console.log(this.tl);
	      // this.tl.kill();
	      if (this.tl) this.tl.kill();
	      this.tl = new TimelineMax();
	      this.tl.add(this.show());
	    }
	  }, {
	    key: "onLeave",
	    value: function onLeave() {
	      var progress = this.tl.progress();
	      this.tl.kill();
	      this.tl = new TimelineMax();
	      this.tl.add(this.hide(progress));
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));
	      this.$ele.on("mouseleave." + this.name, this.onLeave.bind(this));
	      this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
	      this.$ele.on("touchend." + this.name, this.onLeave.bind(this));
	    }
	  }, {
	    key: "removeEvents",
	    value: function removeEvents() {
	      this.$ele.off("mouseenter." + this.name);
	      this.$ele.off("mouseleave." + this.name);
	      this.$ele.off("touchstart." + this.name);
	      this.$ele.off("touchend." + this.name);
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.removeEvents();
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller(ele) {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$ele = $(ele);
	    _this.l = _this.$ele.find("svg").width();
	    _this.scale = 1.5;
	    _this.setup();
	    _this.setEvents();

	    // this.timeline();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "timeline",
	    value: function timeline() {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "onResize",
	    value: function onResize() {}
	  }, {
	    key: "show",
	    value: function show() {
	      var tl = new TimelineMax();
	      tl.to(this.$ele.find(".bar"), 0.5, {
	        startAt: {
	          "transform-origin": "0 0",
	          x: this.$ele.find(".bar").width() * -1.1
	        },
	        x: 0,
	        ease: Expo.easeOut
	      });
	      return tl;
	    }
	  }, {
	    key: "hide",
	    value: function hide(progress) {
	      var tl = new TimelineMax();
	      tl.to(this.$ele.find(".bar"), 0.5, {
	        x: this.$ele.find(".bar").width() * 1.1,
	        startAt: {
	          "transform-origin": "100% 0"
	        },
	        ease: Expo.easeOut
	      });
	      return tl;
	    }
	  }, {
	    key: "onEnter",
	    value: function onEnter() {
	      // console.log(this.tl);
	      // this.tl.kill();
	      if (this.tl) this.tl.kill();
	      this.tl = new TimelineMax();

	      this.tl.add(this.show());
	    }
	  }, {
	    key: "onLeave",
	    value: function onLeave() {
	      var progress = this.tl.progress();
	      this.tl.kill();
	      this.tl = new TimelineMax();
	      this.tl.add(this.hide(progress));
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);

	      this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));
	      this.$ele.on("mouseleave." + this.name, this.onLeave.bind(this));
	      this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
	      this.$ele.on("touchend." + this.name, this.onLeave.bind(this));
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	var _Controller = __webpack_require__(39);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _Controller3 = __webpack_require__(40);

	var _Controller4 = _interopRequireDefault(_Controller3);

	var _Controller5 = __webpack_require__(41);

	var _Controller6 = _interopRequireDefault(_Controller5);

	var _Renderer = __webpack_require__(42);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller(_ref) {
	    var $btn = _ref.$btn,
	        $contents = _ref.$contents;

	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$btn = $btn;
	    _this.$contents = $contents;
	    _this.setup();
	    _this.setEvents();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      this.setBG();
	      this.$contents.find(".menu-item").each(function (i, e) {
	        new _Controller2.default(e);
	      });

	      this.closeBtn = new _Controller4.default(this.$contents.find(".menu-close"));
	      this.openBtn = new _Controller6.default($(".header-menu-btn"));

	      this.renderer = new _Renderer2.default(this.$contents);
	    }
	  }, {
	    key: "setBG",
	    value: function setBG() {
	      var isSp = window.innerWidth <= 768;
	      console.log(isSp);
	      var w = isSp ? window.innerWidth : window.innerWidth * 0.828;
	      var length = isSp ? 54 : 140;
	      var l = Math.ceil(w / length) + 1;
	      // const m = (w - (l - 1) * length) * 0.5;
	      for (var i = 0; i < l; i++) {
	        var span = $("<span></span>");
	        span.css({
	          left: i * length
	        });
	        this.$contents.find(".bg").append(span);
	      }
	    }
	  }, {
	    key: "timeline",
	    value: function timeline() {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "show",
	    value: function show() {
	      var _this2 = this;

	      var tl = new TimelineMax();
	      tl
	      //show
	      .add(this.renderer.show(function (e) {
	        _this2.$contents.addClass("is-active");
	        return _this2.closeBtn.show();
	      }));
	    }
	  }, {
	    key: "showBtn",
	    value: function showBtn() {
	      return this.openBtn.show();
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var _this3 = this;

	      var tl = new TimelineMax();
	      this.$contents.removeClass("is-active");
	      tl

	      //hide
	      .add(this.renderer.hide(function (e) {
	        return _this3.closeBtn.hide();
	      }));
	    }
	  }, {
	    key: "onResize",
	    value: function onResize() {
	      this.$contents.find(".bg span").remove();
	      this.setBG();
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this4 = this;

	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);

	      this.$btn.on("click", function (e) {
	        _this4.show();
	      });
	      this.$contents.find(".menu-close").on("click", function (e) {
	        _this4.hide();
	      });
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller(ele) {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$ele = $(ele);

	    _this.setup();
	    _this.setEvents();

	    // this.timeline();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      TweenMax.set(this.$ele.find("polyline"), {
	        drawSVG: 0
	      });
	    }
	  }, {
	    key: "timeline",
	    value: function timeline() {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "onResize",
	    value: function onResize() {}
	  }, {
	    key: "show",
	    value: function show() {
	      var tl = new TimelineMax();
	      var offset = 66;
	      tl
	      //show svg
	      .fromTo(this.$ele.find("polyline"), 0.75, {
	        drawSVG: "100% 100%"
	      }, {
	        drawSVG: "0% 100%",
	        ease: Expo.easeOut
	      })
	      //x
	      .to(this.$ele.find("p"), 0.75, {
	        x: this.$ele.find("svg").width() + 20,
	        ease: Expo.easeOut
	      }, 0);

	      return tl;
	    }
	  }, {
	    key: "hide",
	    value: function hide(progress) {
	      var tl = new TimelineMax();
	      var offset = 66;
	      var t = 0.75 - 0.75 * progress;
	      tl
	      //progress x

	      //hide svg
	      .to(this.$ele.find("polyline"), 0.75, {
	        drawSVG: "100% 100%",
	        ease: Expo.easeOut
	      }, 0)
	      //x
	      .to(this.$ele.find("p"), 0.75, {
	        x: 0,
	        ease: Expo.easeOut
	      }, 0.1);

	      return tl;
	    }
	  }, {
	    key: "onEnter",
	    value: function onEnter() {
	      // console.log(this.tl);
	      // this.tl.kill();
	      if (this.tl) this.tl.kill();
	      this.tl = new TimelineMax();

	      this.tl.add(this.show());
	    }
	  }, {
	    key: "onLeave",
	    value: function onLeave() {
	      var progress = this.tl.progress();
	      this.tl.kill();
	      this.tl = new TimelineMax();
	      this.tl.add(this.hide(progress));
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);

	      this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));
	      this.$ele.on("mouseleave." + this.name, this.onLeave.bind(this));
	      this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
	      this.$ele.on("touchend." + this.name, this.onLeave.bind(this));
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller(ele) {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$ele = $(ele);

	    _this.setup();
	    _this.setEvents();

	    // this.timeline();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "timeline",
	    value: function timeline() {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "onResize",
	    value: function onResize() {}
	  }, {
	    key: "show",
	    value: function show() {
	      var tl = new TimelineMax();
	      var $line = this.$ele.find(".menu-close-line span");

	      $line.each(function (i, e) {
	        tl.to(e, 0.5, {
	          scaleX: 1,
	          ease: Expo.easeOut,
	          startAt: {
	            "transform-origin": "100% 0",
	            x: 0,
	            rotation: i == 0 ? -30 : 30
	          }
	        }, i * 0.1);
	      });
	      tl.to(this.$ele.find(".menu-close-text"), 1, {
	        x: 0,
	        opacity: 1,
	        ease: Expo.easeOut,
	        startAt: {
	          x: 10
	        }
	      }, 0);
	      return tl;
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      if (this.tl) this.tl.kill();

	      var tl = new TimelineMax();
	      var $line = this.$ele.find(".menu-close-line span");
	      $line.each(function (i, e) {
	        tl.set(e, {
	          x: 8,
	          rotation: i == 0 ? 30 : -30,
	          "transform-origin": "0 0"
	        }, 0);
	        tl.to(e, 0.5, {
	          scaleX: 0,
	          ease: Expo.easeOut
	        }, i * 0.1);
	      });
	      tl.to(this.$ele.find(".menu-close-text"), 1, {
	        x: -10,
	        opacity: 0,
	        ease: Expo.easeOut
	      }, 0);
	      return tl;
	    }
	  }, {
	    key: "showHover",
	    value: function showHover() {
	      var tl = new TimelineMax();
	      var $line = this.$ele.find(".menu-close-line span");
	      $line.each(function (i, e) {
	        tl.set(e, {
	          x: 8,
	          rotation: i == 0 ? 30 : -30,
	          "transform-origin": "0 0"
	        }, 0);
	        tl.to(e, 0.5, {
	          scaleX: 0,
	          ease: Expo.easeOut
	        }, i * 0.1);
	      });
	      $line.each(function (i, e) {
	        tl.to(e, 0.5, {
	          scaleX: 1,
	          ease: Expo.easeOut,
	          startAt: {
	            "transform-origin": "100% 0",
	            x: 0,
	            rotation: i == 0 ? -30 : 30
	          }
	        }, i * 0.1 + 0.5);
	      });
	      return tl;
	    }
	  }, {
	    key: "onEnter",
	    value: function onEnter() {
	      // console.log(this.tl);
	      // this.tl.kill();
	      if (this.tl) this.tl.kill();
	      this.tl = new TimelineMax();

	      this.tl.add(this.showHover());
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);

	      this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));

	      this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller(ele) {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$ele = $(ele);

	    _this.setup();
	    _this.setEvents();

	    // this.timeline();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "timeline",
	    value: function timeline() {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "onResize",
	    value: function onResize() {}
	  }, {
	    key: "show",
	    value: function show() {
	      var tl = new TimelineMax();
	      var $line = this.$ele.find(".header-menu-btn-line");
	      // tl.to(
	      //   ".header-menu-btn",
	      //   1,
	      //   {
	      //     y: 0,
	      //     ease: Expo.easeOut
	      //   },
	      //   0
	      // );
	      $line.each(function (i, e) {
	        tl.to(e, 0.5, {
	          scaleX: 1,
	          ease: Expo.easeOut
	        }, i * 0.1);
	      });
	      tl.to(this.$ele.find(".header-menu-btn-text"), 1, {
	        x: 0,
	        opacity: 1,
	        ease: Expo.easeOut,
	        startAt: {
	          x: 10
	        }
	      }, 0);
	      return tl;
	    }
	  }, {
	    key: "showHover",
	    value: function showHover() {
	      var tl = new TimelineMax();
	      var $line = this.$ele.find(".header-menu-btn-line");
	      $line.each(function (i, e) {
	        tl.to(e, 0.5, {
	          scaleX: 0,
	          ease: Expo.easeOut,
	          startAt: {
	            "transform-origin": "0 0"
	          }
	        }, i * 0.1);
	      });
	      $line.each(function (i, e) {
	        tl.to(e, 0.5, {
	          scaleX: 1,
	          ease: Expo.easeOut,
	          startAt: {
	            "transform-origin": "100% 0"
	          }
	        }, i * 0.1 + 0.5);
	      });
	      return tl;
	    }
	  }, {
	    key: "onEnter",
	    value: function onEnter() {
	      // console.log(this.tl);
	      // this.tl.kill();
	      if (this.tl) this.tl.kill();
	      this.tl = new TimelineMax();

	      this.tl.add(this.showHover());
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);

	      this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));

	      this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var _Base = __webpack_require__(15);

	var _Base2 = _interopRequireDefault(_Base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller($contents) {
	    _classCallCheck(this, Controller);

	    this.$contents = $contents;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "show",
	    value: function show() {
	      var btnshow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {};

	      var tl = new TimelineMax();
	      this.$contents.css({
	        display: "block"
	      });
	      tl.to(this.$contents.find(".bg"), 0.25, {
	        opacity: 1,
	        ease: Expo.easeOut
	      }, 0);
	      this.$contents.find(".bg span").each(function (i, e) {
	        tl.to(e, 0.2, {
	          "background-color": "rgb(200,200,200)",
	          ease: Expo.easeOut
	        }, i * 0.05);
	        tl.to(e, 0.5, {
	          "background-color": "rgb(243,243,243)",
	          ease: Expo.easeOut
	        }, i * 0.05 + 0.2);
	        tl.to(e, 0.75, {
	          scaleY: 1,
	          ease: Expo.easeOut
	        }, i * 0.05);
	      });
	      this.$contents.find(".menu-item").each(function (i, e) {
	        tl.to(e, 1, {
	          x: 0,
	          opacity: 1,
	          ease: Expo.easeOut,
	          startAt: {
	            x: 10
	          }
	        }, i * 0.05);
	      });
	      this.$contents.find(".menu-lang-item").each(function (i, e) {
	        tl.to(e, 1, {
	          x: 0,
	          opacity: 1,
	          ease: Expo.easeOut,
	          startAt: {
	            x: 10
	          }
	        }, i * 0.1 + 0.5);
	      });
	      tl.to(this.$contents.find(".menu-search"), 1, {
	        opacity: 1,
	        x: 0,
	        ease: Expo.easeOut,
	        startAt: {
	          x: 10
	        }
	      }, 0.6);
	      tl.add(btnshow(), 0.7);
	      return tl;
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var _this = this;

	      var btnhide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {};

	      var tl = new TimelineMax();

	      this.$contents.find(".menu-item").each(function (i, e) {
	        tl.to(e, 1, {
	          x: -10,
	          opacity: 0,
	          ease: Expo.easeOut
	        }, i * 0.05);
	      });
	      this.$contents.find(".menu-lang-item").each(function (i, e) {
	        tl.to(e, 1, {
	          x: -10,
	          opacity: 0,
	          ease: Expo.easeOut
	        }, i * 0.1);
	      });
	      tl.to(this.$contents.find(".menu-search"), 1, {
	        opacity: 0,
	        ease: Expo.easeOut,
	        x: -10
	      }, 0);
	      tl.add(btnhide(), 0);
	      this.$contents.find(".bg span").each(function (i, e) {
	        var index = _this.$contents.find(".bg span").length - i - 1;
	        tl.to(e, 0.2, {
	          "background-color": "rgb(200,200,200)",
	          ease: Expo.easeOut
	        }, index * 0.05);
	        tl.to(e, 0.5, {
	          "background-color": "rgb(243,243,243)",
	          ease: Expo.easeOut
	        }, index * 0.05 + 0.2);
	        tl.to(e, 0.75, {
	          scaleY: 0,
	          ease: Expo.easeOut
	        }, index * 0.05);
	      });
	      tl.to(this.$contents.find(".bg"), 0.25, {
	        opacity: 0,
	        ease: Expo.easeOut,
	        onComplete: function onComplete() {
	          _this.$contents.css({
	            display: "none"
	          });
	        }
	      }, 1);
	      return tl;
	    }
	  }]);

	  return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var MathUtils = {
	  map: function map(x, a, b, c, d) {
	    return (x - a) * (d - c) / (b - a) + c;
	  },
	  lerp: function lerp(a, b, n) {
	    return (1 - n) * a + n * b;
	  }
	};

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller($ele, _ref) {
	    var ease = _ref.ease,
	        max = _ref.max;

	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$ele = $ele;
	    _this.ease = ease;
	    _this.max = max;

	    _this.$ele.get(0).style.setProperty("--max", max + "px");

	    _this.target = _this.$ele.find(".parallax-inner").get(0);

	    _this.setup();
	    _this.setEvents();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      var _this2 = this;

	      this.renderedStyles = {
	        previous: 0,
	        current: 0,
	        ease: this.ease,
	        maxValue: 4,
	        setValue: function setValue() {
	          var maxValue = _this2.max;
	          var minValue = -1 * maxValue;
	          return Math.max(Math.min(MathUtils.map(_this2.props.top - _this2.st, window.innerHeight, -1 * _this2.props.height, minValue, maxValue), maxValue), minValue);
	        }
	      };
	      this.reset();
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "onU", this).call(this);
	    }
	  }, {
	    key: "scroll",
	    value: function scroll() {
	      this.st = $(window).scrollTop();
	    }
	  }, {
	    key: "getSize",
	    value: function getSize() {
	      this.props = {
	        height: this.$ele.outerHeight(),
	        top: this.$ele.offset().top - this.st
	      };
	      this.renderedStyles.current = this.renderedStyles.previous = this.renderedStyles.setValue();
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this.scroll();
	      this.getSize();
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      // this.getSize();
	      this.renderedStyles.current = this.renderedStyles.setValue();
	      this.renderedStyles.previous = MathUtils.lerp(this.renderedStyles.previous, this.renderedStyles.current, this.renderedStyles.ease);

	      this.target.style.transform = "translate(0, " + -this.renderedStyles.previous + "px)";
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this3 = this;

	      $(window).on("scroll", function (e) {
	        _this3.scroll();
	      });
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller(ele) {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$ele = $(ele);
	    _this.setup();
	    _this.setEvents();

	    // this.timeline();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "timeline",
	    value: function timeline() {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "onResize",
	    value: function onResize() {}
	  }, {
	    key: "show",
	    value: function show() {
	      var tl = new TimelineMax();
	      tl

	      //img
	      .to(this.$ele.find("img"), 1.75, {
	        scale: 1.1,
	        ease: Expo.easeOut
	      }).to(this.$ele.find(".text"), 1, {
	        opacity: 0.5,
	        ease: Expo.easeOut
	      }, 0);

	      return tl;
	    }
	  }, {
	    key: "hide",
	    value: function hide(progress) {
	      var tl = new TimelineMax();
	      tl
	      //img
	      .to(this.$ele.find("img"), 1.75, {
	        scale: 1,
	        ease: Expo.easeOut
	      }).to(this.$ele.find(".text"), 1, {
	        opacity: 1,
	        ease: Expo.easeOut
	      }, 0);
	      return tl;
	    }
	  }, {
	    key: "onEnter",
	    value: function onEnter() {
	      // console.log(this.tl);
	      // this.tl.kill();
	      if (this.tl) this.tl.kill();
	      this.tl = new TimelineMax();

	      this.tl.add(this.show());
	    }
	  }, {
	    key: "onLeave",
	    value: function onLeave() {
	      var progress = this.tl.progress();
	      this.tl.kill();
	      this.tl = new TimelineMax();
	      this.tl.add(this.hide(progress));
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);

	      this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));
	      this.$ele.on("mouseleave." + this.name, this.onLeave.bind(this));
	      this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
	      this.$ele.on("touchend." + this.name, this.onLeave.bind(this));
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Base2 = __webpack_require__(15);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
	//
	//  Controller
	//
	//--------------------------------------------------

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller($ele) {
	    _classCallCheck(this, Controller);

	    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

	    _this.$ele = $ele;
	    _this.setup();
	    _this.setEvents();

	    // this.timeline();
	    return _this;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "timeline",
	    value: function timeline() {
	      var _this2 = this;

	      var tl = new TimelineMax();
	      var h = this.$ele.find(".bar").height() * 1.1;
	      tl.to(this.$ele.find(".bar"), 1.75, {
	        y: h,
	        ease: Expo.easeOut
	      }).set(this.$ele.find(".bar"), {
	        y: -h
	      }).add(function (e) {
	        _this2.timeline();
	      });
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var _this3 = this;

	      var tl = new TimelineMax();
	      var h = this.$ele.find(".bar").height() * 1.1;
	      tl.to(this.$ele.find(".bar"), 1.75, {
	        y: h,
	        ease: Expo.easeOut
	      }).to(this.$ele.find(".bar2"), 1.75, {
	        y: 0,
	        ease: Expo.easeOut
	      }, 0.1).set(this.$ele.find(".bar"), {
	        y: -h
	      }).add(function (e) {
	        _this3.timeline();
	      });
	      return tl;
	    }
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "onResize",
	    value: function onResize() {}
	  }, {
	    key: "scroll",
	    value: function scroll() {
	      var st = { top: $(window).scrollTop() };
	      var top = $(".section.index-about").offset().top;
	      TweenMax.to(st, 0.75, {
	        top: top - 130,
	        ease: Expo.easeOut,
	        onUpdate: function onUpdate() {
	          $(window).scrollTop(st.top);
	        }
	      });
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this4 = this;

	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "setEvents", this).call(this);

	      this.$ele.on("click", function (e) {
	        _this4.scroll();
	      });
	    }
	  }]);

	  return Controller;
	}(_Base3.default);

	exports.default = Controller;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Controller = __webpack_require__(47);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _Controller3 = __webpack_require__(48);

	var _Controller4 = _interopRequireDefault(_Controller3);

	var _Controller5 = __webpack_require__(60);

	var _Controller6 = _interopRequireDefault(_Controller5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller() {
	    _classCallCheck(this, Controller);

	    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	  }

	  _createClass(Controller, [{
	    key: "init",
	    value: function init() {
	      this.name = "UIController";
	      this.flag = new _Controller4.default();
	      this.dom = new _Controller6.default();
	    }
	  }, {
	    key: "timeline",
	    value: function timeline() {
	      var _this2 = this;

	      var menuBtnShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {};

	      return new Promise(function (resolve, reject) {
	        var tl = new TimelineMax({ delay: 0.0 });

	        tl

	        // ------------------------------------------------------------
	        // canvas
	        // ------------------------------------------------------------

	        // draw line
	        // 広がる
	        //   y,z
	        .add(function () {
	          _this2.flag.show();
	        }, 1.0)

	        // effectを強める
	        .add(function () {
	          TweenMax.to(_this2.flag.setup.effectBloom, 2.0, {
	            strength: 6,
	            ease: Power2.easeInOut
	          });
	          // TweenMax.to(this.flag.setup.effectBloom, 1.5, {
	          //   radius: 3,
	          //   ease: Power2.easeInOut,
	          // });
	        }, 1.0 + 1.5)

	        // カメラひくとき → zでゆっくり、パパっと一気に移動 → infocusで書いてる
	        //   rgb, blur, zigzag, gunya, glitch(テレビ線など)→ kddi
	        //     1frame強めの → this.frameか？
	        //     3frame弱めでrandomなのを2、3回？

	        //   composerに入れる → soyフォルダに書いてるか？
	        .add(function () {
	          // camera
	          var tl = new TimelineMax();

	          tl
	          // ゆっくり引く
	          .to(_this2.flag.setup.camera.position, 2.0, {
	            z: _this2.flag.setup.defz,
	            ease: Expo.easeInOut
	          }, 0.0)
	          // パッと引く
	          .to(_this2.flag.setup.camera.position, 0.01, {
	            z: _this2.flag.setup.defz * 0.85,
	            ease: Expo.easeOut,
	            onStart: function onStart() {
	              // this.flag.setup.effectBloom.threshold = 0.03;
	              _this2.flag.setup.effectBloom.strength = 10;
	              _this2.flag.setup.effectBloom.radius = 3;
	              _this2.flag.setup.renderer.toneMappingExposure = Math.pow(1.5, 4.0);
	            }
	          }, 0.8)
	          // 再度ゆっくり
	          .to(_this2.flag.setup.camera.position, 4.5, {
	            z: _this2.flag.setup.defz * 1,
	            ease: Expo.easeOut,
	            onStart: function onStart() {
	              // TweenMax.killTWeensOf(this.flag.setup.effectBloom.strength);
	              // this.flag.setup.effectBloom.threshold = 0.14;
	              _this2.flag.setup.effectBloom.strength = 2;
	              _this2.flag.setup.effectBloom.radius = 0.3;
	              _this2.flag.setup.renderer.toneMappingExposure = Math.pow(1.3, 4.0);
	            }
	          }, 0.8 + 0.05);
	        }, 4.0)

	        // ------------------------------------------------------------
	        // dom
	        // ------------------------------------------------------------
	        .add(function () {
	          _this2.dom.show(menuBtnShow);
	          _this2.flag.bg.show();
	        }, 4.0 + 0.9).add(function () {
	          resolve();
	        }, 6);
	      });
	    }
	  }, {
	    key: "setEvent",
	    value: function setEvent() {
	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "__setUpdateFlag", this).call(this, false);
	    }
	  }, {
	    key: "reset",
	    value: function reset() {}
	  }]);

	  return Controller;
	}(_Controller2.default);

	exports.default = Controller;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller(param) {
	    _classCallCheck(this, Controller);

	    this.__init();
	    this.__setEvent();
	  }

	  _createClass(Controller, [{
	    key: "__init",
	    value: function __init() {
	      this.init();
	      this.setEvent();
	    }
	  }, {
	    key: "__setEvent",
	    value: function __setEvent() {
	      this.__setUpdate();
	    }
	  }, {
	    key: "__setUpdate",
	    value: function __setUpdate() {
	      var _this = this;

	      window.updates.push({
	        id: this.name,
	        cb: function cb(e) {
	          _this.__update();
	        }
	      });
	    }
	  }, {
	    key: "__setUpdateFlag",
	    value: function __setUpdateFlag() {
	      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      this.__is_update = flag;
	    }
	  }, {
	    key: "__update",
	    value: function __update() {
	      if (this.__is_update) this.update();
	    }
	  }]);

	  return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Controller = __webpack_require__(47);

	var _Controller2 = _interopRequireDefault(_Controller);

	var _Controller3 = __webpack_require__(49);

	var _Controller4 = _interopRequireDefault(_Controller3);

	var _Controller5 = __webpack_require__(50);

	var _Controller6 = _interopRequireDefault(_Controller5);

	var _Controller7 = __webpack_require__(55);

	var _Controller8 = _interopRequireDefault(_Controller7);

	var _Controller9 = __webpack_require__(58);

	var _Controller10 = _interopRequireDefault(_Controller9);

	var _dat = __webpack_require__(59);

	var dat = _interopRequireWildcard(_dat);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MathUtils = {
	  map: function map(x, a, b, c, d) {
	    return (x - a) * (d - c) / (b - a) + c;
	  },
	  lerp: function lerp(a, b, n) {
	    return (1 - n) * a + n * b;
	  },
	  clamp: function clamp(val, min, max) {
	    return Math.max(Math.min(val, max), min);
	  }
	};

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller() {
	    _classCallCheck(this, Controller);

	    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	  }

	  _createClass(Controller, [{
	    key: "init",
	    value: function init() {
	      this.name = "UIController";
	      window.dat = new dat.GUI();
	      this.$canvas = $(".canvas");
	      this.bp = 768;
	      this.per = this.$canvas.width() / 1280;
	      if (this.per > 1) this.per = 1;

	      this.speed = 0.1;

	      // layout
	      var posi = [new THREE.Vector3(-window.innerWidth * 0.5 + 100, this.$canvas.height() * 0.5, 0), new THREE.Vector3(-window.innerWidth * 0.5 - 25, this.$canvas.height() * 0.5 - 800, 0)];

	      // objects
	      this.bg = new _Controller10.default();
	      this.stick = new _Controller6.default(posi, 10);
	      this.sail = new _Controller8.default(posi, 10);

	      this.obj = new THREE.Group();

	      this.obj.add(this.stick.obj);
	      this.obj.add(this.sail.obj);

	      // layout

	      this.obj.position.x = window.innerWidth * 0.5 - 585;

	      this.obj.position.y = -window.innerHeight * 0.5 + 375;

	      if (this.$canvas.width() <= this.bp) {
	        this.obj.position.x = window.innerWidth * 0.5 - 300;
	        this.obj.scale.set(this.per + 0.05, this.per + 0.05, this.per + 0.05);
	      }
	      // this.obj.position.z = -1000

	      // add scene
	      var scene = new THREE.Scene();
	      scene.add(this.bg.obj);
	      scene.add(this.obj);
	      scene.background = new THREE.Color(0x00076d);
	      this.setup = new _Controller4.default(this.$canvas, this.obj, scene);
	      // this.setup.scene.add();

	      this.mousePosi = {
	        x: 0,
	        y: 0
	      };
	      this.prevMosePosi = {
	        x: 0,
	        y: 0
	      };
	      // this.update();
	    }
	  }, {
	    key: "setEvent",
	    value: function setEvent() {
	      var _this2 = this;

	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "__setUpdateFlag", this).call(this, true);
	      $(window).on("resize", function (e) {
	        _this2.setup.onWindowResize();
	        _this2.bg.resize();
	        if (_this2.$canvas.width() <= _this2.bp) {
	          var per = _this2.$canvas.width() / 1280;
	          _this2.obj.scale.set(per + 0.05, per + 0.05, per + 0.05);
	          _this2.obj.position.x = window.innerWidth * 0.5 - 300;
	        } else {
	          _this2.obj.scale.set(1, 1, 1);
	          _this2.obj.position.x = window.innerWidth * 0.5 - 585;
	        }
	      });
	      var interaction = window.dat.addFolder("interaction");
	      this.mouseMove = false;
	      interaction.add(this, "mouseMove");

	      $(window).on("mousemove", function (e) {
	        if (_this2.mouseMove) {
	          _this2.mousePosi.x = e.pageX;
	          _this2.mousePosi.y = e.pageY;
	        } else {
	          _this2.mousePosi.x = 0;
	          _this2.mousePosi.y = 0;
	        }
	      });
	    }
	  }, {
	    key: "reset",
	    value: function reset() {}
	  }, {
	    key: "show",
	    value: function show() {
	      this.sail.show();
	      this.stick.show();
	      // this.bg.show();
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      // update
	      this.bg.update({
	        posi: this.setup.camera.position.z,
	        depth: this.setup.defz
	      });
	      this.stick.update();
	      this.sail.update();
	      this.setup.render();

	      // マウス インタラクション
	      this.prevMosePosi = {
	        x: Math.floor(MathUtils.lerp(this.prevMosePosi.x, this.mousePosi.x, this.speed) * 100) / 100,
	        y: Math.floor(MathUtils.lerp(this.prevMosePosi.y, this.mousePosi.y, this.speed) * 100) / 100
	      };
	      this.obj.rotation.y = (this.prevMosePosi.x - window.innerWidth * 0.5) / window.innerWidth * 0.3;
	      this.obj.rotation.x = (this.prevMosePosi.y - window.innerHeight * 0.5) / window.innerHeight * 0.3;
	    }
	  }]);

	  return Controller;
	}(_Controller2.default);

	exports.default = Controller;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Controller = __webpack_require__(47);

	var _Controller2 = _interopRequireDefault(_Controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ClassName = function (_Base) {
	  _inherits(ClassName, _Base);

	  function ClassName($dom, obj, scene) {
	    _classCallCheck(this, ClassName);

	    var _this = _possibleConstructorReturn(this, (ClassName.__proto__ || Object.getPrototypeOf(ClassName)).call(this));

	    _this.$dom = $dom;
	    _this.obj = obj;
	    _this.objScene = scene;
	    // this.is_autoRender = is_autoRender;
	    _this.initScene();
	    _this.initCamera();
	    _this.initRender();
	    _this.initComposer();

	    _this.render();
	    return _this;
	  }

	  _createClass(ClassName, [{
	    key: "init",
	    value: function init() {}
	  }, {
	    key: "setEvent",
	    value: function setEvent() {
	      _get(ClassName.prototype.__proto__ || Object.getPrototypeOf(ClassName.prototype), "__setUpdateFlag", this).call(this, false);
	    }
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "initScene",
	    value: function initScene() {
	      this.scene = new THREE.Scene();
	      // this.scene.background = new THREE.Color(0xff0000);
	    }
	  }, {
	    key: "initCamera",
	    value: function initCamera() {
	      this.camera = new THREE.PerspectiveCamera(45, this.$dom.width() / this.$dom.height(), 1, 20000);
	      this.setCameraByPixel();
	    }
	  }, {
	    key: "setCameraByPixel",
	    value: function setCameraByPixel() {
	      var isRisize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      this.w = this.$dom.width();
	      this.h = this.$dom.height();
	      var fov = 45;
	      var vFOV = fov * (Math.PI / 180);
	      var vpHeight = this.h;
	      var z = vpHeight / (2 * Math.tan(vFOV / 2));
	      this.defz = z * 1;
	      this.z = isRisize ? z : z * 0.27;
	      this.camera.position.set(0, 0, this.z);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	      // this.camera.aspect = this.w / this.h;
	      this.camera.aspect = this.w / this.h;
	      this.camera.updateProjectionMatrix();
	    }
	  }, {
	    key: "initRender",
	    value: function initRender() {
	      var _this2 = this;

	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        alpha: true
	      });
	      var v = {
	        画面の明るさ: 1.3
	      };

	      // this.renderer.setPixelRatio(window.devicePixelRatio);
	      this.renderer.toneMappingExposure = Math.pow(v["画面の明るさ"], 4.0);
	      this._dat = dat.addFolder("glow");
	      // console.log(Math.pow(v.p, 4.0));
	      this._dat.add(v, "画面の明るさ", 0.1, 2).onChange(function (e) {
	        _this2.renderer.toneMappingExposure = Math.pow(e, 4.0);
	        // console.log(Math.pow(e, 4.0));
	      });

	      this.renderer.toneMapping = THREE.ReinhardToneMapping;
	      // this.renderer.context.enable(
	      //   this.renderer.context.SAMPLE_ALPHA_TO_COVERAGE
	      // );
	      this.$dom.append(this.renderer.domElement);
	    }
	  }, {
	    key: "initComposer",
	    value: function initComposer() {
	      var _this3 = this;

	      // console.log(THREE.EffectComposer);
	      this.composer = new THREE.EffectComposer(this.renderer);
	      var renderPass = new THREE.RenderPass(this.objScene, this.camera);
	      this.composer.addPass(renderPass);
	      var param = {
	        しきい値: 0.139,
	        // 対象の明るさ: 1.9,
	        // グローの半径: 0.36,
	        対象の明るさ: 2,
	        グローの半径: 0.3
	      };
	      this.effectBloom = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.01, 1.07, 0.85, this.obj, this.scene, this.camera);
	      this.effectBloom.threshold = param["しきい値"];
	      this.effectBloom.strength = param["対象の明るさ"];
	      this.effectBloom.radius = param["グローの半径"];
	      this._dat.add(param, "しきい値", 0, 1).onChange(function (e) {
	        _this3.effectBloom.threshold = e;
	      });
	      this._dat.add(param, "対象の明るさ", 0, 3).onChange(function (e) {
	        _this3.effectBloom.strength = e;
	      });
	      this._dat.add(param, "グローの半径", 0, 1).onChange(function (e) {
	        _this3.effectBloom.radius = e;
	      });
	      this.composer.addPass(this.effectBloom);
	      var toScreen = new THREE.ShaderPass(THREE.CopyShader);
	      toScreen.renderToScreen = true;
	      this.composer.addPass(toScreen);
	      this.onWindowResize(true);
	    }
	  }, {
	    key: "onWindowResize",
	    value: function onWindowResize(isInit) {
	      var w = this.$dom.width();
	      var h = this.$dom.height();
	      this.renderer.setPixelRatio(window.devicePixelRatio);
	      this.renderer.setSize(w, h);
	      this.composer.setSize(w, h);
	      this.composer.setPixelRatio(window.devicePixelRatio);
	      this.setCameraByPixel(!isInit);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      // this.renderer.render(this.objScene, this.camera);
	      this.composer.render();
	      if (this.is_autoRender) {
	        requestAnimationFrame(this.render.bind(this));
	      }
	    }
	  }]);

	  return ClassName;
	}(_Controller2.default);

	exports.default = ClassName;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Base = __webpack_require__(51);

	var _Base2 = __webpack_require__(52);

	var _Cap = __webpack_require__(53);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var noise = __webpack_require__(54);

	var Controller = function () {
	  function Controller(posi, r) {
	    _classCallCheck(this, Controller);

	    this.posi = posi;
	    this.r = r;
	    this.obj = new THREE.Group();
	    this.color = 0x0047e9;
	    this.TIME = 0;
	    this.setup();
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      var _this = this;

	      //line
	      this.base = (0, _Base.Base)(this.posi, this.color, this.r);
	      this.base2 = (0, _Base2.Base2)(this.posi, this.color, this.r);
	      this.cap = (0, _Cap.Cap)(this.posi, this.color, this.r + 7, this.r);
	      this.obj.add(this.base);
	      this.obj.add(this.base2);
	      this.obj.add(this.cap);
	      this.chobisens = [];
	      this.getMesh(this.obj).map(function (obj) {
	        if (obj.name == "chobiline") _this.chobisens.push(obj);
	      });

	      console.log(this.chobisens[0].geometry.attributes.position.array);
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      var _this2 = this;

	      var time = Date.now() / 5000;
	      ++this.TIME;
	      this.chobisens.forEach(function (obj) {
	        var points = obj.geometry.attributes.position.array;
	        var l = points.length;
	        for (var i = 0; i < l; i++) {
	          if (i % 3 == 2 && i != 2) {
	            obj.geometry.attributes.position.needsUpdate = true;
	            var n = noise.perlin2(i, time);
	            var p = _this2.sin(_this2.TIME * -1, i) * n;

	            points[i] += p * 0.5;
	          }
	        }
	      });
	    }
	  }, {
	    key: "sin",
	    value: function sin(t, i) {
	      return 2 * Math.sin((t * 3 + i) / 20);
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var tl = new TimelineMax();
	      this.getMesh(this.obj).forEach(function (obj, index) {
	        tl.to(obj.material, 1, {
	          opacity: 1,
	          ease: Expo.easeOut
	        }, index * 0);
	      });

	      return tl;
	    }
	  }, {
	    key: "getMesh",
	    value: function getMesh(obj) {
	      var _this3 = this;

	      var arr = [];
	      obj.children.forEach(function (children) {
	        if (children.type == "Group") {
	          arr.push.apply(arr, _toConsumableArray(_this3.getMesh(children)));
	        } else {
	          arr.push(children);
	        }
	      });
	      return arr;
	    }
	  }]);

	  return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Base = Base;
	function Base(posi, color, r) {
	  var obj = new THREE.Group();
	  for (var i = 0; i < 2; i++) {
	    var _line = line(posi, color);
	    _line.position.x = r * i;
	    obj.add(_line);
	  }
	  var _curve = curve(r, color, posi);
	  obj.add(_curve);

	  return obj;
	}

	function line(posi, color) {
	  var points = [];
	  for (var i = 0; i < 2; i++) {
	    // const
	    points.push(posi[i].x, posi[i].y, posi[i].z);
	  }
	  var geometry = new THREE.BufferGeometry();
	  geometry.addAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
	  // const geometry = line.geometry;
	  var material = new THREE.LineBasicMaterial({
	    color: color,
	    opacity: 0,
	    transparent: true,
	    depthTest: false
	  });
	  return new THREE.Line(geometry, material);
	}

	function curve(r, color, posi) {
	  var points = [];
	  for (var j = 0; j < Math.PI; j += 2 * Math.PI / 10) {
	    points.push(r * Math.cos(j) * 0.5, r * Math.sin(j) * 0.5, 0);
	  }
	  var geometry = new THREE.BufferGeometry();
	  geometry.addAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));

	  var material = new THREE.LineBasicMaterial({
	    color: color,
	    opacity: 0,
	    transparent: true
	  });
	  var obj = new THREE.Line(geometry, material);
	  obj.rotation.x = 0.5 * Math.PI;
	  obj.position.y = posi[0].y;
	  obj.position.x = posi[0].x + r * 0.5;
	  obj.position.z = posi[0].z;
	  return obj;
	}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Base2 = Base2;
	function Base2(posi, color, r) {
	  var obj = new THREE.Group();
	  var v = new THREE.Vector3(posi[0].x - posi[1].x, posi[0].y - posi[1].y, posi[0].z - posi[1].z);
	  var linePer = -0.76;
	  var _line = curve2(posi[0], v.clone().multiplyScalar(linePer).add(new THREE.Vector3(posi[0].x, posi[0].y, posi[0].z)), color, v.clone());

	  _line.position.x += r + 3;
	  obj.add(_line);

	  var _line2 = curve(v.clone().multiplyScalar(linePer + 0.04).add(new THREE.Vector3(posi[0].x, posi[0].y, posi[0].z)), posi[1], color, v.clone());

	  _line2.position.x += r + 3;
	  obj.add(_line2);

	  var _pole = pole(posi[0], color, v.clone());
	  _pole.position.x += r + 5;
	  obj.add(_pole);

	  var _pole2 = pole(v.clone().multiplyScalar(linePer + 0.02).add(new THREE.Vector3(posi[0].x, posi[0].y, posi[0].z)), color, v.clone());
	  _pole2.position.x += r + 5;
	  obj.add(_pole2);

	  return obj;
	}

	function pole(posi, color, v) {
	  var obj = new THREE.Group();
	  var _v = v.clone().multiplyScalar(-0.05).add(new THREE.Vector3(posi.x, posi.y, posi.z));
	  var _v2 = v.clone().multiplyScalar(-0.02).add(new THREE.Vector3(posi.x, posi.y, posi.z));
	  var points = [];
	  points.push(_v.x, _v.y, _v.z);
	  points.push(_v2.x, _v2.y, _v2.z);
	  var geometry = new THREE.BufferGeometry();

	  var material = new THREE.LineBasicMaterial({
	    color: color,
	    opacity: 0,
	    transparent: true
	  });
	  geometry.addAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
	  obj.add(new THREE.Line(geometry, material));

	  var _tube = tube(_v, _v2, material);
	  obj.add(_tube);
	  return obj;
	}

	function tube(_v, _v2, material) {
	  var obj = new THREE.Group();
	  for (var i = 0; i < 2; i++) {
	    var points = [];
	    var v1 = i == 0 ? _v : _v2;
	    var v2 = i == 0 ? v1.clone().sub(new THREE.Vector3(2.5, -4, 0)) : v1.clone().sub(new THREE.Vector3(2.5, -2.5, 0));
	    var v3 = v1.clone().sub(new THREE.Vector3(5, 0, 0));
	    var _curve = new THREE.QuadraticBezierCurve3(v1, v2, v3);
	    var arr = _curve.getPoints(50);
	    for (var u = 0; u < arr.length; u++) {
	      points.push(arr[u].x, arr[u].y, arr[u].z);
	    }
	    var _geometry = new THREE.BufferGeometry();
	    _geometry.addAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
	    obj.add(new THREE.Line(_geometry, material));
	    if (i == 0) {
	      //チョビ線
	      var _points = [];
	      var v4 = v1.clone().sub(new THREE.Vector3(-13, 5, 0));
	      var _geometry2 = new THREE.BufferGeometry();
	      // _points.push(v1.x, v1.y, v1.z);
	      var _v5 = v4.clone().sub(v1);

	      var l = _v5.length();
	      for (var u = 0; u < 5; u++) {
	        var p = _v5.clone().multiplyScalar(u / 5).add(v1);
	        _points.push(p.x, p.y, p.z);
	      }
	      _geometry2.addAttribute("position", new THREE.BufferAttribute(new Float32Array(_points), 3));
	      var line = new THREE.Line(_geometry2, material);
	      line.name = "chobiline";
	      obj.add(line);
	    }
	  }

	  return obj;
	}

	function curve2(posi, posi2, color, v) {
	  var points = [];
	  var _v = v.clone().multiplyScalar(-0.35).add(new THREE.Vector3(posi.x, posi.y, posi.z));
	  var _v2 = v.clone().multiplyScalar(-0.05).add(new THREE.Vector3(posi.x, posi.y, posi.z));
	  var _curve = new THREE.QuadraticBezierCurve3(_v2, _v.add(new THREE.Vector3(10, 10, 0)), posi2);
	  var arr = _curve.getPoints(50);
	  for (var i = 0; i < arr.length; i++) {
	    points.push(arr[i].x, arr[i].y, arr[i].z);
	  }
	  var geometry = new THREE.BufferGeometry();
	  geometry.addAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
	  // const geometry = line.geometry;
	  var material = new THREE.LineBasicMaterial({
	    color: color,
	    opacity: 0,
	    transparent: true,
	    depthTest: false
	  });
	  return new THREE.Line(geometry, material);
	}

	function curve(posi, posi2, color, v) {
	  var points = [];
	  var _v = v.clone().multiplyScalar(-0.35).add(new THREE.Vector3(posi.x, posi.y, posi.z));
	  var _v2 = v.clone().multiplyScalar(-0.07).add(new THREE.Vector3(posi.x, posi.y, posi.z));
	  var _curve = new THREE.QuadraticBezierCurve3(_v2, posi2.add(new THREE.Vector3(2, 2, 0)), posi2);
	  var arr = _curve.getPoints(50);
	  for (var i = 0; i < arr.length; i++) {
	    points.push(arr[i].x, arr[i].y, arr[i].z);
	  }
	  var geometry = new THREE.BufferGeometry();
	  geometry.addAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
	  // const geometry = line.geometry;
	  var material = new THREE.LineBasicMaterial({
	    color: color,
	    opacity: 0,
	    transparent: true,
	    depthTest: false
	  });
	  return new THREE.Line(geometry, material);
	}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Cap = Cap;
	function Cap(posi, color, r, baser) {
	  var obj = new THREE.Group();
	  var _posi = [{ x: -r * 0.5, y: 0 }, { x: -r * 0.5, y: 10 }];
	  // for (let i = 0; i < 2; i++) {
	  //   const _line = line(_posi, color);
	  //   _line.position.x = r * i;
	  //   obj.add(_line);
	  // }

	  var _curve = curve(posi[0].clone().add(new THREE.Vector3(0, 0, 0)), posi[0].clone().add(new THREE.Vector3(baser, 0, 0)), color);
	  obj.add(_curve);

	  var _curve2 = curve2(posi, baser, color);
	  obj.add(_curve2);
	  // obj.position.x = 1;
	  return obj;
	}

	function curve(posi1, posi2, color) {
	  var obj = new THREE.Group();

	  var points = [];
	  var v = posi1.clone().sub(posi2).multiplyScalar(0.5).add(posi2).add(new THREE.Vector3(0, 4.5, 0));
	  var v2 = posi1.clone().sub(v).multiplyScalar(0.5).add(v).add(new THREE.Vector3(-10, 3, 0));
	  var _curve = new THREE.QuadraticBezierCurve3(posi1, v2, v);
	  var arr = _curve.getPoints(50);
	  for (var u = 0; u < arr.length; u++) {
	    points.push(arr[u].x, arr[u].y, arr[u].z);
	  }

	  var v3 = posi2.clone().sub(v).multiplyScalar(0.5).add(v).add(new THREE.Vector3(9, -2, 0));

	  var v4 = posi2.clone().add(new THREE.Vector3(0, -3, 0));
	  var _curve2 = new THREE.QuadraticBezierCurve3(v, v3, v4);
	  var arr2 = _curve2.getPoints(50);
	  for (var u = 0; u < arr2.length; u++) {
	    points.push(arr2[u].x, arr2[u].y, arr2[u].z);
	  }

	  var geometry = new THREE.BufferGeometry();
	  var material = new THREE.LineBasicMaterial({
	    color: color,
	    opacity: 0,
	    transparent: true,
	    depthTest: false
	  });
	  geometry.addAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
	  obj.add(new THREE.Line(geometry, material));

	  return obj;
	}

	function curve2(posi, r, color) {
	  var obj = new THREE.Group();
	  var v = posi[0].clone().sub(posi[1]).normalize().multiplyScalar(8);
	  var v1 = v.add(posi[0]).add(new THREE.Vector3(1, 0, 0));

	  var points = [];
	  //左側直線
	  points.push(posi[0].x + 0.5, posi[0].y, posi[0].z);
	  points.push(v1.x, v1.y, v1.z);
	  //カーブ
	  var v2 = posi[0].clone().add(new THREE.Vector3(16, -1, 0));
	  var v3 = v1.clone().add(new THREE.Vector3(16, -4, 0));
	  var p = v1.clone().sub(v3).multiplyScalar(0.5).add(v3).add(new THREE.Vector3(2, 6, 0));
	  var c = new THREE.QuadraticBezierCurve3(v1, p, v3);
	  var arr = c.getPoints(50);
	  for (var u = 0; u < arr.length; u++) {
	    points.push(arr[u].x, arr[u].y, arr[u].z);
	  }

	  //右側直線
	  points.push(v3.x, v3.y, v3.z);
	  points.push(v2.x + 1, v2.y - 3, v2.z);
	  var geometry = new THREE.BufferGeometry();
	  var material = new THREE.LineBasicMaterial({
	    color: color,
	    opacity: 0,
	    transparent: true,
	    depthTest: false
	  });
	  geometry.addAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
	  var line = new THREE.Line(geometry, material);
	  line.position.x = -4;
	  line.position.y = 4;

	  obj.add(line);
	  return obj;
	}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * A speed-improved perlin and simplex noise algorithms for 2D.
	 *
	 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
	 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
	 * Better rank ordering method by Stefan Gustavson in 2012.
	 * Converted to Javascript by Joseph Gentle.
	 */

	(function(global){
	  var module =  true ? exports : (global.noise = {});

	  function Grad(x, y, z) {
	    this.x = x; this.y = y; this.z = z;
	  }
	  
	  Grad.prototype.dot2 = function(x, y) {
	    return this.x*x + this.y*y;
	  };

	  Grad.prototype.dot3 = function(x, y, z) {
	    return this.x*x + this.y*y + this.z*z;
	  };

	  var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
	               new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
	               new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

	  var p = [151,160,137,91,90,15,
	  131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
	  190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
	  88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
	  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
	  102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
	  135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
	  5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
	  223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
	  129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
	  251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
	  49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
	  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
	  // To remove the need for index wrapping, double the permutation table length
	  var perm = new Array(512);
	  var gradP = new Array(512);

	  // This isn't a very good seeding function, but it works ok. It supports 2^16
	  // different seed values. Write something better if you need more seeds.
	  module.seed = function(seed) {
	    if(seed > 0 && seed < 1) {
	      // Scale the seed out
	      seed *= 65536;
	    }

	    seed = Math.floor(seed);
	    if(seed < 256) {
	      seed |= seed << 8;
	    }

	    for(var i = 0; i < 256; i++) {
	      var v;
	      if (i & 1) {
	        v = p[i] ^ (seed & 255);
	      } else {
	        v = p[i] ^ ((seed>>8) & 255);
	      }

	      perm[i] = perm[i + 256] = v;
	      gradP[i] = gradP[i + 256] = grad3[v % 12];
	    }
	  };

	  module.seed(0);

	  /*
	  for(var i=0; i<256; i++) {
	    perm[i] = perm[i + 256] = p[i];
	    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
	  }*/

	  // Skewing and unskewing factors for 2, 3, and 4 dimensions
	  var F2 = 0.5*(Math.sqrt(3)-1);
	  var G2 = (3-Math.sqrt(3))/6;

	  var F3 = 1/3;
	  var G3 = 1/6;

	  // 2D simplex noise
	  module.simplex2 = function(xin, yin) {
	    var n0, n1, n2; // Noise contributions from the three corners
	    // Skew the input space to determine which simplex cell we're in
	    var s = (xin+yin)*F2; // Hairy factor for 2D
	    var i = Math.floor(xin+s);
	    var j = Math.floor(yin+s);
	    var t = (i+j)*G2;
	    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
	    var y0 = yin-j+t;
	    // For the 2D case, the simplex shape is an equilateral triangle.
	    // Determine which simplex we are in.
	    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
	    if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
	      i1=1; j1=0;
	    } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
	      i1=0; j1=1;
	    }
	    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
	    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
	    // c = (3-sqrt(3))/6
	    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
	    var y1 = y0 - j1 + G2;
	    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
	    var y2 = y0 - 1 + 2 * G2;
	    // Work out the hashed gradient indices of the three simplex corners
	    i &= 255;
	    j &= 255;
	    var gi0 = gradP[i+perm[j]];
	    var gi1 = gradP[i+i1+perm[j+j1]];
	    var gi2 = gradP[i+1+perm[j+1]];
	    // Calculate the contribution from the three corners
	    var t0 = 0.5 - x0*x0-y0*y0;
	    if(t0<0) {
	      n0 = 0;
	    } else {
	      t0 *= t0;
	      n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
	    }
	    var t1 = 0.5 - x1*x1-y1*y1;
	    if(t1<0) {
	      n1 = 0;
	    } else {
	      t1 *= t1;
	      n1 = t1 * t1 * gi1.dot2(x1, y1);
	    }
	    var t2 = 0.5 - x2*x2-y2*y2;
	    if(t2<0) {
	      n2 = 0;
	    } else {
	      t2 *= t2;
	      n2 = t2 * t2 * gi2.dot2(x2, y2);
	    }
	    // Add contributions from each corner to get the final noise value.
	    // The result is scaled to return values in the interval [-1,1].
	    return 70 * (n0 + n1 + n2);
	  };

	  // 3D simplex noise
	  module.simplex3 = function(xin, yin, zin) {
	    var n0, n1, n2, n3; // Noise contributions from the four corners

	    // Skew the input space to determine which simplex cell we're in
	    var s = (xin+yin+zin)*F3; // Hairy factor for 2D
	    var i = Math.floor(xin+s);
	    var j = Math.floor(yin+s);
	    var k = Math.floor(zin+s);

	    var t = (i+j+k)*G3;
	    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
	    var y0 = yin-j+t;
	    var z0 = zin-k+t;

	    // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
	    // Determine which simplex we are in.
	    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
	    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
	    if(x0 >= y0) {
	      if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
	      else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
	      else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
	    } else {
	      if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
	      else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
	      else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
	    }
	    // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
	    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
	    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
	    // c = 1/6.
	    var x1 = x0 - i1 + G3; // Offsets for second corner
	    var y1 = y0 - j1 + G3;
	    var z1 = z0 - k1 + G3;

	    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
	    var y2 = y0 - j2 + 2 * G3;
	    var z2 = z0 - k2 + 2 * G3;

	    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
	    var y3 = y0 - 1 + 3 * G3;
	    var z3 = z0 - 1 + 3 * G3;

	    // Work out the hashed gradient indices of the four simplex corners
	    i &= 255;
	    j &= 255;
	    k &= 255;
	    var gi0 = gradP[i+   perm[j+   perm[k   ]]];
	    var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
	    var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
	    var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

	    // Calculate the contribution from the four corners
	    var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
	    if(t0<0) {
	      n0 = 0;
	    } else {
	      t0 *= t0;
	      n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
	    }
	    var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
	    if(t1<0) {
	      n1 = 0;
	    } else {
	      t1 *= t1;
	      n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
	    }
	    var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
	    if(t2<0) {
	      n2 = 0;
	    } else {
	      t2 *= t2;
	      n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
	    }
	    var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
	    if(t3<0) {
	      n3 = 0;
	    } else {
	      t3 *= t3;
	      n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
	    }
	    // Add contributions from each corner to get the final noise value.
	    // The result is scaled to return values in the interval [-1,1].
	    return 32 * (n0 + n1 + n2 + n3);

	  };

	  // ##### Perlin noise stuff

	  function fade(t) {
	    return t*t*t*(t*(t*6-15)+10);
	  }

	  function lerp(a, b, t) {
	    return (1-t)*a + t*b;
	  }

	  // 2D Perlin Noise
	  module.perlin2 = function(x, y) {
	    // Find unit grid cell containing point
	    var X = Math.floor(x), Y = Math.floor(y);
	    // Get relative xy coordinates of point within that cell
	    x = x - X; y = y - Y;
	    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
	    X = X & 255; Y = Y & 255;

	    // Calculate noise contributions from each of the four corners
	    var n00 = gradP[X+perm[Y]].dot2(x, y);
	    var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
	    var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
	    var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);

	    // Compute the fade curve value for x
	    var u = fade(x);

	    // Interpolate the four results
	    return lerp(
	        lerp(n00, n10, u),
	        lerp(n01, n11, u),
	       fade(y));
	  };

	  // 3D Perlin Noise
	  module.perlin3 = function(x, y, z) {
	    // Find unit grid cell containing point
	    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
	    // Get relative xyz coordinates of point within that cell
	    x = x - X; y = y - Y; z = z - Z;
	    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
	    X = X & 255; Y = Y & 255; Z = Z & 255;

	    // Calculate noise contributions from each of the eight corners
	    var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
	    var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
	    var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
	    var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
	    var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
	    var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
	    var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
	    var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

	    // Compute the fade curve value for x, y, z
	    var u = fade(x);
	    var v = fade(y);
	    var w = fade(z);

	    // Interpolate
	    return lerp(
	        lerp(
	          lerp(n000, n100, u),
	          lerp(n001, n101, u), w),
	        lerp(
	          lerp(n010, n110, u),
	          lerp(n011, n111, u), w),
	       v);
	  };

	})(this);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Obj = __webpack_require__(56);

	var _Obj2 = _interopRequireDefault(_Obj);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var noise = __webpack_require__(54);

	var Controller = function () {
	  function Controller(posi, num) {
	    _classCallCheck(this, Controller);

	    this.posi = posi;
	    this.LENGTH = 1000;
	    this.obj = new THREE.Group();
	    this.width = 15;
	    this.lines = [];

	    // 可変 線の個数？
	    this.NUM = this.verticalLength / this.width % 2 ? this.verticalLength / this.width : this.verticalLength / this.width - 1;

	    // this.NUM = 1;

	    this.param = {
	      height: 50,
	      speed: 3,
	      細かさ: 30
	    };

	    this.setup();
	    this.setEvents();
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      // create line
	      for (var i = 0; i < this.NUM; i++) {
	        var points = [];
	        var p = {
	          x: this.getVector(i).x + this.posi[0].x,
	          y: this.getVector(i).y + this.posi[0].y,
	          z: this.getVector(i).z + this.posi[0].z
	        };
	        var line = new _Obj2.default([p], {
	          height: this.param.height,
	          i: this.param.speed,
	          offset: this.param["細かさ"],
	          num: (100 - Math.abs(this.NUM * 0.5 - i) * 4.3) * 1.4
	        });
	        this.obj.add(line.obj);
	        this.lines.push(line);
	      }

	      // layout
	      this.obj.position.x = 30;
	      // this.obj.position.y = -35;
	    }
	  }, {
	    key: "getVector",
	    value: function getVector(index) {
	      var v = new THREE.Vector3(this.posi[0].x - this.posi[1].x, this.posi[0].y - this.posi[1].y, this.posi[0].z - this.posi[1].z).normalize();

	      return v.multiplyScalar(-index * this.width);
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      var time = Date.now() / 5000 + Math.random() / 300 * 2 - 1 / 300;
	      // noise.seed(time);
	      // console.log(this.lines);

	      // update line
	      this.lines.forEach(function (line, index) {
	        // const time = (index + 1) * 0.0001;

	        // noise
	        var i = index / window.noiseparam.wave;
	        var n = noise.perlin2(i, time) * 10;
	        // n = Math.abs(n) > 5 ? n * 0.8 : n;
	        line.update(n, index);
	      });
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var _this = this;

	      var tl = new TimelineMax();

	      tl
	      // draw line
	      .add(function () {
	        _this.lines.forEach(function (line, index) {
	          line.drawLine();
	        });
	      }, 0.0)

	      // spread
	      .add(function () {
	        _this.lines.forEach(function (line, index) {
	          line.spread();
	        });

	        // positionを正しい位置に
	        TweenMax.to(_this.obj.position, 3.0, {
	          y: -35,
	          ease: Power2.easeInOut
	        });
	      }, 1.5);
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this2 = this;

	      // param

	      var _dat = dat.addFolder("flag");
	      _dat.add(this.param, "height", 0, 500).onChange(function (e) {
	        _this2.lines.forEach(function (line, i) {
	          line.config.height = i + e;
	        });
	      });
	      _dat.add(this.param, "speed", 0, 10, 0.1).onChange(function (e) {
	        _this2.lines.forEach(function (line, i) {
	          line.config.i = e;
	        });
	      });
	      _dat.add(this.param, "細かさ", 0, 1000).onChange(function (e) {
	        _this2.lines.forEach(function (line, i) {
	          line.config.offset = e;
	        });
	      });

	      var noisedat = dat.addFolder("noise");
	      window.noiseparam = {
	        line: 2,
	        wave: 70
	        // wave2: 70
	      };
	      noisedat.add(window.noiseparam, "line", 0, 2);
	      noisedat.add(window.noiseparam, "wave", 0, this.lines.length * 4);
	      // noisedat.add(window.noiseparam, "wave2", 1, );
	    }
	  }, {
	    key: "verticalLength",
	    get: function get() {
	      return new THREE.Vector3(this.posi[0].x - this.posi[1].x, this.posi[0].y - this.posi[1].y, 0).length() * 0.79;
	    }
	  }]);

	  return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Node = __webpack_require__(57);

	var _Node2 = _interopRequireDefault(_Node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var noise = __webpack_require__(54);

	var Controller = function () {
	  function Controller(posi, config) {
	    _classCallCheck(this, Controller);

	    //height,i,offset,offset_x
	    this.posi = posi;
	    this.config = config;
	    this.NUM = 200;
	    this.TIME = 0;
	    this.fixDist = 1;
	    this.color = 0x0047e9;

	    this.noiseOffset0 = this.random(-100000, 100000);
	    this.noiseOffset1 = this.random(-100000, 100000);
	    this.noiseScale = 0.01;
	    // this.noiseTime = this.random(-1000000, 1000000);
	    this.noiseTime = 0;
	    this.noiseTime2 = 100000;
	    this.rad = 0;
	    this.maxSpeed = 5;

	    this.s = 0;
	    this.e = 0;
	    this.t = 0;

	    this.start = {
	      x: 0,
	      y: 0,
	      vx: 0,
	      vy: 0
	    };

	    this.setup();
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      this.nodes = [];
	      this.vec = [];
	      this.points = [];
	      for (var i = 0; i < this.config.num; i++) {
	        var x = this.posi[0].x + i * (10 / 1.4);
	        var y = this.posi[0].y + this.sin(0, i);
	        var z = this.posi[0].z;

	        var node = new _Node2.default(x, y, z);
	        var v = new THREE.Vector3(x, y, z);
	        node.defy2 = Math.sin(i * 0.05) * 10;

	        this.nodes.push(node);
	        this.vec.push(v);
	        this.points.push(node.x, node.y, node.z);
	      }

	      // geometry
	      var geometry = new THREE.BufferGeometry();
	      // const positions = new Float32Array(100 * 3); // ここなんで？
	      var positions = new Float32Array(this.config.num * 3); // ここなんで？
	      geometry.addAttribute("position", new THREE.BufferAttribute(new Float32Array(this.points), 3));

	      // mat
	      var material = new THREE.LineBasicMaterial({
	        color: this.color,
	        blending: THREE.AdditiveBlending,
	        opacity: 1,
	        transparent: true,
	        depthTest: false
	      });
	      this.obj = new THREE.Line(geometry, material);

	      this.pointsNUM = this.obj.geometry.attributes.position.array.length;

	      this.curve = new THREE.CatmullRomCurve3(this.vec);
	      this.curve.curveType = "centripetal";
	    }

	    // oka
	    // update(n = 1, index) {
	    //   ++this.TIME;

	    //   for (let i = 0; i < this.pointsNUM; i++) {
	    //     // zの値を動かす
	    //     if (i % 3 == 2) {
	    //       // yの値を動かす
	    //       // if (i % 3 == 2) {
	    //       // update
	    //       // const p =
	    //       //   n *
	    //       //   Math.abs(Math.sin(((i + 20) / this.NUM / 3) * Math.PI)) *
	    //       //   this.sin(this.TIME * -1, i);
	    //       const p =
	    //         Math.abs(Math.sin(((i + 20) / this.NUM / 3) * Math.PI)) *
	    //         this.sin(this.TIME * -1, i);

	    //       this.obj.geometry.attributes.position.array[i] = p;
	    //     }
	    //   }

	    // 深津さん
	    //   // draw
	    //   this.obj.geometry.attributes.position.needsUpdate = true;

	    //   // position
	    //   // const time = (Date.now() - 1000) / 2000;
	    //   // const r = noise.perlin2(index, time) * window.noiseparam.line;
	    //   // this.obj.position.x = noise.perlin2(n, this.TIME) ;
	    //   // this.obj.position.y = u * window.noiseparam.line;
	    //   // this.obj.position.x = u * window.noiseparam.line;
	    //   // this.obj.position.z = u * window.noiseparam.line;
	    // }

	    // update(n = 1, index) {
	    //   ++this.TIME;
	    //   this.noiseTime += 0.01;
	    //   this.rad += 0.01;

	    //   // update
	    //   for (let i = 0; i < this.config.num; i++) {
	    //     if (i == 0) {
	    //       var nd = this.nodes[i];

	    //       // this.maxSpeed = 7 + Math.cos(this.rad) * 4;
	    //       // this.start.vx +=
	    //       //   noise.simplex3(
	    //       //     this.start.x * this.noiseScale,
	    //       //     this.start.y * this.noiseScale,
	    //       //     this.noiseOffset0 + this.noiseTime
	    //       //   ) * 0.2;
	    //       // this.start.vy +=
	    //       //   noise.simplex3(
	    //       //     this.start.x * this.noiseScale + 2398523,
	    //       //     this.start.y * this.noiseScale + 1309854,
	    //       //     this.noiseOffset1 + this.noiseTime
	    //       //   ) * 0.2;
	    //       // this.start.vx *= 0.99;
	    //       // this.start.vy *= 0.99;
	    //       // this.start.x += this.start.vx + this.random(-0.5, 0.5);
	    //       // this.start.y += this.start.vy + this.random(-0.5, 0.5);

	    //       // nd.x = this.start.x;
	    //       // nd.y = this.start.y;
	    //       nd.x = 0;
	    //       nd.y = noise.simplex2(nd.x * 0.0001, this.noiseTime) * 30;
	    //     } else {
	    //       var nd0 = this.nodes[i - 1];
	    //       var nd1 = this.nodes[i];
	    //       var fx = 0;
	    //       var fy = 0;
	    //       var dx = nd0.x - nd1.x;
	    //       var dy = nd0.y - nd1.y;
	    //       var dist = Math.sqrt(dx * dx + dy * dy);
	    //       if (dist > 10) {
	    //         var f = (this.fixDist - dist) * 0.1;
	    //         fx = (dx / dist) * f;
	    //         fy = (dy / dist) * f;
	    //       }
	    //       nd1.vx -= fx;
	    //       // this.random(-0.3, 0.3) +
	    //       // 1 *
	    //       //   noise.simplex3(
	    //       //     nd1.x * this.noiseScale,
	    //       //     nd1.y * this.noiseScale,
	    //       //     this.noiseOffset0 + this.noiseTime
	    //       //   );
	    //       nd1.vy -= fy;
	    //       // this.random(-0.3, 0.3) +
	    //       // 1 *
	    //       //   noise.simplex3(
	    //       //     nd1.x * this.noiseScale + 2398523,
	    //       //     nd1.y * this.noiseScale + 1309854,
	    //       //     this.noiseOffset1 + this.noiseTime
	    //       //   );
	    //       nd1.vx *= 0.93;
	    //       nd1.vy *= 0.93;

	    //       // var maxSpeed = 5;
	    //       var maxSpeed = this.maxSpeed;
	    //       var speed = Math.sqrt(nd1.vx * nd1.vx + nd1.vy * nd1.vy);
	    //       if (speed > maxSpeed) {
	    //         nd1.vx = (nd1.vx / speed) * maxSpeed;
	    //         nd1.vy = (nd1.vy / speed) * maxSpeed;
	    //       }

	    //       nd1.x += nd1.vx;
	    //       nd1.y += nd1.vy;
	    //     }
	    //   }

	    //   // draw
	    //   for (let i = 0; i < this.config.num; i++) {
	    //     var y = this.nodes[i].y;

	    //     this.obj.geometry.attributes.position.array[i * 3 + 1] = y;
	    //   }

	    //   // draw
	    //   this.obj.geometry.attributes.position.needsUpdate = true;
	    // }

	  }, {
	    key: "update",
	    value: function update() {
	      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var index = arguments[1];

	      this.noiseTime += 0.005;
	      this.noiseTime2 -= 0.002;

	      // update
	      for (var _i = 0; _i < this.config.num; _i++) {
	        var nd = this.nodes[_i];

	        nd.y = nd.defy + noise.simplex2(index * 0.1 + nd.x * 0.002, this.noiseTime) * 15;
	        nd.z = nd.defz + Math.sin(nd.x * 0.008 - this.noiseTime * 3) * _i * 2 + noise.simplex2(index * 0.05 + nd.x * 0.002, this.noiseTime2) * _i * 3.0;

	        var y = this.lerp(nd.defy2, nd.y, this.t);
	        var z = this.lerp(nd.defz, nd.z, this.t);

	        this.curve.points[_i].y = y;
	        this.curve.points[_i].z = z;
	      }

	      // draw
	      // for (let i = 0; i < this.config.num; i++) {
	      //   var y = this.nodes[i].y;
	      //   var z = this.nodes[i].z;

	      //   this.obj.geometry.attributes.position.array[i * 3 + 1] = y;
	      //   this.obj.geometry.attributes.position.array[i * 3 + 2] = z;
	      // }

	      // this.obj.geometry.attributes.position.array = [];

	      for (var i = 0; i < this.config.num; i++) {
	        var s = this.s;
	        var e = this.e * (i / this.config.num);
	        var t = this.clamp(s + e, 0.0, 1.0);

	        var v = this.curve.getPoint(t);

	        this.obj.geometry.attributes.position.array[i * 3 + 0] = v.x;
	        this.obj.geometry.attributes.position.array[i * 3 + 1] = v.y;
	        this.obj.geometry.attributes.position.array[i * 3 + 2] = v.z;
	      }

	      // draw
	      this.obj.geometry.attributes.position.needsUpdate = true;
	    }
	  }, {
	    key: "drawLine",
	    value: function drawLine() {
	      var tl = new TimelineMax({ repeat: 0, yoyo: false });
	      var dur = 3.0;

	      tl
	      // end
	      .to(this, dur, {
	        e: 1,
	        ease: Expo.easeInOut
	      }, 0.0);
	    }
	  }, {
	    key: "spread",
	    value: function spread() {
	      var tl = new TimelineMax({ repeat: 0, yoyo: false });
	      var dur = 3.0;

	      tl
	      // end
	      .to(this, dur, {
	        t: 1,
	        ease: Expo.easeInOut
	      }, 0.0);
	    }
	  }, {
	    key: "timeline",
	    value: function timeline() {
	      var tl = new TimelineMax({ repeat: 0, yoyo: false });
	      var dur = 3.0 + 3.0 + Math.random();

	      tl
	      // end
	      .to(this, dur, {
	        e: 1,
	        ease: Expo.easeInOut
	      }, 0.0);
	      // // start
	      // .to(
	      //   this,
	      //   dur,
	      //   {
	      //     s: 1,
	      //     ease: Expo.easeInOut,
	      //   },
	      //   1.4
	      // );
	    }
	  }, {
	    key: "sin",
	    value: function sin(t, i) {
	      return this.config.height * Math.sin((t * this.config.i + i) / this.config.offset);
	    }
	  }, {
	    key: "randomInt",
	    value: function randomInt(min, max) {
	      return Math.floor(Math.random() * (max + 1 - min) + min);
	    }
	  }, {
	    key: "random",
	    value: function random(min, max) {
	      return Math.random() * (max - min) + min;
	    }
	    // 0から範囲内でランダムな整数を取得
	    // -----------------------------------
	    // @val : 範囲(int)
	    // return : ランダムな整数(int)
	    // -----------------------------------

	  }, {
	    key: "range",
	    value: function range(val) {
	      return this.randomInt(-val, val);
	    }
	  }, {
	    key: "clamp",
	    value: function clamp(val, min, max, minVal, maxVal) {
	      if (val < min) val = minVal == undefined ? min : minVal;else if (val > max) val = maxVal == undefined ? max : maxVal;

	      return val;
	    }
	  }, {
	    key: "lerp",
	    value: function lerp(val01, val02, val) {
	      val = val < 0 ? 0 : val;
	      val = val > 1 ? 1 : val;
	      return val01 + (val02 - val01) * val;
	    }
	  }]);

	  return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller(x, y, z) {
	    _classCallCheck(this, Controller);

	    this.x = x;
	    this.y = y;
	    this.z = z;
	    this.vx = x;
	    this.vy = y;
	    this.vz = z;
	    this.defx = x;
	    this.defy = y;
	    this.defy2 = y;
	    this.defz = z;

	    this.cnt = 0;
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "setEvents",
	    value: function setEvents() {}
	  }]);

	  return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);

	    this.setup();
	  }

	  _createClass(Controller, [{
	    key: "setup",
	    value: function setup() {
	      this.obj = new THREE.Group();
	      this.bp = 768;
	      var w = $(".canvas").width();
	      var h = $(".canvas").height();
	      //lごとに罫線
	      var l = this.bp >= w ? 55 : 140;
	      this.num = Math.ceil(w / l);
	      this.obj.position.x = (w - this.num * l) * 0.5;
	      this.obj.position.z = -2;
	      // this.obj.position.;

	      for (var i = 0; i < this.num; i++) {
	        var material = new MeshLineMaterial({
	          color: new THREE.Color(0x9f9f9f),
	          lineWidth: this.bp >= w ? 2 : 1,
	          opacity: 1,
	          transparent: true,
	          dashOffset: 0,
	          dashArray: 2 * h,
	          dashRatio: 0.99
	        });
	        var point = [];
	        var _w = -w * 0.5;

	        point.push(_w + i * l, h * 0.5, -1);
	        point.push(_w + i * l, -h * 0.5, -1);
	        var line = new MeshLine();
	        line.setGeometry(point);
	        var mesh = new THREE.Mesh(line.geometry, material);

	        this.obj.add(mesh);
	      }
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      console.log("show");
	      var tl = new TimelineMax();
	      var h = $(".canvas").height();
	      var num = this.obj.children.length * 0.5;
	      this.obj.children.forEach(function (children, index) {
	        tl.to(children.material, 0.25, {
	          opacity: 0.05,
	          ease: Expo.easeIn
	        }, Math.abs(index - num) * 0.02);
	        tl.to(children.material, 1, {
	          opacity: 0.005,
	          ease: Expo.easeOut
	        }, Math.abs(index - num) * 0.02 + 0.25);
	        tl.to(children.material.uniforms.dashOffset, 2, {
	          value: -2,
	          ease: Expo.easeOut
	        }, Math.abs(index - num) * 0.02 + 0.05);
	      });
	      return tl;
	    }
	  }, {
	    key: "resize",
	    value: function resize() {
	      this.obj.children = [];
	      this.setup();
	      console.log(this.obj);
	      this.obj.children.forEach(function (children) {
	        children.material.opacity = 0.005;
	        children.material.uniforms.dashOffset.value = -2;
	      });
	    }
	  }, {
	    key: "update",
	    value: function update(_ref) {
	      var posi = _ref.posi,
	          depth = _ref.depth;

	      this.obj.position.z = posi - depth;
	    }
	  }]);

	  return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */

	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global.dat = {})));
	}(this, (function (exports) { 'use strict';

	function ___$insertStyle(css) {
	  if (!css) {
	    return;
	  }
	  if (typeof window === 'undefined') {
	    return;
	  }

	  var style = document.createElement('style');

	  style.setAttribute('type', 'text/css');
	  style.innerHTML = css;
	  document.head.appendChild(style);

	  return css;
	}

	function colorToString (color, forceCSSHex) {
	  var colorFormat = color.__state.conversionName.toString();
	  var r = Math.round(color.r);
	  var g = Math.round(color.g);
	  var b = Math.round(color.b);
	  var a = color.a;
	  var h = Math.round(color.h);
	  var s = color.s.toFixed(1);
	  var v = color.v.toFixed(1);
	  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
	    var str = color.hex.toString(16);
	    while (str.length < 6) {
	      str = '0' + str;
	    }
	    return '#' + str;
	  } else if (colorFormat === 'CSS_RGB') {
	    return 'rgb(' + r + ',' + g + ',' + b + ')';
	  } else if (colorFormat === 'CSS_RGBA') {
	    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	  } else if (colorFormat === 'HEX') {
	    return '0x' + color.hex.toString(16);
	  } else if (colorFormat === 'RGB_ARRAY') {
	    return '[' + r + ',' + g + ',' + b + ']';
	  } else if (colorFormat === 'RGBA_ARRAY') {
	    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
	  } else if (colorFormat === 'RGB_OBJ') {
	    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
	  } else if (colorFormat === 'RGBA_OBJ') {
	    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
	  } else if (colorFormat === 'HSV_OBJ') {
	    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
	  } else if (colorFormat === 'HSVA_OBJ') {
	    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
	  }
	  return 'unknown format';
	}

	var ARR_EACH = Array.prototype.forEach;
	var ARR_SLICE = Array.prototype.slice;
	var Common = {
	  BREAK: {},
	  extend: function extend(target) {
	    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
	      var keys = this.isObject(obj) ? Object.keys(obj) : [];
	      keys.forEach(function (key) {
	        if (!this.isUndefined(obj[key])) {
	          target[key] = obj[key];
	        }
	      }.bind(this));
	    }, this);
	    return target;
	  },
	  defaults: function defaults(target) {
	    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
	      var keys = this.isObject(obj) ? Object.keys(obj) : [];
	      keys.forEach(function (key) {
	        if (this.isUndefined(target[key])) {
	          target[key] = obj[key];
	        }
	      }.bind(this));
	    }, this);
	    return target;
	  },
	  compose: function compose() {
	    var toCall = ARR_SLICE.call(arguments);
	    return function () {
	      var args = ARR_SLICE.call(arguments);
	      for (var i = toCall.length - 1; i >= 0; i--) {
	        args = [toCall[i].apply(this, args)];
	      }
	      return args[0];
	    };
	  },
	  each: function each(obj, itr, scope) {
	    if (!obj) {
	      return;
	    }
	    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
	      obj.forEach(itr, scope);
	    } else if (obj.length === obj.length + 0) {
	      var key = void 0;
	      var l = void 0;
	      for (key = 0, l = obj.length; key < l; key++) {
	        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
	          return;
	        }
	      }
	    } else {
	      for (var _key in obj) {
	        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
	          return;
	        }
	      }
	    }
	  },
	  defer: function defer(fnc) {
	    setTimeout(fnc, 0);
	  },
	  debounce: function debounce(func, threshold, callImmediately) {
	    var timeout = void 0;
	    return function () {
	      var obj = this;
	      var args = arguments;
	      function delayed() {
	        timeout = null;
	        if (!callImmediately) func.apply(obj, args);
	      }
	      var callNow = callImmediately || !timeout;
	      clearTimeout(timeout);
	      timeout = setTimeout(delayed, threshold);
	      if (callNow) {
	        func.apply(obj, args);
	      }
	    };
	  },
	  toArray: function toArray(obj) {
	    if (obj.toArray) return obj.toArray();
	    return ARR_SLICE.call(obj);
	  },
	  isUndefined: function isUndefined(obj) {
	    return obj === undefined;
	  },
	  isNull: function isNull(obj) {
	    return obj === null;
	  },
	  isNaN: function (_isNaN) {
	    function isNaN(_x) {
	      return _isNaN.apply(this, arguments);
	    }
	    isNaN.toString = function () {
	      return _isNaN.toString();
	    };
	    return isNaN;
	  }(function (obj) {
	    return isNaN(obj);
	  }),
	  isArray: Array.isArray || function (obj) {
	    return obj.constructor === Array;
	  },
	  isObject: function isObject(obj) {
	    return obj === Object(obj);
	  },
	  isNumber: function isNumber(obj) {
	    return obj === obj + 0;
	  },
	  isString: function isString(obj) {
	    return obj === obj + '';
	  },
	  isBoolean: function isBoolean(obj) {
	    return obj === false || obj === true;
	  },
	  isFunction: function isFunction(obj) {
	    return Object.prototype.toString.call(obj) === '[object Function]';
	  }
	};

	var INTERPRETATIONS = [
	{
	  litmus: Common.isString,
	  conversions: {
	    THREE_CHAR_HEX: {
	      read: function read(original) {
	        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
	        if (test === null) {
	          return false;
	        }
	        return {
	          space: 'HEX',
	          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
	        };
	      },
	      write: colorToString
	    },
	    SIX_CHAR_HEX: {
	      read: function read(original) {
	        var test = original.match(/^#([A-F0-9]{6})$/i);
	        if (test === null) {
	          return false;
	        }
	        return {
	          space: 'HEX',
	          hex: parseInt('0x' + test[1].toString(), 0)
	        };
	      },
	      write: colorToString
	    },
	    CSS_RGB: {
	      read: function read(original) {
	        var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
	        if (test === null) {
	          return false;
	        }
	        return {
	          space: 'RGB',
	          r: parseFloat(test[1]),
	          g: parseFloat(test[2]),
	          b: parseFloat(test[3])
	        };
	      },
	      write: colorToString
	    },
	    CSS_RGBA: {
	      read: function read(original) {
	        var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
	        if (test === null) {
	          return false;
	        }
	        return {
	          space: 'RGB',
	          r: parseFloat(test[1]),
	          g: parseFloat(test[2]),
	          b: parseFloat(test[3]),
	          a: parseFloat(test[4])
	        };
	      },
	      write: colorToString
	    }
	  }
	},
	{
	  litmus: Common.isNumber,
	  conversions: {
	    HEX: {
	      read: function read(original) {
	        return {
	          space: 'HEX',
	          hex: original,
	          conversionName: 'HEX'
	        };
	      },
	      write: function write(color) {
	        return color.hex;
	      }
	    }
	  }
	},
	{
	  litmus: Common.isArray,
	  conversions: {
	    RGB_ARRAY: {
	      read: function read(original) {
	        if (original.length !== 3) {
	          return false;
	        }
	        return {
	          space: 'RGB',
	          r: original[0],
	          g: original[1],
	          b: original[2]
	        };
	      },
	      write: function write(color) {
	        return [color.r, color.g, color.b];
	      }
	    },
	    RGBA_ARRAY: {
	      read: function read(original) {
	        if (original.length !== 4) return false;
	        return {
	          space: 'RGB',
	          r: original[0],
	          g: original[1],
	          b: original[2],
	          a: original[3]
	        };
	      },
	      write: function write(color) {
	        return [color.r, color.g, color.b, color.a];
	      }
	    }
	  }
	},
	{
	  litmus: Common.isObject,
	  conversions: {
	    RGBA_OBJ: {
	      read: function read(original) {
	        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
	          return {
	            space: 'RGB',
	            r: original.r,
	            g: original.g,
	            b: original.b,
	            a: original.a
	          };
	        }
	        return false;
	      },
	      write: function write(color) {
	        return {
	          r: color.r,
	          g: color.g,
	          b: color.b,
	          a: color.a
	        };
	      }
	    },
	    RGB_OBJ: {
	      read: function read(original) {
	        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
	          return {
	            space: 'RGB',
	            r: original.r,
	            g: original.g,
	            b: original.b
	          };
	        }
	        return false;
	      },
	      write: function write(color) {
	        return {
	          r: color.r,
	          g: color.g,
	          b: color.b
	        };
	      }
	    },
	    HSVA_OBJ: {
	      read: function read(original) {
	        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
	          return {
	            space: 'HSV',
	            h: original.h,
	            s: original.s,
	            v: original.v,
	            a: original.a
	          };
	        }
	        return false;
	      },
	      write: function write(color) {
	        return {
	          h: color.h,
	          s: color.s,
	          v: color.v,
	          a: color.a
	        };
	      }
	    },
	    HSV_OBJ: {
	      read: function read(original) {
	        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
	          return {
	            space: 'HSV',
	            h: original.h,
	            s: original.s,
	            v: original.v
	          };
	        }
	        return false;
	      },
	      write: function write(color) {
	        return {
	          h: color.h,
	          s: color.s,
	          v: color.v
	        };
	      }
	    }
	  }
	}];
	var result = void 0;
	var toReturn = void 0;
	var interpret = function interpret() {
	  toReturn = false;
	  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
	  Common.each(INTERPRETATIONS, function (family) {
	    if (family.litmus(original)) {
	      Common.each(family.conversions, function (conversion, conversionName) {
	        result = conversion.read(original);
	        if (toReturn === false && result !== false) {
	          toReturn = result;
	          result.conversionName = conversionName;
	          result.conversion = conversion;
	          return Common.BREAK;
	        }
	      });
	      return Common.BREAK;
	    }
	  });
	  return toReturn;
	};

	var tmpComponent = void 0;
	var ColorMath = {
	  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
	    var hi = Math.floor(h / 60) % 6;
	    var f = h / 60 - Math.floor(h / 60);
	    var p = v * (1.0 - s);
	    var q = v * (1.0 - f * s);
	    var t = v * (1.0 - (1.0 - f) * s);
	    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
	    return {
	      r: c[0] * 255,
	      g: c[1] * 255,
	      b: c[2] * 255
	    };
	  },
	  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
	    var min = Math.min(r, g, b);
	    var max = Math.max(r, g, b);
	    var delta = max - min;
	    var h = void 0;
	    var s = void 0;
	    if (max !== 0) {
	      s = delta / max;
	    } else {
	      return {
	        h: NaN,
	        s: 0,
	        v: 0
	      };
	    }
	    if (r === max) {
	      h = (g - b) / delta;
	    } else if (g === max) {
	      h = 2 + (b - r) / delta;
	    } else {
	      h = 4 + (r - g) / delta;
	    }
	    h /= 6;
	    if (h < 0) {
	      h += 1;
	    }
	    return {
	      h: h * 360,
	      s: s,
	      v: max / 255
	    };
	  },
	  rgb_to_hex: function rgb_to_hex(r, g, b) {
	    var hex = this.hex_with_component(0, 2, r);
	    hex = this.hex_with_component(hex, 1, g);
	    hex = this.hex_with_component(hex, 0, b);
	    return hex;
	  },
	  component_from_hex: function component_from_hex(hex, componentIndex) {
	    return hex >> componentIndex * 8 & 0xFF;
	  },
	  hex_with_component: function hex_with_component(hex, componentIndex, value) {
	    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
	  }
	};

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};











	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();







	var get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = Object.getOwnPropertyDescriptor(object, property);

	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};











	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var Color = function () {
	  function Color() {
	    classCallCheck(this, Color);
	    this.__state = interpret.apply(this, arguments);
	    if (this.__state === false) {
	      throw new Error('Failed to interpret color arguments');
	    }
	    this.__state.a = this.__state.a || 1;
	  }
	  createClass(Color, [{
	    key: 'toString',
	    value: function toString() {
	      return colorToString(this);
	    }
	  }, {
	    key: 'toHexString',
	    value: function toHexString() {
	      return colorToString(this, true);
	    }
	  }, {
	    key: 'toOriginal',
	    value: function toOriginal() {
	      return this.__state.conversion.write(this);
	    }
	  }]);
	  return Color;
	}();
	function defineRGBComponent(target, component, componentHexIndex) {
	  Object.defineProperty(target, component, {
	    get: function get$$1() {
	      if (this.__state.space === 'RGB') {
	        return this.__state[component];
	      }
	      Color.recalculateRGB(this, component, componentHexIndex);
	      return this.__state[component];
	    },
	    set: function set$$1(v) {
	      if (this.__state.space !== 'RGB') {
	        Color.recalculateRGB(this, component, componentHexIndex);
	        this.__state.space = 'RGB';
	      }
	      this.__state[component] = v;
	    }
	  });
	}
	function defineHSVComponent(target, component) {
	  Object.defineProperty(target, component, {
	    get: function get$$1() {
	      if (this.__state.space === 'HSV') {
	        return this.__state[component];
	      }
	      Color.recalculateHSV(this);
	      return this.__state[component];
	    },
	    set: function set$$1(v) {
	      if (this.__state.space !== 'HSV') {
	        Color.recalculateHSV(this);
	        this.__state.space = 'HSV';
	      }
	      this.__state[component] = v;
	    }
	  });
	}
	Color.recalculateRGB = function (color, component, componentHexIndex) {
	  if (color.__state.space === 'HEX') {
	    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
	  } else if (color.__state.space === 'HSV') {
	    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
	  } else {
	    throw new Error('Corrupted color state');
	  }
	};
	Color.recalculateHSV = function (color) {
	  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
	  Common.extend(color.__state, {
	    s: result.s,
	    v: result.v
	  });
	  if (!Common.isNaN(result.h)) {
	    color.__state.h = result.h;
	  } else if (Common.isUndefined(color.__state.h)) {
	    color.__state.h = 0;
	  }
	};
	Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
	defineRGBComponent(Color.prototype, 'r', 2);
	defineRGBComponent(Color.prototype, 'g', 1);
	defineRGBComponent(Color.prototype, 'b', 0);
	defineHSVComponent(Color.prototype, 'h');
	defineHSVComponent(Color.prototype, 's');
	defineHSVComponent(Color.prototype, 'v');
	Object.defineProperty(Color.prototype, 'a', {
	  get: function get$$1() {
	    return this.__state.a;
	  },
	  set: function set$$1(v) {
	    this.__state.a = v;
	  }
	});
	Object.defineProperty(Color.prototype, 'hex', {
	  get: function get$$1() {
	    if (!this.__state.space !== 'HEX') {
	      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
	    }
	    return this.__state.hex;
	  },
	  set: function set$$1(v) {
	    this.__state.space = 'HEX';
	    this.__state.hex = v;
	  }
	});

	var Controller = function () {
	  function Controller(object, property) {
	    classCallCheck(this, Controller);
	    this.initialValue = object[property];
	    this.domElement = document.createElement('div');
	    this.object = object;
	    this.property = property;
	    this.__onChange = undefined;
	    this.__onFinishChange = undefined;
	  }
	  createClass(Controller, [{
	    key: 'onChange',
	    value: function onChange(fnc) {
	      this.__onChange = fnc;
	      return this;
	    }
	  }, {
	    key: 'onFinishChange',
	    value: function onFinishChange(fnc) {
	      this.__onFinishChange = fnc;
	      return this;
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(newValue) {
	      this.object[this.property] = newValue;
	      if (this.__onChange) {
	        this.__onChange.call(this, newValue);
	      }
	      this.updateDisplay();
	      return this;
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.object[this.property];
	    }
	  }, {
	    key: 'updateDisplay',
	    value: function updateDisplay() {
	      return this;
	    }
	  }, {
	    key: 'isModified',
	    value: function isModified() {
	      return this.initialValue !== this.getValue();
	    }
	  }]);
	  return Controller;
	}();

	var EVENT_MAP = {
	  HTMLEvents: ['change'],
	  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
	  KeyboardEvents: ['keydown']
	};
	var EVENT_MAP_INV = {};
	Common.each(EVENT_MAP, function (v, k) {
	  Common.each(v, function (e) {
	    EVENT_MAP_INV[e] = k;
	  });
	});
	var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
	function cssValueToPixels(val) {
	  if (val === '0' || Common.isUndefined(val)) {
	    return 0;
	  }
	  var match = val.match(CSS_VALUE_PIXELS);
	  if (!Common.isNull(match)) {
	    return parseFloat(match[1]);
	  }
	  return 0;
	}
	var dom = {
	  makeSelectable: function makeSelectable(elem, selectable) {
	    if (elem === undefined || elem.style === undefined) return;
	    elem.onselectstart = selectable ? function () {
	      return false;
	    } : function () {};
	    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
	    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
	    elem.unselectable = selectable ? 'on' : 'off';
	  },
	  makeFullscreen: function makeFullscreen(elem, hor, vert) {
	    var vertical = vert;
	    var horizontal = hor;
	    if (Common.isUndefined(horizontal)) {
	      horizontal = true;
	    }
	    if (Common.isUndefined(vertical)) {
	      vertical = true;
	    }
	    elem.style.position = 'absolute';
	    if (horizontal) {
	      elem.style.left = 0;
	      elem.style.right = 0;
	    }
	    if (vertical) {
	      elem.style.top = 0;
	      elem.style.bottom = 0;
	    }
	  },
	  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
	    var params = pars || {};
	    var className = EVENT_MAP_INV[eventType];
	    if (!className) {
	      throw new Error('Event type ' + eventType + ' not supported.');
	    }
	    var evt = document.createEvent(className);
	    switch (className) {
	      case 'MouseEvents':
	        {
	          var clientX = params.x || params.clientX || 0;
	          var clientY = params.y || params.clientY || 0;
	          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
	          0,
	          clientX,
	          clientY,
	          false, false, false, false, 0, null);
	          break;
	        }
	      case 'KeyboardEvents':
	        {
	          var init = evt.initKeyboardEvent || evt.initKeyEvent;
	          Common.defaults(params, {
	            cancelable: true,
	            ctrlKey: false,
	            altKey: false,
	            shiftKey: false,
	            metaKey: false,
	            keyCode: undefined,
	            charCode: undefined
	          });
	          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
	          break;
	        }
	      default:
	        {
	          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
	          break;
	        }
	    }
	    Common.defaults(evt, aux);
	    elem.dispatchEvent(evt);
	  },
	  bind: function bind(elem, event, func, newBool) {
	    var bool = newBool || false;
	    if (elem.addEventListener) {
	      elem.addEventListener(event, func, bool);
	    } else if (elem.attachEvent) {
	      elem.attachEvent('on' + event, func);
	    }
	    return dom;
	  },
	  unbind: function unbind(elem, event, func, newBool) {
	    var bool = newBool || false;
	    if (elem.removeEventListener) {
	      elem.removeEventListener(event, func, bool);
	    } else if (elem.detachEvent) {
	      elem.detachEvent('on' + event, func);
	    }
	    return dom;
	  },
	  addClass: function addClass(elem, className) {
	    if (elem.className === undefined) {
	      elem.className = className;
	    } else if (elem.className !== className) {
	      var classes = elem.className.split(/ +/);
	      if (classes.indexOf(className) === -1) {
	        classes.push(className);
	        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
	      }
	    }
	    return dom;
	  },
	  removeClass: function removeClass(elem, className) {
	    if (className) {
	      if (elem.className === className) {
	        elem.removeAttribute('class');
	      } else {
	        var classes = elem.className.split(/ +/);
	        var index = classes.indexOf(className);
	        if (index !== -1) {
	          classes.splice(index, 1);
	          elem.className = classes.join(' ');
	        }
	      }
	    } else {
	      elem.className = undefined;
	    }
	    return dom;
	  },
	  hasClass: function hasClass(elem, className) {
	    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
	  },
	  getWidth: function getWidth(elem) {
	    var style = getComputedStyle(elem);
	    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
	  },
	  getHeight: function getHeight(elem) {
	    var style = getComputedStyle(elem);
	    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
	  },
	  getOffset: function getOffset(el) {
	    var elem = el;
	    var offset = { left: 0, top: 0 };
	    if (elem.offsetParent) {
	      do {
	        offset.left += elem.offsetLeft;
	        offset.top += elem.offsetTop;
	        elem = elem.offsetParent;
	      } while (elem);
	    }
	    return offset;
	  },
	  isActive: function isActive(elem) {
	    return elem === document.activeElement && (elem.type || elem.href);
	  }
	};

	var BooleanController = function (_Controller) {
	  inherits(BooleanController, _Controller);
	  function BooleanController(object, property) {
	    classCallCheck(this, BooleanController);
	    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
	    var _this = _this2;
	    _this2.__prev = _this2.getValue();
	    _this2.__checkbox = document.createElement('input');
	    _this2.__checkbox.setAttribute('type', 'checkbox');
	    function onChange() {
	      _this.setValue(!_this.__prev);
	    }
	    dom.bind(_this2.__checkbox, 'change', onChange, false);
	    _this2.domElement.appendChild(_this2.__checkbox);
	    _this2.updateDisplay();
	    return _this2;
	  }
	  createClass(BooleanController, [{
	    key: 'setValue',
	    value: function setValue(v) {
	      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
	      if (this.__onFinishChange) {
	        this.__onFinishChange.call(this, this.getValue());
	      }
	      this.__prev = this.getValue();
	      return toReturn;
	    }
	  }, {
	    key: 'updateDisplay',
	    value: function updateDisplay() {
	      if (this.getValue() === true) {
	        this.__checkbox.setAttribute('checked', 'checked');
	        this.__checkbox.checked = true;
	        this.__prev = true;
	      } else {
	        this.__checkbox.checked = false;
	        this.__prev = false;
	      }
	      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
	    }
	  }]);
	  return BooleanController;
	}(Controller);

	var OptionController = function (_Controller) {
	  inherits(OptionController, _Controller);
	  function OptionController(object, property, opts) {
	    classCallCheck(this, OptionController);
	    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
	    var options = opts;
	    var _this = _this2;
	    _this2.__select = document.createElement('select');
	    if (Common.isArray(options)) {
	      var map = {};
	      Common.each(options, function (element) {
	        map[element] = element;
	      });
	      options = map;
	    }
	    Common.each(options, function (value, key) {
	      var opt = document.createElement('option');
	      opt.innerHTML = key;
	      opt.setAttribute('value', value);
	      _this.__select.appendChild(opt);
	    });
	    _this2.updateDisplay();
	    dom.bind(_this2.__select, 'change', function () {
	      var desiredValue = this.options[this.selectedIndex].value;
	      _this.setValue(desiredValue);
	    });
	    _this2.domElement.appendChild(_this2.__select);
	    return _this2;
	  }
	  createClass(OptionController, [{
	    key: 'setValue',
	    value: function setValue(v) {
	      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
	      if (this.__onFinishChange) {
	        this.__onFinishChange.call(this, this.getValue());
	      }
	      return toReturn;
	    }
	  }, {
	    key: 'updateDisplay',
	    value: function updateDisplay() {
	      if (dom.isActive(this.__select)) return this;
	      this.__select.value = this.getValue();
	      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
	    }
	  }]);
	  return OptionController;
	}(Controller);

	var StringController = function (_Controller) {
	  inherits(StringController, _Controller);
	  function StringController(object, property) {
	    classCallCheck(this, StringController);
	    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
	    var _this = _this2;
	    function onChange() {
	      _this.setValue(_this.__input.value);
	    }
	    function onBlur() {
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }
	    _this2.__input = document.createElement('input');
	    _this2.__input.setAttribute('type', 'text');
	    dom.bind(_this2.__input, 'keyup', onChange);
	    dom.bind(_this2.__input, 'change', onChange);
	    dom.bind(_this2.__input, 'blur', onBlur);
	    dom.bind(_this2.__input, 'keydown', function (e) {
	      if (e.keyCode === 13) {
	        this.blur();
	      }
	    });
	    _this2.updateDisplay();
	    _this2.domElement.appendChild(_this2.__input);
	    return _this2;
	  }
	  createClass(StringController, [{
	    key: 'updateDisplay',
	    value: function updateDisplay() {
	      if (!dom.isActive(this.__input)) {
	        this.__input.value = this.getValue();
	      }
	      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
	    }
	  }]);
	  return StringController;
	}(Controller);

	function numDecimals(x) {
	  var _x = x.toString();
	  if (_x.indexOf('.') > -1) {
	    return _x.length - _x.indexOf('.') - 1;
	  }
	  return 0;
	}
	var NumberController = function (_Controller) {
	  inherits(NumberController, _Controller);
	  function NumberController(object, property, params) {
	    classCallCheck(this, NumberController);
	    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
	    var _params = params || {};
	    _this.__min = _params.min;
	    _this.__max = _params.max;
	    _this.__step = _params.step;
	    if (Common.isUndefined(_this.__step)) {
	      if (_this.initialValue === 0) {
	        _this.__impliedStep = 1;
	      } else {
	        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
	      }
	    } else {
	      _this.__impliedStep = _this.__step;
	    }
	    _this.__precision = numDecimals(_this.__impliedStep);
	    return _this;
	  }
	  createClass(NumberController, [{
	    key: 'setValue',
	    value: function setValue(v) {
	      var _v = v;
	      if (this.__min !== undefined && _v < this.__min) {
	        _v = this.__min;
	      } else if (this.__max !== undefined && _v > this.__max) {
	        _v = this.__max;
	      }
	      if (this.__step !== undefined && _v % this.__step !== 0) {
	        _v = Math.round(_v / this.__step) * this.__step;
	      }
	      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
	    }
	  }, {
	    key: 'min',
	    value: function min(minValue) {
	      this.__min = minValue;
	      return this;
	    }
	  }, {
	    key: 'max',
	    value: function max(maxValue) {
	      this.__max = maxValue;
	      return this;
	    }
	  }, {
	    key: 'step',
	    value: function step(stepValue) {
	      this.__step = stepValue;
	      this.__impliedStep = stepValue;
	      this.__precision = numDecimals(stepValue);
	      return this;
	    }
	  }]);
	  return NumberController;
	}(Controller);

	function roundToDecimal(value, decimals) {
	  var tenTo = Math.pow(10, decimals);
	  return Math.round(value * tenTo) / tenTo;
	}
	var NumberControllerBox = function (_NumberController) {
	  inherits(NumberControllerBox, _NumberController);
	  function NumberControllerBox(object, property, params) {
	    classCallCheck(this, NumberControllerBox);
	    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
	    _this2.__truncationSuspended = false;
	    var _this = _this2;
	    var prevY = void 0;
	    function onChange() {
	      var attempted = parseFloat(_this.__input.value);
	      if (!Common.isNaN(attempted)) {
	        _this.setValue(attempted);
	      }
	    }
	    function onFinish() {
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }
	    function onBlur() {
	      onFinish();
	    }
	    function onMouseDrag(e) {
	      var diff = prevY - e.clientY;
	      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
	      prevY = e.clientY;
	    }
	    function onMouseUp() {
	      dom.unbind(window, 'mousemove', onMouseDrag);
	      dom.unbind(window, 'mouseup', onMouseUp);
	      onFinish();
	    }
	    function onMouseDown(e) {
	      dom.bind(window, 'mousemove', onMouseDrag);
	      dom.bind(window, 'mouseup', onMouseUp);
	      prevY = e.clientY;
	    }
	    _this2.__input = document.createElement('input');
	    _this2.__input.setAttribute('type', 'text');
	    dom.bind(_this2.__input, 'change', onChange);
	    dom.bind(_this2.__input, 'blur', onBlur);
	    dom.bind(_this2.__input, 'mousedown', onMouseDown);
	    dom.bind(_this2.__input, 'keydown', function (e) {
	      if (e.keyCode === 13) {
	        _this.__truncationSuspended = true;
	        this.blur();
	        _this.__truncationSuspended = false;
	        onFinish();
	      }
	    });
	    _this2.updateDisplay();
	    _this2.domElement.appendChild(_this2.__input);
	    return _this2;
	  }
	  createClass(NumberControllerBox, [{
	    key: 'updateDisplay',
	    value: function updateDisplay() {
	      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
	      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
	    }
	  }]);
	  return NumberControllerBox;
	}(NumberController);

	function map(v, i1, i2, o1, o2) {
	  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
	}
	var NumberControllerSlider = function (_NumberController) {
	  inherits(NumberControllerSlider, _NumberController);
	  function NumberControllerSlider(object, property, min, max, step) {
	    classCallCheck(this, NumberControllerSlider);
	    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
	    var _this = _this2;
	    _this2.__background = document.createElement('div');
	    _this2.__foreground = document.createElement('div');
	    dom.bind(_this2.__background, 'mousedown', onMouseDown);
	    dom.bind(_this2.__background, 'touchstart', onTouchStart);
	    dom.addClass(_this2.__background, 'slider');
	    dom.addClass(_this2.__foreground, 'slider-fg');
	    function onMouseDown(e) {
	      document.activeElement.blur();
	      dom.bind(window, 'mousemove', onMouseDrag);
	      dom.bind(window, 'mouseup', onMouseUp);
	      onMouseDrag(e);
	    }
	    function onMouseDrag(e) {
	      e.preventDefault();
	      var bgRect = _this.__background.getBoundingClientRect();
	      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
	      return false;
	    }
	    function onMouseUp() {
	      dom.unbind(window, 'mousemove', onMouseDrag);
	      dom.unbind(window, 'mouseup', onMouseUp);
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }
	    function onTouchStart(e) {
	      if (e.touches.length !== 1) {
	        return;
	      }
	      dom.bind(window, 'touchmove', onTouchMove);
	      dom.bind(window, 'touchend', onTouchEnd);
	      onTouchMove(e);
	    }
	    function onTouchMove(e) {
	      var clientX = e.touches[0].clientX;
	      var bgRect = _this.__background.getBoundingClientRect();
	      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
	    }
	    function onTouchEnd() {
	      dom.unbind(window, 'touchmove', onTouchMove);
	      dom.unbind(window, 'touchend', onTouchEnd);
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }
	    _this2.updateDisplay();
	    _this2.__background.appendChild(_this2.__foreground);
	    _this2.domElement.appendChild(_this2.__background);
	    return _this2;
	  }
	  createClass(NumberControllerSlider, [{
	    key: 'updateDisplay',
	    value: function updateDisplay() {
	      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
	      this.__foreground.style.width = pct * 100 + '%';
	      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
	    }
	  }]);
	  return NumberControllerSlider;
	}(NumberController);

	var FunctionController = function (_Controller) {
	  inherits(FunctionController, _Controller);
	  function FunctionController(object, property, text) {
	    classCallCheck(this, FunctionController);
	    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
	    var _this = _this2;
	    _this2.__button = document.createElement('div');
	    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
	    dom.bind(_this2.__button, 'click', function (e) {
	      e.preventDefault();
	      _this.fire();
	      return false;
	    });
	    dom.addClass(_this2.__button, 'button');
	    _this2.domElement.appendChild(_this2.__button);
	    return _this2;
	  }
	  createClass(FunctionController, [{
	    key: 'fire',
	    value: function fire() {
	      if (this.__onChange) {
	        this.__onChange.call(this);
	      }
	      this.getValue().call(this.object);
	      if (this.__onFinishChange) {
	        this.__onFinishChange.call(this, this.getValue());
	      }
	    }
	  }]);
	  return FunctionController;
	}(Controller);

	var ColorController = function (_Controller) {
	  inherits(ColorController, _Controller);
	  function ColorController(object, property) {
	    classCallCheck(this, ColorController);
	    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
	    _this2.__color = new Color(_this2.getValue());
	    _this2.__temp = new Color(0);
	    var _this = _this2;
	    _this2.domElement = document.createElement('div');
	    dom.makeSelectable(_this2.domElement, false);
	    _this2.__selector = document.createElement('div');
	    _this2.__selector.className = 'selector';
	    _this2.__saturation_field = document.createElement('div');
	    _this2.__saturation_field.className = 'saturation-field';
	    _this2.__field_knob = document.createElement('div');
	    _this2.__field_knob.className = 'field-knob';
	    _this2.__field_knob_border = '2px solid ';
	    _this2.__hue_knob = document.createElement('div');
	    _this2.__hue_knob.className = 'hue-knob';
	    _this2.__hue_field = document.createElement('div');
	    _this2.__hue_field.className = 'hue-field';
	    _this2.__input = document.createElement('input');
	    _this2.__input.type = 'text';
	    _this2.__input_textShadow = '0 1px 1px ';
	    dom.bind(_this2.__input, 'keydown', function (e) {
	      if (e.keyCode === 13) {
	        onBlur.call(this);
	      }
	    });
	    dom.bind(_this2.__input, 'blur', onBlur);
	    dom.bind(_this2.__selector, 'mousedown', function ()        {
	      dom.addClass(this, 'drag').bind(window, 'mouseup', function ()        {
	        dom.removeClass(_this.__selector, 'drag');
	      });
	    });
	    dom.bind(_this2.__selector, 'touchstart', function ()        {
	      dom.addClass(this, 'drag').bind(window, 'touchend', function ()        {
	        dom.removeClass(_this.__selector, 'drag');
	      });
	    });
	    var valueField = document.createElement('div');
	    Common.extend(_this2.__selector.style, {
	      width: '122px',
	      height: '102px',
	      padding: '3px',
	      backgroundColor: '#222',
	      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
	    });
	    Common.extend(_this2.__field_knob.style, {
	      position: 'absolute',
	      width: '12px',
	      height: '12px',
	      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
	      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
	      borderRadius: '12px',
	      zIndex: 1
	    });
	    Common.extend(_this2.__hue_knob.style, {
	      position: 'absolute',
	      width: '15px',
	      height: '2px',
	      borderRight: '4px solid #fff',
	      zIndex: 1
	    });
	    Common.extend(_this2.__saturation_field.style, {
	      width: '100px',
	      height: '100px',
	      border: '1px solid #555',
	      marginRight: '3px',
	      display: 'inline-block',
	      cursor: 'pointer'
	    });
	    Common.extend(valueField.style, {
	      width: '100%',
	      height: '100%',
	      background: 'none'
	    });
	    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
	    Common.extend(_this2.__hue_field.style, {
	      width: '15px',
	      height: '100px',
	      border: '1px solid #555',
	      cursor: 'ns-resize',
	      position: 'absolute',
	      top: '3px',
	      right: '3px'
	    });
	    hueGradient(_this2.__hue_field);
	    Common.extend(_this2.__input.style, {
	      outline: 'none',
	      textAlign: 'center',
	      color: '#fff',
	      border: 0,
	      fontWeight: 'bold',
	      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
	    });
	    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
	    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
	    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
	    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
	    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
	    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
	    function fieldDown(e) {
	      setSV(e);
	      dom.bind(window, 'mousemove', setSV);
	      dom.bind(window, 'touchmove', setSV);
	      dom.bind(window, 'mouseup', fieldUpSV);
	      dom.bind(window, 'touchend', fieldUpSV);
	    }
	    function fieldDownH(e) {
	      setH(e);
	      dom.bind(window, 'mousemove', setH);
	      dom.bind(window, 'touchmove', setH);
	      dom.bind(window, 'mouseup', fieldUpH);
	      dom.bind(window, 'touchend', fieldUpH);
	    }
	    function fieldUpSV() {
	      dom.unbind(window, 'mousemove', setSV);
	      dom.unbind(window, 'touchmove', setSV);
	      dom.unbind(window, 'mouseup', fieldUpSV);
	      dom.unbind(window, 'touchend', fieldUpSV);
	      onFinish();
	    }
	    function fieldUpH() {
	      dom.unbind(window, 'mousemove', setH);
	      dom.unbind(window, 'touchmove', setH);
	      dom.unbind(window, 'mouseup', fieldUpH);
	      dom.unbind(window, 'touchend', fieldUpH);
	      onFinish();
	    }
	    function onBlur() {
	      var i = interpret(this.value);
	      if (i !== false) {
	        _this.__color.__state = i;
	        _this.setValue(_this.__color.toOriginal());
	      } else {
	        this.value = _this.__color.toString();
	      }
	    }
	    function onFinish() {
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
	      }
	    }
	    _this2.__saturation_field.appendChild(valueField);
	    _this2.__selector.appendChild(_this2.__field_knob);
	    _this2.__selector.appendChild(_this2.__saturation_field);
	    _this2.__selector.appendChild(_this2.__hue_field);
	    _this2.__hue_field.appendChild(_this2.__hue_knob);
	    _this2.domElement.appendChild(_this2.__input);
	    _this2.domElement.appendChild(_this2.__selector);
	    _this2.updateDisplay();
	    function setSV(e) {
	      if (e.type.indexOf('touch') === -1) {
	        e.preventDefault();
	      }
	      var fieldRect = _this.__saturation_field.getBoundingClientRect();
	      var _ref = e.touches && e.touches[0] || e,
	          clientX = _ref.clientX,
	          clientY = _ref.clientY;
	      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
	      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
	      if (v > 1) {
	        v = 1;
	      } else if (v < 0) {
	        v = 0;
	      }
	      if (s > 1) {
	        s = 1;
	      } else if (s < 0) {
	        s = 0;
	      }
	      _this.__color.v = v;
	      _this.__color.s = s;
	      _this.setValue(_this.__color.toOriginal());
	      return false;
	    }
	    function setH(e) {
	      if (e.type.indexOf('touch') === -1) {
	        e.preventDefault();
	      }
	      var fieldRect = _this.__hue_field.getBoundingClientRect();
	      var _ref2 = e.touches && e.touches[0] || e,
	          clientY = _ref2.clientY;
	      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
	      if (h > 1) {
	        h = 1;
	      } else if (h < 0) {
	        h = 0;
	      }
	      _this.__color.h = h * 360;
	      _this.setValue(_this.__color.toOriginal());
	      return false;
	    }
	    return _this2;
	  }
	  createClass(ColorController, [{
	    key: 'updateDisplay',
	    value: function updateDisplay() {
	      var i = interpret(this.getValue());
	      if (i !== false) {
	        var mismatch = false;
	        Common.each(Color.COMPONENTS, function (component) {
	          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
	            mismatch = true;
	            return {};
	          }
	        }, this);
	        if (mismatch) {
	          Common.extend(this.__color.__state, i);
	        }
	      }
	      Common.extend(this.__temp.__state, this.__color.__state);
	      this.__temp.a = 1;
	      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
	      var _flip = 255 - flip;
	      Common.extend(this.__field_knob.style, {
	        marginLeft: 100 * this.__color.s - 7 + 'px',
	        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
	        backgroundColor: this.__temp.toHexString(),
	        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
	      });
	      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
	      this.__temp.s = 1;
	      this.__temp.v = 1;
	      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
	      this.__input.value = this.__color.toString();
	      Common.extend(this.__input.style, {
	        backgroundColor: this.__color.toHexString(),
	        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
	        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
	      });
	    }
	  }]);
	  return ColorController;
	}(Controller);
	var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
	function linearGradient(elem, x, a, b) {
	  elem.style.background = '';
	  Common.each(vendors, function (vendor) {
	    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
	  });
	}
	function hueGradient(elem) {
	  elem.style.background = '';
	  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
	  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
	  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
	  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
	  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
	}

	var css = {
	  load: function load(url, indoc) {
	    var doc = indoc || document;
	    var link = doc.createElement('link');
	    link.type = 'text/css';
	    link.rel = 'stylesheet';
	    link.href = url;
	    doc.getElementsByTagName('head')[0].appendChild(link);
	  },
	  inject: function inject(cssContent, indoc) {
	    var doc = indoc || document;
	    var injected = document.createElement('style');
	    injected.type = 'text/css';
	    injected.innerHTML = cssContent;
	    var head = doc.getElementsByTagName('head')[0];
	    try {
	      head.appendChild(injected);
	    } catch (e) {
	    }
	  }
	};

	var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

	var ControllerFactory = function ControllerFactory(object, property) {
	  var initialValue = object[property];
	  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
	    return new OptionController(object, property, arguments[2]);
	  }
	  if (Common.isNumber(initialValue)) {
	    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
	      if (Common.isNumber(arguments[4])) {
	        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
	      }
	      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
	    }
	    if (Common.isNumber(arguments[4])) {
	      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
	    }
	    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
	  }
	  if (Common.isString(initialValue)) {
	    return new StringController(object, property);
	  }
	  if (Common.isFunction(initialValue)) {
	    return new FunctionController(object, property, '');
	  }
	  if (Common.isBoolean(initialValue)) {
	    return new BooleanController(object, property);
	  }
	  return null;
	};

	function requestAnimationFrame(callback) {
	  setTimeout(callback, 1000 / 60);
	}
	var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;

	var CenteredDiv = function () {
	  function CenteredDiv() {
	    classCallCheck(this, CenteredDiv);
	    this.backgroundElement = document.createElement('div');
	    Common.extend(this.backgroundElement.style, {
	      backgroundColor: 'rgba(0,0,0,0.8)',
	      top: 0,
	      left: 0,
	      display: 'none',
	      zIndex: '1000',
	      opacity: 0,
	      WebkitTransition: 'opacity 0.2s linear',
	      transition: 'opacity 0.2s linear'
	    });
	    dom.makeFullscreen(this.backgroundElement);
	    this.backgroundElement.style.position = 'fixed';
	    this.domElement = document.createElement('div');
	    Common.extend(this.domElement.style, {
	      position: 'fixed',
	      display: 'none',
	      zIndex: '1001',
	      opacity: 0,
	      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
	      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
	    });
	    document.body.appendChild(this.backgroundElement);
	    document.body.appendChild(this.domElement);
	    var _this = this;
	    dom.bind(this.backgroundElement, 'click', function () {
	      _this.hide();
	    });
	  }
	  createClass(CenteredDiv, [{
	    key: 'show',
	    value: function show() {
	      var _this = this;
	      this.backgroundElement.style.display = 'block';
	      this.domElement.style.display = 'block';
	      this.domElement.style.opacity = 0;
	      this.domElement.style.webkitTransform = 'scale(1.1)';
	      this.layout();
	      Common.defer(function () {
	        _this.backgroundElement.style.opacity = 1;
	        _this.domElement.style.opacity = 1;
	        _this.domElement.style.webkitTransform = 'scale(1)';
	      });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this = this;
	      var hide = function hide() {
	        _this.domElement.style.display = 'none';
	        _this.backgroundElement.style.display = 'none';
	        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
	        dom.unbind(_this.domElement, 'transitionend', hide);
	        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
	      };
	      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
	      dom.bind(this.domElement, 'transitionend', hide);
	      dom.bind(this.domElement, 'oTransitionEnd', hide);
	      this.backgroundElement.style.opacity = 0;
	      this.domElement.style.opacity = 0;
	      this.domElement.style.webkitTransform = 'scale(1.1)';
	    }
	  }, {
	    key: 'layout',
	    value: function layout() {
	      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
	      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
	    }
	  }]);
	  return CenteredDiv;
	}();

	var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

	css.inject(styleSheet);
	var CSS_NAMESPACE = 'dg';
	var HIDE_KEY_CODE = 72;
	var CLOSE_BUTTON_HEIGHT = 20;
	var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
	var SUPPORTS_LOCAL_STORAGE = function () {
	  try {
	    return !!window.localStorage;
	  } catch (e) {
	    return false;
	  }
	}();
	var SAVE_DIALOGUE = void 0;
	var autoPlaceVirgin = true;
	var autoPlaceContainer = void 0;
	var hide = false;
	var hideableGuis = [];
	var GUI = function GUI(pars) {
	  var _this = this;
	  var params = pars || {};
	  this.domElement = document.createElement('div');
	  this.__ul = document.createElement('ul');
	  this.domElement.appendChild(this.__ul);
	  dom.addClass(this.domElement, CSS_NAMESPACE);
	  this.__folders = {};
	  this.__controllers = [];
	  this.__rememberedObjects = [];
	  this.__rememberedObjectIndecesToControllers = [];
	  this.__listening = [];
	  params = Common.defaults(params, {
	    closeOnTop: false,
	    autoPlace: true,
	    width: GUI.DEFAULT_WIDTH
	  });
	  params = Common.defaults(params, {
	    resizable: params.autoPlace,
	    hideable: params.autoPlace
	  });
	  if (!Common.isUndefined(params.load)) {
	    if (params.preset) {
	      params.load.preset = params.preset;
	    }
	  } else {
	    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
	  }
	  if (Common.isUndefined(params.parent) && params.hideable) {
	    hideableGuis.push(this);
	  }
	  params.resizable = Common.isUndefined(params.parent) && params.resizable;
	  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
	    params.scrollable = true;
	  }
	  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
	  var saveToLocalStorage = void 0;
	  var titleRow = void 0;
	  Object.defineProperties(this,
	  {
	    parent: {
	      get: function get$$1() {
	        return params.parent;
	      }
	    },
	    scrollable: {
	      get: function get$$1() {
	        return params.scrollable;
	      }
	    },
	    autoPlace: {
	      get: function get$$1() {
	        return params.autoPlace;
	      }
	    },
	    closeOnTop: {
	      get: function get$$1() {
	        return params.closeOnTop;
	      }
	    },
	    preset: {
	      get: function get$$1() {
	        if (_this.parent) {
	          return _this.getRoot().preset;
	        }
	        return params.load.preset;
	      },
	      set: function set$$1(v) {
	        if (_this.parent) {
	          _this.getRoot().preset = v;
	        } else {
	          params.load.preset = v;
	        }
	        setPresetSelectIndex(this);
	        _this.revert();
	      }
	    },
	    width: {
	      get: function get$$1() {
	        return params.width;
	      },
	      set: function set$$1(v) {
	        params.width = v;
	        setWidth(_this, v);
	      }
	    },
	    name: {
	      get: function get$$1() {
	        return params.name;
	      },
	      set: function set$$1(v) {
	        params.name = v;
	        if (titleRow) {
	          titleRow.innerHTML = params.name;
	        }
	      }
	    },
	    closed: {
	      get: function get$$1() {
	        return params.closed;
	      },
	      set: function set$$1(v) {
	        params.closed = v;
	        if (params.closed) {
	          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
	        } else {
	          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
	        }
	        this.onResize();
	        if (_this.__closeButton) {
	          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
	        }
	      }
	    },
	    load: {
	      get: function get$$1() {
	        return params.load;
	      }
	    },
	    useLocalStorage: {
	      get: function get$$1() {
	        return useLocalStorage;
	      },
	      set: function set$$1(bool) {
	        if (SUPPORTS_LOCAL_STORAGE) {
	          useLocalStorage = bool;
	          if (bool) {
	            dom.bind(window, 'unload', saveToLocalStorage);
	          } else {
	            dom.unbind(window, 'unload', saveToLocalStorage);
	          }
	          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
	        }
	      }
	    }
	  });
	  if (Common.isUndefined(params.parent)) {
	    this.closed = params.closed || false;
	    dom.addClass(this.domElement, GUI.CLASS_MAIN);
	    dom.makeSelectable(this.domElement, false);
	    if (SUPPORTS_LOCAL_STORAGE) {
	      if (useLocalStorage) {
	        _this.useLocalStorage = true;
	        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
	        if (savedGui) {
	          params.load = JSON.parse(savedGui);
	        }
	      }
	    }
	    this.__closeButton = document.createElement('div');
	    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
	    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
	    if (params.closeOnTop) {
	      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
	      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
	    } else {
	      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
	      this.domElement.appendChild(this.__closeButton);
	    }
	    dom.bind(this.__closeButton, 'click', function () {
	      _this.closed = !_this.closed;
	    });
	  } else {
	    if (params.closed === undefined) {
	      params.closed = true;
	    }
	    var titleRowName = document.createTextNode(params.name);
	    dom.addClass(titleRowName, 'controller-name');
	    titleRow = addRow(_this, titleRowName);
	    var onClickTitle = function onClickTitle(e) {
	      e.preventDefault();
	      _this.closed = !_this.closed;
	      return false;
	    };
	    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
	    dom.addClass(titleRow, 'title');
	    dom.bind(titleRow, 'click', onClickTitle);
	    if (!params.closed) {
	      this.closed = false;
	    }
	  }
	  if (params.autoPlace) {
	    if (Common.isUndefined(params.parent)) {
	      if (autoPlaceVirgin) {
	        autoPlaceContainer = document.createElement('div');
	        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
	        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
	        document.body.appendChild(autoPlaceContainer);
	        autoPlaceVirgin = false;
	      }
	      autoPlaceContainer.appendChild(this.domElement);
	      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
	    }
	    if (!this.parent) {
	      setWidth(_this, params.width);
	    }
	  }
	  this.__resizeHandler = function () {
	    _this.onResizeDebounced();
	  };
	  dom.bind(window, 'resize', this.__resizeHandler);
	  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
	  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
	  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
	  this.onResize();
	  if (params.resizable) {
	    addResizeHandle(this);
	  }
	  saveToLocalStorage = function saveToLocalStorage() {
	    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
	      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
	    }
	  };
	  this.saveToLocalStorageIfPossible = saveToLocalStorage;
	  function resetWidth() {
	    var root = _this.getRoot();
	    root.width += 1;
	    Common.defer(function () {
	      root.width -= 1;
	    });
	  }
	  if (!params.parent) {
	    resetWidth();
	  }
	};
	GUI.toggleHide = function () {
	  hide = !hide;
	  Common.each(hideableGuis, function (gui) {
	    gui.domElement.style.display = hide ? 'none' : '';
	  });
	};
	GUI.CLASS_AUTO_PLACE = 'a';
	GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
	GUI.CLASS_MAIN = 'main';
	GUI.CLASS_CONTROLLER_ROW = 'cr';
	GUI.CLASS_TOO_TALL = 'taller-than-window';
	GUI.CLASS_CLOSED = 'closed';
	GUI.CLASS_CLOSE_BUTTON = 'close-button';
	GUI.CLASS_CLOSE_TOP = 'close-top';
	GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
	GUI.CLASS_DRAG = 'drag';
	GUI.DEFAULT_WIDTH = 245;
	GUI.TEXT_CLOSED = 'Close Controls';
	GUI.TEXT_OPEN = 'Open Controls';
	GUI._keydownHandler = function (e) {
	  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
	    GUI.toggleHide();
	  }
	};
	dom.bind(window, 'keydown', GUI._keydownHandler, false);
	Common.extend(GUI.prototype,
	{
	  add: function add(object, property) {
	    return _add(this, object, property, {
	      factoryArgs: Array.prototype.slice.call(arguments, 2)
	    });
	  },
	  addColor: function addColor(object, property) {
	    return _add(this, object, property, {
	      color: true
	    });
	  },
	  remove: function remove(controller) {
	    this.__ul.removeChild(controller.__li);
	    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
	    var _this = this;
	    Common.defer(function () {
	      _this.onResize();
	    });
	  },
	  destroy: function destroy() {
	    if (this.parent) {
	      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
	    }
	    if (this.autoPlace) {
	      autoPlaceContainer.removeChild(this.domElement);
	    }
	    var _this = this;
	    Common.each(this.__folders, function (subfolder) {
	      _this.removeFolder(subfolder);
	    });
	    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
	    removeListeners(this);
	  },
	  addFolder: function addFolder(name) {
	    if (this.__folders[name] !== undefined) {
	      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
	    }
	    var newGuiParams = { name: name, parent: this };
	    newGuiParams.autoPlace = this.autoPlace;
	    if (this.load &&
	    this.load.folders &&
	    this.load.folders[name]) {
	      newGuiParams.closed = this.load.folders[name].closed;
	      newGuiParams.load = this.load.folders[name];
	    }
	    var gui = new GUI(newGuiParams);
	    this.__folders[name] = gui;
	    var li = addRow(this, gui.domElement);
	    dom.addClass(li, 'folder');
	    return gui;
	  },
	  removeFolder: function removeFolder(folder) {
	    this.__ul.removeChild(folder.domElement.parentElement);
	    delete this.__folders[folder.name];
	    if (this.load &&
	    this.load.folders &&
	    this.load.folders[folder.name]) {
	      delete this.load.folders[folder.name];
	    }
	    removeListeners(folder);
	    var _this = this;
	    Common.each(folder.__folders, function (subfolder) {
	      folder.removeFolder(subfolder);
	    });
	    Common.defer(function () {
	      _this.onResize();
	    });
	  },
	  open: function open() {
	    this.closed = false;
	  },
	  close: function close() {
	    this.closed = true;
	  },
	  onResize: function onResize() {
	    var root = this.getRoot();
	    if (root.scrollable) {
	      var top = dom.getOffset(root.__ul).top;
	      var h = 0;
	      Common.each(root.__ul.childNodes, function (node) {
	        if (!(root.autoPlace && node === root.__save_row)) {
	          h += dom.getHeight(node);
	        }
	      });
	      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
	        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
	        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
	      } else {
	        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
	        root.__ul.style.height = 'auto';
	      }
	    }
	    if (root.__resize_handle) {
	      Common.defer(function () {
	        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
	      });
	    }
	    if (root.__closeButton) {
	      root.__closeButton.style.width = root.width + 'px';
	    }
	  },
	  onResizeDebounced: Common.debounce(function () {
	    this.onResize();
	  }, 50),
	  remember: function remember() {
	    if (Common.isUndefined(SAVE_DIALOGUE)) {
	      SAVE_DIALOGUE = new CenteredDiv();
	      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
	    }
	    if (this.parent) {
	      throw new Error('You can only call remember on a top level GUI.');
	    }
	    var _this = this;
	    Common.each(Array.prototype.slice.call(arguments), function (object) {
	      if (_this.__rememberedObjects.length === 0) {
	        addSaveMenu(_this);
	      }
	      if (_this.__rememberedObjects.indexOf(object) === -1) {
	        _this.__rememberedObjects.push(object);
	      }
	    });
	    if (this.autoPlace) {
	      setWidth(this, this.width);
	    }
	  },
	  getRoot: function getRoot() {
	    var gui = this;
	    while (gui.parent) {
	      gui = gui.parent;
	    }
	    return gui;
	  },
	  getSaveObject: function getSaveObject() {
	    var toReturn = this.load;
	    toReturn.closed = this.closed;
	    if (this.__rememberedObjects.length > 0) {
	      toReturn.preset = this.preset;
	      if (!toReturn.remembered) {
	        toReturn.remembered = {};
	      }
	      toReturn.remembered[this.preset] = getCurrentPreset(this);
	    }
	    toReturn.folders = {};
	    Common.each(this.__folders, function (element, key) {
	      toReturn.folders[key] = element.getSaveObject();
	    });
	    return toReturn;
	  },
	  save: function save() {
	    if (!this.load.remembered) {
	      this.load.remembered = {};
	    }
	    this.load.remembered[this.preset] = getCurrentPreset(this);
	    markPresetModified(this, false);
	    this.saveToLocalStorageIfPossible();
	  },
	  saveAs: function saveAs(presetName) {
	    if (!this.load.remembered) {
	      this.load.remembered = {};
	      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
	    }
	    this.load.remembered[presetName] = getCurrentPreset(this);
	    this.preset = presetName;
	    addPresetOption(this, presetName, true);
	    this.saveToLocalStorageIfPossible();
	  },
	  revert: function revert(gui) {
	    Common.each(this.__controllers, function (controller) {
	      if (!this.getRoot().load.remembered) {
	        controller.setValue(controller.initialValue);
	      } else {
	        recallSavedValue(gui || this.getRoot(), controller);
	      }
	      if (controller.__onFinishChange) {
	        controller.__onFinishChange.call(controller, controller.getValue());
	      }
	    }, this);
	    Common.each(this.__folders, function (folder) {
	      folder.revert(folder);
	    });
	    if (!gui) {
	      markPresetModified(this.getRoot(), false);
	    }
	  },
	  listen: function listen(controller) {
	    var init = this.__listening.length === 0;
	    this.__listening.push(controller);
	    if (init) {
	      updateDisplays(this.__listening);
	    }
	  },
	  updateDisplay: function updateDisplay() {
	    Common.each(this.__controllers, function (controller) {
	      controller.updateDisplay();
	    });
	    Common.each(this.__folders, function (folder) {
	      folder.updateDisplay();
	    });
	  }
	});
	function addRow(gui, newDom, liBefore) {
	  var li = document.createElement('li');
	  if (newDom) {
	    li.appendChild(newDom);
	  }
	  if (liBefore) {
	    gui.__ul.insertBefore(li, liBefore);
	  } else {
	    gui.__ul.appendChild(li);
	  }
	  gui.onResize();
	  return li;
	}
	function removeListeners(gui) {
	  dom.unbind(window, 'resize', gui.__resizeHandler);
	  if (gui.saveToLocalStorageIfPossible) {
	    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
	  }
	}
	function markPresetModified(gui, modified) {
	  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
	  if (modified) {
	    opt.innerHTML = opt.value + '*';
	  } else {
	    opt.innerHTML = opt.value;
	  }
	}
	function augmentController(gui, li, controller) {
	  controller.__li = li;
	  controller.__gui = gui;
	  Common.extend(controller,                                   {
	    options: function options(_options) {
	      if (arguments.length > 1) {
	        var nextSibling = controller.__li.nextElementSibling;
	        controller.remove();
	        return _add(gui, controller.object, controller.property, {
	          before: nextSibling,
	          factoryArgs: [Common.toArray(arguments)]
	        });
	      }
	      if (Common.isArray(_options) || Common.isObject(_options)) {
	        var _nextSibling = controller.__li.nextElementSibling;
	        controller.remove();
	        return _add(gui, controller.object, controller.property, {
	          before: _nextSibling,
	          factoryArgs: [_options]
	        });
	      }
	    },
	    name: function name(_name) {
	      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
	      return controller;
	    },
	    listen: function listen() {
	      controller.__gui.listen(controller);
	      return controller;
	    },
	    remove: function remove() {
	      controller.__gui.remove(controller);
	      return controller;
	    }
	  });
	  if (controller instanceof NumberControllerSlider) {
	    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
	    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
	      var pc = controller[method];
	      var pb = box[method];
	      controller[method] = box[method] = function () {
	        var args = Array.prototype.slice.call(arguments);
	        pb.apply(box, args);
	        return pc.apply(controller, args);
	      };
	    });
	    dom.addClass(li, 'has-slider');
	    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
	  } else if (controller instanceof NumberControllerBox) {
	    var r = function r(returned) {
	      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
	        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
	        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
	        controller.remove();
	        var newController = _add(gui, controller.object, controller.property, {
	          before: controller.__li.nextElementSibling,
	          factoryArgs: [controller.__min, controller.__max, controller.__step]
	        });
	        newController.name(oldName);
	        if (wasListening) newController.listen();
	        return newController;
	      }
	      return returned;
	    };
	    controller.min = Common.compose(r, controller.min);
	    controller.max = Common.compose(r, controller.max);
	  } else if (controller instanceof BooleanController) {
	    dom.bind(li, 'click', function () {
	      dom.fakeEvent(controller.__checkbox, 'click');
	    });
	    dom.bind(controller.__checkbox, 'click', function (e) {
	      e.stopPropagation();
	    });
	  } else if (controller instanceof FunctionController) {
	    dom.bind(li, 'click', function () {
	      dom.fakeEvent(controller.__button, 'click');
	    });
	    dom.bind(li, 'mouseover', function () {
	      dom.addClass(controller.__button, 'hover');
	    });
	    dom.bind(li, 'mouseout', function () {
	      dom.removeClass(controller.__button, 'hover');
	    });
	  } else if (controller instanceof ColorController) {
	    dom.addClass(li, 'color');
	    controller.updateDisplay = Common.compose(function (val) {
	      li.style.borderLeftColor = controller.__color.toString();
	      return val;
	    }, controller.updateDisplay);
	    controller.updateDisplay();
	  }
	  controller.setValue = Common.compose(function (val) {
	    if (gui.getRoot().__preset_select && controller.isModified()) {
	      markPresetModified(gui.getRoot(), true);
	    }
	    return val;
	  }, controller.setValue);
	}
	function recallSavedValue(gui, controller) {
	  var root = gui.getRoot();
	  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
	  if (matchedIndex !== -1) {
	    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
	    if (controllerMap === undefined) {
	      controllerMap = {};
	      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
	    }
	    controllerMap[controller.property] = controller;
	    if (root.load && root.load.remembered) {
	      var presetMap = root.load.remembered;
	      var preset = void 0;
	      if (presetMap[gui.preset]) {
	        preset = presetMap[gui.preset];
	      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
	        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
	      } else {
	        return;
	      }
	      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
	        var value = preset[matchedIndex][controller.property];
	        controller.initialValue = value;
	        controller.setValue(value);
	      }
	    }
	  }
	}
	function _add(gui, object, property, params) {
	  if (object[property] === undefined) {
	    throw new Error('Object "' + object + '" has no property "' + property + '"');
	  }
	  var controller = void 0;
	  if (params.color) {
	    controller = new ColorController(object, property);
	  } else {
	    var factoryArgs = [object, property].concat(params.factoryArgs);
	    controller = ControllerFactory.apply(gui, factoryArgs);
	  }
	  if (params.before instanceof Controller) {
	    params.before = params.before.__li;
	  }
	  recallSavedValue(gui, controller);
	  dom.addClass(controller.domElement, 'c');
	  var name = document.createElement('span');
	  dom.addClass(name, 'property-name');
	  name.innerHTML = controller.property;
	  var container = document.createElement('div');
	  container.appendChild(name);
	  container.appendChild(controller.domElement);
	  var li = addRow(gui, container, params.before);
	  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
	  if (controller instanceof ColorController) {
	    dom.addClass(li, 'color');
	  } else {
	    dom.addClass(li, _typeof(controller.getValue()));
	  }
	  augmentController(gui, li, controller);
	  gui.__controllers.push(controller);
	  return controller;
	}
	function getLocalStorageHash(gui, key) {
	  return document.location.href + '.' + key;
	}
	function addPresetOption(gui, name, setSelected) {
	  var opt = document.createElement('option');
	  opt.innerHTML = name;
	  opt.value = name;
	  gui.__preset_select.appendChild(opt);
	  if (setSelected) {
	    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
	  }
	}
	function showHideExplain(gui, explain) {
	  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
	}
	function addSaveMenu(gui) {
	  var div = gui.__save_row = document.createElement('li');
	  dom.addClass(gui.domElement, 'has-save');
	  gui.__ul.insertBefore(div, gui.__ul.firstChild);
	  dom.addClass(div, 'save-row');
	  var gears = document.createElement('span');
	  gears.innerHTML = '&nbsp;';
	  dom.addClass(gears, 'button gears');
	  var button = document.createElement('span');
	  button.innerHTML = 'Save';
	  dom.addClass(button, 'button');
	  dom.addClass(button, 'save');
	  var button2 = document.createElement('span');
	  button2.innerHTML = 'New';
	  dom.addClass(button2, 'button');
	  dom.addClass(button2, 'save-as');
	  var button3 = document.createElement('span');
	  button3.innerHTML = 'Revert';
	  dom.addClass(button3, 'button');
	  dom.addClass(button3, 'revert');
	  var select = gui.__preset_select = document.createElement('select');
	  if (gui.load && gui.load.remembered) {
	    Common.each(gui.load.remembered, function (value, key) {
	      addPresetOption(gui, key, key === gui.preset);
	    });
	  } else {
	    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
	  }
	  dom.bind(select, 'change', function () {
	    for (var index = 0; index < gui.__preset_select.length; index++) {
	      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
	    }
	    gui.preset = this.value;
	  });
	  div.appendChild(select);
	  div.appendChild(gears);
	  div.appendChild(button);
	  div.appendChild(button2);
	  div.appendChild(button3);
	  if (SUPPORTS_LOCAL_STORAGE) {
	    var explain = document.getElementById('dg-local-explain');
	    var localStorageCheckBox = document.getElementById('dg-local-storage');
	    var saveLocally = document.getElementById('dg-save-locally');
	    saveLocally.style.display = 'block';
	    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
	      localStorageCheckBox.setAttribute('checked', 'checked');
	    }
	    showHideExplain(gui, explain);
	    dom.bind(localStorageCheckBox, 'change', function () {
	      gui.useLocalStorage = !gui.useLocalStorage;
	      showHideExplain(gui, explain);
	    });
	  }
	  var newConstructorTextArea = document.getElementById('dg-new-constructor');
	  dom.bind(newConstructorTextArea, 'keydown', function (e) {
	    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
	      SAVE_DIALOGUE.hide();
	    }
	  });
	  dom.bind(gears, 'click', function () {
	    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
	    SAVE_DIALOGUE.show();
	    newConstructorTextArea.focus();
	    newConstructorTextArea.select();
	  });
	  dom.bind(button, 'click', function () {
	    gui.save();
	  });
	  dom.bind(button2, 'click', function () {
	    var presetName = prompt('Enter a new preset name.');
	    if (presetName) {
	      gui.saveAs(presetName);
	    }
	  });
	  dom.bind(button3, 'click', function () {
	    gui.revert();
	  });
	}
	function addResizeHandle(gui) {
	  var pmouseX = void 0;
	  gui.__resize_handle = document.createElement('div');
	  Common.extend(gui.__resize_handle.style, {
	    width: '6px',
	    marginLeft: '-3px',
	    height: '200px',
	    cursor: 'ew-resize',
	    position: 'absolute'
	  });
	  function drag(e) {
	    e.preventDefault();
	    gui.width += pmouseX - e.clientX;
	    gui.onResize();
	    pmouseX = e.clientX;
	    return false;
	  }
	  function dragStop() {
	    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
	    dom.unbind(window, 'mousemove', drag);
	    dom.unbind(window, 'mouseup', dragStop);
	  }
	  function dragStart(e) {
	    e.preventDefault();
	    pmouseX = e.clientX;
	    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
	    dom.bind(window, 'mousemove', drag);
	    dom.bind(window, 'mouseup', dragStop);
	    return false;
	  }
	  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
	  dom.bind(gui.__closeButton, 'mousedown', dragStart);
	  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
	}
	function setWidth(gui, w) {
	  gui.domElement.style.width = w + 'px';
	  if (gui.__save_row && gui.autoPlace) {
	    gui.__save_row.style.width = w + 'px';
	  }
	  if (gui.__closeButton) {
	    gui.__closeButton.style.width = w + 'px';
	  }
	}
	function getCurrentPreset(gui, useInitialValues) {
	  var toReturn = {};
	  Common.each(gui.__rememberedObjects, function (val, index) {
	    var savedValues = {};
	    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
	    Common.each(controllerMap, function (controller, property) {
	      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
	    });
	    toReturn[index] = savedValues;
	  });
	  return toReturn;
	}
	function setPresetSelectIndex(gui) {
	  for (var index = 0; index < gui.__preset_select.length; index++) {
	    if (gui.__preset_select[index].value === gui.preset) {
	      gui.__preset_select.selectedIndex = index;
	    }
	  }
	}
	function updateDisplays(controllerArray) {
	  if (controllerArray.length !== 0) {
	    requestAnimationFrame$1.call(window, function () {
	      updateDisplays(controllerArray);
	    });
	  }
	  Common.each(controllerArray, function (c) {
	    c.updateDisplay();
	  });
	}

	var color = {
	  Color: Color,
	  math: ColorMath,
	  interpret: interpret
	};
	var controllers = {
	  Controller: Controller,
	  BooleanController: BooleanController,
	  OptionController: OptionController,
	  StringController: StringController,
	  NumberController: NumberController,
	  NumberControllerBox: NumberControllerBox,
	  NumberControllerSlider: NumberControllerSlider,
	  FunctionController: FunctionController,
	  ColorController: ColorController
	};
	var dom$1 = { dom: dom };
	var gui = { GUI: GUI };
	var GUI$1 = GUI;
	var index = {
	  color: color,
	  controllers: controllers,
	  dom: dom$1,
	  gui: gui,
	  GUI: GUI$1
	};

	exports.color = color;
	exports.controllers = controllers;
	exports.dom = dom$1;
	exports.gui = gui;
	exports.GUI = GUI$1;
	exports['default'] = index;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));
	//# sourceMappingURL=dat.gui.js.map


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Controller = __webpack_require__(47);

	var _Controller2 = _interopRequireDefault(_Controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Controller = function (_Base) {
	  _inherits(Controller, _Base);

	  function Controller() {
	    _classCallCheck(this, Controller);

	    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));
	  }

	  _createClass(Controller, [{
	    key: "init",
	    value: function init() {
	      this.name = "DomController";
	      this.ft = $(".footer").height();
	    }
	  }, {
	    key: "show",
	    value: function show(menuBtnShow) {
	      var header = $(".header");
	      var $inner = $(".index-kv-inner.def");
	      var $innerLine = $(".index-kv-inner.line");
	      var logo = $(".header-logo");
	      var menuBtn = $(".header-menu-btn");
	      var $lead = $inner.find(".index-kv-lead");
	      var $tit = $inner.find(".index-kv-title");
	      var $leadL = $innerLine.find(".index-kv-lead");
	      var $titL = $innerLine.find(".index-kv-title");
	      var tl = new TimelineMax();

	      // ready
	      TweenMax.set($tit, { x: 100 });
	      TweenMax.set($titL, { x: 100 });
	      TweenMax.set($lead, { x: 20 });
	      TweenMax.set($leadL, { x: 20 });

	      tl
	      // $tit show
	      .to($tit, 0.01, {
	        opacity: 1,
	        ease: Expo.easeOut
	      }, 0.0)
	      // $tit x
	      .to($tit, 0.9, {
	        x: 0,
	        ease: Expo.easeOut
	      }, 0.0)

	      // $titL show
	      .to($titL, 0.01, {
	        opacity: 1,
	        ease: Expo.easeOut
	      }, 0.0)
	      // $titL x
	      .to($titL, 0.9, {
	        x: 0,
	        ease: Expo.easeOut
	      }, 0.05)

	      // $lead x
	      .to($lead, 1.5, {
	        x: 0,
	        opacity: 1,
	        ease: Expo.easeOut
	      }, 0.2)

	      // logo
	      .to(logo, 1, {
	        opacity: 1,
	        y: 0,
	        ease: Expo.easeOut
	      }, 1.5)
	      // btn
	      .add(menuBtnShow(), 1.5);
	    }
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "canvasStop",
	    value: function canvasStop(st) {
	      // if (!$("body").hasClass("isIE")) return;
	      var ftop = $(".footer").offset().top - window.innerHeight;
	      if (ftop <= st) {
	        $(".canvasWrap").css({
	          bottom: this.ft
	        });

	        $(".canvasWrap").addClass("absolute");
	      } else {
	        $(".canvasWrap").removeClass("absolute");
	        $(".canvasWrap").css({
	          bottom: ""
	        });
	      }
	    }
	  }, {
	    key: "setEvent",
	    value: function setEvent() {
	      var _this2 = this;

	      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), "__setUpdateFlag", this).call(this, false);

	      $(window).on("scroll", function (e) {
	        var st = $(window).scrollTop();
	        _this2.canvasStop(st);
	      });
	    }
	  }, {
	    key: "reset",
	    value: function reset() {}
	  }]);

	  return Controller;
	}(_Controller2.default);

	exports.default = Controller;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);

	    this.setEvents();
	  }

	  _createClass(Controller, [{
	    key: "show",
	    value: function show() {
	      var tl = new TimelineMax();
	      tl.to(".cookie", 0.5, {
	        opacity: 1,
	        ease: Expo.easeOut
	      });
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var tl = new TimelineMax();
	      tl.to(".cookie", 0.5, {
	        opacity: 0,
	        ease: Expo.easeOut,
	        onComplete: function onComplete() {
	          $(".cookie").remove();
	        }
	      });
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	      var _this = this;

	      $(".cookie .btn").on("click", function (e) {
	        _this.hide();
	        return false;
	      });
	    }
	  }]);

	  return Controller;
	}();

	exports.default = Controller;

/***/ })
/******/ ]);