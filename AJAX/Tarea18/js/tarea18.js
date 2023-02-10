

const SERVER="http://192.168.2.205:3000";

$('#listar').click(async function (e) { 
    e.preventDefault();
    
    const [catergorias,productos]= await Promise.all([
        getTabla('/categorias'),
        getTabla('/productos')
    ])

    catergorias.forEach((catergoria) => renderCategoria(catergoria));
    productos.forEach((producto) => renderProducto(producto));

    $('#borrar').removeAttr("disabled");
    $(this).attr("disabled",true);

});

async function getTabla(tabla) {
    const response = await fetch(`${SERVER}${tabla}`);

    if (!response.ok){
        throw `Error ${response.status}de la BBDD: ${response.statusText}`
    }

    const datos = await response.json();

    return datos;
}

function renderCategoria(cat) {
    let primerNivel=document.createElement('li');
    primerNivel.appendChild(document.createTextNode(cat.name));

    let segundoNivel=document.createElement('ol');
    segundoNivel.setAttribute('id',cat.id);
    primerNivel.appendChild(segundoNivel);

    document.getElementById('categorias').appendChild(primerNivel);
}

function renderProducto(prod) {
    let elemento= document.createElement('li');
    elemento.appendChild(document.createTextNode(prod.name));

    if (prod.cat==1){
        document.getElementById('1').appendChild(elemento);
    }else if(prod.cat==2){
        document.getElementById('2').appendChild(elemento);
    }
}

//---------------------------------------------------------------------------

$('#borrar').click(function (e) { 
    e.preventDefault();
    
    document.getElementById('categorias').innerHTML='';

    $(this).attr("disabled",true);
    $('#listar').removeAttr("disabled");
});
