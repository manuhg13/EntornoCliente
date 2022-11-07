let xDiana=50;
let velocidad=10;

function moverDiana() {
    xDiana+=velocidad,
    document.getElementById('idDiana').style.left=`${xDiana}px`
}

let intervalDiana=setInterval(moverDiana,50);
