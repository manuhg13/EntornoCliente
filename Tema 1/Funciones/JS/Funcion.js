
//--------------------------------------------------------------------------------------------

/*let base = prompt("Escribe la base:")
let exponente = prompt("Escribe el exponente:")

potencia(base, exponente);

function potencia(base, exponente) {
    alert(base + " elevado a " + exponente + " = " + base**exponente);
}*/

//--------------------------------------------------------------------------------------------

/*let resultado = sumar(8,2,3,9,3,1);

function sumar(){
    let result=0;
    for (let i = 0; i < arguments.length ; i++) {
        result += arguments[i];
    }

    return result
}

alert(`La suma es ${resultado}`);*/

//----------------------------------------------------------------------------------------------

/*const cuadrado = function (valor) {
    return valor* valor
}
const cubo = function (valor) {
    return valor* valor * valor
}

function aplicarFunción(dato, nombre_funcion) {
    return nombre_funcion(dato);
}

let num1 = aplicarFunción(3, cuadrado);
let num2 = aplicarFunción(2, cubo);*/

//---------------------------------------------------------------------------------------------

let potencia = (base,exponente) => base**exponente;
let num= 5;
console.log(`El cudrado de ${num} es ${potencia(num,2)}`);