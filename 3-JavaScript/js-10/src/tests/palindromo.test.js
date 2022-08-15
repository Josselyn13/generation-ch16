
const palindromo = require('../js/palindromo.js');

describe('Pruebas de la función palindromo', () => {

    test('debe regresar "es un palindromo" si ingresamos ojo', () => {
        let mensaje = 'Es un palindromo';
        let palabra = 'ojo';

        expect( palindromo(palabra) ).toBe(mensaje);
    })

    test('no debe regresar "Es un palindromo" al ingresar la palabra Generation', () => {
        let mensaje = 'Es un palindromo';
        let palabra = 'generation';

        expect( palindromo(palabra) ).not.toBe(mensaje)
    })
    test('al ingresar un número debe regresar el mensaje', () => {
        let mensaje = 'No es una palabra';
        let valor = 1;

        expect( palindromo(valor) ).toBe(mensaje);
    })

});




