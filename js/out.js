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
    console.log("DOM loaded. Script is working");
    //Variables section

    //Temporary dev variables
    var creationButton = document.querySelector(".temporaryGodlyCreationButton");

    //Temporary dev functions

    creationButton.addEventListener("click", function (e) {
        e.preventDefault();
    });

    //Buttons variables
    var resetButton = document.querySelector(".resetButton");
    var resetConfirmButton = document.querySelector(".resetConfirmButton");
    var resetDeclineButton = document.querySelector(".resetDeclineButton");
    var startLevelButton = document.querySelector(".startLevelButton");

    //Welcome screen variable

    var welcomeScreen = document.querySelector(".welcomeTextWrapper");

    //Reset screen variable

    var resetConfirmScreen = document.querySelector(".resetConfirmWrapper");

    //Timer variables
    var timer = document.querySelector(".timer");
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var start = false;

    //Levels data

    var levelsInfo = {
        level1: [{ name: "something", x: 400, y: 0, width: 100, height: 100, fill: "red", type: "static" }, { name: "somethingelse", x: 600, y: 0, width: 100, height: 100, fill: "green", type: "moving" }],
        level2: [],
        level3: [],
        level4: [],
        level5: [],
        level6: [],
        level7: [],
        level8: [],
        level9: [],
        level10: []
    };

    //Canvas variables

    var playfield = document.querySelector(".playfield");
    var playfieldContext = playfield.getContext("2d");
    var playfieldWidth = playfield.width;
    var playfieldHeight = playfield.height;

    //Canvas functions

    playfield.addEventListener("click", function (e) {});

    //Playfield objects classes

    var Playfield = function Playfield(level) {
        var _this = this;

        _classCallCheck(this, Playfield);

        this.createObjects = function (objects) {
            var inventory = new ItemInventory();
            inventory.createCanvasObject();
            _this.currentLevelObjects["inventory"] = inventory;
            objects["level" + _this.currentLevel].forEach(function (e) {
                if (e.type === "static") {
                    var _tempObject = new CanvasStaticObject(e.x, e.y, e.width, e.height, e.fill, e.name);
                    _tempObject.createCanvasObject();
                    _this.currentLevelObjects[e.name] = _tempObject;
                    return;
                }
                var tempObject = new CanvasMovingObject(e.x, e.y, e.width, e.height, e.fill, e.name);
                tempObject.createCanvasObject();
                _this.currentLevelObjects[e.name] = tempObject;
            });
        };

        this.getClickCoords = function (e) {
            var xCoord = Math.round((e.clientX - playfield.getBoundingClientRect().x - 2) * 10) / 10; //Formula for canvas click coords - works well
            var yCoord = Math.round((e.clientY - playfield.getBoundingClientRect().y - 2) * 10) / 10;
            console.log(xCoord, yCoord);
        };

        this.logCurrentLevelObjects = function () {
            console.log(_this.currentLevelObjects);
        };

        this.resetCurrentLevel = function (level) {
            playfieldContext.clearRect(0, 0, playfieldWidth, playfieldHeight);
        };

        this.currentLevel = level === undefined ? 1 : level;
        this.currentLevelObjects = {};
    };

    var CanvasObject = function CanvasObject(x, y, width, height, fill, name) {
        var _this2 = this;

        _classCallCheck(this, CanvasObject);

        this.createCanvasObject = function () {
            playfieldContext.fillStyle = _this2.fill;
            playfieldContext.fillRect(_this2.x, _this2.y, _this2.width, _this2.height);
        };

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.name = name;
    };

    var CanvasStaticObject = function (_CanvasObject) {
        _inherits(CanvasStaticObject, _CanvasObject);

        function CanvasStaticObject(x, y, width, height, fill) {
            _classCallCheck(this, CanvasStaticObject);

            return _possibleConstructorReturn(this, (CanvasStaticObject.__proto__ || Object.getPrototypeOf(CanvasStaticObject)).call(this, x, y, width, height, fill));
        }

        return CanvasStaticObject;
    }(CanvasObject);

    var CanvasMovingObject = function (_CanvasObject2) {
        _inherits(CanvasMovingObject, _CanvasObject2);

        function CanvasMovingObject(x, y, width, height, fill) {
            _classCallCheck(this, CanvasMovingObject);

            var _this4 = _possibleConstructorReturn(this, (CanvasMovingObject.__proto__ || Object.getPrototypeOf(CanvasMovingObject)).call(this, x, y, width, height, fill));

            _this4.gravity = function () {
                if (_this4.y === playfieldHeight - _this4.height) {
                    _this4.y = playfieldHeight - _this4.height;
                    return;
                }
                _this4.y = _this4.y + 1;
                playfieldContext.clearRect(_this4.x, _this4.y, _this4.width, _this4.height);
                playfieldContext.fillRect(_this4.x, _this4.y, _this4.width, _this4.height);
                window.requestAnimationFrame(_this4.gravity);
            };

            return _this4;
        }

        return CanvasMovingObject;
    }(CanvasObject);

    var ItemInventory = function (_CanvasStaticObject) {
        _inherits(ItemInventory, _CanvasStaticObject);

        function ItemInventory() {
            _classCallCheck(this, ItemInventory);

            var _this5 = _possibleConstructorReturn(this, (ItemInventory.__proto__ || Object.getPrototypeOf(ItemInventory)).call(this));

            _this5.addItem = function () {
                console.log("Maybe i will need it");
                //TODO: Think about this function.
            };

            _this5.removeItem = function (itemID) {
                var itemToRemove = _this5.objectsInInventory.filter(function (p) {
                    if (p === itemID) {
                        return p;
                    }
                });
                return itemToRemove;
            };

            _this5.x = 0;
            _this5.y = 0;
            _this5.width = 200;
            _this5.height = playfieldHeight;
            _this5.fill = "darkgrey";
            _this5.objectsInInventory = [];
            return _this5;
        }

        return ItemInventory;
    }(CanvasStaticObject);

    //Background functions    
    //Reset button functionality


    resetButton.addEventListener("click", function (e) {
        e.preventDefault();
        resetConfirmScreen.style.display = "block";
    });

    //Time functionality
    var timerInterval = setInterval(function () {
        if (!start) {
            return;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        var currentTime = (hours.toString().length < 2 ? "0" + hours : hours) + ":" + (minutes.toString().length < 2 ? "0" + minutes : minutes) + ":" + (seconds.toString().length < 2 ? "0" + seconds : seconds);
        timer.innerText = currentTime;
        seconds++;
    }, 1000);
    //Level display


    //Start button functionality
    startLevelButton.addEventListener("click", function (e) {
        e.preventDefault();
        welcomeScreen.style.opacity = 0;
        setTimeout(function () {
            welcomeScreen.classList.add("goodLuck");
            welcomeScreen.innerText = "Good Luck!";
            welcomeScreen.style.opacity = 1;
        }, 700);
        setTimeout(function () {
            welcomeScreen.style.opacity = 0;
            start = true;
            var currentLevel = new Playfield(1);
            currentLevel.createObjects(levelsInfo);
            currentLevel.logCurrentLevelObjects();
        }, 4000);
        setTimeout(function () {
            welcomeScreen.style.display = "none";
        }, 5000);
    });

    //Reset screen functionality
    resetConfirmButton.addEventListener("click", function (e) {
        e.preventDefault();
        resetConfirmScreen.style.display = "none";
        currentLevel.resetCurrentLevel(currentLevel.currentLevel);
        //TODO: Reset whole canvas to beggining. Must be an variable to hold initial state? Or just start function - this might be better
    });

    resetDeclineButton.addEventListener("click", function (e) {
        e.preventDefault();
        resetConfirmScreen.style.display = "none";
    });

    //Objects creation

});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);