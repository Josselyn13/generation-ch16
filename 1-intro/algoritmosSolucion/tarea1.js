/*Mario quiere averiguar si un número es divisible entre 7 y 8. */


function numeroDivisible () {
    
    let n1 = prompt("Escribe un número");
    
    if (n1 % 7 === 0) {
       
        return n1 = true;
            
    } else if (n1 % 8 === 0) {
        return n1 = true;
        
    } else {
         
        return false;
    }
    
       
}

let resultadoFuncion = numeroDivisible()
console.log(resultadoFuncion);























