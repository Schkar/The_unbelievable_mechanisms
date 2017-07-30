document.addEventListener('DOMContentLoaded',function(){
    console.log("DOM loaded. Script is working");
    //No mobile function
    let checkMobile = false;
    window.mobilecheck = function() {
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) checkMobile = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return checkMobile;
    };
    if (checkMobile) {
        document.querySelector(".noMobile").style.display = "block";
        document.querySelector(".welcomeTextWrapper").style.display = "none";
        document.querySelector(".startLevelButton").disabled = true;
        document.querySelector(".resetButton").disabled = true;
    }



    //Variables section

        //Temporary dev variables
            const creationButton = document.querySelector(".temporaryGodlyCreationButton");
            //let currentLevel = null;
            const testLevel = {
                // level1: [
                //     {
                //         name: "staticObject1",
                //         position: {x:450, y:150},
                //         data: {width:100, height:30, rotation: 0, color:"red", type:"static", isMovable: true},
                //     },
                //     {
                //         name: "staticObject2",
                //         position: {x:600, y:300}, 
                //         data:{width:80, height:30, rotation: 0, color:"green", type:"static"},
                //     },
                //     {
                //         name: "someCircle",
                //         position:{x:442, y:15},
                //         data:{r:10, color:"blue", type:"kinetic"},
                //         motion: {speed: 0, vx: 0, vy:0, isCollided: false}
                //     }
                // ],
                level1: [
                    {
                        name: "aBall",
                        position: {x: 810, y: 200},
                        data: {r: 30, color: "green", type: "kinetic", source: "../images/basketball.png"},
                        motion: {speed: 2, vx: 0, vy: 0, direction: 135, isCollided: false}
                    },
                    {
                        name: "staticObject1",
                        position: {x:505, y:250}, 
                        data: {width:170, height:30, rotation: 0, color:"red", type:"static", isMovable: true, isDragged: false, source: "../images/barrier.png"},
                    },
                    {
                        name: "staticObject2",
                        position: {x:125, y:100}, 
                        data: {width:170, height:30, rotation: 0, color:"red", type:"static", isMovable: true, isDragged: false, source: "../images/plank1.png"},
                    },
                    {
                        name: "staticObject3",
                        position: {x:425, y:300}, 
                        data: {width:170, height:30, rotation: 0, color:"red", type:"static", isMovable: true, isDragged: false, source: "../images/plank2.png"},
                    },
                    {
                        name: "goal",
                        position: {x:700, y:290},
                        data: {width: 200, height: 100, isMovable: false, source: "../images/wheelbarrow.png"}
                    }
                ]
            }


            
        //Temporary dev functions

            creationButton.addEventListener("click",function(e){
                e.preventDefault()

                
                
                currentLevel = new Playfield()
                currentLevel.createObjects(testLevel);
                currentLevel.physicsEngineRun()
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
            const winTimer = document.querySelector(".winTimer")
            let seconds = 0;
            let minutes = 0;
            let hours = 0;
            let start = false;

        //AnimFrame IDs
            
            let engineID = null;

        //Levels data
            
            const levelsInfo = {
                level1: [
                    {
                        name: "aBall",
                        position: {x: 810, y: 200},
                        data: {r: 30, color: "green", type: "kinetic", source: "../images/basketball.png"},
                        motion: {speed: 2, vx: 0, vy: 0, direction: 135, isCollided: false}
                    },
                    {
                        name: "staticObject1",
                        position: {x:705, y:250}, 
                        data: {width:170, height:30, rotation: 0, color:"red", type:"static", isMovable: true, isDragged: false, source: "../images/barrier.png"},
                    },
                    {
                        name: "staticObject2",
                        position: {x:125, y:100}, 
                        data: {width:170, height:30, rotation: 0, color:"red", type:"static", isMovable: true, isDragged: false, source: "../images/plank1.png"},
                    },
                    {
                        name: "staticObject3",
                        position: {x:425, y:300}, 
                        data: {width:170, height:30, rotation: 0, color:"red", type:"static", isMovable: true, isDragged: false, source: "../images/plank2.png"},
                    },
                    {
                        name: "goal",
                        position: {x:800, y:290},
                        data: {width: 200, height: 100, rotation: 0, color:"red", type:"static", isMovable: false, source: "../images/wheelbarrow.png"}
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
            let difTime = 0;
            let previousTime = 0;
            let objectBeingDragged = "";
            let levelWon = false;

        //Canvas functions
            
            playfield.addEventListener("mousedown",(e) => {
                xClick = Math.round((e.clientX - playfield.getBoundingClientRect().x - 2)*10)/10; //Formula for canvas click coords - works well
                yClick = Math.round((e.clientY - playfield.getBoundingClientRect().y - 2)*10)/10;
                currentLevel.moveObject(e)
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

                physicsEngineRun = (time) => {
                    if (levelWon) {
                        return;
                    }
                    this.clearCanvas()
                    Object.keys(this.currentLevelObjects).forEach( (object) => {
                        if (this.currentLevelObjects[object].type === "static") {
                           return; 
                        }
                        this.currentLevelObjects[object].movement(time)
                        this.currentLevelObjects[object].wallCollisionCheck()
                        this.currentLevelObjects[object].collisionCheck()
                        this.currentLevelObjects[object].checkIfWin()
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
                    this.source = object.data.source
                    this.name = object.name
                }

                createCanvasObject = () =>{
                    let image = new Image();
                    image.src = this.source;
                    if (this.r !== undefined) {
                        // image.addEventListener("load", function(e){
                        //     playfieldContext.drawImage(this, object.x, object.y, object.r, object.r)
                        // },true)
                        
                        // playfieldContext.beginPath();
                        // playfieldContext.arc(this.x,this.y,this.r,0,2*Math.PI);
                        // // playfieldContext.fillStyle = "black";
                        // // playfieldContext.fill();
                        // playfieldContext.closePath();
                        playfieldContext.drawImage(image,this.x-this.r,this.y-this.r,2*this.r,2*this.r)
                        return;
                    }
                    if (this.rotation !== 0) {
                        playfieldContext.save();
                        playfieldContext.translate(this.x,this.y);
                        playfieldContext.beginPath()
                        playfieldContext.rotate(this.rotation*(Math.PI/180));
                        playfieldContext.fillStyle=this.color;
                        
                        playfieldContext.fillRect(-this.width,-this.height,this.width,this.height);
                        if (this.isDragged) {
                            playfieldContext.strokeStyle="black";
                            playfieldContext.lineWidth = 4;
                            playfieldContext.strokeRect(-this.width,-this.height,this.width,this.height); 
                        }
                        playfieldContext.closePath()
                        playfieldContext.translate(this.x,this.y);
                        playfieldContext.restore();
                        return;
                    }
                    if (this.isDragged) {
                        //playfieldContext.clearRect(this.x -1, this.y - 1,this.width + 2, this. height + 2)
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
        
            class CanvasStaticObject extends CanvasObject {
                constructor(object) {
                    super(object)
                    this.width = object.data.width
                    this.height = object.data.height
                    this.rotation = object.data.rotation 
                    this.isMovable = object.data.isMovable
                    this.isDragged = object.data.isDragged
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

                    if ((this.x <= xClick && this.x + this.width >= xClick)&&(this.y <= yClick && this.y + this.height >= yClick)) {
                        this.isDragged = true;
                        prevxClick = xClick;
                        prevyClick = yClick;
                        objectBeingDragged = this.name;
                        this.dragger()
                    }
                    
                }

                dragger = () => {
                    //console.log(this.isDragged);
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
                    this.gravityValue = 0.01
                }

                checkIfWin = () => {
                    console.log(engineID);
                    let temp = currentLevel.currentLevelObjects["goal"];
                    let goalX = currentLevel.currentLevelObjects["goal"].x + currentLevel.currentLevelObjects["goal"].width/3
                    let goalY = currentLevel.currentLevelObjects["goal"].y + currentLevel.currentLevelObjects["goal"].height/3
                    if (this.x >= goalX  && this.y >= goalY) {
                        levelWon = true;
                        window.cancelAnimationFrame(engineID);
                        document.querySelector(".winScreen").style.display = "block";
                        playfieldContext.clearRect(0,0,playfieldWidth,playfieldHeight);
                    }
                }

                countInitialVectors = () => {
                    this.vx = Math.cos(this.direction*(Math.PI/180));
                    this.vy = Math.sin(this.direction*(Math.PI/180));
                }

                movement = (time) => {
                    this.speed = this.speed - 0.001;
                    if (this.speed < 0) {
                        this.speed = 0
                    }
                    //console.log(this.vx,this.vy, "movement");
                    
                    
                    this.x = this.x + (this.vx*this.speed*this.speed);
                    this.vy = this.vy + this.gravityValue;
                    this.y = this.y + (this.vy*this.speed*this.speed);
                    previousTime = time;
                }

                wallCollisionCheck = () => {
                    //FIXME: Check them - it sticks to left and right wall... probably because degrees
                        // Wall collision check: 
                        // Left wall
                        if (this.x - this.r <= 0) {
                            //  console.log("lw");
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
                            this.y = 400 - this.r;
                            this.bouncer(0)
                        }
                }

                collisionCheck = () => {
                    //FIXME: Nie działa na boczne ścianki! Dunno why.


                    
                    Object.keys(currentLevel.currentLevelObjects).forEach( (object) => {
                        let colidee = currentLevel.currentLevelObjects[object];
                        if (colidee.name === "inventory" || colidee.name === this.name || colidee.name === "goal"){
                            return;
                        }



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
                            this.gravityValue = 0.01;
                            return; 
                        }

                        //is collision on Y-axis?
                        if( dy > this.r+colidee.height/2 ){
                            this.isCollided = false;
                            this.gravityValue = 0.01;
                            return; 
                        }

                        // collision on X-axis
                        if( dx <= colidee.width ){
                            this.isCollided = true;
                            this.bouncer(colidee.rotation)
                            this.gravityValue = 0;
                            return; 
                        }

                        // collision on Y-axis
                        if( dy <= colidee.height ){
                            this.isCollided = true;
                            this.bouncer(colidee.rotation)
                            this.gravityValue = 0;
                            return; 
                        }

                        dx=dx-colidee.width;
                        dy=dy-colidee.height;
                        return(dx*dx+dy*dy<=this.r*this.r);
                    })
                }

                bouncer = (rotation) => {

                    this.vx = this.speed*((this.vx/(Math.sqrt(this.vx*this.vx+this.vy*this.vy)))*(Math.cos(rotation*(Math.PI/180)))+(this.vy/(Math.sqrt(this.vx*this.vx+this.vy*this.vy)))*(Math.sin(rotation*(Math.PI/180))))*(Math.cos(rotation*(Math.PI/180)))+this.speed*((this.vy/(Math.sqrt(this.vx*this.vx+this.vy*this.vy)))*(Math.cos(rotation*(Math.PI/180)))-(this.vx/(Math.sqrt(this.vx*this.vx+this.vy*this.vy)))*(Math.sin(rotation*(Math.PI/180))))*(Math.cos(rotation*(Math.PI/180)-Math.PI/2));

                    this.vy = this.speed*((this.vx/(Math.sqrt(this.vx*this.vx+this.vy*this.vy)))*(Math.cos(rotation*(Math.PI/180)))+(this.vy/(Math.sqrt(this.vx*this.vx+this.vy*this.vy)))*(Math.sin(rotation*(Math.PI/180))))*(Math.sin(rotation*(Math.PI/180)))+this.speed*((this.vy/(Math.sqrt(this.vx*this.vx+this.vy*this.vy)))*(Math.cos(rotation*(Math.PI/180)))-(this.vx/(Math.sqrt(this.vx*this.vx+this.vy*this.vy)))*(Math.sin(rotation*(Math.PI/180))))*(Math.sin(rotation*(Math.PI/180)-Math.PI/2)) + this.gravityValue;

                    this.speed = this.speed - this.speed*this.gravityValue;
                    if (this.speed < 0) {
                        this.speed = 0;
                    }
                   //console.log(this.vx,this.vy, "bouncer");
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
                    currentLevel = new Playfield(1)
                    currentLevel.createObjects(levelsInfo)
                },4000)
                setTimeout(()=>{
                    welcomeScreen.style.display = "none";
                    currentLevel.physicsEngineRun();
                    engineID = requestAnimationFrame(currentLevel.physicsEngineRun)
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