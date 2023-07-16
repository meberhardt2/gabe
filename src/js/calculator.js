/*************************************************************/
var title = "calculator project";
var header = "A Simple Calculator1";
var number_pushed;
/*************************************************************/


/*************************************************************/
function init(){
	document.getElementById('title').innerHTML = title;
	document.getElementById('calculator-header').innerHTML = header;
}
/*************************************************************/


/*************************************************************/
function button_click(element){
	//console.log(this.innerHTML);
	//getting number that was clicked or tapped
	number_pushed = this.innerHTML;
}
/*************************************************************/


function equals(){
	console.log(number_pushed);
}


/*************************************************************/
init();

document.getElementsByClassName('calc-number')[0].addEventListener('click', button_click);
document.getElementsByClassName('calc-number')[1].addEventListener('click', button_click);
document.getElementsByClassName('calc-number')[2].addEventListener('click', button_click);
document.getElementsByClassName('calc-number')[3].addEventListener('click', button_click);
document.getElementsByClassName('calc-number')[4].addEventListener('click', button_click);
document.getElementsByClassName('calc-number')[5].addEventListener('click', button_click);
document.getElementsByClassName('calc-number')[6].addEventListener('click', button_click);
document.getElementsByClassName('calc-number')[7].addEventListener('click', button_click);
document.getElementsByClassName('calc-number')[8].addEventListener('click', button_click);
document.getElementsByClassName('calc-number')[9].addEventListener('click', button_click);

document.getElementsByClassName('calc-function')[4].addEventListener('click', equals);
/*************************************************************/

