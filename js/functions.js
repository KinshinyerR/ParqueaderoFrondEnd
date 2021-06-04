function drawDataClients(contenedor, data) {
  for (let i = 0; i < data.length; i++) {
    const container = document.createElement("div");
    container.classList.add("cliente");
    container.innerHTML = `
    <p>Placa: ${data[i].placa}</p>
    <p>Marca: ${data[i].marca}</p>
    <p>Modelo: ${data[i].modelo}</p>
    <p>Color: ${data[i].color}</p>
    <p>Conductor: ${data[i].nombreConductor}</p>
    <p>Mensualidad: ${data[i].pagoMensual}</p>  
    `;
    contenedor.appendChild(container);
  }
}

function drawDataUser(contenedor, data) {
  for (let i = 0; i < data.length; i++) {
    const container = document.createElement("div");
    container.classList.add("user");
    container.innerHTML = `
    <p>Placa: ${data[i].placa}</p>
    <p>Color: ${data[i].color}</p>
    <p>Hora de ingreso: ${data[i].horaIngreso}</p>
    <p>Contrato Mensual: ${data[i].contratoMensual}</p>  
    `;
    contenedor.appendChild(container);
  }
}

function registrar(inputplaca, inputcolor) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    placa: inputplaca,
    color: inputcolor,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/users/entry", requestOptions)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (res.status == 400) {
        infoRegistro.textContent = "ERROR: Vehículo YA Resgistrado";
        inputPlacaR.value = "";
        inputColorR.value = "";
        setTimeout(() => {
          infoRegistro.textContent = "";
        }, 5000);
      }
      infoRegistro.textContent = "Vehículo Ingresado";
      inputPlacaR.value = "";
      inputColorR.value = "";
      Rinfo.innerHTML = `
        <p>Placa: ${res.placa}</p>
        <p>Color: ${res.color}</p>
        <p>Hora de ingreso: ${res.horaIngreso}</p>
        <p>Contrato Mensual: ${res.contratoMensual}</p>  
        `;
      setTimeout(() => {
        Rinfo.innerHTML = ``;
        infoRegistro.textContent = "";
      }, 5000);
    })
    .catch((error) => console.log("error", error));
}

function salida(inputplaca) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    placa: inputplaca,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/users/exit", requestOptions)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (res.status == 400) {
        infoSalida.textContent = "ERROR: Vehículo NO encontrado";
        inputPlacaE.value = "";
        setTimeout(() => {
          infoSalida.textContent = "";
        }, 5000);
      }
      if (res.contratoMensual) {
        infoSalida.textContent = "Muchas gracias por su visita";
      }
      infoSalida.textContent = "Salida Exitosa";
      inputPlacaE.value = "";
      Einfo.innerHTML = `
        <p>Placa: ${res.placa}</p>
        <p>Color: ${res.color}</p>
        <p>Hora de ingreso: ${res.horaIngreso}</p>
        <p>Hora de salida: ${res.horaSalida}</p>
        <p>Contrato Mensual: ${res.contratoMensual}</p>  
        <p>Valor a pagar: ${res.valorAPagar}</p>  
        `;
      setTimeout(() => {
        Einfo.innerHTML = ``;
        infoSalida.textContent = "";
      }, 5000);
    })
    .catch((error) => console.log("error", error));
}

function create(
  inputplaca,
  inputmarca,
  inputmodelo,
  inputcolor,
  inputconductor,
  inputmes
) {
  let data = {
    placa: inputplaca,
    marca: inputmarca,
    modelo: inputmodelo,
    color: inputcolor,
    nombreConductor: inputconductor,
    pagoMensual: inputmes,
  };
  fetch(`http://localhost:3000/clients/create`, {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => {
      console.log(res);
      if (res.status == 400) {
        infoCreate.textContent = "ERROR: Vehículo YA Resgistrado";
        inputPlaca.value = "";
        inputMarca.value = "";
        inputModelo.value = "";
        inputColor.value = "";
        inputConductor.value = "";
        inputMes.value = "";
        setTimeout(() => {
          infoCreate.textContent = "";
        }, 5000);
      }
      if (res.status == 200) {
        infoCreate.textContent = "Vehículo Resgistrado";
        inputPlaca.value = "";
        inputMarca.value = "";
        inputModelo.value = "";
        inputColor.value = "";
        inputConductor.value = "";
        inputMes.value = "";
        setTimeout(() => {
          infoCreate.textContent = "";
        }, 5000);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function read(inputplaca) {
  fetch(`http://localhost:3000/clients/getbyid/${inputplaca}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const container = document.createElement("div");
      container.innerHTML = `
      <p id="placaClie">Placa: ${json.placa}</p>
      <p id="marcaClie"></>Marca: ${json.marca}</p>
      <p id="modeloClie">Modelo: ${json.modelo}</p>
      <p id="colorClie">Color: ${json.color}</p>
      <p id="conductorClie">Conductor: ${json.nombreConductor}</p>
      <p id="pagoClie">Mensualidad: ${json.pagoMensual}</p>  
      `;
      info.appendChild(container);
    })
    .catch(
      () => (infoRead.textContent = "El vehículo NO se encuentra registrado")
    );
}

function update(
  inputplaca,
  inputmarca,
  inputmodelo,
  inputcolor,
  inputconductor,
  inputmes
) {
  let data = {
    placa: inputplaca,
    marca: inputmarca,
    modelo: inputmodelo,
    color: inputcolor,
    nombreConductor: inputconductor,
    pagoMensual: inputmes,
  };
  fetch(`http://localhost:3000/clients/update`, {
    method: "put",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => {
      console.log(res);
      if (res.status == 400) {
        infoUpdate.textContent = "ERROR: Todos los campos son obligatorios";
        setTimeout(() => {
          infoUpdate.textContent = "";
        }, 5000);
      }
      if (res.status == 200) {
        infoUpdate.textContent = "Vehículo Actualizado";
        inputPlacaU.value = "";
        inputMarcaU.value = "";
        inputModeloU.value = "";
        inputColorU.value = "";
        inputConductorU.value = "";
        inputMesU.value = "";
        setTimeout(() => {
          infoUpdate.textContent = "";
        }, 5000);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function funtDelete(inputplaca) {
  fetch(`http://localhost:3000/clients/delete/${inputplaca}`, {
    method: "delete",
  })
    .then((res) => {
      console.log(res);
      if (res.status == 400) {
        infoDelete.textContent = "ERROR: Vehículo no Registrado";
        setTimeout(() => {
          infoDelete.textContent = "";
        }, 5000);
      }
      if (res.status == 200) {
        infoDelete.textContent = "Vehículo Eliminado";
        inputPlacaD.value = "";
        setTimeout(() => {
          infoDelete.textContent = "";
        }, 5000);
      }
    })
    .catch(
      () => (infoDelete.textContent = "El vehículo NO se encuentra registrado")
    );
}
