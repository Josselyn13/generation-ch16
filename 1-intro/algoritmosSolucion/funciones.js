//Funciones

function sumar (numero1, numero2) {
    console.log("Voy a sumar");
    console.log("El resultado de la suma es: " + (numero1 + numero2));
}


sumar(4,5); //Jala las veces que quiera lo que está adentro
sumar(1,1);
sumar(4,5)

//ejercicio 2 utilizando funciones

function calculadoraSueldo (sueldoIngresado, diasTrabajados) {
    
    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);
    
    const sueldo = sueldoIngresado;
    const diasSemana = diasTrabajados;
    const semanasMes = 4;
    
    console.log("Sueldo semanal: " + (sueldo * diasSemana));
    console.log("Sueldo semanal: " + (sueldo * diasSemana * semanasMes));
    
}

calculadoraSueldo(100, 2)
calculadoraSueldo(1, 6)
calculadoraSueldo(50, 1)



//return, calculadora de porcentajes
//0.6 = 60%

function calcularPorcentaje (numero, porcentaje) {
    let resultado = numero * porcentaje;
    //console.log(resultado); lo imprime en consola
    return resultado;

    
}

let resultadoFuncion = calcularPorcentaje(100, 0.40)
console.log(resultadoFuncion);
