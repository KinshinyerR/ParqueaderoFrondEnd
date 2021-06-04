const btnUserAll = document.querySelector(".btnUserAll");

btnUserAll.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`http://localhost:3000/users/getAll`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      contenedorUsers.innerHTML = ``;
      drawDataUser(contenedorUsers, json);
    })
    .catch((error) => console.error(error));
});
