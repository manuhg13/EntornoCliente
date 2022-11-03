/* a) Pon un escuchador al botón 1 de la página de ejemplo de DOM para que al hacer click se muestre el un
alert con ‘Click sobre botón 1*/
function alertar() {
    alert("Click en el boton 1");
}
document.getElementById('button1').addEventListener('click',alertar);

/*b) Pon otro escuchador al mismo botón para que se abra otra ventana nueva (de 200 px de ancho y 100 de
alto) con un texto dentro que reze “Nueva ventana emergente”. Nota: Comprueba si hay diferencias si se
abre la página desde “Live Server” o directamente como archivo local.
*/
document.getElementById('button1').addEventListener('click',ventanuco);
function ventanuco() {
    let nuevaVentana=window.open("","","width=500, height=200, left=200,top=200" );
    nuevaVentana.document.write("<h2>Nueva ventana emergente</h2>");  
}
/*c) Pon otro listener al mismo botón para que al pasar el ratón sobre él se muestre debajo de los botones un
párrafo en rojo con la frase “Se va a abrir una ventana nueva”.
*/
function texto() {
    let parrafo=document.createElement('p');
    let texto=document.createTextNode("Se va a abrir una ventana nueva");
    parrafo.style.color="red";
    parrafo.appendChild(texto);
    document.body.appendChild(parrafo);

}

document.getElementById('button1').addEventListener('mouseenter',texto);

/*d) Pon otro escuchador al mismo botón que al salir el cursor del ratón, desaparezca el párrafo del apartado
anterior.
*/
function desaparece() {
    document.body.lastElementChild.remove();        
    
}
document.getElementById('button1').addEventListener('mouseleave',desaparece);


//e) Pon un escuchador al botón 2 que desactive el escuchador del primer apartado.*/ 

document.getElementById('button2').addEventListener('click',function () {  
    document.getElementById('button1').removeEventListener('click',alertar);
});