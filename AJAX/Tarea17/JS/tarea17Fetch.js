const SERVER="http://192.168.31.205:3000";

//--------------------------------------------------

window.addEventListener('load',()=>{
    $('#formulario').submit(function (evento) { 
        evento.preventDefault();
        let idProd=document.getElementById('id').value;

        if (isNaN(idProd) || idProd.trim()=="") {
            alert("Debes introducir un nº");
        }else{
            fetch(`${SERVER}/productos/${idProd}`)
            .then((response)=>{
                if (!response.ok) {
                    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                }

                return response.json();
            })

            .then((datos)=>{
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

                document.getElementById('cuerpo').appendChild(linea);
                
            })

            .catch((error)=>console.error(error));
        }
        
    });
    
});

//-----------------------------------------------------

document.getElementById('introducir').addEventListener('submit',function(e) {
    e.preventDefault();
    const prod={
        id: '',
        name:document.getElementById('name').value,
        descrip:document.getElementById('descrip').value
    }

    fetch(`${SERVER}/productos`,{
        method: 'POST',
        body: JSON.stringify(prod),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then((response)=>{
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }

        return response.json();
    })
    .then(datos=>{
        alert("Datos bien");
    })
    .catch((error)=>console.error(error));
});

$('#listar').click(function (e) { 
    e.preventDefault();
    fetch(`${SERVER}/productos`)
            .then((response)=>{
                if (!response.ok) {
                    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                }

                return response.json();
            })

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
                });

            })

            .catch((error)=>console.error(error));
});