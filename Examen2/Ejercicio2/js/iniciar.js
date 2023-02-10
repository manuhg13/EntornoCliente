const SERVER = "http://192.168.2.205:4000";

const boton = document.createElement("button");
boton.innerHTML = "INICIAR";

let arrayPalos = ["OROS", "COPAS", "ESPADAS", "BASTOS"];
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
let arrayLugares = [
  "Jugador1",
  "Jugador2",
  "Jugador3",
  "Jugador4",
  "Baraja",
  "Descartes",
];
let texto="";
boton.addEventListener("click", async function () {
  for await (const palo of arrayPalos) {
    let obj = {
      id: "",
      name: palo,
    };
    const dato1 = await anadirPalo(obj);
  }
  for await (const palo of arrayPalos) {
    for await (const numero of arrayNumeros) {
      let carta = {
        id: "",
        palo: palo,
        carta: numero,
        lugar: "mazo",
      };

      const datos2 = await anadirNaipe(carta);

      /*let objeto=JSON.parse(datos2);

      texto+=`${objeto.cata} de ${objeto.palo} | `;*/

    }
  }

  for await (const lugar of arrayLugares) {
        let obj = {
      id: "",
      name: lugar,
     };

     const datos3 = await anadirLugar(lugar);
    }


  let parrafo = document.createElement("p");

  parrafo.appendChild(document.createTextNode(texto));

  document.getElementById("div04").appendChild(parrafo);

});

async function anadirNaipe(carta) {
  fetch(`${SERVER}/naipes`, {
    method: "POST",
    body: JSON.stringify(carta),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
      }

      return response.json();
    })
    .then((datos) => {
      alert("Datos en naipes bien insertados");
    })
    .catch((error) => console.error(error));
}

async function anadirPalo(obj) {
  fetch(`${SERVER}/palos`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
      }

      return response.json();
    })
    .then((datos) => {
      alert("Datos en palos bien insertados");
    })
    .catch((error) => console.error(error));
}
async function anadirLugar(lugar) {
  
    fetch(`${SERVER}/lugar`, {
      method: "POST",
      body: JSON.stringify(lugar),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }

        return response.json();
      })
      .then((datos) => {
        alert("Datos bien en lugar insertados");
      })
      .catch((error) => console.error(error));
  }

document.getElementById("div03").appendChild(boton);
