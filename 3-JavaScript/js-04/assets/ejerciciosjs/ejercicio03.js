//01

let xValue = 3;
while (xValue) { // cuando i sea 0, la condición se volverá falsa y el bucle se detendrá
   xValue= xValue - 0.5;
   console.log(xValue);
}
console.log(xValue);

//02
function numerosImpares() {
    for (let i = 1; i < 100; i += 2){
     console.log(i);
   }
}
numerosImpares()


//03

let numero = 8
let j = 1
let arr = ""

function sBrackets(numero) { 

while ( j <= numero) {
    arr += ( "[" + j + "]")
    j++
    
}
console.log(arr)
}




//04

let n = 5;
let k = 1;
let suma=0
function sConsecutiva(n) {
    
    while ( k <= n ) {
        suma=suma+k
        k++
    }
    console.log(suma)
}

