console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new value"
var img=document.getElementById("madi");
var marginleft=0;
function moveRight(){
    marginleft=marginleft+1;
    log.style.marginleft=marginleft+"px";
}
log.onclick=fuction(){
    var interval=setInterval(moveRight,50)
}