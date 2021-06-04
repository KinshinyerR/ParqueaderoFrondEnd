const btnDelete = document.querySelector(".btnDelete");

const inputPlacaD = document.getElementById("inputPlacaD");

const infoDelete = document.getElementById("infoDelete");

btnDelete.addEventListener("click", (e) => {
  e.preventDefault();
  infoDelete.textContent = "";
  if (inputPlacaD.value === "") {
    infoDelete.textContent = "Ingrese el campo PLACA";
  } else {
    funtDelete(inputPlacaD.value);
  }
});
