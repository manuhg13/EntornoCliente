const verde=document.createElement('button');
verde.setAttribute('id','verde');
verde.style.backgroundColor="green";
verde.style.display="block";
verde.style.color="white";
let pulVerde=0;
document.appendChild(verde);

//----------------------------------

const rojo=document.createElement('button');
rojo.setAttribute('id','rojo');
rojo.style.display="block";
rojo.style.backgroundColor="red";
rojo.style.color="white";
let pulRojo=0;
document.appendChild(rojo);

function masVerde() {
    pulVerde++;
    verde.appendChild(document.createTextNode(pulVerde));
}

function masRojo() {
    pulRojo++;
    rojo.appendChild(document.createTextNode(pulRojo));
}
