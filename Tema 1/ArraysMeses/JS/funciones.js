const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
"Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let i=0;
let j=0;
let boton=document.getElementById('boton');
boton.innerHTML="Añadir";
function quitaPon() {
    if (i==meses.length) {
        boton.innerHTML="Quitar";
        quitarMeses();
        if (j==meses.length) {
            i=0;
        }
    }else{
        boton.innerHTML="Añadir";
        j=0
        escribirMeses();
    }
    
    if (i==12){
        boton.innerHTML="Quitar";
    } else if(i==0) {
        boton.innerHTML="Añadir";

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
}
