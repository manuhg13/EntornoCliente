
let intervalDiana=setInterval(limita,50);
const diana=document.getElementById('idPorteria');
const carrusel=document.getElementById('carrusel');
const balon= document.getElementById('idBalon');

let left=0;
let timer;

let posicionBalon= getComputedStyle(balon,null).getPropertyValue('left').slice(0,-2);

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

document.addEventListener('keydown',function(e) {
    console.log(e);
    if (e.key=="ArrowRight") {
        posicionBalon+=10;
        balon.style.left+=`${posicionBalon}px `;
    }else if (e.key == "ArrowLeft") {
        posicionBalon-=10;
        balon.style.left=`${posicionBalon}px`;
    }
})
function moverDiana() {
    if (derecha){
        diana.style.left=(left+=10) +"px";      
    }else if(izquierda){
        diana.style.left=(left-=10) +"px";
    }   
}