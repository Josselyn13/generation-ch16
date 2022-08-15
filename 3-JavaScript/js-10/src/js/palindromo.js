 const palindromo = (palabra) => {

    if(typeof palabra === 'number'){
        return 'No es una palabra';
    }

    let palabraInvertida = palabra.split("").reverse().join("");
     //cadena vacía y dividir palabra
     //reversa de arreglos
     //regresa las palabras al reves, convierte el arreglo en cadena de texto
     /* if (palabra === palabraInvertida) {
        return 'es un palindromo'
        
     }else{
        return 'no es un palindromo'
     } */
     return palabra === palabraInvertida ? 'Es un palindromo' : 'No es un palindromo';

     //(condición) ? verdadera : falsa
     //(condición) ? if :else


 }

 //operador ternario es una forma simplificada de un if

/*  console.log(palindromo('anitalavalatina')); */
console.log(palindromo(1));
module.exports = palindromo;

