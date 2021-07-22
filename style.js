var EnterFlag = false;
var obj = document.getElementById("cal-disp");


function key(n){
    obj.value += n;
}

function enter(){
  obj.value = eval(obj.value);
  EnterFlag = true;
}

function reset(){
  obj.value="";
}