
let intervalDiana=setInterval(limita,50);
const diana=document.getElementById('idDiana');
const carrusel=document.getElementById('carrusel');

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

function moverDiana() {
    
    if (derecha){
        diana.style.left=(left+=10) +"px";      
    }else if(izquierda){
        diana.style.left=(left-=10) +"px";
    }   
}