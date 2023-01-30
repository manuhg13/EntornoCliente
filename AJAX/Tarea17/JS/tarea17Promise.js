const SERVER="http://192.168.2.205:4000";
const http = new XMLHttpRequest();
//------------------------------------------------------

window.addEventListener('load',()=>{
    $('#formulario').submit(function (e) { 
        e.preventDefault();
        
        let idProd=document.getElementById('id').value;

        if (isNaN(idProd) || idProd.trim()=="") {
            alert("Debes introducir un nº");
        }else{
            getProd(idProd)
            .then(datos=>{
                document.getElementById('cuerpo').innerHTML="";
                let linea =document.createElement('tr');

                let id=document.createElement('td');
                id.appendChild(document.createTextNode(datos.id));
                linea.appendChild(id);

                let nombre=document.createElement('td');
                nombre.appendChild(document.createTextNode(datos.name));
                linea.appendChild(nombre);

                let descrip=document.createElement('td');
                descrip.appendChild(document.createTextNode(datos.descrip));
                linea.appendChild(descrip);

                let funciones=document.createElement('td');
                let boton1=document.createElement('button');
                boton1.innerHTML='Modificar'
                boton1.setAttribute('class','btn btn-outline-dark m-1');
                funciones.appendChild(boton1);
                boton1.addEventListener('click',function(){
                    let padreBoton=this.parentNode;
                    let objetivo=padreBoton.parentNode;
                    document.getElementById('modId').value=objetivo.children[0].innerHTML;
                });
                linea.appendChild(funciones);

                document.getElementById('cuerpo').appendChild(linea);
            })

            .catch((error)=>console.error(error));
        }

    });
});

function getProd(id) { 
    return new Promise((resolve,reject)=>{
        
        http.open('GET',`${SERVER}/productos/${id}`,true);
        http.send();
        http.addEventListener('load',function(){
            if (http.status===200) {
                resolve(JSON.parse(http.responseText));
            }else{
                reject(`Error ${http.status} (${http.statusText}) ${id}`);
            }
        })
        http.addEventListener('error',()=>{reject('Error en la petición HTTP')});
    })
}

//-------------------------------------------------------------

$('#modificar').submit(function (e) { 
    e.preventDefault();
    let idProd=document.getElementById('modId').value
    let propiedad=document.getElementById('propiedad').value
    let datos=document.getElementById('datos').value

    if (isNaN(idProd) || idProd.trim()=="") {
        alert("Debes introducir un nº");
    }else{
        modProd(idProd,datos,propiedad)
        .then((response)=>{
            alert("Datos bien actualizados");
        })
        .catch((error)=>console.error(error));
    }

});

function modProd(id,datos) {
    return new Promise((resolve,reject)=>{
        http.open('PATCH',`${SERVER}/productos/${id}`,true);
        http.send(JSON.stringify({id:parseInt(id),[propiedad]:datos}));
        http.addEventListener('load',function(){
            if (http.status===200) {
                resolve(JSON.parse(http.responseText));
            }else{
                reject(`Error ${http.status} (${http.statusText}) ${id}`);
            }
        })
        http.addEventListener('error',()=>{reject('Error en la petición HTTP')});
    })
}

//--------------------------------------------------------------------------------

$('#introducir').submit(function (e) { 
    e.preventDefault();
    const prod={
        id: '',
        name:document.getElementById('name').value,
        descrip:document.getElementById('descrip').value
    }

    postProd(prod)

    .then(datos=>{
        alert("Datos bien");
    })
    .catch((error)=>console.error(error));
});

function postProd(prod) {
    return new Promise((resolve,reject)=>{
        
        http.open('POST',`${SERVER}/productos`,true);
        http.send(JSON.stringify(prod));
        http.addEventListener('load',function(){
            if (http.status===200) {
                resolve(JSON.parse(http.responseText));
            }else{
                reject(`Error ${http.status} (${http.statusText}) ${id}`);
            }
        })
        http.addEventListener('error',()=>{reject('Error en la petición HTTP')});
    })
}

//--------------------------------------------------------

$('#listar').click(function (e) { 
    e.preventDefault();
    
    getAllProd()

    .then((datos)=>{
        document.getElementById('cuerpo').innerHTML="";

        datos.forEach(element => {
            
            let linea =document.createElement('tr');

            let id=document.createElement('td');
            id.appendChild(document.createTextNode(element['id']));
            linea.appendChild(id);

            let nombre=document.createElement('td');
            nombre.appendChild(document.createTextNode(element['name']));
            linea.appendChild(nombre);

            let descrip=document.createElement('td');
            descrip.appendChild(document.createTextNode(element['descrip']));
            linea.appendChild(descrip);
            document.getElementById('cuerpo').appendChild(linea);

            let funciones=document.createElement('td');
            let boton1=document.createElement('button');
            boton1.innerHTML='Modificar'
            boton1.setAttribute('class','btn btn-outline-dark m-1');
            funciones.appendChild(boton1);
            boton1.addEventListener('click',function(){
            let padreBoton=this.parentNode;
            let objetivo=padreBoton.parentNode;
            document.getElementById('modId').value=objetivo.children[0].innerHTML;
        });
        linea.appendChild(funciones);
        });

    })

    .catch((error)=>console.error(error));
});

function getAllProd() {
    return new Promise((resolve,reject)=>{
        
        http.open('GET',`${SERVER}/productos`,true);
        http.send();
        http.addEventListener('load',function(){
            if (http.status===200) {
                resolve(JSON.parse(http.responseText));
            }else{
                reject(`Error ${http.status} (${http.statusText}) ${id}`);
            }
        })
        http.addEventListener('error',()=>{reject('Error en la petición HTTP')});
    })
}