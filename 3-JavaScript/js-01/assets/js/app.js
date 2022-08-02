'use strict'; //Le indica al navegador que va a interpretarlo de una manera estricta

/* Tipos de variables */
let a = 20; //local
const b = 0; //constante y local
var c; //global

/* Scope - contexto
espacio en el que vive la variable */

/* Tipos de datos */

//String
let cadena = "Hola mundo";
let cadena2 = 'Hola mundo';


//Number
let numero = 5;
let numero1 = 5.89;
let numero3 = 5.89;


//Boolean
let Boolean = true;

//undefined - indefinido

let variable;
/* console.log(variable); */

//null
let vacio = null;

/* NaN - not a number */
/* tratar de realizar alguna operación aritmética con algún dato que no es un número */

/* Plantillas literales
template strings
literal strings 
interpolación
nos permite meter código*/
console.log(`Esta es una cadena ${5+4}`);


let nombre = 'Raúl';

/* Let presentación */
/*console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`);



console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`); */

/* Arreglos - matrices - arrays */

let arr = [1, "A", null, undefined, [true,false]]

/* Para mostrar un valor */
console.log(arr[4][0]);

if (arr.length >= 5) {
    console.log("Tiene más de 5 elementos");
    
}


let arr2 = new Array();
console.log(arr2);

/* Objetos */
//Clave / valor

const persona = {
    nombre: 'Raúl',
    edad: 31,
    hobbies: [
        "Leer",
        "Ver Shrek 1 y 2",
        "Comer"
    ],
    auto: {
        marca: "VW",
        modelo: "pointer",
        year: 2000
    },
    saludar: function(){
        return "Hola";
    }
};

/* Notación de punto */

console.log(`Mi nombre es ${persona.nombre}`);
console.log(`Mi hobbie favorito es ${persona.hobbies[1]}`);

console.log(`La marca de mi carro es ${persona.auto.marca}`);

console.log(persona.saludar);



