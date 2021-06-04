const btnUserNoContra = document.querySelector(".btnUserNoContra");

btnUserNoContra.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`http://localhost:3000/users/getNoContrato`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      contenedorUsers.innerHTML = ``;
      drawDataUser(contenedorUsers, json);
    })
    .catch((error) => console.error(error));
});
