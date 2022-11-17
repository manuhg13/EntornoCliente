crearCuadrado("elcuadrado","300","lightblue");

function crearCuadrado(idCuadrado,lado, fondo) {
    let divCreado=document.createElement('div');

    divCreado.setAttribute('id',`${idCuadrado}`);
    divCreado.setAttribute('style',`width: ${lado}px; height: ${lado}px; background-color: ${fondo};`);

    document.body.appendChild(divCreado);

}