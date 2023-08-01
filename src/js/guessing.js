var settings = {
    guesses_left: 20,
    title: 'Guessing game',
    R_Num: 0
};


/****************************/
function setup(){
    document.getElementById('title').innerHTML = settings.title;
    document.getElementById('how-many-tries').innerHTML = settings.guesses_left;

    document.getElementById('guess').addEventListener('click',check_number);

    settings.R_Num = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    console.log(settings.R_Num)
}
/****************************/


/****************************/
function check_number(){
    var guessed_number = document.getElementById('guessing-number').value;

    if(parseInt(guessed_number,10) === parseInt(settings.R_Num,10)){
        document.getElementById('message').innerHTML = 'You won! The number was ' + settings.R_Num; 
    }
   
    if(guessed_number < settings.R_Num){
        document.getElementById('message').innerHTML = "You're too low";
        settings.guesses_left = settings.guesses_left - 1;
        document.getElementById('how-many-tries').innerHTML = settings.guesses_left;
    }
    
    if(guessed_number > settings.R_Num){
        document.getElementById('message').innerHTML = "You're too high"; 
        settings.guesses_left = settings.guesses_left - 1;
        document.getElementById('how-many-tries').innerHTML = settings.guesses_left;
    }
    if(settings.guesses_left === 0){
        document.getElementById('guess').disabled = true;
        document.getElementById('message').innerHTML = "You've lost!"; 
    }
    document.getElementById('guessing-number').focus()
}
/****************************/





/****************************/
setup();

/****************************/