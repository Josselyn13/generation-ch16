/* Siempre que se use una api se crea una variable */
const url = "https://dog.ceo/api/breeds/image/random"

//respuesta a la petición
fetch(url).then((respuesta) =>{
    console.log(respuesta);
})

//Obtener la información de la petición
//forma 1
fetch(url).then((respuesta) => respuesta.json()).then((datos) =>{
    console.log(datos);
}).catch((error) =>{
    console.log(error);
})

//forma 2
async function obtenerPerritoAleatorio() {
    try{
     const respuesta = await fetch(url);
     const datos = await respuesta.json();

    console.log(datos);

}catch(error){
    console.log(error);
}
}
obtenerPerritoAleatorio()






