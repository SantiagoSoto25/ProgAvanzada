async function enviarDatos(data) {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resultado = await respuesta.json();
        console.log('Respuesta de la API:', resultado);
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}
