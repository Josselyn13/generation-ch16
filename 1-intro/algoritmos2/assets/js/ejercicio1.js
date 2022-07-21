

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(personas);
//Escribe un comando para remover a "Dani" del arreglo
personas.splice(1,1);
console.log(personas);

//Escribe un comando para remover a "Juan del arreglo"
personas.splice(2,1);
console.log(personas);

//Escribe un comando para agregar a "Luis" al inicio del arreglo
personas.unshift(personas.splice(1,1)[0]);
console.log(personas);

//Escribe el comando para agregar tu nombre al final del arreglo
personas.push("Josselyn");
console.log(personas);

//Escribe el comando para mostrar la posición de "Maria"
//si hay dos elementos iguales, indexOf sólo toma el primero
//Si no existe el elemento, manda un -1
console.log(personas.indexOf("Maria"));

//Escribe el comando para mostrar la posición de tu nombre
console.log(personas.indexOf("Josselyn"));

