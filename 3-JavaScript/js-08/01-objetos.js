let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Pedro',
    apellidos: 'Torres',
    correo: 'pedrito@gmail.com',
    edad: 35,
   /*  nombreCompleto: function(){
        return this.nombre + ' ' + this.apellidos;
        
    } */

    idioma: 'es',
    get leng () {
        return this.idioma.toUpperCase();
    },
    set lang (lang){
        this.idioma = lang.toLowerCase();
    }
}
console.log(persona.leng);

persona.lang ='ES';
console.log(persona.leng);
console.log(persona.idioma);









/* persona_tel = '5555678900'

console.log(persona.nombre);
console.log(persona.nombreCompleto()); */


/* for in */
/* for (varPropiedad in persona) {
    console.log(persona[varPropiedad]);

}

let personaString = JSON.stringify(persona);
console.log(personaString); */





