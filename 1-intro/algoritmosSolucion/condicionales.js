
//Control de flujo
//Controla por ejemplo los invitados de la gente que tiene la administración


// let nombre = "Raul"
//let edad = 23;

let nombre = prompt("Escribe tu nombre");
console.log(nombre);

//casteo - convertir un tipo de dato
let edad = parseInt(prompt("Escribe tu edad"));
console.log(edad);

if (nombre === "Jonathan" && edad === 23 || nombre === "Raul" || nombre === "Victor") {
    //scope (alcance que tiene)
    console.log("Eres un ");
    console.log("ADMIN");
    
} else if (nombre === "Maria") {

    console.log("Eres una mentora");

} else if (nombre === "Marina") {

    console.log("Eres la jefa");

} else if (nombre === "Josselyn"){

    console.log("Eres un alumno");

} else {

    console.log("Escribiste mal tu nombre");   

}

console.log("Fin del programa");



