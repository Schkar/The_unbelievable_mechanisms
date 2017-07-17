document.addEventListener('DOMContentLoaded',function(){
    console.log("DOM loaded. Script is working");
    //Variables section

        //Temporary dev variables
            const creationButtom = document.querySelector(".temporaryGodlyCreationButton")

        //Temporary functions
            function creo(){

            }

        //Buttons variables
            const resetButton = document.querySelector(".resetButton");
            const resetConfirmButton = document.querySelector(".resetConfirmButton");
            const resetDeclineButton = document.querySelector(".resetDeclineButton");

        //Reset screen variable

            const resetConfirmScreen = document.querySelector(".resetConfirmWrapper");

        //Timer variable
            const timer = document.querySelector(".timer");
            let seconds = "00";
            let minutes = "00";
            let hours = "00";
            let currentTime = hours+":"+minutes+":"+seconds;
            timer.innerText = currentTime;

        //Canvas variables

            const playfield = document.querySelector(".playfield");
            const playfieldContext = playfield.getContext("2d");
            const playfieldWidth = playfield.width;
            const playfieldHeight = playfield.height;

    //Playfield objects classes
        class Playfield {
            constructor(){
                this.currentLevel = 1;
                //TODO: Think about how to store info on levels.
                this.levelInfo = {
                    1: [

                    ],
                    2: [

                    ],
                    3: [

                    ],
                    4: [

                    ],
                    5: [

                    ],
                    6: [

                    ],
                    7: [

                    ],
                    8: [

                    ],
                    9: [

                    ],
                    10: [

                    ]
                };
                this.currentLevelObjects = [];
            }

            createObjects = (x,y,width,height,fill,type) =>{
                console.log("creating");
                if (type === "static") {
                    let tempObject = new CanvasStaticObject(x,y,width,height,fill);
                    this.currentLevelObjects.push(tempObject)
                    //FIXME: Check if this works... Need dynamic variables?

                }
                let tempObject = new CanvasMovingObject(x,y,width,height,fill)
                this.currentLevelObjects.push(tempObject)
                
            }

            resetCurrentLevel = (level) => {
                playfieldContext.clearRect(0,0,playfieldWidth,playfieldHeight);
            }
        }


        class CanvasObject {
            constructor(x,y,width,height,fill) {
                x = this.x;
                y = this.y;
                width = this.width;
                height = this.height;
                fill = this.fill;
                init = () =>{
                    playfieldContext.fillStyle(this.fill)
                    playfieldContext.fillRect(this.x,this.y,this.width,this.height);
                }
            }
            //FIXME: Check how init works...
            init()
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

        class ItemRepository extends CanvasStaticObject {
            constructor() {
                super()
                this.x = 0;
                this.y = 0;
                this.width = 200;
                this.height = playfieldHeight;
                this.fill = "darkgrey";
            }

            createRepository = () =>{
                console.log("ItemRepository->createRepository");
                playfieldContext.fillStyle=this.color;
                playfieldContext.fillRect(this.x,this.y,this.width,this.height);
            }
        }
        
        //Test repository creation
        // playfieldContext.fillStyle="darkgrey";
        // playfieldContext.fillRect(0,0,200,playfieldHeight);
            let repository = new ItemRepository()
            console.log(repository);
            repository.createRepository()
        //Test falling rectangle
            // playfieldContext.fillStyle="#00ff00";
            // playfieldContext.fillRect(300,0,100,200);
            // let y = 0;
        //Test gravity function
            // function whatever(){
            //     playfieldContext.clearRect(300,0,1000,600);
            //     playfieldContext.fillRect(300,y,100,200);
                
            //     if (y === playfieldHeight - 200) {
            //         y = playfieldHeight - 200;
            //         return;
            //     }
            //     y++
            // }

        //setInterval(whatever,50);
    //Reset button functionality
        resetButton.addEventListener("click", (e) => {
            e.preventDefault();
            resetConfirmScreen.style.display = "block";
        });
    

    //Time functionality
        //TODO: create function to show time in timer

    //Reset screen functionality
        resetConfirmButton.addEventListener("click",(e) => {
            e.preventDefault()
            resetConfirmScreen.style.display = "none";
            //TODO: Reset whole canvas to beggining. Must be an variable to hold initial state? Or just start function - this might be better
        });

        resetDeclineButton.addEventListener("click",(e) => {
            e.preventDefault()
            resetConfirmScreen.style.display = "none";
        });

});