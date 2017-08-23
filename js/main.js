document.addEventListener('DOMContentLoaded',function(){

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
            //const creationButton = document.querySelector(".temporaryGodlyCreationButton");
            // let currentLevel = null;
            
        //Temporary dev functions

            // creationButton.addEventListener("click",function(e){
            //     e.preventDefault()

                
            //     currentLevel = new Playfield()
            //     currentLevel.createObjects(levelsInfo);
            //     currentLevel.physicsEngineRun()
            //     //currentLevel.logCurrentLevelObjects()
            // })

        //Buttons variables
            const resetButton = document.querySelector(".resetButton");
            const resetConfirmButton = document.querySelector(".resetConfirmButton");
            const resetDeclineButton = document.querySelector(".resetDeclineButton");
            const startLevelButton = document.querySelector(".startLevelButton");
            const nextLevelButton = document.querySelector(".nextLevelButton");
            const playPauseButton = document.querySelector(".playPauseButton");
        
        //Instructions variable
            const instructionsTitle = document.querySelector(".instructionsTitle");
            const instructionsWrapper = document.querySelector(".instructionsWrapper");

        //Welcome screen variable
            
            const welcomeScreen = document.querySelector(".welcomeTextWrapper");

        //Reset screen variable

            const resetConfirmScreen = document.querySelector(".resetConfirmWrapper");

        //Timer variables

            const timer = document.querySelector(".timer");
            const winTimer = document.querySelector(".winTimer")
            let seconds = 0;
            let minutes = 0;
            let hours = 0;
            let start = false;

        //AnimFrame IDs
            
            let engineID = null;

        //Levels data
            const inventory = {
                name: "inventory",
                position: {x: 0, y: 0},
                data: {width: 200, height: 400, color: "darkgrey", type: "static", isMovable: false}
            }
            const levelsInfo = {
                level1: [
                    {
                        name: "aBall",
                        position: {x: 250, ix: 250, y: 50, iy: 50},
                        data: {mass: 0.6 /*in kg*/, cr: 0.7, cd: 0.47, r: 15, type: "kinetic", id: "basketball"},
                        motion: {f: 0.2, fx: 0, fy: 0, vx: 0, vy: 0, direction: 0, isStopped: true}
                    },
                    {
                        name: "staticObject1",
                        position: {x:120, y:100}, 
                        data: {mass: 2, width:200, height:30, rotation: 90, type:"static", isMovable: true, isDragged: false, id: "plank2"},
                    },
                    {
                        name: "staticObject2",
                        position: {x:220, y:100}, 
                        data: {mass: 2, width:170, height:30, rotation: 90, type:"static", isMovable: true, isDragged: false, id: "plank2"},
                    },
                    {
                        name: "staticObject3",
                        position: {x:380, y:140}, 
                        data: {mass: 2, width:170, height:30, rotation: 45, type:"static", isMovable: true, isDragged: false, id: "plank1"},
                    },
                    {
                        name: "staticObject4",
                        position: {x:525, y:360}, 
                        data: {mass: 2, width:170, height:30, rotation: 175, type:"static", isMovable: true, isDragged: false, id: "plank1"},
                    },
                    {
                        name: "spring",
                        position: {x:180, y:295}, 
                        data: {mass: 2, width:100, height:80, rotation: 45, type:"static", isMovable: true, isDragged: false, id: "spring", isSpring: true},
                    },
                    {
                        name: "fan",
                        position: {x:440, y:295}, 
                        data: {mass: 2, width:50, height:50, rotation: 0, type:"static", isMovable: true, isDragged: false, id: "fan", isFan: true},
                    },
                    {
                        name: "goal",
                        position: {x:800, y:290},
                        data: {mass: 3000, width: 200, height: 100, rotation: 0, type:"static", isMovable: false, id: "wheelbarrow"}
                    }
                ],
                level2: [
                    {
                        name: "aBall",
                        position: {x: 900, ix: 900, y: 20, iy: 20},
                        data: {mass: 0.6 /*in kg*/, cr: 0.7, cd: 0.47, r: 15, type: "kinetic", id: "basketball"},
                        motion: {f: 0.2, fx: 0, fy: 0, vx: 0, vy: 0, direction: 0, isStopped: true}
                    },
                    {
                        name: "staticObject1",
                        position: {x:800, y:90}, 
                        data: {mass: 5, width:200, height:30, rotation: 10, type:"static", isMovable: true, isDragged: false, id: "barrier"},
                    },
                    {
                        name: "staticObject2",
                        position: {x:690, y:295}, 
                        data: {mass: 600, width:170, height:30, rotation: 25, type:"static", isMovable: true, isDragged: false, id: "plank1"},
                    },
                    {
                        name: "staticObject3",
                        position: {x:830, y:220}, 
                        data: {mass: 800, width:220, height:30, rotation: 170, type:"static", isMovable: true, isDragged: false, id: "plank2"},
                    },
                    {
                        name: "goal",
                        position: {x:900, y:350},
                        data: {mass: 3000, width: 100, height: 50, rotation: 0, type:"static", isMovable: false, id: "wheelbarrow"}
                    }
                ],
                level3: [],
                level4: [],
                level5: [],
                level6: [],
                level7: [],
                level8: [],
                level9: [],
                level10: [],
            };
            
            
        //Game variables

            //Canvas definitions
                const playfield = document.querySelector(".playfield");
                const playfieldContext = playfield.getContext("2d");
                const playfieldWidth = playfield.width;
                const playfieldHeight = playfield.height;

            //Click recognition variables
                let xClick = 0;
                let yClick = 0;

            //Another click variable for removing drag status
                let prevxClick = 0;
                let prevyClick = 0;

            //Move coords variables for dragging function
                let xMove = 0;
                let yMove = 0;

            //Time variables for physics functions
                const frameRate = 1/40;

            //Physics variables
                const gravityValue = 9.81; // m/s^2
                const ppm = 10; //Pixels-per-meter - width: 800px - 1px = 1cm 800px = 800cm = 8m
                const wallMass = 5.9722 * Math.pow(10, 24) //mass of Earth
                const rho = 1.22 // density of air kg/m3;
                let innerRotation = 4;
                let innerRotationChange = 0.8;

            //Misc variables
                let objectBeingDragged = "";
                let levelWon = false;
                let levelNumber = 1;
                let currentLevel = null;


        //Canvas functions
            
            playfield.addEventListener("mousedown",(e) => {
                xClick = Math.round((e.clientX - playfield.getBoundingClientRect().left - 2)*10)/10; //Formula for canvas click coords - works well
                yClick = Math.round((e.clientY - playfield.getBoundingClientRect().top - 2)*10)/10;
                currentLevel.moveObject(e)
            })

            playfield.addEventListener("mousemove",(e) => {
                xMove = Math.round((e.clientX - playfield.getBoundingClientRect().left - 2)*10)/10;
                yMove = Math.round((e.clientY - playfield.getBoundingClientRect().top - 2)*10)/10;
            })



    //Playfield objects classes
        //Main object, creator of objects, physics engine
            class Playfield {
                constructor(level){
                    this.currentLevelNumber = level || 1;
                    this.currentLevelObjects = {};
                }

                createObjects = (objects) =>{
                    let currentInventory = new ItemInventory(inventory);
                    currentInventory.createCanvasObject();
                    this.currentLevelObjects["inventory"] = currentInventory;

                    objects["level"+this.currentLevelNumber].forEach( (object) => {
                        if (object.data.type === "static") {
                            let tempObject = new CanvasStaticObject(object);
                            tempObject.createCanvasObject()
                            this.currentLevelObjects[object.name] = tempObject;
                            return;
                        }

                        let tempObject = new CanvasMovingObject(object);
                        tempObject.createCanvasObject()
                        tempObject.countInitialVectors()
                        this.currentLevelObjects[object.name] = tempObject;
                    }); 
                }

                clearCanvas = () => {
                    playfieldContext.clearRect(0,0,playfieldWidth,playfieldHeight);
                    Object.keys(this.currentLevelObjects).forEach( (object) => {
                        this.currentLevelObjects[object].redrawCanvasObject()
                    });
                }

                resetCurrentLevel = (level) => {
                    playfieldContext.clearRect(0,0,playfieldWidth,playfieldHeight);
                    this.currentLevelObjects = {};
                    this.createObjects(levelsInfo);
                    console.log("resetCurrentLevel");
                }
                
                moveObject = () => {
                    Object.keys(this.currentLevelObjects).forEach( (object) => {
                        if (!this.currentLevelObjects[object].isMovable){
                            return;
                        }
                        this.currentLevelObjects[object].moveMe();
                        //this.currentLevelObjects[object].rotateMe();
                    });
                }

                logCurrentLevelObjects = () => {
                    console.log(this.currentLevelObjects);
                }

                physicsEngineRun = () => {
                    if (levelWon) {
                        return;
                    }
                    this.clearCanvas()
                    Object.keys(this.currentLevelObjects).forEach( (object) => {
                        if (this.currentLevelObjects[object].type === "static") {
                           return; 
                        }
                        this.currentLevelObjects[object].movement()
                        this.clearCanvas()
                        this.currentLevelObjects[object].wallCollisionCheck()
                        this.clearCanvas()
                        this.currentLevelObjects[object].collisionCheck()
                        this.clearCanvas()
                        this.currentLevelObjects[object].checkIfWin()
                    })
                    this.moveObject()
                    requestAnimationFrame(this.physicsEngineRun)
                }
            }

        //Object prototype
            class CanvasObject {
                constructor(object) {
                    this.object = object
                    this.x = object.position.x
                    this.ix = object.position.ix
                    this.y = object.position.y
                    this.iy = object.position.iy
                    this.type = object.data.type
                    this.name = object.name
                    this.id = object.data.id
                    this.mass = object.data.mass
                }

                logMe = () => {
                    console.log(this);
                }

                get rotationInRadians() {
                    return this.rotation * Math.PI/180;
                }

                createCanvasObject = () =>{
                    
                    let image = document.getElementById(this.id);
                    if (this.r !== undefined) {
                        if (this.isStopped) {
                            playfieldContext.drawImage(image,this.ix-this.r,this.iy-this.r,2*this.r,2*this.r);
                            this.x = this.ix;
                            this.y = this.iy;
                            //this.vx = 0;
                            //this.vy = 0;
                            //this.fx = 0;
                            //this.fy = 0;
                            return;
                        }
                        playfieldContext.save();
                        playfieldContext.translate(this.x,this.y)
                        playfieldContext.rotate(innerRotation*this.vx*Math.PI/180);
                        //TODO: Repair "moving" ball - its all about translation.
                        playfieldContext.drawImage(image,-this.r,-this.r,2*this.r,2*this.r)
                        playfieldContext.restore();
                        innerRotation += innerRotationChange;
                        return;
                    }
                    if (this.isFan) {
                        playfieldContext.save();
                        playfieldContext.translate(this.x+this.width/2,this.y+this.height/2);
                        playfieldContext.beginPath()
                        playfieldContext.rotate(this.rotation * Math.PI/180);
                        playfieldContext.drawImage(image,-this.width/2,-this.height/2,this.width,this.height) 
                        playfieldContext.closePath()
                        playfieldContext.restore();
                        this.rotation += 5;
                        return;
                    }
                    if (this.rotation !== 0) {
                        playfieldContext.save();
                        playfieldContext.translate(this.x+this.width/2,this.y+this.height/2);
                        playfieldContext.beginPath()
                        playfieldContext.rotate(this.rotationInRadians);                        
                        if (this.isDragged) {
                            playfieldContext.strokeStyle="red";
                            playfieldContext.lineWidth = 4;
                            playfieldContext.strokeRect(-this.width/2,-this.height/2,this.width,this.height); 
                        }
                        playfieldContext.drawImage(image,-this.width/2,-this.height/2,this.width,this.height) 
                        playfieldContext.closePath()
                        playfieldContext.restore();
                        return;
                    }
                    if (this.isDragged) {
                        playfieldContext.beginPath()
                        playfieldContext.strokeStyle="red";
                        playfieldContext.lineWidth = 4;
                        playfieldContext.strokeRect(this.x,this.y,this.width,this.height);
                        playfieldContext.closePath()
                    }
                    // if (this.isBeingRotated) {
                    //     playfieldContext.strokeStyle="blue";
                    //     playfieldContext.lineWidth = 4;
                    //     playfieldContext.strokeRect(this.x,this.y,this.width,this.height); 
                    // }
                    playfieldContext.drawImage(image, this.x, this.y, this.width, this.height) 
                }

                redrawCanvasObject = () =>{
                    this.createCanvasObject();
                }

            }
        
        //Extended Objects
            class CanvasStaticObject extends CanvasObject {
                constructor(object) {
                    super(object)
                    this.width = object.data.width
                    this.height = object.data.height
                    this.rotation = object.data.rotation 
                    this.isMovable = object.data.isMovable
                    this.isDragged = object.data.isDragged
                    this.isSpring = object.data.isSpring
                    this.isFan = object.data.isFan
                    // this.isBeingRotated = object.data.isBeingRotated
                }

                moveMe = () => {
                    if (objectBeingDragged !== "" && objectBeingDragged !== this.name) {
                        return;
                    }
                    if (this.isDragged && prevxClick === xClick && prevyClick === yClick) {
                        this.dragger()
                        return
                    }
                    
                    else if (prevxClick !== 0 && prevxClick !== 0) {
                        prevxClick = 0;
                        prevyClick = 0;
                        xClick = 0;
                        yClick = 0;
                        this.isDragged = false;
                        objectBeingDragged = "";
                        //this.isBeingRotated = true;
                        return
                    }
                    
                    if (this.rotation !== 0 || this.rotation % 360 !== 0 || this.rotation % 90 !== 0) {
                        //This works. Thank you unknown guy on Stack
                        let originX = this.x + this.width/2, originY = this.y + this.height/2, r = this.rotationInRadians;
                        let dx = xClick - originX, dy = yClick - originY;
                        let h1 = Math.sqrt(dx*dx + dy*dy)
                        let currA = Math.atan2(dy,dx);
                        let newA = currA - r;
                        let x2 = Math.cos(newA) * h1;
                        let y2 = Math.sin(newA) * h1;
                        if (x2 > -0.5*this.width && x2 < 0.5*this.width && y2 > -0.5*this.height && y2 < 0.5*this.height){
                            this.isDragged = true;
                            prevxClick = xClick;
                            prevyClick = yClick;
                            objectBeingDragged = this.name;
                            this.dragger()
                        }
                    }
                    else if ((this.x <= xClick && this.x + this.width >= xClick)&&(this.y <= yClick && this.y + this.height >= yClick)) {
                        this.isDragged = true;
                        prevxClick = xClick;
                        prevyClick = yClick;
                        objectBeingDragged = this.name;
                        this.dragger()
                    }
                }

                dragger = () => {
                    this.x = xMove - this.width/2;
                    this.y = yMove - this.height/2;
                    this.redrawCanvasObject()
                }
                
                //TODO: this.isBeingRotated must be put somewhere. Don't know where. This function is commented - will maybe work later
                //Also, think about diffrent rotation method...
                rotateMe = () => {
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
                }
            }
            
            class CanvasMovingObject extends CanvasObject {
                constructor(object) {
                    super(object)
                    this.r = object.data.r
                    this.f = object.motion.f
                    this.fx = object.motion.fx
                    this.fy = object.motion.fy
                    this.direction = object.motion.direction
                    this.vx = object.motion.vx
                    this.vy = object.motion.vy
                    this.isStopped = object.motion.isStopped
                    this.cd = object.data.cd
                    this.cr = object.data.cr
                }

                checkIfWin = () => {
                    //console.log(engineID);
                    //return
                    let temp = currentLevel.currentLevelObjects["goal"];
                    let goalX = currentLevel.currentLevelObjects["goal"].x + currentLevel.currentLevelObjects["goal"].width/3
                    let goalY = currentLevel.currentLevelObjects["goal"].y + currentLevel.currentLevelObjects["goal"].height/3
                    if (this.x >= goalX  && this.y >= goalY) {
                        levelWon = true;
                        window.cancelAnimationFrame(engineID);
                        document.querySelector(".winScreen").style.display = "block";
                        document.querySelector(".winScreen").style.opacity = 1;
                        playfieldContext.clearRect(0,0,playfieldWidth,playfieldHeight);
                        playPauseButton.style.display = "none";
                        playPauseButton.setAttribute("src", "images/play.png");
                    }
                }

                countInitialVectors = () => {
                    this.vx = Math.cos(this.direction*(Math.PI/180)) * this.f;
                    this.vy = Math.sin(this.direction*(Math.PI/180)) * this.f;
                }

                movement = () => {
                   
                    let a = Math.PI * this.r * this.r / (10000) //the last number (10000) changes units, otherwise this number is huge;

                    this.fx = -0.5 * this.cd * a * rho * this.vx * this.vx * this.vx / Math.abs(this.vx);  
                    this.fy = -0.5 * this.cd * a * rho * this.vy * this.vy * this.vy / Math.abs(this.vy);

                    this.fx = (isNaN(this.fx) ? 0 : this.fx);  
                    this.fy = (isNaN(this.fy) ? 0 : this.fy);

                    let ax = this.fx / this.mass;
                    let ay = gravityValue + (this.fy / this.mass);

                    this.vx += ax * frameRate;
                    this.vy += ay * frameRate;

                    let check = Math.abs(this.vx) > Math.abs(this.vy) ? Math.abs(this.vx) : Math.abs(this.vy)
                   
                    for (let i = 0; i < check; i += check/10) {
                        this.x += this.vx/10 * frameRate * ppm;
                        this.y += this.vy/10 * frameRate * ppm;
                        
                        if (this.collisionCheck()){
                            return;
                        }
                    }
                }

                wallCollisionCheck = () => {
                    // Left wall
                        if (this.x - this.r <= 200) {
                            this.x = 200 + this.r
                            this.bouncer(0,0,1,false);
                        }

                    // Right wall
                        if (this.x + this.r >= 1000) {
                            this.x = 1000 - this.r
                            this.bouncer(0,2,1,false);
                        }

                    // Ceiling
                        if (this.y - this.r <= 0) {
                            this.bouncer(0,1,2,false);
                        }

                    // Floor
                        if (this.y + this.r >= 400) {
                            this.y = 400 - this.r
                            this.bouncer(0,1,0,false);
                        }
                }

                collisionCheck = () => {
                   //debugger
                    Object.keys(currentLevel.currentLevelObjects).forEach( (object) => {
                        let colidee = currentLevel.currentLevelObjects[object];
                        if (colidee.name === "inventory" || colidee.name === this.name || colidee.name === "goal"){
                            return;
                        }

                        let rectCenterX = colidee.x + colidee.width/2;
	                    let rectCenterY = colidee.y + colidee.height/2;

	                    let rectX = colidee.x;
	                    let rectY = colidee.y;

                        let rectReferenceX = rectX;
                        let rectReferenceY = rectY;
	
                        // Rotate circle's center point back
                        let unrotatedCircleX = Math.cos( -colidee.rotationInRadians ) * ( this.x - rectCenterX ) - Math.sin( -colidee.rotationInRadians ) * ( this.y - rectCenterY ) + rectCenterX;
                        let unrotatedCircleY = Math.sin( -colidee.rotationInRadians ) * ( this.x - rectCenterX ) + Math.cos( -colidee.rotationInRadians ) * ( this.y - rectCenterY ) + rectCenterY;

                        // Closest point in the rectangle to the center of circle rotated backwards(unrotated)
                        let closestX, closestY;
                        let whereX,whereY;

                        // Find the unrotated closest x point from center of unrotated circle
                        if ( unrotatedCircleX < rectReferenceX ) {
                            closestX = rectReferenceX;
                            whereX = 0;
                        } else if ( unrotatedCircleX > rectReferenceX + colidee.width ) {
                            closestX = rectReferenceX + colidee.width;
                            whereX = 2;
                        } else {
                            closestX = unrotatedCircleX;
                            whereX = 1;
                        }
 
                        // Find the unrotated closest y point from center of unrotated circle
                        if ( unrotatedCircleY < rectReferenceY ) {
                            closestY = rectReferenceY;
                            whereY = 0;
                        } else if ( unrotatedCircleY > rectReferenceY + colidee.height ) {
                            closestY = rectReferenceY + colidee.height;
                            whereY = 2;
                        } else {
                            closestY = unrotatedCircleY;
                            whereY = 1;
                        }

                        let spring = false;
                        if (colidee.isSpring) {
                            spring = true;
                        }

                        

                        
 
                        // Determine collision
                        let dX = Math.abs( unrotatedCircleX - closestX );
	                    let dY = Math.abs( unrotatedCircleY - closestY );
                        let distance = Math.sqrt( ( dX * dX ) + ( dY * dY ) );
                        
                        if ( distance < this.r ) {
                            if (colidee.isFan) {
                                this.vx += 2;
                                return;
                            }
                            this.bouncer(colidee.rotation,whereX,whereY,spring);
                            return true;
                        }
                    })
                }

                bouncer = (rotation,whereX,whereY,spring) => {
                    let rotCos = Math.cos(rotation * Math.PI/180);
                    let rotSin = Math.sin(rotation * Math.PI/180);

                    let tempVX = this.vx * rotCos + this.vy * rotSin; 
                    let tempVY = this.vy * rotCos - this.vx * rotSin; 
                
                    let bounceResolver = 
                    [//X
                        [//Y
                            [1,1],//00
                            [-1,1],//01
                            [1.1,1.1]//02
                        ],
                        [
                            [1,-1],//10
                            [-1,-1],//11
                            [1,-1]//12
                        ],
                        [
                            [1,1],//20
                            [-1,1],//21
                            [1,1]//22
                        ]
                    ]

                    let springYModifier = 1;
                    let springXModifier = 1;

                    if (spring && whereX === 1 && whereY === 0) {
                        springYModifier = 5;
                        springXModifier = 2;
                    }


                    tempVX = tempVX * this.cr * bounceResolver[whereX][whereY][0] * springXModifier;
                    tempVY = tempVY * this.cr * bounceResolver[whereX][whereY][1] * springYModifier;

                    this.vx = tempVX * rotCos - tempVY * rotSin; 
                    this.vy = tempVY * rotCos + tempVX * rotSin;

                    this.x += this.vx * frameRate * ppm;
                    this.y += this.vy * frameRate * ppm;             
                }
            }

        //Inventory object
            class ItemInventory extends CanvasStaticObject {
                constructor(object) {
                    super(object)
                    this.x = object.position.x;
                    this.y = object.position.y;
                    this.width = object.data.width;
                    this.height = object.data.height;
                    this.color = "darkgrey";
                    this.objectsInInventory = [];
                    this.type = "static";
                }

                createCanvasObject = () => {
                    playfieldContext.fillStyle = this.color
                    playfieldContext.fillRect(this.x,this.y,this.width,this.height);
                    
                }

                addItem = () => {
                    console.log("Maybe i will need it");
                    //TODO: Think about this function.
                }

                removeItem = (itemID) => {
                    let itemToRemove = this.objectsInInventory.filter( (p) => {
                        if (p === itemID) {
                            return p;
                        }
                    })
                    return itemToRemove
                }
            }
        
    //Background functions
        //Instructions functionality
            instructionsTitle.addEventListener("click",function(){
                instructionsWrapper.classList.toggle("open");
            });
    
        //Reset button functionality
            resetButton.addEventListener("click", (e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "block";
            });
            resetButton.addEventListener("touch", (e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "block";
            });

        //Next Level Button functionality
            nextLevelButton.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelector(".winScreen").style.opacity = 0;
                levelNumber++
                if (levelNumber > 2) {
                    document.querySelector(".noMoreLevels").style.display = "block";
                    document.querySelector(".noMoreLevels").style.opacity = 1;
                    return;
                }
                setTimeout(()=>{
                    document.querySelector(".winScreen").style.display = "none";
                    currentLevel = new Playfield(levelNumber)
                    currentLevel.createObjects(levelsInfo)
                },1000)
                setTimeout(()=>{
                    document.querySelector(".level").innerText = "Level: " + levelNumber;
                    levelWon = false
                    start = true;
                    seconds = 0;
                    minutes = 0;
                    hours = 0;
                    currentLevel.physicsEngineRun();
                    engineID = requestAnimationFrame(currentLevel.physicsEngineRun);
                    //TODO: Uncomment line below
                    playPauseButton.style.display = "block";
                },1500)
            })

            nextLevelButton.addEventListener("touch", (e) => {
                e.preventDefault();
                document.querySelector(".winScreen").style.opacity = 0;
                levelNumber++
                if (levelNumber > 2) {
                    document.querySelector(".noMoreLevels").style.display = "block";
                    document.querySelector(".noMoreLevels").style.opacity = 1;
                    return;
                }
                setTimeout(()=>{
                    document.querySelector(".winScreen").style.display = "none";
                    
                    currentLevel = new Playfield(levelNumber)
                    currentLevel.createObjects(levelsInfo)
                },1000)
                setTimeout(()=>{
                    document.querySelector(".level").innerText = "Level: " + levelNumber;
                    levelWon = false
                    start = true;
                    seconds = 0;
                    minutes = 0;
                    hours = 0;
                    currentLevel.physicsEngineRun();
                    engineID = requestAnimationFrame(currentLevel.physicsEngineRun);
                    //TODO: Uncomment line below
                    playPauseButton.style.display = "block";
                },1500)
            })
        

        //Time functionality
            let timerInterval = setInterval( () => {
                if (!start || levelWon) {
                    return
                }
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
                let currentTime = (hours.toString().length < 2 ? "0"+hours : hours)+":"+(minutes.toString().length < 2 ? "0"+minutes : minutes)+":"+(seconds.toString().length < 2 ? "0"+seconds : seconds);
                timer.innerText = currentTime;
                winTimer.innerText = currentTime;
                seconds++;
            },1000);       

        //Start button functionality
            startLevelButton.addEventListener("click",(e) => {
                e.preventDefault();
                welcomeScreen.style.opacity = 0;
                setTimeout(() => {
                    welcomeScreen.classList.add("goodLuck");
                    welcomeScreen.innerText = "Good Luck!"
                    welcomeScreen.style.opacity = 1;
                },700)
                setTimeout(()=>{
                    welcomeScreen.style.opacity = 0;
                    start = true;
                    currentLevel = new Playfield(levelNumber)
                    currentLevel.createObjects(levelsInfo)
                },4000)
                setTimeout(()=>{
                    welcomeScreen.style.display = "none";
                    currentLevel.physicsEngineRun();
                    engineID = requestAnimationFrame(currentLevel.physicsEngineRun)
                    //TODO: Uncomment line below
                    playPauseButton.style.display = "block";
                },5000)
               
            })

            startLevelButton.addEventListener("touch",(e) => {
                e.preventDefault();
                welcomeScreen.style.opacity = 0;
                setTimeout(() => {
                    welcomeScreen.classList.add("goodLuck");
                    welcomeScreen.innerText = "Good Luck!"
                    welcomeScreen.style.opacity = 1;
                },700)
                setTimeout(()=>{
                    welcomeScreen.style.opacity = 0;
                    start = true;
                    currentLevel = new Playfield(levelNumber)
                    currentLevel.createObjects(levelsInfo)
                },4000)
                setTimeout(()=>{
                    welcomeScreen.style.display = "none";
                    currentLevel.physicsEngineRun();
                    engineID = requestAnimationFrame(currentLevel.physicsEngineRun)
                    //TODO: Uncomment line below
                    playPauseButton.style.display = "block";
                },5000)
               
            })

        //Reset screen functionality
            resetConfirmButton.addEventListener("click",(e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "none";
                currentLevel.resetCurrentLevel(currentLevel.currentLevelNumber)
                
            });

            resetConfirmButton.addEventListener("touch",(e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "none";
                currentLevel.resetCurrentLevel(currentLevel.currentLevelNumber)
            });

            resetDeclineButton.addEventListener("click",(e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "none";
            });
            
            resetDeclineButton.addEventListener("touch",(e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "none";
            });

        //Play-pause Button
            playPauseButton.addEventListener("click", function(){
                if (this.getAttribute("src") === "images/pause.png") {
                    this.setAttribute("src", "images/play.png");
                    currentLevel.currentLevelObjects["aBall"].isStopped = true;
                    return;
                }
                this.setAttribute("src", "images/pause.png")
                currentLevel.currentLevelObjects["aBall"].isStopped = false;
            });
});