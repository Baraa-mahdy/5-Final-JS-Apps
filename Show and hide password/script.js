let password = document.getElementById("password");
let eyeicon = document.getElementById("eyeicon");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "/Show and hide password/images/show.png";
    } else{
        password.type = "password";
        eyeicon.src = "/Show and hide password/images/hide.png";
    }
}