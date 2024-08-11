/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generadorDeCartas() {
    // arreglo que contiene los valores de las cards
    const valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    // valores random del arreglo y guardados en un espacio de memoria
    let valoresRandoms = Math.floor(Math.random() * valores.length);
    // ACCEDIENDO AL ELEMENTO Y GUARDANDOLO en un espacio de memoria para reutilizarlo
    const $NUMBER_DOM = document.getElementById("number");
    // CAMBIANDO EL CONTENIDO del elemento de id number y que se modifique por una posicion random del arreglo
    $NUMBER_DOM.textContent = valores[valoresRandoms];
    // return no es importante porque el DOM hace ese trabajo de retornarnos pero en el browser
    // return `${valores[valoresRandoms]}`;

    // 2da arreglo PALOS O ICONOS

    const palos = ["♦", "♥", "♠", "♣"];
    // para obtener un indice aleatorio del arreglo
    const palosRandoms = Math.floor(Math.random() * palos.length);
    // seleccionamos a todos los elementos de la clase palos y lo guardamos en una varible
    const $PALOS_DOM = document.querySelectorAll(".palos");
    /* problema: textContent no puede agregar contenido a dos elementos a la vez
       solucion: convertir la seleccion en un arreglo(con dos elementos iguales) luego iterar cada elemento 
    usando el metodo forEach de arrays y darle la condicion de que a cada elemnento se le modfique el contenido
    por un indice aleatorio del arrray palos */
    // Convertir NodeList a Array y usar forEach Array.from() y aplicar el metodo forEach
    Array.from($PALOS_DOM).forEach(element => {
      // Modificar el contenido de cada uno de los elementos con un palo al azar
      element.textContent = palos[palosRandoms];
    });

    // generadorDePalos();

    function botonGeneradorDeCartas() {
      let $botonDeCartas = document.getElementById("boton");
      $botonDeCartas.addEventListener("click", generadorDeCartas);
    }
    botonGeneradorDeCartas();
  }

  // llamando a la funcion
  generadorDeCartas();
};
// ASIGNACION AL BOTON para que ejecute el CAMBIO DE CARTA
// primero ubicamos document.getElementById("boton"); dentro de un espacio de memoria

// let button = document.getElementById("boton");

// button.addEventListener asigna la funcion cambiarCarta hacia un evento click para generar una nueva carta por cada click
// button.addEventListener("click", cambiarCarta);

// TEMPORIZADOR para que me genere cada 5seg una nueva carta

// setInterval(generadorDeValores, 5000);

// CONDICION DE COLORES de los palos(♦ ♥ ♠ ♣)

// if (palos[palosRandoms] === "♦" || palos[palosRandoms] === "♥") {
//   color = "red";
// } else {
//   color = "black";
// }

// COLOR DE LOS PALOS DE LA CABEZA DE LA CARTA

// let colorHeader = document.getElementById("palos");
// // colorHeader.textContent = palos[palosRandoms];
// // colorHeader.style.color = color;
// // COLOR DE LOS PALOS DEL PIE DE LA CARTA
// let colorFooter = document.getElementById("palos2");
// colorFooter.textContent = palos[palosRandoms];
// colorFooter.style.color = color;

// // genera nuevos valores y actulizara el dom con estos nuevos valores
// const cambiarCarta = () => {
//   const valor = generadorDeValores();
//   const palos = generadorDePalos();

// HACIENDO QUE LOS ICONOES DEL PALOS Y PALOS2 HAGAN CASO A UN SOLO LLAMADO

//   document.querySelector("#number").innerHTML = valor;
//   document.querySelector("#palos").innerHTML = palos;
//   document.querySelector("#palos2").innerHTML = palos;
