//A. Abrir una nueva ventana de dimensiones 500x200px en la posición (200,100)
const vent= window.open("","","width=500, height=200, left=200,top=200" );

//B. Escribir en la nueva ventana (con document.write) un título H1 que diga ‘Hola javascritos del Claudio’.
vent.document.write("<h2>Que ya está hecho esto Santi</h2>");

//C. Al hacer clic sobre un botón de la ventana inicial que la ventana se desplace 40 px a la izquierda y 50 hacia abajo
function desplazarNv() {
    vent.moveBy(40,50);
}

//D. Al hacer clic sobre otro botón de la ventana incicial, que se cierre la nueva ventana.

function cerrar() {
    vent.close();
}