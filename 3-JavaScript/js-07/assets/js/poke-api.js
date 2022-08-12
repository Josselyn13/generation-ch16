/* URL a consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"

/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon");
/* console.log(imgPokemon); */

const idPokemon = document.getElementById("id-pokemon");
/* console.log(idPokemon); */

const nombrePokemon = document.getElementById("nombre-pokemon");
/* console.log(nombrePokemon); */

const listaHabilidades = document.getElementById("lista-habilidades")
/* console.log(listaHabilidades); */

const listaTipos = document.getElementById("lista-tipos")

const formulario = document.getElementById("buscador-pokemon")

/* Eventos */
formulario.addEventListener("submit", (e) =>{
    e.preventDefault("Boton");
    

    const inputPokemon = document.getElementById("busqueda-pokemon")
    console.log(inputPokemon.value);

    const nuevaBusqueda = urlPokemon + inputPokemon.value

    console.log(nuevaBusqueda);

    obtenerPokemon(nuevaBusqueda);
})



/* Funciones */




async function obtenerPokemon(url) {
    try {
        const respuesta = await fetch(url)
        const datos = await respuesta.json()
    
    /*     console.log(datos);
        console.log(datos.forms[0].name);
        console.log(datos.abilities);
        console.log(datos.id);
        console.log(datos.types);
        console.log(datos.sprites.others["official-artwork"].front_default);
     */
    
        /* Se buscan los objetos en la api */
       const pokemon = {
            nombre: datos.forms[0].name,
            habilidades: datos.abilities,
            id: datos.id,
            tipos: datos.types,
            imagen: datos.sprites.other["official-artwork"].front_default
        } 
    
    /* imagen nombre y id */
        imgPokemon.src = pokemon.imagen;
        idPokemon.textContent = `ID: ${pokemon.id}` ; //cONCATENAMOS EL VALOR JALADO CON EL ID:
        nombrePokemon.textContent = pokemon.nombre;
    
        /* Habilidades */
    
        let template = ``
        for(let i=0; i < pokemon.habilidades.length; i++){
           const nombreHabilidad = pokemon.habilidades[i].ability.name
           console.log(nombreHabilidad);
           template += `<li class="list-group-item"> ${nombreHabilidad} </li>`
        }
    
        listaHabilidades.innerHTML = template;
    
        /* Tipos */
        console.log(pokemon.tipos);
    
        templateTipos = ""
    
        pokemon.tipos.forEach((tipo) => {
            const nombreTipo = tipo.type.name;
                    
            templateTipos += `<li class="list-group-item"> ${nombreTipo}</li>`
        });
        listaTipos.innerHTML = templateTipos;
    
    
    
    
        
    }catch (e) {
        alert("Pokemon no válido")
        
    }
}

   



