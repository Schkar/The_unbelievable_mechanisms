document.addEventListener('DOMContentLoaded',function(){
    console.log("DOM loaded. Script is working");
    //Variables section

        //Temporary dev variables
            const creationButton = document.querySelector(".temporaryGodlyCreationButton");
            let testplayfield = null;
            const testLevel = {
                level1: [
                    {
                        name: "staticObject1",
                        position: {x:450, y:150},
                        data: {width:100, height:30, rotation: 0, color:"red", type:"static", isMovable: true},
                    },
                    {
                        name: "staticObject2",
                        position: {x:600, y:300}, 
                        data:{width:80, height:30, rotation: 0, color:"green", type:"static"},
                    },
                    {
                        name: "someCircle",
                        position:{x:442, y:15},
                        data:{r:10, color:"blue", type:"kinetic"},
                        motion: {speed: 0, direction: 0, vx: 0, vy:0, isCollided: false}
                    }
                ],
                level2: [
                    // {
                    //     name: "aBall",
                    //     position: {x: 500, y: 200},
                    //     data: {r: 10, color: "green", type: "kinetic"},
                    //     motion: {speed: 0.15, direction: 6, vx: 0, vy:0, isCollided: false}
                    // },
                    {
                        name: "staticObject2",
                        position: {x:600, y:300}, 
                        data:{width:80, height:30, rotation: 0, color:"green", type:"static", isMovable: true, isDragged: false, isBeingRotated: false},
                    }
                ]
            }


            
        //Temporary dev functions

            creationButton.addEventListener("click",function(e){
                e.preventDefault()


                
                testplayfield = new Playfield(2)
                testplayfield.createObjects(testLevel);
                testplayfield.physicsEngineRun()
                //testplayfield.logCurrentLevelObjects();
                //testplayfield.physicsEngineRun();
                
                
                //currentLevel.physicsEngineRun()
                //requestAnimationFrame(currentLevel.physicsEngineRun)
            })

        //Buttons variables
            const resetButton = document.querySelector(".resetButton");
            const resetConfirmButton = document.querySelector(".resetConfirmButton");
            const resetDeclineButton = document.querySelector(".resetDeclineButton");
            const startLevelButton = document.querySelector(".startLevelButton");

        //Welcome screen variable
            
            const welcomeScreen = document.querySelector(".welcomeTextWrapper")

        //Reset screen variable

            const resetConfirmScreen = document.querySelector(".resetConfirmWrapper");

        //Timer variables

            const timer = document.querySelector(".timer");
            let seconds = 0;
            let minutes = 0;
            let hours = 0;
            let start = false;

        //AnimFrame IDs
            
            let engineID = null;
            let draggerID = null;

        //Levels data
            
            const levelsInfo = {
                level1: [
                    {
                        
                    }
                ],
                level2: [],
                level3: [],
                level4: [],
                level5: [],
                level6: [],
                level7: [],
                level8: [],
                level9: [],
                level10: [],
            };

            let currentLevel = null;

        //Canvas variables

            const playfield = document.querySelector(".playfield");
            const playfieldContext = playfield.getContext("2d");
            const playfieldWidth = playfield.width;
            const playfieldHeight = playfield.height;
            let xClick = 0;
            let yClick = 0;
            let prevxClick = 0;
            let prevyClick = 0;
            let xMove = 0;
            let yMove = 0;
            let prevxMove = 0;
            let prevyMove = 0;

        //Canvas functions
            
            playfield.addEventListener("mousedown",(e) => {
                xClick = Math.round((e.clientX - playfield.getBoundingClientRect().x - 2)*10)/10; //Formula for canvas click coords - works well
                yClick = Math.round((e.clientY - playfield.getBoundingClientRect().y - 2)*10)/10;
                testplayfield.moveObject(e)
            })

            playfield.addEventListener("mousemove",(e) => {
                xMove = Math.round((e.clientX - playfield.getBoundingClientRect().x - 2)*10)/10;
                yMove = Math.round((e.clientY - playfield.getBoundingClientRect().y - 2)*10)/10;
            })



    //Playfield objects classes
        //Main object, creator of objects, physics engine
            class Playfield {
                constructor(level){
                    this.currentLevelNumber = level || 1;
                    this.currentLevelObjects = {};
                    this.gravityValue = 0.5; //
                }

                createObjects = (objects) =>{
                    // let inventory = new ItemInventory;
                    // inventory.createCanvasObject();
                    // this.currentLevelObjects["inventory"] = inventory;
                    objects["level"+this.currentLevelNumber].forEach( (object) => {
                        if (object.data.type === "static") {
                            let tempObject = new CanvasStaticObject(object);
                            tempObject.createCanvasObject()
                            this.currentLevelObjects[object.name] = tempObject;
                            return;
                        }
                        let tempObject = new CanvasMovingObject(object);
                        tempObject.createCanvasObject()
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
                        this.currentLevelObjects[object].rotateMe();
                    });
                }

                logCurrentLevelObjects = () => {
                    console.log(this.currentLevelObjects);
                }

                physicsEngineRun = () => {
                    this.clearCanvas()
                    Object.keys(this.currentLevelObjects).forEach( (object) => {
                        if (this.currentLevelObjects[object].type === "static") {
                           return; 
                        }
                        this.currentLevelObjects[object].movement()
                        this.currentLevelObjects[object].collisionCheck()
                    })
                    this.moveObject()
                    requestAnimationFrame(this.physicsEngineRun)
                }
            }
        //Arch-class - object prototype
            class CanvasObject {
                constructor(object) {
                    this.object = object
                    this.x = object.position.x
                    this.y = object.position.y
                    this.color = object.data.color
                    this.type = object.data.type
                }

                createCanvasObject = () =>{
                    if (this.r !== undefined) {
                        playfieldContext.beginPath();
                        playfieldContext.arc(this.x,this.y,this.r,0,2*Math.PI);
                        playfieldContext.fillStyle = this.color;
                        playfieldContext.fill();
                        playfieldContext.closePath();
                        return;
                    }
                    if (this.isDragged) {
                        playfieldContext.strokeStyle="red";
                        playfieldContext.lineWidth = 4;
                        playfieldContext.strokeRect(this.x,this.y,this.width,this.height); 
                    }
                    if (this.isBeingRotated) {
                        playfieldContext.strokeStyle="blue";
                        playfieldContext.lineWidth = 4;
                        playfieldContext.strokeRect(this.x,this.y,this.width,this.height); 
                    }
                    playfieldContext.fillStyle=this.color;
                    playfieldContext.fillRect(this.x,this.y,this.width,this.height);
                }

                redrawCanvasObject = () =>{
                    this.createCanvasObject();
                }

            }
        
            class CanvasStaticObject extends CanvasObject {
                constructor(object) {
                    super(object)
                    this.width = object.data.width
                    this.height = object.data.height
                    this.rotation = object.data.rotation 
                    this.isMovable = object.data.isMovable
                    this.isDragged = object.data.isDragged
                    this.isBeingRotated = object.data.isBeingRotated
                }

                moveMe = () => {
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
                        //this.isBeingRotated = true;
                        return
                    }
                    if ((this.x <= xClick && this.x + this.width >= xClick)&&(this.y <= yClick && this.y + this.height >= yClick)) {
                        this.isDragged = true;
                        prevxClick = xClick;
                        prevyClick = yClick;
                        this.dragger()
                    }
                    
                }

                dragger = () => {
                    this.x = xMove - this.width/2;
                    this.y = yMove - this.height/2;
                    this.redrawCanvasObject()
                }
                //FIXME: this.isBeingRotated must be put somewhere. Don't know where.
                //Also, think about diffrent rotation method...
                rotateMe = () => {
                    if (this.isDragged) {
                        return;
                    }
                    if (!this.isBeingRotated) {
                        return;
                    }
                    if ((this.x <= xClick && this.x + this.width >= xClick)&&(this.y <= yClick && this.y + this.height >= yClick)&&(xClick !== 0 && yClick !== 0)) {
                        this.isBeingRotated = false;
                        return;
                    }
                    // console.log(yMove,prevyMove);
                    // if (yMove - prevyMove > 0) {
                    //     this.rotation +=45;
                    // }
                    // else if (yMove - prevyMove < 0) {
                    //     this.rotation -=45;
                    // }
                    this.rotation = yMove/360;
                    if(this.rotation === 360) {
                        this.rotation = 0;
                    }
                    if(this.rotation <= 0) {
                        this.rotation = 315;
                    }
                    // playfieldContext.save();
                    playfieldContext.translate(this.x + this.width/2,this.y + this.height/2);
                    playfieldContext.rotate(this.rotation*(Math.PI/180));
                    // console.log(this.x,this.y);
                    // playfieldContext.fillStyle=this.color;
                    // playfieldContext.fillRect(this.x,this.y,this.width,this.height);
                    playfieldContext.translate(-(this.x + this.width/2),-(this.y + this.height/2));
                    this.redrawCanvasObject();
                    //playfieldContext.restore();
                    prevyMove = yMove;
                }
            }
            
            class CanvasMovingObject extends CanvasObject {
                constructor(object) {
                    super(object)
                    this.name = object.name
                    this.r = object.data.r
                    this.speed = object.motion.speed
                    this.direction = object.motion.direction
                    this.vx = object.motion.vx
                    this.vy = object.motion.vy
                    this.isCollided = object.motion.isCollided
                }

                speedChange = (speed) =>{
                    speed = speed + 0.005;
                    return Math.round(speed*1000)/1000;
                }

                directionChange = () => {
                    //this.direction = Math.floor(Math.random() * (360 - 1 + 1)) + 1
                    this.direction = document.querySelector(".temporaryDirectionChange").value;
                }

                movement = () => {
                    // console.log(this.direction);
                    this.vx = Math.cos(this.direction);
                    this.vy = Math.sin(this.direction);
                    // this.x = Math.round((this.x + this.vx)*100)/100;
                    // this.y = Math.round((this.y + this.vy)*100)/100;
                    this.x = this.x + this.vx;
                    this.y = this.y + this.vy + testplayfield.gravityValue;
                    //this.directionChange()
                }

                collisionCheck = () => {
                    Object.keys(testplayfield.currentLevelObjects).forEach( (object) => {
                        let colidee = testplayfield.currentLevelObjects[object];
                        if (colidee.name === "inventory" || colidee.name === this.name){
                            return;
                        }
                        //FIXME: Check them - it sticks to left and right wall... probably because degrees
                        // Wall collision check: 
                        // Left wall
                        if (this.x - this.r <= 0) {
                            // console.log("lw");
                            this.x = 0 + this.r;
                            this.bouncer(90);
                        }

                        // Right wall
                        if (this.x + this.r >= 1000) {
                            // console.log("rw");
                            this.x = 1000 - this.r;
                            this.bouncer(90)
                        }

                        // Ceiling
                        if (this.y - this.r <= 0) {
                            // console.log("cl");
                            this.y = 0 + this.r;
                            this.bouncer(0)
                        }

                        // Floor
                        if (this.y + this.r >= 400) {
                            // console.log("fl");
                            this.y = 400 - this.r;
                            this.bouncer(0)
                        }
                        

                        let dx=Math.abs(this.x-(colidee.x+colidee.width/2));
                        let dy=Math.abs(this.y-(colidee.y+colidee.height/2));

                        //Object collision check
                        //is collision on X-axis?
                        if( dx > this.r+colidee.width/2 ){
                            this.isCollided = false;
                            return; 
                        }

                        //is collision on Y-axis?
                        if( dy > this.r+colidee.height/2 ){
                            this.isCollided = false;
                            return; 
                        }

                        // collision on X-axis
                        if( dx <= colidee.width ){
                            this.isCollided = true;
                            this.bouncer(colidee.rotation)
                            return; 
                        }

                        // collision on Y-axis
                        if( dy <= colidee.data.height ){
                            this.isCollided = true;
                            this.bouncer(colidee.rotation)
                            return; 
                        }

                        dx=dx-colidee.width;
                        dy=dy-colidee.height;
                        return(dx*dx+dy*dy<=this.r*this.r);
                    })
                }

                bouncer = (rotation) => {
                    this.vx = this.speed*Math.sin(this.direction - rotation)*Math.cos(rotation + Math.PI/2)
                    this.vy = this.speed*Math.sin(this.direction - rotation)*Math.sin(rotation + Math.PI/2)
                    //this.direction = //TODO: Here count the new direction. It is weird, however it does it on its own...;
                    this.x += this.vx;
                    this.y += this.vy;
                }                
            }

            class CanvasMovableObject extends CanvasStaticObject {
                constructor(object) {
                    super(object)
                }


                
            }


        class ItemInventory extends CanvasStaticObject {
            constructor() {
                super()
                this.x = 0;
                this.y = 0;
                //this.r = null;
                this.width = 200;
                this.height = playfieldHeight;
                this.fill = "darkgrey";
                this.objectsInInventory = [];
                this.type = "static";
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
        //Reset button functionality
            resetButton.addEventListener("click", (e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "block";
            });
        

        //Time functionality
            let timerInterval = setInterval( () => {
                if (!start) {
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
                    currentLevel = new Playfield(1)
                    currentLevel.createObjects(levelsInfo)
                },4000)
                setTimeout(()=>{
                    welcomeScreen.style.display = "none";
                    currentLevel.physicsEngineRun();
                },5000)
               
            })

        //Reset screen functionality
            resetConfirmButton.addEventListener("click",(e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "none";
                currentLevel.resetCurrentLevel(currentLevel.currentLevelNumber)
            });

            resetDeclineButton.addEventListener("click",(e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "none";
            });        
});