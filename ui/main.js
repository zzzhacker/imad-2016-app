


var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function () {
        if(request.readystate ===XMLHttpRequest.Done){
            if(request.status===200){
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    list +='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }
    };
    var username=document.getElementById("username").value();
    var password=document.getElementById("password").value();
    request.open('POst','http://zzzhacker.imad.hasura-app.io/login',true);
    request.send(JSON.stringify({username :username,password: password}));
    
};