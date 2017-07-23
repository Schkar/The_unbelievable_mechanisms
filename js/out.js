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
        level1: [{ name: "movingObject", x: 450, y: 150, r: null, width: 100, height: 30, fill: "red", type: "static", velocity: 0, direction: 0, isCollided: false, rotation: 0 }, { name: "staticObject", x: 600, y: 300, r: null, width: 80, height: 30, fill: "green", type: "static", velocity: 0, direction: 0, isCollided: false, rotation: 0 }, { name: "someCircle", x: 442, y: 15, r: 10, fill: "blue", type: "kinetic", velocity: 0, direction: 0, isCollided: false, rotation: 0 }]

        //Temporary dev functions

    };creationButton.addEventListener("click", function (e) {
        e.preventDefault();
        testplayfield = new Playfield();
        testplayfield.createObjects(testLevel);
        testplayfield.logCurrentLevelObjects();
        testplayfield.physicsEngineRun();

        //tempID = requestAnimationFrame(dupa);
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
        level1: [{ name: "something", x: 400, y: 0, width: 100, height: 100, fill: "red", type: "kinetic" }, { name: "somethingelse", x: 600, y: 0, width: 100, height: 100, fill: "green", type: "kinetic", velocity: 0, direction: 0 }],
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
            var inventory = new ItemInventory();
            inventory.createCanvasObject();
            _this.currentLevelObjects["inventory"] = inventory;
            objects["level" + _this.currentLevelNumber].forEach(function (e) {

                if (e.type === "static") {
                    var _tempObject = new CanvasStaticObject(e.x, e.y, e.r, e.width, e.height, e.fill, e.type, e.rotation);
                    _tempObject.createCanvasObject();
                    _this.currentLevelObjects[e.name] = _tempObject;
                    return;
                }
                var tempObject = new CanvasMovingObject(e.x, e.y, e.r, e.width, e.height, e.fill, e.type, e.velocity, e.direction, e.isCollided);
                tempObject.createCanvasObject();
                _this.currentLevelObjects[e.name] = tempObject;
            });
        };

        this.resetCurrentLevel = function (level) {
            playfieldContext.clearRect(0, 0, playfieldWidth, playfieldHeight);
            _this.currentLevelObjects = {};
            _this.createObjects(levelsInfo);
            console.log("resetCurrentLevel");
        };

        this.getClickCoords = function (e) {
            var xCoord = Math.round((e.clientX - playfield.getBoundingClientRect().x - 2) * 10) / 10; //Formula for canvas click coords - works well
            var yCoord = Math.round((e.clientY - playfield.getBoundingClientRect().y - 2) * 10) / 10;
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
            Object.keys(_this.currentLevelObjects).forEach(function (e) {
                var colider = _this.currentLevelObjects[e];
                if (colider.type === "static" || e === "inventory") {
                    return;
                }
                Object.keys(_this.currentLevelObjects).forEach(function (e2) {
                    if (e2 === "inventory") {
                        return;
                    }
                    // This is wrong, use this:
                    // function RectCircleColliding(rect,circle){
                    //         let dx=Math.abs(circle.x-(rect.x+rect.w/2));
                    //         let dy=Math.abs(circle.y-(rect.y+rect.y/2));

                    //         if( dx > circle.r+rect.w2 ){
                    //             return(false); 
                    //         }
                    //         if( dy > circle.r+rect.h2 ){ 
                    //             return(false); 
                    //         }

                    //         if( dx <= rect.w ){ 
                    //             return(true); 
                    //         }
                    //         if( dy <= rect.h ){ 
                    //             return(true); 
                    //         }
                    // This is for corner collisions
                    //         dx=dx-rect.w;
                    //         dy=dy-rect.h
                    //         return(dx*dx+dy*dy<=circle.r*circle.r);
                    //     }

                    var colidee = _this.currentLevelObjects[e2];
                    if (colidee.x <= colider.x - colider.r && colidee.x + colidee.width >= colider.x + colider.r) {
                        if (colider.y + colider.r === colidee.y) {
                            colider.isCollided = true;
                            return;
                        }
                        colider.isCollided = false;
                    }
                });
            });
            //TODO: Collisions checker
            //console.log("collisionCheck");
        };

        this.gravity = function () {

            //TODO: Think - is this one is better, or a check in every single object (by calling a method?) - this needs only one raf, so it seems that is better. Either this, or calling a method, no many rafs.

            Object.keys(_this.currentLevelObjects).forEach(function (e) {
                var obj = _this.currentLevelObjects[e];

                if (obj.type === "static" || e === "inventory") {
                    return;
                }

                if (obj.y + obj.height === playfieldHeight || obj.y + obj.r === playfieldHeight || obj.isCollided) {
                    obj.y = obj.y;
                    return;
                }

                if (obj.velocity < _this.gravityValue) {
                    obj.velocity = obj.velocityChange(obj.velocity);
                }
                obj.y = obj.velocity === _this.gravityValue ? Math.round(obj.y + obj.velocity) : obj.y + obj.velocity;

                if (obj.r === null) {
                    playfieldContext.clearRect(obj.x, obj.y - 1, obj.width, obj.height);
                    playfieldContext.fillStyle = obj.fill;
                    playfieldContext.fillRect(obj.x, obj.y, obj.width, obj.height);
                    return;
                }
                playfieldContext.arc(obj.x, obj.y - 1.5, obj.r + 1.5, 0, Math.PI * 2, true);
                playfieldContext.fillStyle = "white";
                playfieldContext.fill();
                playfieldContext.beginPath();
                playfieldContext.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI);
                playfieldContext.fillStyle = obj.fill;
                playfieldContext.fill();
                playfieldContext.closePath();
            });
        };

        this.currentLevelNumber = level || 1;
        this.currentLevelObjects = {};
        this.gravityValue = 0.5; //
    }
    // BOUNCER - IF COLLISION TRUE THEN IF ROTATION = 45 THEN VELOCITY = grav.value, direction = 45 < !!!!!!!!!!!
    ;
    //Arch-class - object prototype


    var CanvasObject = function CanvasObject(x, y, r, width, height, fill, type, velocity, direction, isCollided, rotation) {
        var _this2 = this;

        _classCallCheck(this, CanvasObject);

        this.createCanvasObject = function () {
            if (_this2.r !== null) {
                playfieldContext.beginPath();
                playfieldContext.arc(_this2.x, _this2.y, _this2.r, 0, 2 * Math.PI);
                playfieldContext.fillStyle = _this2.fill;
                playfieldContext.fill();
                playfieldContext.closePath();
                return;
            }
            playfieldContext.fillStyle = _this2.fill;
            playfieldContext.fillRect(_this2.x, _this2.y, _this2.width, _this2.height);
        };

        this.x = x;
        this.y = y;
        this.r = r;
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.type = type;
        this.velocity = velocity;
        this.direction = direction;
        this.isCollided = isCollided;
        this.rotation = rotation;
    };

    var CanvasStaticObject = function (_CanvasObject) {
        _inherits(CanvasStaticObject, _CanvasObject);

        function CanvasStaticObject(x, y, r, width, height, fill, type, rotation) {
            _classCallCheck(this, CanvasStaticObject);

            return _possibleConstructorReturn(this, (CanvasStaticObject.__proto__ || Object.getPrototypeOf(CanvasStaticObject)).call(this, x, y, r, width, height, fill, type, rotation));
        }

        return CanvasStaticObject;
    }(CanvasObject);

    var CanvasMovingObject = function (_CanvasObject2) {
        _inherits(CanvasMovingObject, _CanvasObject2);

        function CanvasMovingObject(x, y, r, fill, type, velocity, direction, isCollided) {
            _classCallCheck(this, CanvasMovingObject);

            var _this4 = _possibleConstructorReturn(this, (CanvasMovingObject.__proto__ || Object.getPrototypeOf(CanvasMovingObject)).call(this, x, y, r, fill, type, velocity, direction, isCollided));

            _initialiseProps.call(_this4);

            return _this4;
        }

        return CanvasMovingObject;
    }(CanvasObject);

    var _initialiseProps = function _initialiseProps() {
        this.velocityChange = function (velocity) {
            velocity = velocity + 0.005;
            return Math.round(velocity * 1000) / 1000;
        };
    };

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

/*You can detect Rectangle vs Circle collisions like this using this Rectangle vs Circle collision-test code:

    // return true if the rectangle and circle are colliding
    // rect and circle are a rectangle and a circle as defined above

    function RectCircleColliding(rect,circle){
        let dx=Math.abs(circle.x-(rect.x+rect.w/2));
        let dy=Math.abs(circle.y-(rect.y+rect.y/2));

        if( dx > circle.r+rect.w2 ){
             return(false); 
        }
        if( dy > circle.r+rect.h2 ){ 
            return(false); 
        }

        if( dx <= rect.w ){ 
            return(true); 
        }
        if( dy <= rect.h ){ 
            return(true); 
        }

        dx=dx-rect.w;
        dy=dy-rect.h
        return(dx*dx+dy*dy<=circle.r*circle.r);
    }
    
    What i need:
    
    Collision detector
    Collision Solver -> Stop or Bounce
    
ctx.fillStyle = "lightgray";
ctx.strokeStyle = "skyblue";

// from top
var rect1 = {
    x: 125,
    y: 10,
    w: 20,
    h: 20
};
var direction1 = 1;

// from bottom
var rect2 = {
    x: 125,
    y: 275,
    w: 20,
    h: 20
};
var direction2 = -1;

// from left
var rect3 = {
    x: 0,
    y: 125,
    w: 20,
    h: 20
};
var direction3 = 1;

// from right
var rect4 = {
    x: 270,
    y: 125,
    w: 20,
    h: 20
};
var direction4 = -1;

// the center rect
var rect5 = {
    x: 120,
    y: 120,
    w: 30,
    h: 30
};


function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect(rect1);
    drawRect(rect2);
    drawRect(rect3);
    drawRect(rect4);
    drawRect(rect5);
}


function drawRect(r) {
    ctx.beginPath();
    ctx.rect(r.x, r.y, r.w, r.h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}


// return true if the 2 rectangles are colliding
function RectsColliding(r1, r2) {
    return !(r1.x > r2.x + r2.w || r1.x + r1.w < r2.x || r1.y > r2.y + r2.h || r1.y + r1.h < r2.y);
}


var fps = 60;

function animate() {
    setTimeout(function () {
        requestAnimFrame(animate);

        // rect1 vs center rect
        rect1.y = rect1.y + direction1;
        if (RectsColliding(rect5, rect1) || rect1.y <= 0) {
            direction1 = -direction1;
        }

        // rect2 vs center rect
        rect2.y = rect2.y + direction2;
        if (RectsColliding(rect5, rect2) || rect2.y > 280) {
            direction2 = -direction2;
        }

        // rect3 vs center rect
        rect3.x = rect3.x + direction3;
        if (RectsColliding(rect5, rect3) || rect3.x <= 0) {
            direction3 = -direction3;
        }

        // rect4 vs center rect
        rect4.x = rect4.x + direction4;
        if (RectsColliding(rect5, rect4) || rect4.x >= 280) {
            direction4 = -direction4;
        }


        drawAll();

    }, 1000 / fps);
}

animate();
    
    */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);