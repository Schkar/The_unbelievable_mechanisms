document.addEventListener('DOMContentLoaded',function(){
    console.log("DOM loaded. Script is working");
    //Variables section

        //Temporary dev variables
            const creationButton = document.querySelector(".temporaryGodlyCreationButton");
            let testplayfield = null;
            const testLevel = {
                level1: [
                    {name: "movingObject",x:450,y:150,r:null, width:100,height:30,fill:"red",type:"static", velocity: 0, direction: 0, isCollided: false, rotation: 0},
                    {name: "staticObject",x:600,y:300,r:null,width:80,height:30,fill:"green",type:"static", velocity: 0, direction: 0, isCollided: false, rotation: 0},
                    {name: "someCircle",x:500,y:15,r:10,fill:"blue",type:"kinetic", velocity: 0, direction: 0, isCollided: false, rotation: 0}
                ]
            }

        //Temporary dev functions

            creationButton.addEventListener("click",function(e){
                e.preventDefault()
                testplayfield = new Playfield()
                testplayfield.createObjects(testLevel);
                testplayfield.logCurrentLevelObjects();
                testplayfield.physicsEngineRun();
                
                
                //tempID = requestAnimationFrame(dupa);
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

        //RqAnimFrame ID
            
            let engineID = null;

        //Levels data
            
            const levelsInfo = {
                level1: [
                    {name: "something",x:400,y:0,width:100,height:100,fill:"red",type:"kinetic"},
                    {name: "somethingelse",x:600,y:0,width:100,height:100,fill:"green",type:"kinetic", velocity: 0, direction: 0 }
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
            

        //Canvas functions
            
            playfield.addEventListener("click",(e) => {
                
            })

    //Playfield objects classes
        //Demiurge - main object, creator of objects, physics engine, collision detector
            class Playfield {
                constructor(level){
                    this.currentLevelNumber = level || 1;
                    this.currentLevelObjects = {};
                    this.gravityValue = 0.5; //
                }

                createObjects = (objects) =>{
                    let inventory = new ItemInventory;
                    inventory.createCanvasObject();
                    this.currentLevelObjects["inventory"] = inventory;
                    objects["level"+this.currentLevelNumber].forEach( (e) => {
                        
                        if (e.type === "static") {
                            let tempObject = new CanvasStaticObject(e.x,e.y,e.r,e.width,e.height,e.fill,e.type,e.rotation);
                            tempObject.createCanvasObject()
                            this.currentLevelObjects[e.name] = tempObject;
                            return;
                        }
                        let tempObject = new CanvasMovingObject(e.x,e.y,e.r,e.width,e.height,e.fill,e.type,e.velocity,e.direction,e.isCollided);
                        tempObject.createCanvasObject()
                        this.currentLevelObjects[e.name] = tempObject;
                    }); 
                }

                resetCurrentLevel = (level) => {
                    playfieldContext.clearRect(0,0,playfieldWidth,playfieldHeight);
                    this.currentLevelObjects = {};
                    this.createObjects(levelsInfo);
                    console.log("resetCurrentLevel");
                }
                
                getClickCoords = (e) => {
                    let xCoord = Math.round((e.clientX - playfield.getBoundingClientRect().x - 2)*10)/10; //Formula for canvas click coords - works well
                    let yCoord = Math.round((e.clientY - playfield.getBoundingClientRect().y - 2)*10)/10;
                    console.log(xCoord,yCoord);
                }

                logCurrentLevelObjects = () => {
                    console.log(this.currentLevelObjects);
                }

                physicsEngineRun = () => {
                    this.collisionCheck();
                    this.gravity();
                    engineID = requestAnimationFrame(this.physicsEngineRun);
                }

                collisionCheck = () => {
                    Object.keys(this.currentLevelObjects).forEach( (e) => {
                        let colider = this.currentLevelObjects[e];
                        if (colider.type === "static" || e === "inventory"){
                            return;
                        }
                        Object.keys(this.currentLevelObjects).forEach( (e2) => {
                            if (e2 === "inventory") {
                                return;
                            }
                            let colidee = this.currentLevelObjects[e2];
                            if ((colidee.x <= (colider.x - colider.r)) && (colidee.x + colidee.width >= (colider.x + colider.r)) ) {
                                if (colider.y + colider.r === colidee.y) {
                                    colider.isCollided = true;
                                    return;
                                }
                                colider.isCollided = false;
                            }
                        })
                    })
                    //TODO: Collisions checker
                    //console.log("collisionCheck");
                }
// BOUNCER - IF COLLISION TRUE THEN IF ROTATION = 45 THEN VELOCITY = grav.value, direction = 45 < !!!!!!!!!!!
                gravity = () => {

                    //TODO: Think - is this one is better, or a check in every single object (by calling a method?) - this needs only one raf, so it seems that is better. Either this, or calling a method, no many rafs.

                    Object.keys(this.currentLevelObjects).forEach( (e) => {
                        let obj = this.currentLevelObjects[e];

                        if (obj.type === "static" || e === "inventory") {
                            return;
                        }

                        if ((obj.y + obj.height === playfieldHeight || obj.y + obj.r === playfieldHeight) || obj.isCollided){
                                obj.y = obj.y;
                                return;
                        }

                        if (obj.velocity < this.gravityValue) {
                            obj.velocity = obj.velocityChange(obj.velocity);
                        }
                        obj.y = (obj.velocity === this.gravityValue) ? Math.round(obj.y + obj.velocity) : obj.y + obj.velocity;

                        if (obj.r===null){
                            playfieldContext.clearRect(obj.x,obj.y-1,obj.width,obj.height);
                            playfieldContext.fillStyle=obj.fill;
                            playfieldContext.fillRect(obj.x,obj.y,obj.width,obj.height);
                            return
                        }
                        playfieldContext.arc(obj.x, obj.y-1.5, obj.r+1.5, 0, Math.PI*2, true);
                        playfieldContext.fillStyle = "white";
                        playfieldContext.fill();
                        playfieldContext.beginPath();
                        playfieldContext.arc(obj.x,obj.y,obj.r,0,2*Math.PI);
                        playfieldContext.fillStyle = obj.fill;
                        playfieldContext.fill();
                        playfieldContext.closePath();
                    })
                }
            }
        //Arch-class - object prototype
            class CanvasObject {
                constructor(x,y,r,width,height,fill,type,velocity,direction,isCollided,rotation) {
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
                }

                createCanvasObject = () =>{
                    if (this.r !== null) {
                        playfieldContext.beginPath();
                        playfieldContext.arc(this.x,this.y,this.r,0,2*Math.PI);
                        playfieldContext.fillStyle = this.fill;
                        playfieldContext.fill();
                        playfieldContext.closePath();
                        return;
                    }
                    playfieldContext.fillStyle=this.fill;
                    playfieldContext.fillRect(this.x,this.y,this.width,this.height);
                }

            }
        
            class CanvasStaticObject extends CanvasObject {
                constructor(x,y,r,width,height,fill,type,rotation) {
                    super(x,y,r,width,height,fill,type,rotation)
                }
            }

            class CanvasMovingObject extends CanvasObject {
                constructor(x,y,r,fill,type,velocity,direction,isCollided) {
                    super(x,y,r,fill,type,velocity,direction,isCollided)
                }

                velocityChange = (velocity) =>{
                    velocity = velocity + 0.005;
                    return Math.round(velocity*1000)/1000;
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

/*You can detect Rectangle vs Circle collisions like this using this Rectangle vs Circle collision-test code:

    // return true if the rectangle and circle are colliding
    // rect and circle are a rectangle and a circle as defined above

    function RectCircleColliding(rect,circle){
        var dx=Math.abs(circle.x-(rect.x+rect.w/2));
        var dy=Math.abs(circle.y-(rect.y+rect.y/2));

        if( dx > circle.r+rect.w2 ){ return(false); }
        if( dy > circle.r+rect.h2 ){ return(false); }

        if( dx <= rect.w ){ return(true); }
        if( dy <= rect.h ){ return(true); }

        var dx=dx-rect.w;
        var dy=dy-rect.h
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