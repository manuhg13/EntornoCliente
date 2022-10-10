/*function retirar(saldo, cantidad) {
    if (saldo<cantidad) {
        throw "Sando insuficiente"
    }
    return saldo-cantidad
}
try { 
    console.log(`Saldo nuevo ${retirar(1000,600)}€`);
} catch (error) {
    console.log(error);
}*/

let notas=[9.8, 3.2, 4.5, 6.7];
let notasVacio=[];

function calcularMedia(notas) {
    if (notas.length<1) {
        throw new Error("Sin valores");
    }    
	let suma=0;
	for (const nota of notas) {
	    suma+=nota;
	}	    
	return suma/notas.length;
}

try {    
    console.log(calcularMedia(notas));
    console.log(calcularMedia(notasVacio));
} catch (error) {
    console.log(error);
}


