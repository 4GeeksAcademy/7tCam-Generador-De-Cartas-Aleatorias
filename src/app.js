/* eslint-disable */
import "bootstrap";
import "./style.css";
// onload es un evento que nos indica cada vez que se refresca
window.onload = function() {
  //write your code here
  function generadorDeCarta() {
    // arreglo que contiene los valores de las cards
    const valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    // valores random del arreglo y guardados en un espacio de memoria
    let valoresRandoms = Math.floor(Math.random() * valores.length);
    // ACCEDIENDO AL ELEMENTO Y GUARDANDOLO en un espacio de memoria para reutilizarlo
    // OJO que si lo llevo arriba(linea 14 y 16) como me dijo el bro sale error
    const $NUMBER_DOM = document.getElementById("number");
    // CAMBIANDO EL CONTENIDO del elemento de id number y que se modifique por una posicion random del arreglo
    $NUMBER_DOM.textContent = valores[valoresRandoms];
    // return no es importante porque el DOM hace ese trabajo de retornarnos pero en el browser
    // return `${valores[valoresRandoms]}`;
    // 2da arreglo PALOS O ICONOS

    const palos = ["♦", "♥", "♠", "♣"];
    // para obtener un indice aleatorio del arreglo
    const palosRandoms = Math.floor(Math.random() * palos.length);
    // declarando la varible color
    let color = "";
    // condicion para que se cambie de color los palos
    if (palos[palosRandoms] === "♦" || palos[palosRandoms] === "♥") {
      color = "red";
    } else {
      color = "black";
    }
    // let backgroundImage = "";
    // if (valores[valoresRandoms] === "k") {
    //   backgroundImage: "https://cdn.leonardo.ai/users/f8cb4ac8-b908-479c-a409-451cbb88e68a/generations/d580f5a4-c16a-4836-9a66-60ec6d6cafd5/Default_Create_a_regal_poker_card_featuring_a_majestic_king_se_3.jpg";
    // } else {
    //   backgroundImage: none;
    // }
    // seleccionamos a todos los elementos de la clase palos y lo guardamos en una varible
    const $PALOS_DOM = document.querySelectorAll(".palos");
    // este paso queda invalido porque querySelectorAll tranforma a los elementos en un arreglo
    /* problema: textContent no puede agregar contenido a dos elementos a la vez(en general esque no se le puede
       aplicar una propiedad de array porque es un nodeList)
       solucion: convertir la seleccion en un arreglo(con dos elementos iguales,en este caso) luego 
       iterar cada elemento usando el metodo forEach de arrays y darle la condicion de que a cada 
       elemnento se le modfique el contenido por un indice aleatorio del arrray palos */
    // Convertir NodeList a Array y usar forEach Array.from() y aplicar el metodo forEach
    /*  Node list(lista de nodos): cuando se les esta intentando aplicar metodos de array que no
     esta permitido en una lista de nodos, primero se debe convertir a un arra usando el metodo 
     Array.from() depues se debe aplicar metodos de array
      a cada uno por separado por ell se recomienda usar forEach para iterar */
    // el forEach se le aplica a la seleccion o conjunto de elementos
    // una node list se produce cuando se usa querySelectorAll o getElementByClasName(ya no se usa)
    // Array.of($PALOS_DOM.forEach(element => {...) ya no es util el array.of para convertir en arreglo
    $PALOS_DOM.forEach(element => {
      // Modificar el contenido de cada uno de los elementos con un palo al azar
      element.style.color = color;
      // Modificar el contenido de cada uno de los elementos con un palo al azar
      element.textContent = palos[palosRandoms];
    });
    // $botonDeCartas.addEventListener("click", (parrametro)=>{toda la funcion});
    // OTRA MANERA
    // function botongeneradorDeCarta() {
    //   $botonDeCartas.addEventListener("click", generadorDeCarta);
    // }
    // botongeneradorDeCarta();
  }
  // llamando a la funcion para que funcione, xq sino lo llamo no se activa
  generadorDeCarta();
  // 1) selecion
  let $botonDeCartas = document.getElementById("boton");
  //        (evento , especificar que por cada click que queremos que se ejecute en este caso una funcion)
  // 2) evento
  $botonDeCartas.addEventListener("click", generadorDeCarta);

  // vi  que este intervalo tmb se puede poner fuera de la funcion donde recomiendas ejecutarlo
  // intervalo de 10 seg
  setInterval(generadorDeCarta, 10000);
  // asignar la funcion de aplicar tamano al boton
  document.getElementById("btnnn").addEventListener("click", aplicarSize);
};
// function para aplicar el tamano de la carta segun el valor que reciba el input
function aplicarSize() {
  let ancho = document.getElementById("cardWidth").value;
  let alto = document.getElementById("cardHeight").value;
  let tarjeta = document.getElementById("tarjeta");
  // codicion para obtener el ancho y el alto en pixeles
  if (ancho) {
    tarjeta.style.width = ancho + "px";
  }
  if (alto) {
    tarjeta.style.height = alto + "px";
  }
}
