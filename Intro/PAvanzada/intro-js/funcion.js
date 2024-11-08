// function declaration

function saludar(nombre){
    console.log('Bienvenido ' + nombre)
}

saludar('Juan');

// function expression

const Cliente = function(nombreCliente){
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}

Cliente('Juan')

function actividad (nombre, actividad) {
    console.log('La persona $(nombre), esta realizando la actividad $(actividad) ');
}

actividad('Juan', 'Aprendiendo JavaScript');

