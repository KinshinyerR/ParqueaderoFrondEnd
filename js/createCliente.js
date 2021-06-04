const btnCreate = document.querySelector(".btnCreate");

const inputPlaca = document.getElementById("inputPlaca");
const inputMarca = document.getElementById("inputMarca");
const inputModelo = document.getElementById("inputModelo");
const inputColor = document.getElementById("inputColor");
const inputConductor = document.getElementById("inputConductor");
const inputMes = document.getElementById("inputMes");

const infoCreate = document.getElementById("infoCreate");

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputPlaca.value === "") {
    infoCreate.textContent = "Ingrese el campo PLACA";
  } else {
    create(
      inputPlaca.value,
      inputMarca.value,
      inputModelo.value,
      inputColor.value,
      inputConductor.value,
      inputMes.value
    );
  }
});
