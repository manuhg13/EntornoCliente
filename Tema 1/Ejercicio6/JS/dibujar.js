
function pintarRombo() {

    const filas=parseInt(document.getElementById('filas').value);
    

    for (i=1; i <= filas ; i++) { 
        for (let espacios=1; espacios<=filas-i; espacios++) { 
            document.body.innerHTML+="&nbsp;&nbsp";
        }
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {    
            if (asteriscos==1 || asteriscos==(i*2)-1) {
                document.body.innerHTML+="*";
            }else {
                document.body.innerHTML+="&nbsp;&nbsp;";
            }        
        } 
        document.body.innerHTML+="<br>";
    }
    for (let i=filas; i >= 1 ; i--) { 
        for (let espacios=1; espacios<=filas-i; espacios++) { 
            document.body.innerHTML+="&nbsp;&nbsp";
        }
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {    
            if (asteriscos==1 || asteriscos==(i*2)-1) {
                document.body.innerHTML+="*";
            }else {
                document.body.innerHTML+="&nbsp;&nbsp;";
            }
        } 
        document.body.innerHTML+="<br>";
    }
}