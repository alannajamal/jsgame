var character = document.getElementById("character"); 
var block = document.getElementById("block");
function jump(){
    character.classList.add("animate");
    setTimeout(function(){character.classList.remove("animate")},500);
}
var checkDead = setInterval (function(){

},10);