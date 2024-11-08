function sumarElementos(array) {
    return array.reduce(function(acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0);
}

let numeros = [1, 2, 3];

let suma = sumarElementos(numeros);
console.log(suma);