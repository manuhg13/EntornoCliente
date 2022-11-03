/* a) Pon un escuchador al botón 1 de la página de ejemplo de DOM para que al hacer click se muestre el un
alert con ‘Click sobre botón 1*/

document.getElementById('boton1').addEventListener('click',function() {
    alert("Click en el boton 1");
});

/*b) Pon otro escuchador al mismo botón para que se abra otra ventana nueva (de 200 px de ancho y 100 de
alto) con un texto dentro que reze “Nueva ventana emergente”. Nota: Comprueba si hay diferencias si se
abre la página desde “Live Server” o directamente como archivo local.
*/
/*c) Pon otro listener al mismo botón para que al pasar el ratón sobre él se muestre debajo de los botones un
párrafo en rojo con la frase “Se va a abrir una ventana nueva”.
*/
/*d) Pon otro escuchador al mismo botón que al salir el cursor del ratón, desaparezca el párrafo del apartado
anterior.
*/
//e) Pon un escuchador al botón 2 que desactive el escuchador del primer apartado.*/ 