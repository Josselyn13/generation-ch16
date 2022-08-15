const suma = require('../js/suma');

//pedir un valor esperado
////comparar el resultado con el valor esperado

test('sumar 1 + 2 debe ser 3', () => {
    expect( suma(1,2) ).toBe( 3 ); 
    //expect recibe o trae el resultado
    //to be hace la comparación
})

test('1 + 4 no debe ser 0', () => {
    expect( suma(1, 4)).not.toBe(0);
})


