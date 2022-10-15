const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let i=0;

function escribirMeses() {
    const ul = document.getElementById("lista");
    const li= document.createElement("li");
    li.appendChild(document.createTextNode(meses[i]));
    ul.appendChild(li);
    i++;
}
