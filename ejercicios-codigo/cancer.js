/* 
let grado = parseint(prompt("Inserte un valor en grados Celsius: "));

function convKelvin(a) {
        let resultado = (a + 271.15);    
        return resultado;
}
alert(convKelvin(grado));

let grado2 = parseint(prompt("Inserte un valor en grados Celsius: "));

function convF(b) {
    let resultado = ((b*1.18) + 32);    
    return resultado;
}
alert(convF(grado2));


 */


// CASA CANCER
'use strict'

let celsius = Number(prompt("Por favor, ingresa un valor de temperatura en °C:"));

let conversionFahrenheit = (function (valorCelsius) {
  return ((valorCelsius * 9)/5) + 32;
})

let conversionKelvin = function (valorCelsius){
  return (valorCelsius + 273.15);
}

alert (`Temperatura en °F: ${conversionFahrenheit(celsius).toFixed(2)}

Temperatura en Kelvin: ${conversionKelvin(celsius).toFixed(2)}`);