const btnRegistrar = document.querySelector(".btnRegistrar");

const inputPlacaR = document.getElementById("inputPlacaR");
const inputColorR = document.getElementById("inputColorR");

const Rinfo = document.getElementById("Rinfo");

const infoRegistro = document.getElementById("infoRegistro");

btnRegistrar.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputPlacaR.value === "") {
    infoRegistro.textContent = "Ingrese el campo PLACA";
    setTimeout(() => {
      infoRegistro.textContent = "";
    }, 3000);
  }
  registrar(inputPlacaR.value, inputColorR.value);
});
