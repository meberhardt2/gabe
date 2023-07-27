var settings = {
    guesses_left: 20,
    title: 'Guessing game',
};


/****************************/
function setup(){
    document.getElementById('title').innerHTML = settings.title;
    document.getElementById('how-many-tries').innerHTML = settings.guesses_left;

    document.getElementById('guess').addEventListener('click',check_number);

}
/****************************/


/****************************/
function check_number(){
    var guessed_number = document.getElementById('guessing-number').value;
    console.log(guessed_number);
}
/****************************/





/****************************/
setup();

/****************************/