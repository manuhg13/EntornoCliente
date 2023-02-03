const SERVER = "http://192.168.2.205:3000";

window.addEventListener("load", () => {
  $("#formulario").submit(async function (e) {
    e.preventDefault();

    let idProd = document.getElementById("id").value;

    if (isNaN(idProd) || idProd.trim() == "") {
      alert("Debes introducir un nº");
    } else {
      const datos = await getProducto(idProd);

      document.getElementById("cuerpo").innerHTML = "";
      let linea = document.createElement("tr");

      let id = document.createElement("td");
      id.appendChild(document.createTextNode(datos.id));
      linea.appendChild(id);

      let nombre = document.createElement("td");
      nombre.appendChild(document.createTextNode(datos.name));
      linea.appendChild(nombre);

      let descrip = document.createElement("td");
      descrip.appendChild(document.createTextNode(datos.descrip));
      linea.appendChild(descrip);

      let funciones = document.createElement("td");
      let boton1 = document.createElement("button");
      boton1.innerHTML = "Modificar";
      boton1.setAttribute("class", "btn btn-outline-dark m-1");
      funciones.appendChild(boton1);
      boton1.addEventListener("click", function () {
        let padreBoton = this.parentNode;
        let objetivo = padreBoton.parentNode;
        document.getElementById("modId").value = objetivo.children[0].innerHTML;
      });
      linea.appendChild(funciones);

      document.getElementById("cuerpo").appendChild(linea);
    }
  });
});

async function getProducto(idProd) {
  const response = await fetch(`${SERVER}/productos/${idProd}`);

  if (!response.ok) {
    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
  }

  const datos = await response.json();

  return datos;
}

//-----------------------------------------------------------------------------------

$("#listar").click(async function (e) {
  e.preventDefault();
  const datos = await todos();

  document.getElementById("cuerpo").innerHTML = "";

  datos.forEach((element) => {
    let linea = document.createElement("tr");

    let id = document.createElement("td");
    id.appendChild(document.createTextNode(element["id"]));
    linea.appendChild(id);

    let nombre = document.createElement("td");
    nombre.appendChild(document.createTextNode(element["name"]));
    linea.appendChild(nombre);

    let descrip = document.createElement("td");
    descrip.appendChild(document.createTextNode(element["descrip"]));
    linea.appendChild(descrip);
    document.getElementById("cuerpo").appendChild(linea);

    let funciones = document.createElement("td");
    let boton1 = document.createElement("button");
    boton1.innerHTML = "Modificar";
    boton1.setAttribute("class", "btn btn-outline-dark m-1");
    funciones.appendChild(boton1);
    boton1.addEventListener("click", function () {
      let padreBoton = this.parentNode;
      let objetivo = padreBoton.parentNode;
      document.getElementById("modId").value = objetivo.children[0].innerHTML;
    });
    linea.appendChild(funciones);
  });
});

async function todos() {
  const response = await fetch(`${SERVER}/productos`);

  if (!response.ok) {
    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
  }

  const datos = await response.json();

  return datos;
}

//----------------------------------------------------------------------------------

$('#introducir').submit(async function (e) { 
  e.preventDefault();
  const prod={
    id: '',
    name:document.getElementById('name').value,
    descrip:document.getElementById('descrip').value
  } 

  await insertProd(prod);

  alert('Esta bien hecho')

  
});

async function insertProd(prod){
  const response = await fetch(`${SERVER}/productos`,{
    method: 'POST',
    body: JSON.stringify(prod),
    headers:{
        'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
  }

  const datos= await response.json();

  return datos;
}

//---------------------------------------------------------

$('#modificar').submit(async function (e) { 
  e.preventDefault();
  let idProd=document.getElementById('modId').value
  let datos=document.getElementById('datos').value
  const prod={
    [document.getElementById('propiedad').value]: datos
  }

  if (isNaN(idProd) || idProd.trim()=="") {
    alert("Debes introducir un nº");
  }else{
   await modProd(prod,idProd);

   alert('Datos modificados');
  }

});

async function modProd(prod,idProd){
  const response= await fetch(`${SERVER}/productos/${idProd}`,{
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(prod)
  })

  if (!response.ok) {
    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
  }

  const datos= await response.json();

  return datos;

}