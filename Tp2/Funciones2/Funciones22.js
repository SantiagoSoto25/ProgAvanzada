// Definir la función "obtenerUsuarios" para que devuelva una promesa con los usuarios
function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        });
}

function imprimirNombresDeUsuarios() {
    obtenerUsuarios()
        .then(usuarios => {
            let nombres = usuarios.map(usuario => usuario.name);
            console.log(nombres);
        })
        .catch(error => {
            console.error('Error al obtener los nombres de los usuarios:', error);
        });
}

imprimirNombresDeUsuarios();