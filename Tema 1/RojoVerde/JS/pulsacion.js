let verde= document.getElementById('verde');
let rojo= document.getElementById('rojo');
let pulVerde=0;
let pulRojo=0;
function masVerde() {
    document.createTextNode(pulVerde++);
    verde.replaceChild(pulVerde);  
}

function masRojo() {
    pulRojo++;
    rojo.removeChild(rojo.nodeValue);
    rojo.appendChild(document.createTextNode(pulRojo));
}
