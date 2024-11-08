function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(usuarios => {
            console.log(usuarios);
        })
        .catch(error => {
            console.error('Error al obtener los usuarios:', error);
        });
}

obtenerUsuarios();