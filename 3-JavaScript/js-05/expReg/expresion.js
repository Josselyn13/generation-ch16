let texto = "hoy parece que va a salir el sol";
let texto01 = "la espero en el aropuerto de LA"
/* let buscar = /LA/; */ //ponerlo así busca tal cuál la palabra o silaba
let buscar = /[eo]/; //ponerlo así busca la e o la o
console.log(buscar.test(texto01));
/* Busca también números */
let texto02 = " o=9";
let buscar2 = /[1-5]/;
console.log(buscar2.test(texto02));

let texto03 = "los numeros primos son 2 3 5 7 dentro de los 10 primeros numeros"
let buscar3 = /\d{3}/;
console.log(buscar3.test(texto03));

/* Correos */
let texto04 = "usuario@servidor.com"
let buscar4 = /[\w]+@{1}[\w]+\.[a-z]{2,3}/;
console.log(buscar4.test(texto04));




