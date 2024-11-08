function generarToken(usuario) {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };
    
    const payload = {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
    };
    
    const base64Header = btoa(JSON.stringify(header));
    const base64Payload = btoa(JSON.stringify(payload));

    return `${base64Header}.${base64Payload}`;
}

const usuario = {
    id: 1,
    nombre: 'Santiago Soto',
    email: 'santiago@example.com'
};

const token = generarToken(usuario);
console.log('Token JWT simulado:', token);
