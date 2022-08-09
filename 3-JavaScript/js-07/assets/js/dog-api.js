/* URLs para consumir */
const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

/* Elementos del DOM */
const imagenPerrito = document.getElementById("img-perrito");


const btn = document.getElementById("btn-perrito")
console.log(btn);

/* Eventos */
btn.addEventListener("click", () =>{
    console.log("Boton presionado");

    //Agregar funcionalidad
    obtenerPerritosAleatorio(urlAleatorios)
    /* const audio = new Audio()
    audio.play */

})


async function obtenerPerritosAleatorio(url) {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    
    console.log(datos);
    console.log(datos.message);
    console.log(datos.status);

    imagenPerrito.src = datos.message;
}

/* obtenerPerritosAleatorio(urlAleatorios) */




