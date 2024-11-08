let numeros = [4, 8, 11, 7, 2];

let hayMayorQueDiez = numeros.some(function(num) {
    return num > 10;
});

console.log(hayMayorQueDiez);