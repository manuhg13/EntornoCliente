let xDiana=50;
let velocidad=10;
let pasoDerecha;
let pasoIzq;

if (document.getElementById('idDiana').style.left==window.innerWidth){
    pasoIzq=true;
}else if(document.getElementById('idDiana').style.left==0){
    pasoDerecha=true;
}

function moverDiana() {
    if (pasoDerecha) {
        xDiana+=velocidad;
        document.getElementById('idDiana').style.left=`${xDiana}px`;
        pasoIzq=false;
    }else if(pasoIzq){
        xDiana-=velocidad;
        document.getElementById('idDiana').style.left=`${xDiana}px`;
        pasoDerecha=false;
    }
    
}
console.log(document.getElementById('carrusel').style.width);
let intervalDiana=setInterval(moverDiana,50);
