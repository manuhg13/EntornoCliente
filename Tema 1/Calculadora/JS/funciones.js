function suma(n1,n2) {
    if ((isNaN(n1)) || (isNaN(n2))) {
        throw new Error("No son números")
    }
    return n1+n2;
}
function resta(n1,n2) {
    if ((isNaN(n1)) || (isNaN(n2))) {
        throw new Error("No son números")
    }
    return n1-n2;
}
function division(n1,n2) {
    if ((isNaN(n1)) || (isNaN(n2))) {
        throw new Error("No son números");
    } else if(n2>n1){
        throw new Error("Divisor mayor que el dividendo");
    } else if(n2==0){
        throw new Error("No se puede dividir entre 0");
    }
    return n1/n2;
}
function multiplicacion(n1,n2) {
    if ((isNaN(n1)) || (isNaN(n2))) {
        throw new Error("No son números");
    }
    return n1*n2;
}

function calculadora() {
    const forma=document.getElementById('formulario');
    const n1 = formulario['primerDigito'].value;
    const n2 = formulario['segundoDigito'].value;

    try {
        switch (document.getElementById()) {
            case document.getElementById('suma'):
                document.getElementById('resultado').value=`${suma(n1,n2)}`
                break;
            case document.getElementById('resta'):
                document.getElementById('resultado').value=`${resta(n1,n2)}`
                break;
            case document.getElementById('division'):
                document.getElementById('resultado').value=`${division(n1,n2)}`
                break;
            case document.getElementById('multiplicacion'):
                document.getElementById('resultado').value=`${multiplicacion(n1,n2)}`
                break;
        
            default:

                break;
        }     
    } catch (error) {
        document.getElementById('resultado').style.color='color';
        document.getElementById('resultado').value=error;
    }
}