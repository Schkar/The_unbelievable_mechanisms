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

    //Reset button functionality
        resetButton.addEventListener("click", (e) => {
            e.preventDefault();
            resetConfirmScreen.style.display = "block";
        });
    

    //Time functionality

    //Reset screen functionality
        resetConfirmButton.addEventListener("click",(e) => {
            e.preventDefault()
            //TODO: Reset whole canvas to beggining. Must be an variable to hold initial state? Or just start function - this might be better
        });

        resetDeclineButton.addEventListener("click",(e) => {
            e.preventDefault()
            resetConfirmScreen.style.display = "none";
        });

});