function pintarRombo() {

    let filas=parseInt(document.getElementById('filas').value);
    let arriba=(filas/2)+1;
    let abajo=filas-arriba;

    let parrafo=document.createElement('pre');
    let salto=document.createElement('br');
    


    /*for (let i=1; i <= arriba ; i++) {
        let linea='';
        for (let espacios=1; espacios<=arriba-i; espacios++) { 
            linea+=" ";
        }
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {    
            linea+="*";
        } 
        document.body.appendChild(salto);
        document.body.appendChild(parrafo.appendChild(document.createTextNode(linea)));
    }
    for (let i=abajo; i >= 1 ; i--) { 
        let linea='';
        for (let espacios=1; espacios<=3-i; espacios++) { 
            linea+=" ";
        }
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {    
            linea+="*";
        } 
        document.body.appendChild(salto);
        document.body.appendChild(parrafo.appendChild(document.createTextNode(linea)));
    }*/

    for (i=1; i <= arriba ; i++) { 
        for (let espacios=1; espacios<=arriba-i; espacios++) { 
            document.innerHTML+="&nbsp;&nbsp";
        }
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {    
            if (asteriscos==1 || asteriscos==($i*2-1)) {
                document.innerHTML+="*";
            }else {
                document.innerHTML+="&nbsp;&nbsp;";
            }        
        } 
        document.innerHTML+="<br>";
    }
    for (let i=abajo; i >= 1 ; i--) { 
        for (let espacios=1; espacios<=3-i; espacios++) { 
            document.innerHTML+="&nbsp;&nbsp";
        }
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {    
            if (asteriscos==1 || asteriscos==(i*2-1)) {
                document.innerHTML+="*";
            }else {
                document.innerHTML+="&nbsp;&nbsp;";
            }
        } 
        document.innerHTML+="<br>";
    }
}