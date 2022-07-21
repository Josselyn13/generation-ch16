function saludar () {
    console.log("Hola mundo");
    
}
//saludar();

//Arreglos
//Empiezan a contar a partir del número 0

let num = [];
console.log(num);

//Forma menos usada
let arr1 = new Array();
console.log(arr1);

//Usar un arreglo

const arr = [1,2,3,4,5];
//Notación de corchetes
console.log(arr[3]);

arr[5] = 25;
arr[6] = 8;
arr[6] = 0;
//arr[7] = undefined
//arr[8] = undefined
//arr[9] = undefined
arr[10] = 40;
console.log(arr);

//Propiedades de los arreglos
//descripción de nuestro arreglo
console.log(arr.length);

//Métodos
//acciones que puede realizar un arreglo
const frutas = ["Manzana", "Plátano"]
console.log(frutas.length);

//push()
//agrega un valor al final del arreglo
let fruta = "Toronja"
frutas.push("Naranja");

console.log(frutas);

//pop()
//Quita un elemento del final del arreglo

let elementoBorrado = frutas.pop();
console.log(frutas);
console.log(elementoBorrado);

//unshift()
//agrega un elemento al inicio del arreglo

let devolver = frutas.unshift("Uva", "Pera");
console.log(frutas);
console.log(devolver);

//shift
//elimina un elemento del inicio de un arreglo

frutas.shift();
console.log(frutas);

//Diferentes tipos de datos
//Arreglo multidimensional
const newArr = [1, 45, "Hola", "Adiós", true, null, [30, 31, 32], ["Azul", "Amarillo", "Verde"]]
console.log(newArr[6][1]);
console.log(newArr[7][1]);

//Objetos
//estructura especial llamada objeto
//Nos permiten guardar pares de valores
//key - value
//llave - valor

const obj = {
    nombre : "Pedro",
    edad : 25,
    color : "Azul",
    hobbies : ["Leer", "Correr"]
};
console.log(obj.edad);
console.log(obj.hobbies[1]);





