const timer= setTimeout(() => {
    const ventanaNueva= window.open("","","width=500, height=200, left=200,top=200" );
    let boton= ventanaNueva.document.createElement("input");
    boton.type="button";
    boton.value="Cierra esta ventana";
    boton.addEventListener("click",function() {
        ventanaNueva.close();
    });
    ventanaNueva.document.body.appendChild(boton);
}, 2000);
