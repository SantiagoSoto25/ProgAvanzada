let numeros = [-1, 5, 9, 3, 6];

let todosSonPositivos = numeros.every(function(num) {
    return num > 0;
});

console.log(todosSonPositivos);