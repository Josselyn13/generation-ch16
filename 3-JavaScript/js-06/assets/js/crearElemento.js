
//crear elemento
const imagen = document.createElement('img');

//modificar los atributos html del elemento
imagen.src = 'https://placeimg.com/200/200/animals';
imagen.alt = 'Imagenes aleatorias de animales'


//lo insertamos en un elemento padre
document.body.appendChild(imagen);
document.body.insertAdjacentElement("beforeend",imagen); //afterend, beforebegin, beforeend.afterbegin

//forma correcta de insertar y crear un elemento
//1.- Se crea el elemento que contendrá la imagen
//2.- seleccionar el elemento padre
const padreImg = document.getElementById('padreImg');

//3.- crear el elemento
const imagen2 = document.createElement('img');

//4.- modificamos los atributos del elemento
imagen2.src = 'https://placeimg.com/200/200/animals';
imagen2.alt = 'Imágenes de naturaleza'

//5.- insertar elemento
padreImg.appendChild(imagen2);

//Utilizar forEach para pintar datos
const frutas = ["Toronja", "Manzana", "Mandarina", "Limón", "Granada", "Melón", "Plátano", "Guayaba"];

const listaFrutas = document.getElementById('frutas');

//forma 1, clásica
/* frutas.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    listaFrutas.appendChild(li);
});
 */

//forma 2
frutas.forEach((el) => {
    listaFrutas.innerHTML += `<li>${el}</li>`
})










