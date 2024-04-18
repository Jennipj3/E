

// Datos iniciales de expertos
const expertosIniciales = [
    { nombre: "Ángel Luis Pérez García", especialidad: "Médico General", tarifa: "50€", disponibilidad:"Lunes a Viernes, de 8:00 a 15:00", dirección:"Calle Gran Vía, 1, 28013, Madrid, España" },
    { nombre: "Ana Gómez Juarez", especialidad: "Abogada", tarifa: "50€", disponibilidad:"Lunes a Viernes, de 8:00 a 15:00", dirección:"Calle Serrano Ochoa, 25, 28013, Madrid, España" },
    { nombre: "Carlos Ruiz González", especialidad: "Veterinario", tarifa: "30€", disponibilidad:"Lunes a Viernes, de 8:00 a 15:00 y de 17:00 a 20:00", dirección:"Calle Pedr Luengo, 3, 10500, Talayuela, Extremadura, España" },
];

if (!localStorage.getItem('expertos')) {
    localStorage.setItem('expertos', JSON.stringify(expertosIniciales));
}

function buscarExperto() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const expertos = JSON.parse(localStorage.getItem('expertos'));
   // const resultado = expertos.filter(experto => experto.nombre.toLowerCase().includes(input));
    const resultado = expertos.filter((experto) => experto.especialidad.toLowerCase().includes(input));

    const displayArea = document.getElementById('resultado');
    displayArea.innerHTML = ''; 

    resultado.forEach(expertosIniciales => {
        const div = document.createElement('div');
        div.innerHTML = `<h2>${experto.nombre}</h2><p>Especialidad: ${experto.especialidad}</p><p>Tarifa: ${experto.tarifa}</p><p>Disponibilidad: ${experto.disponibilidad}</p><p>Dirección: ${experto.dirección}`
        displayArea.appendChild(div);
    });

    if (resultado.length === 0) {
        displayArea.innerHTML = '<p>No se encontraron expertos.</p>';
    }
}

