function suma(n1,n2) {
    if ((isNaN(n1)) || (isNaN(n2))) {
        throw new Error("No son números")
    }
    return parseFloat(n1+n2);
}
function resta(n1,n2) {
    if ((isNaN(n1)) || (isNaN(n2))) {
        throw new Error("No son números")
    }
    return parseFloat(n1-n2);
}
function division(n1,n2) {
    if ((isNaN(n1)) || (isNaN(n2))) {
        throw new Error("No son números");
    } else if(n2>n1){
        throw new Error("Divisor mayor que el dividendo");
    } else if(n2==0){
        throw new Error("No se puede dividir entre 0");
    }
    return  parseFloat(n1/n2);
}
function multiplicacion(n1,n2) {
    if ((isNaN(n1)) || (isNaN(n2))) {
        throw new Error("No son números");
    }
    return  parseFloat(n1*n2);
}

function calculadoraSuma() {
    const forma=document.getElementById('formulario');
    const n1 = parseFloat(formulario['primerDigito'].value);
    const n2 = parseFloat(formulario['segundoDigito'].value);
    
    try {
        document.getElementById('resultado').value=`${suma(n1,n2)}`;                
    } catch (error) {
        document.getElementById('resultado').style.color='color';
        document.getElementById('resultado').value=error;
    }
}
function calculadoraResta() {
    const forma=document.getElementById('formulario');
    const n1 = parseFloat(formulario['primerDigito'].value);
    const n2 = parseFloat(formulario['segundoDigito'].value);
    try {
        document.getElementById('resultado').value=`${resta(n1,n2)}`;                
    } catch (error) {
        document.getElementById('resultado').style.color='color';
        document.getElementById('resultado').value=error;
    }
}
function calculadoraDivi() {
    const forma=document.getElementById('formulario');
    const n1 = parseFloat(formulario['primerDigito'].value);
    const n2 = parseFloat(formulario['segundoDigito'].value);

    try {
        document.getElementById('resultado').value=`${division(n1,n2)}`;                
    } catch (error) {
        document.getElementById('resultado').style.color='color';
        document.getElementById('resultado').value=error;
    }
}
function calculadoraMulti() {
    const forma=document.getElementById('formulario');
    const n1 = parseFloat(formulario['primerDigito'].value);
    const n2 = parseFloat(formulario['segundoDigito'].value);

    try {
        document.getElementById('resultado').value=`${multiplicacion(n1,n2)}`;                
    } catch (error) {
        document.getElementById('resultado').style.color='color';
        document.getElementById('resultado').value=error;
    }
}