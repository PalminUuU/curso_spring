$("#iniciar_sesion").click(function () {
    if ($("#txt_email").val() == ""){
        alert("Existen Datos Vacios")
    }else{
        if ($("#txt_password").val() == ""){
            alert("Existen Datos Vacios")
        }else{
            iniciarSesion()
        }
    }
})

async function iniciarSesion(){

    let datos = {};
    datos.email = $("#txt_email").val();
    datos.password = $("#txt_password").val();

    const request = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    const content = await request.text();

    if (content != "FAIL"){
        localStorage.token= content;
        localStorage.email=  datos.email;
        window.location.href ='usuarios.html';
    }else{
        alert("Credenciales incorrectas")
    }
}