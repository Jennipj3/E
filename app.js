

// Datos iniciales de expertos
const expertosIniciales = [
    { nombre: "Ángel Luis Pérez García",
     especialidad: "Médico General",
     tarifa: "50€", 
     disponibilidad:"Lunes a Viernes, de 8:00 a 15:00", 
     direccion:"Calle Gran Vía, 1, 28013, Madrid, España",
    telefono:"645857126",
    correo:"docalperez@gmail.com",
    resena:"El doctor Ángel Luis es una excelencia en su especialidad. Trato inmejorable, tanto personal como profesionalmente.",
},

    { nombre: "Ana Gómez Juarez", 
    especialidad: "Abogada", 
    tarifa: "50€",
     disponibilidad:"Lunes a Viernes, de 8:00 a 15:00", 
     direccion:"Calle Serrano Ochoa, 25, 28013, Madrid, España",
     telefono: "912556879",
     correo:"bufanagomez@gmail.com"},

    { nombre: "Carlos Ruiz González",
     especialidad: "Veterinario",
     tarifa: "30€",
     disponibilidad:"Lunes a Viernes, de 8:00 a 15:00 y de 17:00 a 20:00", 
    direccion:"Calle Pedro Luengo, 3, 10500, Talayuela, Extremadura, España",
    telefono: "685497219",
    correo: "carlosruizvet@gmail.com",
    resena: "Carlos es un experto compasivo y dedicado.",
},
];

if (!localStorage.getItem('expertos')) {
    localStorage.setItem('expertos', JSON.stringify(expertosIniciales));
}

else {
    console.log("Expertos cargados: ", localStorage.getItem('expertos'));
}
 
function buscarExperto() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const expertos = JSON.parse(localStorage.getItem('expertos'));
    const resultado = expertos.filter((experto) => experto.especialidad.toLowerCase().includes(input));

    const displayArea = document.getElementById('resultado');
    displayArea.innerHTML = ''; 

    resultado.forEach(experto => {
        const div = document.createElement('div');
        div.innerHTML = `<h2>${experto.nombre}</h2>
        <p>Especialidad: ${experto.especialidad}</p>
        <p>Tarifa: ${experto.tarifa}</p>
        <p>Disponibilidad: ${experto.disponibilidad}</p>
        <p>Dirección: ${experto.direccion}</p>
        <p>Telef<ono: ${experto.telefono}</p>
        <p>Correo: ${experto.correo}</p> 
        <p>Reseña: ${experto.resena}</p> `
        displayArea.appendChild(div);
    });

    

    if (resultado.length === 0) {
        displayArea.innerHTML = '<p>No se encontraron expertos.</p>';
    }
}

//Registro profesionales
function guardarExperto() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var especialidad = document.getElementById('especialidad').value;
    var tarifa = document.getElementById('tarifa').value;
    var disponibilidad = document.getElementById('disponibilidad').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var resena = document.getElementById('resena').value;
  
    // Crear un objeto con los datos del nuevo profesional
    var nuevoProfesional = {
      nombre: nombre,
      especialidad: especialidad,
      tarifa: tarifa,
      disponibilidad: disponibilidad,
      direccion: direccion,
      telefono: telefono,
      correo: correo,
      resena: resena,
      
    };
  
    // Obtener la lista actual de profesionales del localStorage
    var profesionales = JSON.parse(localStorage.getItem('expertos')) || [];
  
    // Añadir el nuevo profesional a la lista
    profesionales.push(nuevoProfesional);
  
    // Guardar la lista actualizada en el localStorage
    localStorage.setItem('expertos', JSON.stringify(profesionales));
  
   
    document.getElementById('formRegistro').reset();
  
    alert('Profesional registrado con éxito!');
  }

  //Página 2 Blog
  function guardarExperto() {
  
    var nombreExperto = document.getElementById('nombre').value;
    var reseñaExperto = document.getElementById('reseña').value;
    var ratingExperto = document.querySelector('input[name="rating"]:checked')?.value; 
  
    // Crear un objeto para guardar la información del experto
    var experto = {
      nombre: nombreExperto,
      reseña: reseñaExperto,
      rating: ratingExperto
    };
  
 
    var expertosGuardados = JSON.parse(localStorage.getItem('expertos')) || [];
  
   
    expertosGuardados.push(experto);
  
   
    localStorage.setItem('expertos', JSON.stringify(expertosGuardados));
  
    
    document.getElementById('nombre').value = '';
    document.getElementById('reseña').value = '';
    if (ratingExperto) {
      document.querySelector('input[name="rating"]:checked').checked = false;
    }
  
    alert('Opinión guardada con éxito');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.querySelector('button');
    saveButton.onclick = guardarExperto; 
  });

  //Página 3 Contacto
  document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('formQuejas');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío tradicional del formulario

        // Crear un objeto con los datos del usuario
        var datos = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            mensaje: document.getElementById('mensaje').value,
            fecha: new Date().toISOString() // Guardar la fecha y hora de envío
        };

       
        var quejas = JSON.parse(localStorage.getItem('quejas')) || [];
        quejas.push(datos); 
        localStorage.setItem('quejas', JSON.stringify(quejas)); 

        alert('Gracias por tu mensaje. ¡Lo valoramos mucho!');
        form.reset(); 
    });
});


