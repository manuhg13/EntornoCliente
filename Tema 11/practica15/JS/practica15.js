class Productos{

    static contadorProductos=0;

    constructor(nombre,precio){
        this._nombre=nombre;
        this._precio=precio;
        this._idProducto=++Productos.contadorProductos; 
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
        return `${this.nombre} ${this.precio.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'})}`;
    }
}


document.getElementById('btnGuardar').addEventListener('click',guardar)

function guardar() {
    let nombre=document.getElementById('idNombre').value;
    let precio=document.getElementById('idPrecio').value;

    localStorage.setItem(nombre,precio);
}

function escribir() {
    let lista=document.getElementById('lista');
    
    lista.appendChild()
}
