class Persona{
    
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

get _nombre(){
    return this._nombre;

}
set _nombre(nombre){
    this._nombre = nombre;
}

}
let persona1 = new Persona('José', 'Perez');
console.log(persona1);

persona1.nombre = "hugo sanchez";
console.log(persona1.nombre);
