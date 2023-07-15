/*************************************************************/
var title = "calculator project";
var header = "A Simple Calculator";
/*************************************************************/


/*************************************************************/
function init(){
	document.getElementById('title').innerHTML = title;
	document.getElementById('calculator-header').innerHTML = header;
}
/*************************************************************/


/*************************************************************/
function button_click(element){
	console.log(this.innerHTML);
}
/*************************************************************/



/*************************************************************/
init();

document.getElementsByClassName('calc-number')[0].addEventListener('click', button_click);
/*************************************************************/

