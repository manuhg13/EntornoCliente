/*-----Calcular el área de un círculo dado el radio----------*/ 
function calcularCirculo (radio) {
    if (radio<=0){
        throw new Error("Radio negativo");
    } else if(typeof radio == 'string'){
        throw new Error("No es un valor numerico")
    }
    return Math.PI *Math.sqrt(radio); 
        
}
try {
    console.log(calcularCirculo(6.3));
} catch (error) {
    console.log(error);
}
/*----------- Calcular el perímetro de una circunferencia dado el radio-----------*/ 
function calcularCircunferencia(radio) {
    if (radio<=0){
        throw new Error("Radio negativo");
    } else if(typeof radio == 'string'){
        throw new Error("No es un valor numerico")
    }
    return 2*Math.PI *radio; 
}

try {
    console.log(calcularCircunferencia("pan"));
} catch (error) {
    console.error(error);
}
/*----------- Calcular el perímetro de un poligono dada la longitud de uno de sus lados-----------*/ 

function calcularRegularLong(longitud,lados) {
    if (lados<3){
        throw new Error("No tiene suficientes lados para ser regular");
    }else if (longitud<=0){
        throw new Error("No es un valor numérico");
    }else if(!Number.isInteger(lados)){
        throw new Error("Los lados deben ser enteros");
    }
    return longitud*lados;
}

try {
    console.log(calcularRegularLong(7.9,5));
} catch (error) {
    console.error(error);
}

/*----------- Calcular área de un polígono regular dada la longitud de uno de sus lados-----------*/ 

function areaRegular(longitud,lados) {
    let perimetro =0;
    try{
        perimetro=calcularRegularLong(longitud,lados);
    }catch (error){
        throw error
    }

    let alfa = 2*Math.PI/lados;

    let apotema=(longitud/2)/Math.tan((alfa/2));

    return (perimetro*apotema)/2

}
try {
    console.log(areaRegular(1,4));
} catch (error) {
    console.error(error);
}