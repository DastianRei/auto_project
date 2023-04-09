import Auto from "./carro";

const div=document.querySelector("#divPosInicial");
const form=document.querySelector("#formulario");
const posInicial=document.querySelector("#posicion-inicial")
const comandos=document.querySelector("#comandos")
const posFinal=document.querySelector("#posicion-final")
form.addEventListener("submit", (event) => {
  event.preventDefault();

  

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
