let xDiana=50;
let velocidad=10;
let pasoDerecha;
let pasoIzq;

let intervalDiana=setInterval(moverDiana,50);
if (document.getElementById('idDiana').style.left==window.innerWidth){
    pasoIzq=true;
}else if(document.getElementById('idDiana').style.left==0){
    pasoDerecha=true;
}

function moverDiana() {
    xDiana+=velocidad;
    document.getElementById('idDiana').style.left=`${xDiana}px`;
    
    
}
console.log(document.getElementById('carrusel').style.width);

