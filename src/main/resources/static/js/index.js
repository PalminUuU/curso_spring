$(document).ready(function() {
    const credenciales =localStorage.getItem("token")
    if (credenciales == null){
        window.location.href ='login.html';
    }else{
    }
});
