
let intervalDiana=setInterval(limita,50);
const diana=document.getElementById('idPorteria');
const carrusel=document.getElementById('carrusel');
const balon= document.getElementById('idBalon');

let left=0;
let timer;

let izquierda;
let derecha =true;

function limita() {
    if (left==window.screen.width-50) {
        izquierda=true;
        derecha=false;
    }else if(left==0){
        derecha= true;
        izquierda=false;
    }
    moverDiana();
}

balon.addEventListener('keydown',function(e) {
    if (e.key=="ArrowRight") {
        balon.style.right+=10 + "px";
    }
})
function moverDiana() {
    if (derecha){
        diana.style.left=(left+=10) +"px";      
    }else if(izquierda){
        diana.style.left=(left-=10) +"px";
    }   
}