import validator from './validator.js';

const Boton = document.getElementById("Boton")
Boton.addEventListener("click", validate);

function validate() {
  //console.log(validator);
  const cardNumber = document.getElementById("tarjeta").value;
  const valid = validator.isValid(cardNumber) 
  if (valid){
    document.getElementById("demo").innerHTML = "Tarjeta Correcta"
  } else {
    document.getElementById("demo").innerHTML = "Tarjeta no Válida"
  }}

// Obtener referencia al botón y al elemento de entrada
const validateButton = document.getElementById("Boton");
const cardNumberInput = document.getElementById("tarjeta");
const result = document.getElementById("result");


validateButton.addEventListener("click", function () {
  const cardNumber = cardNumberInput.value;
  const maskedNumber = validator.maskify(cardNumber);
  if (maskedNumber === "Invalid card number") {
    result.innerHTML = "Invalid card number";
  } else {
    result.innerHTML = maskedNumber;
  }
});