
let intervalDiana=setInterval(limita,50);
const porteria=document.getElementById('idPorteria');
const carrusel=document.getElementById('carrusel');
const balon= document.getElementById('idBalon');

let left=0;
let timer;

let xBalon= document.documentElement.clientWidth/2;
let yBalon= getComputedStyle(balon,null).getPropertyValue('top').slice(0,-2);
balon.style.left=`${xBalon}px`;
//let posicionBalon= getComputedStyle(balon,null).getPropertyValue('left').slice(0,-2);

let izquierda;
let derecha =true;

function limita() {
    if (left==document.documentElement.clientWidth-50) {
        izquierda=true;
        derecha=false;
    }else if(left==0){
        derecha= true;
        izquierda=false;
    }
    moverDiana();
}

let tiro;

function acierto() {
    let posiPorteria= porteria.getBoundingClientRect();
    let posiBalon= balon.getBoundingClientRect();

    console.log(posiBalon);
    console.log(posiPorteria);

    if ((posiPorteria.x + posiPorteria.width) > posiBalon.x && posiBalon.y < posiPorteria.bottom &&
    posiPorteria.x < (posiBalon.x + posiBalon.width) ) {
        return true;
        
    }

    return false;
}


function chutar() {
    disparado=true;
    yBalon-=10;
    balon.style.top=`${yBalon}px`;
    if(yBalon < 0){
        balon.style.top="720px"
        clearInterval(tiro);
        comenzar();         
    }

    if (acierto()){
        clearInterval(intervalDiana);
        clearInterval(tiro);
    }
}

document.addEventListener('keydown',function(e) {
    
    switch (e.key) {
        case "ArrowRight":
            xBalon+=10;
            balon.style.left=`${xBalon}px`;
            break;
    
        case "ArrowLeft":
            xBalon-=10;
            balon.style.left=`${xBalon}px`;
            break;
    
        case "ArrowUp":
            tiro= setInterval(chutar,50);
            break;
    
        default:
            break;
    }
    
})
function moverDiana() {
    if (derecha){
        porteria.style.left=(left+=10) +"px";      
    }else if(izquierda){
        porteria.style.left=(left-=10) +"px";
    }   
}
