let verde= document.getElementById('verde');
let rojo= document.getElementById('rojo');
let pulVerde=0;
let pulRojo=0;
rojo.appendChild(document.createTextNode(pulRojo));
verde.appendChild(document.createTextNode(pulVerde));


function masVerde() {
    verde.innerHTML++; 
}

function masRojo() {
    rojo.innerHTML++;
}
