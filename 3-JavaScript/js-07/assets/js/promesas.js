//Variable que simula los datos pedidos
const saludo = "Hola mundo"
const datos = [
    {
        nombre: "Josselyn",
        apellido: "Garcia"
    },
    {
        nombre: "Josselyn",
        apellido: "Garcia"
    },
    {
        nombre: "Josselyn",
        apellido: "Garcia"
    }
]

//función para simular una petición
//promesa es algo que se puede o no cumplir
function obtenerDatos() {
    return new Promise( (resolve,reject) =>{
        
        setTimeout( () =>{
            if(false){
            resolve(datos)
        } else {
            reject("nunca te quiso")
        }
    }, 2000)
    })

}
   /*  setTimeout( () => {
        return datos;
    }, 2000) */ //sale indefinido porque no hay proceso
 
//Forma 1

obtenerDatos().then( (datos) => {
    console.log("Forma 1");
    console.log(datos);
    
}).catch( (error) =>{ //catch atrapa todo
    console.log("Existe un error en la petición 1");
    console.log(error);
})

//Forma 2 - funciones asíncronas - await async

async function funcionAsincrona() {
    try {
        console.log("Forma 2");
        const datos = await obtenerDatos();
        console.log(datos);    
    } catch (error) {
    
        console.log(error);
    }
    
}
funcionAsincrona()
