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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener('DOMContentLoaded', function () {

    //TODO: 
    //Left-right-object collision
    //Gravity!
    //rotated collisions
    //Inventory
    //More objects

    console.log("DOM loaded. Script is working");
    // //No mobile function
    // let checkMobile = false;
    // window.mobilecheck = function() {
    //     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) checkMobile = true;})(navigator.userAgent||navigator.vendor||window.opera);
    // return checkMobile;
    // };
    // if (checkMobile) {
    //     document.querySelector(".noMobile").style.display = "block";
    //     document.querySelector(".welcomeTextWrapper").style.display = "none";
    //     document.querySelector(".startLevelButton").disabled = true;
    //     document.querySelector(".resetButton").disabled = -----true;
    // }

    //Variables section

    //Temporary dev variables
    var creationButton = document.querySelector(".temporaryGodlyCreationButton");
    // let currentLevel = null;

    //Temporary dev functions

    creationButton.addEventListener("click", function (e) {
        e.preventDefault();

        currentLevel = new Playfield();
        currentLevel.createObjects(levelsInfo);
        currentLevel.physicsEngineRun();
        //currentLevel.logCurrentLevelObjects()
    });

    //Buttons variables
    var resetButton = document.querySelector(".resetButton");
    var resetConfirmButton = document.querySelector(".resetConfirmButton");
    var resetDeclineButton = document.querySelector(".resetDeclineButton");
    var startLevelButton = document.querySelector(".startLevelButton");
    var nextLevelButton = document.querySelector(".nextLevelButton");

    //Welcome screen variable

    var welcomeScreen = document.querySelector(".welcomeTextWrapper");

    //Reset screen variable

    var resetConfirmScreen = document.querySelector(".resetConfirmWrapper");

    //Timer variables

    var timer = document.querySelector(".timer");
    var winTimer = document.querySelector(".winTimer");
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var start = false;

    //AnimFrame IDs

    var engineID = null;

    //Levels data
    var inventory = {
        name: "inventory",
        position: { x: 0, y: 0 },
        data: { width: 200, height: 400, color: "darkgrey", type: "static", isMovable: false }
    };
    var levelsInfo = {
        level1: [{
            name: "aBall",
            position: { x: 700, y: 50 },
            data: { mass: 0.6 /*in kg*/, cr: 0.7, cd: 0.47, r: 15, type: "kinetic", id: "basketball" },
            motion: { f: 0.2, fx: 0, fy: 0, vx: 0, vy: 0, direction: 0, isCollided: false }
        }, {
            name: "staticObject1",
            position: { x: 500, y: 200 },
            data: { mass: 5, width: 200, height: 30, rotation: 10, type: "static", isMovable: true, isDragged: false, id: "barrier" }
        }],
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

    //Game variables

    //Canvas definitions
    var playfield = document.querySelector(".playfield");
    var playfieldContext = playfield.getContext("2d");
    var playfieldWidth = playfield.width;
    var playfieldHeight = playfield.height;

    //Click recognition variables
    var xClick = 0;
    var yClick = 0;

    //Another click variable for removing drag status
    var prevxClick = 0;
    var prevyClick = 0;

    //Move coords variables for dragging function
    var xMove = 0;
    var yMove = 0;

    //Time variables for physics functions
    var frameRate = 1 / 40;

    //Physics variables
    var gravityValue = 9.81; // m/s^2
    var ppm = 100; //Pixels-per-meter - width: 800px - 1px = 1cm 800px = 800cm = 8m
    var wallMass = 5.9722 * Math.pow(10, 24); //mass of Earth
    var rho = 1.22; // density of air kg/m3

    //Misc variables
    var objectBeingDragged = "";
    var levelWon = false;
    var levelNumber = 10;
    var currentLevel = null;

    //Canvas functions

    playfield.addEventListener("mousedown", function (e) {
        xClick = Math.round((e.clientX - playfield.getBoundingClientRect().x - 2) * 10) / 10; //Formula for canvas click coords - works well
        yClick = Math.round((e.clientY - playfield.getBoundingClientRect().y - 2) * 10) / 10;
        currentLevel.moveObject(e);
    });

    playfield.addEventListener("mousemove", function (e) {
        xMove = Math.round((e.clientX - playfield.getBoundingClientRect().x - 2) * 10) / 10;
        yMove = Math.round((e.clientY - playfield.getBoundingClientRect().y - 2) * 10) / 10;
    });

    //Playfield objects classes
    //Main object, creator of objects, physics engine

    var Playfield = function Playfield(level) {
        var _this = this;

        _classCallCheck(this, Playfield);

        this.createObjects = function (objects) {
            var currentInventory = new ItemInventory(inventory);
            currentInventory.createCanvasObject();
            _this.currentLevelObjects["inventory"] = currentInventory;

            objects["level" + _this.currentLevelNumber].forEach(function (object) {
                if (object.data.type === "static") {
                    var _tempObject = new CanvasStaticObject(object);
                    _tempObject.createCanvasObject();
                    _this.currentLevelObjects[object.name] = _tempObject;
                    return;
                }

                var tempObject = new CanvasMovingObject(object);
                tempObject.createCanvasObject();
                tempObject.countInitialVectors();
                //debugger
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

        this.moveObject = function () {
            Object.keys(_this.currentLevelObjects).forEach(function (object) {
                if (!_this.currentLevelObjects[object].isMovable) {
                    return;
                }
                _this.currentLevelObjects[object].moveMe();
                //this.currentLevelObjects[object].rotateMe();
            });
        };

        this.logCurrentLevelObjects = function () {
            console.log(_this.currentLevelObjects);
        };

        this.physicsEngineRun = function () {
            if (levelWon) {
                return;
            }
            _this.clearCanvas();
            Object.keys(_this.currentLevelObjects).forEach(function (object) {
                if (_this.currentLevelObjects[object].type === "static") {
                    return;
                }
                _this.currentLevelObjects[object].movement();
                _this.clearCanvas();
                _this.currentLevelObjects[object].wallCollisionCheck();
                _this.clearCanvas();
                _this.currentLevelObjects[object].collisionCheck();
                _this.clearCanvas();
                _this.currentLevelObjects[object].checkIfWin();
            });
            _this.moveObject();
            requestAnimationFrame(_this.physicsEngineRun);
        };

        this.currentLevelNumber = level || 1;
        this.currentLevelObjects = {};
    };

    //Object prototype


    var CanvasObject = function () {
        function CanvasObject(object) {
            var _this2 = this;

            _classCallCheck(this, CanvasObject);

            this.createCanvasObject = function () {

                var image = document.getElementById(_this2.id);
                if (_this2.r !== undefined) {
                    //TODO: InnerRotation:
                    // playfieldContext.save();
                    // playfieldContext.translate(this.x,this.y);
                    // playfieldContext.beginPath()
                    // playfieldContext.rotate(this.vx*Math.PI/180); 
                    playfieldContext.drawImage(image, _this2.x - _this2.r, _this2.y - _this2.r, 2 * _this2.r, 2 * _this2.r);
                    // playfieldContext.closePath()
                    // playfieldContext.restore();
                    return;
                }
                if (_this2.rotation !== 0) {
                    playfieldContext.save();
                    playfieldContext.translate(_this2.x + _this2.width / 2, _this2.y + _this2.height / 2);
                    playfieldContext.beginPath();
                    playfieldContext.rotate(_this2.rotationInRadians);
                    if (_this2.isDragged) {
                        playfieldContext.strokeStyle = "red";
                        playfieldContext.lineWidth = 4;
                        playfieldContext.strokeRect(-_this2.width / 2, -_this2.height / 2, _this2.width, _this2.height);
                    }
                    playfieldContext.drawImage(image, -_this2.width / 2, -_this2.height / 2, _this2.width, _this2.height);
                    playfieldContext.closePath();
                    playfieldContext.restore();
                    return;
                }
                if (_this2.isDragged) {
                    playfieldContext.beginPath();
                    playfieldContext.strokeStyle = "red";
                    playfieldContext.lineWidth = 4;
                    playfieldContext.strokeRect(_this2.x, _this2.y, _this2.width, _this2.height);
                    playfieldContext.closePath();
                }
                // if (this.isBeingRotated) {
                //     playfieldContext.strokeStyle="blue";
                //     playfieldContext.lineWidth = 4;
                //     playfieldContext.strokeRect(this.x,this.y,this.width,this.height); 
                // }
                playfieldContext.drawImage(image, _this2.x, _this2.y, _this2.width, _this2.height);
            };

            this.redrawCanvasObject = function () {
                _this2.createCanvasObject();
            };

            this.object = object;
            this.x = object.position.x;
            this.y = object.position.y;
            this.type = object.data.type;
            this.name = object.name;
            this.id = object.data.id;
            this.mass = object.data.mass;
        }

        _createClass(CanvasObject, [{
            key: "rotationInRadians",
            get: function get() {
                return this.rotation * Math.PI / 180;
            }
        }]);

        return CanvasObject;
    }();

    //Extended Objects


    var CanvasStaticObject = function (_CanvasObject) {
        _inherits(CanvasStaticObject, _CanvasObject);

        function CanvasStaticObject(object) {
            _classCallCheck(this, CanvasStaticObject);

            var _this3 = _possibleConstructorReturn(this, (CanvasStaticObject.__proto__ || Object.getPrototypeOf(CanvasStaticObject)).call(this, object));

            _this3.moveMe = function () {
                if (objectBeingDragged !== "" && objectBeingDragged !== _this3.name) {
                    return;
                }
                if (_this3.isDragged && prevxClick === xClick && prevyClick === yClick) {
                    _this3.dragger();
                    return;
                } else if (prevxClick !== 0 && prevxClick !== 0) {
                    prevxClick = 0;
                    prevyClick = 0;
                    xClick = 0;
                    yClick = 0;
                    _this3.isDragged = false;
                    objectBeingDragged = "";
                    //this.isBeingRotated = true;
                    return;
                }

                if (_this3.rotation !== 0 || _this3.rotation % 360 !== 0 || _this3.rotation % 90 !== 0) {
                    //This works. Thank you unknown guy on Stack
                    var originX = _this3.x + _this3.width / 2,
                        originY = _this3.y + _this3.height / 2,
                        r = _this3.rotationInRadians;
                    var dx = xClick - originX,
                        dy = yClick - originY;
                    var h1 = Math.sqrt(dx * dx + dy * dy);
                    var currA = Math.atan2(dy, dx);
                    var newA = currA - r;
                    var x2 = Math.cos(newA) * h1;
                    var y2 = Math.sin(newA) * h1;
                    if (x2 > -0.5 * _this3.width && x2 < 0.5 * _this3.width && y2 > -0.5 * _this3.height && y2 < 0.5 * _this3.height) {
                        _this3.isDragged = true;
                        prevxClick = xClick;
                        prevyClick = yClick;
                        objectBeingDragged = _this3.name;
                        _this3.dragger();
                    }
                } else if (_this3.x <= xClick && _this3.x + _this3.width >= xClick && _this3.y <= yClick && _this3.y + _this3.height >= yClick) {
                    _this3.isDragged = true;
                    prevxClick = xClick;
                    prevyClick = yClick;
                    objectBeingDragged = _this3.name;
                    _this3.dragger();
                }
            };

            _this3.dragger = function () {
                _this3.x = xMove - _this3.width / 2;
                _this3.y = yMove - _this3.height / 2;
                _this3.redrawCanvasObject();
            };

            _this3.rotateMe = function () {
                //         if (this.isDragged) {
                //             return;
                //         }
                //         if (!this.isBeingRotated) {
                //             return;
                //         }
                //         if ((this.x <= xClick && this.x + this.width >= xClick)&&(this.y <= yClick && this.y + this.height >= yClick)&&(xClick !== 0 && yClick !== 0)) {
                //             this.isBeingRotated = false;
                //             return;
                //         }
                //         // console.log(yMove,prevyMove);
                //         // if (yMove - prevyMove > 0) {
                //         //     this.rotation +=45;
                //         // }
                //         // else if (yMove - prevyMove < 0) {
                //         //     this.rotation -=45;
                //         // }
                //         this.rotation = xMove/360;
                //         console.log(this.rotation);
                //         if(this.rotation === 360) {
                //             this.rotation = 0;
                //         }
                //         if(this.rotation <= 0) {
                //             this.rotation = 315;
                //         }
                //         // playfieldContext.save();
                //         playfieldContext.translate(this.x + this.width/2,this.y + this.height/2);
                //         playfieldContext.rotate(this.rotationInRadians);
                //         // console.log(this.x,this.y);
                //         // playfieldContext.fillStyle=this.color;
                //         // playfieldContext.fillRect(this.x,this.y,this.width,this.height);
                //         playfieldContext.translate(-(this.x + this.width/2),-(this.y + this.height/2));
                //         this.redrawCanvasObject();
                //         //playfieldContext.restore();
                //         prevyMove = yMove;
            };

            _this3.innerRotation = function () {//Only for fan objects!

            };

            _this3.width = object.data.width;
            _this3.height = object.data.height;
            _this3.rotation = object.data.rotation;
            _this3.isMovable = object.data.isMovable;
            _this3.isDragged = object.data.isDragged;
            // this.isBeingRotated = object.data.isBeingRotated
            return _this3;
        }

        //TODO: this.isBeingRotated must be put somewhere. Don't know where. This function is commented - will maybe work later
        //Also, think about diffrent rotation method...


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
            _this4.f = object.motion.f;
            _this4.fx = object.motion.fx;
            _this4.fy = object.motion.fy;
            _this4.direction = object.motion.direction;
            _this4.vx = object.motion.vx;
            _this4.vy = object.motion.vy;
            _this4.isCollided = object.motion.isCollided;
            _this4.cd = object.data.cd;
            _this4.cr = object.data.cr;
            return _this4;
        }

        return CanvasMovingObject;
    }(CanvasObject);

    //Inventory object


    var _initialiseProps = function _initialiseProps() {
        var _this6 = this;

        this.checkIfWin = function () {
            //console.log(engineID);
            return;
            var temp = currentLevel.currentLevelObjects["goal"];
            var goalX = currentLevel.currentLevelObjects["goal"].x + currentLevel.currentLevelObjects["goal"].width / 3;
            var goalY = currentLevel.currentLevelObjects["goal"].y + currentLevel.currentLevelObjects["goal"].height / 3;
            if (_this6.x >= goalX && _this6.y >= goalY) {
                levelWon = true;
                window.cancelAnimationFrame(engineID);
                document.querySelector(".winScreen").style.display = "block";
                playfieldContext.clearRect(0, 0, playfieldWidth, playfieldHeight);
            }
        };

        this.countInitialVectors = function () {
            _this6.vx = Math.cos(_this6.direction * (Math.PI / 180)) * _this6.f;
            _this6.vy = Math.sin(_this6.direction * (Math.PI / 180)) * _this6.f;
        };

        this.movement = function () {

            var a = Math.PI * _this6.r * _this6.r / 10000; //the last number (10000) changes units, otherwise this number is huge;

            _this6.fx = -0.5 * _this6.cd * a * rho * _this6.vx * _this6.vx * _this6.vx / Math.abs(_this6.vx);
            _this6.fy = -0.5 * _this6.cd * a * rho * _this6.vy * _this6.vy * _this6.vy / Math.abs(_this6.vy);

            _this6.fx = isNaN(_this6.fx) ? 0 : _this6.fx;
            _this6.fy = isNaN(_this6.fy) ? 0 : _this6.fy;

            var ax = _this6.fx / _this6.mass;
            var ay = gravityValue + _this6.fy / _this6.mass;

            _this6.vx += ax * frameRate;
            _this6.vy += ay * frameRate;

            var check = Math.abs(_this6.vx) > Math.abs(_this6.vy) ? Math.abs(_this6.vx) : Math.abs(_this6.vy);

            for (var i = 0; i < check; i += check / 10) {
                _this6.x += _this6.vx / 10 * frameRate * ppm;
                _this6.y += _this6.vy / 10 * frameRate * ppm;

                if (_this6.collisionCheck()) {
                    return;
                }
            }
        };

        this.wallCollisionCheck = function () {
            // Left wall
            if (_this6.x - _this6.r <= 200) {
                _this6.bouncer(0, 0, 1);
            }

            // Right wall
            if (_this6.x + _this6.r >= 1000) {
                _this6.bouncer(0, 2, 1);
            }

            // Ceiling
            if (_this6.y - _this6.r <= 0) {
                _this6.bouncer(0, 1, 2);
            }

            // Floor
            if (_this6.y + _this6.r >= 400) {
                _this6.bouncer(0, 1, 0);
            }
        };

        this.collisionCheck = function () {
            //debugger
            Object.keys(currentLevel.currentLevelObjects).forEach(function (object) {
                var colidee = currentLevel.currentLevelObjects[object];
                if (colidee.name === "inventory" || colidee.name === _this6.name || colidee.name === "goal") {
                    return;
                }

                var rectCenterX = colidee.x + colidee.width / 2;
                var rectCenterY = colidee.y + colidee.height / 2;

                var rectX = colidee.x;
                var rectY = colidee.y;

                var rectReferenceX = rectX;
                var rectReferenceY = rectY;

                // Rotate circle's center point back
                var unrotatedCircleX = Math.cos(-colidee.rotationInRadians) * (_this6.x - rectCenterX) - Math.sin(-colidee.rotationInRadians) * (_this6.y - rectCenterY) + rectCenterX;
                var unrotatedCircleY = Math.sin(-colidee.rotationInRadians) * (_this6.x - rectCenterX) + Math.cos(-colidee.rotationInRadians) * (_this6.y - rectCenterY) + rectCenterY;

                // Closest point in the rectangle to the center of circle rotated backwards(unrotated)
                var closestX = void 0,
                    closestY = void 0;
                var whereX = void 0,
                    whereY = void 0;

                // Find the unrotated closest x point from center of unrotated circle
                if (unrotatedCircleX < rectReferenceX) {
                    closestX = rectReferenceX;
                    whereX = 0;
                } else if (unrotatedCircleX > rectReferenceX + colidee.width) {
                    closestX = rectReferenceX + colidee.width;
                    whereX = 2;
                } else {
                    closestX = unrotatedCircleX;
                    whereX = 1;
                }

                // Find the unrotated closest y point from center of unrotated circle
                if (unrotatedCircleY < rectReferenceY) {
                    closestY = rectReferenceY;
                    whereY = 0;
                } else if (unrotatedCircleY > rectReferenceY + colidee.height) {
                    closestY = rectReferenceY + colidee.height;
                    whereY = 2;
                } else {
                    closestY = unrotatedCircleY;
                    whereY = 1;
                }

                // Determine collision
                var dX = Math.abs(unrotatedCircleX - closestX);
                var dY = Math.abs(unrotatedCircleY - closestY);
                var distance = Math.sqrt(dX * dX + dY * dY);

                if (distance < _this6.r) {
                    _this6.bouncer(colidee.rotation, whereX, whereY);
                    return true;
                }
            });
        };

        this.bouncer = function (rotation, whereX, whereY) {
            var rotCos = Math.cos(rotation * Math.PI / 180);
            var rotSin = Math.sin(rotation * Math.PI / 180);

            var tempVX = _this6.vx * rotCos + _this6.vy * rotSin;
            var tempVY = _this6.vy * rotCos - _this6.vx * rotSin;

            var bounceResolver = [//X
            [//Y
            [-1, -1], //00
            [-1, 1], //01
            [-1, -1] //02
            ], [[1, -1], //10
            [-1, -1], //11
            [1, -1] //12
            ], [[-1, -1], //20
            [-1, 1], //21
            [-1, -1] //22
            ]];

            if (whereX === 1 && whereY === 0) {
                _this6.y -= _this6.r;
            }

            tempVX = tempVX * _this6.cr * bounceResolver[whereX][whereY][0];
            tempVY = tempVY * _this6.cr * bounceResolver[whereX][whereY][1];

            _this6.vx = tempVX * rotCos - tempVY * rotSin;
            _this6.vy = tempVY * rotCos + tempVX * rotSin;

            _this6.x += _this6.vx * frameRate * ppm;
            _this6.y += _this6.vy * frameRate * ppm;
        };
    };

    var ItemInventory = function (_CanvasStaticObject) {
        _inherits(ItemInventory, _CanvasStaticObject);

        function ItemInventory(object) {
            _classCallCheck(this, ItemInventory);

            var _this5 = _possibleConstructorReturn(this, (ItemInventory.__proto__ || Object.getPrototypeOf(ItemInventory)).call(this, object));

            _this5.createCanvasObject = function () {
                playfieldContext.fillStyle = _this5.color;
                playfieldContext.fillRect(_this5.x, _this5.y, _this5.width, _this5.height);
            };

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

            _this5.x = object.position.x;
            _this5.y = object.position.y;
            _this5.width = object.data.width;
            _this5.height = object.data.height;
            _this5.color = "darkgrey";
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

    //Next Level Button functionality
    nextLevelButton.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".winScreen").style.opacity = 0;
        levelNumber++;
        if (levelNumber > 10) {
            document.querySelector(".noMoreLevels").style.display = "block";
            document.querySelector(".noMoreLevels").style.opacity = 1;
            return;
        }
        setTimeout(function () {
            document.querySelector(".winScreen").style.display = "none";
            currentLevel = new Playfield(levelNumber);
            currentLevel.createObjects(levelsInfo);
        }, 1000);
        setTimeout(function () {
            document.querySelector(".level").innerText = "Level: " + levelNumber;
            levelWon = false;
            start = true;
            seconds = 0;
            minutes = 0;
            hours = 0;
            currentLevel.physicsEngineRun();
            engineID = requestAnimationFrame(currentLevel.physicsEngineRun);
        }, 1500);
    });

    //Time functionality
    var timerInterval = setInterval(function () {
        if (!start || levelWon) {
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
        winTimer.innerText = currentTime;
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
            currentLevel = new Playfield(levelNumber);
            currentLevel.createObjects(levelsInfo);
        }, 4000);
        setTimeout(function () {
            welcomeScreen.style.display = "none";
            currentLevel.physicsEngineRun();
            engineID = requestAnimationFrame(currentLevel.physicsEngineRun);
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