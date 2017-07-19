document.addEventListener('DOMContentLoaded',function(){
    console.log("DOM loaded. Script is working");
    //Variables section

        //Temporary dev variables
            const creationButton = document.querySelector(".temporaryGodlyCreationButton")
            let tempID = null
        //Temporary dev functions

            function dupa(){
                console.log("fafafafafa");
                tempID = requestAnimationFrame(dupa);
            }

            creationButton.addEventListener("click",function(e){
                e.preventDefault()
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
                    this.currentLevelNumber = (level === undefined ? 1 : level);
                    this.currentLevelObjects = {};
                    this.gravityValue = 0.5;
                }

                createObjects = (objects) =>{
                    let inventory = new ItemInventory;
                    inventory.createCanvasObject();
                    this.currentLevelObjects["inventory"] = inventory;
                    objects["level"+this.currentLevelNumber].forEach( (e) => {
                        
                        if (e.type === "static") {
                            let tempObject = new CanvasStaticObject(e.x,e.y,e.width,e.height,e.fill,e.type);
                            tempObject.createCanvasObject()
                            this.currentLevelObjects[e.name] = tempObject;
                            return;
                        }
                        let tempObject = new CanvasMovingObject(e.x,e.y,e.width,e.height,e.fill,e.type,e.velocity,e.direction);
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
                    //TODO: Collisions checker
                    //console.log("collisionCheck");
                }

                gravity = () => {

                    //TODO: Think - is this one is better, or a check in every single object (by calling a method?) - this needs only one raf, so it seems that is better. Either this, or calling a method, no many rafs.

                    Object.keys(this.currentLevelObjects).forEach( (e) => {
                        let obj = this.currentLevelObjects[e];
                        if (obj.type === "kinetic"){
                            if (obj.y + obj.height === playfieldHeight){
                                obj.y = obj.y;
                                return;
                            }
                            obj.y = obj.y + this.gravityValue;
                            playfieldContext.clearRect(obj.x,obj.y-1,obj.width,obj.height);
                            playfieldContext.fillStyle=obj.fill
                            playfieldContext.fillRect(obj.x,obj.y,obj.width,obj.height);
                        }
                    })
                    //TODO: Gravity check
                }
            }
        //Arch-class - object prototype
            class CanvasObject {
                constructor(x,y,width,height,fill,type) {
                    this.x = x;
                    this.y = y;
                    this.width = width;
                    this.height = height;
                    this.fill = fill;
                    this.type = type;
                }

                createCanvasObject = () =>{
                    playfieldContext.fillStyle=this.fill;
                    playfieldContext.fillRect(this.x,this.y,this.width,this.height);
                }
            }
        
            class CanvasStaticObject extends CanvasObject {
                constructor(x,y,width,height,fill,type) {
                    super(x,y,width,height,fill,type)
                }
            }

            class CanvasMovingObject extends CanvasObject {
                constructor(x,y,width,height,fill,type) {
                    super(x,y,width,height,fill,type)
                }

                gravity = () =>{
                    if (this.y === playfieldHeight - this.height) {
                        this.y = playfieldHeight - this.height;
                        return;
                    }
                    this.y = this.y + 1;
                    playfieldContext.clearRect(this.x,this.y,this.width,this.height);
                    playfieldContext.fillRect(this.x,this.y,this.width,this.height);
                    window.requestAnimationFrame(this.gravity);
                }
            }

        class ItemInventory extends CanvasStaticObject {
            constructor() {
                super()
                this.x = 0;
                this.y = 0;
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