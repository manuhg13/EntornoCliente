
  let arrayPalos = ["OROS", "COPAS", "ESPADAS", "BASTOS"];
  let arrayLugares = [
    "Jugador1",
    "Jugador2",
    "Jugador3",
    "Jugador4",
    "Baraja",
    "Descartes",
  ];

  for (const palo of arrayPalos) {
    let opt=document.createElement('option');

    opt.innerHTML=palo;
    opt.value=palo;

    document.getElementById("palos").appendChild(opt);
  }
  for (const lugar of arrayLugares) {
    let opt=document.createElement('option');

    opt.innerHTML=lugar;
    opt.value=lugar;

    document.getElementById("lugares").appendChild(opt);
  }

  //-----------Evento---------------------
  document.getElementById('formulario').addEventListener('submit',function(evento){
    evento.preventDefault();

    let valido=true;

    const inputs= document.getElementById('formulario').querySelectorAll("select[required]");

    inputs.forEach(campo=>{
        if (campo.value==="0") {
            valido=false;
        }
    });

    if (!valido) {
        alert("Selecciona un opcion");
    }else{
        document.getElementById('parrafo').innerHTML='';

        document.getElementById('parrafo').innerHTML=`Has elegido ${palos.value} de ${lugares.value}`;

        document.getElementById('div04').appendChild(parrafo);
    }
    
  })