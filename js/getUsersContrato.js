const btnUserContra = document.querySelector(".btnUserContra");

btnUserContra.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`https://parqueadero-kr.herokuapp.com/users/getContrato`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      contenedorUsers.innerHTML= ``;
      drawDataUser(contenedorUsers, json);
    })
    .catch((error) => console.error(error));
});
