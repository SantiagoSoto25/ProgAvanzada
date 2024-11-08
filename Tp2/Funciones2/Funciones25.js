function validarFormulario({ nombre, email, password }) {
    return nombre.trim() !== '' && email.trim() !== '' && password.trim() !== '';
}

let formularioValido = {
    nombre: "Santiago Soto",
    email: "santi@gmail.com",
    password: "santi"
};

let formularioCampoVacio = {
    nombre: "Santiago Soto",
    email: "",
    password: "santi"
};

console.log(validarFormulario(formularioValido));
console.log(validarFormulario(formularioCampoVacio));