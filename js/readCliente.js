const btnRead = document.querySelector(".btnRead");

const inputPlacaR = document.getElementById("inputPlacaR");

const placaClie = document.getElementById("placaClie");
const marcaClie = document.getElementById("marcaClie");
const modeloClie = document.getElementById("modeloClie");
const colorClie = document.getElementById("colorClie");
const conductorClie = document.getElementById("conductorClie");
const pagoClie = document.getElementById("pagoClie");

const infoRead = document.getElementById("infoRead");
const info = document.querySelector('.info');

btnRead.addEventListener("click", (e) => {
  e.preventDefault();
  infoRead.textContent = "";
  if (inputPlacaR.value === "") {
    infoRead.textContent = "Ingrese el campo PLACA";
  } else {
    read(inputPlacaR.value);
  }
});
