document.addEventListener('DOMContentLoaded',function(){
    console.log("DOM loaded. Script is working");
    //Variables section

        //Temporary dev variables
            const creationButton = document.querySelector(".temporaryGodlyCreationButton")

        //Temporary dev functions

            creationButton.addEventListener("click",function(e){
                e.preventDefault()
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

        //Levels data
            
            const levelsInfo = {
                level1: [
                    {name: "something",x:400,y:0,width:100,height:100,fill:"red",type:"static"},
                    {name: "somethingelse",x:600,y:0,width:100,height:100,fill:"green",type:"moving"}
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

        //Canvas variables

            const playfield = document.querySelector(".playfield");
            const playfieldContext = playfield.getContext("2d");
            const playfieldWidth = playfield.width;
            const playfieldHeight = playfield.height;

    //Playfield objects classes
        class Playfield {
            constructor(level){
                this.currentLevel = (level === undefined ? 1 : level);
                this.currentLevelObjects = {};
            }

            createObjects = (objects) =>{
                let inventory = new ItemInventory;
                inventory.createCanvasObject();
                this.currentLevelObjects["inventory"] = inventory;
                objects["level"+this.currentLevel].forEach( (e) => {
                    if (e.type === "static") {
                        let tempObject = new CanvasStaticObject(e.x,e.y,e.width,e.height,e.fill);
                        tempObject.createCanvasObject()
                        this.currentLevelObjects[e.name] = tempObject;
                        return;
                    }
                    let tempObject = new CanvasMovingObject(e.x,e.y,e.width,e.height,e.fill);
                    tempObject.createCanvasObject()
                    this.currentLevelObjects[e.name] = tempObject;
                }); 
                
            }

            logCurrentLevelObjects = () => {
                console.log(this.currentLevelObjects);
            }

            resetCurrentLevel = (level) => {
                playfieldContext.clearRect(0,0,playfieldWidth,playfieldHeight);
            }
        }

        class CanvasObject {
            constructor(x,y,width,height,fill) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.fill = fill;
            }

            createCanvasObject = () =>{
                playfieldContext.fillStyle=this.fill;
                playfieldContext.fillRect(this.x,this.y,this.width,this.height);
            }
        }

        class CanvasStaticObject extends CanvasObject {
            constructor(x,y,width,height,fill) {
                super(x,y,width,height,fill)
            }
        }

        class CanvasMovingObject extends CanvasObject {
            constructor(x,y,width,height,fill) {
                super(x,y,width,height,fill)
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
        //Level display
            


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
                    let currentLevel = new Playfield(1)
                    currentLevel.createObjects(levelsInfo)
                    currentLevel.logCurrentLevelObjects();
                },4000)
                setTimeout(()=>{
                    welcomeScreen.style.display = "none";
                },5000)
                
            })

        //Reset screen functionality
            resetConfirmButton.addEventListener("click",(e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "none";
                currentLevel.resetCurrentLevel(currentLevel.currentLevel)
                //TODO: Reset whole canvas to beggining. Must be an variable to hold initial state? Or just start function - this might be better
            });

            resetDeclineButton.addEventListener("click",(e) => {
                e.preventDefault();
                resetConfirmScreen.style.display = "none";
            });

    //Objects creation
        

});