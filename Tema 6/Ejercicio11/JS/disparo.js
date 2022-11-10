
let intervalDiana=setInterval(limita,50);
const diana=document.getElementById('idPorteria');
const carrusel=document.getElementById('carrusel');
const balon= document.getElementById('idBalon');

let left=0;
let timer;

let xBalon= document.documentElement.clientWidth/2;
let yBalon= flecha.style.top;
balon.style.left=`${xBalon}px`;
//let posicionBalon= getComputedStyle(balon,null).getPropertyValue('left').slice(0,-2);

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
    switch (e.key) {
        case "ArrowRight":
            xBalon+=10;
            balon.style.left+=`${xBalon}px`;
            break;
    
        case "ArrowLeft":
            xBalon-=10;
            balon.style.left=`${xBalon}px`;
            break;
    
        default:
            break;
    }
    /*if (e.key=="ArrowRight") {
       
    }
    if (e.key == "ArrowLeft") {
       
    }*/
})
function moverDiana() {
    if (derecha){
        diana.style.left=(left+=10) +"px";      
    }else if(izquierda){
        diana.style.left=(left-=10) +"px";
    }   
}