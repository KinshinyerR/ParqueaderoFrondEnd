const contenedorUsers = document.querySelector(".contenedorUsers");

fetch(`http://localhost:3000/users/getAll`)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    contenedorUsers.innerHTML= ``;
    drawDataUser(contenedorUsers, json);
  })
  .catch((error) => console.error(error));
