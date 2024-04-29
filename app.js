

// Datos iniciales de expertos
const expertosIniciales = [
    { nombre: "Ángel Luis Pérez García",
     especialidad: "Médico General",
     tarifa: "50€", 
     disponibilidad:"Lunes a Viernes, de 8:00 a 15:00", 
     dirección:"Calle Gran Vía, 1, 28013, Madrid, España",
    telefono:"645857126",
    correo:"docalperez@gmail.com",
    reseña:"El doctor Ángel Luis es una excelencia en su especialidad. Trato inmejorable, tanto personal como profesionalmente.",
},

    { nombre: "Ana Gómez Juarez", 
    especialidad: "Abogada", 
    tarifa: "50€",
     disponibilidad:"Lunes a Viernes, de 8:00 a 15:00", 
     dirección:"Calle Serrano Ochoa, 25, 28013, Madrid, España",
     telefono: "912556879",
     correo:"bufanagomez@gmail.com"},

    { nombre: "Carlos Ruiz González",
     especialidad: "Veterinario",
     tarifa: "30€",
     disponibilidad:"Lunes a Viernes, de 8:00 a 15:00 y de 17:00 a 20:00", 
    dirección:"Calle Pedro Luengo, 3, 10500, Talayuela, Extremadura, España",
    telefono: "685497219",
    correo: "carlosruizvet@gmail.com",
    reseña: "Carlos es un experto compasivo y dedicado.",
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
        <p>Dirección: ${experto.dirección}</p>
        <p>Teléfono: ${experto.telefono}</p>
        <p>Correo: ${experto.correo}</p> 
        <p>Reseña: ${experto.reseña}</p> `
        displayArea.appendChild(div);
    });

    

    if (resultado.length === 0) {
        displayArea.innerHTML = '<p>No se encontraron expertos.</p>';
    }
}

//Registro profesionales
function registrarProfesional() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var especialidad = document.getElementById('especialidad').value;
    var tarifa = document.getElementById('tarifa').value;
    var disponibilidad = document.getElementById('disponibilidad').value;
    var dirección = document.getElementById('dirección').value;
    var teléfono = document.getElementById('teléfono').value;
    var correo = document.getElementById('correo').value;
    var reseña = document.getElementById('reseña').value;
  
    // Crear un objeto con los datos del nuevo profesional
    var nuevoProfesional = {
      nombre: nombre,
      especialidad: especialidad,
      tarifa: tarifa,
      disponibilidad: disponibilidad,
      dirección: dirección,
      telefono: telefono,
      correo: correo,
      reseña: reseña,
      
    };
  
    // Obtener la lista actual de profesionales del localStorage
    var profesionales = JSON.parse(localStorage.getItem('expertos')) || [];
  
    // Añadir el nuevo profesional a la lista
    profesionales.push(nuevoProfesional);
  
    // Guardar la lista actualizada en el localStorage
    localStorage.setItem('expertos', JSON.stringify(profesionales));
  
    // Limpiar el formulario
    document.getElementById('formRegistro').reset();
  
    // Opcional: Mostrar un mensaje de éxito o actualizar la interfaz
    alert('Profesional registrado con éxito!');
  }