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

let xBalon=document.documentElement.clientWidth/2;;
let yBalon=750;

let marcadorFallos= document.getElementById('idFallos');
let marcadorGoles= document.getElementById('idGoles');
let goles=0;
let fallos=0;
//marcadorGoles.innerHTML+=`${goles}`;
//marcadorFallos.innerHTML+=`${fallos}`;

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

    if (yBalon < 0 ) {
        yBalon=750;
        clearInterval(intervaloBalon);
    }

    if ((yBalon <= (yPorteria + 50)) && (yBalon >= yPorteria)){
        if ((xBalon >= xPorteria) && (xBalon <= xPorteria+50)) { 
            if (sonidoActivo){
                document.getElementById("CR7").play();
                marcadorGoles.innerHTML=`Goles: ${goles++}`;
            }  
        }else{

            marcadorFallos.innerHTML=`Fallos: ${fallos=fallos+1 }`;
        }
    }else{
       
    }
    balon.style.top=`${yBalon}px`;
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
    
        case 'ArrowUp':
        if (!tiroHecho) {
            chutar();
        }    
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


