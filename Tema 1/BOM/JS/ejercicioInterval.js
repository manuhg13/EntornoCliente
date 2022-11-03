const timer= setTimeout(() => {
    const ventanaNueva= window.open("","","width=500, height=200, left=200,top=200" );
    let boton= ventanaNueva.document.createElement("input");
    boton.type="button";
    boton.value="Cierra esta ventana";
    boton.addEventListener("click",cerrar);
    ventanaNueva.document.body.appendChild(boton);

    function cerrar() {
        ventanaNueva.close();
    }

}, 2000);
