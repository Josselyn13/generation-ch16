/* Control de flujo */
/* Condicionales */
/* If */

let condicion = "A";

if (condicion === "A") {
    
    console.log("Entró en la condición A");
} else if (condicion === "B") {
    
    console.log("Entró en la condición B");

} else if (condicion === "C"){
   
    console.log("Entró en la condición C");
    
} else {
    console.log("No entra en ninguna condición");
}

/* function dividir(a, b) {
    if (b===0){
    console.log("No se puede realizar la operación");
    
} else {
    console.log(a/b);
} */
/* dividir(10/2)
 */

/* Switch */
/* Se ocupa principalmente para evaluar expresiones */
let nuevaCondicion = "Adios";
switch (nuevaCondicion) {
    case "Hola":
        console.log("Buenos días");
        console.log("Espero que te encuentres bien");
        break;
    case "Adios":
        console.log("Nos vemos");
        break;
    case "Saludo":
        console.log("Te mando un saludo");
        break;

    default:
        console.log("No entendí tu mensaje");
        break;
}


let edad = 30

    switch(edad >= 18){
        case true:
            console.log("mayor");
            break
        case false:
            console.log("menor");
    }




    switch(elegir){
        case true:
            console.log("mayor");
            break
        case true:
            console.log("mayor");
            break
        case true:
            console.log("mayor");
            break
        case true:
            console.log("mayor");
            break
    }

    if(elegir === "sumar"){

        console.log("Vamos a sumar");
    
    }else if(elegir == "restar"){
    
        console.log("Vamos a restar");
    
    }else if(elegir == "dividir"){
    
        console.log("Vamos a dividir");
    
    }else if(elegir == "multiplicar"){
    
        console.log("Vamos a multiplicar");
    
    } else {
    
        console.log("No entiendo");
    
    }
    
