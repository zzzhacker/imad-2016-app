

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function () {
        if(request.readystate ===XMLHttpRequest.Done){
            if(request.status===200){
                console.log('login sucessful');
                alert('you are logged in');
            }else if(request.status===403){
                alert('username/passowrd incorrect');
            }else if(request.status===500){
                alert('sommething went wrong on server');
            }
        }
    };
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    request.open('POST','http://zzzhacker.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username : username,password : password}));
};