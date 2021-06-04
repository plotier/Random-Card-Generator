/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  crearPalo();
  crearNumero();
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function crearPalo() {
  let dibujo = document.querySelector("#palo");
  let dibujoBis = document.querySelector("#palo2");
  let chico = getRandomInt(1, 5);

  dibujo.style.fontSize = "100px";
  dibujoBis.style.fontSize = "100px";
  switch (chico) {
    case 1:
      dibujo.innerHTML = "♣";
      dibujoBis.innerHTML = "♣";
      break;

    case 2:
      dibujo.innerHTML = "♠";
      dibujoBis.innerHTML = "♠";
      break;

    case 3:
      dibujo.style.color = "red";
      dibujoBis.style.color = "red";
      dibujo.innerHTML = "♥";
      dibujoBis.innerHTML = "♥";
      break;

    case 4:
      dibujo.style.color = "red";
      dibujoBis.style.color = "red";
      dibujo.innerHTML = "♦";
      dibujoBis.innerHTML = "♦";
      break;
  }
}
function crearNumero() {
  let valor = document.querySelector("#numero");
  let grande = getRandomInt(1, 14);
  valor.style.fontSize = "100px";

  switch (grande) {
    case 1:
      valor.innerHTML = "A";
      break;

    case 2:
      valor.innerHTML = "2";
      break;

    case 3:
      valor.innerHTML = "3";
      break;

    case 4:
      valor.innerHTML = "4";
      break;

    case 5:
      valor.innerHTML = "5";
      break;

    case 6:
      valor.innerHTML = "6";
      break;

    case 7:
      valor.innerHTML = "8";
      break;

    case 8:
      valor.innerHTML = "8";
      break;

    case 9:
      valor.innerHTML = "9";
      break;

    case 10:
      valor.innerHTML = "10";
      break;

    case 11:
      valor.innerHTML = "J";
      break;

    case 12:
      valor.innerHTML = "Q";
      break;

    case 13:
      valor.innerHTML = "K";
      break;
  }
}
