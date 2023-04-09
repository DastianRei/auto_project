import Auto from "./carro";

const div=document.querySelector("#divPosInicial");
const form=document.querySelector("#formulario");
const posInicial=document.querySelector("#posicion-inicial")
const comandos=document.querySelector("#comandos-input")
const posFinal=document.querySelector("#posicion-final")
let auto=new Auto(0,0,"N");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //ceceecce
  div.innerHTML = "<p>" + auto.ejecutarInstrucciones("5,5/3,3E/AADAADADDA") + "</p>";
});
