/*-----------Parte A-------------------*/
/*1) Crea una aplicación que muestre un botón titulado Booola, cuya posición aproximada sea centrada en la
parte inferior de la ventana (a una distancia fija del borde inferior):
*/

let divArriba=document.createElement('div')
divArriba.setAttribute('style','height: 600px');
document.body.appendChild(divArriba);

let divAbajo=document.createElement('div');
divAbajo.setAttribute('style','height: 70px; justify-content: center;display: flex');
document.body.appendChild(divAbajo);


let botonBolas=document.createElement('input');

botonBolas.type="button";
botonBolas.id="idBolas";
botonBolas.value="Boooolas";

divAbajo.appendChild(botonBolas);

/*-------------Parte B------------------*/

const diametrosArray=[
    80,34,50,120,8,62,17
];

const coloresArray=[
    'linear-gradient(to bottom, #2196f3, #009688)',
    'linear-gradient(to left, #D196f3, #539688)',
    'linear-gradient(to top, #5196f3, #709688)',
    'linear-gradient(to right, #4196f3, #909688)',
    'linear-gradient(to right, #2196f3, #D09688)'
];
let i=0;
let j=0;
function ponerBola() {
    if (i===diametrosArray.length){
        i=0
    }
    if (j===coloresArray.length){
        j=0
    }
    let bola= document.createElement('div');
    bola.setAttribute('style',`float:left; border-radius: 50%; background: ${coloresArray[j]}; width: ${diametrosArray[i]}px; height: ${diametrosArray[i]}px; margin: 10px`);
    divArriba.appendChild(bola);
    i++;
    j++;
}
botonBolas.addEventListener('click', ponerBola);
    