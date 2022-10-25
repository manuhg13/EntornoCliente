function pintarRombo() {

    let filas=parseInt(document.getElementById('filas').value);
    let arriba=(filas/2)+1;
    let abajo=filas-arriba;

    for (let i=1; i <= arriba ; $i++) {

        for (let espacios=1; espacios<=arriba-i; espacios++) { 
           document.innerHTML+="&nbsp;&nbsp";
        }
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {    
            document.innerHTML+="*";
        } 
        document.innerHTML+="<br>";
    }
    for (let i=abajo; i >= 1 ; i--) { 
        for (let espacios=1; espacios<=3-$i; espacios++) { 
            document.innerHTML+="&nbsp;&nbsp";
        }
        for (let asteriscos=1; asteriscos <=(i*2)-1; asteriscos++) {    
            document.innerHTML+="*";
        } 
        document.innerHTML+="<br>";
    }
}