/* Arreglos: Una colección de elementos */
/* Cada elemento ocupa una posición
y se conoce como índice y comienza en 0 */

let arr = [1,2,3,4];
console.log(arr);

//Propiedades - describen
//métodos _ acciones que puede realizar

console.log(arr[2]);
arr[4] = 190;
arr[4] = "Hola";
console.log(arr);

/* métodos de arreglos */

const arreglo = ["adiós"];

//push() permite agregar al final del arreglo
arreglo.push(2);
arreglo.push(true);

let num = 500;
arreglo.push(num);

console.log(arreglo);

/* unshift()  */
//Agrega elementos al inicio del arreglo

arreglo.unshift("A");
arreglo.unshift("B");
console.log(arreglo);

console.log(typeof(arreglo[4]));

//Métodos para quitar elementos
//pop()
//quita un elemento del final del arreglo

let dato1 = arreglo.pop();
console.log(dato1);

console.log(arreglo);

//shift()
//Quitar un elemento del inicio del arreglo

let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

//splice()
//quita una parte de cualquier posición de nuestro arreglo

arreglo.splice(1, 0, "pastel", 568980); //el segundo argumento es la cantidad, y el tercer elemento es para agregar elementos

console.log(arreglo);

//Modifican el arreglo original

/* ********************************* */

/* Métodos que no modifican el arreglo original, hacen una copia, modifican esa copia*/

/* slice()- cortar partes de un arreglo */

let dato3 = arreglo.slice(0, 2);

//slice (posición a partir de la cual va a cortar)
console.log(dato3);
console.log(arreglo);








