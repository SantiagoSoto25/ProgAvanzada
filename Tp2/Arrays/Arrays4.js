function elevarAlCuadrado(array) {
    return array.map(function(num) {
        return num * num;
    });
}

let numeros = [1, 2, 3, 4, 5];

let numerosAlCuadrado = elevarAlCuadrado(numeros);
console.log(numerosAlCuadrado); 