const btnExit = document.querySelector(".btnExit");

const inputPlacaE = document.getElementById("inputPlacaE");

const Einfo = document.getElementById("Einfo");

const infoSalida = document.getElementById("infoSalida");

btnExit.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputPlacaE.value === "") {
    infoSalida.textContent = "Ingrese el campo PLACA";
    setTimeout(() => {
      infoSalida.textContent = "";
    }, 3000);
  }
  salida(inputPlacaE.value);
});
