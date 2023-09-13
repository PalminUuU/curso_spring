$("#registrar").click(function () {
    if ($("#txt_nombre").val() == ""){
        alert("Existen Datos Vacios")
    }if ($("#txt_apellido").val() == ""){
        alert("Existen Datos Vacios")
    }if ($("#txt_telefono").val() == ""){
        alert("Existen Datos Vacios")
    }if ($("#txt_email").val() == ""){
        alert("Existen Datos Vacios")
    }if ($("#txt_password").val() == ""){
        alert("Existen Datos Vacios")
    }if ($("#txt_password").val() != $("#txt_password_confirm").val()){
        alert("Las Contraseñas no coinciden")
    }else{
        registrarUsuarios()
    }
})

async function registrarUsuarios(){

    let datos = {};
    datos.nombre = $("#txt_nombre").val();
    datos.apellidos = $("#txt_apellido").val();
    datos.telefono = $("#txt_telefono").val();
    datos.email = $("#txt_email").val();
    datos.password = $("#txt_password").val();

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    reload()
}

function reload(){
    alert("Registro Exitoso")
    window.location.href ='login.html';
}