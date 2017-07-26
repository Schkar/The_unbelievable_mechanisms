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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener('DOMContentLoaded', function () {
    var _motion;

    console.log("DOM loaded. Script is working");
    //Variables section

    //Temporary dev variables
    var creationButton = document.querySelector(".temporaryGodlyCreationButton");
    var testplayfield = null;
    var testLevel = {
        level1: [{
            name: "movingObject",
            position: { x: 450, y: 150 },
            data: { width: 100, height: 30, rotation: 0, color: "red", type: "static" },
            motion: (_motion = { value: 0, direction: 0, Vx: 0 }, _defineProperty(_motion, "Vx", 0), _defineProperty(_motion, "isCollided", false), _motion)
        }, {
            name: "staticObject",
            position: { x: 600, y: 300 },
            data: { width: 80, height: 30, rotation: 0, color: "green", type: "static" },
            motion: { value: 0, direction: 0, Vx: 0, Vy: 0, isCollided: false }
        }, {
            name: "someCircle",
            position: { x: 442, y: 15 },
            data: { r: 10, color: "blue", type: "kinetic" },
            motion: { value: 0, direction: 0, Vx: 0, Vy: 0, isCollided: false }
        }]

        //Temporary dev functions

    };creationButton.addEventListener("click", function (e) {
        e.preventDefault();
        testplayfield = new Playfield();
        testplayfield.createObjects(testLevel);
        //testplayfield.logCurrentLevelObjects();
        testplayfield.physicsEngineRun();

        //currentLevel.physicsEngineRun()
        //requestAnimationFrame(currentLevel.physicsEngineRun)
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

    //RqAnimFrame ID

    var engineID = null;

    //Levels data

    var levelsInfo = {
        level1: [{}],
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

    var currentLevel = null;

    //Canvas variables

    var playfield = document.querySelector(".playfield");
    var playfieldContext = playfield.getContext("2d");
    var playfieldWidth = playfield.width;
    var playfieldHeight = playfield.height;

    //Canvas functions

    playfield.addEventListener("click", function (e) {});

    //Playfield objects classes
    //Demiurge - main object, creator of objects, physics engine, collision detector

    var Playfield = function Playfield(level) {
        var _this = this;

        _classCallCheck(this, Playfield);

        this.createObjects = function (objects) {
            //let inventory = new ItemInventory;
            //inventory.createCanvasObject();
            //this.currentLevelObjects["inventory"] = inventory;
            objects["level" + _this.currentLevelNumber].forEach(function (object) {
                console.log(object);
                if (object.data.type === "static") {
                    var _tempObject = new CanvasStaticObject(object);
                    _tempObject.createCanvasObject();
                    _this.currentLevelObjects[object.name] = _tempObject;
                    return;
                }
                var tempObject = new CanvasMovingObject(object);
                tempObject.createCanvasObject();
                _this.currentLevelObjects[object.name] = tempObject;
            });
        };

        this.resetCurrentLevel = function (level) {
            playfieldContext.clearRect(0, 0, playfieldWidth, playfieldHeight);
            _this.currentLevelObjects = {};
            _this.createObjects(levelsInfo);
            console.log("resetCurrentLevel");
        };

        this.getClickCoords = function (click) {
            var xCoord = Math.round((click.clientX - playfield.getBoundingClientRect().x - 2) * 10) / 10; //Formula for canvas click coords - works well
            var yCoord = Math.round((click.clientY - playfield.getBoundingClientRect().y - 2) * 10) / 10;
            console.log(xCoord, yCoord);
        };

        this.logCurrentLevelObjects = function () {
            console.log(_this.currentLevelObjects);
        };

        this.physicsEngineRun = function () {
            _this.collisionCheck();
            _this.gravity();
            engineID = requestAnimationFrame(_this.physicsEngineRun);
        };

        this.collisionCheck = function () {
            Object.keys(_this.currentLevelObjects).forEach(function (object1) {
                var colider = _this.currentLevelObjects[object1];
                colider = colider.currentObject;
                if (colider.type === "static" || object1 === "inventory") {
                    return;
                }
                Object.keys(_this.currentLevelObjects).forEach(function (object2) {
                    if (object2 === "inventory") {
                        return;
                    }
                    var colidee = _this.currentLevelObjects[object2];
                    colidee = colidee.currentObject;
                    var dx = Math.abs(colider.position.x - (colidee.position.x + colidee.data.width / 2));
                    var dy = Math.abs(colider.position.y - (colidee.position.y + colidee.data.height / 2));
                    //console.log(dx);
                    //console.log(dy);

                    if (dx > colider.data.r + colidee.data.width / 2) {
                        return false;
                    }

                    if (dy > colider.data.r + colidee.data.height / 2) {
                        return false;
                    }

                    if (dx <= colidee.data.width) {
                        console.log("collision on X-axis");
                        colider.motion.isCollided = true;
                        return true;
                    }

                    if (dy <= colidee.data.height) {
                        console.log("collision on Y-axis");
                        colider.motion.isCollided = true;
                        return true;
                    }

                    dx = dx - colidee.data.width;
                    dy = dy - colidee.data.height;
                    return dx * dx + dy * dy <= colider.data.r * colider.data.r;
                });
            });
            //TODO: Collisions checker
            //console.log("collisionCheck");
        };

        this.gravity = function () {

            //TODO: Think - is this one is better, or a check in every single object (by calling a method?) - this needs only one raf, so it seems that is better. Either this, or calling a method, no many rafs.

            Object.keys(_this.currentLevelObjects).forEach(function (object) {
                var obj = _this.currentLevelObjects[object];
                obj = obj.currentObject;
                var thisobj = _this.currentLevelObjects[object];
                console.log(obj);
                if (obj.data.type === "static" || object === "inventory") {
                    return;
                }

                if (obj.position.y + obj.data.height === playfieldHeight || obj.position.y + obj.data.r === playfieldHeight || obj.motion.isCollided) {
                    obj.position.y = obj.position.y;
                    return;
                }

                if (obj.motion.value < _this.gravityValue) {
                    obj.motion.value = thisobj.velocityChange(obj.motion.value);
                }
                obj.position.y = obj.motion.value === _this.gravityValue ? Math.round(obj.position.y + obj.motion.value) : obj.position.y + obj.motion.value;

                if (obj.data.r === null) {
                    playfieldContext.clearRect(obj.position.x, obj.position.y - 1, obj.data.width, obj.data.height);
                    playfieldContext.fillStyle = obj.data.color;
                    playfieldContext.fillRect(obj.position.x, obj.position.y, obj.data.width, obj.data.height);
                    return;
                }
                playfieldContext.arc(obj.position.x, obj.position.y - 1.5, obj.data.r + 1.5, 0, Math.PI * 2, true);
                playfieldContext.fillStyle = "white";
                playfieldContext.fill();
                playfieldContext.beginPath();
                playfieldContext.arc(obj.position.x, obj.position.y, obj.data.r, 0, 2 * Math.PI);
                playfieldContext.fillStyle = obj.data.color;
                playfieldContext.fill();
                playfieldContext.closePath();
            });
        };

        this.currentLevelNumber = level || 1;
        this.currentLevelObjects = {};
        this.gravityValue = 0.5; //
    };
    //Arch-class - object prototype


    var CanvasObject = function CanvasObject(object) {
        var _this2 = this;

        _classCallCheck(this, CanvasObject);

        this.createCanvasObject = function () {
            //console.log(this.currentObject);
            if (_this2.currentObject.data.r !== undefined) {
                playfieldContext.beginPath();
                playfieldContext.arc(_this2.currentObject.position.x, _this2.currentObject.position.y, _this2.currentObject.data.r, 0, 2 * Math.PI);
                playfieldContext.fillStyle = _this2.currentObject.data.color;
                playfieldContext.fill();
                playfieldContext.closePath();
                return;
            }
            playfieldContext.fillStyle = _this2.currentObject.data.color;
            playfieldContext.fillRect(_this2.currentObject.position.x, _this2.currentObject.position.y, _this2.currentObject.data.width, _this2.currentObject.data.height);
        };

        this.currentObject = object;
    };

    var CanvasStaticObject = function (_CanvasObject) {
        _inherits(CanvasStaticObject, _CanvasObject);

        function CanvasStaticObject(object) {
            _classCallCheck(this, CanvasStaticObject);

            return _possibleConstructorReturn(this, (CanvasStaticObject.__proto__ || Object.getPrototypeOf(CanvasStaticObject)).call(this, object));
        }

        return CanvasStaticObject;
    }(CanvasObject);

    var CanvasMovingObject = function (_CanvasObject2) {
        _inherits(CanvasMovingObject, _CanvasObject2);

        function CanvasMovingObject(object) {
            _classCallCheck(this, CanvasMovingObject);

            var _this4 = _possibleConstructorReturn(this, (CanvasMovingObject.__proto__ || Object.getPrototypeOf(CanvasMovingObject)).call(this, object));

            _this4.velocityChange = function (velocity) {
                velocity = velocity + 0.005;
                return Math.round(velocity * 1000) / 1000;
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
            //this.r = null;
            _this5.width = 200;
            _this5.height = playfieldHeight;
            _this5.fill = "darkgrey";
            _this5.objectsInInventory = [];
            _this5.type = "static";
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
            currentLevel = new Playfield(1);
            currentLevel.createObjects(levelsInfo);
        }, 4000);
        setTimeout(function () {
            welcomeScreen.style.display = "none";
            currentLevel.physicsEngineRun();
        }, 5000);
    });

    //Reset screen functionality
    resetConfirmButton.addEventListener("click", function (e) {
        e.preventDefault();
        resetConfirmScreen.style.display = "none";
        currentLevel.resetCurrentLevel(currentLevel.currentLevelNumber);
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