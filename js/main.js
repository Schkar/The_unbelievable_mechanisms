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
                    {
                        name: "aBall",
                        position: {x: 950, y: 200},
                        data: {r: 10, color: "green", type: "kinetic"},
                        motion: {speed: 5, direction: -15, vx: 0, vy:0, isCollided: false}
                    },
                    // {
                    //     name: "staticObject2",
                    //     position: {x:100, y:300}, 
                    //     data:{width:100, height:30, rotation: 45, color:"red", type:"static", isMovable: true, isDragged: false, isBeingRotated: false},
                    // }
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
            // let prevxMove = 0;
            // let prevyMove = 0;

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
                    this.gravityValue = 0.02; //
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
                        //this.currentLevelObjects[object].rotateMe();
                    });
                }

                logCurrentLevelObjects = () => {
                    console.log(this.currentLevelObjects);
                }

                physicsEngineRun = (time) => {
                    this.clearCanvas()
                    Object.keys(this.currentLevelObjects).forEach( (object) => {
                        if (this.currentLevelObjects[object].type === "static") {
                           return; 
                        }
                        this.currentLevelObjects[object].movement(time)
                        this.currentLevelObjects[object].wallCollisionCheck()
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
                    if (this.rotation !== 0) {
                        playfieldContext.save();
                        playfieldContext.translate(this.x + this.width/2,this.y + this.height/2);
                        playfieldContext.rotate(this.rotation*(Math.PI/180));
                        playfieldContext.fillStyle=this.color;
                        
                        playfieldContext.fillRect(-this.width/2,-this.height/2,this.width,this.height);
                        if (this.isDragged) {
                            playfieldContext.strokeStyle="red";
                            playfieldContext.lineWidth = 4;
                            playfieldContext.strokeRect(-this.width/2,-this.height/2,this.width,this.height); 
                        }
                        //playfieldContext.translate(-(this.x + this.width/2),-(this.y + this.height/2));
                        playfieldContext.restore();
                        return;
                    }
                    if (this.isDragged) {
                        playfieldContext.strokeStyle="red";
                        playfieldContext.lineWidth = 4;
                        playfieldContext.strokeRect(this.x,this.y,this.width,this.height); 
                    }
                    // if (this.isBeingRotated) {
                    //     playfieldContext.strokeStyle="blue";
                    //     playfieldContext.lineWidth = 4;
                    //     playfieldContext.strokeRect(this.x,this.y,this.width,this.height); 
                    // }
                    
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
                
                //FIXME: this.isBeingRotated must be put somewhere. Don't know where. This function is commented - will maybe work later
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
                    //         playfieldContext.rotate(this.rotation*(Math.PI/180));
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
                    this.name = object.name
                    this.r = object.data.r
                    this.speed = object.motion.speed
                    this.direction = object.motion.direction
                    this.vx = object.motion.vx
                    this.vy = object.motion.vy
                    this.isCollided = object.motion.isCollided
                }

                movement = (time) => {
                    if (this.speed < 0) {
                        this.speed = 0
                    }
                    this.vx = this.speed*Math.cos(this.direction*(Math.PI/180));
                    this.vy = this.speed*Math.sin(this.direction*(Math.PI/180)) + testplayfield.gravityValue;
                    // this.vx = Math.cos(this.direction*(Math.PI/180));
                    // this.vy = Math.sin(this.direction*(Math.PI/180));
                    //this.direction = (Math.atan(this.vy/this.vx))*(180/Math.PI)
                    //this.speed = this.speed - 0.001;
                    this.x = this.x + this.vx;
                    this.y = this.y + this.vy;
                }

                wallCollisionCheck = () => {
                    //FIXME: Check them - it sticks to left and right wall... probably because degrees
                        // Wall collision check: 
                        // Left wall
                        if (this.x - this.r <= 0) {
                             console.log("lw");
                            //this.x = 0 + this.r;
                            this.bouncer(90);
                        }

                        // Right wall
                        if (this.x + this.r >= 1000) {
                            // console.log("rw");
                            //this.x = 1000 - this.r;
                            this.bouncer(90)
                        }

                        // Ceiling
                        if (this.y - this.r <= 0) {
                            // console.log("cl");
                            //this.y = 0 + this.r;
                            this.bouncer(0)
                        }

                        // Floor
                        if (this.y + this.r >= 400) {
                            // console.log("fl");
                            //this.y = 400 - this.r;
                            this.bouncer(0)
                        }
                }

                collisionCheck = () => {
                    //FIXME: Obliczyć faktyczny x kolizji - trzeba go przesunąć o kąt względem środka (o ileś na x i ileś na y). Jeżeli blok jest obrócony o 45 stopni, to jego prawy X podnosi się o 1/2 h, a jego lewy x opuszcza się o tę wysokość


                    
                    Object.keys(testplayfield.currentLevelObjects).forEach( (object) => {
                        let colidee = testplayfield.currentLevelObjects[object];
                        if (colidee.name === "inventory" || colidee.name === this.name){
                            return;
                        }



                        // angle *= Math.PI / 180;

                        // var x2 = x1 + length * Math.cos(angle),
                        //     y2 = y1 + length * Math.sin(angle);

                        // ctx.moveTo(x1, y1);
                        // ctx.lineTo(x2, y2);
                        // ctx.stroke();

                        // return {x: x2, y: y2};
                        let rectX = colidee.x;
                        let rectY = colidee.y;
                        let rectXW2 = colidee.x + colidee.width/2
                        let rectYH2 = colidee.y + colidee.height/2
                        if (colidee.rotation !== 0) {
                            rectX = colidee.x + (colidee.width * Math.cos(colidee.rotation*Math.PI/180))
                            rectY = colidee.y + (colidee.height * Math.sin(colidee.rotation*Math.PI/180))
                            rectXW2
                            rectYH2 = rectX + rectXW2
                        }
                        //console.log(rectX,rectY);

                        let dx=Math.abs(this.x-(rectX+colidee.width/2));
                        let dy=Math.abs(this.y-(rectY+colidee.height/2));

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
                        if( dy <= colidee.height ){
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
                    //console.log(rotation);
                    this.vx = this.speed*Math.cos((this.direction - rotation)*Math.PI/180)*Math.cos(rotation*(Math.PI/180))+this.speed*Math.sin((this.direction - rotation)*Math.PI/180)*Math.cos(rotation*(Math.PI/180) - Math.PI/2);

                    this.vy = this.speed*Math.cos((this.direction - rotation)*Math.PI/180)*Math.sin(rotation*(Math.PI/180))+this.speed*Math.sin((this.direction - rotation)*Math.PI/180)*Math.sin(rotation*(Math.PI/180) - Math.PI/2);


                    //FIXME:  arctan zwraca kąty tylko od -90 do 90. Nie zwróci kąta wyższego od tych wartości! Wymyśleć rozwiązanie! To samo jest dla movementu!!!!! Jeżeli vx jest ujemny, to leci w ćwiartkę od -90,0000001 do -179,9999999 i od 90,0000001 do 179,999999999


                    
                    //TODO: Speed diffrence to do.
                    // this.speed =  this.speed - this.speed/20;
                    // if (this.speed < 0) {
                    //     this.speed = 0;
                    // }
                    
                    //console.log(this.vx,this.vy);
                    // this changes the direction when rotation and direction are both multiply of 90. This stays.

                    // if (Math.abs(this.vx) === 5 || Math.abs(this.vy) === 5) {
                    //     // if (this.direction === 0) {
                    //     //     this.direction = 180
                    //     // }
                    //     // else{
                    //         this.direction = -(this.direction)
                    //     // } 
                    // }
                    if (this.direction === 0 && rotation % 90 === 0) {
                        this.direction = 180
                    }
                    else if (this.direction % 90 === 0 && rotation % 90 === 0) {
                        this.direction = -this.direction
                    }
                    else if  (this.direction > 90) {
                        this.direction = -180 + (this.direction - 180) 
                    }
                    else if (this.direction < -90) {
                        this.direction = 180 - (this.direction + 180)
                    }
                    else if (this.direction > -90 && this.direction < 0 && this.vx < 0) {
                        this.direction = -180 + Math.abs(this.direction)
                    }
                    else if (this.direction < 90 && this.direction > 0 && this.vx < 0) {
                        this.direction = 180 - this.direction
                    }
                    else {
                        this.direction = Math.atan(this.vy/this.vx)*(180/Math.PI)
                    }
                    //this works for every bounce with vx > 0
                    //this.direction = (Math.atan(this.vy/this.vx))*(180/Math.PI)

                    //console.log(this.vx,this.vy,this.direction);
                    //direction: -15 (right wall)
                    //-0.9659258262890683 -0.25881904510252085 15.000000000000005
                    //-0.9659258262890683 0.25881904510252074 -14.999999999999998
                    //direction: 15 (right wall)
                    //-0.9659258262890683 -0.25881904510252085 15.000000000000005  
                    //-0.9659258262890683 0.25881904510252074 -14.999999999999998
                    //direction: 30 (right wall)
                    //-0.8660254037844385 -0.5000000000000002 30.000000000000018  
                    //-0.8660254037844385 0.5000000000000003 -30.000000000000025
                    //direction: 45 (right wall)
                    //-0.7071067811865476 -0.7071067811865475 45
                    //-0.7071067811865475 0.7071067811865476 -45.00000000000001
                    //direction: 60 (right wall)
                    //-0.5 -0.8660254037844387 60.00000000000001
                    //-0.4999999999999998 0.8660254037844387 -60.00000000000001

                    console.log(this.direction);
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