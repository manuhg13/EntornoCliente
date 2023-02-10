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

boton.addEventListener("click", async function () {
  for await (const palo of arrayPalos) {
    let obj = {
      id: "",
      name: palo,
    };
    const dato1 = await anadirPalo(obj);
  }
  for await (const palo of arrayPalos) {
    for (const numero of arrayNumeros) {
      let carta = {
        id: "",
        palo: palo,
        carta: numero,
        lugar: "mazo",
      };

      const datos2 = await anadirNaipe(carta);
    }
  }
  postTablaLugar("/lugar");
  const [naipes] = await Promise.all([getTabla("/naipes")]);

  renderMazo(naipes);
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
async function postTablaLugar(lugar) {
  for await (const lugar of arrayLugares) {
    let obj = {
      id: "",
      name: lugar,
    };
    fetch(`${SERVER}${lugar}`, {
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
        alert("Datos bien en lugar insertados");
      })
      .catch((error) => console.error(error));
  }
}

async function getTabla(tabla) {
  const response = await fetch(`${SERVER}${tabla}`);

  if (!response.ok) {
    throw `Error ${response.status}de la BBDD: ${response.statusText}`;
  }

  const datos = await response.json();

  return datos;
}

function renderMazo(naipes) {
  let parrafo = document.createElement("p");

  let texto = naipes.reduce(
    (cadena, carta) => (cadena += `${carta.carta} de ${carta.palo} | `)
  );

  parrafo.appendChild(document.createTextNode(texto));

  document.getElementById("div04").appendChild(parrafo);
}

document.getElementById("div03").appendChild(boton);
