

function miFuncion(a, b) {
    return(a + b);
    
}
let resultado =miFuncion( 3, 6);
console.log("El resultado es: "+ resultado);


/* Función expresión, no tiene nombre*/
let suma = function (a, b) {
    return(a + b)
};

let caracteres = suma(2, 3);
console.log("La suma es: "+ caracteres);

let resta = function (a, b) {
    return(a - b)
};

let caracteres1 = resta(2, 3);
console.log("La resta es: "+ caracteres1);

let producto = function (a, b) {
    return(a * b)
};

let caracteres2 = producto(2, 3);
console.log("El producto es: "+ caracteres2);


let div = function (a, b) {
    return(a / b)
};

let caracteres3 = div(10, 5);
console.log("El cociente es: "+ caracteres3);


/* Función autollamada/ self invoking */
(function(a, b){
    console.log("El resultado es: "+ (a + b));
})(3,4);

