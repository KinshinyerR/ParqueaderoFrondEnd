const contenedorUsers = document.querySelector(".contenedorUsers");

fetch(`https://parqueadero-kr.herokuapp.com/users/getAll`)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    contenedorUsers.innerHTML= ``;
    drawDataUser(contenedorUsers, json);
  })
  .catch((error) => console.error(error));
