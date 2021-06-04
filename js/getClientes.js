const contenedorClientes = document.querySelector(".contenedorClientes");

fetch(`https://parqueadero-kr.herokuapp.com/clients/getAll`)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    drawDataClients(contenedorClientes, json);
  })
  .catch((error) => console.error(error));
