const display = document.getElementById("display");
function appendtodisplay(input){
    var inp = input
    display.value += input;
}
function cleardisplay(){
    display.value = "";

}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="error"
    }
}
function popdisplay(){
    display.value = display.value.toString().slice(0,-1)
}
function percetage(){
    present.value = percemt.value / 100
}