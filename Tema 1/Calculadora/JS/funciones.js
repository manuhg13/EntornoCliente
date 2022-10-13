function suma(n1,n2) {
    if ((isNaN(n1)) || (isNaN(n2))) {
        throw new Error("No son números")
    }
    return n1+n2;
}
function resta(n1,n2) {
    return n1-n2;
}
function division(n1,n2) {
    return n1/n2;
}
function multiplicacion(n1,n2) {
    return n1*n2;
}

function calculadora() {
    const forma=document.getElementById('formulario');
    const n1 = formulario['primerDigito'].value;
    const n2 = formulario['segundoDigito'].value;

    try {
        document.getElementById('resultado').value=`${suma(n1,n2)}`
        document.getElementById('resultado').value=`${resta(n1,n2)}`
        document.getElementById('resultado').value=`${division(n1,n2)}`
        document.getElementById('resultado').value=`${multiplicacion(n1,n2)}`
    } catch (error) {
        document.getElementById('resultado').style.color='color';
        document.getElementById('')
    }
}