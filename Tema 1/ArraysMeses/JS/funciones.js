const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
"Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let i=0;
let j=0;
function quitaPon() {
    if (i==meses.length) {

        quitarMeses();
        if (j==meses.length) {
            i=0;
        }
    }else{
        j=0
        escribirMeses();
    }
}

function quitarMeses() {
    const ul = document.getElementById("lista");
    let li=document.getElementById(meses[j]);
    ul.removeChild(li);
    j++;
}

function escribirMeses() {  
    const ul = document.getElementById("lista");
    const li= document.createElement("li");
    li.setAttribute('id',meses[i])
    li.appendChild(document.createTextNode(meses[i]));
    ul.appendChild(li);
    i++;  
    console.log(meses.length);
}
