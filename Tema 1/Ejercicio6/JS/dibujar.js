
function pintarRombo() {

    const filas=parseInt(document.getElementById('filas').value);
    let arriba;
    let abajo;
    if (filas%2==0){
        arriba=filas/2;
        abajo=filas/2;
    }else {
        arriba=parseInt(filas/2)+1;
        abajo=filas/2;
    }
    const div= document.getElementById('aqui');
   
    if(div.innerHTML != "" ){
        div.innerHTML="";
    }
    

    for (i=1; i <= arriba ; i++) { 
        for (let espacios=1; espacios<=arriba-i; espacios++) { 
            div.innerHTML+="&nbsp;&nbsp";
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
    for (let i=abajo; i >= 0 ; i--) { 
        for (let espacios=1; espacios<=abajo-i; espacios++) { 
            div.innerHTML+="&nbsp;&nbsp";
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