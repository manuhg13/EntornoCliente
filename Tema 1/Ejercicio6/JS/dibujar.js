
function pintarRombo() {

    const filas=parseInt(document.getElementById('filas').value);
    const div= document.createElement('div');

    if(div.innerHTML != "" ){
        div.innerHTML="";
    }
    

    for (i=1; i <= filas ; i++) { 
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
        document.body.innerHTML+="<br>";
    }
    for (let i=filas; i >= 1 ; i--) { 
        for (let espacios=1; espacios<=filas-i; espacios++) { 
            div.innerHTML+="&nbsp;&nbsp";
        }
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {    
            if (asteriscos==1 || asteriscos==(i*2)-1) {
                div.innerHTML+="*";
            }else {
                document.body.innerHTML+="&nbsp;&nbsp;";
            }
        } 
        div.innerHTML+="<br>";
    }
}