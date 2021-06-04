const btnUpdate = document.querySelector(".btnUpdate");

const inputPlacaU = document.getElementById("inputPlacaU");
const inputMarcaU = document.getElementById("inputMarcaU");
const inputModeloU = document.getElementById("inputModeloU");
const inputColorU = document.getElementById("inputColorU");
const inputConductorU = document.getElementById("inputConductorU");
const inputMesU = document.getElementById("inputMesU");

const infoUpdate = document.getElementById("infoUpdate");

btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputPlacaU.value === "") {
    infoUpdate.textContent = "Ingrese el campo PLACA";
  } else {
    update(
      inputPlacaU.value,
      inputMarcaU.value,
      inputModeloU.value,
      inputColorU.value,
      inputConductorU.value,
      inputMesU.value
    );
  }
});
