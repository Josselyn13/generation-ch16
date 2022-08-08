/* console.log(document.URL); */
//getElementById()
console.log(document.getElementById('parrafo1'));

const parrafo1 = document.getElementById('parrafo1');
console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el párrafo 1";
console.log(parrafo1.textContent);
console.log(parrafo1.style);

parrafo1.style.color = 'red';
parrafo1.style.backgroundColor = "yellow";

//querySelector()
//etiqueta = p
//clase = .parrafo
//id = #parrafo1
const parrafo2 = document.querySelector('.parrafo');
console.log(parrafo2.textContent);
parrafo2.textContent += "\n Modificando el contenido desde javascript";

//\n --inserta un salto de linea === <br>
//\t --tabulador


//querySelectorAll()
//regresa una lista de nodos - nodeList
const parrafos = document.querySelectorAll('p');
console.log(parrafos[2]);
parrafos[2].style.fontSize = "2rem";

//css - font-size
//js -fontSize - lower camel case


//Modificar los atributos del html
const enlace = document.getElementById('enlace');
console.log(enlace.href);
enlace.href = 'https://www.youtube.com/';
enlace.target = "_blank";
enlace.textContent = 'Enlace de YouTube';

//modificar color de texto
const parrafos3 = document.querySelectorAll('p');
console.log(parrafos3[2]);
parrafos3[2].style.backgroundColor = "blue";

parrafo3.textContent = "Ya tengo hambre desde el párrafo 3";
console.log(parrafo3.textContent);
console.log(parrafo3.style);

const parrafo4 = document.getElementById('parrafo4');
console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(document.body.innerHTML); //Muestra el html que haya en el interior del elemento
console.log(parrafo4.outerHTML); //muestra el contenido, incluyendo al elemento

//parrafo4.outerHTML = '<a href="https://google.com/">Enlace</a>' //reemplaza el elemento completo
//parrafo4.innerHTML = '<a href="https://google.com/">Enlace</a>' //reemplaza el contenido del elemento

//parrafo4.innerHTML = '<div class="elemento">este es un texto normal</div>';

//js permite modificar las clases css
//una forma es utilizando style

console.log(parrafo4.classList.contains("elemento"));
const cambiarColor = () => {
parrafo4.classList.toggle('elemento')

}
cambiarColor();//se agrega la clase
cambiarColor(); //se quita la clase