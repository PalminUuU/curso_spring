$(document).ready(function() {
    cargar_usuarios()
});

async function cargar_usuarios(){
        const request = await fetch('api/usuarios', {
            method: 'GET',
            headers: getHeader()
        });
        const content = await request.json();

    $("#dataTable").DataTable({
        data: content,
        scrollX: false,
        autoWidth: true,
        fixedColumns: true,
        fixedHeader: true,
        retrieve: true,
        columns: [
            { data: "id" },
            { data: "nombre" },
            { data: "apellidos" },
            { data: "email" },
            { data: "telefono" },
            {
                data: null,
                render: function (data, type, row) {
                    return "<a href='#' id='"+data.id+"' class='btn btn-danger btn-circle btn-sm'><i class='fas fa-trash'></i></a>";
                }
            }
        ],
        language: {url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'},
        dom: "Bfrtip",
        buttons: ["csvHtml5"],
    });

}

$("#el").on("click", "a", function(event) {
    var id = $(this).attr("id");
    eliminar_usuario(id);
});

async function eliminar_usuario (id){
    if(!confirm('¿Desea Elminar Este Usuario?')){
        return;
    }
    const request = await fetch('api/usuarios/' +id, {
        method: 'DELETE',
        headers: getHeader()
    });
   location.reload()
}

function getHeader (){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    }
}