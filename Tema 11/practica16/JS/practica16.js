import { Productos } from "./Productos";

let lista=document.getElementById('lista');
let nombre=document.getElementById('idNombre');
let precio=document.getElementById('idPrecio');
let formulario=document.getElementById('formulario');
let arrayProductos=[];

document.getElementById('btnLimpiar').addEventListener('click',limpiar)
document.getElementById('btnEliminar').addEventListener('click',eliminar)
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

function guardar() {
    lista.innerHTML="";
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
    arrayProductos.push(new Productos(nombre.value,precio.value))
    localStorage.almacen= JSON.stringify(arrayProductos);
    
    arrayProductos.forEach(producto => {
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(producto.toString()));
        li.setAttribute('class','list-group-item');
        lista.appendChild(li);
    });
    
}

function limpiar() {
    lista.innerHTML="Lista limpiada";
}

function eliminar() {
    if (confirm('¿Quieres borrar los productos almacenados?')) {
        localStorage.removeItem('almacen');
        lista.innerHTML="";
        arrayProductos=[];
        Productos.contadorProductos=0;
    } 
}

