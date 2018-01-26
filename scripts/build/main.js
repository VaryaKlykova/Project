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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(1);
index_1.default();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var initCalcul_1 = __webpack_require__(2);
var initPitan_1 = __webpack_require__(4);
function main() {
    initCalcul_1.default();
    initPitan_1.default();
}
exports.default = main;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var initButtonRadio_1 = __webpack_require__(3);
function main() {
    initSex('block');
    initCalc();
}
exports.default = main;
var previousSexButton = document.getElementById('women');
function initSex(button) {
    var input = document.getElementsByClassName(button);
    var onExtern = function (event) {
        if (event == undefined) {
            return;
        }
        var target = event.target;
        if (target.name == undefined) {
            return;
        }
        if (target.name == 'sex') {
            previousSexButton = target;
        }
    };
    initButtonRadio_1.default(input[0], onExtern);
}
function initCalc() {
    var button = document.getElementById('calculate');
    var elem = document.getElementById('cl-index');
    var elem2 = document.getElementById('day-cal');
    var onExtern = function (event) {
        if (event == undefined) {
            return;
        }
        var s = previousSexButton.value;
        var form = document.forms[0];
        var h = form.elements[0].value;
        var w = form.elements[1].value;
        var a = form.elements[2].value;
        var sbi = calculateSBI(String(s), Number(h), Number(w), Number(a));
        var imt = calculateIMT(Number(h), Number(w));
        elem.textContent = String(imt);
        elem2.textContent = String(sbi);
    };
    button.addEventListener('click', onExtern);
}
function calculateSBI(s, h, w, a) {
    if (s === 'women') {
        return Math.round((447.6 + (9.2 * w) + (3.1 * h) - (4.3 * a)));
    }
    else {
        return Math.round(((88.36 + (13.4 * w) + (4.8 * h) - (5.7 * a))));
    }
}
function calculateIMT(h, w) {
    return Math.round((w / (Math.pow(h / 100, 2))) * 10) / 10;
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
function main(block, change) {
    var onChange = function (event) {
        change(event);
    };
    block.addEventListener('change', onChange);
}
exports.default = main;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function main() {
    initPit();
    init1200();
    init1400();
    init1600();
    init1800();
    init2000();
    init2200();
}
exports.default = main;
function initPit() {
    var button = document.getElementById('Pitanie');
    var b = document.getElementById('basis');
    var c = document.getElementById('cor');
    var r = document.getElementById('retur');
    var onExtern = function (event) {
        if (event == undefined) {
            return;
        }
        b.style.display = 'none';
        c.style.display = 'block';
        r.style.display = 'block';
    };
    button.addEventListener('click', onExtern);
}
function init1200() {
    var button = document.getElementById('1200');
    var x12 = document.getElementById('p1200');
    var x14 = document.getElementById('p1400');
    var x16 = document.getElementById('p1600');
    var x18 = document.getElementById('p1800');
    var x20 = document.getElementById('p2000');
    var x22 = document.getElementById('p2200');
    var onExtern = function (event) {
        if (event == undefined) {
            return;
        }
        x12.style.display = 'block';
        x14.style.display = 'none';
        x16.style.display = 'none';
        x18.style.display = 'none';
        x20.style.display = 'none';
        x22.style.display = 'none';
    };
    button.addEventListener('click', onExtern);
}
function init1400() {
    var button = document.getElementById('1400');
    var x12 = document.getElementById('p1200');
    var x14 = document.getElementById('p1400');
    var x16 = document.getElementById('p1600');
    var x18 = document.getElementById('p1800');
    var x20 = document.getElementById('p2000');
    var x22 = document.getElementById('p2200');
    var onExtern = function (event) {
        if (event == undefined) {
            return;
        }
        x12.style.display = 'none';
        x14.style.display = 'block';
        x16.style.display = 'none';
        x18.style.display = 'none';
        x20.style.display = 'none';
        x22.style.display = 'none';
    };
    button.addEventListener('click', onExtern);
}
function init1600() {
    var button = document.getElementById('1600');
    var x12 = document.getElementById('p1200');
    var x14 = document.getElementById('p1400');
    var x16 = document.getElementById('p1600');
    var x18 = document.getElementById('p1800');
    var x20 = document.getElementById('p2000');
    var x22 = document.getElementById('p2200');
    var onExtern = function (event) {
        if (event == undefined) {
            return;
        }
        x12.style.display = 'none';
        x14.style.display = 'none';
        x16.style.display = 'block';
        x18.style.display = 'none';
        x20.style.display = 'none';
        x22.style.display = 'none';
    };
    button.addEventListener('click', onExtern);
}
function init1800() {
    var button = document.getElementById('1800');
    var x12 = document.getElementById('p1200');
    var x14 = document.getElementById('p1400');
    var x16 = document.getElementById('p1600');
    var x18 = document.getElementById('p1800');
    var x20 = document.getElementById('p2000');
    var x22 = document.getElementById('p2200');
    var onExtern = function (event) {
        if (event == undefined) {
            return;
        }
        x12.style.display = 'none';
        x14.style.display = 'none';
        x16.style.display = 'none';
        x18.style.display = 'block';
        x20.style.display = 'none';
        x22.style.display = 'none';
    };
    button.addEventListener('click', onExtern);
}
function init2000() {
    var button = document.getElementById('2000');
    var x12 = document.getElementById('p1200');
    var x14 = document.getElementById('p1400');
    var x16 = document.getElementById('p1600');
    var x18 = document.getElementById('p1800');
    var x20 = document.getElementById('p2000');
    var x22 = document.getElementById('p2200');
    var onExtern = function (event) {
        if (event == undefined) {
            return;
        }
        x12.style.display = 'none';
        x14.style.display = 'none';
        x16.style.display = 'none';
        x18.style.display = 'none';
        x20.style.display = 'block';
        x22.style.display = 'none';
    };
    button.addEventListener('click', onExtern);
}
function init2200() {
    var button = document.getElementById('2200');
    var x12 = document.getElementById('p1200');
    var x14 = document.getElementById('p1400');
    var x16 = document.getElementById('p1600');
    var x18 = document.getElementById('p1800');
    var x20 = document.getElementById('p2000');
    var x22 = document.getElementById('p2200');
    var onExtern = function (event) {
        if (event == undefined) {
            return;
        }
        x12.style.display = 'none';
        x14.style.display = 'none';
        x16.style.display = 'none';
        x18.style.display = 'none';
        x20.style.display = 'none';
        x22.style.display = 'block';
    };
    button.addEventListener('click', onExtern);
}


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map