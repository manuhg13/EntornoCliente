let campo=document.getElementById('idTexto');
let boton=document.getElementById('boton');

if (localStorage.texto) {
    campo.value=localStorage.texto
}


function almacenar() {
    localStorage.setItem('Texto',campo.value);
}
