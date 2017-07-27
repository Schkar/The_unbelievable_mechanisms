document.addEventListener('DOMContentLoaded',function(){
    console.log("DOM loaded. Script is working");
    //Variables section

        //Temporary dev variables
            const creationButton = document.querySelector(".temporaryGodlyCreationButton");
            let testplayfield = null;
            const testLevel = {
                level1: [
                    {
                        name: "movingObject",
                        position: {x:450, y:150},
                        data: {width:100, height:30, rotation: 0, color:"red", type:"static"},
                        motion:{value: 0, direction: 0, Vx: 0, Vx: 0, isCollided: false}
                    },
                    {
                        name: "staticObject",
                        position: {x:600, y:300}, 
                        data:{width:80, height:30, rotation: 0, color:"green", type:"static"},
                        motion:{value: 0, direction: 0, Vx: 0, Vy: 0, isCollided: false}
                    },
                    {
                        name: "someCircle",
                        position:{x:442, y:15},
                        data:{r:10, color:"blue", type:"kinetic"},
                        motion: {value: 0, direction: 0, Vx: 0, Vy:0, isCollided: false}
                    }
                ]
            }

        //Temporary dev functions
            function step(timestamp) {
                console.log(Math.floor(timestamp));
                requestAnimationFrame(step);
            }

            let timeNow = 0;
            let timePrevious = 0;

            creationButton.addEventListener("click",function(e){
                e.preventDefault()
                //requestAnimationFrame(step)
                testplayfield = new Playfield()
                testplayfield.createObjects(testLevel);
                testplayfield.logCurrentLevelObjects();
                 testplayfield.physicsEngineRun();
                //testplayfield.logCurrentLevelObjects();
                testplayfield.physicsEngineRun();
                
                
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
                    //let inventory = new ItemInventory;
                    //inventory.createCanvasObject();
                    //this.currentLevelObjects["inventory"] = inventory;
                    objects["level"+this.currentLevelNumber].forEach( (object) => {
                        console.log(object);
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

                resetCurrentLevel = (level) => {
                    playfieldContext.clearRect(0,0,playfieldWidth,playfieldHeight);
                    this.currentLevelObjects = {};
                    this.createObjects(levelsInfo);
                    console.log("resetCurrentLevel");
                }
                
                getClickCoords = (click) => {
                    let xCoord = Math.round((click.clientX - playfield.getBoundingClientRect().x - 2)*10)/10; //Formula for canvas click coords - works well
                    let yCoord = Math.round((click.clientY - playfield.getBoundingClientRect().y - 2)*10)/10;
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
                    Object.keys(this.currentLevelObjects).forEach( (object1) => {
                        let colider = this.currentLevelObjects[object1];
                        colider = colider.currentObject
                        if (colider.type === "static" || object1 === "inventory"){
                            return;
                        }
                        Object.keys(this.currentLevelObjects).forEach( (object2) => {
                            if (object2 === "inventory") {
                                return;
                            }
                            let colidee = this.currentLevelObjects[object2];
                            colidee = colidee.currentObject
                            let dx=Math.abs(colider.position.x-(colidee.position.x+colidee.data.width/2));
                            let dy=Math.abs(colider.position.y-(colidee.position.y+colidee.data.height/2));
                            //console.log(dx);
                            //console.log(dy);

                            if( dx > colider.data.r+colidee.data.width/2 ){
                                return(false); 
                            }

                            if( dy > colider.data.r+colidee.data.height/2 ){ 
                                return(false); 
                            }

                            if( dx <= colidee.data.width ){
                                console.log("collision on X-axis")
                                colider.motion.isCollided = true;
                                return(true); 
                            }

                            if( dy <= colidee.data.height ){
                                console.log("collision on Y-axis")
                                colider.motion.isCollided = true;
                                return(true); 
                            }

                            dx=dx-colidee.data.width;
                            dy=dy-colidee.data.height;
                            return(dx*dx+dy*dy<=colider.data.r*colider.data.r);
                        })
                    })
                    //TODO: Collisions checker
                    //console.log("collisionCheck");
                }

                gravity = () => {

                    //TODO: Think - is this one is better, or a check in every single object (by calling a method?) - this needs only one raf, so it seems that is better. Either this, or calling a method, no many rafs.

                    Object.keys(this.currentLevelObjects).forEach( (object) => {
                        let obj = this.currentLevelObjects[object];
                        obj = obj.currentObject
                        let thisobj = this.currentLevelObjects[object];
                        console.log(obj);
                        if (obj.data.type === "static" || object === "inventory") {
                            return;
                        }

                        if ((obj.position.y + obj.data.height === playfieldHeight || obj.position.y + obj.data.r === playfieldHeight) || obj.motion.isCollided){
                                obj.position.y = obj.position.y;
                                return;
                        }

                        if (obj.motion.value < this.gravityValue) {
                            obj.motion.value = thisobj.velocityChange(obj.motion.value);
                        }
                        obj.position.y = (obj.motion.value === this.gravityValue) ? Math.round(obj.position.y + obj.motion.value) : obj.position.y + obj.motion.value;

                        if (obj.data.r===null){
                            playfieldContext.clearRect(obj.position.x,obj.position.y-1,obj.data.width,obj.data.height);
                            playfieldContext.fillStyle=obj.data.color;
                            playfieldContext.fillRect(obj.position.x,obj.position.y,obj.data.width,obj.data.height);
                            return
                        }
                        playfieldContext.arc(obj.position.x, obj.position.y-1.5, obj.data.r+1.5, 0, Math.PI*2, true);
                        playfieldContext.fillStyle = "white";
                        playfieldContext.fill();
                        playfieldContext.beginPath();
                        playfieldContext.arc(obj.position.x,obj.position.y,obj.data.r,0,2*Math.PI);
                        playfieldContext.fillStyle = obj.data.color;
                        playfieldContext.fill();
                        playfieldContext.closePath();
                    })
                }
            }
        //Arch-class - object prototype
            class CanvasObject {
                constructor(object) {
                    this.currentObject = object
                }

                createCanvasObject = () =>{
                    //console.log(this.currentObject);
                    if (this.currentObject.data.r !== undefined) {
                        playfieldContext.beginPath();
                        playfieldContext.arc(this.currentObject.position.x,this.currentObject.position.y,this.currentObject.data.r,0,2*Math.PI);
                        playfieldContext.fillStyle = this.currentObject.data.color;
                        playfieldContext.fill();
                        playfieldContext.closePath();
                        return;
                    }
                    playfieldContext.fillStyle=this.currentObject.data.color;
                    playfieldContext.fillRect(this.currentObject.position.x,this.currentObject.position.y,this.currentObject.data.width,this.currentObject.data.height);
                }

            }
        
            class CanvasStaticObject extends CanvasObject {
                constructor(object) {
                    super(object)
                }
            }

            class CanvasMovingObject extends CanvasObject {
                constructor(object) {
                    super(object)
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