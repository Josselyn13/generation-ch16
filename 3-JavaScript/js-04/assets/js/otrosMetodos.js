console.log(sumar(5,7));

//Método sort()
//Permite ordenar los elementos de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"];

arr.sort();
console.log(arr);

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
arr2.sort();
console.log(arr2);

/* Solo sirve para el inicio de los número */
const arr3 = [5, 1231, 567, 1, 80];
arr3.sort((a,b) => a - b); //ordena números de mayor a menor
arr3.sort((a,b) => b - a); //ordena números de menor a mayor
console.log(arr3);

//función declarada
//hosting
//proceso de reacomodo automático del código
//ocupa el console log de arriva
function sumar(a, b) {
    return a + b;
    
}
console.log(sumar(5,7));

let a = 2;
console.log(a);

//función expresada
//hoisting no funciona
const multiplicar = function(a,b) {
    return a * b;

    
}
console.log(multiplicar(3,5));


//funciones flecha
const dividir = (a,b) => {
    return a / b;
}
console.log(dividir(10, 2));

//forEach()
//un ciclo que recorre en automático todo nuestro arreglo
const arrNumeros = [1,4,6,8,10,20,30];
/* for normal */
/* for (let i = 0; i< arrNumeros.length; i++){
    arrNumeros[i] = arrNumeros[i] * 2;
}
 */

 arrNumeros.forEach((elemento) => console.log(elemento *= 2)); //elemento = elemento * 2




