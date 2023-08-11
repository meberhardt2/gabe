/*********************************/
var speed = '';

/*********************************/
if(speed === 1){
    setTimeout(clicky(), 1000);
}

if(speed === 0.1){
    setTimeout(clicky(), 1);
}
/*********************************/
function speed_selection(){
    for(var i = 0; i < document.getElementsByClassName('speed-number'.length) ;i++){
        document.getElementsByClassName('speed-number')['i'].addEventListener('click', number_click);
        speed = 'speed-number';}  
}
/*********************************/
function clicky(){
    element.click(1)
}
/*********************************/
speed_selection();
/*********************************/
