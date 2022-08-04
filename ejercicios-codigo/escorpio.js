
/* alert('Tienes que adivinar el "Número Mágico" para pasar... \n\nPara salir del juego ingresa el número "0"');

let max = 100;
let min = 1;

let secretNum = Math.random() * (max-min) + min;
secretNum = parseInt(secretNum);

console.log(secretNum);

let message = "Adivina el número mágico..."

while (true) {

    let userNum = prompt(message,"0");
    userNum = parseInt(userNum);

    if (userNum === secretNum) {
        alert("🎉Felicidades, adivinaste el número mágico.🎉");
        break;

    }else if (userNum === 0) {
        break;
        
    } else if (userNum > secretNum) {
        message = "El número " + userNum + " es mayor al número mágico...";
    } else if (userNum < secretNum) {
        message = "El número " + userNum + " es menor al número mágico...";
    }
}


 */

function aleatorio(max) {
    return Math.floor(Math.random() * max);
  }

let numeroAdivinar = aleatorio(20);

let nIngresado =parseInt(prompt("Adivina el numero magico"))


while (nIngresado != numeroAdivinar) {
   
   if (nIngresado > numeroAdivinar) {
            alert("El número que ingresaste es mayor al número mágico");
            nIngresado =parseInt(prompt("Adivina el numero"))
        }
        else if (nIngresado < numeroAdivinar){
            alert("El número que ingresaste es menor al número mágico");
            nIngresado =parseInt(prompt("Adivina el numero"))
        }
        
    
        
}

alert("Felicidades, adivinaste el número mágico")

