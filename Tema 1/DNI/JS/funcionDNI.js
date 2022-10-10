let dni=adivinarDni();
function adivinarDni() {
    const letrasDNI="TRWAGMYFPDXBNJZSQVHLCKE";
    let n= Number(prompt("Introduce el numero de dni sin letra"));
    let resto= n%23;
    letra=letrasDNI[resto];
    alert(`Tu DNI es ${n}${letra}`);
    let numeroEntero=n+letra;
    return numeroEntero
}

function validarDNI(dni) {
    const letrasDNI="TRWAGMYFPDXBNJZSQVHLCKE";
    let n = parseInt(dni);
    let letra=dni.substr(-1);
    let resto=n%23;
    let letraResto=letrasDNI[resto];
    if (letraResto===letra) {
        return true;
    } else {
        return false;
    }
}

if (validarDNI(dni)) {
    alert(`El dni es correcto`);
}else {
    alert(`El dni es incorrecto`)
}