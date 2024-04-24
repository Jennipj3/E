

// Datos iniciales de expertos
const expertosIniciales = [
    { nombre: "Ángel Luis Pérez García",
     especialidad: "Médico General",
     tarifa: "50€", 
     disponibilidad:"Lunes a Viernes, de 8:00 a 15:00", 
     dirección:"Calle Gran Vía, 1, 28013, Madrid, España",
    teléfono: "645857126", },

    { nombre: "Ana Gómez Juarez", 
    especialidad: "Abogada", 
    tarifa: "50€",
     disponibilidad:"Lunes a Viernes, de 8:00 a 15:00", 
     dirección:"Calle Serrano Ochoa, 25, 28013, Madrid, España",
     teléfono: "912556879",},

    { nombre: "Carlos Ruiz González",
     especialidad: "Veterinario",
     tarifa: "30€",
     disponibilidad:"Lunes a Viernes, de 8:00 a 15:00 y de 17:00 a 20:00", 
    dirección:"Calle Pedr Luengo, 3, 10500, Talayuela, Extremadura, España",
    teléfono: "685497219",},
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
        <p>Teléfono: ${experto.teléfono}</p>`
        displayArea.appendChild(div);
    });

    

    if (resultado.length === 0) {
        displayArea.innerHTML = '<p>No se encontraron expertos.</p>';
    }
}

