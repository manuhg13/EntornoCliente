let intervaloBalon;
let intervaloPorteria;
let tiroHecho=false;
let sonidoActivo=true;

let velocidad=10;
let xPorteria=0;
let yPorteria=0;
const balon=document.getElementById('idBalon');
const porteria=document.getElementById('idPorteria');

let xVelocidadBalon=4;
let yVelocidadBalon=18;

let xBalon=0;
let yBalon=500;

let posiPorteria= porteria.getBoundingClientRect();
let posiBalon= balon.getBoundingClientRect();

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
    balon.style.top`${yBalon}px`;

    if (yBalon < 0 ) {
        yBalon=500;
        clearInterval(intervaloBalon);
        clearInterval(intervaloPorteria);
    }

    balon.style.top=`${yBalon}px`;

    if ((posiPorteria.x + posiPorteria.width) > posiBalon.x && posiBalon.y < posiPorteria.bottom &&
    posiPorteria.x < (posiBalon.x + posiBalon.width) ) {
        if (sonidoActivo){
            document.getElementById("CR7").play();
            clearInterval(intervaloBalon);
            clearInterval(intervaloPorteria);
        }  
    }else{
        if (sonidoActivo){
            document.getElementById("fuera").play();
        }
    }
}