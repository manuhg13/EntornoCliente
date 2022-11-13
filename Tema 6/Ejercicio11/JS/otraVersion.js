let intervaloBalon;
let intervaloPorteria;
let tiroHecho=false;
let sonidoActivo=true;

let velocidad=10;
let xPorteria=0;
let yPorteria=0;
const balon=document.getElementById('idBalon');
const porteria=document.getElementById('idPorteria');

let xVelocidadBalon=10;
let yVelocidadBalon=18;

let xBalon=document.documentElement.clientWidth/2;
let yBalon=750;

let marcadorFallos= document.getElementById('idFallos');
let marcadorGoles= document.getElementById('idGoles');
let entra=false;
let goles=0;
let fallos=0;


const inputVelPor= document.getElementById('idVelPor');
const inputDiaPor= document.getElementById('idDiaPor');
const inputVelBal= document.getElementById('idVelBal');


/* ---------------------------Mover y desplazar -------------------------------------*/
function colocar() {
    yPorteria= porteria.getBoundingClientRect().top;

}

const desplazarPorteria=() => {
    xPorteria += velocidad;
    porteria.style.left=`${xPorteria}px`;
    if ((xPorteria+50) >= document.documentElement.clientWidth - 50){
        velocidad= velocidad *(-1);
    }

    if (xPorteria <=0) {
        velocidad=velocidad * (-1);
    } 
}

function desplazarBalon() {
    yBalon-=yVelocidadBalon;
    balon.style.top=`${yBalon}px`;

    if (yBalon < 90 ) {
        yBalon=750;
        fueras();
        clearInterval(intervaloBalon);
    }

    if (gol()) { 
        clearInterval(intervaloBalon);
        yBalon=750;
        dentros();
        if (sonidoActivo){
            document.getElementById("CR7").play();       
        }  
        console.log(fallos);
    }
    balon.style.top=`${yBalon}px`;
    
}
       
    
function gol() {
    let posiPorteria= porteria.getBoundingClientRect();
    let posiBalon= balon.getBoundingClientRect();

    if (posiPorteria.x < posiBalon.x + posiBalon.width &&
        posiPorteria.x + posiPorteria.width > posiBalon.x &&
        posiPorteria.y < posiBalon.y + posiBalon.height &&
        posiPorteria.height + posiPorteria.y > posiBalon.y){
            return true;
    }else{
        return false;
    }
           
}

const chutar= ()=>{
    tiroHecho=true;
    if(sonidoActivo){
        document.getElementById("alPalo").play();
    }
    intervaloBalon=setInterval(desplazarBalon,50);
}

function escucharTeclas(evento) {
    switch (evento.key) {
        case 'ArrowLeft':
            xBalon-= xVelocidadBalon;
            balon.style.left=`${xBalon}px`
            break;
    
        case 'ArrowRight':
            xBalon += xVelocidadBalon;
            balon.style.left=`${xBalon}px`;
            break;
    
        case ' ':
            
            chutar();
            break;
    
        default:
            break;
    }
}

function comenzar() {
    balon.style.top=`${yBalon}px`; 
    balon.style.left=`${xBalon}px`;
    console.log('comenzar');
    intervaloPorteria=setInterval(desplazarPorteria,50);
    document.body.addEventListener('keydown',escucharTeclas);
    
}

document.addEventListener('load',comenzar());

/*-----------------Activar sonidos -----------------------*/
let botonSonido=document.getElementById('idSonido');

function controlSonido() {
    if (sonidoActivo) {
        sonidoActivo=false;
        botonSonido.value='Activar sonido';
        botonSonido.classList.remove('fallos');
        botonSonido.classList.add('goles');
    }else if(!sonidoActivo){
        sonidoActivo=true;
        botonSonido.value='Desactivar sonido';
        botonSonido.classList.remove('goles');
        botonSonido.classList.add('fallos');
    }
}

/*----------------- goles y fallos -----------*/

function fueras() {
    fallos++;
    marcadorFallos.innerHTML=`Fallos: ${fallos}`;
}
function dentros() {
    goles++;
    marcadorGoles.innerHTML=`Goles: ${goles}`;

    if (goles==3){
        document.getElementById('id3Aciertos').setAttribute('checked','checked');
        yVelocidadBalon=yVelocidadBalon/2;
        document.body.style.backgroundColor='red'
    }else if(goles%3==0) {
        if (goles==6) {
            document.getElementById('id6Aciertos').setAttribute('checked','checked');
        }
        yVelocidadBalon=yVelocidadBalon/2;
    }
}
function resetearMarcadores() {
    fallos=0;
    goles=0;
    marcadorFallos.innerHTML=`Fallos: ${fallos}`;
    marcadorGoles.innerHTML=`Goles: ${goles}`;
}

/*-----Modificar dificultad------*/
inputVelPor.addEventListener('change', cambioVelocidadPorteria);
inputVelBal.addEventListener('change', cambioVelocidadBalon);
inputDiaPor.addEventListener('change', cambiarPorteria);

function cambioVelocidadPorteria() {
    velocidad= parseInt(inputVelPor.value);
}
function cambioVelocidadBalon() {
    xVelocidadBalon= parseInt(inputVelBal.value);
}
function cambiarPorteria() {
    porteria.style.fontSize=parseInt(inputDiaPor.value) + "px";
    porteria.style.height=parseInt(inputDiaPor.value) + "px";
    porteria.style.width=parseInt(inputDiaPor.value) + "px";
}