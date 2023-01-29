const SERVER="http://192.168.0.214:3000";

window.addEventListener('load', ()=>{
    //Buscar
    document.getElementById('buscarProducto').addEventListener('submit', (evento)=>{
        //Cancelas la accion predeterminada
        evento.preventDefault();
        let idProducto = document.getElementById('id').value;
        //Si el dato introducido no es un numero o esta vacio mostrar aviso
        if (isNaN(idProducto) || idProducto == '') {
            window.alert('Debe introducir un numero');
        } else {
            //Tratamos los errores con fetch
            fetch(`${SERVER}/productos/${idProducto}`)
            .then((response) => {
                //Comprobamos si se ha resuelto
                if (!response.ok) {
                    //Lanzamos un error
                    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                }
                //Devolvemos los datos JSON
                return response.json();
            })
            .then((datos) => {
                //Procesamos los datos
                let datosTabla = document.getElementById('datosTabla').innerHTML="";
                let fila = document.createElement('tr');

                let valorID = document.createElement('td');
                valorID.appendChild(document.createTextNode(datos.id));

                let valorNombre = document.createElement('td');
                valorNombre.appendChild(document.createTextNode(datos.name));

                let valorDescripcion = document.createElement('td');
                valorDescripcion.appendChild(document.createTextNode(datos.descrip));

                fila.appendChild(valorID,valorNombre,valorDescripcion);
                datosTabla.appendChild(fila);
            })
            .catch((error) => console.error(error));
        }
    });
});

window.addEventListener('load', ()=>{
    //Crear
    document.getElementById('crearProducto').addEventListener('submit', (evento)=>{
        //Cancelas la accion predeterminada
        evento.preventDefault();
        const nuevoProducto ={
            id: '',
            name: document.getElementById('name').value,
            descrip: document.getElementById('descrip').value,
        }

        //Petición POST
        fetch(`${SERVER}/productos`, {
            method: 'POST',
            body: JSON.stringify(nuevoProducto),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        .then(response => {
            //Comprobamos si se ha resuelto
            if (!response.ok) {
                //Lanzamos un error
                throw `Error ${response.status} de la BBDD: ${response.statusText}`;
            }
            //Devolvemos los datos JSON
            return response.json();
        })

        .then(datos => {
            window.alert('Datos recibidos')
            console.log(datos)
        })
        .catch((error) => console.error(error));
    });

});

window.addEventListener('load', ()=>{
    //Listar
    document.getElementById('listar').addEventListener('submit', (evento) => {
        //Cancelas la accion predeterminada
        evento.preventDefault();
        //Tratamos los errores con fetch
        fetch(`${SERVER}/productos`)
        .then((response) => {
            //Comprobamos si se ha resuelto
            if (!response.ok) {
                //Lanzamos un error
                throw `Error ${response.status} de la BBDD: ${response.statusText}`;
            }
            //Devolvemos los datos JSON
            return response.json();
        })
        .then((datos) => {
            //Procesamos los datos
            let datosTabla = document.getElementById('datosTabla').innerHTML="";
            datos.forEach(element => {
                let fila = document.createElement('tr');
                let valorID = document.createElement('td');
                valorID.appendChild(document.createTextNode(element['id']));

                let valorNombre = document.createElement('td');
                valorNombre.appendChild(document.createTextNode(element['name']));

                let valorDescripcion = document.createElement('td');
                valorDescripcion.appendChild(document.createTextNode(element['descrip']));

                fila.appendChild(valorID,valorNombre,valorDescripcion);
                datosTabla.appendChild(fila);
            });
        })
        .catch((error) => console.error(error));
    })
});
