var button=document.getElementBuId('counter');
var counter=0;
button.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function () {
        if(request.readystate ===XMLHttpRequest.Done){
            if(request.status==200){
                var counter=request.responseText();
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    }
    request.open('GET','http://zzzhacker.imad.hasura-app.io/counter',true);
    request.send(null);
};