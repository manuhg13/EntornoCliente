let num=parseInt(prompt(`Escribe un número entero`));

const cubo = function (valor) {
    if (Number.isInteger(valor)) {
        return valor* valor * valor;
    }else {
        alert(`No has introducido un número entero`);
        return false
    }
}

console.log(cubo(num));
