class Productos{

    static contadorProductos=0;

    constructor(nombre,precio){
        this._nombre=nombre;
        this._precio=precio;
        this.idProducto=++Productos.contadorProductos; 
    }

    get nombre(){
        return this._nombre.toUpperCase();
    }

    set nombre(nombre){
        this._nombre=nombre.toUpperCase();
    }

    set precio(precio){
        this._precio=precio.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
    }

    get precio(){
        return this._precio.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
    }

    toString(){
        return ` ${this.idProducto}.${this.nombre} ${this.precio.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'})}€`;
    }
}
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
        Productos.contadorProductos=0;
    } 
}

