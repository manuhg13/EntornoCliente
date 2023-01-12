let campo=document.getElementById('idTexto');
let boton=document.getElementById('boton');


function almacenar() {
    localStorage.setItem('Texto',campo.value);
}