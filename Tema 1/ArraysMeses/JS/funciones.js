const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let i=0;

function quitaPon() {
    if (i==meses.length) {
        i=0;
        quitarMeses();
    }else{
        escribirMeses();
    }
}

function quitarMeses() {
    const ul = document.getElementById("lista");
    const li= document.getElementById("li");
    li.appendChild(document.createTextNode(meses[i]));
    const borrar= document.getElementById(li.nodeValue);
    ul.removeChild(borrar);
}

function escribirMeses() {  
    const ul = document.getElementById("lista");
    const li= document.createElement("li");
    li.appendChild(document.createTextNode(meses[i]));
    ul.appendChild(li);
    i++;  
}
