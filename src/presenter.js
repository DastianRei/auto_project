import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const div=document.querySelector("#divPosInicial");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
