/*--------------Parte 1 ------------------*/
/*a) Poner color de fondo a la página. */

document.body.style.backgroundColor="lightblue";

/*b) Que el conjunto de ambas listas esté centrado en la ventana.*/

let divCentrado= document.createElement('div');
divCentrado.setAttribute('style','display: flex; justify-content: center;');
let LIordenada= document.getElementById('idCiudades');
let LIdesordenada= document.getElementById('idHabitantes');
LIdesordenada.style.float="right";

let footer= document.getElementsByTagName("footer")[0];

document.body.appendChild(divCentrado);
divCentrado.appendChild(LIordenada);
divCentrado.appendChild(LIdesordenada);
document.body.appendChild(footer);


/*--------------Parte 2--------------------*/

/*a) Crear una función que reciba un array con los elementos (LI) de la lista ordenada y otro array con los
elementos (LI) de la lista desordenada. La función devolverá un array de objetos ciudades, donde cada
objeto tendrá las propiedades que se observan en pantalla de cada ciudad.*/
function crearObjetos() {
    let sitio=Array.from(LIordenada.children);
    let habitantes= Array.from(LIdesordenada.children);

    let ciudades= [];
    for (let i = 0; i < sitio.length;i++){
        let objeto ={
            ciudad: sitio[i].innerHTML, 
            poblacion: parseInt(habitantes[i].innerHTML)
        }
        ciudades.push(objeto);
    }

    return ciudades;
}
//console.log(crearObjetos());

/*b) Crear un sistema para que el usuario de la página pueda ordenar estas listas de forma alfabética por
nombre de ciudad o por número de habitantes.*/

let listaDesordenada=crearObjetos();
console.log(listaDesordenada);
let alfabetica=listaDesordenada.sort(function(a,b){
    return a.ciudad.localeCompare(b.ciudad);
});
console.log(alfabetica);
let numero=listaDesordenada.sort(function (a,b) {
    return a.poblacion - b.poblacion;
});

let radios=[];
function crearRadios() {
    let sinOrdenar=document.createElement('input');
    sinOrdenar.type='radio';
    sinOrdenar.id='idSin';
    sinOrdenar.setAttribute('name','ordenar');
    //sinOrdenar.setAttribute('checked','checked');
    let porNombre=document.createElement('input');
    porNombre.type='radio';
    porNombre.id='idNombre';
    porNombre.setAttribute('name','ordenar');
    let porHabitantes=document.createElement('input');
    porHabitantes.type='radio';
    porHabitantes.id='idHabitantes';
    porHabitantes.setAttribute('name','ordenar');

    let SO =document.createElement('label');
    SO.id='idSin';
    SO.innerHTML="Sin Ordenar";
    let PN =document.createElement('label');
    PN.id='idNombre';
    PN.innerHTML='Por Nombre';
    let PH =document.createElement('label');
    PH.id='idHabitantes';
    PH.innerHTML="Por Habitantes";

    sinOrdenar.setAttribute('onchange','queOrden("idSin")');
    porNombre.setAttribute('onchange','queOrden("idNombre")');
    porHabitantes.setAttribute('onchange','queOrden("idHabitantes")');
    
    let divRadios=document.createElement('div')
    divRadios.setAttribute('style','display: flex; justify-content: center;');
    divRadios.appendChild(SO);
    divRadios.appendChild(sinOrdenar);
    divRadios.appendChild(PN);
    divRadios.appendChild(porNombre);
    divRadios.appendChild(PH);
    divRadios.appendChild(porHabitantes);
    document.body.appendChild(divRadios)

    radios.push(sinOrdenar);
    radios.push(porNombre);
    radios.push(porHabitantes);
    
}

crearRadios();
console.log(radios);
/*radios.forEach(element => {
    element.addEventListener('change',queOrden(element.id));
});*/

function queOrden(identificador) {
    switch (true) {
        case identificador==="idSin":
            for(let i=0; i<LIordenada.children.length;i++){
                LIordenada.children[i].innerHTML=`${listaDesordenada[i].ciudad}`;
                LIdesordenada.children[i].innerHTML=`${listaDesordenada[i].poblacion}`;
            }
            break;
    
        case identificador==="idNombre":
            for(let i=0; i<LIordenada.children.length;i++){
                LIordenada.children[i].innerHTML=`${alfabetica[i].ciudad}`;
                LIdesordenada.children[i].innerHTML=`${alfabetica[i].poblacion}`;
            }
            break;
    
        case identificador==="idHabitantes":
            for(let i=0; i<LIordenada.children.length;i++){
                LIordenada.children[i].innerHTML=`${numero[i].ciudad}`;
                LIdesordenada.children[i].innerHTML=`${numero[i].poblacion}`;
            }
            break;
    
        default:

            break;
    }
}



