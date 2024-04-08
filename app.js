

function guardar_localstorage(){
    let profesional={
        Nombre:"Fernando",
    }




    localStorage.setItem("profesional", nombre)
}

// Función para guardar el experto en localStorage
function guardarExperto() {
    var nombre = document.getElementById("nombre").value;
    var reseña = document.getElementById("reseña").value;

    if (nombre.trim() !== "" && reseña.trim() !== "") {
        var experto = {
            nombre: nombre,
            reseña: reseña
        };

        // Obtener expertos previamente guardados o inicializar un array vacío
        var expertosGuardados = JSON.parse(localStorage.getItem("expertos")) || [];
        // Agregar el nuevo experto al array
        expertosGuardados.push(experto);
        // Guardar el array actualizado en localStorage
        localStorage.setItem("expertos", JSON.stringify(expertosGuardados));

        // Limpiar los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("reseña").value = "";

        // Actualizar la lista de expertos mostrada en la página
        mostrarExpertos();
    } else {
        alert("Por favor, introduce el nombre del experto y una reseña.");
    }
}

// Función para mostrar los expertos almacenados en localStorage
function mostrarExpertos() {
    var expertosGuardados = JSON.parse(localStorage.getItem("expertos")) || [];

    var expertosHTML = "";
    for (var i = 0; i < expertosGuardados.length; i++) {
        expertosHTML += "<div>";
        expertosHTML += "<h3>" + expertosGuardados[i].nombre + "</h3>";
        expertosHTML += "<p>" + expertosGuardados[i].reseña + "</p>";
        expertosHTML += "</div>";
    }

    document.getElementById("expertosGuardados").innerHTML = expertosHTML;
}

// Mostrar los expertos al cargar la página
mostrarExpertos();

$(document).ready(function() {
    // Obtener reseñas del profesional con AJAX
    $.ajax({
        url: 'obtener_reseñas.php',
        method: 'GET',
        data: { id_profesional: 123 }, // ID del profesional
        success: function(reseñas) {
            // Mostrar reseñas en el elemento con id "reseñas"
            $('#reseñas').html(reseñas);
        },
        error: function() {
            console.log('Error al obtener las reseñas del profesional.');
        }
    });
});

/*Redirigir búsqueda profesionales*/ 

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var searchTerm = document.getElementById("search-input").value;
    
    var redirectURL = "file:///C:/Users/Jennifer/Desktop/PROYECTO%20DAW/profesionales.html" + encodeURIComponent(searchTerm);
    
    window.location.href = redirectURL;
});