function procesarArray(arr, funcion) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(funcion(arr[i]));
    }
    return resultado;
}

function multiplicarPorDos(num) {
    return num * 2;
}

let numeros = [1, 2, 3, 4, 5];
let resultado = procesarArray(numeros, multiplicarPorDos);

console.log(resultado);
