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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener('DOMContentLoaded', function () {
    //Variables section
    //Buttons variables
    var resetButton = document.querySelector(".resetButton");
    var resetConfirmButton = document.querySelector(".resetConfirmButton");
    var resetDeclineButton = document.querySelector(".resetDeclineButton");

    //Reset screen variable

    var resetConfirmScreen = document.querySelector(".resetConfirmWrapper");

    //Timer variable
    var timer = document.querySelector(".timer");

    //Canvas variables

    var playfield = document.querySelector(".playfield");
    var playfieldContext = playfield.getContext("2d");
    var playfieldWidth = playfield.width;
    var playfieldHeight = playfield.height;

    //Playfield objects constant values

    var CanvasObject = function CanvasObject(x, y, width, height, fill) {
        _classCallCheck(this, CanvasObject);

        x = this.x;
        y = this.y;
        width = this.width;
        height = this.height;
        fill = this.fill;
    };

    var ItemRepository = function (_CanvasObject) {
        _inherits(ItemRepository, _CanvasObject);

        function ItemRepository(x, y, width, height, fill) {
            _classCallCheck(this, ItemRepository);

            return _possibleConstructorReturn(this, (ItemRepository.__proto__ || Object.getPrototypeOf(ItemRepository)).call(this, x, y, width, height, fill));
        }

        return ItemRepository;
    }(CanvasObject);

    playfieldContext.fillStyle = "darkgrey";
    playfieldContext.fillRect(0, 0, 200, playfieldHeight);
    playfieldContext.fillStyle = "#00ff00";
    playfieldContext.fillRect(300, 0, 100, 200);
    var y = 0;

    function whatever() {
        playfieldContext.clearRect(300, 0, 1000, 600);
        playfieldContext.fillRect(300, y, 100, 200);

        if (y === playfieldHeight - 200) {
            y = playfieldHeight - 200;
            return;
        }
        y++;
    }

    setInterval(whatever, 50);
    //Reset button functionality
    resetButton.addEventListener("click", function (e) {
        e.preventDefault();
        resetConfirmScreen.style.display = "block";
    });

    //Time functionality
    //TODO: create function to show time in timer

    //Reset screen functionality
    resetConfirmButton.addEventListener("click", function (e) {
        e.preventDefault();
        resetConfirmScreen.style.display = "none";
        //TODO: Reset whole canvas to beggining. Must be an variable to hold initial state? Or just start function - this might be better
    });

    resetDeclineButton.addEventListener("click", function (e) {
        e.preventDefault();
        resetConfirmScreen.style.display = "none";
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);