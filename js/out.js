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
    var testplayfield = null;
    var testLevel = {
        level1: [{
            name: "staticObject1",
            position: { x: 450, y: 150 },
            data: { width: 100, height: 30, rotation: 0, color: "red", type: "static" }
        }, {
            name: "staticObject2",
            position: { x: 600, y: 300 },
            data: { width: 80, height: 30, rotation: 0, color: "green", type: "static" }
        }, {
            name: "someCircle",
            position: { x: 442, y: 15 },
            data: { r: 10, color: "blue", type: "kinetic" },
            motion: { speed: 0, direction: 0, vx: 0, vy: 0, isCollided: false }
        }],
        level2: [{
            name: "aBall",
            position: { x: 500, y: 200 },
            data: { r: 10, color: "green", type: "kinetic" },
            motion: { speed: 0.15, direction: 4, vx: 0, vy: 0, isCollided: false }
        }, {
            name: "staticObject2",
            position: { x: 600, y: 300 },
            data: { width: 80, height: 30, rotation: 0, color: "red", type: "static" }
        }]

        //Temporary dev functions

    };creationButton.addEventListener("click", function (e) {
        e.preventDefault();

        testplayfield = new Playfield(2);
        testplayfield.createObjects(testLevel);
        testplayfield.physicsEngineRun();
        //testplayfield.logCurrentLevelObjects();
        //testplayfield.physicsEngineRun();


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
    //Main object, creator of objects, physics engine

    var Playfield = function Playfield(level) {
        var _this = this;

        _classCallCheck(this, Playfield);

        this.createObjects = function (objects) {
            // let inventory = new ItemInventory;
            // inventory.createCanvasObject();
            // this.currentLevelObjects["inventory"] = inventory;
            objects["level" + _this.currentLevelNumber].forEach(function (object) {
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

        this.clearCanvas = function () {
            playfieldContext.clearRect(0, 0, playfieldWidth, playfieldHeight);
            Object.keys(_this.currentLevelObjects).forEach(function (object) {
                _this.currentLevelObjects[object].redrawCanvasObject();
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
            _this.clearCanvas();
            Object.keys(_this.currentLevelObjects).forEach(function (object) {
                if (_this.currentLevelObjects[object].type === "static") {
                    return;
                }
                _this.currentLevelObjects[object].movement();
                _this.currentLevelObjects[object].collisionCheck();
            });
            requestAnimationFrame(_this.physicsEngineRun);
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
            if (_this2.r !== undefined) {
                playfieldContext.beginPath();
                playfieldContext.arc(_this2.x, _this2.y, _this2.r, 0, 2 * Math.PI);
                playfieldContext.fillStyle = _this2.color;
                playfieldContext.fill();
                playfieldContext.closePath();
                return;
            }
            playfieldContext.fillStyle = _this2.color;
            playfieldContext.fillRect(_this2.x, _this2.y, _this2.width, _this2.height);
        };

        this.redrawCanvasObject = function () {
            _this2.createCanvasObject();
        };

        this.object = object;
        this.x = object.position.x;
        this.y = object.position.y;
        this.color = object.data.color;
        this.type = object.data.type;
    };

    var CanvasStaticObject = function (_CanvasObject) {
        _inherits(CanvasStaticObject, _CanvasObject);

        function CanvasStaticObject(object) {
            _classCallCheck(this, CanvasStaticObject);

            var _this3 = _possibleConstructorReturn(this, (CanvasStaticObject.__proto__ || Object.getPrototypeOf(CanvasStaticObject)).call(this, object));

            _this3.width = object.data.width;
            _this3.height = object.data.height;
            _this3.rotation = object.data.rotation;
            return _this3;
        }

        return CanvasStaticObject;
    }(CanvasObject);

    var CanvasMovingObject = function (_CanvasObject2) {
        _inherits(CanvasMovingObject, _CanvasObject2);

        function CanvasMovingObject(object) {
            _classCallCheck(this, CanvasMovingObject);

            var _this4 = _possibleConstructorReturn(this, (CanvasMovingObject.__proto__ || Object.getPrototypeOf(CanvasMovingObject)).call(this, object));

            _initialiseProps.call(_this4);

            _this4.name = object.name;
            _this4.r = object.data.r;
            _this4.speed = object.motion.speed;
            _this4.direction = object.motion.direction;
            _this4.vx = object.motion.vx;
            _this4.vy = object.motion.vy;
            _this4.isCollided = object.motion.isCollided;
            return _this4;
        }

        return CanvasMovingObject;
    }(CanvasObject);

    var _initialiseProps = function _initialiseProps() {
        var _this7 = this;

        this.speedChange = function (speed) {
            speed = speed + 0.005;
            return Math.round(speed * 1000) / 1000;
        };

        this.directionChange = function () {
            //this.direction = Math.floor(Math.random() * (360 - 1 + 1)) + 1
            _this7.direction = document.querySelector(".temporaryDirectionChange").value;
        };

        this.movement = function () {
            // console.log(this.direction);
            _this7.vx = Math.cos(_this7.direction);
            _this7.vy = Math.sin(_this7.direction);
            // this.x = Math.round((this.x + this.vx)*100)/100;
            // this.y = Math.round((this.y + this.vy)*100)/100;
            _this7.x = _this7.x + _this7.vx;
            _this7.y = _this7.y + _this7.vy + testplayfield.gravityValue;
            //this.directionChange()
        };

        this.collisionCheck = function () {
            Object.keys(testplayfield.currentLevelObjects).forEach(function (object) {
                var colidee = testplayfield.currentLevelObjects[object];
                if (colidee.name === "inventory" || colidee.name === _this7.name) {
                    return;
                }
                //FIXME: Check them - it sticks to left and right wall... probably because degrees
                // Wall collision check: 
                // Left wall
                if (_this7.x - _this7.r <= 0) {
                    // console.log("lw");
                    _this7.x = 0 + _this7.r;
                    _this7.bouncer(90);
                }

                // Right wall
                if (_this7.x + _this7.r >= 1000) {
                    // console.log("rw");
                    _this7.x = 1000 - _this7.r;
                    _this7.bouncer(90);
                }

                // Ceiling
                if (_this7.y - _this7.r <= 0) {
                    // console.log("cl");
                    _this7.y = 0 + _this7.r;
                    _this7.bouncer(0);
                }

                // Floor
                if (_this7.y + _this7.r >= 400) {
                    // console.log("fl");
                    _this7.y = 400 - _this7.r;
                    _this7.bouncer(0);
                }

                var dx = Math.abs(_this7.x - (colidee.x + colidee.width / 2));
                var dy = Math.abs(_this7.y - (colidee.y + colidee.height / 2));

                //Object collision check
                //is collision on X-axis?
                if (dx > _this7.r + colidee.width / 2) {
                    _this7.isCollided = false;
                    return;
                }

                //is collision on Y-axis?
                if (dy > _this7.r + colidee.height / 2) {
                    _this7.isCollided = false;
                    return;
                }

                // collision on X-axis
                if (dx <= colidee.width) {
                    _this7.isCollided = true;
                    _this7.bouncer(colidee.rotation);
                    return;
                }

                // collision on Y-axis
                if (dy <= colidee.data.height) {
                    _this7.isCollided = true;
                    _this7.bouncer(colidee.rotation);
                    return;
                }

                dx = dx - colidee.width;
                dy = dy - colidee.height;
                return dx * dx + dy * dy <= _this7.r * _this7.r;
            });
        };

        this.bouncer = function (rotation) {
            _this7.vx = _this7.speed * Math.sin(_this7.direction - rotation) * Math.cos(rotation + Math.PI / 2);
            _this7.vy = _this7.speed * Math.sin(_this7.direction - rotation) * Math.sin(rotation + Math.PI / 2);
            _this7.direction = //TODO: Here count the new direction;
            _this7.x += _this7.vx;
            _this7.y += _this7.vy;
        };
    };

    var CanvasMovableObject = function (_CanvasStaticObject) {
        _inherits(CanvasMovableObject, _CanvasStaticObject);

        function CanvasMovableObject(object) {
            _classCallCheck(this, CanvasMovableObject);

            return _possibleConstructorReturn(this, (CanvasMovableObject.__proto__ || Object.getPrototypeOf(CanvasMovableObject)).call(this, object));
        }

        return CanvasMovableObject;
    }(CanvasStaticObject);

    var ItemInventory = function (_CanvasStaticObject2) {
        _inherits(ItemInventory, _CanvasStaticObject2);

        function ItemInventory() {
            _classCallCheck(this, ItemInventory);

            var _this6 = _possibleConstructorReturn(this, (ItemInventory.__proto__ || Object.getPrototypeOf(ItemInventory)).call(this));

            _this6.addItem = function () {
                console.log("Maybe i will need it");
                //TODO: Think about this function.
            };

            _this6.removeItem = function (itemID) {
                var itemToRemove = _this6.objectsInInventory.filter(function (p) {
                    if (p === itemID) {
                        return p;
                    }
                });
                return itemToRemove;
            };

            _this6.x = 0;
            _this6.y = 0;
            //this.r = null;
            _this6.width = 200;
            _this6.height = playfieldHeight;
            _this6.fill = "darkgrey";
            _this6.objectsInInventory = [];
            _this6.type = "static";
            return _this6;
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