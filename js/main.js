document.addEventListener('DOMContentLoaded',function(){
    //Variables section
        //Buttons variables
            const resetButton = document.querySelector(".resetButton");
            const resetConfirmButton = document.querySelector(".resetConfirmButton");
            const resetDeclineButton = document.querySelector(".resetDeclineButton");

        //Reset screen variable

            const resetConfirmScreen = document.querySelector(".resetConfirmWrapper");

        //Timer variable
            const timer = document.querySelector(".timer");

        //Canvas variables

            const playfield = document.querySelector(".playfield");
            const playfieldContext = playfield.getContext("2d");
            const playfieldWidth = playfield.width;
            const playfieldHeight = playfield.height;

    //Playfield objects constant values
        class CanvasObject {
            constructor(x,y,width,height,fill) {
                x = this.x;
                y = this.y;
                width = this.width;
                height = this.height;
                fill = this.fill;
            }
        }

        class ItemRepository extends CanvasObject {
            constructor(x,y,width,height,fill) {
                super(x,y,width,height,fill)
            }
        }
        
        playfieldContext.fillStyle="darkgrey";
        playfieldContext.fillRect(0,0,200,playfieldHeight);
        playfieldContext.fillStyle="#00ff00";
        playfieldContext.fillRect(300,0,100,200);
        let y = 0;

        function whatever(){
            playfieldContext.clearRect(300,0,1000,600);
            playfieldContext.fillRect(300,y,100,200);
            
            if (y === playfieldHeight - 200) {
                y = playfieldHeight - 200;
                return;
            }
            y++
        }

        setInterval(whatever,50);
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