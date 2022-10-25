
function pintarRombo() {

    const filas=parseInt(document.getElementById('filas').value);
    const arriba=(filas/2)+1;
    const div= document.getElementById('aqui');
   
    if(div.innerHTML != "" ){
        div.innerHTML="";
    }
    

    for (i=1; i <= filas/2 +1 ; i++) { 
        for (let espacios=1; espacios<=filas-i; espacios++) { 
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
    for (let i=filas; i >= 1 ; i--) { 
        for (let espacios=1; espacios<=filas-i; espacios++) { 
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