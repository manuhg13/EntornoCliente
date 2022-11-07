/*let xDiana=0;
let velocidad=10;

let izquierda;
let derecha;

let intervalDiana=setInterval(limita,50);
const diana=document.getElementById('idDiana');
const carrusel=document.getElementById('carrusel');

function moverDiana() {
    
    if (derecha=true){
        xDiana+=velocidad;
        diana.style.left=`${xDiana}px`;      
    }else if(izquierda=true){
        xDiana-=velocidad;
        diana.style.left=`${xDiana}px`;
    }
    
    
}

window.requestAnimationFrame()
function limita() {
    if (diana.style.left==(carrusel.clientWidth-30)) {
        izquierda=true;
        derecha=false;
    }else if(diana.style.left==0){
        derecha= true;
        izquierda=false;
    }
    moverDiana();
}*/

const diana=document.getElementById('idDiana');
const carrusel=document.getElementById('carrusel');

let left=0;
let timer;

timer=setInterval(() => {
    diana.style.left=(left+=10) +"px";
    if (left==carrusel.clientWidth-30) {
        clearInterval(timer);
    }
}, 20);