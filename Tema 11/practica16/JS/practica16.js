import { Productos } from "./Productos.js";

let tabla=document.getElementById('cuerpo');
let nombreIn=document.getElementById('idNombre');
let precioIn=document.getElementById('idPrecio');
let formulario=document.getElementById('formulario');
let arrayProductos=[];

formulario.addEventListener('submit',function(evento) {
    evento.preventDefault();
    let valido=true;
    const inputs= formulario.querySelectorAll("input[required]");
    inputs.forEach(campo => {
        if (!campo.value) {
            valido=false;
        }
    });
    if(!valido){
        alert("Rellena todos los campos");
    }else{
        guardar();
    }
})

document.addEventListener('DOMContentLoaded',pintar);
function pintar() {
    tabla.innerHTML="";
    arrayProductos.forEach(producto => {
        let linea=document.createElement('tr');

        let id=document.createElement('td');
        id.appendChild(document.createTextNode(producto.idProducto));
        linea.appendChild(id);

        let nombre=document.createElement('td');
        nombre.appendChild(document.createTextNode(producto.nombre));
        linea.appendChild(nombre);

        let precio=document.createElement('td');
        precio.appendChild(document.createTextNode(producto.precio));
        linea.appendChild(precio);

        let funciones=document.createElement('td');
        let boton1=document.createElement('button');
        boton1.innerHTML='Eliminar';
        boton1.setAttribute('class','btn btn-danger m-1');
        funciones.appendChild(boton1);
        boton1.addEventListener('click',function() {
            let padreBoton=this.parentElement;
            let objetivo=padreBoton.parentNode;
            let valor=objetivo.children[0].innerHTML
            tabla.removeChild(objetivo);
            let indice= arrayProductos.findIndex( objeto=> objeto.idProducto===valor);
            arrayProductos.slice(indice,indice-1);
        });

        let boton2=document.createElement('button');
        boton2.innerHTML='Modificar';
        boton2.setAttribute('class','btn btn-info');
        boton2.addEventListener('click',function() {
            
        });
        funciones.appendChild(boton2);
        linea.appendChild(funciones);

        tabla.appendChild(linea);
    });
}

function guardar() {
    if (arrayProductos.length==0 && localStorage.almacen){
        let productosAlmacenados= localStorage.almacen;
        let productosParseados= JSON.parse(productosAlmacenados);
        productosParseados.forEach(element => {
            let nuevoProducto= new Productos();
            nuevoProducto.idProducto=element.idProducto;
            nuevoProducto.nombre=element._nombre;
            nuevoProducto.precio=element._precio;
            arrayProductos.push(nuevoProducto);

        });
    }
    arrayProductos.push(new Productos(nombreIn.value,precioIn.value))
    localStorage.almacen= JSON.stringify(arrayProductos);
    
    /*arrayProductos.forEach(producto => {
        let linea=document.createElement('tr');

        let id=document.createElement('td');
        id.appendChild(document.createTextNode(producto.idProducto));
        linea.appendChild(id);

        let nombre=document.createElement('td');
        nombre.appendChild(document.createTextNode(producto.nombre));
        linea.appendChild(nombre);

        let precio=document.createElement('td');
        precio.appendChild(document.createTextNode(producto.precio));
        linea.appendChild(precio);

        let funciones=document.createElement('td');
        let boton1=document.createElement('button');
        boton1.innerHTML='Eliminar';
        boton1.setAttribute('class','btn btn-danger m-1');
        funciones.appendChild(boton1);
        boton1.addEventListener('click',function() {
            let padreBoton=this.parentElement;
            let objetivo=padreBoton.parentNode;
            let valor=objetivo.children[0].innerHTML
            tabla.removeChild(objetivo);
            let indice= arrayProductos.findIndex( objeto=> objeto.idProducto===valor);
            arrayProductos.slice(indice,indice-1);
        });

        let boton2=document.createElement('button');
        boton2.innerHTML='Modificar';
        boton2.setAttribute('class','btn btn-info');
        boton2.addEventListener('click',function() {
            
        });
        funciones.appendChild(boton2);
        linea.appendChild(funciones);

        tabla.appendChild(linea);
    });*/

    pintar();
    
}

function modificar() {
    
}



