/*************************************************************/
var title = "calculator project";
var header = "A Simple Calculator1";
var number_pushed1 = '';
var number_pushed2 = '';
var what_step = 'step1';
/*************************************************************/


/*************************************************************/
function init(){
	document.getElementById('title').innerHTML = title;
	document.getElementById('calculator-header').innerHTML = header;
}
/*************************************************************/


/*************************************************************/
function number_click(element){
	//console.log(this.innerHTML);
	//getting number that was clicked or tapped
	if(what_step === 'step1'){
		number_pushed1 = number_pushed1 + this.innerHTML;
		display_change(number_pushed1);	
	}

	if(what_step === 'step2'){
		number_pushed2 = number_pushed2 + this.innerHTML;
		display_change(number_pushed2);	
	}
}
/*************************************************************/


/*************************************************************/
function calc_functions(){
	var function_pushed = this.innerHTML;
	
	if (function_pushed === '+'){
		what_step = 'step2';
	}
	if (function_pushed === '-'){
		what_step = 'step2';

	}
	if (function_pushed === '*'){
		what_step = 'step2';

	}
	if (function_pushed === '/'){
		what_step = 'step2';

	}
	if (function_pushed === '='){

	}
	if (function_pushed === 'C'){
		number_pushed1 = '';
		number_pushed2 = '';
		what_step = 'step1';
		display_change('0');
	}
}
/*************************************************************/


/*************************************************************/
function addlistener(){
	for(var i = 0; i < document.getElementsByClassName('calc-number').length; i++){
		document.getElementsByClassName('calc-number')[i].addEventListener('click', number_click);
	}

	for(var x = 0; x < document.getElementsByClassName('calc-function').length; x++){
		document.getElementsByClassName('calc-function')[x].addEventListener('click',calc_functions);
	}
}
/*************************************************************/

/**************************************************************/
function display_change(display_number){
	document.getElementById('number-display').innerHTML = display_number;
}
/**************************************************************/



/*************************************************************/
init();
addlistener();
/*************************************************************/

