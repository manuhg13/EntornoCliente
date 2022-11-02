//----------------------------Funciones para cambiar el CSS ------------------------------//

function quitarHTML() {
    document.getElementById('ej8').classList.toggle('ej8');
}

function ponerCont() {
    document.getElementById('contenedor').classList.add('contenedor');
}
function quitarCont() {
    document.getElementById('contenedor').classList.toggle('contenedor');
}
function quitarLetras() {
    let letras= Array.from(document.querySelectorAll('#letras'));
    letras.forEach(elemento => elemento.classList.toggle('blanco'));
}

function ponerRombo() {
    document.getElementById('aqui').classList.add('rombo');
}
function quitarRombo() {
    document.getElementById('aqui').classList.toggle('rombo');
}

//-------------------------Función para pintar el rombo ------------------------------------//

function pintarRombo() {
    //Cogemos los elementos del HTML 
    const filas=parseInt(document.getElementById('filas').value);
    const div= document.getElementById('aqui');

    //Declaramos la division del rombo en dos partes  
    let arriba;
    let abajo;

    /*Comprobamos si el número de filas es par o impar,
    para la asignacion de más filas arriba si fuera impar*/
    if (filas%2==0){
        arriba=filas/2;
        abajo=filas/2;
    }else {
        arriba=parseInt(filas/2)+1;
        abajo=parseInt(filas/2);;
    }
    
    //Limpiamos el div si NO estuviera vacío
    if(div.innerHTML != "" ){
        div.innerHTML="";
    }
    

    for (let i=1; i <= arriba ; i++) { 

        //En primer lugar, escribiremos los espacios que le separarán del margen 

        for (let espacios=1; espacios<=arriba-i; espacios++) { 
            /*La fuente predeterminada de HTML NO es monoespaciada, 
            por lo que se debe poner dos espacios en lugar de uno*/
            div.innerHTML+="&nbsp;&nbsp";
        }
        //En segundo lugar, se colocan los asteriscos
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {  
            /*Sin esta condición, rellenaría toda la fila de asteriscos. 
            Gracias a ella podemos escribir solo un asterisco al principio del bucle y al final*/   
            if (asteriscos==1 || asteriscos==(i*2)-1) {
                div.innerHTML+="*";
            }else {
                div.innerHTML+="&nbsp;&nbsp;";
            }        
        } 
        /*Esto genera un salto de linea al acabar de 
        escribir los espacios y asteriscos que corresponden*/
        div.innerHTML+="<br>";
    }
    //Esta ver haremos la parte de abajo del rombo
    for (let i=abajo; i >= 1 ; i--) { 
        /*Si es impar tiene que añadir un espacio más en la primera fila que escribe,
        en cambio si es par, debe estar alineado con la ultima fila escrita de la parte de arriba */ 
        if (filas%2==0) {
            for (let espacios=1; espacios<=abajo-i; espacios++) { 
                div.innerHTML+="&nbsp;&nbsp";
            }           
        }else{
            for (let espacios=0; espacios<=abajo-i; espacios++) { 
                div.innerHTML+="&nbsp;&nbsp";
            }
        }
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {    
            if (asteriscos==1 || asteriscos==(i*2)-1) {
                div.innerHTML+="*";
            }else {
                div.innerHTML+="&nbsp;&nbsp;";
            }
        } 
        div.innerHTML+="<br>";
    }
}